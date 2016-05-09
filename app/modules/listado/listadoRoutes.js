(function() {
	var ListadoRoutes;
	ListadoRoutes = function($stateProvider) {
		return $stateProvider.state('app.listado', {
			url: '/listado',
			views: {
				'contentView': {
					templateUrl: 'modules/listado/views/listado.html',
					controller: 'ListadoController'
				}
			}
		})
		.state('app.viewProject', {
			url: '/listado/:id',
			views: {
				'contentView': {
					templateUrl: 'modules/listado/views/detalle.html',
					controller: 'DetalleProyectoController'
				}
			}
		});
	};
	return angular.module('its.listado').config(ListadoRoutes);
})();