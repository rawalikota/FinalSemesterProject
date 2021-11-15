const path = require('path');

const express = require('express');

//const userController = require('../controllers/user');

const router = express.Router();

// /home => GET
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'user', 'home.ejs'));
  });

// /questions => GET
//router.get('/questions', )userController.getQuestions);
router.get('/questions', (req, res, next) => {
    res.sendFile('./views/user/questions.ejs');
  });

// /questions => POST
router.post('/questions', (res,req,next) => {
    res.sendFile('./views/user/home.ejs');
});





/*router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

*/

module.exports = router;
