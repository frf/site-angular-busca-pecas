/* App Module */
var app = angular.module('MobileAngularUiExamples', 
    ["ngRoute",
        "MinhasDirectives",
        "MeusControllers",
        "MeusServicos",
        "mobile-angular-ui",
        "mobile-angular-ui.touch",
        "mobile-angular-ui.scrollable"]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {templateUrl: "home.html"});
    $routeProvider.when('/viewProd/:id', {templateUrl: "view.html",controller:'lancamentoController'});
    $routeProvider.when('/lancamento', {templateUrl: "listar-lanc.html",controller:'lancamentoController'});
});
