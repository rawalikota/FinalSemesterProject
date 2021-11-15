
const nodemailer=require('nodemailer');
const sendgridTransport=require('nodemailer-sendgrid-transport');

const transporter= nodemailer.createTransport(sendgridTransport({
    auth: {

        api_key: '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'
    }
}));

const Questions = require('../models/user');
const Signupdetails=require('../models/signupdetails');
const Appointmentdetails= require('../models/appointmentdetails');
//const sendgridTransport = require('nodemailer-sendgrid-transport');
//const Risk=require('../models/risk');

exports.getQuestions=(req, res, next) => {
    res.render('questions', {
      pageTitle: 'Questions',
      path: '/questions',
      
    });
}
var riskmeter=0;

exports.postQuestions = (req, res, next) => {
    //console.log(questions);
    const questionone= req.body.questionone;
    const questiontwo=req.body.questiontwo;
    const questionthree=req.body.questionthree;
    const questionfour=req.body.questionfour;
    const questionfive=req.body.questionfive;
    const questionsix=req.body.questionsix;
    const question= new Questions(questionone,questiontwo,questionthree, questionfour, questionfive,questionsix);
    
    
    
    question.saveQuestions()
    .then(()=>{
        
        question.saveRiskmeter()
        .then( () => {
            res.redirect('/profile');
        })
        .catch(err =>{
            console.log(err);
         } );
        //console.log(one);
        //console.log(riskmeter);
        
    })
    .catch(err=> console.log(err));

    

    //answers.saveRiskmeter();
    //res.redirect('/profile');
  }

  exports.getHome= (req, res, next) => {
    
    res.render('home', {
      pageTitle: 'Home',
      path: '/',
      
    });
  };

  exports.getProfile= (req, res, next) => {
      Signupdetails.fetchAll()
      .then(([rows]) => {
          console.log(rows);
        res.render('profile', {
          riskmeter: rows,
            pageTitle:'Profile',
            path:'/profile'
        });
    })
      .catch(err => {
          console.log(err);
      });

};


exports.getAppointment=(req,res,next)=>{
res.render('appointment', {
    pageTitle:'Appointment',
    path:'/appointment'
});

};

exports.postAppointment=(req,res,next) => {
    const adate = req.body.adate;
    const atime=req.body.atime;
    const aemail=req.body.aemail;
    const appointmentdetails=new Appointmentdetails(adate,atime,aemail);

    
     var sub=0;
     var data=0;
     data='Appointment Confirmation On ';

     sub=data+adate;

    appointmentdetails.saveAppointmentdetails()
    .then(()=>{
        transporter.sendMail({
            to:aemail,
            from:'kotapkrawali@gmail.com',
            subject:sub,
            html: '<p> Appointment successfully saved</p>'

        });
        res.redirect('/confirmation');
    })
    .catch(err => {
        console.log(err);
    });

    
};
  
exports.getConfirmation=(req,res,body) => {
    res.render('confirmation', {
        pageTitle: 'Confirmation',
        path: '/confirmation'
    })
};