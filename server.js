const http = require('http');
const fs = require('fs');
const port = 8000;

const Server = http.createServer((req,res)=>{
    const data = fs.readFileSync('website.html').toString();
    res.end(data);
});

Server.listen(port,()=>{
    console.log("welcome server is up" , port);
});

