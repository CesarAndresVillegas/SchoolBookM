angular.module('starter')
    .controller('userProfile', function($scope, $rootScope, $ionicPopup, $state, $http, SharedService, $window) {
        $scope.user = {};

        $scope.init = function() {
            $scope.getUsers();
        };

        $scope.back = function() {
            $state.go("mainMenu");
        };

        // OBTENER un users por id.
        $scope.getUsers = function() {
            $rootScope.show();
            $http.get($rootScope._host + 'users/get/' + SharedService.userData.id)
                .success(function(data) {
                    $rootScope.hide();
                    $scope.user = data.data;
                })
                .error(function(data) {
                    $rootScope.hide();
                    $rootScope.showAlert('ERROR', data.message);
                });
        };

        // ACTUALIZAR un users por id.
        $scope.updateUsers = function() {
            if (!$scope.user.name) {
                $rootScope.showAlert('Error', 'Por favor ingrese el nombre del usuario');
                return;
            }

            if (!$scope.user.last_name) {
                $rootScope.showAlert('Error', 'Por favor ingrese el apellido del usuario');
                return;
            }

            if (!$scope.user.document) {
                $rootScope.showAlert('Error', 'Por favor ingrese el documento del usuario');
                return;
            }

            if (!$scope.user.phone) {
                $rootScope.showAlert('Error', 'Por favor ingrese el número telefónico del usuario');
                return;
            }

            if (!$scope.user.address) {
                $rootScope.showAlert('Error', 'Por favor ingrese la dirección del usuario');
                return;
            }

            var activeInput = 1;

            if (!Number($scope.user.active)) {
                $rootScope.showConfirm('ATENCIÓN!', 'Desea desactivar su usuario? <br> Si es así no volvera a recibir datos de ningún tipo y el sistema entenderá que ud ya no hace parte de la red de usuarios').then(function(res) {
                    if (!res) {
                        return;
                    } else {
                        activeInput = 0;
                    }
                })
            }

            $rootScope.showConfirm('Actualizar', 'Desea actualizar los datos del usuario?').then(function(res) {
                if (res) {
                    var data = {
                        id: SharedService.userData.id,
                        name: $scope.user.name,
                        last_name: $scope.user.last_name,
                        document: $scope.user.document,
                        phone: $scope.user.phone,
                        address: $scope.user.address,
                        active: activeInput
                    };

                    $rootScope.show();
                    $http.put($rootScope._host + 'users/updateUser', data)
                        .success(function(data) {
                            $rootScope.hide();
                            $rootScope.showAlert('Exito', data.message);
                        })
                        .error(function(data) {
                            $rootScope.hide();
                            $rootScope.showAlert('ERROR', data.message);
                        });
                }
            });
        };

        // ACTUALIZAR un users por id.
        $scope.updateUsersPass = function() {
            if (!$scope.user.pass1) {
                $rootScope.showAlert('Error', 'Por favor ingrese la contraseña');
                return;
            }

            if (!$scope.user.pass2) {
                $rootScope.showAlert('Error', 'Por favor confirme su contraseña');
                return;
            }

            if ($scope.user.pass1 != $scope.user.pass2) {
                $rootScope.showAlert('Error', 'Las contraseñas no coinciden');
                return;
            }

            $rootScope.showConfirm('Actualizar', 'Desea actualizar la contraseña?').then(function(res) {
                if (res) {
                    var data = {
                        id: SharedService.userData.id,
                        pass: $scope.user.pass1
                    };

                    $rootScope.show();
                    $http.put($rootScope._host + 'users/updateUsersPass', data)
                        .success(function(data) {
                            $rootScope.hide();
                            $rootScope.showAlert('Exito', data.message);
                        })
                        .error(function(data) {
                            $rootScope.hide();
                            $rootScope.showAlert('ERROR', data.message);
                        });
                }
            });
        };
    })
