var http = require('http'),
    fs   = require('fs'),
    jwt  = require('jsonwebtoken');

var PORT = 3333;

http.createServer(function(req,res){
    var secret = Buffer.from('iXCaozi93xPBrzp2yI8JLqpkqMwuE5Sh5P+sbunpLq3IqDqjGR0fDZE7NDTcT2uOpBbkeK9Ub5N0BQB+jW6wFA==','base64');
    var token  = jwt.sign(
        {
            "iat"     : Math.floor(Date.now() / 1000) - 30 
        }, 
        secret, 
        {
            expiresIn : '4h',
            issuer    : "http://corstest",
            audience  : "urn:corstest",
        }
    );

    res.writeHead(200, 
        { 'Content-Type' : 'text/html'
        , 'Set-Cookie'   : 'mycookie=customvalue;'
        , 'Set-Cookie'   : 'token_id=' + token + ";"
        });

    var readStream = fs.createReadStream(__dirname + '/index.html');

    readStream.pipe(res);
}).listen(PORT, function(){
    console.log("visit me at http://localhost:"+PORT);
});