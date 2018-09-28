angular.module('starter')
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('adminMenu', {
                url: '/adminMenu',
                templateUrl: 'view/adminMenu.html',
                controller: 'adminMenu'
            });

        $stateProvider
            .state('checking', {
                url: '/checking',
                templateUrl: 'view/checking.html',
                controller: 'checking'
            });

        $stateProvider
            .state('configurationMenu', {
                url: '/configurationMenu',
                templateUrl: 'view/configurationMenu.html',
                controller: 'configurationMenu'
            });

        $stateProvider
            .state('configureGroups', {
                url: '/configureGroups',
                templateUrl: 'view/configureGroups.html',
                controller: 'configureGroups'
            });

        $stateProvider
            .state('configureRoutes', {
                url: '/configureRoutes',
                templateUrl: 'view/configureRoutes.html',
                controller: 'configureRoutes'
            });

        $stateProvider
            .state('configureStudents', {
                url: '/configureStudents',
                templateUrl: 'view/configureStudents.html',
                controller: 'configureStudents'
            });

        $stateProvider
            .state('configureUsers', {
                url: '/configureUsers',
                templateUrl: 'view/configureUsers.html',
                controller: 'configureUsers'
            });

        $stateProvider
            .state('documents', {
                url: '/documents',
                templateUrl: 'view/documents.html',
                controller: 'documents'
            });

        $stateProvider
            .state('launchPad', {
                url: '/launchPad',
                templateUrl: 'view/launchPad.html',
                controller: 'launchPad'
            });

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'view/login.html',
                controller: 'login'
            });

        $stateProvider
            .state('mainMenu', {
                url: '/mainMenu',
                templateUrl: 'view/mainMenu.html',
                controller: 'mainMenu'
            });

        $stateProvider
            .state('map', {
                url: '/map',
                templateUrl: 'view/map.html',
                controller: 'map'
            });

        $stateProvider
            .state('messageHistory', {
                url: '/messageHistory',
                templateUrl: 'view/messageHistory.html',
                controller: 'messageHistory'
            });

        $stateProvider
            .state('messageResponse', {
                url: '/messageResponse',
                templateUrl: 'view/messageResponse.html',
                controller: 'messageResponse'
            });

        $stateProvider
            .state('newMessage', {
                url: '/newMessage',
                templateUrl: 'view/newMessage.html',
                controller: 'newMessage'
            });

        $stateProvider
            .state('routeChecking', {
                url: '/routeChecking',
                templateUrl: 'view/routeChecking.html',
                controller: 'routeChecking'
            });

        $stateProvider
            .state('sendMessage', {
                url: '/sendMessage',
                templateUrl: 'view/sendMessage.html',
                controller: 'sendMessage'
            });

        $stateProvider
            .state('userInbox', {
                url: '/userInbox',
                templateUrl: 'view/userInbox.html',
                controller: 'userInbox'
            });

        $stateProvider
            .state('userInboxDetail', {
                url: '/userInboxDetail',
                templateUrl: 'view/userInboxDetail.html',
                controller: 'userInboxDetail'
            });

        $stateProvider
            .state('userProfile', {
                url: '/userProfile',
                templateUrl: 'view/userProfile.html',
                controller: 'userProfile'
            });

        $urlRouterProvider.otherwise('/launchPad');
    })
