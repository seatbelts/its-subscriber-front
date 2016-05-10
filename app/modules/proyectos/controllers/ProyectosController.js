(function() {
	var ProyectosController;
	ProyectosController = function($scope, $state, APIServices) {

		var pc = this;
		pc.projects = [];

		function activate () {
		 	APIServices.getProjects()
		 		.then(function(res){
		 			console.log('pc.projects', res)
		 			pc.projects = res.data;
		 		})
		}

		activate();

		// TODO Agregar otra vista para ver la informacion del proyecto
		
		$scope.ver = function(id) {
			$state.go('app.viewProject', {id: id});
		}

		pc.proyecto = {};
	    pc.proyecto.integrantes = [];
	    pc.integrantes = {};

	    pc.nuevoIntegrante = function() {
			console.log(pc.integrantes);
			pc.proyecto.integrantes.push(pc.integrantes);
			console.log(pc.proyecto.integrantes);
			pc.integrantes = {};
		};

	};
	return angular.module('its.proyectos').controller('ProyectosController', ProyectosController);
})();