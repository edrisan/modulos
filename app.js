/*get the express pack*/
var port = 3000;
var express = require('express');
/*create the application*/
var app = express();
/*set some infor about the app*/
app.use(express.static('public'));

app.get('/', function (request, response) {
    //response.send('OK'); -> just to test

});

app.get('/cities', function(reques, response){
    var cities = ['belem', 'Lodrina', 'Mato Grosso do Sul', 'Curitiba','São Paulo'];
    response.json(cities);
});




app.listen(port, function () {
    console.log("Running server on port" + port);
});


