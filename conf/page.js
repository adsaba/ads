/**
 * @ngdoc object
 * @name page
 * @description The page data
 */

'use strict';

var page = function (po) {
    var Main = require('./../commons/main.js');
    this.main = new Main();

    if (po == 'ads999'){
        var Ads999 = require('../po/999.po.js');
        this.ads999 = new Ads999();
    }
    if (po == 'adsMakler'){
        var AdsMakler = require('../po/makler.po.js');
        this.adsMakler = new AdsMakler();
    }
    if (po == 'adsAvito'){
        var AdsAvito = require('../po/avito.po.js');
        this.adsAvito = new AdsAvito();
    }
};

module.exports = page;