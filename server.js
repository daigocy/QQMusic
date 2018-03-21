const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const path = require('path');
// const history = require('connect-history-api-fallback');
const config = require('./webpack.express.config.js');
const compiler = webpack(config);

const app = express();

app.use(middleware(compiler, {
  publicPath: config.output.publicPath
}));
//app.use(history({index: 'index.html'}));
app.use(require("webpack-hot-middleware")(compiler));

app.get('/player/*', function(req, res, next) {
    // let file = __dirname + '/dist/player.html';
    // res.sendFile(file);
    // var viewname = req.params.viewname 
    //     ? req.params.viewname + '.html' 
    //     : 'index.html';
        
    let filepath = path.join(compiler.outputPath, 'player.html');
    
    // 使用webpack提供的outputFileSystem
    compiler.outputFileSystem.readFile(filepath, function(err, result) {
        if (err) {
            // something error
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

app.get('/*', function(req, res, next) {
    // let file = __dirname + '/dist/player.html';
    // res.sendFile(file);
    // var viewname = req.params.viewname 
    //     ? req.params.viewname + '.html' 
    //     : 'index.html';
        
    let filepath = path.join(compiler.outputPath, 'index.html');
    
    // 使用webpack提供的outputFileSystem
    compiler.outputFileSystem.readFile(filepath, function(err, result) {
        if (err) {
            // something error
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});
// app.get('/*', (req, res, next)=> {
//     let file = __dirname + '/dist/index.html';
//     res.sendFile(file);
// })


app.listen(3000, () => console.log('Example app listening on port 3000!'))