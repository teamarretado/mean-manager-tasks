(function(){
    'use strict';

    const Config = function($stateProvider, $q, httpMethodsService){
        var UserCreateState = {
            name: 'user-list',
            url: '',
            templateUrl: '',
            controller: 'UserListController',
            controllerAs: 'vm',
            resolve: {
                users: function(){
                    var deferred = $q.defer();
                    httpMethodsService.Get()
                        .then(function(response){
                            deferred.resolve(response.data);
                        })
                        .catch(function(response){
                            deferred.reject('Erro');
                        });
                    return deferred.promise;
                } 
            }
        }

        $stateProvider.state(UserCreateState);
    };

    Config.$inject = ['$stateProvider', '$q', 'httpMethodsService'];
    angular.module('UserListModule', []).config(Config);
})();