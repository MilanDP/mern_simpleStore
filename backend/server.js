import express from 'express';
import { connectDB } from './config/db.js';

import productRoutes from  './routes/product.route.js'

const app = express();

app.use(express.json());

const PORT = process.env.PORT

app.use('/products', productRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("Server (started at http://localhost:"+ PORT);
})



