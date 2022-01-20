import { Fragment, useContext } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import ShoppingCartContext from '../../context/ShoppingCart/ShoppingCartContext';
import { Fab } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { LocalMall } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const CartButton = () => {
  const classes = useStyles();
  const history = useHistory();
  const { total } = useContext(ShoppingCartContext);
  const location = useLocation();
  const isEnable = location.pathname === '/carrito' ? false : true;
  const totalCart = total ? total : 0;
  const handleGoToCart = () => {
    history.push(`/carrito`);
  };
  return (
    <Fragment>
      {isEnable ? (
        <Fab variant="extended" aria-label="Cart" className={classes.fab} color="primary" onClick={handleGoToCart}>
          <LocalMall />{' $' + totalCart}
        </Fab>) : null
      }
    </Fragment>
  );
}

export default CartButton;