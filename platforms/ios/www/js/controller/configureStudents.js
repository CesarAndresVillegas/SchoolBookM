angular.module('starter')
    .controller('configureStudents', function($scope, $rootScope, $ionicPopup, $state, $http, SharedService, $window) {
        $scope.student = {};
        $scope.idRegister;

        $scope.init = function() {

        };

        $scope.back = function() {
            $state.go("configurationMenu");
        };

        // CREAR un student
        $scope.createStudent = function() {
            if (!$scope.student.name) {
                $rootScope.showAlert('Error', 'Por favor ingrese el nombre del estudiante');
                return;
            }

            if (!$scope.student.last_name) {
                $rootScope.showAlert('Error', 'Por favor ingrese el apellido del estudiante');
                return;
            }

            if (!$scope.student.document) {
                $rootScope.showAlert('Error', 'Por favor ingrese el documento del estudiante');
                return;
            }

            if (!$scope.student.address) {
                $rootScope.showAlert('Error', 'Por favor ingrese la direccion del estudiante');
                return;
            }

            if (!$scope.student.current_grade) {
                $rootScope.showAlert('Error', 'Por favor ingrese el grado del estudiante');
                return;
            }

            $rootScope.showConfirm('Crear', 'Desea crear el registro ?').then(function(res) {
                if (res) {
                    var active = 0;
                    if (Number($scope.student.active)) {
                        active = 1;
                    }
                    var data = {
                        name: $scope.student.name,
                        last_name: $scope.student.last_name,
                        document: $scope.student.document,
                        address: $scope.student.address,
                        current_grade: $scope.student.current_grade,
                        active: active
                    };

                    $rootScope.show();
                    $http.post($rootScope._host + 'student/create', data)
                        .success(function(data) {
                            $rootScope.hide();
                            $rootScope.showAlert('Exito', data.message);
                            $scope.student = {};
                        })
                        .error(function(data) {
                            $rootScope.hide();
                            $rootScope.showAlert('Ha ocurrido un error', data.message);
                        });
                }
            });
        };

        // OBTENER todos los users
        $scope.getStudentsId = function() {
            if (!$scope.student.document) {
                $rootScope.showAlert('Error', 'Por favor ingrese el numero de documento');
                return;
            }

            $rootScope.show();
            $http.get($rootScope._host + 'student/getStudentDoc/' + $scope.student.document)
                .success(function(data) {
                    $scope.student = data.data;
                    $scope.idRegister = data.data.id;

                    if(Number(data.data.active)) {
                    	$scope.student.active = true;
                    } else {
                        $scope.student.active = false;
                    }

                    $rootScope.hide();
                })
                .error(function(data) {
                    $rootScope.hide();
                    $rootScope.showAlert('Ha ocurrido un error', data.message);
                });
        };

        // ACTUALIZAR un student por id.
        $scope.updateStudent = function() {
            if (!$scope.student.name) {
                $rootScope.showAlert('Error', 'Por favor ingrese el nombre del estudiante');
                return;
            }

            if (!$scope.student.last_name) {
                $rootScope.showAlert('Error', 'Por favor ingrese el apellido del estudiante');
                return;
            }

            if (!$scope.student.document) {
                $rootScope.showAlert('Error', 'Por favor ingrese el documento del estudiante');
                return;
            }

            if (!$scope.student.address) {
                $rootScope.showAlert('Error', 'Por favor ingrese la direccion del estudiante');
                return;
            }

            if (!$scope.student.current_grade) {
                $rootScope.showAlert('Error', 'Por favor ingrese el grado del estudiante');
                return;
            }

            if (!$scope.idRegister) {
                $rootScope.showAlert('Error', 'Por favor seleccione un estudiante del listado');
                return;
            }

            $rootScope.showConfirm('Actualizar', 'Desea actualizar el registro ?').then(function(res) {
                if (res) {
                    var active = 0;
                    if (Number($scope.student.active)) {
                        active = 1;
                    }
                    var data = {
                        id: $scope.idRegister,
                        name: $scope.student.name,
                        last_name: $scope.student.last_name,
                        document: $scope.student.document,
                        address: $scope.student.address,
                        current_grade: $scope.student.current_grade,
                        active: active
                    };

                    $rootScope.show();
                    $http.put($rootScope._host + 'student/update', data)
                        .success(function(data) {
                            $rootScope.hide();
                            $rootScope.showAlert('Exito', data.message);
                            $scope.student = {};
                        })
                        .error(function(data) {
                            $rootScope.hide();
                            $rootScope.showAlert('Ha ocurrido un error', data.message);
                        });
                }
            });
        };
    })
