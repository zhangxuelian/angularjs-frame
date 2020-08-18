const app = require('./app');
app.registerController('homeCtrl', ['$scope', function ($scope) {
    $scope.test = "首页";
}])
