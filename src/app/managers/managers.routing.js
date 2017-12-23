export default ($stateProvider) => {
	"ngInject";

	$stateProvider
		.state('managersLookup', {
			url: '/managers/',
			component: 'managersLookup'
		})
}
