(function() {
  var AuthService;
  AuthService = function($http, Session, $rootScope, $q) {
    var authService;
    authService = {};
    authService.login = function(credentials) {
      return $http({
        method: 'POST',
        url: $rootScope.baseUrl + '/login',
        data: $.param(credentials),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(data) {
        Session.create(data);
        $rootScope.permissions = {};
        $rootScope.permissions[data.rol.nombre] = true;
        return data;
      }).error(function(err) {
        return err;
      });
    };
    authService.logout = function() {
      return $http({
        method: 'delete',
        url: $rootScope.baseUrl + '/logout'
      }).success((function(_this) {
        return function() {
          Session.destroy;
          $rootScope.$broadcast('unauthorized');
        };
      })(this)).error(function(err) {
        return console.log(err);
      });
    };
    authService.sessionInfo = function() {
      return Session.get();
    };
    authService.getPermissions = function() {
      var permissions;
      permissions = {};
      if (Session.get()) {
        permissions[Session.get().rol.nombre] = true;
      }
      return permissions;
    };
    authService.isAuthenticated = function() {
      if (Session.get() === void 0) {
        return false;
      } else {
        return true;
      }
    };
    authService.authorize = function(permissions) {
      var i, len, permission;
      for (i = 0, len = permissions.length; i < len; i++) {
        permission = permissions[i];
        if ($rootScope.permissions[permission]) {
          return true;
        }
      }
      return false;
    };
    return authService;
  };
  return angular.module('its.auth').factory("AuthService", AuthService);
})();