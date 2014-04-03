dbevent.controller('LoginCtrl',function LoginCtrl($scope, userData){

    $scope.login = function(user){
        userData.getLogin(user, function(){
            console.log("login");
            window.location.href = "#/MainPage";
        })
    }

});