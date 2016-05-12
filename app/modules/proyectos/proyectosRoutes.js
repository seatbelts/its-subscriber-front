angular.module('its.proyectos')
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
			.state('app.proyectos', {
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
				url: '/proyectos/inscribir',
				views: {
					'contentView': {
						templateUrl: 'modules/proyectos/views/inscribir.html',
						controller: 'InscribirController',
						controllerAs: 'ipc'
					}
				}
			});
	}]);