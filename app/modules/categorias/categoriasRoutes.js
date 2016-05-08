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
		});
	};
	return angular.module('its.categorias').config(CategoriasRoutes);
})();