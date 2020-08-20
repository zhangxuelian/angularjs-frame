angular.module('router', ['ui.router']).config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateProvider: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                let deferred = $q.defer();
                require.ensure([], function () {
                    let template = require('../modules/home/index.tpl.html');
                    $ocLazyLoad.load({
                        name: 'home'
                    });
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'homeCtrl',
            controllerAs: 'home',
            resolve: {
                load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure([], function () {
                        let module = require('../modules/home/index.ctrl.js');
                        $ocLazyLoad.load({
                            name: 'home'
                        });
                        deferred.resolve(module);
                    });
                    return deferred.promise;
                }]
            }
        })
    }]);