angular.module('its.categorias')
	.controller('VerCategoriaController', ['$scope', '$rootScope', '$stateParams', 'APIServices', function($scope, $rootScope, $stateParams, APIServices){

		$scope.categoria = {};

		activate = function() {
			APIServices.getOneCategory($stateParams.id)
				.then(function(res) {
					$scope.categoria = res.data;
				});
		}

		activate();
		
	}]);