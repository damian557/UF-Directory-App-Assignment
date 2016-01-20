angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings)
  {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.search = undefined;
    $scope.ind = undefined;
    $scope.code = "";
    $scope.name = "";
    $scope.address = "";
    $scope.longitude = "";
    $scope.latitude = "";
    $scope.predicate = 'code';
    $scope.reverse = false;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function()
    {
      $scope.listings.push
      (
          {
              code: $scope.code,
              name: $scope.name,
              address: $scope.address,
              coordinates:
              {
                longitude: $scope.longitude,
                latitude: $scope.latitude
              }
          }
      );

      $scope.code = "";
      $scope.name = "";
      $scope.address = "";
      $scope.longitude = "";
      $scope.latitude = "";
    };

    $scope.deleteListing = function(index)
    {
      // removes entry at specified index and reformats the array
        $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index)
    {
      // updates to the index of the listing we want to inspect the details of
      $scope.ind = index;
    };

    $scope.order = function(predicate) {
      if ($scope.predicate === predicate)
      {
        $scope.reverse = !$scope.reverse;
      }
      else
      {
        $scope.reverse = false;
      }
      $scope.predicate = predicate;
    };
  }
]);