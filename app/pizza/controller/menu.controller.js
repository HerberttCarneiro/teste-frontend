(function() {
    'use strict';

    angular.module('app.pizza').controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['sabores'];

    function MenuCtrl(sabores) {
        var vm = this;
        vm.sabores = sabores;
    }
})();
