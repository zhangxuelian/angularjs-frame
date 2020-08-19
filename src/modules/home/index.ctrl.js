module.exports = (Angular) => {
    const home = Angular.module('home', []);
    //require('./index.less');
    home.controller('homeCtrl', ['$scope', function ($scope) {
        $scope.test = "作用域测试";
    }]);
}