import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const Login = (props: any) => 
{
    const context = useContext(UserContext);
    
    return (
        <div>
            <form >
                <h1>Login </h1>
                <input 
                    type='text' 
                    name="username" 
                    value={context.user.username}
                    placeholder="UserName" 
                    onChange={e => context.mergeUserState({ username: e.target.value})}
                />
                <br/>
                <input 
                    type='text' 
                    name="password" 
                    value={context.user.password}
                    placeholder="Password"
                    onChange={e => context.mergeUserState({ password: e.target.value})}
                />
                <br/>
                <button type="submit" onClick={context.handleSubmit}>Submit</button>
            </form>
            {
                context.user.error &&
                <p>error : {context.user.errorMessage}</p>
            }
     </div>
    )
}