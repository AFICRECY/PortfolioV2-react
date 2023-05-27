import React from 'react';
import NavTabs from './NavTabs';

function ProjectCard({currentPage,handlePageChange}) {
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
export default ProjectCard;