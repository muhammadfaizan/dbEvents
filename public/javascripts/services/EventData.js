dbevent.factory('eventData',function($resource,$q,$http){
    return {
        getEvent: function(successcb){
            $http({method:'GET', url:'/event'})
                .success(function(data,status,headers,config){
                    console.log(data);
                    successcb(data);
                })
                .error(function(data,status,headers,config){
                    console.log("error",status);
                });
        },
        postEvent: function(event){
            $http.post('/postevent',event)
                .success(function(data){
                    console.log(data);
                    return true;
                })
                .error(function(data,status,headers,config){
                    console.log("error",status);
                    return false;
                })
        }
    }
})