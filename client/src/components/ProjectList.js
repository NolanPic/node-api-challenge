import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './Project';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/projects/')
            .then(res => {
                setProjects(res.data);
            })
            .catch(err => console.warn(err));
    }, []);
    
    return (
        <ul>
            {projects.length ? projects.map(project => (
                <Project key={project.id} project={project} />
            ))
            : (
                <p>No projects</p>
            )}
        </ul>
    );
};

export default ProjectList;
