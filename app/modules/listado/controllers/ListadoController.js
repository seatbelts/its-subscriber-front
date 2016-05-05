angular.module('its.listado')
	.controller('ListadoController', ['$scope', '$state', '$rootScope', 'APIServices', function($scope, $state, $rootScope, APIServices){

		$scope.proyectos = {};

		getAllProjects = function() {
			APIServices.getProjects()
				.then(function(res) {
					console.log(res);
					if (res.status === 200) {
						$scope.proyectos = res.data;
						console.log($scope.proyectos);
					}
				});
		}

		$scope.viewProject = function(id) {
			console.log(id);
			$state.go('app.viewProject', {id: id});
		}
		
		getAllProjects();
	}]);