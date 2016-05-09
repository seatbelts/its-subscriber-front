angular.module('its.listado')
	.controller('ListadoController', ['$scope', '$state', 'APIServices', function($scope, $state, APIServices){

		$scope.proyectos = [];

		getAllProjects = function() {
			APIServices.getProjects()
				.then(function(res) {
					if (res.status === 200) {
						$scope.proyectos = res.data;
						console.log($scope.proyectos);
					}
				});
		}

		$scope.viewProject = function(id) {
			$state.go('app.viewProject', {id: id});
		}
		
		getAllProjects();
	}]);