import React, { useContext } from 'react';
import RestaurantContext from '../../context/Restaurant/RestaurantContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Info from '@material-ui/icons/Info';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    textDecoration: 'none',
  },
}));

export default function MenuAppBar({ onChangeOpenLeftDrawer, onChangeOpenRightDrawer }) {
  const classes = useStyles();
  const restaurantContext = useContext(RestaurantContext);

  const handleMainMenuButtom = () => {
    onChangeOpenLeftDrawer();
  }

  const handleSecundaryMenuButtom = () => {
    onChangeOpenRightDrawer();
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={handleMainMenuButtom}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} component={Link} to='/'>
            {restaurantContext.restaurant?.nombre}
          </Typography>
          <div>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleSecundaryMenuButtom}
              color="inherit"
            >
              <Info />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}