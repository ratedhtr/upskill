var url= 'http://mylogger.io/mylogger';
function mylogger(message) {
    // Send an HTTP request
    console.log(message);
}

function mylogger2(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports= { mylogger, mylogger2 };