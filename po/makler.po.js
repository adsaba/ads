/**
 * @ngdoc object
 * @name theMaklerPage
 * @description
 */

var theMaklerPage = function () {
    'use strict';
    var that = this;
    var Page = require('../conf/page.js'),
        page = new Page();

    /******************************************************
     * Page Object Texts
     ******************************************************/
    this.pageUrl = page.main.env().adsMakler.host;
    this.streetNameText = page.main.env().streetName;
    this.streetNumberText = page.main.env().streetNumber;
    this.adTitleText = page.main.env().adTitle;
    this.adDescriptionText =page.main.env().adDescription;

    /******************************************************
     * Page Object Elements (Path and Element)
     ******************************************************/
    this.loginLinkPath = by.css("#logInDiv span");
    this.userInputPath = by.css("#logInEmail");
    this.passwordInputPath = by.css("#logInPassword");
    this.submitButtonPath = by.css(".bu span");
    this.addButtonPath = by.css(".add>a");
    
    // Apartments
    this.themeSectionPath = by.css("#category_1>option[value='12']"); //imobil
    this.typeSectionPath = by.css("#category_2>option[value='819']"); //vinzare
    this.subtypeSectionPath = by.css("#category_3>option[value='107']");  //vinzare apartamente
    this.pricePath = by.css("#price");
    this.currencyPath = by.css("#currency_id>[for='currency_id-5']"); //euro
    this.authorPath = by.css("#anfrom>[for='anfrom-person']"); //Persoană particulară

    this.roomsPath = by.css("#106>option[value='149']"); //Apartament cu 1 odaie
    this.roomsTypePath = by.css("#355>option[value='2618']"); //separate
    this.totalAreaPath = by.css("#172");
    this.leavingAreaPath = by.css("#173");
    this.kitchenAreaPath = by.css("#174");
    this.houseTypePath = by.css("#168>option[value='560']"); //Piatra
    this.buildingTypePath = by.css("#163 option[value='526']"); //Dat în exploatare
    this.buildingPlanPath = by.css("#171>option[value='571']"); //Individuala
    this.flowPath = by.css("#169");
    this.flowsPath = by.css("#170");
    this.bathRoomPath = by.css("#177>option[value='584']"); //1 baie
    this.balconyPath = by.css("#175>option[value='573']"); //1 balcon
    this.roomHeightPath = by.css("#178");
    this.statePath = by.css("#176>option[value='582']"); //euroreparatie
    this.parkingPath = by.css("#356>option[value='2620']"); //deschis
    this.additionalPath = by.xpath(".//a[@class='ftitle' and contains(.,'Suplimentar')]");
    this.sectorPath = by.css("#288>option[value='1023']"); //centru
    this.streetNamePath = by.css("#298");
    this.streetNumberPath = by.css("#312");
    this.adTitlePath = by.css("#editorName");
    this.adDescriptionPath = by.css("#editorText");
    this.addPhotoPath = by.css("#qq-upload-button");
    this.inputPhotoPath = by.css("input[type='file']");
    this.inputPhonePath = by.css(".phone-list label");
    this.continuePath = by.css("#addWebControls .saveBtn");


    /******************************************************
     * Page Object Methods
     ******************************************************/

    /**
     * @ngdoc Methods
     * @name open
     * @methodOf theMaklerPage
     * @description Open up base URL
     *
     */
    this.open = function () {
        browser.driver.get(that.pageUrl);
    };

    /**
     * @ngdoc Methods
     * @name setPageUri
     * @methodOf theMaklerPage
     * @description setPageUri
     * @param {string} uri uri_path
     */
    this.setPageUri = function (uri) {
        browser.driver.get(that.pageUrl + uri);
    };

    /**
     * @ngdoc Methods
     * @name login
     * @methodOf theMaklerPage
     * @description login
     * @param {string} user user_name
     */
    this.login = function (user) {
        page.main.clickElement(that.loginLinkPath);
        page.main.setInputTextElement(that.userInputPath, user);
        page.main.setInputTextElement(that.passwordInputPath, page.main.env().adsMakler.users.psw);
        page.main.clickElement(that.submitButtonPath);
    };

    /**
     * @ngdoc Methods
     * @name addAd
     * @methodOf theMaklerPage
     * @description addAd
     *
     */
    this.addApartmentAd = function () {
        that.setPageUri("/ro/chisinau/an/web/add");

        page.main.clickElement(that.themeSectionPath);
        page.main.clickElement(that.typeSectionPath);
        page.main.clickElement(that.subtypeSectionPath);

        page.main.setInputTextElement(that.pricePath ,'1');
        page.main.clickElement(that.currencyPath);

        page.main.clickElement(that.authorPath);

        page.main.clickElement(that.roomsPath);
        page.main.clickElement(that.roomsTypePath);

        page.main.setInputTextElement(that.flowPath, '6');
        page.main.setInputTextElement(that.flowsPath, '6');
        page.main.clickElement(that.houseTypePath);
        page.main.clickElement(that.buildingTypePath);
        page.main.clickElement(that.buildingPlanPath);
        page.main.setInputTextElement(that.totalAreaPath, '43');
        page.main.setInputTextElement(that.leavingAreaPath, '38');
        page.main.setInputTextElement(that.kitchenAreaPath, '9');
        page.main.setInputTextElement(that.roomHeightPath, '2500');
        page.main.clickElement(that.statePath);
        page.main.clickElement(that.balconyPath);
        page.main.clickElement(that.bathRoomPath);
        page.main.clickElement(that.parkingPath);

        page.main.clickElement(that.additionalPath);

        var values = ['363', '364', '179', '181', '182', '366', '183', '184', '185', '358-2626', '358-2627', '358-2628', '358-2631', '358-2632', '358-2630', '358-2629'];
        for (var i = 0; i < values.length; i++) {
            page.main.clickElement(by.css("[for='field_"+values[i]+"']"));
        }
        page.main.clickElement(that.sectorPath);
        page.main.setInputTextElement(that.streetNamePath, that.streetNameText);
        page.main.setInputTextElement(that.streetNumberPath, that.streetNumberText);

        page.main.setInputTextElement(that.adTitlePath, that.adTitleText);
        page.main.setInputTextElement(that.adDescriptionPath, that.adDescriptionText);

        page.main.addPhoto(that.inputPhotoPath, 'ads', 10);

        //page.main.scrollElemFinderIntoView(that.continuePath); //scroll
        page.main.clickElement(that.inputPhonePath);
        page.main.clickElement(that.continuePath);
        page.main.wait(5)
    };

};

module.exports = theMaklerPage;