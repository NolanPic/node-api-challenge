import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Action from './Action';

const ProjectDetails = () => {
    const [project, setProject] = useState(null);
    const { id: projectId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/projects/${projectId}`)
            .then(res => setProject(res.data))
            .catch(err => console.warn(err));
    }, [projectId]);
    
    return project ? (
        <>
            <h3>{project.name}</h3>
            <h5>Actions</h5>
            {project.actions.length ? (
                project.actions.map(action => (
                    <Action key={action.id} action={action} />
                ))
            )
            :
            (
                <p>No actions yet.</p>
            )}
        </>
    )
    : (
        <p>Loading...</p>
    )
};

export default ProjectDetails;
