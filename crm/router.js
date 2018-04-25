var express = require('express');
var Student = require('./models/student.js');
var StudentService = require('./services/studentService.js');

var router = express.Router();

var stdService = new StudentService();

var student = new Student();
student.id = 1;
student.name = "Shyam";
stdService.insert(student);

var student = new Student();
student.id = 2;
student.name = "Hari";
stdService.insert(student);

router.get('/data', (req, res) => {
    res.send("Hello Data");
});

router.get('/json', (req, res) => {
    res.send(['red', 'green', 'blue']);
});

router.get('/student', (req, res) => {
    var student = new Student();
    student.id = 1;
    student.name = "Ram";

    res.send(student);
});

router.get('/', (req, res) => {
    res.send(stdService.getAll());
});

router.post('/save', (req, res) => {
    var student = new Student();
    student.id = stdService.getAll().length+1;
    student.name = req.body.name;
    stdService.insert(student);
    res.redirect('/');
});

module.exports = router;