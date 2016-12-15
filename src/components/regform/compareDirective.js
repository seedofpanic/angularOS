'use strict';

function directive() {
    const directive = {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            otherPassValue: "=comparePass"
        },
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ngModel) {
        ngModel.$validators.$compareTo = function(modelValue, viewValue) {
            if (viewValue == scope.otherPassValue) {
                ngModel.$compareTo = false;
            } else {
                ngModel.$compareTo = true;
            }

            return viewValue == scope.otherPassValue;
        };

        scope.$watch("otherPassValue", function(modelValue, viewValue) {
            scope.$watch(modelValue, function() {
                ngModel.$validate();
            })
        });
    }
}

module.exports = angular
    .module('comparePassModule', [])
    .directive('comparePass', directive);
