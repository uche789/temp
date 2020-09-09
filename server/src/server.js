import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import routes from './routes/index';

//todo: IPS
//todo: basic auth

// initialize configuration
dotenv.config();

const app = express();
const router = express.Router()
const isDevelop = !!process.argv.find(arg => arg === 'develop');

app.use(express.static('public'))

// CORS
const corsOptions = {
  origin: 'http://localhost:3454',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.use((req, res, next) => {
  if (isDevelop) {
    console.log('%s %s %s', req.method, req.url, req.path);
  }
  next();
})

app.get('/api/verify', routes.verifierRoute);
app.post('/api/import', routes.importRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT);