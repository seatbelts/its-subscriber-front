angular.module('its.maestros')
	.controller('MaestrosController', ['$scope', '$state', '$stateParams', '$rootScope', 'APIServices', function($scope, $state, $stateParams, $rootScope, APIServices) {

		var maemv = this;

		maemv.maestros = [];

		APIServices.getTeachers().then(function(res){
			console.log('res', res.data)
			maemv.maestros = res.data;
		})

		activate = function() {
			APIServices.getTeachers()
				.then(function(res) {
					console.log(res.data);
					$scope.maestros = res.data;
				});
		}

		$scope.ver = function(id) {
			$rootScope.id = id;
			$state.go('app.detallemaestro', {id: id});
		}

		$scope.crearMaestro = function() {
			console.log('test');
			$state.go('app.crear');
		};

		activate();
	}]);
