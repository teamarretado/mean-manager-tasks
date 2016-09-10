(function(){
    'use strict';

    const Config = function($stateProvider){
        var UserCreateState = {
            name: 'user-list',
            url: '/user/list',
            templateUrl: 'app/user/list/user.list.view.html',
            controller: 'UserListController',
            controllerAs: 'vm',
            resolve: {
                users: ['$q', 'httpMethodsService', function GetUsers ($q, httpMethodsService){
                    var deferred = this.$q.defer();
                    httpMethodsService.Get()
                        .then(function(response){
                            deferred.resolve(response.data);    
                        })
                        .catch(function(response){
                            deferred.reject('Erro');
                        });
                    return deferred.promise;
                }]
            }
        }

        $stateProvider.state(UserCreateState);
    };

    Config.$inject = ['$stateProvider'];
    angular.module('UserListModule', []).config(Config);
})();