(function() {
	var MaestrosRoutes;
	MaestrosRoutes = function($stateProvider) {
		return $stateProvider.state('app.maestros', {
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
		});
	};
	return angular.module('its.maestros').config(MaestrosRoutes);
})();