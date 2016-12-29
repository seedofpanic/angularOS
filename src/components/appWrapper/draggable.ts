import * as angular from "angular";

/* @ngInject */
function directive($document) {
    var directive = {
        restrict: 'A',
        scope: false,
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, element, attr, ctrl) {
        var startX = 0, startY = 0, x = 0, y = 0;

        element.on('mousedown', function(event) {
            event.preventDefault();
            startX = event.screenX - x;
            startY = event.screenY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
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
          $document.off('mousemove', mousemove);
          $document.off('mouseup', mouseup);
        }
    }
}

export default angular
    .module('draggableModule', [])
    .directive('draggable', directive);
