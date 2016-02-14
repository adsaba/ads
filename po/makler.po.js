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
    this.currencyPath = by.css("#currency_id>option[value='5']"); // value="5"
    this.authorPath = by.css("#anfrom>option[value='person']"); // value="person"

    this.roomsPath = by.css("#field_106>option[value='149']"); // value="149"
    this.roomsTypePath = by.css("#field_355>option[value='2618']"); // value="2618"
    this.totalAreaPath = by.css("#field_172");
    this.leavingAreaPath = by.css("#field_173");
    this.kitchenAreaPath = by.css("#field_174");
    this.houseTypePath = by.css("#field_168>option[value='560']"); // value="560"
    this.buildingTypePath = by.css("#field_163 option[value='526']"); // value="526"
    this.buildingPlanPath = by.css("#field_171>option[value='571']"); // value="571"
    this.flowPath = by.css("#field_169");
    this.flowsPath = by.css("#field_170");
    this.bathRoomPath = by.css("#field_177>option[value='584']"); // value="584"
    this.balconyPath = by.css("#field_175>option[value='573']"); // value="573"
    this.roomHeightPath = by.css("#field_178");
    this.statePath = by.css("#field_176>option[value='582']"); //value="582"
    this.parkingPath = by.css("#field_356>option[value='2620']"); //value="2620"
    this.additionalPath = by.xpath(".//a[@class='ftitle' and contains(.,'Suplimentar')]");
    this.sectorPath = by.css("#field_288>option[value='1023']"); //value="1023"
    this.streetNamePath = by.css("#field_298");
    this.streetNumberPath = by.css("#field_312");
    this.adTitlePath = by.css("#editorName");
    this.adDescriptionPath = by.css("#editorText");
    this.addPhotoPath = by.css("#qq-upload-button");
    this.inputPhotoPath = by.css("input[type='file']");
    this.inputPhonePath = by.css(".phone-list input']");
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
     * @param {string} uri
     */
    this.setPageUri = function (uri) {
        browser.driver.get(that.pageUrl + uri);
    };

    /**
     * @ngdoc Methods
     * @name login
     * @methodOf theMaklerPage
     * @description login
     *
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
        page.main.clickElement(that.currencyPath); //euro

        page.main.clickElement(that.authorPath); //Persoană particulară

        page.main.clickElement(that.roomsPath); //Apartament cu 1 odaie
        page.main.clickElement(that.roomsTypePath); //separate

        page.main.setInputTextElement(that.flowPath, '6');
        page.main.setInputTextElement(that.flowsPath, '6');
        page.main.clickElement(that.houseTypePath); //Piatra
        page.main.clickElement(that.buildingTypePath); //Dat în exploatare
        page.main.clickElement(that.buildingPlanPath);  //Individuala
        page.main.setInputTextElement(that.totalAreaPath, '43');
        page.main.setInputTextElement(that.leavingAreaPath, '38');
        page.main.setInputTextElement(that.kitchenAreaPath, '9');
        page.main.setInputTextElement(that.roomHeightPath, '2500');
        page.main.clickElement(that.statePath); //euroreparatie
        page.main.clickElement(that.balconyPath); //1 balcon
        page.main.clickElement(that.bathRoomPath); //1 baie
        page.main.clickElement(that.parkingPath); //deschis

        page.main.clickElement(that.additionalPath);

        var values1 = ['field_363' , 'field_364' , 'field_179' , 'field_181' , 'field_182' , 'field_366' , 'field_183' , 'field_184' , 'field_185'];
        for (var i = 0; i < values1.length; i++) {
            page.main.clickElement(by.css("[for='"+values1[i]+"']"));
        }
        var values2 = [2626 , 2627 , 2628 , 2631 , 2632 , 2630 , 2629];
        for (var i = 0; i < values2.length; i++) {
            page.main.clickElement(by.css("[value='"+values2[i]+"']"));
        }
        page.main.clickElement(that.sectorPath); //centru
        page.main.setInputTextElement(that.streetNamePath, that.streetNameText);
        page.main.setInputTextElement(that.streetNumberPath, that.streetNumberText);

        page.main.setInputTextElement(that.adTitlePath, that.adTitleText);
        page.main.setInputTextElement(that.adDescriptionPath, that.adDescriptionText);

        page.main.addPhoto(that.inputPhotoPath);
        //browser.debugger();
        page.main.scrollElemFinderIntoView(that.continuePath); //scroll
        page.main.clickElement(that.inputPhonePath);
        page.main.clickElement(that.continuePath);
    };

};

module.exports = theMaklerPage;