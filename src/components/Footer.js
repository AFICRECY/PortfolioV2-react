import React from 'react';
import NavTabs from './NavTabs';

function Footer({currentPage,handlePageChange}) {
    return (
        <div>
            <div>
            <h1>
                Hello!
            </h1>
        </div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    )
}
export default Footer;