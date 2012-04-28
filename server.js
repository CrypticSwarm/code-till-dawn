var express = require('express')
  , app = express.createServer()
  , nib = require('nib')
  , stylus = require('stylus')
  , sessionStore = new express.session.MemoryStore
  , port = 3000
  , appName = 'Code till dawn'

app.configure(function () {
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(express.logger())
  app.use(stylus.middleware(
    { src: __dirname + '/web'
    , compile: function (str, path) {
        return stylus(str)
          .set('filename', path)
          .use(nib())
      }}))
  app.use(express.static(__dirname + '/web', { maxAge: 86400000 }))
  app.use(express.cookieParser())
  app.use(express.session({ secret: '7#8vLlMngPc6', store: sessionStore }))
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')
})

app.helpers({ widgets: require('async-forms').widgets })

require('./routes/user')(app)

app.listen(port, function () {
  console.log(appName, port)
})
