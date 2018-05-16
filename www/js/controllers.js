angular.module('starter.controllers', [])

        .controller('DemoCtrl', function ($scope, $rootScope, $ionicSideMenuDelegate, $ionicTabsDelegate, $ionicModal, Users, $ionicLoading, $state, $timeout, CalendarService, PhotoService) {
            $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
                var newState = to.name;
                $scope.pageState = newState;
                if (newState == 'tab.initialize') {
                }


            });
            $scope.$on("$ionicView.beforeEnter", function () {
                var currentState = $state.current.name;
                //console.log(currentState);
                if (currentState == 'tab.initialize') {// Call the primary page before home
                    $ionicTabsDelegate.showBar(false);
                    $scope.initializeBanner();
                }
                if (currentState == 'tab.network') {
                    $scope.initMap();
                }

                var menuStatus = $ionicSideMenuDelegate.isOpenRight();
                if (menuStatus) {
                    $scope.toggleMenu();
                }

            });
            $scope.pageState;
            $scope.initializeBanner = function () {
                $timeout(function () { // server replies when username or password is incorrect
                    $state.go('tab.home');
                    $ionicTabsDelegate.showBar(true);
                }, 5000);
            };
            $scope.initMap = function () {
                var latLng = new google.maps.LatLng(18.520430, 73.856744);

                var mapOptions = {
                    center: latLng,
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    streetViewControl: false
                };

                $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

                directionsService = new google.maps.DirectionsService();
                directionsDisplay = new google.maps.DirectionsRenderer();
                directionsDisplay.setMap($scope.map);
                google.maps.event.addListener($scope.map, 'idle', function () {
                    google.maps.event.trigger($scope.map, 'resize');
                });




                var line = new google.maps.Polyline({
                    path: [new google.maps.LatLng(18.520430, 73.856744), new google.maps.LatLng(18.479662, 73.804027)],
                    strokeColor: "#FF0000",
                    strokeOpacity: 1.0,
                    strokeWeight: 4,
                    geodesic: true
                });
                //line.setMap($scope.map);
                $scope.calculateAndDisplayRoute(directionsService, directionsDisplay, new google.maps.LatLng(18.520430, 73.856744), new google.maps.LatLng(18.479662, 73.804027));
            };

            $scope.calculateAndDisplayRoute = function (directionsService, directionsDisplay, pointA, pointB) {
                directionsService.route({
                    origin: pointA,
                    destination: pointB,
                    avoidTolls: true,
                    avoidHighways: false,
                    travelMode: google.maps.TravelMode.DRIVING
                }, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    } else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
            }


            $scope.users = Users.all();

            $scope.toggleMenu = function () {
                $ionicSideMenuDelegate.toggleRight();
            };

            $scope.hideKeyboard = function () {
                if (typeof cordova !== 'undefined') {
                    $timeout(function () {
                        cordova.plugins.Keyboard.close();
                    }, 500);
                }
            }

            $scope.refresh = function () {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            }

            $scope.goToHome = function () {
                $ionicLoading.show({
                    template: '<ion-spinner></ion-spinner>'
                });

                $timeout(function () {
                    $ionicLoading.hide();
                    $scope.activeIndex = 0;
                    $state.go('tab.initialize');
                    $scope.closeLogin();
                    $scope.closeRegister();
                }, 2000);
            }

            $scope.actionSheet = function () {
                var hideSheet = $ionicActionSheet.show({
                    // titleText: 'Modify your album',
                    buttons: [
                        {text: 'Block or report'},
                        {text: 'Copy Link'}
                    ],
                    destructiveText: 'Delete',
                    cancelText: 'Cancel',
                    cancel: function () {
                        // add cancel code..
                    },
                    buttonClicked: function (index) {
                        return true;
                    }
                });
            }



            // Add connection modal
            $ionicModal.fromTemplateUrl('templates/modal/new_connection.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modalAdd = modal;
            });
            $scope.openAdd = function () {
                $scope.modalAdd.show();
            };
            $scope.closeAdd = function () {
                $scope.modalAdd.hide();
            };

            // Add connection modal
            $scope.dividerFunction = function (key) {
                return key;
            }

            var items = Users.all();
            items.sort(function (a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })
            $scope.connections = items;

            $ionicModal.fromTemplateUrl('templates/modal/connections.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modalConnections = modal;
            });
            $scope.openConnections = function () {
                $scope.modalConnections.show();
            };
            $scope.closeConnections = function () {
                $scope.modalConnections.hide();
            };

            // New Post modal
            $scope.newPost = {
                imgSrc: null
            }

            $scope.removePhoto = function () {
                $scope.newPost.imgSrc = null;
            }

            $scope.addPhoto = function () {
                PhotoService.add()
                        .then(function (imageData) {
                            $scope.newPost.imgSrc = imageData;
                        })
            }

            $ionicModal.fromTemplateUrl('templates/modal/new_post.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modalPost = modal;
            });
            $scope.openPost = function () {
                $scope.modalPost.show();
            };
            $scope.closePost = function () {
                $scope.modalPost.hide();
            };

            // Login modal
            $ionicModal.fromTemplateUrl('templates/welcome/login.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modalLogin = modal;
            });
            $scope.openLogin = function () {
                $scope.modalLogin.show();
            };
            $scope.closeLogin = function () {
                $scope.modalLogin.hide();
            };

            // Sign up modal
            $ionicModal.fromTemplateUrl('templates/welcome/register.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modalRegister = modal;
            });
            $scope.openRegister = function () {
                $scope.modalRegister.show();
            };
            $scope.closeRegister = function () {
                $scope.modalRegister.hide();
            };

            /*model*/

            /* Chat */
            $scope.datatable = [{
                    "subject": 'English',
                    "FA1": "A2",
                    "FA2": "A2",
                    "SA1": "A2",
                    "T1": "A2"
                }, {
                    "subject": 'Hindi',
                    "FA1": "A2",
                    "FA2": "B1",
                    "SA1": "A2",
                    "T1": "A2"
                }, {
                    "subject": 'Math',
                    "FA1": "A1",
                    "FA2": "A1",
                    "SA1": "B1",
                    "T1": "A2"
                }, {
                    "subject": 'Science',
                    "FA1": "A1",
                    "FA2": "A2",
                    "SA1": "A2",
                    "T1": "A2"
                }, {
                    "subject": 'Social Science',
                    "FA1": "A1",
                    "FA2": "B2",
                    "SA1": "B1",
                    "T1": "B1"
                }, {
                    "subject": 'Sanskrit',
                    "FA1": "B1",
                    "FA2": "A2",
                    "SA1": "A2",
                    "T1": "A2"
                }, {
                    "subject": 'Computer Science',
                    "FA1": "B2",
                    "FA2": "B1",
                    "SA1": "B1",
                    "T1": "B1"
                },
            ];



            /*overallhome*/

            $scope.chartOptions1 = {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Overall'
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: ['English', 'Hindi', 'Math', 'Science', 'Social Sci', 'Sanskrit', 'Computer Sci'],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    max: 6,
                    labels: {formatter: function () {
                            return chatdata[this.value];
                        }
                    },
                    title: {
                        text: ''
                    },
                    tickPositions: [0, 1, 2, 3, 4, 5, 6]
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.x}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.name} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 2,
                        borderWidth: 0,
                        pointWidth: 40
                    }
                },
                series: [{
                        name: 'FA',
                        color: '#ff0035',
                        data: [{name: 'B2', y: 3, drilldown: 'FA'},
                            {name: 'B2', y: 3, drilldown: 'FA'},
                            {name: 'C1', y: 2, drilldown: 'FA'},
                            {name: 'B1', y: 4, drilldown: 'FA'},
                            {name: 'A2', y: 5, drilldown: 'FA'},
                            {name: 'A1', y: 6, drilldown: 'FA'},
                            {name: 'C2', y: 1, drilldown: 'FA'}]

                    }, {
                        name: 'SA',
                        color: '#11a9ed',
                        data: [{name: 'B1', y: 4, drilldown: 'SA'},
                            {name: 'A2', y: 5, drilldown: 'SA'},
                            {name: 'C2', y: 1, drilldown: 'SA'},
                            {name: 'A1', y: 6, drilldown: 'SA'},
                            {name: 'C1', y: 2, drilldown: 'SA'},
                            {name: 'B2', y: 3, drilldown: 'SA'},
                            {name: 'C1', y: 2, drilldown: 'SA'}]

                    }, {
                        name: 'TotalOverall',
                        color: '#ff9e0d',
                        data: [{name: 'A2', y: 5, drilldown: 'TotalOverall'},
                            {name: 'C2', y: 1, drilldown: 'TotalOverall'},
                            {name: 'B2', y: 3, drilldown: 'TotalOverall'},
                            {name: 'A1', y: 6, drilldown: 'TotalOverall'},
                            {name: 'C1', y: 2, drilldown: 'TotalOverall'},
                            {name: 'B2', y: 3, drilldown: 'TotalOverall'},
                            {name: 'B1', y: 4, drilldown: 'TotalOverall'}]

                    }],
                drilldown: {
                    series: [{
                            name: 'FA',
                            id: 'FA',
                            data: [
                                ['B2', 3],
                                ['A2', 5],
                                ['C2', 1],
                                ['A1', 6],
                                ['B2', 3],
                                ['C1', 2],
                                ['B1', 4]
                            ]

                        },
                        {
                            name: 'SA',
                            id: 'SA',
                            data: [
                                ['A1', 6],
                                ['C1', 2],
                                ['A2', 5],
                                ['B1', 4],
                                ['B2', 3],
                                ['C2', 1],
                                ['C1', 2]
                            ]

                        },
                        {
                            name: 'Total Overall',
                            id: 'TotalOverall',
                            data: [
                                ['C1', 2],
                                ['A2', 5],
                                ['C2', 1],
                                ['B2', 3],
                                ['B1', 4],
                                ['A1', 6],
                                ['B2', 3]
                            ]

                        }]
                }
            };

            /* Chat */
            $scope.datatableTerm2 =
                    [{
                            "subject": 'English',
                            "FA3": "A1",
                            "FA4": "A1",
                            "SA2": "A2",
                            "T2": "A2"
                        }, {
                            "subject": 'Hindi',
                            "FA3": "A1",
                            "FA4": "B1",
                            "SA2": "B1",
                            "T2": "A2"
                        }, {
                            "subject": 'Math',
                            "FA3": "B2",
                            "FA4": "A2",
                            "SA2": "B2",
                            "T2": "B2"
                        }, {
                            "subject": 'Science',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "B1",
                            "T2": "A2"
                        }, {
                            "subject": 'Social Science',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "A1",
                            "T2": "A1"
                        }, {
                            "subject": 'Sanskrit',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "A1",
                            "T2": "A1"
                        }, {
                            "subject": 'Computer Science',
                            "FA3": "B2",
                            "FA4": "B2",
                            "SA2": "B2",
                            "T2": "B2"
                        },
                    ];
            $scope.datatableOverall = [{
                    "subject": 'English',
                    "FA": "A1",
                    "SA": "A2",
                    "Total": "A2"
                }, {
                    "subject": 'Hindi',
                    "FA": "A2",
                    "SA": "A2",
                    "Total": "A2"
                }, {
                    "subject": 'Math',
                    "FA": "A2",
                    "SA": "B1",
                    "Total": "B1"
                }, {
                    "subject": 'Science',
                    "FA": "A2",
                    "SA": "A2",
                    "Total": "A2"
                }, {
                    "subject": 'Social Science',
                    "FA": "A2",
                    "SA": "A2",
                    "Total": "A2"
                }, {
                    "subject": 'Sanskrit',
                    "FA": "A2",
                    "SA": "A1",
                    "Total": "A2"
                }, {
                    "subject": 'Computer Science',
                    "FA": "B2",
                    "SA": "B2",
                    "Total": "B2"
                }
            ];
              $scope.dataClass3T1 =
                    [{
                            "subject": 'English',
                            "FA3": "A1",
                            "FA4": "A1",
                            "SA2": "A2",
                            "T2": "A2"
                        }, {
                            "subject": 'Hindi',
                            "FA3": "A1",
                            "FA4": "B1",
                            "SA2": "B1",
                            "T2": "A2"
                        }, {
                            "subject": 'Math',
                            "FA3": "B2",
                            "FA4": "A2",
                            "SA2": "B2",
                            "T2": "B2"
                        }, {
                            "subject": 'Science',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "B1",
                            "T2": "A2"
                        }, {
                            "subject": 'Social Science',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "A1",
                            "T2": "A1"
                        }, {
                            "subject": 'Sanskrit',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "A1",
                            "T2": "A1"
                        }, {
                            "subject": 'Computer Science',
                            "FA3": "B2",
                            "FA4": "B2",
                            "SA2": "B2",
                            "T2": "B2"
                        },
                    ];
                      $scope.dataClass3T2 =
                    [{
                            "subject": 'English',
                            "FA3": "A1",
                            "FA4": "A1",
                            "SA2": "A2",
                            "T2": "A2"
                        }, {
                            "subject": 'Hindi',
                            "FA3": "A1",
                            "FA4": "B1",
                            "SA2": "B1",
                            "T2": "A2"
                        }, {
                            "subject": 'Math',
                            "FA3": "B2",
                            "FA4": "A2",
                            "SA2": "B2",
                            "T2": "B2"
                        }, {
                            "subject": 'Science',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "B1",
                            "T2": "A2"
                        }, {
                            "subject": 'Social Science',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "A1",
                            "T2": "A1"
                        }, {
                            "subject": 'Sanskrit',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "A1",
                            "T2": "A1"
                        }, {
                            "subject": 'Computer Science',
                            "FA3": "B2",
                            "FA4": "B2",
                            "SA2": "B2",
                            "T2": "B2"
                        },
                    ];
                      $scope.dataClass3Overall =
                    [{
                            "subject": 'English',
                            "FA3": "A1",
                            "FA4": "A1",
                            "SA2": "A2",
                            "T2": "A2"
                        }, {
                            "subject": 'Hindi',
                            "FA3": "A1",
                            "FA4": "B1",
                            "SA2": "B1",
                            "T2": "A2"
                        }, {
                            "subject": 'Math',
                            "FA3": "B2",
                            "FA4": "A2",
                            "SA2": "B2",
                            "T2": "B2"
                        }, {
                            "subject": 'Science',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "B1",
                            "T2": "A2"
                        }, {
                            "subject": 'Social Science',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "A1",
                            "T2": "A1"
                        }, {
                            "subject": 'Sanskrit',
                            "FA3": "A1",
                            "FA4": "A2",
                            "SA2": "A1",
                            "T2": "A1"
                        }, {
                            "subject": 'Computer Science',
                            "FA3": "B2",
                            "FA4": "B2",
                            "SA2": "B2",
                            "T2": "B2"
                        },
                    ];
            $scope.messages = [
                {
                    isMe: false,
                    avatar: 'img/adam.jpg',
                    type: 'text', // text || image
                    body: 'Hi,\n Tomorrow whats you plan to send as lunch for School Picnic?',
                    timestamp: 'Feb 26, 2016, 9:47PM'
                },
                {
                    isMe: true,
                    type: 'text', // text || image
                    body: 'Nothing great, I am thinking Maggi. What about you ?',
                    timestamp: 'Feb 26, 2016, 9:47PM'
                },
                {
                    isMe: false,
                    avatar: 'img/adam.jpg',
                    type: 'text', // text || image
                    body: 'That sound great, Kids would love it !!!',
                    timestamp: 'Feb 26, 2016, 9:47PM'
                }
            ];
            $scope.WithAjaxCtrl = function (DTOptionsBuilder, DTColumnBuilder) {

                var vm = this;
                vm.dtOptions = DTOptionsBuilder.fromSource('data.json')
                        .withPaginationType('full_numbers');
                vm.dtColumns = [
                    DTColumnBuilder.newColumn('id').withTitle('ID'),
                    DTColumnBuilder.newColumn('firstName').withTitle('First name'),
                    DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
                ];


            };

            $scope.events = [
//                {id: 1, text: "Class Teacher",
//                    start_date: "03/15/2017 8:00",
//                    end_date: "03/15/2017 8:20"
//                },
//                {id: 2, text: "B",
//                    start_date: "03/15/2017 8:20",
//                    end_date: "03/15/2017 9:20"
//                }
            ];
            $scope.scheduler = {date: "03/15/2017"};
            
            
            

        })



 