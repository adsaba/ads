var Page = require('../conf/page.js'),
    page1 = new Page('ads999'),
    page2 = new Page('adsMakler');

describe('Add ads', function () {
    'use strict';

    describe("Add ads on 999", function () {
        it("the999Page", function (done) {
            page1.ads999.open();
            page1.ads999.login(page1.main.env().ads999.users.usr1); //usr2
            page1.ads999.addApartmentAd();
            done();
        });
    });

    describe("Add ads on makler", function () {
        it("theMaklerPage", function (done) {
            page2.adsMakler.open();
            page2.adsMakler.login(page2.main.env().adsMakler.users.usr1); //usr2
            page2.adsMakler.addApartmentAd();
            done();
        });
    });
});
