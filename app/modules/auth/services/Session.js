(function() {
  var Session;
  Session = function($sessionStorage) {
    this.get = (function(_this) {
      return function() {
        return $sessionStorage.current;
      };
    })(this);
    this.create = (function(_this) {
      return function(user) {
        return $sessionStorage.current = user;
      };
    })(this);
    this.destroy = (function(_this) {
      return function() {
        return delete $sessionStorage.current;
      };
    })(this);
    return this;
  };
  return angular.module('its.auth').service('Session', Session);
})();