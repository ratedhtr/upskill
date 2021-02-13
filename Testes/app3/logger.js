function mylogger(message) {
    // Send an HTTP request
    console.log(message);
}
module.exports.log = mylogger;