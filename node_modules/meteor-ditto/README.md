WIP METEOR-DITTO
============

**I'm still working on it**

This package contains an opinionated set of helpers to use with Redux on a
Meteor application.

![The pokemon named Ditto](./ditto.png)

_The name for this package comes from me playing too much Pokemon Go and this
package's weakness being the duplication of data_

Concept
-------

Install
-------

First install the package:

```
npm install --save meteor-ditto
```

Next setup the reducers.

```javascript
import { mongo } from 'meteor-ditto';

const reducers = combineReducers({
  mongo,
  (your other reducers)
});
```

Finally, connect the collections:

```javascript
import { connect as connectCollection } from 'meteor-ditto';

// Messages is an example of a Meteor collection
connectCollection(Messages, store)
```

Usage
-----

### Subscribing to publications

When you use `SubscriptionComponent` to compose your component, two functions
will be sent through the props: `subscribe` and `subscriptionReady`. The first
should be called inside a `componentWillMount` with the name of the publications
and it's arguments, the same way you would call `Meteor.subscribe(..)`. The
second accepts the name of a publication and sees if it's ready or not.

```javascript
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { SubscriptionComponent } from 'meteor-ditto';

class App extends Component {
  componentWillMount() {
    this.props.subscribe('messages', arg1, arg2);
  }

  render {
    return (
      <SomeComponent
        {...this.props}
        ready={this.subscriptionReady('messages')}
      />
    );
  }
}

App.propTypes = {
  subscribe: PropTypes.func.isRequired,
  subscriptionReady: PropTypes.func.isRequired,
};

export default connect(fn => fn)(SubscriptionComponent(App));
```

### Read from the store
