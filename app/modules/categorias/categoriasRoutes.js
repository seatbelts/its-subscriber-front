(function() {
	var CategoriasRoutes;
	CategoriasRoutes = function($stateProvider) {
		return $stateProvider.state('categorias', {
			url: '/categorias',
			views: {
				'mainView': {
					templateUrl: 'modules/categorias/views/categorias.html',
					controller: 'CategoriasController'
				}
			}
		});
	};
	return angular.module('its.categorias').config(CategoriasRoutes);
})();