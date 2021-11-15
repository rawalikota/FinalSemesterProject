const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;



/*
const path=require('path');

const express=require('express');

const rootDir=require('../util/path');
//const productsController= require('../controllers/products.js');

const router=express.Router();

const products= [];
// /admin/add-product => GET
router.get('/add-product', (req, res, next) =>{
    //console.log('In the middlewareadd');
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product',{pageTitle: 'Add Product', path: '/admin/add-product' });
});

// /admin/add-product => POST
router.post('/add-product',);

exports.routes=router;
exports.products=products;
*/