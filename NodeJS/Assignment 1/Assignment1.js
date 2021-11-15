const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url ==='/'){
        res.write('<html>');
        res.write('<head><title> Username Page </title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit </button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url ==='/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title> Users Page</title></head>');
        res.write('<body><ul><li>User1</li><li>User2</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' & method === 'POST'){
        const body=[];
        req.on('data', (chunk)=>{   //event listener
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', ()=>{
            const parsedBody=Buffer.concat(body).toString(); //parsedBody is a buffere now
            const username=parsedBody.split('=')[1];
            console.log(username);
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
            
            
        });
        
    }
    //console.log(req.url);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> Welcome page</title></head>');
    res.write('<body><h1>HIII welcomeee</h1></body>')
    res.write('</html>');
    res.end();

});

server.listen(3000);
//process.exit();