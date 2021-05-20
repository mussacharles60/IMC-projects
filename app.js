var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');

const port = process.env.PORT || "8000";

var app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html");

});

// app.post('/', function(req, res) {
//     console.log("request: ", req.body);
//     res.send("Successfully Submitted. Please continue to next section");
// });

var server = app.listen(port, function() {
    var host = server.address().address
    var port = server.address().port

    console.log(`Listening to requests at http://${host}:${port}`)
})

// // app.listen(port, () => {
// //     console.log(`Listening to requests on http://localhost:${port}`);
// // });