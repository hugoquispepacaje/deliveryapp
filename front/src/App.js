import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Body from './components/Body';
import CartButton from './components/CartButton';
import Layout from './components/Layout';
import LoadingAlert from './components/LoadingAlert';
import { BrowserRouter as Router } from "react-router-dom";
import RestaurantState from "./context/Restaurant/RestaurantState";
import AppState from "./context/App/AppState";
import ShoppingCartState from "./context/ShoppingCart/ShoppingCartState";

function App() {
  return (
    <AppState>
      <RestaurantState>
        <ShoppingCartState>
          <Layout>
            <Router>
              <Header />
              <InfoHeader />
              <Body />
              <CartButton />
              <LoadingAlert />
            </Router>
          </Layout>
        </ShoppingCartState>
      </RestaurantState>
    </AppState>
  );
}

export default App;
