angular.module('starter.services', [])

        .factory('Users', function () {
            // Might use a resource here that returns a JSON array

            // Some fake testing data
            var chats = [
                {
                    id: 0,
                    name: 'Ben Sparrow',
                    lastText: 'You on your way?',
                    face: 'img/ben.png'
                }, {
                    id: 1,
                    name: 'Max Lynx',
                    lastText: 'Hey, it\'s me',
                    face: 'img/max.png'
                }, {
                    id: 2,
                    name: 'Adam Bradleyson',
                    lastText: 'I should buy a boat',
                    face: 'img/adam.jpg'
                }, {
                    id: 3,
                    name: 'Perry Governor',
                    lastText: 'Look at my mukluks!',
                    face: 'img/perry.png'
                }, {
                    id: 4,
                    name: 'Mike Harrington',
                    lastText: 'This is wicked good ice cream.',
                    face: 'img/mike.png'
                }, {
                    id: 5,
                    name: 'Mike Harrington',
                    lastText: 'This is wicked good ice cream.',
                    face: 'img/mike.png'
                }, {
                    id: 6,
                    name: 'Mike Harrington',
                    lastText: 'This is wicked good ice cream.',
                    face: 'img/mike.png'
                }, {
                    id: 7,
                    name: 'Anna Harrington',
                    lastText: 'This is wicked good ice cream.',
                    face: 'img/mike.png'
                }, {
                    id: 8,
                    name: 'Adele Harrington',
                    lastText: 'This is wicked good ice cream.',
                    face: 'img/mike.png'
                }
            ];

            return {
                all: function () {
                    return chats;
                },
                remove: function (chat) {
                    chats.splice(chats.indexOf(chat), 1);
                },
                get: function (chatId) {
                    for (var i = 0; i < chats.length; i++) {
                        if (chats[i].id === parseInt(chatId)) {
                            return chats[i];
                        }
                    }
                    return null;
                }
            };
        }).factory('Events', function ($q) {

    var incrementDate = function (date, amount) {
        var tmpDate = new Date(date);
        tmpDate.setDate(tmpDate.getDate() + amount)
        return tmpDate;
    };

    //create fake events, but make it dynamic so they are in the next week
    var fakeEvents = [];
    fakeEvents.push(
            {
                "title": "Meetup on Ionic",
                "description": "We'll talk about beer, not Ionic.",
                "date": incrementDate(new Date(), 1)
            }
    );
    fakeEvents.push(
            {
                "title": "Meetup on Beer",
                "description": "We'll talk about Ionic, not Beer.",
                "date": incrementDate(new Date(), 2)
            }
    );
    fakeEvents.push(
            {
                "title": "Ray's Birthday Bash",
                "description": "Celebrate the awesomeness of Ray",
                "date": incrementDate(new Date(), 4)
            }
    );
    fakeEvents.push(
            {
                "title": "Code Review",
                "description": "Let's tear apart Ray's code.",
                "date": incrementDate(new Date(), 5)
            }
    );

    var getEvents = function () {
        var deferred = $q.defer();
        deferred.resolve(fakeEvents);
        return deferred.promise;
    }

    return {
        get: getEvents
    };
    var getEvents = function() {
        var deferred = $q.defer();

        /*
        Logic is:
        For each, see if it exists an event.
        */
        var promises = [];
        fakeEvents.forEach(function(ev) {
            //add enddate as 1 hour plus
            ev.enddate = incrementHour(ev.date, 1);
            console.log('try to find '+JSON.stringify(ev));
            promises.push($cordovaCalendar.findEvent({
                title:ev.title,
                startDate:ev.date
            }));
        });
        
        $q.all(promises).then(function(results) {
            console.log("in the all done");   
            //should be the same len as events
            for(var i=0;i<results.length;i++) {
                fakeEvents[i].status = results[i].length === 1;
            }
            deferred.resolve(fakeEvents);
        });
        
        return deferred.promise;
}

})
.factory('CalendarService', function($q) {
      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();

      var eventos =[
        {id: 123,title: 'All Day Event',start: new Date(y, m, 1),url: '#/event'},
        {id: 124,title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2),url: '#/event'},
        {id: 125,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false,url: '#/event'},
        {id: 126,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false,url: '#/event'},
        {id: 127,title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false,url: '#/event'},
        {id: 128,title: 'Test event',start: new Date(y, m, 28),end: new Date(y, m, 29),url: '#/event'}
      ];

      return{
        all: function() {
          var deferredEventos = $q.defer();
          deferredEventos.resolve(eventos);
          return deferredEventos.promise;
        },
    }
      
  })
.factory('socket',function(socketFactory){
	//Create socket and connect to http://chat.socket.io 
 	var myIoSocket = io.connect('http://chat.socket.io');

  	mySocket = socketFactory({
    	ioSocket: myIoSocket
  	});
  	
	return mySocket;
})