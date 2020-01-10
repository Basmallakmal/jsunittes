var assert = require('assert');
var logincontroller = require('../controller/login-controller');

describe('logincontroller', function(){

    describe('isvaliduser', function(){

      it('return true if user is valid', function(){
        var isvalid = logincontroller.isvaliduser(['tes','admin'], 'admin')
        assert.equal(isvalid, true);
      });

      it('return false if user invalid', function(){
        var isvalid = logincontroller.isvaliduser(['tes','admin'], 'umum')
        assert.equal(isvalid,false);
      });

    });

});
