require('./index.less');
angular.module('footer', [])
    .directive('myFooter', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                text: '@'
            },
            template: require('./index.html'),
            link(scope, ele, attr) {
                scope.text || scope.text == 'angularjs-frame by zxl©2020';
            }
        }
    }]);