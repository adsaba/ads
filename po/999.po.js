/**
 * @ngdoc object
 * @name the999Page
 * @description
 */

var the999Page = function () {
    'use strict';
    var that = this;
    var path = require('path');
    var Page = require('../conf/page.js'),
        page = new Page();

    /******************************************************
     * Page Object Texts
     ******************************************************/
    this.pageUrl = page.main.env().ads999.host;
    this.streetNameText = page.main.env().streetName;
    this.streetNumberText = page.main.env().streetNumber;
    this.adTitleText = page.main.env().adTitle;
    this.adDescriptionText = page.main.env().adDescription;

    /******************************************************
     * Page Object Elements (Path and Element)
     ******************************************************/
    this.loginLinkPath = by.css("[data-popup='login']");
    this.userInputPath = by.css(".popup-login-form-control>input[type='text']");
    this.passwordInputPath = by.css(".popup-login-form-control>input[type='password']");
    this.submitButtonPath = by.css(".popup-login-form-footer-submit");
    this.addButtonPath = by.css("[href='/add']");
    this.flashPath = by.css("[type='application/x-shockwave-flash']");
    // Apartments
    this.pricePath = by.css("#control_2");
    this.authorPath = by.css("#control_795");
    this.housingFundPath = by.css("#control_852");
    this.roomsPath = by.css("#control_241");
    this.flowPath = by.css("#control_248");
    this.flowsPath = by.css("#control_249");
    this.buildingTypePath = by.css("#control_247");
    this.buildingPlanPath = by.css("#control_246");
    this.totalAreaPath = by.css("#control_244");
    this.leavingAreaPath = by.css("#control_239");
    this.kitchenAreaPath = by.css("#control_242");
    this.roomHeightPath = by.css("#control_237");
    this.statePath = by.css("#control_253");
    this.balconyPath = by.css("#control_250");
    this.bathRoomPath = by.css("#control_252");
    this.parkingPath = by.css("#control_251");
    this.sectorPath = by.css("#control_9");
    this.streetNamePath = by.css("#control_10");
    this.streetNumberPath = by.css("#control_11");
    this.adTitlePath = by.css("#control_12");
    this.adDescriptionPath = by.css("#control_13");
    this.addPhotoPath = by.css("#fileupload-button");
    this.inputPhotoPath = by.css("input[type='file']");
    this.agreePath = by.css("#agree");
    this.continuePath = by.css(".board__content__further__body>span");


    /******************************************************
     * Page Object Methods
     ******************************************************/

    /**
     * @ngdoc Methods
     * @name open
     * @methodOf the999Page
     * @description Open up base URL
     *
     */
    this.open = function () {
        browser.driver.get(that.pageUrl);
    };

    /**
     * @ngdoc Methods
     * @name setPageUri
     * @methodOf the999Page
     * @description setPageUri
     * @param {string} uri
     */
    this.setPageUri = function (uri) {
        browser.driver.get(that.pageUrl + uri);
    };

    /**
     * @ngdoc Methods
     * @name login
     * @methodOf the999Page
     * @description login
     *
     */
    this.login = function (user) {
        page.main.clickElement(that.loginLinkPath);
        browser.driver.switchTo().frame(browser.driver.findElement(by.css('iframe#topbar-popup')));
        page.main.setInputTextElement(that.userInputPath, user);
        page.main.setInputTextElement(that.passwordInputPath, page.main.env().ads999.users.psw);
        page.main.clickElement(that.submitButtonPath);
    };

    /**
     * @ngdoc Methods
     * @name closeFlash
     * @methodOf the999Page
     * @description closeFlash
     *
     */
    this.closeFlash = function () {
        //for(var i=0; i<3; i++){
            browser.driver.isElementPresent(that.flashPath).then(function (value) {
                page.main.wait(10);
                if (value === true) {
                    page.main.clickElement(that.flashPath);
                    browser.driver.getAllWindowHandles().then(function(handles) {
                        browser.driver.switchTo().window(handles[1]);
                        browser.driver.close();
                        browser.driver.switchTo().window(handles[0]);
                    });
                } //else { return 0; }
            });
        //}
    };


    /**
     * @ngdoc Methods
     * @name addAd
     * @methodOf the999Page
     * @description addAd
     *
     */
    this.addApartmentAd = function () {
        that.setPageUri("/add?category=real-estate&subcategory=real-estate%2Fapartments-and-rooms&offer_type=776");
        that.closeFlash();
        page.main.setInputTextElement(that.pricePath ,'1');
        page.main.clickElement(that.authorPath);
        page.main.clickElement(by.css("[value='18895']")); //Persoană particulară
        page.main.clickElement(that.housingFundPath);
        page.main.clickElement(by.css("[value='19109']")); //De mina a doua

        page.main.clickElement(that.roomsPath);
        page.main.clickElement(by.css("[value='893']")); //Apartament cu 1 odaie
        page.main.clickElement(that.flowPath);
        page.main.clickElement(by.css("[value='955']")); //Etajul 6
        page.main.clickElement(that.flowsPath);
        page.main.clickElement(by.css("[value='919']")); //Din 6
        page.main.clickElement(that.buildingTypePath);
        page.main.clickElement(by.css("[value='911']")); //Piatra
        page.main.clickElement(that.buildingPlanPath);
        page.main.clickElement(by.css("[value='915']")); //Individuala
        page.main.setInputTextElement(that.totalAreaPath, '43');
        page.main.setInputTextElement(that.leavingAreaPath, '38');
        page.main.setInputTextElement(that.kitchenAreaPath, '9');
        page.main.setInputTextElement(that.roomHeightPath, '2500');
        page.main.clickElement(that.statePath);
        page.main.clickElement(by.css("[value='916']")); //euroreparatie
        page.main.clickElement(that.balconyPath);
        page.main.clickElement(by.css("[value='920']")); //1 balcon
        page.main.clickElement(that.bathRoomPath);
        page.main.clickElement(by.css("[value='900']")); //1 baie
        //that.scrollElemFinderIntoView(that.statePath); //scroll
        // more
        var values = [193 , 214, 160 , 226, 179 , 217, 197, 174, 206, 173, 159, 223, 225, 175, 233, 224, 196, 188, 172];
        for (var i = 0; i < values.length; i++) {
            page.main.clickElement(by.css("[name='"+values[i]+"']"));
        }
        page.main.clickElement(that.sectorPath);
        page.main.clickElement(by.css("[value='15664']")); //centru
        page.main.setInputTextElement(that.streetNamePath, that.streetNameText);
        page.main.setInputTextElement(that.streetNumberPath, that.streetNumberText);
        //that.scrollElemFinderIntoView(that.adTitlePath); //scroll
        page.main.setInputTextElement(that.adTitlePath, that.adTitleText);
        page.main.setInputTextElement(that.adDescriptionPath, that.adDescriptionText);
        page.main.clickElement(that.agreePath);
        page.main.addPhoto(that.inputPhotoPath);
        browser.debugger();
        page.main.clickElement(that.continuePath);
    };

};

module.exports = the999Page;