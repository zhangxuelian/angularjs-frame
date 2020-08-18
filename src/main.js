require('./app');
var main = angular.module('main', ['app']);

angular.element(document).ready(function () {
    angular.bootstrap(document, [main['name'], function () {
        angular.element(document).find('html').addClass('ng-app');
    }]);
});