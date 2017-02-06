var fs = require('fs');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World! <form action="/file/read">' +
        '<input size="40" name="dir" type="text" value="C:\\Users\\shemh\\Documents\\angularOS\\server">' +
        '<button type="submit">Посмотреть папку</button></form>');
});

app.get('/file/read', function (req, res) { //отображение файлов из папки по абсолютному пути ?dir=
    fs.readdir(req.query.dir, (err, list) => {

        res.json(list);
    });
});

app.get('/dir/create', function (req, res) {
   fs.mkdir(req.query.newdir, function () {
       res.json ({message: 'Папка создана'});

       console.log(req.query.newdir);
       console.log('Folder created');
   });
    
});

app.get('/file/create', function (req, res) { //создание файлов, где name - абсолютный путь с расширением
    fs.writeFile(req.query.name, req.query.data, function(res2) { //data - его содержание
        if (res2 === null) {
            res.json({message: true});
            console.log(req.query.name);
            console.log("The file was saved!");
        } else {
            console.log('Ошибка при создании файла: ' + res2);
            res.json({message: false});
        }
    });
});

app.get('/file/delete', function (req, res) { //удаление файлов, где name - абсолютный путь и название файла
    let address = req.query.name;
    console.log('путь: ' + address);
    if (fs.lstatSync(address).isFile()) {
        fs.unlink(address, function () {
            res.json({message: 'файл удален'});
            console.log("The file was deleted!");
        });
    }

    if (fs.lstatSync(address).isDirectory()) {


        function rmdir (address) {
            let list = fs.readdirSync(address);
            for(let i = 0; i < list.length; i++) {
                let filename = address + list[i];
                let stat = fs.statSync(filename);
                console.log('stat: ' + stat);
                console.log('filename: ' + filename);

                if(filename == "." || filename == "..") {
                    // pass these files
                } else if(stat.isDirectory()) {
                    // rmdir recursively
                    rmdir(filename);
                } else {
                    // rm filename
                    fs.unlinkSync(filename);
                }
            }
            fs.rmdirSync(address);
            console.log('папка удалена: ' + address);
        }
        rmdir(address);
    }
});

app.listen(3000, function () { //запускается командой 'node server/server'
    console.log('Сервер запущен по адресу http://localhost:3000/');
});

