angular.module('quoteBook')
.controller('mainCtrl', function($scope, quoteBookService){
$scope.quotes = quoteBookService.getQuotes();

$scope.addQuote = quoteBookService.addQuote;

$scope.removeData = function(textToDelete){
  quoteBookService.removeData(textToDelete);
}
});
