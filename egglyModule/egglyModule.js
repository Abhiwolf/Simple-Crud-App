angular.module('egglyModule', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('egglyModule').config(function ($stateProvider) {

    $stateProvider.state('egglyApp', {
        url: '/agglyApp',
        templateUrl: 'egglyModule/partial/egglyApp/egglyApp.html'
    });
    /* Add New States Above */

});