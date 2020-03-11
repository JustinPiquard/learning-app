import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/index';
import { About } from './pages/about'
import { UserContext } from './context/UserContext';
import { Login } from './pages/login';
import { MenuAppBar } from './components/menuAppBar'
import { Role } from './pages/role';
import { User } from './pages/user';

const AppRouter = (props: any) =>
{
    const context = useContext(UserContext);
    var isLogin = (context !== undefined && context.user.isLogin) ? true : false;

    return(
        <Router>
            <div>
                { isLogin && <MenuAppBar /> }
                { !isLogin &&
                    <Route path="/" exact component={Login} /> 
                }  
                { isLogin &&
                <React.Fragment>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/role" exact component={Role} />
                    <Route path="/user" component={User} />
                </React.Fragment>              
                }
            </div>
        </Router>
    );
}

export default AppRouter;