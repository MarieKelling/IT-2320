function personController($scope)											//Declares a function w/ same name as the controller that takes in a scope - Angular Object 
{																									//Scope (Angular Object) - the root object of an entire area/context of memory 

	$scope.viewModel = {};														//Creates a viewModel object inside of the scope 
	
	$scope.viewModel.currentTime = new Date().toString();		
	$scope.viewModel.firstName = "Donnie";
	$scope.viewModel.lastName = "Santos";

	$scope.viewModel.Add = function(x, y)
	{
		return x + y;
	}

	$scope.viewModel.list = [													//Array of objects in JSON 
		{ name: 'Item One', value: 100 },
		{ name: 'Item Two', value: 200 },
		{ name: 'Item Three', value: 300 }
	];
}