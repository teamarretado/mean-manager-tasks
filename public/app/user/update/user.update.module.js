(function(){
    'use strict';

    const Config = function($stateProvider, $q, httpMethodsService){
        var UserCreateState = {
            name: 'user-update',
            url: '',
            templateUrl: '',
            controller: 'UserUpdateController',
            controllerAs: 'vm'
        }

        $stateProvider.state(UserCreateState);
    };

    Config.$inject = ['$stateProvider', '$q', 'httpMethodsService'];
    angular.module('UserUpdateModule', []).config(Config);
})();