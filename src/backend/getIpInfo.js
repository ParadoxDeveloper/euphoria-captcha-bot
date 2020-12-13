const ipinfo = require("ipinfo");

module.exports = function(ip){
    let info;
    ipinfo(ip, (err, inf) => {
        info = inf
    })
}