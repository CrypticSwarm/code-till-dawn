var jf = require('async-forms')
  , Form = jf.Form
  , validator = jf.validator
  , widget = jf.widgets

module.exports = new Form('location',
  { name: { validator: validator.length(127) }
  })
