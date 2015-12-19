(function() {
  'use strict';

  angular.module('Piecemeal')
  .controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ['appFactory', '$window'];


  function NavbarCtrl(appFactory, $window) {
    
    var self = this;

    self.isLoggedIn = function () {
      return $window.localStorage.getItem('username');
    }
    
    self.logout = appFactory.logout;
    // self.goToAllDishes = appFactory.goToAllDishes;
    // self.goToGuestBill = appFactory.goToGuestBill;
    // self.goToAddDish = appFactory.goToAddDish;
    // self.goToHostBill = appFactory.goToHostBill;

  }

})();
