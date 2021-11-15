
let riskmeter=0;

const db=require('../util/database');
const fs=require('fs');
const path=require('path');

module.exports= class Questions{
    constructor(questionone, questiontwo, questionthree, questionfour, questionfive, questionsix ){
        this.questionone=questionone;
        this.questiontwo=questiontwo;
        this.questionthree=questionthree;
        this.questionfour=questionfour;
        this.questionfive=questionfive;
        this.questionsix=questionsix;
    }
    saveQuestions(){
        return db.execute('INSERT INTO covi.questions (questionone, questiontwo, questionthree, questionfour, questionfive, questionsix) VALUES(?,?,?,?,?,?)', 
        [this.questionone,this.questiontwo, this.questionthree, this.questionfour, this.questionfive, this.questionsix] 
        );
    }
    static fetchAll(){
        return db.execute('SELECT * FROM covi.riskmeter');
    }
    
    saveRiskmeter(){
        let riskmeter=0;
        var one=parseInt(this.questionone);
        var two=parseInt(this.questiontwo);
        var three=parseInt(this.questionthree);
        var four=parseInt(this.questionfour);
        var five=parseInt(this.questionfive);
        var six=parseInt(this.questionsix);
        riskmeter= ((one +two+three+four+five+six)*1000)/180;

    
        return db.execute('INSERT INTO covi.riskmeter (riskmeter) VALUES(?)', [riskmeter]);
            //return db.execute('SELECT ((questionone+questiontwo+questionthree+questionfour+questionfive+questionsix)*1000)/180 FROM covi.questions ');
    }
    /*
    
    saveQuestions(){
        const p=path.join(path.dirname(process.mainModule.filename),
        'data',
        'questions.json'
        );
        fs.readFile(p, (err, fileContent) => {
           let questions = [];
            if (!err){
                questions= JSON.parse(fileContent);
           }
           questions.push(this);

           fs.writeFile(p, JSON.stringify(questions), err =>{
                console.log(err);
           });
           // console.log(fileContent);
        });
        //questions.push(this);
    }
    
    static fetchAll(cb){
        const p=path.join(path.dirname(process.mainModule.filename),
        'data',
        'questions.json'
        );
        fs.readFile(p,(err, fileContent) => {
            if(err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
        
    }
    
   saveRiskmeter(){
        const p=path.join(path.dirname(process.mainModule.filename),
        'data',
        'riskmeter.txt'
        );
        fs.readFile(p, (err, fileContents) => {
            let answers = [];
            //let userriskmeter=[];
            if (!err){
                 answers=JSON.parse(fileContents);
            }
            answers.push(this);
            for(let i=0;i<answers.length;i++){
                riskmeter=riskmeter+answers[i];
            }
            fs.writeFile('/riskmeter.txt', riskmeter, err=>{
                console.log(err);
            });
            //answers.push(riskmeter);
            fs.writeFile(p, JSON.stringify(answers), err =>{
                 console.log(err);
            });
         });
    }
    */
    
}