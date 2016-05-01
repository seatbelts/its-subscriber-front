(function() {
	var ProyectosRoutes;
	ProyectosRoutes = function($stateProvider) {
		return $stateProvider.state('app.proyectos', {
			url: '/proyectos',
			views: {
				'contentView': {
					templateUrl: 'modules/proyectos/views/proyectos.html',
					controller: 'ProyectosController'
				}
			}
		})
		.state('app.inscribir', {
			url: '/inscribir',
			views: {
				'contentView': {
					templateUrl: 'modules/proyectos/views/inscribir.html',
					controller: 'InscribirController'
				}
			}
		});
	};
	return angular.module('its.proyectos').config(ProyectosRoutes);
})();