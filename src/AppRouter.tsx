import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from './pages';
import { About } from './pages/about'
import { UserProvider, UserContext } from './context/UserContext';

const AppRouter = (props: any) =>
{
    const context = useContext(UserContext);
    var isLogin = (context !== undefined && context.user.isLogin) ? true : false;
    
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
                {(!isLogin ? <Route path="/" exact component={Index} /> : <Route path="/" exact component={About} />)}
                <Route path="/about" component={About} />
            </div>
        </Router>
    );
}

export default AppRouter;