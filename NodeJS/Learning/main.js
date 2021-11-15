const path=require('path');

//const http=require('http'); //not required when 
const express =require('express');
const bodyParser=require('body-parser');

const mapp=express();

const adminData=require('./routes/madmin');
const shopRoutes=require('./routes/shop');


mapp.use(bodyParser.urlencoded({extended:false}));
mapp.use(express.static(path.join(__dirname, 'public')));

mapp.use('/admin',adminData.routes);
mapp.use(shopRoutes);

mapp.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

//const server=http.createServer(eapp);
//server.listen(3000);
mapp.listen(3000); //creates the server and listens the port