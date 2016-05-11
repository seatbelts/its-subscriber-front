angular.module('its.listado')
	.controller('ListadoController', ['$scope', '$rootScope', '$state', 'toaster', 'APIServices', function($scope, $rootScope, $state, toaster, APIServices){

		$scope.proyectos = [];

		getAllProjects = function() {
			APIServices.getProjects()
				.then(function(res) {
					if (res.status === 200) {
						$scope.proyectos = res.data;
					}
				});
		}

		$scope.viewProject = function(id) {
			$state.go('app.viewProject', {id: id});
		}

		changeStatus = function(id, obj, aceptar) {
			if (aceptar) {
				obj.estatus = 3;
			} else {
				obj.estatus = 2
			}
			var materiaUrl = [];
			var categoriaUrl = '';
			obj.materia.forEach(function(element, index) {
				materiaUrl.push(element.url);
			});
			categoriaUrl = obj.categoria.url;
			obj.materia = materiaUrl;
			obj.categoria = categoriaUrl;
			APIServices.updateProjects(id, obj)
				.then(function(res) {
				});
		}

		$scope.aceptar = function(id, obj) {
			changeStatus(id, obj, true);
		}

		$scope.rechazar = function(id, obj) {
			changeStatus(id, obj, false);
		}
		
		getAllProjects();
	}]);