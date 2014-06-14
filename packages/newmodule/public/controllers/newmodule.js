'use strict';

angular.module('mean.newmodule').controller('NewmoduleController', ['$scope', 'Global', 'Newmodule',
    function($scope, Global, Newmodule) {
        $scope.global = Global;
        $scope.package = {
            name: 'newmodule'
        };
    }
]);
