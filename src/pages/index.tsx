import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

export function Index()
{
    const context = useContext(UserContext);

    const onClick = () => {
        var t = context.getUserName();
        console.log("test",t);
    }
    return (
        <div>
            <h2>Home</h2>
            <button onClick={onClick}>click</button>
        </div>
    )
}