var express = require('express');
var app = express();

app.get('/player/*', function(req, res, next) {
    let file = __dirname + '/dist/player.html';
    res.sendFile(file);
});
app.use(express.static('./dist/'));
app.get('/*', (req, res, next)=> {
    let file = __dirname + '/dist/index.html';
    res.sendFile(file);
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))