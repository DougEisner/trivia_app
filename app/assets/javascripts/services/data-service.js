(function(ng) {
  ng.module('TriviaApp').service('DataRequestService', AllDataService);

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

        function postScores(url, dataObj) {
            return $http({
                method: 'POST',
                url: url,
                dataType: "json",
                headers: {
                    "content-type": "application/json;charset=utf-8"
                },
                data: {
                    'score[game_score]': datObj.score,
                    'score[user_id]': dataObj.user_id
                }
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
        };
    }

})(angular);
