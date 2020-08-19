require('lib/angularjs-tools/angular-couch-potato');
const path = require('path');
angular.module('router', ['scs.couch-potato', 'ui.router']).config(['$stateProvider', '$urlRouterProvider', '$couchPotatoProvider',
    function ($stateProvider, $urlRouterProvider, $couchPotatoProvider) {
        $urlRouterProvider.otherwise('home');
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: path.join(__dirname, 'modules/home/index.tpl.html'),
            controller: 'homeCtrl',
            resolve: {
                dummy: $couchPotatoProvider.resolveDependencies([path.join(__dirname, 'modules/home/index.ctrl.js')])
            }
        })
    }]);