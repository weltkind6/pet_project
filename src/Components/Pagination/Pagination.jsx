import React from 'react';

const Pagination = ({usersPerPage, totalUsers, goPaginate}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
                {
                    pageNumbers.map(number =>
                        <li className="page-item" key={number}>
                            <a className="page-link" href="#" onClick={() => goPaginate(number)}>{number}</a>
                        </li>)
                }
            </ul>
        </nav>
    );
};

export default Pagination;