(function(){
	'use strict';

	describe('app.pizza pizzaService', function() {
	  
	  beforeEach(module('app.pizza'));

	  var pizzaService, $http, $q, API, $rootScope;
	  beforeEach(inject(function(_pizzaService_, _$http_, _$q_, _API_, _$rootScope_){
	  	pizzaService = _pizzaService_;
	  	$http = _$http_;
	  	$q = _$q_;
	  	API = _API_;
	  	$rootScope = _$rootScope_;
	  }));

	  describe('getSabores', function(){
	  	it('deve retornar os sabores consultados do backend', function(){
	  		var saborMock = {data: 'sabor mock'};
	  		spyOn($http, 'get').and.returnValue($q.resolve(saborMock));

	  		var resultado = pizzaService.getSabores();
	  		$rootScope.$digest();

	  		expect($http.get).toHaveBeenCalledWith(API + 'sabores');
	  		expect(resultado.$$state.value).toEqual(saborMock.data);
	  	});
	  });

	  describe('getSabor', function(){
	  	it('deve retornar o sabor solicitado', function(){
	  		var saborMock = {data: 'sabor solicitado mock'};
	  		spyOn($http, 'get').and.returnValue($q.resolve(saborMock));

	  		var id = 123;
	  		var resultado = pizzaService.getSabor(id);
	  		$rootScope.$digest();

	  		expect($http.get).toHaveBeenCalledWith(API + 'sabor/' + id);
	  		expect(resultado.$$state.value).toEqual(saborMock.data);
	  	});
	  });
	});

})();