const { request } = require("express");
const  express  = require("express");
const mongoose = require('mongoose');
const_mongodb_url= 'mongodb+srv://Rosemary:marryus24@cluster0.2hvfc.mongodb.net/todos_db?retryWrites=true&w=majority'


const server = express();

server.get('/student', function(request ,response){
    request.status(200).json('All students has been given');
});

server.post('/student', function(request, response){
    request.status(200).json('All a new student');
});

server.put('/student', function(request, response){
    request.status(200).json('update student');
});
server.delete('/student', function(request, response){
    request.status(200).json('Delete student');
});

server.listen(4000, function(){
    console.log('server has started to run in express');
});

    
