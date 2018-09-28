angular.module('starter')
    .controller('login', function($scope, $rootScope, $ionicPopup, $state, $http, SharedService, $window) {
        // Objeto de usuario.
        $scope.user = {};
        $scope.isProcessing = false;

        $scope.init = function() {

        };

        $scope.back = function() {
            $state.go("launchPad");
        };

        $scope.login = function() {
            if (!$scope.user.user) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Ha ocurrido un error.',
                    template: 'Ingrese un nombre de usuario'
                });
                return;
            }

            if (!$scope.user.pass) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Ha ocurrido un error.',
                    template: 'Ingrese una contraseña'
                });
                return;
            }
            $rootScope.show();
            $http.get($rootScope._host + 'users/login/' + $scope.user.user + '/' + $scope.user.pass)
                .success(function(data) {
                    $window.localStorage.setItem('user', $scope.user.user);
                    $window.localStorage.setItem('pass', $scope.user.pass);
                    SharedService.userData = data.data;
                    $rootScope.hide();
                    if (data.data.roles_id == 2) {
                        $state.go("mainMenu");
                    } else {
                        $state.go("adminMenu");
                    }
                }).error(function(err) {
                    $rootScope.hide();
                    $rootScope.showAlert("Error", err.message);
                });
        };
    })
