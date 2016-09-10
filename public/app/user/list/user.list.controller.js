(function(){
    'user strict';

    const UserListController = function($scope, httpMethodsService, users){
        var vm = this;

        vm.users = [];
    };

    UserListController.$inject = ['$scope', 'httpMethodsService', 'users'];
    angular.module('UserModule').controller('UserListController', UserListController);
})();