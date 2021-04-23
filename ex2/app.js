const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.redirect('index.html')
});
app.use(express.static(__dirname))
const server = app.listen(port, function () {
    console.log('hey it work !!!!')
});

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('connection');
    socket.on('stream', (stream) => {
        socket.broadcast.emit('stream', stream);
    });
    socket.on('disconnect', (stream) => {
        console.log('disconnect');
    });
});