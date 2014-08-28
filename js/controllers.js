'use strict';

var meusControllers = angular.module('MeusControllers', []);

/* Controllers */
meusControllers.controller('MainController', function($rootScope, $scope) {

    $rootScope.$on("$routeChangeStart", function() {
        $rootScope.loading = true;
    });

    $rootScope.$on("$routeChangeSuccess", function() {
        $rootScope.loading = false;
    });
    
});
meusControllers.controller('lancamentoController',
        function($scope, $location, $routeParams,$http) {
            var aList = [];
            
            
            $http.get('http://www.pecas.guru/api/produto?busca=oleo').
                success(function(data, status, headers, config) {
                    //$scope.posts = data;
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
              
            }).
            error(function(data, status, headers, config) {
              // log error
                
                    console.log(status);
                
            });
            
          
            $scope.counter = 0;
            $scope.aList = aList;
            
            $scope.change = function() {
                var counter = $scope.counter++;
             
            };
            
            $scope.aListLancamento = aList;
});
meusControllers.controller('addLancController', function($scope, $location, $routeParams) {

    $scope.lancamento = {};
    $scope.lancamentos = [];

});
