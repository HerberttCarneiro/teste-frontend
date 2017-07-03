(function() {
    'use strict';

    angular.module('app.pizza')
        .controller('SaboresCtrl', SaboresCtrl);

    SaboresCtrl.$inject = ['pizzaService', 'sabor', 'ingredientes', 'bordas', 'tamanhos'];

    function SaboresCtrl(pizzaService, sabor, ingredientes, bordas, tamanhos) {
        var vm = this;
    
        vm.sabor                     = sabor;
        vm.ingredientes              = ingredientes;
        vm.bordas                    = bordas;
        vm.tamanhos                  = tamanhos;
        vm.addIngrediente            = addIngrediente;
        vm.getTamanho                = getTamanho;
        vm.getBorda                  = getBorda;
        vm.calcularPrecoIngredientes = calcularPrecoIngredientes;
        vm.calcularPrecoFinal        = calcularPrecoFinal;
        vm.gerarTempoEntrega         = gerarTempoEntrega;
        vm.conferirTempo             = conferirTempo;

        vm.pizza = {
            sabor: {},
            borda: {},
            tamanho: {},
            ingredientes: [],
            entrega: '',
            preco: {
                entrega: 10,
            }
        };
        
        vm.addIngrediente(vm.sabor.ingredientes);

        function addIngrediente(ingredientes) {
            angular.forEach(ingredientes, function(value, key){
                vm.pizza.ingredientes.push(value);
            });
        }


        function getTamanho() {
            pizzaService.getTamanho(vm.pizza.tamanho.id).then(function(tamanho){
                vm.pizza.preco.tamanho = tamanho.peso;
                vm.pizza.tamanho.nome  = tamanho.tamanho;
            });
        }

        function getBorda() {
            pizzaService.getBorda(vm.pizza.borda.id).then(function(borda){
                vm.pizza.preco.borda = borda.valor;
                vm.pizza.borda.nome  = borda.borda;
            });
        }

        function calcularPrecoIngredientes() {
            angular.forEach(vm.pizza.ingredientes, function(value, key){
                vm.pizza.preco.ingredientes = value.preco + vm.pizza.preco.ingredientes ;
            });
            return vm.pizza.ingredientes;
        }

        function calcularPrecoFinal() {
            vm.pizza.preco.final        = 0; 
            vm.pizza.preco.ingredientes = 0;
            
            vm.calcularPrecoIngredientes();
            vm.conferirTempo();

            vm.pizza.preco.final = vm.pizza.preco.ingredientes * vm.pizza.preco.tamanho;
            vm.pizza.preco.final += vm.pizza.preco.borda + vm.pizza.preco.entrega;
            vm.pizza.preco.final *= vm.pizza.preco.desconto;
        }

        function gerarTempoEntrega() {
            vm.pizza.entrega = Math.floor(Math.random() * ((60-20)+1) + 20);
            return vm.pizza.entrega;
        }

        function conferirTempo() {
            vm.gerarTempoEntrega();
            if (vm.pizza.entrega > 40) {
                 return vm.pizza.preco.desconto = 0.9
            }
            return vm.pizza.preco.desconto = 1;
        }
    }
})();
