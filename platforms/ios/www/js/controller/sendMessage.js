angular.module('starter')
    .controller('sendMessage', function($scope, $rootScope, $ionicPopup, $state, $http, SharedService, $window) {
        // Objeto de usuario.
        $scope.init = function() {

        };

        $scope.back = function() {
            $state.go("mainMenu");
        };
    })
