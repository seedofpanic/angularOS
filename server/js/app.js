angular.module('myApp', [])
    .component('folderContent', {
        bindings: {},
        templateUrl: 'templates/fileManagerTemplate.html',
        controller: function ($http, $rootScope) {
            var self = this;
            this.$http = $http;
            this.get = function () {
                self.$http.get('http://localhost:3000/file/read?dir=' + self.dir)
                    .then(function (res) {
                        self.files = res.data;
                        console.log(res);
                    });
                $rootScope.path = self.dir;
            };

            this.getUp = function () {
                self.path = self.dir + '';
                let a = self.path.lastIndexOf("\\"); //находим путь к предыдущей папке
                let b = self.path.lastIndexOf("/");
                a > b ? self.pathSlashPos = a : self.pathSlashPos = b;
                self.pathUp = self.path.slice(0, self.pathSlashPos);

                console.log(self.pathUp);
                self.dir = self.pathUp;
                self.$http.get('http://localhost:3000/file/read?dir=' + self.pathUp)
                    .then(function (res) {
                        self.files = res.data;
                        console.log(res);
                    });
                $rootScope.path = self.dir;
            };

            this.getDown = function (file) {
                    var self = this;
                    this.$http = $http;

                    self.$http.get('http://localhost:3000/file/read?dir=' + self.dir + '/' + file)
                        .then(function (res) {
                            self.files = res.data;
                            console.log(res);
                        });
                    self.dir = self.dir + '\\' + file;
                    $rootScope.path = self.dir;

            }
        }
    })

    .component('createDocumentForm', {
        bindings: {},
        templateUrl: 'templates/createDocumentTmpl.html',
        controller: function ($http, $rootScope) {
            var self = this;
            this.$http = $http;
            this.create = function () {
                self.$http.get('http://localhost:3000/file/create?name=' + $rootScope.path + '/' + self.name + '.txt&data=' + self.data)
                    .then(function (res) {
                        alert (res.data.message);
                        console.log(res);
                    })
            }
        }
    })


;

