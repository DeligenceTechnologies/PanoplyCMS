react-bootstrap-pagination
=================

This package provides a bootstrap 3 paginator ReactJS class to be used with the meteor [kurounin:pagination](https://atmospherejs.com/kurounin/pagination) package.

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![license][license-image]][license-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/react-bootstrap-pagination.svg?style=flat-square
[npm-url]: http://www.npmjs.com/package/react-bootstrap-pagination
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[license-image]: https://img.shields.io/npm/l/react-bootstrap-pagination.svg?style=flat-square
[license-url]: https://www.npmjs.com/package/react-bootstrap-pagination
[download-image]: https://img.shields.io/npm/dt/react-bootstrap-pagination.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/react-bootstrap-pagination


## install

[![react-bootstrap-pagination](https://nodei.co/npm/react-bootstrap-pagination.png)](https://www.npmjs.com/package/react-bootstrap-pagination)

# Usage


```js
import BootstrapPaginator from 'react-bootstrap-pagination';

<BootstrapPaginator pagination={this.pagination} limit={10} containerClass='text-center' />
```

Available class properties are:
* `pagination`: pagination instance
* `limit`: maximum number of page links to display (defaults to **10**)
* `containerClass`: optional container class for the paginator
