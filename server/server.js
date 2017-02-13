var fs = require('fs');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World! <form action="/folder/read">' +
        '<input size="40" name="dir" type="text" value="C:\\Users\\shemh\\Documents\\angularOS\\server">' +
        '<button type="submit">Посмотреть папку</button></form>');
});

app.get('/folder/read', function (req, res) { //отображение файлов из папки по абсолютному пути ?dir=
    fs.readdir(req.query.dir, function (err, list) {
        console.log('req.query.dir: ' + req.query.dir);
        console.log('\n\nlist.длина: ' + list.length);
        let address = req.query.dir;
        let iCount = 0;
        let listArray = [];
        let listFolders = [];
        let listFiles = [];
        let listFinal = {};

        list.forEach(function (item, i, arr) {

            listArray[i] = address + '/' + item; // создаем массив с адресами содержимого обозреваемой папки
            try {
                if (fs.lstatSync(listArray[i]).isDirectory()) { // Проверяем, является ли этот элемент списка папкой
                    console.log('папка ' + listArray[i]);
                    listFolders.push(item);
                } else {
                    console.log('файл ' + listArray[i]);
                    listFiles.push(item);
                }
            } catch (err) {
                console.log('При обработке возникла ошибка: ' + err);
            }
        });

        listFinal.folders = listFolders;
        listFinal.files = listFiles;
        console.log(JSON.stringify(listFinal));
        return res.json(listFinal);
    });
});

app.get('/dir/create', function (req, res) { // Создание папки
   fs.mkdir(req.query.newdir, function (res2) {
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

app.get('/file/rename', function (req, res) { // переименование файла, где указывается старый путь
   fs.rename(req.query.oldPath, req.query.newPath, function (res2) { // и новый путь - это новое имя
       if (res2 === null) {
           res.json({message: true});
           console.log("The file was renamed!");
       } else {
           console.log('Ошибка при переименовании файла: ' + res2);
           res.json({message: false});
       }
   });
});

app.get('/file/delete', function (req, res) { //удаление файлов, где name - абсолютный путь и название файла
    let address = req.query.name;
    console.log('путь к удаленному файлу: ' + address);
    if (fs.lstatSync(address).isFile()) {
        fs.unlink(address, function () {
            res.json({message: 'файл удален'});
            console.log("Файл удален!");
        });
    }

    if (fs.lstatSync(address).isDirectory()) {
        function rmdir (address) {
            let list = fs.readdirSync(address);
            for(let i = 0; i < list.length; i++) {
                let filename = address + '\\' + list[i];
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
            res.json({message: 'файл удален'});
            console.log('папка удалена: ' + address);
        }
        rmdir(address);
    }
});

app.get('file/read', function (req, res) {
    fs.readFile(req.query.file, function (err, data) {
        return res.send(data);
    });
});

app.listen(3000, function () { //запускается командой 'node server/server'
    console.log('Сервер запущен по адресу http://localhost:3000/');
});

