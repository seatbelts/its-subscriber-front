angular.module('its.categorias')
	.controller('VerCategoriaController', ['$scope', '$rootScope', '$stateParams', 'APIServices', function($scope, $rootScope, $stateParams, APIServices){

		$scope.categoria = {};

		activate = function() {
			console.log($stateParams.id);
			APIServices.getOneCategory($stateParams.id)
				.then(function(res) {
					console.log(res);
					$scope.categoria = res.data;
				});
		}

		activate();
		
	}]);