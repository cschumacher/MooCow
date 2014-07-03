angular.module('starter.controllers')
// Controller for the contacts.html page. Used to display a list of contacts, and to set a single contact to view
.controller('contactsCtrl', function ($scope, $http, $rootScope, $ionicModal, contactFactory) {
	// Get the list of contacts
	// TODO Need to allow for setting how many contacts you want
	contactFactory.getContacts().then(function(result) {
		$scope.contacts = result.data;
	});
	// Set the single contact to view. Called on click of a contact in the list displayed in contacts.html
	$scope.setContact = function(contact) {
		contactFactory.setContact(contact);
	}
})
// Controller for the contact.html page. Used to get a contact to view info
.controller('contactCtrl', function ($scope, $stateParams, contactFactory) {
    $scope.contact = contactFactory.getContact();
});

var isDebug = true;
// Test data to avoid log in every time
var testData = [{
    companyid: 13815412,
    companyname: "1220 Exhibits, Inc.",
    companywebsite: null,
    companydescription: null,
    companyfunctions: ["Subcontractor"],
    mbe_sbe_data: [],
    address: {
        address1: "3801 Vulcan Drive",
        address2: null,
        city: "Nashville",
        state: "Tennessee",
        postalcode: "37211",
        plus4code: null,
        addresstype: "commercial",
        country: "USA"
    },
    serviceareas: [{
        countyname: "[ALL]",
        statecode: "Tennessee",
        country: "USA"
    }],
    trades: ["10000 - SPECIALTIES "],
    customfields: [{
        name: "Date Added",
        type: "date",
        value: "5/30/2014"
    }, {
        name: "Rating",
        type: "numeral",
        value: "628"
    }],
    qualforms: [],
    contacts: [{
        contactid: 4461522,
        firstname: "Craig",
        lastname: "Dunn",
        title: null,
        contactemailaddress: "cdunn@1220.com",
        faxnumber: null,
        phonenumber: "8002451220",
        extension: null,
        mobilephone: null,
        physicaladdress: {
            address1: "3801 Vulcan Drive",
            address2: null,
            city: "Nashville",
            state: "TN",
            postalcode: "37211",
            plus4code: null,
            addresstype: "commercial",
            country: "USA"
        },
        shippingaddress: {
            address1: "3801 Vulcan Drive",
            address2: null,
            city: "Nashville",
            state: "TN",
            postalcode: "37211",
            plus4code: null,
            addresstype: "commercial",
            country: "USA"
        },
        serviceareas: [{
            countyname: "[ALL]",
            statecode: "Tennessee",
            country: "USA"
        }],
        trades: ["10000 - SPECIALTIES "]
    }]
}];