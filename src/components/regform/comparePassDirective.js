function directive() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'templateUrl',
        scope: {
        },
        link: linkFunc,
        controller: Controller,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
}

function Controller(dependencies) {
    var vm = this;

    activate();

    function activate() {

    }
}

module.exports = angular
    .module('comparePassModule')
    .directive('compareTo', directive);
