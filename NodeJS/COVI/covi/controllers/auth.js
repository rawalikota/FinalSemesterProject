const res = require('express/lib/response');
const Signupdetails= require('../models/signupdetails');

exports.getSignup = (req, res, next) => {
   /* const isLoggedIn = req
      .get('Cookie')
      .split(';')[1]
      .trim()
      .split('=')[1];*/
      
    res.render('signup', {
      path: '/signup',
      pageTitle: 'Signup'
      //isAuthenticated: isLoggedIn
    });
  };
  
  exports.postSignup = (req, res, next) => {

    const uname=req.body.uname;
    const dob=req.body.dob;
    const email=req.body.email;
    const password=req.body.password;

    const userdetails=new Signupdetails(uname,dob,email,password);
    userdetails.saveSignupdetails()
    .then(()=>{
        res.redirect('/questions');
    
    })
    .catch(err =>{
        console.log('err');
    });
    //res.setHeader('Set-Cookie', 'loggedIn=true');
    
  }

  exports.getLogin=(req,res,next)=>{

        res.render('login', {
        path:'/login',
        pageTitle: 'Login'
    });
  };

  exports.postLogin=(req,res,next)=>{

    const email=req.body.email;
    const password=req.body.password;

    res.redirect('/questions');

  };
  