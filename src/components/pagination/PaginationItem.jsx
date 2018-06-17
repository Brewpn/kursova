import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import autobind from 'autobind-decorator';

export default class PaginationItem extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    @autobind
    handleClick() {
        const { handlePageClick, page } = this.props;

        handlePageClick(page);
    }

    render() {
        const {
            page,
            currentPage,
            toFirst,
            prev,
            next,
            toLast,
            ellipsis
        } = this.props;
        let content;

        if (toFirst) {
            content = (<i className={classNames('page-link', { active: currentPage })} onClick={this.handleClick}>{page}</i>);
        } else if (prev) {
            content = (<i onClick={this.handleClick} className="page-link icon-arrow-down icon-rotate-90"/>);
        } else if (next) {
            content = (<i onClick={this.handleClick} className="page-link icon-arrow-down icon-rotate-270"/>);
        } else if (toLast) {
            content = (<i className={classNames('page-link', { active: currentPage })} onClick={this.handleClick}>{page}</i>);
        } else if (currentPage) {
            content = (<i className="page-link active">{page}</i>);
        } else if (ellipsis) {
            content = (<i onClick={this.handleClick} className=""/>);
        } else {
            content = (<i onClick={this.handleClick} className="page-link">{page}</i>);
        }

        return (
            <li className="page-item">{content}</li>
        );
    }
}

const propTypes = {
    page           : PropTypes.number,
    currentPage    : PropTypes.bool,
    toFirst        : PropTypes.bool,
    prev           : PropTypes.bool,
    next           : PropTypes.bool,
    toLast         : PropTypes.bool,
    ellipsis       : PropTypes.bool,
    handlePageClick: PropTypes.func
};
const defaultProps = {};

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;