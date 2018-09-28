angular.module('starter')
    .factory('SharedService', function() {
        var SharedService = {
            userData: {},
            selectedType: "",
            backScreen: "",
            selectedHost: [{id:1, host: "http://jbgs-5msq.accessdomain.com/develop_test/school_book/school_book_api/v1.0/"}]
        };
        return SharedService;
    });
