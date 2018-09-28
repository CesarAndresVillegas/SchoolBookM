angular.module('starter')
    .controller('routeChecking', function($scope, $rootScope, $ionicPopup, $state, $http, SharedService, $window) {
        $scope.routeFlag = false;

        $scope.init = function() {
            
        };

        $scope.back = function() {
            $state.go("adminMenu");
        };

        $scope.checkIn = function(index) {
            alert("Checkeado");
        };
    })
