import './env.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';


const app = express();
const api = express.Router();

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Rutas
import usuario from './routes/usuario.js';
import home from './routes/home.js';
import restaurant from './routes/restaurant.js';
import red_social from './routes/red_social.js';
import horario from './routes/horario.js';
import categoria from './routes/categoria.js';
import producto from './routes/producto.js';

api.use('/producto', producto);
api.use('/categoria', categoria);
api.use('/horario', horario);
api.use('/red_social', red_social);
api.use('/restaurant', restaurant);
api.use('/', home);
api.use('/usuario', usuario);
app.use(process.env.PREFIJO, api);

//Despliegue
const puerto = process.env.PORT || 3000;
app.listen(puerto, function () {
  console.log('The server works in port: ' + puerto);
});



