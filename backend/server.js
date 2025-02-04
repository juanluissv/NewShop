import express from 'express';
import path from 'path'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import products from './data/products.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config()

connectDB()


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const __dirname = path.resolve() //set  __dirname to current directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


app.get('/', (req, res) => {
    res.send("API is running...")
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);



app.get('/api/config/paypal', (req, res) =>
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
  );



app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));