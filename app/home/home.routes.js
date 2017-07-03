(function() {
    'use strict';

    angular.module('app')
        .config(function ($routeProvider) {
        	$routeProvider
            	.when('/home', {
                	templateUrl: 'home/view/index.html'
        	});
    	})
})();