import React from 'react';
import css from "./projects.module.css";
import {Pagination} from "react-bootstrap";
import CreateProject from "./CreateProject";
import {Link} from "react-router-dom";
import ShowProjectsArray from "./showProjectsArray";

const Projects = (props) => {
    const handleFirstSelect = () => {
        props.setFirstPage();
        props.getPaginationProjectsThunkCreator(props.currentPage,props.numberForPage)
    };
    const handleLastSelect = () => {
        props.setLastPage();
        props.getPaginationProjectsThunkCreator(props.currentPage,props.numberForPage)
    };

    const handlePrevSelect = () => {
        props.setCurrentPage(props.currentPage - 1);
        props.getPaginationProjectsThunkCreator(props.currentPage,props.numberForPage)
    };
    const handleNextSelect = () => {
        props.setCurrentPage(props.currentPage + 1);
        props.getPaginationProjectsThunkCreator(props.currentPage,props.numberForPage)
    };


    const onclickNewProject = () => {
        return (<>
                <CreateProject/>
            </>
        )
    };

    return (<div>
            <div>
                <Link to="/newproject" onClick={onclickNewProject}>New Project</Link>
            </div>
            <div>
                <Pagination className={css.pagination}>
                    <Pagination.First onClick={handleFirstSelect}/>
                    <Pagination.Ellipsis/>
                    <Pagination.Prev onClick={handlePrevSelect}/>
                    <Pagination.Item>{props.currentPage + 1}</Pagination.Item>
                    <Pagination.Next onClick={handleNextSelect}/>
                    <Pagination.Ellipsis/>
                    <Pagination.Last onClick={handleLastSelect}/>
                </Pagination>

            </div>
           <ShowProjectsArray projects={props.projects}/>

            </div>
    )

};

export default Projects;
