import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PaginationItem from './PaginationItem';

import {
    PAGINATION_SIZE
} from '../../constants';

export default class Base extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {
            handlePageClick,
            currentPage,
            totalDocuments,
            maxDocumentsInPage,
        } = this.props;
        let totalPages = totalDocuments > maxDocumentsInPage
            ? totalDocuments / maxDocumentsInPage ^ 0
            : 1;

        if (totalPages <= 1) {
            return null;
        }

        const pagination = [];

        const isStart = currentPage <= PAGINATION_SIZE;
        const isEnd = currentPage >= totalPages - PAGINATION_SIZE;
        const isAverage = !isStart && !isEnd;
        const isFitInOneLine = totalPages <= PAGINATION_SIZE + 2;

        let startCount;
        let endCount;

        if (isFitInOneLine) {
            startCount = 2;
            endCount = totalPages - 1;
        } else if (isStart) {
            startCount = 2;
            endCount = PAGINATION_SIZE + 1;
        } else if (isEnd) {
            startCount = totalPages - PAGINATION_SIZE - 1;
            endCount = totalPages - 1;
        } else {
            const average = Math.floor(PAGINATION_SIZE / 2);
            startCount = currentPage - average;
            endCount = currentPage + average;
        }

        for (let i = startCount; i <= endCount; i++) {
            const isCurrentItem = i === currentPage;

            pagination.push(
                <PaginationItem
                    handlePageClick={handlePageClick}
                    currentPage={isCurrentItem}
                    key={i}
                    page={i}
                />
            );
        }

        if (!isFitInOneLine && (isAverage || isStart)) {
            pagination.push(
                <PaginationItem
                    key="ellipsis-end"
                    ellipsis
                />
            );
        }

        pagination.push(
            <PaginationItem
                handlePageClick={handlePageClick}
                key="last"
                toLast
                page={totalPages}
                currentPage={currentPage === totalPages}
            />
        );

        if (currentPage !== totalPages) {
            pagination.push(
                <PaginationItem
                    handlePageClick={handlePageClick}
                    key="next"
                    next
                    page={currentPage + 1}
                />
            );
        }

        if (!isFitInOneLine && (isAverage || isEnd)) {
            pagination.unshift(
                <PaginationItem
                    key="ellipsis-start"
                    ellipsis
                />
            );
        }

        pagination.unshift(
            <PaginationItem
                handlePageClick={handlePageClick}
                key="first"
                toFirst
                page={1}
                currentPage={currentPage === 1}
            />
        );

        if (currentPage !== 1) {
            pagination.unshift(
                <PaginationItem
                    handlePageClick={handlePageClick}
                    key="prev"
                    prev
                    page={currentPage - 1}
                />
            );
        }

        return (
            <ul className="pagination pagination-sm">{pagination}</ul>
        );
    }
}

const propTypes = {
    handlePageClick     : PropTypes.func,
    currentPage         : PropTypes.number,
    totalDocuments      : PropTypes.number,
    maxDocumentsInPage  : PropTypes.number,
};
const defaultProps = {};

Base.propTypes = propTypes;
Base.defaultProps = defaultProps;