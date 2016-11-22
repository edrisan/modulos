/*get the express pack*/
var port = 3000;
var express = require('express');
/*create the application*/
var app =  express();
/*set some infor about the app*/

app.get('/', function(request, response){
    response.send('OK');
});



app.listen(port,function(){
    console.log("Running server on port"+port);
});


