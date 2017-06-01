var socket = require('socket.io-client')('http://localhost:8091');
const SET_PROP  = 'monobject/SET_PROP';

console.log(process.argv.length);

if (process.argv.length !== 5) {
    console.log("usage:\n node app.js 'monobject' 'property' 'value'\n\n");
    process.exit();
}

function setProperty(monObject, property, value) {
    return {
        type: SET_PROP,
        monObject: monObject,
        property: property,
        value: value
    };
}


socket.on('connect', function() {
    let monObject = process.argv[2]
    let property = process.argv[3]
    let value = process.argv[4]

    socket.emit('action', setProperty(monObject, property, value)  );

    setTimeout( function() {process.exit(0)}, 10 );
});
