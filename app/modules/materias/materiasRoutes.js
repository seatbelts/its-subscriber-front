(function() {
	var MateriasRoutes;
	MateriasRoutes = function($stateProvider) {
		return $stateProvider.state('app.materias', {
			url: '/materias',
			views: {
				'contentView': {
					templateUrl: 'modules/materias/views/materias.html',
					controller: 'MateriasController',
					controllerAs: 'matc'
				}
			}
		});
	};
	return angular.module('its.materias').config(MateriasRoutes);
})();