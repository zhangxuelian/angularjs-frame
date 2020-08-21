angular.module('footer', [])
    .directive('myFooter', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: '=',
            template: require('./index.html'),
            link() {

            }
        }
    }]);