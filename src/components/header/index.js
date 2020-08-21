require('./index.less');
angular.module('header', [])
    .directive('myHeader', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                headerConfig: '='
            },
            template: require('./index.html'),
            link(scope, ele, attr) {
                scope.logo = require('assets/img/favicon.ico').default;
                scope.menu = ['home','new','about']
            }
        }
    }]);