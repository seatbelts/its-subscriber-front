(function() {
	var ProyectosRoutes;
	ProyectosRoutes = function($stateProvider) {
		return $stateProvider.state('app.proyectos', {
			url: '/proyectos',
			views: {
				'contentView': {
					templateUrl: 'modules/proyectos/views/proyectos.html',
					controller: 'ProyectosController',
					controllerAs: 'pc'
				}
			}
		})
		.state('app.inscribir', {
			url: '/inscribir',
			views: {
				'contentView': {
					templateUrl: 'modules/proyectos/views/inscribir.html',
					controller: 'InscribirController',
					controllerAs: 'ipc'
				}
			}
		});
	};
	return angular.module('its.proyectos').config(ProyectosRoutes);
})();