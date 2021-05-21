// const User = require('../server/db/models/User-model')

const toleranceUser =  (req, res, next) => {
  console.log(req.session.user);
  if (req.session.user_id) 

  {
  
    User.findById(req.session.user_id, function(user) {
      if (user) {
        req.currentUser = user;
        next();
      } else {
        res.sendStatus(400);
      }
    });
  } else {
    res.sendStatus(400);
  }
}

module.exports = toleranceUser;

// app.get('/documents.:format?', loadUser, function(req, res) {
//   // ...
// }); допимать в ручке

