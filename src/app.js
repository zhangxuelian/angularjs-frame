require('lib$/angularjs-tools/angular-couch-potato');
require('./router');

const app = angular.module('app', ['scs.couch-potato', 'router']);

module.exports = app;