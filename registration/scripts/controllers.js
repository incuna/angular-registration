(function () {
    'use strict';

    var registration = angular.module('angular-registration');

    registration.controller('ProfileCtrl', ['$scope', 'gettextCatalog', function ($scope, gettextCatalog) {
        $scope.app.page.title = gettextCatalog.getString('My profile');
    }]);
}());