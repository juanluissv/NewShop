import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

//GET /api/products
const getProducts = asyncHandler(async (req, res) => {
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Product.countDocuments();



    const products = await Product.find({}).limit(pageSize).skip(pageSize * (page - 1));

    res.json({products, page, pages: Math.ceil(count / pageSize)});
});


//GET /api/products/id
const getProductsByID = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});


//PUT /api/products/id
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, category, countInStock } = req.body;
    const product = await Product.findById(req.params.id);

    if(product) {
        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});


//POST /api/products
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description'
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});


//DELETE /api/products/:id
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        await Product.deleteOne({ _id: product._id });
        res.json({ message: 'Product removed' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});




export {
    getProducts,
    getProductsByID,
    createProduct,
    deleteProduct,
    updateProduct
}
