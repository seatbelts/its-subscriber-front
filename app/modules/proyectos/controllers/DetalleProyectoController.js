angular.module('its.proyectos')
	.controller('DetalleProyectoController', ['$scope', '$state', '$stateParams', '$localStorage', '$rootScope', 'APIServices', function($scope, $state, $stateParams, $localStorage, $rootScope, APIServices) {


		$scope.maestro = {};


		activate = function() {
			if (($rootScope.projectId == $stateParams.id)) {
				APIServices.getOneProject($rootScope.projectId)
					.then(function(res) {
						console.log(res.data);
						$scope.maestro = res.data;
						console.log($scope.maestro);
					});
			} else {
				$state.go('app.dashboard');
			}
		}

		activate();

	}]);