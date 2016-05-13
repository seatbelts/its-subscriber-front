angular.module('its.listado')
	.controller('DetalleProyectoController', ['$scope', '$rootScope', '$state', '$stateParams', '$localStorage', 'toaster', 'APIServices', function($scope, $rootScope, $state, $stateParams, $localStorage, toaster, APIServices){
		
		$scope.proyecto = {};
		$scope.isAdmin = false;

		getDetalle = function() {
			APIServices.getOneProject($stateParams.id)
				.then(function(res) {
					if (res.status === 200) {
						$scope.proyecto = res.data;
					}
				});
		};

		activate = function() {
			if ($localStorage.user.role === "admin") {
				$scope.isAdmin = true;
			}
			console.log($scope.isAdmin);
		}

		$scope.guardar = function() {
			console.log($scope.proyecto);
			var materiaUrl = [];
			var categoriaUrl = '';
			$scope.proyecto.materia.forEach(function(element, index) {
				materiaUrl.push(element.url);
			});
			categoriaUrl = $scope.proyecto.categoria.url;
			$scope.proyecto.materia = materiaUrl;
			$scope.proyecto.categoria = categoriaUrl;
			console.log($scope.proyecto);
			APIServices.updateProjects($scope.proyecto.id, $scope.proyecto)
				.then(function(res) {
					if (res.status === 200) {
						toaster.pop('success', 'Exito', 'Se actualizo el equipo con exito');
						$state.go('app.listado')
					}
					console.log(res);
				});
		};

		activate();
		getDetalle();
	}]);