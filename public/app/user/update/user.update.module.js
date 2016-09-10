(function(){
    'use strict';

    const Config = function($stateProvider){
        // var UserCreateState = {
        //     name: 'user-update',
        //     url: '',
        //     templateUrl: '',
        //     controller: 'UserUpdateController',
        //     controllerAs: 'vm'
        // }

        // $stateProvider.state(UserCreateState);
    };

    Config.$inject = ['$stateProvider'];
    angular.module('UserUpdateModule', []).config(Config);
})();