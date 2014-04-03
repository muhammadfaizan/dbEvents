dbevent.controller('EventsCtrl',function EventsCtrl($scope, eventData,$modal,$log,$timeout){
    $scope.message = "All events will display here..";

    $scope.GetEvent = function(){
        $scope.event = {"name":"test","date":"03/12/14","location":"karachi"};
        eventData.getEvent("Hello")
    }

    $scope.PostEvent = function(){
        eventData.postEvent();
    }
    //edit
//modal
    //$scope.FL = {name:"Hasham", name:"Amin", name:"Hamza"};

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function () {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl,
            resolve: {
                items: function () {
                    return $scope;
                },
                fl : {name:"Hasham", name:"Amin", name:"Hamza"}
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

    };

//datepicker

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.showWeeks = true;
    $scope.toggleWeeks = function () {
        $scope.showWeeks = ! $scope.showWeeks;
    };

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = ( $scope.minDate ) ? null : new Date();
    };
    $scope.toggleMin();

    $scope.openDatePicker = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];

    //end


    //timepicker
    $scope.mytime = 8;

    $scope.hstep = 1;
    $scope.mstep = 30;
    $scope.ismeridian = true;
    //end

    //edit end
})

//modal controller
var ModalInstanceCtrl = function ($scope, $modalInstance, items, fl) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };
    $scope.FL = fl;

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

};
