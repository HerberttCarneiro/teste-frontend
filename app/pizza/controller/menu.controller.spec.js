(function(){
    'use strict';

    describe('app.pizza MenuCtrl', function() {
      
        beforeEach(module('app.pizza'));

        var saboresMock = ['sabor 1', 'sabor 2'];
        var scope;
        beforeEach(inject(function($rootScope, $controller){
            scope = $rootScope.$new();
            $controller('MenuCtrl as menuCtrl', {
                $scope: scope,
                sabores: saboresMock
            });
        }));

        it('deve estar definida', function(){
            expect(scope.menuCtrl).toBeDefined();
        });

        describe('inicialização', function(){
            it('deve setar sabores no escopo', function(){
                expect(scope.menuCtrl.sabores).toEqual(saboresMock);
            });
        });
    });

})();