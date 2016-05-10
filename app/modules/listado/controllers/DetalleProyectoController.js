angular.module('its.listado')
	.controller('DetalleProyectoController', ['$scope', '$rootScope', '$stateParams', 'APIServices', function($scope, $rootScope, $stateParams, APIServices){
		
		$scope.proyecto = {};

		getDetalle = function() {
			console.log($stateParams.id);
			APIServices.getOneProject($stateParams.id)
				.then(function(res) {
					if (res.status === 200) {
						$scope.proyecto = res.data;
					}
				});
		};

		getDetalle();
	}]);