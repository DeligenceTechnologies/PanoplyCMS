import React from 'react';

export default class GridPaging extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedPages: [],
    };
    this.setDisplayedPages = this.setDisplayedPages.bind(this);
    this.handleClickPage = this.handleClickPage.bind(this);
    this.handleClickShowPrevious = this.handleClickShowPrevious.bind(this);
    this.handleClickShowNext = this.handleClickShowNext.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  componentWillMount() {
    this.setDisplayedPages(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setDisplayedPages(nextProps);
  }

  getIntArray(min, max) {
    const result = [];

    for (; min < max; ++min) {
      result.push(min);
    }

    return result;
  }

  setDisplayedPages(props) {
    if (!props.pagination && props.pagination.ready()) return null;

    const pageCount = props.pagination.totalPages();
    const current = props.pagination.currentPage();
    let min = 0;
    let displayedPages = this.state.displayedPages;

    if (pageCount > props.limit) {
      if (current > props.limit / 2) {
        if (current > pageCount - (props.limit / 2)) {
          min = pageCount - props.limit;
        } else {
          min = Math.floor(current - (props.limit / 2));
        }
      }

      displayedPages = this.getIntArray(min + 1, min + 1 + props.limit);
    } else {
      displayedPages = this.getIntArray(1, pageCount + 1);
    }

    if (displayedPages !== this.state.displayedPages) {
      this.setState({ displayedPages });
    }

    return false;
  }

  handleClickPage(page, event) {
    const pagination = this.props.pagination;

    if (!pagination || !pagination.totalPages) return null;

    if (page > 0 && page <= pagination.totalPages()) {
      pagination.currentPage(page);
    }

    event.preventDefault();
    return false;
  }

  handleClickShowPrevious(event) {
    const min = Math.max(1, this.state.displayedPages[0] - this.props.limit);
    const displayedPages = this.getIntArray(min, min + this.props.limit);

    if (displayedPages !== this.state.displayedPages) {
      this.setState({ displayedPages });
    }

    event.preventDefault();
  }

  handleClickShowNext(event) {
    const pagination = this.props.pagination;

    if (!pagination || !pagination.totalPages) return null;

    const pageCount = pagination.totalPages();
    const min = 1 + Math.min(
      pageCount - this.props.limit,
      this.state.displayedPages[this.state.displayedPages.length - 1]
    );
    const displayedPages = this.getIntArray(min, min + this.props.limit);

    if (displayedPages !== this.state.displayedPages) {
      this.setState({ displayedPages });
    }

    event.preventDefault();
    return false;
  }

  renderPage(page) {
    const pagination = this.props.pagination;

    if (!pagination || !pagination.currentPage) return null;

    const liClass = (pagination.currentPage() === page ? 'active' : '');

    return (
      <li key={`page ${page}`} className={liClass}>
        <a
          href="#"
          className="page-link"
          title={`Go to page ${page}`}
          onClick={this.handleClickPage.bind(this, page)}
        >{page}</a>
      </li>
    );
  }

  renderFirstPage() {
    if (this.state.displayedPages.length && this.state.displayedPages[0] > 1) {
      return this.renderPage(1);
    }

    return null;
  }

  renderPreviousPages() {
    if (this.state.displayedPages.length && this.state.displayedPages[0] > 2) {
      return (
        <li>
          <a
            href="#"
            className="show-prev"
            title="Show previous pages"
            onClick={this.handleClickShowPrevious}
          >...</a>
        </li>
      );
    }

    return null;
  }

  renderNextPages() {
    const pagination = this.props.pagination;

    if (!pagination || !pagination.totalPages) return null;

    if (
      this.state.displayedPages.length
      && this.state.displayedPages[this.state.displayedPages.length - 1] < pagination.totalPages() - 1
    ) {
      return (
        <li>
          <a
            href="#"
            className="show-prev"
            title="Show next pages"
            onClick={this.handleClickShowNext}
          >...</a>
        </li>
      );
    }

    return null;
  }

  renderLastPage() {
    const pagination = this.props.pagination;

    if (!pagination || !pagination.totalPages) return null;

    if (
      this.state.displayedPages.length
      && this.state.displayedPages[this.state.displayedPages.length - 1] < pagination.totalPages()
    ) {
      return this.renderPage(pagination.totalPages());
    }

    return null;
  }

  render() {
    const pagination = this.props.pagination;
    let containerClass = 'pagination-container';
	
    if (this.props.containerClass.length) {
      containerClass += ' ' + this.props.containerClass;
    }

    if (
      !pagination
      || !pagination.ready()
      || pagination.totalPages() <= 1
      || !this.props.limit
    ) {
      return (<div className={containerClass}></div>);
    }

    return (
      <div className={containerClass}>
        <ul className="pagination">
          <li className={pagination.currentPage() === 1 ? 'disabled' : ''}>
            <a
              href="#"
              className="previous-page"
              title="Previous page"
              onClick={this.handleClickPage.bind(this, pagination.currentPage() - 1)}
			  > &lt; </a>
          </li>
          {this.renderFirstPage()}
          {this.renderPreviousPages()}
          {this.state.displayedPages.map(this.renderPage)}
          {this.renderNextPages()}
          {this.renderLastPage()}
          <li className={pagination.currentPage() === pagination.totalPages() ? 'disabled' : ''}>
            <a
              href="#"
              className="next-page"
              title="Next page"
              onClick={this.handleClickPage.bind(this, pagination.currentPage() + 1)}
			  > &gt; </a>
          </li>
        </ul>
      </div>
    );
  }
}

GridPaging.propTypes = {
  error: React.PropTypes.any,
  pagination: React.PropTypes.object,
  pageCount: React.PropTypes.number,
  limit: React.PropTypes.number,
  page: React.PropTypes.number,
  containerClass: React.PropTypes.string,
};

GridPaging.defaultProps = {
  containerClass: '',
  limit: 10,
  pagination: null,
};
