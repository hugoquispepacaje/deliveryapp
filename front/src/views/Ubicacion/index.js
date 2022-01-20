import { useContext } from 'react';
import RestaurantContext from '../../context/Restaurant/RestaurantContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Ubicacion = () => {
  const restaurantContext = useContext(RestaurantContext);
  const restaurant = restaurantContext.restaurant;
  const direccion = restaurant.direccion ? restaurant.direccion : '';
  const position = restaurant.latitud ? [restaurant.longitud, restaurant.latitud] : [51.505, -0.09];
  return (
    <div>
      { restaurant.direccion && (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              {direccion}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default Ubicacion;