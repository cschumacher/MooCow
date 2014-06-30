angular.module('starter.controllers')

.controller('contactCtrl', function($scope, $http, $rootScope, $ionicModal) {
			// Create the login modal that we will use later
			$ionicModal.fromTemplateUrl('templates/contact.html', {
				scope : $scope
			}).then(function(modal) {
				$scope.contactModal = modal;
			});

			$scope.getContacts = function() {
				var authToken = $rootScope.authToken;
				var limit = 2;
				var offset = 1;
				var filter = 'ContactLastUpdatedDate%3E5%2F1%2F2013';

				var url = 'https://api.isqft.com/v0/Directory/Export?limit='
						+ limit + '&offset=' + offset + '&filter=' + filter
						+ '&oauth_token=' + authToken;

				var loadingDiv = document.getElementById('loading');
				loadingDiv.style.display = 'block';
				
				$http({
					url : url,
					method : "GET",
				}).success(function(data, status, headers, config) {
					$scope.contactModal.show();
					
					//alert(data[0].companyname + '\nStatus: ' + status);
					$scope.contacts = data;
					
					loadingDiv.style.display = 'none';
				}).error(
						function(data, status, headers, config) {
							alert('Error\nAuthtoken: ' + authToken + '\nData: '
									+ data['message'] + '\nStatus: ' + status
									+ '\nHeaders: ' + headers);
						});
			};
		});