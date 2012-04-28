var jf = require('async-forms')
  , Form = jf.Form
  , validator = jf.validator
  , widget = jf.widgets

module.exports = new Form('user',
  { username: { validator: validator.length(127) }
  })
