'use strict';

// The Package is past automatically as first parameter
module.exports = function(Newmodule, app, auth, database) {

    app.get('/newmodule/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/newmodule/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/newmodule/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/newmodule/example/render', function(req, res, next) {
        Newmodule.render('index', {
            package: 'newmodule'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
