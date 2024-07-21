
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write('hamo')
        res.end()
    }else if(req.url === '/home'){
        res.write('Hello from the home page')
        res.end()
    }
})

server.listen(3000)