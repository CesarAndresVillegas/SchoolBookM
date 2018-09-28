angular.module('starter')
    .controller('userInbox', function($scope, $rootScope, $ionicPopup, $state, $http, SharedService, $window) {
        $scope.routeFlag = false;
        $scope.inboxList = [];
        $scope.idUserCurrentIndex;

        $scope.init = function() {
            if (SharedService.selectedType == "Route") {
                $scope.routeFlag = true;
            }
            $scope.getAllInboxList();
            if (SharedService.backScreen == "userInbox") {
                if(SharedService.userData.roles_id == 3 || SharedService.userData.roles_id == 4 || SharedService.userData.roles_id == 5){
                    SharedService.backScreen = "adminMenu";
                } else {
                    SharedService.backScreen = "mainMenu";
                }
            }
        };

        $scope.back = function() {
            $state.go(SharedService.backScreen);
        };

        $scope.getAllInboxList = function() {
            $rootScope.show();
            var type = 0;
            if(SharedService.selectedType == "Documents"){
                var type = 1;
            } else if(SharedService.selectedType == "Follows") {
                var type = 2;
            } else if(SharedService.selectedType == "Restaurant") {
                var type = 3;
            } else if(SharedService.selectedType == "Family") {
                var type = 4;
            } else if(SharedService.selectedType == "Rectory") {
                var type = 5;
            } else if(SharedService.selectedType == "Route") {
                var type = 6;
            }

            $http.get($rootScope._host + 'messages_users/getUserInboxType/' + SharedService.userData.id + '/' + type)
                .success(function(data) {
                    $scope.inboxList = data.data;
                    $rootScope.hide();
                })
                .error(function(data) {
                    $rootScope.hide();
                    $rootScope.showAlert('Ha ocurrido un error', data.message);
                });
        };

        $scope.selectMessage = function(index) {
            var data = {
                id: $scope.inboxList[index].mu_id,
                readed: 1
            };

            $rootScope.show();
            $http.put($rootScope._host + 'messages_users/updateMessagesReaded', data)
                .success(function(data) {
                    SharedService.selectedMessage = $scope.inboxList[index];
                    $rootScope.hide();
                    SharedService.backScreen = "userInbox";
                    $state.go("userInboxDetail");
                })
                .error(function(data) {
                    $rootScope.hide();
                });
        };

        $scope.addFav = function(index) {
            var favourite;
            if (Number($scope.inboxList[index].fav)) {
                favourite = "0";
            } else {
                favourite = "1";
            }

            var data = {
                id: $scope.inboxList[index].mu_id,
                fav: favourite
            };

            $rootScope.show();
            $http.put($rootScope._host + 'messages_users/updateMessagesFav', data)
                .success(function(data) {
                    $rootScope.hide();
                    $scope.getAllInboxList();
                })
                .error(function(data) {
                    $rootScope.hide();
                });
        };

        $scope.goMap = function(index) {
            $state.go("map");
        };

        $scope.goChecking = function(index) {
            $state.go("checking");
        };
    })
