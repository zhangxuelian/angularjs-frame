module.exports = (app) => {
    require('./index.less');
    app.controller('newCtrl', [function () {
        var home = this;
        home.vm = "作用域测试";
    }]);
}