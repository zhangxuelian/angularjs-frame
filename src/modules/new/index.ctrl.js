module.exports = (app) => {
    require('./index.less');
    app.controller('newCtrl', [function () {
        var self = this;
        self.vm = "作用域测试";
    }]);
}