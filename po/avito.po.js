/**
 * @ngdoc object
 * @name theAvitoPage
 * @description
 */

var theAvitoPage = function () {
    'use strict';
    var that = this;
    var path = require('path');
    var Page = require('../conf/page.js'),
        page = new Page();

    /******************************************************
     * Page Object Texts
     ******************************************************/
    this.pageUrl = page.main.env().adsAvito.host;
    this.adTitleText = page.main.env().adsAvito.adTitle;
    this.adDescriptionText = page.main.env().adsAvito.adDescription;

    /******************************************************
     * Page Object Elements (Path and Element)
     ******************************************************/

    this.userInputPath = by.css("[name='login']");
    this.passwordInputPath = by.css("[name='password']");
    this.submitButtonPath = by.css("[type='submit']");

    //category1
    this.fmServicesPath = by.xpath(".//input[@value='113']/..");
    this.smOfferPath = by.xpath(".//input[@value='114']/..");
    this.tmOthersPath = by.xpath(".//input[@value='10213']/..");


    this.metroPath = by.css("#fld_metro_id>option[value='56']");  //Кунцевская
    this.adTitlePath = by.css("#item-edit__title");
    this.adDescriptionPath = by.css("#item-edit__description");
    this.pricePath = by.css("#item-edit__price");
    this.inputPhotoPath = by.css(".js-uploader-input");
    this.packagesFreePath = by.css(".packages-tab_free");
    this.continuePath = by.css(".js-packages-footer_free.is-active .js-packages-submit");


    /******************************************************
     * Page Object Methods
     ******************************************************/

    /**
     * @ngdoc Methods
     * @name open
     * @methodOf theAvitoPage
     * @description Open up base URL
     *
     */
    this.open = function () {
        browser.driver.get(that.pageUrl + '/profile/login');
    };

    /**
     * @ngdoc Methods
     * @name setPageUri
     * @methodOf theAvitoPage
     * @description setPageUri
     * @param {string} uri
     */
    this.setPageUri = function (uri) {
        browser.driver.get(that.pageUrl + uri);
    };

    /**
     * @ngdoc Methods
     * @name login
     * @methodOf theAvitoPage
     * @description login
     *
     */
    this.login = function (user, psw) {
        page.main.setInputTextElement(that.userInputPath, user);
        page.main.setInputTextElement(that.passwordInputPath, psw);
        page.main.clickElement(that.submitButtonPath);
    };

    /**
     * @ngdoc Methods
     * @name addAd
     * @methodOf theAvitoPage
     * @description addAd
     *
     */
    this.addAd = function () {
        that.setPageUri("/additem");
        page.main.clickElement(that.fmServicesPath);
        page.main.clickElement(that.smOfferPath);
        page.main.clickElement(that.tmOthersPath);
        page.main.clickElement(that.metroPath);

        page.main.setInputTextElement(that.pricePath ,'1500');
        page.main.setInputTextElement(that.adTitlePath, that.adTitleText);
        page.main.setInputTextElement(that.adDescriptionPath, that.adDescriptionText);
        page.main.addPhoto(that.inputPhotoPath, 'adsT', 5);

        page.main.clickElement(that.packagesFreePath);
        page.main.clickElement(that.continuePath);
        page.main.wait(5);
    };

};

module.exports = theAvitoPage;