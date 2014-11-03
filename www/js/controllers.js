angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.ime = "Vita";
	//dodat niz
	$scope.niz = ['ananas','jabuka','kruska','sljiva'];
	
	$scope.dodaj = function ()
	{
		$scope.niz.push(test);
	};
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
