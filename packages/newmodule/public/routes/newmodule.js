'use strict';

angular.module('mean.newmodule').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('newmodule example page', {
            url: '/newmodule/example',
            templateUrl: 'newmodule/views/index.html'
        });
    }
]);
