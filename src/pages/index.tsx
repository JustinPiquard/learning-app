import React, { useContext } from 'react';
import {UserContext} from '../context/UserContext';

export const Home = (props: any) => 
{
    const context = useContext(UserContext);

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome {context.user.username}</p>
            <button onClick={context.logout}>Logout</button>
        </div>
    );
}