(function(ng) {
  ng.module('TriviaApp').service('DataRequestService', AllDataService);

let currentUser = {}
    function AllDataService($http) {
        function getData(url) {
            return $http({
                method: 'GET',
                url: url
            });
        }

        function postData(url, dataObj) {
            return $http({
                method: 'POST',
                url: url,
                dataType: "json",
                headers: {
                    "content-type": "application/json;charset=utf-8"
                },
                data: dataObj
            });
        }

        function loginPost(url, dataObj) {
            return $http({
                method: 'POST',
                url: url,
                dataType: "json",
                headers: {
                    "content-type": "application/json;charset=utf-8"
                },
                data: { // JSON.stringify????
                    email: dataObj.email,
                    password: dataObj.password
                }
            });
        }

        function putData(url) {
            return $http({
                method: 'PUT',
                url: url
            });
        }

        function deleteData(url) {
            return $http({
                method: 'DELETE',
                url: url,
                headers: {
                    "content-type": "application/json;charset=utf-8"
                }
            });
        }

        return {
            get: getData,
            post: postData,
            put: putData,
            delete: deleteData,
            loginPost: loginPost
            // currentUser: currentUser
        };
    }

})(angular);
