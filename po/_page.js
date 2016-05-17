/**
 * @ngdoc object
 * @name page
 * @description The page data
 */

'use strict';

var page = function (po) {
    var Main = require('./../commons/main.js'); this.main = new Main();
    if (po != 'main'){
        var Ads999 = require('./the_999.po.js'); this.ads999 = new Ads999();
        var AdsMakler = require('./the_makler.po.js'); this.adsMakler = new AdsMakler();
        var AdsAvito = require('./the_avito.po.js'); this.adsAvito = new AdsAvito();
    }
};

module.exports = page;