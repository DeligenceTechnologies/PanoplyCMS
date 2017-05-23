(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.pagination = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var GridPaging = function (_React$Component) {
    _inherits(GridPaging, _React$Component);

    function GridPaging(props) {
      _classCallCheck(this, GridPaging);

      var _this = _possibleConstructorReturn(this, (GridPaging.__proto__ || Object.getPrototypeOf(GridPaging)).call(this, props));

      _this.state = {
        displayedPages: []
      };
      _this.setDisplayedPages = _this.setDisplayedPages.bind(_this);
      _this.handleClickPage = _this.handleClickPage.bind(_this);
      _this.handleClickShowPrevious = _this.handleClickShowPrevious.bind(_this);
      _this.handleClickShowNext = _this.handleClickShowNext.bind(_this);
      _this.renderPage = _this.renderPage.bind(_this);
      return _this;
    }

    _createClass(GridPaging, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.setDisplayedPages(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setDisplayedPages(nextProps);
      }
    }, {
      key: 'getIntArray',
      value: function getIntArray(min, max) {
        var result = [];

        for (; min < max; ++min) {
          result.push(min);
        }

        return result;
      }
    }, {
      key: 'setDisplayedPages',
      value: function setDisplayedPages(props) {
        if (!props.pagination && props.pagination.ready()) return null;

        var pageCount = props.pagination.totalPages();
        var current = props.pagination.currentPage();
        var min = 0;
        var displayedPages = this.state.displayedPages;

        if (pageCount > props.limit) {
          if (current > props.limit / 2) {
            if (current > pageCount - props.limit / 2) {
              min = pageCount - props.limit;
            } else {
              min = Math.floor(current - props.limit / 2);
            }
          }

          displayedPages = this.getIntArray(min + 1, min + 1 + props.limit);
        } else {
          displayedPages = this.getIntArray(1, pageCount + 1);
        }

        if (displayedPages !== this.state.displayedPages) {
          this.setState({ displayedPages: displayedPages });
        }

        return false;
      }
    }, {
      key: 'handleClickPage',
      value: function handleClickPage(page, event) {
        var pagination = this.props.pagination;

        if (!pagination || !pagination.totalPages) return null;

        if (page > 0 && page <= pagination.totalPages()) {
          pagination.currentPage(page);
        }

        event.preventDefault();
        return false;
      }
    }, {
      key: 'handleClickShowPrevious',
      value: function handleClickShowPrevious(event) {
        var min = Math.max(1, this.state.displayedPages[0] - this.props.limit);
        var displayedPages = this.getIntArray(min, min + this.props.limit);

        if (displayedPages !== this.state.displayedPages) {
          this.setState({ displayedPages: displayedPages });
        }

        event.preventDefault();
      }
    }, {
      key: 'handleClickShowNext',
      value: function handleClickShowNext(event) {
        var pagination = this.props.pagination;

        if (!pagination || !pagination.totalPages) return null;

        var pageCount = pagination.totalPages();
        var min = 1 + Math.min(pageCount - this.props.limit, this.state.displayedPages[this.state.displayedPages.length - 1]);
        var displayedPages = this.getIntArray(min, min + this.props.limit);

        if (displayedPages !== this.state.displayedPages) {
          this.setState({ displayedPages: displayedPages });
        }

        event.preventDefault();
        return false;
      }
    }, {
      key: 'renderPage',
      value: function renderPage(page) {
        var pagination = this.props.pagination;

        if (!pagination || !pagination.currentPage) return null;

        var liClass = pagination.currentPage() === page ? 'active' : '';

        return _react2.default.createElement(
          'li',
          { key: 'page ' + page, className: liClass },
          _react2.default.createElement(
            'a',
            {
              href: '#',
              className: 'page-link',
              title: 'Go to page ' + page,
              onClick: this.handleClickPage.bind(this, page)
            },
            page
          )
        );
      }
    }, {
      key: 'renderFirstPage',
      value: function renderFirstPage() {
        if (this.state.displayedPages.length && this.state.displayedPages[0] > 1) {
          return this.renderPage(1);
        }

        return null;
      }
    }, {
      key: 'renderPreviousPages',
      value: function renderPreviousPages() {
        if (this.state.displayedPages.length && this.state.displayedPages[0] > 2) {
          return _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                href: '#',
                className: 'show-prev',
                title: 'Show previous pages',
                onClick: this.handleClickShowPrevious
              },
              '...'
            )
          );
        }

        return null;
      }
    }, {
      key: 'renderNextPages',
      value: function renderNextPages() {
        var pagination = this.props.pagination;

        if (!pagination || !pagination.totalPages) return null;

        if (this.state.displayedPages.length && this.state.displayedPages[this.state.displayedPages.length - 1] < pagination.totalPages() - 1) {
          return _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                href: '#',
                className: 'show-prev',
                title: 'Show next pages',
                onClick: this.handleClickShowNext
              },
              '...'
            )
          );
        }

        return null;
      }
    }, {
      key: 'renderLastPage',
      value: function renderLastPage() {
        var pagination = this.props.pagination;

        if (!pagination || !pagination.totalPages) return null;

        if (this.state.displayedPages.length && this.state.displayedPages[this.state.displayedPages.length - 1] < pagination.totalPages()) {
          return this.renderPage(pagination.totalPages());
        }

        return null;
      }
    }, {
      key: 'render',
      value: function render() {
        var pagination = this.props.pagination;
        var containerClass = 'pagination-container';

        if (this.props.containerClass.length) {
          containerClass += ' ' + this.props.containerClass;
        }

        if (!pagination || !pagination.ready() || pagination.totalPages() <= 1 || !this.props.limit) {
          return _react2.default.createElement('div', { className: containerClass });
        }

        return _react2.default.createElement(
          'div',
          { className: containerClass },
          _react2.default.createElement(
            'ul',
            { className: 'pagination' },
            _react2.default.createElement(
              'li',
              { className: pagination.currentPage() === 1 ? 'disabled' : '' },
              _react2.default.createElement(
                'a',
                {
                  href: '#',
                  className: 'previous-page',
                  title: 'Previous page',
                  onClick: this.handleClickPage.bind(this, pagination.currentPage() - 1)
                },
                ' < '
              )
            ),
            this.renderFirstPage(),
            this.renderPreviousPages(),
            this.state.displayedPages.map(this.renderPage),
            this.renderNextPages(),
            this.renderLastPage(),
            _react2.default.createElement(
              'li',
              { className: pagination.currentPage() === pagination.totalPages() ? 'disabled' : '' },
              _react2.default.createElement(
                'a',
                {
                  href: '#',
                  className: 'next-page',
                  title: 'Next page',
                  onClick: this.handleClickPage.bind(this, pagination.currentPage() + 1)
                },
                ' > '
              )
            )
          )
        );
      }
    }]);

    return GridPaging;
  }(_react2.default.Component);

  exports.default = GridPaging;


  GridPaging.propTypes = {
    error: _react2.default.PropTypes.any,
    pagination: _react2.default.PropTypes.object,
    pageCount: _react2.default.PropTypes.number,
    limit: _react2.default.PropTypes.number,
    page: _react2.default.PropTypes.number,
    containerClass: _react2.default.PropTypes.string
  };

  GridPaging.defaultProps = {
    containerClass: '',
    limit: 10,
    pagination: null
  };
});