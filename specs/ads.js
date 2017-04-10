var Page = require('../po/_page.js');

describe('Add ads', function () {
    'use strict';
    var page = new Page();

    describe("Add ads on 999", function () {
        it("the999Page", function (done) {
            page.ads999.open();
            page.ads999.login(page.main.env().ads999.users.usr1);
            page.ads999.addApartmentAd();
            done();
        });
    });

    describe("Add ads on makler", function () {
        it("theMaklerPage", function (done) {
            page.adsMakler.open();
            page.adsMakler.login(page.main.env().adsMakler.users.usr1);
            page.adsMakler.addApartmentAd();
            done();
        });
    });
});
