module.exports = (app) => {
    require('./index.less');
    app.controller('homeCtrl', [function () {
        var self = this;
        self.vm = "作用域测试";
    }]);
}
