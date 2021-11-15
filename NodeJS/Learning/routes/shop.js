const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;


/*
const path=require('path');

const express=require('express');

const rootDir=require('../util/path');

const adminData=require('./admin');

const router=express.Router();

router.get('/', (req, res, next) =>{
    const products=adminData.products;
    console.log(adminData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {prods:products, pageTitle: 'Shop', hasProducts: products.length>0, path:'/'});
});

module.exports = router;
*/