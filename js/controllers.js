'use strict';

var meusControllers = angular.module('MeusControllers', []);

/* Controllers */
meusControllers.controller('MainController', function($rootScope, $scope,CategoriaService,PgtoService) {

    $rootScope.$on("$routeChangeStart", function() {
        $rootScope.loading = true;
    });

    $rootScope.$on("$routeChangeSuccess", function() {
        $rootScope.loading = false;
    });
    
});
meusControllers.controller('lancamentoController',
        function($scope, $location, $routeParams) {
            var oProduto = [{
                'IdProd':'Teste 1',
                'Nome':'Nome 1'
            }];
            
            $scope.counter = 0;
            var aList = [];
            
            $scope.change = function() {
                var counter = $scope.counter++;
                aList.push(oProduto = {
                                'IdProd':'Teste ' + counter,
                                'Nome':'Nome ' + counter
                            });
            };
            
            $scope.aListLancamento = aList;
});
meusControllers.controller('addLancController', function($scope, $location, $routeParams, CategoriaService, PgtoService, LancamentoService) {

    $scope.lancamento = {};
    $scope.lancamentos = [];

    $scope.save = function() {
        var novoLancamento = {};

        novoLancamento.nome = $scope.lancamento.nome;
        novoLancamento.pgto = $scope.lancamento.pgto.objectId;
        novoLancamento.categoria = $scope.lancamento.categoria.objectId;
        novoLancamento.data = $scope.lancamento.data;

        $scope.lancamentos.push(novoLancamento);

        LancamentoService.save(novoLancamento, function(data) {
            if (data.objectId != null) {
                $location.path("/lancamento");
            }
        });

        $scope.lancamento = {};
    };

    CategoriaService.getAll(function(data) {
        $scope.aListCat = data.results;
    });
    PgtoService.getAll(function(data) {
        $scope.aListPgto = data.results;
    });

    if ($routeParams.id != null) {
        $scope.master = {id: $routeParams.id};
    }

    $scope.update = function(user) {
        console.log($scope.master);
        $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

    $scope.isUnchanged = function(user) {
        return angular.equals(user, $scope.master);
    };

    $scope.reset();

});

 
/*
// Declare the types.
var Post = Parse.Object.extend("Post");
var Comment = Parse.Object.extend("Comment");
 
// Create the post
var myPost = new Post();
myPost.set("title", "I'm Hungry");
myPost.set("content", "Where should we go for lunch?");
 
// Create the comment
var myComment = new Comment();
myComment.set("content", "Let's do Sushirrito.");
 
// Add the post as a value in the comment
myComment.set("parent", myPost);
 
// This will save both myPost and myComment
myComment.save();*/
/*
var Comment = Parse.Object.extend("Comment");

var query = new Parse.Query(Comment);
 
// Retrieve the most recent ones
query.descending("createdAt");
 
// Only retrieve the last ten
query.limit(10);
 
// Include the post data with each comment
query.include("Post");
//query.include(["post.author"]);


query.find({
  success: function(comments) {
     // console.log(comments.parent);
     
    // Comments now contains the last ten comments, and the "post" field
    // has been populated. For example:
    for (var i = 0; i < comments.length; i++) {
        console.log(comments[i].get('content'));
        var Post = comments[i].get('parent');
        Post.fetch({
            success: function(post) {
              var title = post.get("title");
               console.log(title);
            }
        });
    }
  }});*/
