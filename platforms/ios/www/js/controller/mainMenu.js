angular.module('starter')
    .controller('mainMenu', function($scope, $rootScope, $ionicPopup, $state, $http, SharedService, $window) {
        $scope.messageTextDocuments = "Documentos";
        $scope.messageTextFollows = "Seguimiento";
        $scope.messageTextRestaurant = "Restaurante";
        $scope.messageTextAsofamily = "Asofamilia";
        $scope.messageTextRectory = "Rectoria";
        $scope.messageTextRoute = "Ruta";

        $scope.init = function() {
            $scope.updateInbox();
        };

        $scope.updateInbox = function() {
            $rootScope.show();
            $http.get($rootScope._host + 'messages_users/getUserInbox/' + SharedService.userData.id)
                .success(function(data) {
                    if(data.data.messages_type_id == 1) {
                        $scope.messageTextDocuments = $scope.messageTextDocuments + "(" + data.data.cant + ")";
                    }
                    if(data.data.messages_type_id == 2) {
                        $scope.messageTextFollows = $scope.messageTextFollows + "(" + data.data.cant + ")";
                    }
                    if(data.data.messages_type_id == 3) {
                        $scope.messageTextRestaurant = $scope.messageTextRestaurant + "(" + data.data.cant + ")";
                    }
                    if(data.data.messages_type_id == 4) {
                        $scope.messageTextAsofamily = $scope.messageTextAsofamily + "(" + data.data.cant + ")";
                    }
                    if(data.data.messages_type_id == 5) {
                        $scope.messageTextRectory = $scope.messageTextRectory + "(" + data.data.cant + ")";
                    }
                    if(data.data.messages_type_id == 6) {
                        $scope.messageTextRoute = $scope.messageTextRoute + "(" + data.data.cant + ")";
                    }
                    $rootScope.hide();
                }).error(function(err) {
                    $rootScope.hide();
                });
        };

        $scope.back = function() {
            $state.go("login");
        };

        $scope.userProfile = function() {
            $state.go("userProfile");
        };

        $scope.userInbox = function(type) {
            SharedService.selectedType = type;
            SharedService.backScreen = "mainMenu";
            $state.go("userInbox");
        };

        $scope.sendMessage = function() {
            $state.go("newMessage");
        };
    })
