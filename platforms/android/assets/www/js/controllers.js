angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
})

.controller('LoginCtrl', function($scope, $http) {
	$scope.submit = function(){
		var loginData = $scope.loginData,
		data = 'username=' + loginData.username + '&password=' + loginData.password;
		$http({
			url: "https://auth.isqft.com/Authentication/AccessToken?grantType=password&", 
	        method: "POST",
	        data: data, 
	        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function (data, status, headers, config) {
			//alert('success');
			$scope.closeLogin();
		}).error(function (data, status, headers, config) {
			$scope.myError = true;
			$scope.alerts = [{ type: 'Error: ', msg: 'Check your credentials and try again!' }];
			
			$scope.closeAlert = function(index) {
			  $scope.alerts.splice(index, 1);
			};
			  
			alert('error' + data + status);
		});
	}
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
