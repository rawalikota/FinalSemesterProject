console.log("hello");
const person={
    name:'Raja',
    section:2.15,
    Age:24
};
console.log(person);

const methods={
    mname:'functions',
    section:2.15,
    message(){
        console.log('Hi I am method'+this.mname);
    },
    messagew: function(){
        console.log('this is method'+this.section);
    }
};
methods.message();
methods.messagew();

const printName= ({name,Age}) => {
    console.log(name, Age);
};
printName(person);

const {name, Age}=person;
const {mname,section,message,messagew}=methods;
console.log(name,section,message(),messagew());
console.log(name,Age);

