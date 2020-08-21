module.exports = (app) => {
    require('./index.less');
    app.controller('aboutCtrl', [function () {
        var home = this;
        home.vm = "作用域测试";
    }]);
}