import axios from 'axios';
import { URL_BACKEND, ID_RESTAURANT } from '../../data/globales'
const RestaurantServices = {
  getRestaurantComplete() {
    return axios.get(`${URL_BACKEND}/restaurant/complete/${ID_RESTAURANT}`)
  }
}

export default RestaurantServices;