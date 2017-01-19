var fs = require('fs');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/file/read', function (req, res) { //отображение файлов из папки по абсолютному пути
    fs.readdir(req.query.dir, (err, list) => {
        res.json(list);
    });
});

app.get('/file/create', function (req, res) { //создание файлов, где name - абсолютный путь и название файла
    fs.writeFile(req.query.name, req.query.data, function() { //data - его содержание
        res.json({message: 'файл создан'})


        console.log("The file was saved!");
    });
});

app.get('/file/delete', function (req, res) { //удаление файлов, где name - абсолютный путь и название файла
    fs.unlink(req.query.name, req.query.data, function() {
        res.json({message: 'файл удален'})


        console.log("The file was deleted!");
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});