const http=require('http'); //imports global module http

const routes =require('./routes');
/*function rqListener(feq, res){

}
http.createServer(rqListener); //pass rqListener, which tells server to look for function rqListener
http.createServer(function(req,res){

});    //nameless function
*/
/*const server=http.createServer((req,res) => {
    //console.log(req.url,req.method,req.headers);
    //process.exit(); //exits the program
    
    
});
*/
const server=http.createServer(routes.handler);

server.listen(3000);
//process.exit();