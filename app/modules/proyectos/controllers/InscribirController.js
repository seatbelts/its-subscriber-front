angular.module('its.proyectos')
	.controller('InscribirController', ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope){
		$scope.proyecto = {};
	    $scope.proyecto.integrantes = []
	    $scope.integrantes = {}

	    $scope.nuevoIntegrante = function() {
			console.log($scope.integrantes);
			$scope.proyecto.integrantes.push($scope.integrantes);
			console.log($scope.proyecto.integrantes);
			$scope.integrantes = {};
		};
	}]);