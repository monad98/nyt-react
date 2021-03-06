const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../build/webpack.config')
const project = require('../project.config')
const compress = require('compression')
const app = express();
const compiler = webpack(webpackConfig);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const articleController = require('./controllers/article');
var server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(compress());
app.set('port', process.env.PORT || 3000);

//middleware for use of socket.io
app.use(function(req, res, next){
  res.io = io;
  next();
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_j11pv9mh:de53rkuuera9mufej6v4k5b9c3@ds157631.mlab.com:57631/heroku_j11pv9mh');
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});


/**
 * Apply Webpack HMR Middleware
 */
if (project.env === 'development') {
  console.log('Enabling webpack development and HMR middleware');
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(project.basePath, project.srcDir),
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: 'normal',
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }));
}


app.get('/api/saved', articleController.getSavedArticles);
app.post('/api/saved', articleController.saveArticle);
app.delete('/api/saved/:id', articleController.deleteArticle);

app.use(express.static(path.resolve(project.basePath, project.outDir)));

app.use('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html')
  if (project.env === 'development') {
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  }
  else {
    res.sendFile(filename);
  }

});



/**
 * Server start
 */
console.log('%s Starting server...', chalk.green('✓'))
server.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

/**
 * Socket.io
 */
io.on('connection', function(socket){
  console.log('%s client connected', chalk.green('✓'));

  socket.on('disconnect', () => {
    console.log('%s client disconnected', chalk.red('✗'));
  });
});

module.exports = server;
