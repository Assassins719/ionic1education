// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
angular.module('starter', [
    'ionic',

    'starter.controllers',
    'starter.services',
    'starter.directives',
    'starter.filters',
    'ionic.ion.autoListDivider',
    'ngCordova',
    
 
])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($ionicConfigProvider) {
            // note that you can also chain configs
            $ionicConfigProvider.backButton.text('').previousTitleText(false);
            $ionicConfigProvider.tabs.position('bottom');
            $ionicConfigProvider.navBar.alignTitle('center');
        })
        .config(function ($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://calendar.google.com/calendar/embed']);
        })
        .config(['$httpProvider', function ($httpProvider) {
                $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }])
        .config(function ($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider
                    /*WELCOME*/
                    .state('welcome', {
                        url: '/welcome',
                        templateUrl: 'templates/welcome/intro.html',
                        controller: 'DemoCtrl'
                    })

                    // setup an abstract state for the tabs directive
                    .state('tab', {
                        url: '/tab',
                        abstract: true,
                        templateUrl: 'templates/tabs.html'
                    })
                    .state('tab.initialize', {
                        url: '/initialize',
                        cache: false,
                        views: {
                            'home': {
                                templateUrl: 'templates/home/initialize.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })
                    // Each tab has its own nav history stack:

                    .state('tab.home', {
                        url: '/home',
                        cache: false,
                        views: {
                            'home': {
                                templateUrl: 'templates/home/home.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })

                    //.state('tab.post', {
                    //  url: '/post/:id',
                    //  views: {
                    //    'home': {
                    //     templateUrl: 'templates/home/post.html',
                    //      controller: 'DemoCtrl'
                    //    }
                    //  }
                    //})
                    .state('tab.notifications', {
                        url: '/notifications',
                        views: {
                            'notifications': {
                                templateUrl: 'templates/notifications/notifications.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })
                    .state('tab.network', {
                        url: '/network',
                        cache: false,
                        views: {
                            'network': {
                                templateUrl: 'templates/network/network.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })
                    .state('tab.calendar', {
                        url: '/calendar',
                        cache: false,
                        views: {
                            'calendar': {
                                templateUrl: 'templates/calendar/calendar.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })
                    .state('tab.messaging', {
                        url: '/messaging',
                        cache: false,
                        views: {
                            'messaging': {
                                templateUrl: 'templates/messaging/messaging.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })

                    .state('tab.chat', {
                        url: '/chat',
                        cache: false,
                        views: {
                            'messaging': {
                                templateUrl: 'templates/messaging/chat.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })



                    //Sagar
                    .state('tab.profile', {
                        url: '/profile',
                        views: {
                            '@': {
                                templateUrl: 'templates/profile/profile.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })
                    .state('tab.settings', {
                        url: '/settings',
                        views: {
                            '@': {
                                templateUrl: 'templates/profile/settings.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })
                    .state('tab.reportcards', {
                        url: '/reportcards',
                        views: {
                            '@': {
                                templateUrl: 'templates/webview/webview.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })
                    .state('tab.healthrecord', {
                        url: '/healthrecord',
                        views: {
                            '@': {
                                templateUrl: 'templates/healthrecord/healthrecord.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })
                    .state('tab.gradesanalysis', {
                        url: '/gradesanalysis',
                        views: {
                            '@': {
                                templateUrl: 'templates/gradesanalysis/gradesanalysis.html',
                                controller: 'DemoCtrl'
                            }
                        }
                    })
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/welcome');

        });
