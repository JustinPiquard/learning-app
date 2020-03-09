import React, { useContext } from 'react';
import { isContext } from 'vm';
import { UserContext } from '../../context/UserContext';

export const About = (props: any) =>
{
    const context = useContext(UserContext);

    return (
        <div>
            <h1>About</h1>
            <p>Welcome {context.user.username}</p>
        </div>
        
        
    );
}