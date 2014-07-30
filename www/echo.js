var echo = {
    sendMessage: function(message, callback) {
        cordova.exec(
        	callback, // success callback function
        	callback, // error callback function
            'Echo', // mapped to our native Java class called "CalendarPlugin"
            'echo', // with this action name
            [message]
        ); 
     }
}
