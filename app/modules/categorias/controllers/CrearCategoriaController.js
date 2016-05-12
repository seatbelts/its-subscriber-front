angular.module('its.categorias')
	.controller('CrearCategoriaController', ['$scope', '$rootScope', '$state', 'toaster', 'APIServices', function($scope, $rootScope, $state, toaster, APIServices){

		$scope.categoria = {};

		$scope.crear = function() {
			APIServices.createCategories($scope.categoria)
				.then(function(res) {
					if (res.status === 201) {
						toaster.pop('success', 'Se creo la categoria con exito');
						$state.go('app.categorias');
					} else {
						toaster.pop('error', 'Error', 'Por favor verifique su informacion');
					}
				});
		};

	}]);