(function(){
    'use strict';

    const HttpMethodsService = function($resource){
        serverEndPoint = 'http://localhost:????/';

        function Post(resourceUrl, model){
            var deferred = $q.defer();
            var resource = $resource(resourceUrl, null, Config('POST'));
            var jsonModel = JSON.stringify(model);

            return resource.post(jsonModel).$promise;
        }

        function Put(resourceUrl, model){
            var deferred = $q.defer();
            var resource = $resource(resourceUrl, null, Config('PUT'));
            var jsonModel = JSON.stringify(model);

            return resource.post(jsonModel).$promise;
        }

        function Get(resourceUrl){
            var deferred = $q.defer();
            var resource = $resource(resourceUrl, null, Config('GET'));

            return resource.post(jsonModel).$promise;
        }

        function Delete(resourceUrl, model){
            var deferred = $q.defer();
            var resource = $resource(resourceUrl, null, Config('DELETE'));
            var jsonModel = JSON.stringify(model);

            return resource.post(jsonModel).$promise;
        }

        function Config(method){
            switch(method){
                case 'POST':
                    return { post: {method: 'POST', headers: {'application': 'json'}}};
                case 'PUT':
                    return { update: {method: 'PUT', headers: {'application': 'json'}}};
                case 'DELETE':
                    return { delete: {method: 'DELETE', headers: {'application': 'json'}}};
                default:
                    return { get: {method: 'GET', headers: {'application': 'json'}}};
            }
        }
    };

    HttpMethodsService.$inject = ['$resource'];
    angular.module('AppCommonsModule').service('httpMethodsService', HttpMethodsService)
})();