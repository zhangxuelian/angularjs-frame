angular.module('router', ['ui.router']).config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'src/modules/home/index.tpl.html',
            controller: 'homeCtrl',
            resolve: {
                load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure([], function () {
                        let module = require('../modules/home/index.ctrl.js')(angular);
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