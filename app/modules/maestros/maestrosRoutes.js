angular.module('its.maestros')
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
			.state('app.maestros', {
				url: '/maestros',
				views: {
					'contentView': {
						templateUrl: 'modules/maestros/views/maestros.html',
						controller: 'MaestrosController',
						controllerAs: 'maemv'
					}
				}
			})
			.state('app.crear', {
				url: '/crear',
				views: {
					'contentView': {
						templateUrl: 'modules/maestros/views/crearMaestros.html',
						controller: 'CrearMaestrosController'
					}
				}
			})
			.state('app.detallemaestro', {
				url: '/maestros/:id',
				views: {
					'contentView': {
						templateUrl: 'modules/maestros/views/detalle.html',
						controller: 'DetalleMaestroController'
					}
				}
			});	
	}]);