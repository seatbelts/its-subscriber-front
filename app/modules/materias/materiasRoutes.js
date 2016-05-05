(function() {
	var MateriasRoutes;
	MateriasRoutes = function($stateProvider) {
		return $stateProvider.state('materias', {
			url: '/materias',
			views: {
				'mainView': {
					templateUrl: 'modules/materias/views/materias.html',
					controller: 'MateriasController'
				}
			}
		});
	};
	return angular.module('its.materias').config(MateriasRoutes);
})();