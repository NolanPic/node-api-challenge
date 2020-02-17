import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledProject = styled.li`
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};

    a {
        color: #fff;
    }
`;

const Project = ({ project }) => {
    return (
        <StyledProject><Link to={`/project/${project.id}`}>{project.name}</Link></StyledProject>
    );
};

export default Project;
