(function(){
    'use strict';

    const HttpMethodsService = function($resource){
        var serverEndPoint = 'http://localhost:3030/';

        function Post(resourceUrl, model){
            var deferred = $q.defer();
            var resource = $resource(serverEndPoint.concat(resourceUrl), '', Config('POST'));
            var jsonModel = JSON.stringify(model);

            return resource.post(jsonModel).$promise;
        }

        function Put(resourceUrl, model){
            var deferred = $q.defer();
            var resource = $resource(serverEndPoint.concat(resourceUrl), '', Config('PUT'));
            var jsonModel = JSON.stringify(model);

            return resource.post(jsonModel).$promise;
        }

        function Get(resourceUrl){
            var deferred = $q.defer();
            var resource = $resource(serverEndPoint.concat(resourceUrl), '', Config('GET'));

            return resource.post(jsonModel).$promise;
        }

        function Delete(resourceUrl, model){
            var deferred = $q.defer();
            var resource = $resource(serverEndPoint.concat(resourceUrl), '', Config('DELETE'));
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
    angular.module('ServicesModule').service('httpMethodsService', HttpMethodsService)
})();