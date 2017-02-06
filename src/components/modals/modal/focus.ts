import * as angular from 'angular';

/* @ngInject */
function directive() {
    let directive = {
        restrict: 'EA',
        scope: {
        },
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, element, attrs) {
        element[0].focus();
    }
}

export default angular
    .module('focusModule', [])
    .directive('focusMe', directive);
