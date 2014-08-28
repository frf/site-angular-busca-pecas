var services = angular.module('MeusServicos', ['ngResource']);

services.service('BuscaService', function($http) {

    this.getAll = function(callback) {
        $http({method: 'GET',
            url: 'http://pecas.guru/api/produto?busca=oleo',
            headers: {
                'Content-Type': 'application/json'                
            }
        }).success(callback);
    };
    
    
});