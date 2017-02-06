import * as angular from 'angular';

/* @ngInject */
function directive($document) {
    let directive = {
        restrict: 'A',
        scope: false,
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, element, attr, ctrl) {
        let startX = 0, startY = 0, x = 0, y = 0;

        element.on('mousedown', function(event) {

            event.stopImmediatePropagation();
            startX = event.screenX - x;
            startY = event.screenY - y;
            angular.element(document.getElementById('app-wrapper')).on('mousemove', mousemove);
            angular.element(document.getElementById('app-wrapper')).on('mouseup', mouseup);
        });

        function mousemove(event) {
            y = event.screenY - startY;
            x = event.screenX - startX;
            element.css({
                top: y + 'px',
                left:  x + 'px'
            });
        }

        function mouseup() {
            angular.element(document.getElementById('app-wrapper')).off('mousemove', mousemove);
            angular.element(document.getElementById('app-wrapper')).off('mouseup', mouseup);
        }
    }
}

export default angular
    .module('draggableModule', [])
    .directive('draggable', directive);
