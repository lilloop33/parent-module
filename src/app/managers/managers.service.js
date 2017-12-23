import angular from 'angular';


export default class ManagersService {

	constructor($q, $http, $timeout) {
		"ngInject";

		this.$q = $q;
		this.$http = $http;
		this.$timeout = $timeout;
		this.inProgress = {};
	}


	submitManagerContact(managerId, contactPayload) {
		let deferred = this.$q.defer();

		if (this.inProgress.submitManagerContact) {
			return deferred.promise;
		}

		this.inProgress.submitManagerContact = true;

		this.$timeout(() => {
			this.inProgress.submitManagerContact = false;
			deferred.resolve({ some: 'result' });
		}, 100);

		return deferred.promise;
	}



}
