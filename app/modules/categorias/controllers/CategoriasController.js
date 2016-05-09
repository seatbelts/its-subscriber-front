angular.module('its.categorias')
	.controller('CategoriasController', ['$scope', '$state', 'APIServices', function($scope, $state, APIServices){
		var catmv = this;

		catmv.categorias = [];

		$scope.crearCategoria = function() {
			$state.go('app.crearcategoria');
		}

		$scope.verCategoria = function(id) {
			console.log(id);
			$state.go('app.vercategoria', {id: id});
		}

		APIServices.getCategories().then(function(res){
			console.log('res', res)
			catmv.categorias = res.data;
		})
	}])