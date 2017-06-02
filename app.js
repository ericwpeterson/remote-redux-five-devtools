var socket = require('socket.io-client')('http://localhost:8091');

/*
NOTE: This is an example of an action
"{ \"type\": \"monobject/SET_PROP\", \"monObject\": \"a\", \"property\": \"a\", \"value\": \"a\" }"
*/

if (process.argv.length !== 3) {
    console.log("usage:\n node app.js <ACTION_OBJECT>\n See app.js for an example of a properly escaped action object\n");
    process.exit();
}

let action = JSON.parse(process.argv[2]);

console.log('sending ', action);

socket.on('connect', function() {
    socket.emit('action', action  );
    setTimeout( function() {process.exit(0)}, 10 );
});
