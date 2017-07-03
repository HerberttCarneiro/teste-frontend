(function() {
    'use strict';

    angular.module('app.pizza').config(routesConfig);

    routesConfig.$inject = ['$routeProvider'];

    function routesConfig($routeProvider){
        $routeProvider
            .when('/menu', {
                templateUrl: 'pizza/view/index.html',
                controller: 'MenuCtrl as vm',
                resolve: {
                    sabores: getSabores
                }
            })
            .when('/sabor/:id', {
                templateUrl: 'pizza/view/sabor.html',
                controller: 'SaboresCtrl as vm',
                resolve: {
                    sabor: getSabor,
                    ingredientes: getIngredientes,
                    bordas: getBordas,
                    tamanhos: getTamanhos
                }
            });
    }

    getSabores.$inject = ['pizzaService'];
    function getSabores(pizzaService){
        return pizzaService.getSabores().then(function(sabores){
            return sabores;
        });
    }

    getSabor.$inject = ['pizzaService', '$route'];
    function getSabor(pizzaService, $route){
        return pizzaService.getSabor($route.current.params.id).then(function(sabor){
            return sabor;
        });
    }

    getIngredientes.$inject = ['pizzaService'];
    function getIngredientes(pizzaService){
        return pizzaService.getIngredientes().then(function(ingredientes){
            return ingredientes;
        });
    }

    getBordas.$inject = ['pizzaService'];
    function getBordas(pizzaService){
        return pizzaService.getBordas().then(function(bordas){
            return bordas;
        });
    }

    getTamanhos.$inject = ['pizzaService'];
    function getTamanhos(pizzaService){
        return pizzaService.getTamanhos().then(function(tamanhos){
            return tamanhos;
        });
    }
})();


