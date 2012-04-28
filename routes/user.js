var UserForm = require('../forms/user')

module.exports = function init(app) {
  app.get('/adduser', function addUser(req, res) {
    var form = new UserForm
    res.render('addUserForm', { route: '/adduser'
                          , form: form 
    })
  })

  app.post('/adduser', function addUserSubmit(req, res) {
    
  })
}
