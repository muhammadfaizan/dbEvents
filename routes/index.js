
// Render The app page if in session else render the login page
// Route for (GET) login page
exports.index = function(req, res){

    if (req.session.user_id) {
        res.redirect('/home');
    } else {
        res.render('index');
    }

};

// Render The app
// Route for app page
exports.app = function (req, res) {
    res.render('app');
}

// Handle the login page post request from user
// Route for (POST) login page
exports.login =  function (req, res) {

    var post = req.body;
    console.log(post);
    var query = "SELECT userId FROM users WHERE userName='"+post.user+"' AND password='"+post.password+"'";
    db.querydb(query)
        .then( function(res)   { console.log(res); },
        function(error) { console.log(error)});
    if (post.user == 'john' && post.password == '123') {
        req.session.user_id = "johns_user_id_here";
        res.redirect('/home');
    } else {
        res.send('Bad user/pass');
    }
}

// handle the from data from signup page
// Route for (POST) signup page
exports.signup =  function (req, res) {
    var post = req.body;
    console.log(post);

}

// Handle the logout button, will return to login page when clicked
// Route for logout button
exports.logout = function (req, res) {
    delete req.session.user_id;
    res.redirect('/');
}

