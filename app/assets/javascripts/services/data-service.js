(function(ng) {
  ng.module('TriviaApp').service('DataRequestService', AllDataService);

    function AllDataService($http) {
        function getData(url) {
            return $http({
                method: 'GET',
                url: url
            });
        }

        function postData(url) {
            return $http({
                method: 'POST',
                url: url
            });
        }

        function putData(url) {
            return $http({
                method: 'PUT',
                url: url
            });
        }

        return {
            get: getData,
            post: postData,
            put: putData
        };
    }

})(angular);
