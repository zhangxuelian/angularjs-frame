// angular已经在webpack中设置了resolve的alias，本应不用require，但angular-ui-router（重命名为uiRouter）依赖
require('angular');
require('uiRouter');
require('oclazyload');

// 全局样式
require('assets/css/reset.less');
require('assets/css/layout.less');

// 将app模块传入路由器，路由中配置的控制器均在app上注册，统一管理各个路由页面的模块依赖
const app = require('./app');
require('./router')(app);

var main = angular.module('main', ['app', 'router']);

main.config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
}]);

main.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('stateChangeStart');
    })
    $rootScope.$on('$stateChangeSuccess', function () {
        console.log('stateChangeSuccess');
    })
    $rootScope.$on('$viewContentLoaded', function () {
        console.log('viewContentLoaded');
    })
}]);

angular.element(document).ready(function () {
    angular.bootstrap(document, [main['name'], function () {
        angular.element(document).find('html').addClass('ng-app');
    }]);
});