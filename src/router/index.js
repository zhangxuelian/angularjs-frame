module.exports = (app) => {
    angular.module('router', ['ui.router', 'oc.lazyLoad']).config(['$stateProvider',
        function ($stateProvider) {

            $stateProvider.state('home', {
                url: '/home',
                template: require('modules/home/index.tpl.html'),
                controller: 'homeCtrl',
                controllerAs: 'home',
                resolve: {
                    load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                        let deferred = $q.defer();
                        require.ensure([], function () {
                            let module = require('modules/home/index.ctrl.js')(app);
                            // name为module的模块名
                            $ocLazyLoad.load({
                                name: 'app'
                            });
                            deferred.resolve(module);
                        });
                        return deferred.promise;
                    }]
                }
            });

            $stateProvider.state('new', {
                url: '/new',
                template: require('modules/new/index.tpl.html'),
                controller: 'newCtrl',
                controllerAs: 'new',
                resolve: {
                    load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                        let deferred = $q.defer();
                        require.ensure([], function () {
                            let module = require('modules/new/index.ctrl.js')(app);
                            // name为module的模块名
                            $ocLazyLoad.load({
                                name: 'app'
                            });
                            deferred.resolve(module);
                        });
                        return deferred.promise;
                    }]
                }
            });

            $stateProvider.state('about', {
                url: '/about',
                template: require('modules/about/index.tpl.html'),
                controller: 'aboutCtrl',
                controllerAs: 'about',
                resolve: {
                    load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                        let deferred = $q.defer();
                        require.ensure([], function () {
                            let module = require('modules/about/index.ctrl.js')(app);
                            // name为module的模块名
                            $ocLazyLoad.load({
                                name: 'app'
                            });
                            deferred.resolve(module);
                        });
                        return deferred.promise;
                    }]
                }
            })
            
        }]);
}
