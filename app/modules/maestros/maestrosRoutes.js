(function() {
	var MaestrosRoutes;
	MaestrosRoutes = function($stateProvider) {
		return $stateProvider.state('maestros', {
			url: '/login',
			views: {
				'mainView': {
					templateUrl: 'modules/maestros/views/maestros.html',
					controller: 'MaestrosController'
				}
			}
		});
	};
	return angular.module('its.maestros').config(MaestrosRoutes);
})();