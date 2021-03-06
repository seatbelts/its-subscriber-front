angular.module('its.materias')
	.controller('CrearMateriaController', ['$scope', '$rootScope', '$state', 'toaster', 'APIServices', function($scope, $rootScope, $state, toaster, APIServices){

		$scope.materia = {};

		$scope.crear = function() {
			console.log($scope.materia);
			APIServices.createSubject($scope.materia)
				.then(function(res) {
					console.log(res);
					if (res.status === 201) {
						toaster.pop('success', 'Se creo la materia con exito');
						$state.go('app.materias');
					} else {
						toaster.pop('error', 'Error', 'Por favor verifique su informacion');
					}
				});
		};

	}]);