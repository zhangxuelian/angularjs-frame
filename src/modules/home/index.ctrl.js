require('./index.less');
const home = angular.module('home', []);
home.controller('homeCtrl', ['$scope', function ($scope) {
    var home = this;
    home.vm = "作用域测试";
}]);