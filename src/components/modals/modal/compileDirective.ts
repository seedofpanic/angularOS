import * as angular from "angular";

/* @ngInject */
function directive($compile) {
    var directive = {
        restrict: 'A',
        scope: {
            template: '<'
        },
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr) {
        let content = angular.element(scope.template);
        el.append(content);
        $compile(content)(scope);
    }
}

export default angular
    .module('compileTemplateModule', [])
    .directive('compileTemplateDirective', directive);
