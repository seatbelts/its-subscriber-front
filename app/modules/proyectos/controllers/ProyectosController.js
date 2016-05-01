(function() {
	var ProyectosController;
	ProyectosController = function($scope, $state, $rootScope) {

		$scope.proyecto = {};
	    $scope.proyecto.integrantes = []
	    $scope.integrantes = {}

	    $scope.nuevoIntegrante = function() {
			console.log($scope.integrantes);
			$scope.proyecto.integrantes.push($scope.integrantes);
			console.log($scope.proyecto.integrantes);
			$scope.integrantes = {};
		};

	};
	return angular.module('its.proyectos').controller('ProyectosController', ProyectosController);
})();