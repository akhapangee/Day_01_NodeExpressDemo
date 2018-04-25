var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');
var studentRouter = require('./router.js');

var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use("/students",studentRouter);



var port = 9000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "views/index.html"));
});



app.listen(port, () => {
    console.log("server is running at %d", port);
});