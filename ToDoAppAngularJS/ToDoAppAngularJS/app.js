
angular.module("app", ["kendo.directives"])
    .controller("toDoCtrl",
        function ($scope, $filter) {

            $scope.isResultExists = false;
            $scope.id = undefined;


            //Date Picker Code Start Here
            $scope.getType = function (x) {
                return typeof x;
            };
            $scope.isDate = function (x) {
                return x instanceof Date;
            };
            //Date Picker Code Ends Here

            $scope.taskList = [];

            $scope.taskList = [
                { id: 1, task: "Taking Meeting In Mumbai", time: "1/5/2017 12:00 AM", doneBy: "Ram" },
                { id: 2, task: "Playing Chess", time: "1/5/2017 12:00 AM", doneBy: "Rajat" }
            ];


            $scope.clearAll=function() {
                $scope.task = undefined;
                $scope.time = undefined;
                $scope.doneBy = undefined;

                $scope.isResultExists = false;
            }

            $scope.deleteTask = function (index) {
                var canDelete = confirm("Do you want to delete this task?");
                if (canDelete) {
                    $scope.taskList.splice(index, 1);
                }
            };

            $scope.addTask = function() {

                if ($scope.isResultExists) {
                    for (var i = 0; i < $scope.taskList.length; i++) {
                        if ($scope.taskList[i].id == $scope.id) {
                            $scope.taskList[i].task = $scope.task;
                            $scope.taskList[i].time = $scope.time;
                            $scope.taskList[i].doneBy = $scope.doneBy;

                            toastr.info("Task Updated !!");
                            $scope.clearAll();
                            break;
                        }
                    }
                } else {
                    var obj = {};
                    obj.task = $scope.task;
                    obj.time = $scope.time;
                    obj.doneBy = $scope.doneBy;
                    $scope.taskList.push(obj);
                    toastr.success("Task Added Successfully !!");
                    $scope.clearAll();
                }
            };

            $scope.editTask = function (id) {
                angular.forEach($scope.taskList,
                    function(record) {
                        if (record.id == id) {
                            $scope.task = record.task;
                            $scope.time = record.time;
                            $scope.doneBy = record.doneBy;

                            $scope.isResultExists = true;
                            $scope.id = record.id;
                        }
                    });
            }

        });

