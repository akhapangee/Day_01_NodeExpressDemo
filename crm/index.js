var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');
var Student = require('./models/student.js');
var StudentService = require('./services/studentService.js');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var stdService = new StudentService();

var student = new Student();
student.id = 1;
student.name = "Shyam";
stdService.insert(student);

var student = new Student();
student.id = 2;
student.name = "Hari";
stdService.insert(student);



var port = 9000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/data', (req, res) => {
    res.send("Hello Data");
});

app.get('/json', (req, res) => {
    res.send(['red', 'green', 'blue']);
});

app.get('/student', (req, res) => {
    var student = new Student();
    student.id = 1;
    student.name = "Ram";

    res.send(student);
});

app.get('/students', (req, res) => {
    res.send(stdService.getAll());
});

app.post('/students/save', (req, res) => {
    var student = new Student();
    student.id = stdService.getAll().length+1;
    student.name = req.body.name;
    stdService.insert(student);
    res.redirect('/');
});


app.listen(port, () => {
    console.log("server is running at %d", port);
});