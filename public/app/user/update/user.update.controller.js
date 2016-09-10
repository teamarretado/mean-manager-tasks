(function(){
    'user strict';

    const UserUpdateController = function($scope, httpMethodsService){
        var vm = this;

        vm.user = [];
    };

    UserUpdateController.$inject = ['$scope', 'httpMethodsService'];
    angular.module('UserModule').controller('UserUpdateController', UserUpdateController);
})();