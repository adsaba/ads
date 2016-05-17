var Page = require('../po/_page.js');


describe('Add ads', function () {
    'use strict';
    var page = new Page();
    describe("Add ads on avito", function () {
        it("theAvitoPage", function (done) {
            page.adsAvito.open();
            page.adsAvito.login(page.main.env().adsAvito.users.usr1, page.main.env().adsAvito.users.psw1); //usr2
            page.adsAvito.addAd();
            done();
        });
    });

});
