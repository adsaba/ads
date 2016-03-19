var Page = require('../conf/page.js'),
    page1 = new Page('adsAvito');

describe('Add ads', function () {
    'use strict';

    describe("Add ads on avito", function () {
        it("theAvitoPage", function (done) {
            page1.adsAvito.open();
            page1.adsAvito.login(page1.main.env().adsAvito.users.usr1, page1.main.env().adsAvito.users.psw1);
            //page1.adsAvito.login(page1.main.env().adsAvito.users.usr2, page1.main.env().adsAvito.users.psw1);
            page1.adsAvito.addAd();
            done();
        });

        //http://irr.ru
    });

});
