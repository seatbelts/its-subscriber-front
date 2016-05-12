angular.module('its.proyectos')
	.controller('ProyectosController', ['$scope', '$state', 'APIServices', function($scope, $state, APIServices) {
		
		var pc = this;
		pc.projects = [];

		function activate () {
		 	APIServices.getProjects()
		 		.then(function(res){
		 			pc.projects = res.data;
		 		})
		}
		
		$scope.ver = function(id) {
			$state.go('app.viewProject', {id: id});
		}

		pc.proyecto = {};
	    pc.proyecto.integrantes = [];
	    pc.integrantes = {};

	    pc.nuevoIntegrante = function() {
			pc.proyecto.integrantes.push(pc.integrantes);
			pc.integrantes = {};
		};

		activate();

	}]);