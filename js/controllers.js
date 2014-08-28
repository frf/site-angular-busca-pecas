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
meusControllers.controller('lancamentoController',function($scope, $location, $routeParams, dataService) {
            
            var oData = dataService.getCustomers();
            var data = [];
            
            $scope.counter = 0;
            
            oData.success(function (data) {
                $scope.aList = data;
                $scope.counter = data.length;
            }).error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
                $scope.aList = data;
            });
            
            $scope.change = function() {
                //var counter = $scope.counter++;             
            };
            
});
meusControllers.controller('viewProd', function($scope, $location, $routeParams) {

    $scope.lancamento = {};
    $scope.lancamentos = [];

});
