var fs = require('fs');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
    res.send(   'Hello World! <form action="/file/read">' +
        '<input size="40" name="dir" type="text" value="C:\\Users\\shemh\\Documents\\angularOS\\server">' +
        '<button type="submit">Посмотреть папку</button></form>');
});

app.get('/file/read', function (req, res) { //отображение файлов из папки по абсолютному пути ?dir=
    fs.readdir(req.query.dir, (err, list) => {

        res.json(list);
    });
});

app.get('/file/create', function (req, res) { //создание файлов, где name - абсолютный путь с расширением
    fs.writeFile(req.query.name, req.query.data, function() { //data - его содержание
        res.json({message: 'файл создан'});

        console.log(req.query.name);
        console.log("The file was saved!");
    });
});

app.get('/file/delete', function (req, res) { //удаление файлов, где name - абсолютный путь и название файла
    fs.unlink(req.query.name, req.query.data, function() {
        res.json({message: 'файл удален'});


        console.log("The file was deleted!");
    });
});

app.listen(3000, function () { //запускается командой 'node server/server'
    console.log('Сервер запущен по адресу http://localhost:3000/');
});

