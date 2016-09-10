(function(){
    'user strict';

    const UserCreateController = function($scope, httpMethodsService){
        var vm = this;

        vm.user = {};

        vm.add = Add;
        vm.cancel = Cancel;

        function Add(){
            httpMethodsService.Post('url', vm.user)
                .then(function(response){
                   alert('Sucess!'); 
                })
                .catch(function(response){
                    alert('Failed...');
                });
        }

        function Cancel(){
            vm.user = {};
            $('ui.form').form('clear');
        }
    };

    UserCreateController.$inject = ['$scope', 'httpMethodsService'];
    angular.module('UserModule').controller('UserCreateController', UserCreateController);
})();