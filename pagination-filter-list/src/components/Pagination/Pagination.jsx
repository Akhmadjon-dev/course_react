import React from 'react'
import _ from 'lodash';
import propTypes from 'prop-types';

const Pagination = props => {
    const {itemsCount, pageSize, currentPage, onPageClick} = props
    const pageCount = Math.ceil(itemsCount / pageSize);
    if(pageCount === 1) return null;
    console.log(pageCount);
    const pages = _.range(1, pageCount + 1);
    return (
        <div>
            <nav>
                <ul className="pagination">
                    {pages.map(item => (
                        <li style={{cursor:"pointer"}} key={item} className={currentPage === item ? "page-item active": "page-item"}>
                            <a onClick={() => {onPageClick(item)}} className="page-link">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

Pagination.propTypes ={itemsCount: propTypes.number.isRequired
    , pageSize: propTypes.number.isRequired, currentPage: propTypes.number.isRequired, onPageClick:
    propTypes.func.isRequired}

export default Pagination
