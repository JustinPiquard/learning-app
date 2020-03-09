import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from './pages';
import { About } from './pages/about'
import { UserContext, UserProvider } from './UserContext';
import { UserInterface } from './Interface';

function AppRouter()
{
const user:UserInterface = {
    username:"Justin"
}


    const getUserName = () => {
        return user.username;
    };
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <UserContext.Provider value={{user: user, getUserName: getUserName}}>
                <Route path="/" exact component={Index} />
                <Route path="/about" component={About} />
                </UserContext.Provider>
            </div>
        </Router>
    );
}

export default AppRouter;