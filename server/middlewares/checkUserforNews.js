// const User = require('../server/db/models/User-model')

function toleranceUser(req, res, next) {
  if (req.session.user_id) 
  {
    
    User.findById(req.session.user_id, function(user) {
      if (user) {
        req.currentUser = user;
        next();
      } else {
        res.redirect('http://localhost:3000/auth/login');
      }
    });
  } else {
    res.redirect('http://localhost:3000/auth/login');
  }
}

module.exports = toleranceUser;

// app.get('/documents.:format?', loadUser, function(req, res) {
//   // ...
// }); допимать в ручке
