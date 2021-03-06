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
		})
		.state('app.crearmateria', {
			url: '/materias/crear',
			views: {
				'contentView': {
					templateUrl: 'modules/materias/views/crear.html',
					controller: 'CrearMateriaController'
				}
			}
		})
		.state('app.vermateria', {
			url: '/materia/:id',
			views: {
				'contentView': {
					templateUrl: 'modules/materias/views/ver.html',
					controller: 'VerMateriaController'
				}
			}
		});
	};
	return angular.module('its.materias').config(MateriasRoutes);
})();