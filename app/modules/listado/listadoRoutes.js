angular.module('its.listado')
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
			.state('app.listado', {
				url: '/listado',
				views: {
					'contentView': {
						templateUrl: 'modules/listado/views/listado.html',
						controller: 'ListadoController'
					}
				}
			})
			.state('app.viewProject', {
				// url: '/listado/:id',
				url: '/proyecto/:id',
				views: {
					'contentView': {
						templateUrl: 'modules/listado/views/detalle.html',
						controller: 'DetalleProyectoController'
					}
				}
			});
	}]);