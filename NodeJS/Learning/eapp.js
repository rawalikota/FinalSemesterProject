
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const db = require('./util/database');

const eapp = express();

eapp.set('view engine', 'ejs');
eapp.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM covi.users')
.then( result =>{
    console.log(result);
})
.catch(err => {
    console.log(err);
});

eapp.use(bodyParser.urlencoded({ extended: false }));
eapp.use(express.static(path.join(__dirname, 'public')));


eapp.use('/admin', adminRoutes);
eapp.use(shopRoutes);

eapp.use(errorController.get404);

eapp.listen(3000);


/*
const path=require('path');

//const http=require('http'); //not required when 
const express =require('express');
const bodyParser=require('body-parser');
//const expressHbs=require('express-handlebars');

const db = require('./util/database');

const eapp=express();

//eapp.engine('hbs', expressHbs());
eapp.set('view engine','ejs');
eapp.set('views', 'views');

const adminData=require('./routes/admin');
const shopRoutes=require('./routes/shop');

db.execute;

eapp.use(bodyParser.urlencoded({extended:false}));
eapp.use(express.static(path.join(__dirname, 'public')));

eapp.use('/admin',adminData.routes);
eapp.use(shopRoutes);

eapp.use((req,res,next)=>{
    res.status(404).render('404', {pageTitle:'Page not found'});
});

//const server=http.createServer(eapp);
//server.listen(3000);
eapp.listen(3000); //creates the server and listens the port

*/