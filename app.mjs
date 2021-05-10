import express from 'express';
import jsend from 'jsend';
import errorHandler from './common/error.mjs'
import setRoutes from './Routes/index.route.mjs';
import cors from 'cors'
const app = express();
app.use(express.json());


setRoutes(app);

app.use(errorHandler);

export default app


