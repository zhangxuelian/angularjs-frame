const couchPotato = require('lib/angularjs-tools/angular-couch-potato');
require('lib/angular-ui-router/release/angular-ui-router');
require('./router');

const app = angular.module('app', ['scs.couch-potato', 'router', 'ui.router']);

couchPotato.configureApp(app);

app.config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
}]);

app.run(['$couchPotato', '$rootScope', function ($couchPotato, $rootScope) {
    app.lazy = $couchPotato;
    $rootScope.$on("$stateChangeStart", [() => {
        console.log('stateChangeStart');
    }])
    $rootScope.$on("$stateChangeSuccess", [() => {
        console.log('stateChangeSuccess');
    }])
    $rootScope.$on("$viewContentLoaded", [() => {
        console.log('viewContentLoaded');
    }])
}]);

module.exports = app;