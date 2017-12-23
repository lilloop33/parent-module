export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
	"ngInject";

	$locationProvider.html5Mode(false);
	$urlRouterProvider.otherwise( '/' );

	$stateProvider
		.state('wmRoot', {
			url: '/wm',
			redirectTo: 'managersLookup'
		})


}
