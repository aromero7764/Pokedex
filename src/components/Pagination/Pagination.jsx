import React, { useState } from 'react';

const Pagination = ({postsPerPage, totalPost, paginate, currentPage, setCurrentPage}) => {

    


    const pageNumber = []

    for(let i = 1; i <= Math.ceil(totalPost /postsPerPage); i++) {
        pageNumber.push(i)
    }

    const prevPage = () => {
        if(currentPage > 1) {
            paginate(currentPage -1)
            setCurrentPage(currentPage - 1)
        }
    }

    const nexpage = ()=> {
        if(currentPage < pageNumber.length ){
        paginate(currentPage +1)
        setCurrentPage(currentPage + 1)
    } 
}


    return (
        <footer className='is-fluid'>
            <div className="content has-text-centered">
                <nav className="pagination is-rounded" 
                                role="navigation" aria-label="pagination">
                    <a className="pagination-previous"
                                onClick={prevPage} disabled={(currentPage <= pageNumber[0])}>Previous</a>
                    
                    <a className="pagination-next" 
                            onClick={nexpage} disabled={(currentPage >= pageNumber.length)} >Next page</a>
                    <ul className="pagination-list">
                        
        
                        <li><a onClick={() => {
                                            paginate(pageNumber[0])
                                            setCurrentPage(pageNumber[0])}} 
                                    className="pagination-link" aria-label="Goto page 1">{pageNumber[0]}</a></li>
                           
                           <li><span className="pagination-ellipsis">&hellip;</span></li>
                            
                                <li><a onClick={prevPage} 
                                                className={`pagination-link ${(currentPage === 1)? 'is-hidden': '' }`}>
                                                    {(currentPage-1)}</a></li> 
                                
                                <li><a onClick={() => paginate(currentPage)} 
                                                className="pagination-link is-current">
                                                    {currentPage}</a></li>
                                
                                <li><a onClick={nexpage} 
                                                className={`pagination-link ${(currentPage === pageNumber.length)? 'is-hidden': '' }`}>
                                                    {currentPage +1}</a></li>

                            <li><span className="pagination-ellipsis">&hellip;</span></li>

                            <li><a onClick={() => {
                                                    paginate(pageNumber[pageNumber.length-1])
                                                    setCurrentPage(pageNumber.length)
                                                }} 
                                    className="pagination-link">
                                    {pageNumber.length}</a></li>
                    </ul>
                    </nav>
                    </div>
                </footer>
    );
};

export default Pagination;
