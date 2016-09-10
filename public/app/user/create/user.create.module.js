(function(){
    'use strict';

    const Config = function($stateProvider){
        var UserCreateState = {
            name: 'user-create',
            url: '/user/create',
            templateUrl: './app/user/create/user.create.view.html',
            controller: 'UserCreateController',
            contorllerAs: 'vm'
        }

        $stateProvider.state(UserCreateState);
    };

    Config.$inject = ['$stateProvider'];
    angular.module('UserCreateModule', []).config(Config);
})();