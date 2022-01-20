import './index.css';
import { useContext, useEffect } from 'react';
import RestaurantServices from '../../services/database/restaurant';
import RestaurantContext from "../../context/Restaurant/RestaurantContext";
import AppContext from "../../context/App/AppContext";

const Layout = ({ children }) => {
  const restaurantContext = useContext(RestaurantContext);
  const appContext = useContext(AppContext);
  useEffect(() => {
    appContext.openLoadingAlert();
    RestaurantServices.getRestaurantComplete().then(
      (response) => {
        const restaurant = response.data.restaurant;
        restaurantContext.setRestaurant(restaurant);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    ).finally(
      () => {
        appContext.closeLoadingAlert();
      }
    )
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="Layout">
      {children}
    </div>
  );
}

export default Layout;