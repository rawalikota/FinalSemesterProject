
const db=require('../util/database');

 module.exports=class Appointmentdetails{
     constructor(adate, atime, aemail){
         this.adate=adate;
         this.atime=atime;
         this.aemail=aemail;
    }

    saveAppointmentdetails(){
        return db.execute('INSERT INTO covi.appointments (adate,atime,aemail) VALUES(?,?,?)',
        [this.adate,this.atime, this.aemail]);
    }
     
 }