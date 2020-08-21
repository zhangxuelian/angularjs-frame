module.exports = (app) => {
    require('./index.less');
    app.controller('aboutCtrl', [function () {
        var self = this;
        self.vm = "作用域测试";
    }]);
}