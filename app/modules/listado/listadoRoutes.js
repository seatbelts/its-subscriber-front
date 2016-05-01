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
		});
	};
	return angular.module('its.listado').config(ListadoRoutes);
})();