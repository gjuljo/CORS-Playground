var http = require('http');
var PORT = 8080;

http.createServer(function(req,res){
    console.log(req.method + " --> " + JSON.stringify(req.headers));
    if(req.method === "POST") {
        res.writeHead(200, 
            { 'Content-Type'                     : 'application/json'
            , 'Access-Control-Allow-Origin'      : 'http://localhost:3333'
            , 'Access-Control-Allow-Credentials' : 'true'
            , 'Access-Control-Allow-Methods'     : 'POST'
        //  , 'Access-Control-Allow-Headers'     : 'Authorization, Test-Authorization, MyCustomHeader'
            }
        );  
        var data = '{"name":"Giulio","age":33}';    
        res.write(JSON.stringify(data));
    } else if(req.method === "OPTIONS") {
        res.writeHead(200, 
            { 'Access-Control-Allow-Methods'     : 'POST'
            , 'Access-Control-Allow-Origin'      : 'http://localhost:3333'
            , 'Access-Control-Allow-Credentials' : 'true'
            , 'Access-Control-Allow-Headers'     : 'Authorization, Content-Type, MyCustomHeader'
            }
        ); 
    }
    res.end();
}).listen(PORT, function(){
    console.log("visit me at http://localhost:"+PORT);
});