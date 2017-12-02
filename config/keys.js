if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}



// Client ID  
// 375487214965-indctf3fnj1p5tbkf9t9p22uj9r815hf.apps.googleusercontent.com
// Client secret 
// JP6NU_5UvxgvKIPvd6KPj-Ag
// mongodb://bill:password@ds141175.mlab.com:41175/node-emaily-prod
