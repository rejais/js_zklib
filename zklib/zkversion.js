var dgram = require('dgram');

module.exports = function(ZKLib) {

  ZKLib.prototype.version = function(cb) {
    var keyword = '~ZKFPVersion';

    return this._executeCmd( this.CMD_DEVICE, keyword, function(err,ret) {
      if(err || !ret || ret.length <= 8)
        return cb(err);

      return cb(null, ret.slice(8).toString("ascii").split(/\u0000/).shift().replace(keyword+"=",''));
    });
  };

}
