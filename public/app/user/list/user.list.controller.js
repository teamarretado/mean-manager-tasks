(function(){
    'user strict';

    const UserListController = function($scope, users){
        var vm = this;

        vm.users = users;
    };

    UserListController.$inject = ['$scope', 'users'];
    angular.module('UserListModule').controller('UserListController', UserListController);
})();