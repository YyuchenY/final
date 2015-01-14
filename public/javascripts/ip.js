var express = require('express');
app.use(function(req, res, next) {
    var ip_info = get_ip(req);
    console.log(ip_info);
    // { clientIp: '127.0.0.1', clientIpRoutable: false }
    next();
});

	console.log;('1');