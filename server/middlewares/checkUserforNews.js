function loadUser(req, res, next) {
  if (req.session.user_id) {
    User.findById(req.session.user_id, function(user) {
      if (user) {
        req.currentUser = user;
        next();
      } else {
        res.redirect('http://localhost:3000/login/auth');
      }
    });
  } else {
    res.redirect('http://localhost:3000/login/auth');
  }
}

// app.get('/documents.:format?', loadUser, function(req, res) {
//   // ...
// }); допимать в ручке
