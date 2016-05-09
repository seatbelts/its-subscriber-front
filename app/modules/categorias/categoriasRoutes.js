(function() {
	var CategoriasRoutes;
	CategoriasRoutes = function($stateProvider) {
		return $stateProvider.state('app.categorias', {
			url: '/categorias',
			views: {
				'contentView': {
					templateUrl: 'modules/categorias/views/categorias.html',
					controller: 'CategoriasController',
					controllerAs: 'catmv'
				}
			}
		})
		.state('app.crearcategoria', {
			url: '/categoria/crear',
			views: {
				'contentView': {
					templateUrl: 'modules/categorias/views/crear.html',
					controller: 'CrearCategoriaController'
				}
			}
		})
		.state('app.vercategoria', {
			url: '/categoria/:id',
			views: {
				'contentView': {
					templateUrl: 'modules/categorias/views/ver.html',
					controller: 'VerCategoriaController'
				}
			}
		});
	};
	return angular.module('its.categorias').config(CategoriasRoutes);
})();