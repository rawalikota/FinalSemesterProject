const db=require('../util/database');

module.exports=class Signupdetails{
    constructor(uname,dob, email, password){
        this.uname=uname;
        this.dob=dob;
        this.email=email;
        this.password=password;

    }
    saveSignupdetails(){
        return db.execute('INSERT INTO covi.users (uname, dob, email, password) VALUES(?,?,?,?)',
        [this.uname, this.dob, this.email, this.password]);
    }
    static fetchAll(){
        return db.execute('SELECT riskmeter.riskmeter, users.uname, users.email, users.dob FROM users INNER JOIN riskmeter ON users.usersid= riskmeter.idriskmeter');
        //return db.execute('SELECT riskmeter.riskmeter, users.uname, users.email, users.dob FROM users INNER JOIN riskmeter WHERE riskmeter.idriskmeter=LAST_INSERT_ID(users.usersid)');
        //return db.execute('SELECT  LAST_INSERT_ID() FROM users');
            
    }
}