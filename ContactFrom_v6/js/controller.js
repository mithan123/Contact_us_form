
	var form = angular.module("myFormApp",[]);

	form.controller ('formCtrl',function($scope)
	{
		$scope.submit = function(){
			
			console.log($scope.myForm.YName);
			console.log($scope.myForm.Email);
			console.log($scope.myForm.Message);
		}
	});
