angular.module('its.categorias')
	.controller('CategoriasController', ['APIServices', function(APIServices){
		var catmv = this;

		catmv.categorias = [];

		APIServices.getCategories().then(function(res){
			console.log('res', res)
			catmv.categorias = res.data;
		})
	}])