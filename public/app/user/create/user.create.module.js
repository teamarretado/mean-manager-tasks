(function(){
    'use strict';

    const Config = function($stateProvider){
        var UserCreateState = {
            name: 'user-create',
            url: '',
            templateUrl: '',
            controller: 'UserCreateController',
            contorllerAs: 'vm'
        }

        $stateProvider.state(UserCreateState);
    };

    Config.$inject = ['$stateProvider'];
    angular.module('UserCreateModule', []).config(Config);
})();