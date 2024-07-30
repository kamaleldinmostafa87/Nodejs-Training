// run `node index.js` in the terminal

const { appendFile } = require('node:fs');
const http = require('node:http');
const hostname   = "127.0.0.1"

const port = 3000

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.set
})


const students = [
    {id:"1", name: "kamal", age:12},
    {id:"2", name: "mohamed", age:1}
]


//number of port
//make server listen on this port
//json method to transmite data from the server to the client


// to delete an element
app.delete('kk/:id',()=>{
    const id = req.params.id 
    if(id !=-1){
        collectios.findIndex(idx=> idx.id == id)
        return res.send('deleted successfully')
    }else {
        res.send('failed to find this element')
    }
})

//to put element
app.put('/api/students/:id',()=>{
    let editableId = req.body.id;

    const finddId = collections.findIndex(idx=>idx === editableId )
    if(finddId !=-1){
// req.body = {id:,name:,title:}
// id in collection finddId



    }else{
        res.send('student is not found')
    }
})

console.log(`Hello Node.js v${process.versions.node}!`);


//Ajv package is used for validate data from client 
const Ajv = require('ajv') //this is a class and this is a naming convention of it

//JSON schema
// you use a postman to test the endpoint