var app = angular.module('myApp',[]);

app.controller('myController',['$scope',function($scope){
	$scope.mystuff = "hello there";

	$scope.infixToPrefix = function(inFix){
		var myStack = [];
		var input = inFix.split(" ");
		var operators = ['+','-','/','%','*'];
		for(var i = 0; i < input.length;i++){
			if(operators.indexOf(input[i]) == -1){
				myStack.push(input[i]);
			}
			else {
				myStack.push(input[i+1]);
				myStack.push(input[i]);
				i+=2;
			}
		}
		var out ="";
		myStack.forEach(function(item,index){
			out+=item;
			if(index != myStack.length-1){
				out+=" ";
			}
		});
		$scope.answer = out;

	}
}]);