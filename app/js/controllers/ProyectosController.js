angular.module('MetronicApp').controller('ProyectosController', [ '$rootScope', '$scope', '$http', '$timeout', function($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function() {   
        App.initAjax(); // initialize core components        
    });

     $scope.proyecto = {};
     $scope.proyecto.integrantes = []
     $scope.integrantes = {}

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = true;
    $rootScope.settings.layout.pageSidebarClosed = true;
}]);