angular.module('header', [])
    .directive('myHeader', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: '=',
            template: require('./index.html'),
            link() {
                
            }
        }
    }]);