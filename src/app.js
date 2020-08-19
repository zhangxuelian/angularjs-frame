require('angular');
require('oclazyload');
require('uiRouter');
require('./router');

const app = angular.module('app', ['router', 'ui.router', 'oc.lazyLoad']);

app.config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
}]);

app.run(['$rootScope', function ($rootScope) {
    /* $rootScope.$on("$stateChangeStart", [function () {
        console.log('stateChangeStart');
    }])
    $rootScope.$on("$stateChangeSuccess", [function () {
        console.log('stateChangeSuccess');
    }])
    $rootScope.$on("$viewContentLoaded", [function () {
        console.log('viewContentLoaded');
    }]) */
}]);
module.exports = app;