import express from 'express';
const router = express.Router();
import { 
    getProducts, 
    getProductsByID, 
    createProduct,
    deleteProduct,
    updateProduct
 } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductsByID).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);


export default router;