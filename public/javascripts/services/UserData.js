dbevent.factory('userData',function($resource,$q,$http){
    return {
        getLogin: function(user, successcb){
            $http.post('/login',user)
                .success(function(data){
                    console.log(data)
               /*     if(data=="true")
                        successcb();
                    else
                        console.log("login failed");*/
                })
                .error(function(data,status,headers,config){
                    console.log("error",status);
                })
        }
    }
})