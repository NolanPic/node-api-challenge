import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledAction = styled.li`
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};

    a {
        color: #fff;
    }
`;

const Action = ({ action }) => {
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setCompleted(action.completed);
    });

    return (
        <StyledAction>{action.description}</StyledAction>
    );
};

export default Action;
