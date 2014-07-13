angular.module('starter')
// Factory for getting contact list and getting and setting a single contact
.factory('contactFactory', function($rootScope, $http, $q) {
		var contact = null;
		return {
			getContacts: function() {	// Hit the API with the auth token to get contact list
				var authToken = $rootScope.authToken;
				var limit = 1;
				var offset = 1;
				var filter = 'ContactLastUpdatedDate%3E5%2F1%2F2013';

				var url = 'https://api.isqft.com/v0/Directory/Export?limit=' + limit + '&offset=' + offset + '&filter=' + filter + '&oauth_token=' + authToken;
		
				return $http.get(url);
			},
			setContact: function(c) {	// Set a single contact to view
				contact = c;
				return;
			},
			getContact: function() {	// Get the set contact
				return contact;
			}
		}
})
