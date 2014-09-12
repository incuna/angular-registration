(function (angular) {
    'use strict';

    var module = angular.module('user_management.profile');

    module.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/profile/', {
                    templateUrl: 'templates/user_management/profile/profile.html',
                    controller: 'ProfileCtrl',
                    anonymous: false
                });
        }
    ]);

}(window.angular));
