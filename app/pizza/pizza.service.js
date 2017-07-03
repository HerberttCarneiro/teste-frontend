(function(){
    'use strict';

    angular.module('app.pizza').factory('pizzaService', pizzaService);

    pizzaService.$inject = ['$http','API'];

    function pizzaService($http, API){
        
        return {
            getSabores: getSabores,
            getSabor: getSabor,
            getTamanhos: getTamanhos,
            getTamanho: getTamanho,
            getBordas: getBordas,
            getBorda: getBorda,
            getIngredientes: getIngredientes
        };

        function getSabores(){
            return $http.get(API + 'sabores').then(responseHandler);
        }

        function getSabor(id){
            return $http.get(API + 'sabor/' + id).then(responseHandler);
        }

        function getTamanhos(){
            return $http.get(API + 'tamanhos').then(responseHandler);
        }

        function getTamanho(id){
            return $http.get(API + 'tamanho/' + id).then(responseHandler);
        }

        function getBordas(){
            return $http.get(API + 'bordas').then(responseHandler);
        }

        function getBorda(id){
            return $http.get(API + 'borda/' + id).then(responseHandler);
        }

        function getIngredientes(){
            return $http.get(API + 'ingredientes').then(responseHandler);
        }

        function responseHandler(response){
            return response.data;
        }
    }
})();