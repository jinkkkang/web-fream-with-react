module.exports = function(app) {
    app.get('/', function(req, res) {
        // if (!req.session.user) {
        //   res.redirect('/login');
        // }
        if (req.session.user) {
            res.redirect('/home');
        }
    });
    app.use('/login', require('./login'));
    app.use('/home', require('./home'));
    app.use('/logout', require('./logout'));
    app.use('/getdata', require('./getdata'));
    app.use('/showpage', require('./showpage'));
    app.use('/cmd', require('./cmd'));

};

./configure  --enable-skip-gd-check --with-php-config=/usr/local/php7/bin/php-config --enable-shared
 rpm -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-1.el7.nux.noarch.rpm