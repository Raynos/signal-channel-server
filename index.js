var http = require("http")
    , sock = require("signal-channel/server")

var server = http.createServer(function (req, res) {
    res.end(
        "<a href='http://github.com/Raynos/signal-channel'>" +
        "Signal-channel </a>")
}).listen(8080)

sock.install(server, "/sock")

console.log("listening to port 8080")
