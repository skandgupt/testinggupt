const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile('index.html', function(error, data){
        if(error){
            console.log('error :', error);
            
            res.writeHead(404);
            res.write('Error : File not found', error);
        }else{
            res.write(data);
        }
        res.end();
    })

    
    //res.write('hello node');
    
})

server.listen(port, function(error){

    if(error){
        console.log('someting is wrong :', error);
        
    } else {
        console.log('server is listening on Port:' + port);
        
    }

});