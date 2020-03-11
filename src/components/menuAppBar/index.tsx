import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { UserContext } from '../../context/UserContext';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const MenuAppBar = (props: any) => {
  const userContext = useContext(UserContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorNavigation, setAnchorNavigation] = React.useState(null);
  const open = Boolean(anchorEl);
  const openNavigation = Boolean(anchorNavigation);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuNavigation = (event: any) => {
    setAnchorNavigation(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseNavigation = () => {
    setAnchorNavigation(null);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
            <IconButton
                aria-label="menu"
                aria-controls="menu-appbarHamburger"
                aria-haspopup="true"
                onClick={handleMenuNavigation}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            <Menu
                id="menu-appbarHamburger"
                anchorEl={anchorNavigation}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={openNavigation}
                onClose={handleCloseNavigation}
              >
                <MenuItem onClick={handleCloseNavigation} component={Link} to="/">Home</MenuItem>
                <MenuItem onClick={handleCloseNavigation} component={Link} to="/about">About</MenuItem>
                <MenuItem onClick={handleCloseNavigation} component={Link} to="/role">Role</MenuItem>
                <MenuItem onClick={handleCloseNavigation} component={Link} to="/user">User</MenuItem>
              </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={userContext.logout}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
