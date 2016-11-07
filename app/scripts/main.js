angular
  .module('angularjsApp', [
    'ngRoute',
    'ngMessages'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
      // use the HTML5 History API
    //   $locationProvider
		  // .html5Mode(true)
		  // .hashPrefix('!');
    // 	}
            
       
  });

