angular.module('its.maestros')
	.controller('MaestrosController', ['$scope', '$state', '$rootScope', 'APIServices', function($scope, $state, $rootScope, APIServices) {


		$scope.maestros = {};

		$scope.crearMaestro = function() {
			console.log('test');
			$state.go('app.crear');
		};
	}])