import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

    const handleComplete = id => {
        const isComplete = !completed;
        setCompleted(isComplete);
        axios.put(`http://localhost:5000/api/actions/${id}`, { completed: isComplete ? 1 : 0 })
            .then(res => console.log(res))
            .catch(err => {
                console.warn(err);
                // set back to previous completed state
                setCompleted(!isComplete);
            });
    };

    return (
        <StyledAction onClick={() => handleComplete(action.id)} completed={action.completed}>{action.description}</StyledAction>
    );
};

export default Action;
