/*
Please contact the DEDJTR website analyst at webteam@ecodev.vic.gov.au if you need assistance with implementing or customising this code.
For example, the DEDJTR website analyst can assist with customisations to:
~ report on the number of results on a search results page
~ send back a custom value in the trackPageview field, such as the breadcrumb trail or a metadata value, instead of the URL
~ define subdomains or subfolders as external referring sites (for the traffic source reports) and/or outbound sites (for outbound tracking reports)
~ and much more...
IMPORTANT: In order to track websites properly, all websites must have their own profile number.
*/
if (location.hostname.indexOf("assist.business.vic.gov.au") !== -1 || location.hostname.indexOf("businessvic.secure.force.com") !== -1) {
  // do not run 
}
else {
// Run the analytics.js file.
(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,"script","//www.google-analytics.com/analytics.js","gaTracker");
// START: UPDATE AS APPROPRIATE 
if (document.location.hostname.indexOf("secure.diird.vic.gov.au") !== -1 || document.location.hostname.indexOf("uat.business.vic.gov.au") !== -1 || document.location.hostname.indexOf("www-business-vic-gov-au.dsdbi-liv-uat.clients.squiz.net") !== -1 || document.location.hash.indexOf("brendantest") !=-1) {
  // Set profile numbers 
  var WOVGprofileNumber = "UA-000000-0"; // DO NOT MODIFY 
  var DEPTprofileNumber = "UA-000000-0"; // Set Department roll up profile number - if none exists, replace with "UA-000000-0". 
  var SITEprofileNumber = "UA-000000-0"; // Set website's profile number. 
}
else {
  // Set profile numbers 
  var WOVGprofileNumber = "UA-2063136-9"; // DO NOT MODIFY 
  var DEPTprofileNumber = "UA-1687583-29"; // Set Department roll up profile number - if none exists, replace with "UA-000000-0". 
  var SITEprofileNumber = "UA-1687583-1"; // Set website's profile number. 
}
// Set domain name value 
if (document.location.hostname.indexOf("formsite.com") !== -1) {
  var domainName = "formsite.com";
}
else if (document.location.hostname.indexOf("secure.diird.vic.gov.au") !== -1) {
  var domainName = "secure.diird.vic.gov.au";
}
else if (document.location.hostname.indexOf("uat.business.vic.gov.au") !== -1) {
  var domainName = "uat.business.vic.gov.au";
}
else if (document.location.hostname.indexOf("www-business-vic-gov-au.dsdbi-liv-uat.clients.squiz.net") !== -1) {
  var domainName = "www-business-vic-gov-au.dsdbi-liv-uat.clients.squiz.net";
}
else {
  var domainName = "business.vic.gov.au"; // Set website's domain location - do NOT include "www.", unless the site is located ENTIRELY on "www.". Likewise, if the website is located ENTIRELY on a subdomain, insert it, e.g. "subdomain.website.vic.gov.au". 
}
// Set the cookieDomain value 
if (document.location.hostname.indexOf("formsite.com") !== -1) {
  var cookieDomain = "formsite.com";
}
else if (document.location.hostname.indexOf("secure.diird.vic.gov.au") !== -1) {
  var cookieDomain = "secure.diird.vic.gov.au";
}
else if (document.location.hostname.indexOf("uat.business.vic.gov.au") !== -1) {
  var cookieDomain = "uat.business.vic.gov.au";
}
else if (document.location.hostname.indexOf("www-business-vic-gov-au.dsdbi-liv-uat.clients.squiz.net") !== -1) {
  var cookieDomain = "www-business-vic-gov-au.dsdbi-liv-uat.clients.squiz.net";
}
else {
  var cookieDomain = "business.vic.gov.au";
}
// Set tracking code values 
var externalDomainsToAutoLink = ["vic.gov.au", "visitvictoria.com", "formsite.com"];
var site = "business.vic.gov.au"; // Set website's domain location - do NOT include "www.", unless the site is located ENTIRELY on "www.". Likewise, if the website is located ENTIRELY on a subdomain, insert it, e.g. "subdomain.website.vic.gov.au". 
var dept = "dedjtr"; // Set Department achronym/name. You can choose from: dsdbi | deecd | dhs | doj | dot | dpc | dpcd | dpi | dse | dtf | health . If you are not sure which department is appropriate for your website, please contact the DEDJTR website analyst at webteam@ecodev.vic.gov.au 
var siteOnSubFolder = "no"; // Set this to "yes" if the website is located ENTIRELY on a dedicated subfolder, e.g "website.vic.gov.au/subfolder", otherwise, leave as "no". 
var subFolder = "/subfolder"; // Set the subfolder value only if the site is located ENTIRELY on a dedicated subfolder (include the leading forwardslash "/"). 
var errorPageTitle = "page not found"; // Set the page title of 404 error page - MUST be in lowercase. If you don't have a 404 error page or if it can't be tracked, set as "Error page not able to be tracked". 
var archivePageTitle = "page is archived"; // Set the page title of the archive page - MUST be in lowercase. If you don't have an archive page or if it can't be tracked, set as "Archive page not able to be tracked". 
var underConstructionPageTitle = "page under construction: authentication required"; // Set the page title of the archive page - MUST be in lowercase. If you don't have an archive page or if it can't be tracked, set as "Archive page not able to be tracked". 
var searchResultsURL = "/search-results?q="; // Set the URL of the global and portal site search results pages (capitalisation IS important). 
var lslCalculator = "/calculatelongserviceleave"; // The URL of the Long Service Leave Calculator
var eventsViewURL = "/events/view?id="
// NOTE RE PAGEVIEW TRACKING: If there are subdomains and/or subfolders of this domain that you would like to be tracked as Referring Sites in the Traffic Sources report for this website, please contact the DEDJTR website analyst at webteam@ecodev.vic.gov.au 
// Set file types for file download tracking. 
var downloadFileTypes = ["docx", "xlsx", "pptx", "doc", "xls", "ppt", "exe", "zip", "pdf", "xpi", "csv", "js", "txt", "rdf", "wma", "mov", "avi", "wmv", "wav", "mp3", "mp4", "mpg", "pps", "ppt", "swf", "rar", "rtf"];
// NOTE RE CLICK TRACKING: If you would like subdomains and/or subfolders of this website to be tracked as outbound links, or if you would like other domains to be tracked as internal links, please contact the DEDJTR website analyst at webteam@ecodev.vic.gov.au 
// END: UPDATE AS APPROPRIATE 
// YOU SHOULD NOT NEED TO MODIFY ANY OF THE FOLLOWING CODE. IF YOU THINK YOU NEED TO, PLEASE CONTACT THE DEDJTR WEBSITE ANALYST AT WEBTEAM@ECODEV.VIC.GOV.AU FOR ASSISTANCE. 
var referrer = document.referrer;
var docLocHostnamePathSearch = document.location.hostname + document.location.pathname + document.location.search;
var pageTitle = document.title;
var protocol = document.location.protocol;
// Whole of Victorian Government tracker variables 
gaTracker("create", WOVGprofileNumber, {"cookieDomain": cookieDomain, "allowLinker": true, "name": "WOVGTracker"});
gaTracker("WOVGTracker.require", "linker");
gaTracker("WOVGTracker.linker:autoLink", [site, externalDomainsToAutoLink]);
// Department tracker variables 
gaTracker("create", DEPTprofileNumber, {"cookieDomain": cookieDomain, "allowLinker": true, "name": "DEPTTracker"});
gaTracker("DEPTTracker.require", "linker");
gaTracker("DEPTTracker.linker:autoLink", [site, externalDomainsToAutoLink]);
// Website tracker variables 
gaTracker("create", SITEprofileNumber, {"cookieDomain": cookieDomain, "allowLinker": true, "name": "SITETracker"});
gaTracker("SITETracker.require", "linker");
gaTracker("SITETracker.linker:autoLink", [site, externalDomainsToAutoLink]);
if ((pageTitle).toLowerCase().indexOf(errorPageTitle) !== -1) {
  // 404 error page tracking code 
  gaTracker("WOVGTracker.send", "pageview", (dept.toLowerCase() + "/" + site.toLowerCase() + "/" + "404?page=" + document.location.pathname + document.location.search + "&RefURL=" + referrer));
  gaTracker("DEPTTracker.send", "pageview", (site.toLowerCase() + "/" + "404?page=" + document.location.pathname + document.location.search + "&RefURL=" + referrer));
  gaTracker("SITETracker.send", "pageview", ("404?page=" + document.location.pathname + document.location.search + "&RefURL=" + referrer));
}
else if ((pageTitle).toLowerCase().indexOf(archivePageTitle) !== -1) {
  // Archive page tracking code 
  gaTracker("WOVGTracker.send", "pageview", (dept.toLowerCase() + "/" + site.toLowerCase() + "/" + "archived?page=" + document.location.pathname + document.location.search + "&RefURL=" + referrer));
  gaTracker("DEPTTracker.send", "pageview", (site.toLowerCase() + "/" + "archived?page=" + document.location.pathname + document.location.search + "&RefURL=" + referrer));
  gaTracker("SITETracker.send", "pageview", ("archived?page=" + document.location.pathname + document.location.search + "&RefURL=" + referrer));
}
else if ((pageTitle).toLowerCase().indexOf(underConstructionPageTitle) !== -1) {
  // Under construction page tracking code 
  gaTracker("WOVGTracker.send", "pageview", (dept.toLowerCase() + "/" + site.toLowerCase() + "/" + "underconstruction?page=" + document.location.pathname + document.location.search + "&RefURL=" + referrer));
  gaTracker("DEPTTracker.send", "pageview", (site.toLowerCase() + "/" + "underconstruction?page=" + document.location.pathname + document.location.search + "&RefURL=" + referrer));
  gaTracker("SITETracker.send", "pageview", ("underconstruction?page=" + document.location.pathname + document.location.search + "&RefURL=" + referrer));
}
else if (document.URL.indexOf(searchResultsURL) !== -1) {
  // Run in document.ready
}
else if (location.hostname.indexOf("assist.business.vic.gov.au") !== -1 || location.hostname.indexOf("businessvic.secure.force.com") !== -1 || location.hostname.indexOf("m.business.vic.gov.au") !== -1) {
  // Do nothing
}
else if (location.hostname.indexOf("formsite.com") !== -1) {
  // Do nothing
}
else if (document.URL.indexOf(lslCalculator) !== -1) {
  // Do nothing
}
else if (document.URL.indexOf(eventsViewURL) !== -1) {
  // Run in document.ready
}
else {
  // All other pages tracking code 
  gaTracker("WOVGTracker.send", "pageview", (dept + "/" + site + document.location.pathname + document.location.search).toLowerCase());
  gaTracker("DEPTTracker.send", "pageview", (site + document.location.pathname + document.location.search).toLowerCase());
  gaTracker("SITETracker.send", "pageview", (document.location.pathname + document.location.search).toLowerCase());
}
function removeProtocol(str) {
  var a = str;
  a = a.replace(/(https?:\/\/)/gi, "");
  return a;
}
function removeColon(str) {
  var a = str;
  a = a.replace(":", "");
  return a;
}
function removeHTMLTagsAndSpaces(str){
  var a = str;
  a = a.replace(/<.*?>/gi, "");  // Removes HTML tags from LinkText values
  a = a.replace(/^[\s]*|[\s]*$/gi, "");  // Strips out single leading and trailing spaces
  a = a.replace(/[\s]{2,}/gi, "");  // Strips out occurances of multiple spaces anywhere in a value
  return a;
}
function removeUnnecessarySpaces(str){
  var a = str;
  a = a.replace(/^[\s]*|[\s]*$/gi, "");  // Strips out single leading and trailing spaces
  a = a.replace(/[\s]{2,}/gi, "");  // Strips out occurances of multiple spaces anywhere in a value
  return a;
}
function replaceDoubleWithSingleSlash(str) {
  var a = str;
  a = a.replace(/(\/\/)/gi, "/");
  return a;
}
function cleanGrantPortalURLs(str) {
  var a = str;
  a = a.replace(/([\s])/gi, "-");
  a = a.replace(/\u00a0/gi, "-");
  a = a.replace("(page", "/page");
  a = a.replace("-/page", "/page");
  a = a.replace(/[-]{2,}/gi, "-");
  a = a.replace(/[-]$/, "");
  a = a.replace(/[\)]$/, "");
  return a;
}
function editSBSGuideCompletedText(str) {
  var a = str;
  a = a.replace("Thank you for completing ", "");
  return a;
}
function modifyFeedbackId(str) {
  var a = str;
  a = a.replace("-text", "");
  return a;
}
function convertToEstResCountAndRespTime(str){
  var a = str;
  a = a.replace("About ", "&ResultCount=");
  a = a.replace(" results (", "_NumberOfResults&ResultResponseTime=");
  a = a.replace(" seconds)", " seconds_ResponseTimeOfResults");
  return a;
}
// Referral tracking code 
if ((!referrer) && (!typeOfReferrer)) {
  var typeOfReferrer = "no-referrer";
}
var referrerArray = referrer.split("/");
if (referrer && referrerArray[2].indexOf(domainName) !== -1 && (!typeOfReferrer)) {
  var typeOfReferrer = "internal-referrer";
}
if (referrer && (!typeOfReferrer)) {
  var typeOfReferrer = "external-referrer";
}
gaTracker("SITETracker.send", "event", "referraltracking", typeOfReferrer, ("PageTitle=" + pageTitle + "&ReferringUrl=" + removeProtocol(referrer)).toLowerCase(), undefined, {"nonInteraction": 1});
// Detect protocol 
gaTracker("SITETracker.send", "event", "protocoltracking", removeColon(protocol), ("PageTitle=" + pageTitle + "&PageURL=" + protocol + "//" + document.location.hostname + document.location.pathname).toLowerCase(), undefined, {"nonInteraction": 1});
// The following variable is declared due to the jQuery coding requirements of the GEMS Grants Portal 
if (location.hostname.indexOf("assist.business.vic.gov.au") !== -1 || location.hostname.indexOf("businessvic.secure.force.com") !== -1) {
  var jQuery_1_11_3 = jQuery.noConflict(true);
}
else {
  var jQuery_1_11_3 = $;
}
(function ($) {
  /**
   * @function
   * @property {object} jQuery plugin which runs handler function once specified element is inserted into the DOM
   * @param {function} handler A function to execute at the time when the element is inserted
   * @param {bool} shouldRunHandlerOnce Optional: if true, handler is unbound after its first invocation
   * @example $(selector).waitUntilExists(function);
   */
  $.fn.waitUntilExists = function (handler, shouldRunHandlerOnce, isChild) {
    var found = "found";
    var $this = $(this.selector);
    var $elements = $this.not(function () {
      return $(this).data(found);
    }).each(handler).data(found, true);
    if (!isChild) {
      (window.waitUntilExists_Intervals = window.waitUntilExists_Intervals || {})[this.selector] = window.setInterval(function () {
        $this.waitUntilExists(handler, shouldRunHandlerOnce, true);
      }, 500);
    } else if (shouldRunHandlerOnce && $elements.length) {
      window.clearInterval(window.waitUntilExists_Intervals[this.selector]);
    }
    return $this;
  }
}(jQuery_1_11_3));
jQuery_1_11_3(document).ready(function ($) {
  if (location.hostname.indexOf("assist.business.vic.gov.au") !== -1 || location.hostname.indexOf("businessvic.secure.force.com") !== -1) {
    var grantNameAndStepOrginal = $("h1").text() ? $("h1").text() : "no-grant-name-and-step";
    var grantNameAndStepClean = cleanGrantPortalURLs(grantNameAndStepOrginal);
    // BV Grants Portal tracking code
    gaTracker("WOVGTracker.send", "pageview", (dept + "/" + site + "/grants-and-assistance" + "/" + grantNameAndStepClean).toLowerCase());
    gaTracker("DEPTTracker.send", "pageview", (site + "/grants-and-assistance" + "/" + grantNameAndStepClean).toLowerCase());
    gaTracker("SITETracker.send", "pageview", ("grants-and-assistance" + "/" + grantNameAndStepClean).toLowerCase());
  }
  if (location.hostname.indexOf("formsite.com") !== -1) {
    var stepByStepGuidePageTitle = document.title ? document.title : "completed";
    var stepByStepGuideH1 = $("h1").text() ? $("h1").text() : "no-heading";
    if (stepByStepGuidePageTitle == stepByStepGuideH1) {
      // Step By Step Guide introduction page tracking code
      gaTracker("WOVGTracker.send", "pageview", (dept + "/" + site + "/step-by-step-guides" + "/" + stepByStepGuidePageTitle + "/introduction").toLowerCase());
      gaTracker("DEPTTracker.send", "pageview", (site + "/step-by-step-guides" + "/" + stepByStepGuidePageTitle + "/introduction").toLowerCase());
      gaTracker("SITETracker.send", "pageview", ("step-by-step-guides" + "/" + stepByStepGuidePageTitle + "/introduction").toLowerCase());
    }
    else if (stepByStepGuidePageTitle.indexOf("completed") !== -1) {
      var stepByStepGuideCompletedText = $("td").text() ? $("td").text() : "no-title";
      // Step By Step Guide completed page tracking code
      gaTracker("WOVGTracker.send", "pageview", (dept + "/" + site + "/step-by-step-guides" + "/" + editSBSGuideCompletedText(stepByStepGuideCompletedText) + "/completed").toLowerCase());
      gaTracker("DEPTTracker.send", "pageview", (site + "/step-by-step-guides" + "/" + editSBSGuideCompletedText(stepByStepGuideCompletedText) + "/completed").toLowerCase());
      gaTracker("SITETracker.send", "pageview", ("step-by-step-guides" + "/" + editSBSGuideCompletedText(stepByStepGuideCompletedText) + "/completed").toLowerCase());
    }
    else {
      // Step By Step Guide other pages tracking code
      gaTracker("WOVGTracker.send", "pageview", (dept + "/" + site + "/step-by-step-guides" + "/" + stepByStepGuidePageTitle + "/" + stepByStepGuideH1).toLowerCase());
      gaTracker("DEPTTracker.send", "pageview", (site + "/step-by-step-guides" + "/" + stepByStepGuidePageTitle + "/" + stepByStepGuideH1).toLowerCase());
      gaTracker("SITETracker.send", "pageview", ("step-by-step-guides" + "/" + stepByStepGuidePageTitle + "/" + stepByStepGuideH1).toLowerCase());
    }
  }
  else if (document.URL.indexOf(searchResultsURL) !== -1) {
    $(".gsc-results-wrapper-visible").waitUntilExists(function () {
      var resultInfo = $(".gsc-result-info").text() ? $(".gsc-result-info").text() : "no-results";
      if (resultInfo == "no-results") {
        // Search results page tracking code - no results
        gaTracker("WOVGTracker.send", "pageview", (dept + "/" + site + document.location.pathname + document.location.search + "&resultcount=0_numberofresults&resultresponsetime=n-a_responsetimeofresults&resultspagenumber=1").toLowerCase());
        gaTracker("DEPTTracker.send", "pageview", (site + document.location.pathname + document.location.search + "&resultcount=0_numberofresults&resultresponsetime=n-a_responsetimeofresults&resultspagenumber=1").toLowerCase());
        gaTracker("SITETracker.send", "pageview", (document.location.pathname + document.location.search + "&resultcount=0_numberofresults&resultresponsetime=n-a_responsetimeofresults&resultspagenumber=1").toLowerCase());
      }
    });
    var a = $(".gsc-results > .gsc-webResult > .gs-webResult > .gsc-url-top").text();
    setInterval(function() {
      if (a != $(".gsc-results > .gsc-webResult > .gs-webResult > .gsc-url-top").text()) {
        var currentPage = $(".gsc-cursor-current-page").text() ? $(".gsc-cursor-current-page").text() : "no-current-page-value-found";
        var resultInfo = $(".gsc-result-info").text() ? $(".gsc-result-info").text() : "no-results";
        if (resultInfo != "no-results") {
          // Search results page tracking code - results
          gaTracker("WOVGTracker.send", "pageview", (dept + "/" + site + document.location.pathname + document.location.search + convertToEstResCountAndRespTime(resultInfo) + "&ResultsPageNumber=" + currentPage).toLowerCase());
          gaTracker("DEPTTracker.send", "pageview", (site + document.location.pathname + document.location.search + convertToEstResCountAndRespTime(resultInfo) + "&ResultsPageNumber=" + currentPage).toLowerCase());
          gaTracker("SITETracker.send", "pageview", (document.location.pathname + document.location.search + convertToEstResCountAndRespTime(resultInfo) + "&ResultsPageNumber=" + currentPage).toLowerCase());
        }
      }
      a = $(".gsc-results > .gsc-webResult > .gs-webResult > .gsc-url-top").text(); // updates the var to store the current text
    }, 1000); // define your interval time, every 1 second in this case
  }
  if (document.URL.indexOf(lslCalculator) !== -1){
    var lslCalcH1 = $("h1").text() ? $("h1").text() : "no-h1-found";
    if (lslCalcH1 == "Victorian Long Service Leave Calculator - Results") {
      var lslCalcURLappend = "/results";
    }
    else {
      var lslCalcURLappend = "";
    }
    // LSL Calculator tracking code
    gaTracker("WOVGTracker.send", "pageview", (dept + "/" + site + document.location.pathname + lslCalcURLappend).toLowerCase());
    gaTracker("DEPTTracker.send", "pageview", (site + document.location.pathname + lslCalcURLappend).toLowerCase());
    gaTracker("SITETracker.send", "pageview", (document.location.pathname + lslCalcURLappend).toLowerCase());
  }
  if (document.URL.indexOf(eventsViewURL) !== -1){
    var eventTitle = $("h1").text() ? $("h1").text() : "no-event-title-found";
    var eventProduct = $("#event-product > .button-tag").text() ? $("#event-product > .button-tag").text() : "no-event-product-found";
	var eventHost = $("#event-host > h5").text() ? $("#event-host > h5").text() : "no-event-host-found";
    // Events View tracking code
    gaTracker("WOVGTracker.send", "pageview", (dept + "/" + site + document.location.pathname + document.location.search + "&event-product=" + eventProduct + "&event-title=" + eventTitle + "&event-host=" + eventHost).toLowerCase());
    gaTracker("DEPTTracker.send", "pageview", (site + document.location.pathname + document.location.search + "&event-product=" + eventProduct + "&event-title=" + eventTitle + "&event-host=" + eventHost).toLowerCase());
    gaTracker("SITETracker.send", "pageview", (document.location.pathname + document.location.search + "&event-product=" + eventProduct + "&event-title=" + eventTitle + "&event-host=" + eventHost).toLowerCase());
  }
  // Clicktracking (detailed and summary) for all internal, outbound, file download, telephone and mailto links 
  $("a[href]").each(function () {
    var a = $(this);
    var hrefOriginal = a.attr("href");
    if ((hrefOriginal.indexOf("http") !== -1) || (hrefOriginal.indexOf("mailto:") !== -1) || (hrefOriginal.indexOf("tel:") !== -1)) {
      var href = hrefOriginal;
    }
    else {
      var hrefOriginalPrependHostnameAndSlash = document.location.hostname + "/" + hrefOriginal;
      var href = replaceDoubleWithSingleSlash(hrefOriginalPrependHostnameAndSlash);
    }
    var hrefArray = href.split(".").reverse();
    var downloadFileExtension = hrefArray[0];
    var linkTextOrImageTitleAltTag = a.text() ? ("&LinkText=" + a.text()) : "&ImageTitleTag=" + a.children("img").attr("title") + "&ImageAltTag=" + a.children("img").attr("alt");
    var hrefWithNoProtocol = href.replace(/(https?:\/\/)/gi, "");
    if (href.match(/mailto:/gi) && (!typeOfClick)) {
      var typeOfClick = "mailto-link";
    }
    if (href.match(/tel:/gi) && (!typeOfClick)) {
      var typeOfClick = "telephone-link";
    }
    if ($.inArray(downloadFileExtension, downloadFileTypes) !== -1 && (!typeOfClick)) {
      var typeOfClick = "download-link";
    }
    if (href.match(/http/gi) && href.indexOf(domainName) === -1 && $.inArray(downloadFileExtension, downloadFileTypes) === -1  && (!typeOfClick)) {
      var typeOfClick = "outbound-link";
    }
    if (hrefOriginal.match(/^http(s)?:\/\/(www\.)?(facebook|twitter|addthis)\.com/i) && (!typeOfClick)) {
      var typeOfClick = "outbound-link";
    }
    if (href && (!typeOfClick)) {
      var typeOfClick = "internal-link";
    }
    // Track centre and right mouse button clicks on all a href links 
    a.bind("mouseup", function(mouseButtonBind){
      // Get the closest div id value for the element that was clicked 
      var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
      // Get the closest div class value for the element that was clicked 
        closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
      // Get the id value for the element that was clicked 
      var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
      // Get the class value for the element that was clicked 
        elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
      if (mouseButtonBind.which == 2 || mouseButtonBind.which == 3) {
        gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + removeHTMLTagsAndSpaces(linkTextOrImageTitleAltTag) + "&LinkHREF=" + hrefWithNoProtocol + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
        gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("LinkHREF=" + hrefWithNoProtocol).toLowerCase());
      }
    });
    // Track left mouse button clicks and enter keypress on all a href links 
    a.click(function(mouseButtonClick){
      // Get the closest div id value for the element that was clicked 
      var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
      // Get the closest div class value for the element that was clicked 
        closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
      // Get the id value for the element that was clicked 
      var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
      // Get the class value for the element that was clicked 
        elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
      if (mouseButtonClick.which == 1) {
        gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + removeHTMLTagsAndSpaces(linkTextOrImageTitleAltTag) + "&LinkHREF=" + hrefWithNoProtocol + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
        gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("LinkHREF=" + hrefWithNoProtocol).toLowerCase());
      }
    });
  });
  // Clicktracking for breadcrumb trail on homepage - work-around for the BV responsive design non-standard menu implementation 
  $(".module-breadcrumbs li").waitUntilExists(function () {
    if ($(this).attr("data-level") != "0") {
      $(this).find("a[href]").each(function () {
        var a = $(this);
        var href = a.attr("href");
        var linkText = a.find("span").text();
        var hrefWithNoProtocol = href.replace(/(https?:\/\/)/gi, "");
        var typeOfClick = "internal-link";
        // Track centre and right mouse button clicks on all a href links 
        a.bind("mouseup", function(mouseButton){
          // Get the closest div id value for the element that was clicked 
          var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
          // Get the closest div class value for the element that was clicked 
            closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
          // Get the id value for the element that was clicked 
          var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
          // Get the class value for the element that was clicked 
            elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
          if (mouseButton.which == 2 || mouseButton.which == 3) {
            gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&LinkText=" + removeHTMLTagsAndSpaces(linkText) + "&LinkHREF=" + hrefWithNoProtocol + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
            gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("LinkHREF=" + hrefWithNoProtocol).toLowerCase());
          }
        });
        // Track left mouse button clicks and enter keypress on all a href links 
        a.click(function(){
          // Get the closest div id value for the element that was clicked 
          var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
          // Get the closest div class value for the element that was clicked 
            closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
          // Get the id value for the element that was clicked 
          var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
          // Get the class value for the element that was clicked 
            elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
          gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&LinkText=" + removeHTMLTagsAndSpaces(linkText) + "&LinkHREF=" + hrefWithNoProtocol + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
          gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("LinkHREF=" + hrefWithNoProtocol).toLowerCase());
        });
      });
    }
  });
  // Clicktracking for "level back" feature in main menu - work-around for the BV responsive design non-standard menu implementation 
  $("div.level_back").on("click",function () {
    var a = $(this);
    var dataID = a.attr("data-id") ? a.attr("data-id") : "redundant-click";
    var typeOfClick = "internal-link";
    // Track left mouse button clicks and enter keypress on all a href links 
    // Get the closest div id value for the element that was clicked 
    var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
    // Get the closest div class value for the element that was clicked 
      closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
    // Get the id value for the element that was clicked 
    var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
    // Get the class value for the element that was clicked 
      elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
    gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&LinkText=back" + "&BackToLevel=" + dataID + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
    gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("BackToLevel=" + dataID).toLowerCase());
  });
  // Clicktracking for 2nd and subsequent level menu items - work-around for the BV responsive design non-standard menu implementation 
  $(".nav-wrap ul").waitUntilExists(function () {
    if ($(this).attr("data-level") != "1") {
      $(this).find("a[href]").each(function () {
        var a = $(this);
        var href = a.attr("href");
        var linkText = a.text();
        var hrefWithNoProtocol = href.replace(/(https?:\/\/)/gi, "");
        var typeOfClick = "internal-link";
        // Track centre and right mouse button clicks on all a href links 
        a.bind("mouseup", function(mouseButton){
          // Get the closest div id value for the element that was clicked 
          var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
          // Get the closest div class value for the element that was clicked 
            closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
          // Get the id value for the element that was clicked 
          var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
          // Get the class value for the element that was clicked 
            elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
          if (mouseButton.which == 2 || mouseButton.which == 3) {
            gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&LinkText=" + removeHTMLTagsAndSpaces(linkText) + "&LinkHREF=" + hrefWithNoProtocol + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
            gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("LinkHREF=" + hrefWithNoProtocol).toLowerCase());
          }
        });
        // Track left mouse button clicks and enter keypress on all a href links 
        a.click(function(){
          // Get the closest div id value for the element that was clicked 
          var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
          // Get the closest div class value for the element that was clicked 
            closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
          // Get the id value for the element that was clicked 
          var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
          // Get the class value for the element that was clicked 
            elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
          gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&LinkText=" + removeHTMLTagsAndSpaces(linkText) + "&LinkHREF=" + hrefWithNoProtocol + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
          gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("LinkHREF=" + hrefWithNoProtocol).toLowerCase());
        });
      });
    }
  });
  // Clicktracking for site search results page - search results links - track left mouse button clicks and enter keypress 
  $("#search_results").on("click", "a", function () {
    var a = $(this);
    var href = a.attr("data-ctorig");
    var linkText = a.text();
    var hrefWithNoProtocol = href.replace(/(https?:\/\/)/gi, "");
    var typeOfClick = "internal-link";
    // Get the closest div id value for the element that was clicked
    var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
    // Get the closest div class value for the element that was clicked
      closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
    // Get the id value for the element that was clicked 
    var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
    // Get the class value for the element that was clicked 
      elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
    gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&LinkText=" + removeHTMLTagsAndSpaces(linkText) + "&LinkHREF=" + hrefWithNoProtocol + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
    gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("LinkHREF=" + hrefWithNoProtocol).toLowerCase());
  });
  // Clicktracking for site search results page - search results links - track centre and right mouse button clicks 
  $("#search_results").on("mouseup", "a", function (mouseButton) {
    var a = $(this);
    var href = a.attr("data-ctorig");
    var linkText = a.text();
    var hrefWithNoProtocol = href.replace(/(https?:\/\/)/gi, "");
    var typeOfClick = "internal-link";
    // Get the closest div id value for the element that was clicked
    var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
    // Get the closest div class value for the element that was clicked
      closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
    // Get the id value for the element that was clicked 
    var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
    // Get the class value for the element that was clicked 
      elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
    if (mouseButton.which == 2 || mouseButton.which == 3) {
      gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&LinkText=" + removeHTMLTagsAndSpaces(linkText) + "&LinkHREF=" + hrefWithNoProtocol + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
      gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("LinkHREF=" + hrefWithNoProtocol).toLowerCase());
    }     
  });
  // Search results page - clicktracking for more search results links at end of results (1 2 3 4 5 etc) and "fake" referrer tracking for the subsequent results pages 
  $("#search_results").on("click", "div.gsc-cursor-page", function () {
    var a = $(this);
    var href = document.URL + "&ResultsPageNumber=" + a.text();
    var linkText = a.text();
    var hrefWithNoProtocol = href.replace(/(https?:\/\/)/gi, "");
    var typeOfClick = "internal-link";
    var currentPage = $(".gsc-cursor-current-page").text() ? $(".gsc-cursor-current-page").text() : "no-current-page-value-found";
    var resultInfo = $(".gsc-result-info").text() ? $(".gsc-result-info").text() : "no-results";
    // Track left mouse button clicks and enter keypress on all a href links 
    // Get the closest div id value for the element that was clicked 
    var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
    // Get the closest div class value for the element that was clicked 
      closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
    // Get the id value for the element that was clicked 
    var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
    // Get the class value for the element that was clicked 
      elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
    gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&LinkText=" + removeHTMLTagsAndSpaces(linkText) + "&LinkHREF=" + hrefWithNoProtocol + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
    gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("LinkHREF=" + hrefWithNoProtocol).toLowerCase());
    gaTracker("SITETracker.send", "event", "referraltracking", "internal-referrer", ("PageTitle=" + pageTitle + "&ReferringUrl=" + docLocHostnamePathSearch + "&ResultsPageNumber=" + currentPage).toLowerCase(), undefined, {"nonInteraction": 1});
  });
  // Clicktracking (detailed and summary) for image maps 
  $("area").each(function () {
    var a = $(this);
    var typeOfClick = "image-map";
    var mapAreaTitle = a.attr("title") ? a.attr("title") : "no-title-found";
    var mapAreaAlt = a.attr("alt") ? a.attr("alt") : "no-alt-found";
    var mapAreaHrefOriginal = a.attr("href") ? a.attr("href") : "no-href-found";
    if (mapAreaHrefOriginal.indexOf("http") !== -1) {
      var mapAreaHref = mapAreaHrefOriginal;
    }
    else {
      var mapAreaHrefOriginalPrependHostnameAndSlash = location.hostname + "/" + mapAreaHrefOriginal;
      var mapAreaHref = replaceDoubleWithSingleSlash(mapAreaHrefOriginalPrependHostnameAndSlash);
    }
    // Track centre and right mouse button clicks on on areas within image maps 
    a.bind("mouseup", function(mouseButton){
      // Get the closest div id value for the element that was clicked 
      var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
      // Get the closest div class value for the element that was clicked 
        closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
      // Get the id value for the element that was clicked 
      var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
      // Get the class value for the element that was clicked 
        elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
      if (mouseButton.which == 2 || mouseButton.which == 3) {
        gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&MapAreaTitle=" + mapAreaTitle + "&MapAreaAlt=" + mapAreaAlt + "&MapAreaHref=" + mapAreaHref + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
        gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("MapAreaHref=" + mapAreaHref).toLowerCase());
      }
    });
    // Track left mouse button clicks on areas within image maps 
    a.click(function(){
      // Get the closest div id value for the element that was clicked 
      var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
      // Get the closest div class value for the element that was clicked 
        closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
      // Get the id value for the element that was clicked 
      var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
      // Get the class value for the element that was clicked 
        elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
      gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&MapAreaTitle=" + mapAreaTitle + "&MapAreaAlt=" + mapAreaAlt + "&MapAreaHref=" + mapAreaHref + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
      gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("MapAreaHref=" + mapAreaHref).toLowerCase());
    });
  });
  // Clicktracking (detailed and summary) for calendar - date selection (EMS calendar specific selector)
  $("td[name=dcdate]").each(function () {
    var a = $(this);
    var typeOfClick = "calendar-date";
    var day =  a.text() ? a.text() : "no-day-found";
    var monthYear = $(".trcenterstyle label[onclick]").text() ? $(".trcenterstyle label[onclick]").text() : "no-month-year-found";
    var date = day + " " + monthYear;
    // Track left mouse button clicks on dates in calendar
    a.click(function(){
      // Get the closest div id value for the element that was clicked
      var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
      // Get the closest div class value for the element that was clicked
        closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
      // Get the id value for the element that was clicked 
      var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
      // Get the class value for the element that was clicked 
        elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
      gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&SelectEventByDate=" + date + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
      gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("SelectEventByDate=" + date).toLowerCase());
    });
  });
  // Clicktracking (detailed and summary) for calendar - month selection (EMS calendar specific selector)
  $(".trcenterstyle label[onclick]").each(function () {
    var a = $(this);
    var typeOfClick = "calendar-date";
    var date = a.text() ? a.text() : "no-month-year-found";
    // Track left mouse button clicks on dates in calendar
    a.click(function(){
      // Get the closest div id value for the element that was clicked
      var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
      // Get the closest div class value for the element that was clicked
        closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
      // Get the id value for the element that was clicked 
      var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
      // Get the class value for the element that was clicked 
        elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
      gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&SelectEventByDate=" + date + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
      gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("SelectEventByDate=" + date).toLowerCase());
    });
  });
  // Formtracking (detailed and summary) for "taking the focus off" form input fields (excluding submit, button, radio, checkbox and style="display:none;")   
  $("input,textarea,select").focusout(function () {
    var a = $(this);
    if (a.is("input")) {
      var typeOfElement = a.attr("type") ? a.attr("type") : "no-input-type-found";
    }
    else if (a.is("textarea")) {
      var typeOfElement = "textarea";
    }
    else if (a.is("select")) {
      var typeOfElement = "select";
    }
    else {
      var typeOfElement = "unknown-type-of-element";
    }
    if (a.val().length > 0) {
      var formFieldExitStatus = "populated";
    }
    else {
      var formFieldExitStatus = "not-populated";
    }
    if (a.closest("form").attr("id")) {
      var formIdOrName = a.closest("form").attr("id");
    }
    else if (a.closest("form").attr("name")) {
      var formIdOrName = a.closest("form").attr("name");
    }
    else {
      var formIdOrName = "no-id-or-name-found";
    }
    if (a.attr("id")) {
      var formInputIdOrName = a.attr("id");
    }
    else if (a.attr("name")) {
      var formInputIdOrName = a.attr("name");
    }
    else {
      var formInputIdOrName = "no-id-or-name-found";
    }
    // Get the closest div id value for the element that was clicked 
    var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
    // Get the closest div class value for the element that was clicked 
      closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
    // Get the id value for the element that was clicked 
    var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
    // Get the class value for the element that was clicked 
      elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
    var styleOfInput = a.attr("style") ? a.attr("style") : "no-input-style-found";
    var typeOfInput = a.attr("type") ? a.attr("type") : "no-input-type-found";
    if (typeOfInput == "submit") {
      // Do nothing
    }
    else if (typeOfInput == "button") {
      // Do nothing
    }
    else if ((formIdOrName == "&Form=search-box-global") && (formInputIdOrName == "&Input=no-id-or-name-found")) {
      // Do nothing
    }
    else if ((typeOfInput == "radio") || (typeOfInput == "checkbox")) {
      // Do nothing
    }
    else if (styleOfInput.indexOf("display: none;") !== -1) {
      // Do nothing
    }
    else {
      if ((typeOfInput == "image") && (a.attr("onclick"))) {
        if ((typeOfInput == "image") && (a.attr("onclick").indexOf("javascript:") !== -1)) {
          var typeOfClick = "form-submit-link";
          var formAction = a.attr("onclick");
          gaTracker("SITETracker.send", "event", "formtracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&Form=" + formIdOrName + "&FormAction=" + formAction + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
          gaTracker("SITETracker.send", "event", "formtracking-summary", typeOfClick, ("&FormAction=" + formAction).toLowerCase());
          gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&Form=" + formIdOrName + "&FormAction=" + formAction + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
          gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("&FormAction=" + formAction).toLowerCase());
        }
      }
      else {
        var typeOfClick = "form-field-exit";
        gaTracker("SITETracker.send", "event", "formtracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&Form=" + formIdOrName + "&TypeOfInput=" + typeOfElement + "&Input=" + formInputIdOrName + "&FormField=" + formFieldExitStatus + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
        gaTracker("SITETracker.send", "event", "formtracking-summary", typeOfClick, ("Input=" + formInputIdOrName).toLowerCase());
      }
    }
  });
  // Formtracking (detailed and summary) for "changing/taking the focus off" radio and checkbox form input fields 
  $(":radio, :checkbox").change(function () {
    var a = $(this);
    var typeOfInput = a.attr("type") ? a.attr("type") : "no-input-type-found";
    var checkedState = this.checked ? "checked" : "unchecked";
    var radioButtonValue = a.attr("value") ? a.attr("value") : "no-radio-button-value-found";
    var radioButtonText = a.text() ? a.text() : "no-radio-button-text-found";
    if (typeOfInput == "radio") {
      var formFieldExitStatus = checkedState + "&RadioButtonValue=" + radioButtonValue + "&RadioButtonText=" + radioButtonText;
    }
    else if (typeOfInput == "checkbox"){
      var formFieldExitStatus = checkedState;
    }
    if (a.closest("form").attr("id")) {
      var formIdOrName = a.closest("form").attr("id");
    }
    else if (a.closest("form").attr("name")) {
      var formIdOrName = a.closest("form").attr("name");
    }
    else {
      var formIdOrName = "no-id-or-name-found";
    }
    if (a.attr("id")) {
      var formInputIdOrName = a.attr("id");
    }
    else if (a.attr("name")) {
      var formInputIdOrName = a.attr("name");
    }
    else {
      var formInputIdOrName = "no-id-or-name-found";
    }
    // Get the closest div id value for the element that was clicked 
    var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
    // Get the closest div class value for the element that was clicked 
      closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
    // Get the id value for the element that was clicked 
    var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
    // Get the class value for the element that was clicked 
      elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
    if (checkedState == "checked") {
      var typeOfClick = "form-field-checked";
    }
    else if (checkedState == "unchecked") {
      var typeOfClick = "form-field-unchecked";
    }
    var typeOfInput = a.attr("type") ? a.attr("type") : "no-input-type-found";
    gaTracker("SITETracker.send", "event", "formtracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&Form=" + formIdOrName + "&TypeOfInput=" + typeOfInput + "&Input=" + formInputIdOrName + "&FormField=" + formFieldExitStatus + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
    gaTracker("SITETracker.send", "event", "formtracking-summary", typeOfClick, ("Input=" + formInputIdOrName).toLowerCase());
  });
  // Form and click tracking (detailed and summary) for form submit buttons: input type = submit 
  $("form").submit(function () {
    var a = $(this);
    var typeOfClick = "form-submit-link";
    if (a.closest("form").attr("id")) {
      var formIdOrName = a.closest("form").attr("id");
    }
    else if (a.closest("form").attr("name")) {
      var formIdOrName = a.closest("form").attr("name");
    }
    else {
      var formIdOrName = "no-id-or-name-found";
    }
    var formAction = a.closest("form").attr("action") ? a.closest("form").attr("action") : "/no-form-action-found";
    if (formAction.match(/^http(s)?/gi)) {
      var formActionFinal = formAction;
    }
    else {
      var formActionPrependHostnameAndSlash = location.hostname + "/" + formAction;
      var formActionFinal = replaceDoubleWithSingleSlash(formActionPrependHostnameAndSlash);
    }
    // Get the closest div id value for the element that was clicked
    var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
    // Get the closest div class value for the element that was clicked
      closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
    // Get the id value for the element that was clicked 
    var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
    // Get the class value for the element that was clicked 
      elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
    gaTracker("SITETracker.send", "event", "formtracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&Form=" + formIdOrName + "&FormAction=" + removeProtocol(formActionFinal) + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
    gaTracker("SITETracker.send", "event", "formtracking-summary", typeOfClick, ("FormAction=" + removeProtocol(formActionFinal)).toLowerCase());
    gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&Form=" + formIdOrName + "&FormAction=" + removeProtocol(formActionFinal) + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
    gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("FormAction=" + removeProtocol(formActionFinal)).toLowerCase());
  });
  // Form and click tracking (detailed and summary) for form submit buttons: input type = button AND tag name = button
  $(":button").each(function () {
    var a = $(this);
    var onClickAttrValue = a.attr("onclick") ? a.attr("onclick") : "no-button-onclick-attribute-found";
    var forceToStringOnClick = onClickAttrValue.toString();
    var onClickAttrValueValue = a.attr("value") ? a.attr("value") : "no-button-value-attribute-found";
    var forceToStringValue = onClickAttrValueValue.toString();
    if (a.closest("form").attr("id")) {
      var formIdOrName = a.closest("form").attr("id");
    }
    else if (a.closest("form").attr("name")) {
      var formIdOrName = a.closest("form").attr("name");
    }
    else {
      var formIdOrName = "no-id-or-name-found";
    }
    var formAction = a.closest("form").attr("action") ? a.closest("form").attr("action") : "/no-form-action-found";
    if (formAction.indexOf("http") == (formAction.length-4)) {
      var formActionFinal = formAction;
    }
    else {
      var formActionPrependHostnameAndSlash = location.hostname + "/" + formAction;
      var formActionFinal = replaceDoubleWithSingleSlash(formActionPrependHostnameAndSlash);
    }
    var inputButtonValue = a.attr("value") ? a.attr("value") : "no-button-value-found";
    a.click(function () {
      // Get the closest div id value for the element that was clicked
      var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
      // Get the closest div class value for the element that was clicked
        closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
      // Get the id value for the element that was clicked 
      var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
      // Get the class value for the element that was clicked 
        elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
      if ((forceToStringOnClick.indexOf("{") !== -1) || (forceToStringOnClick.indexOf("changeMap();") !== -1) || (forceToStringOnClick.indexOf("search('featured');") !== -1) || (forceToStringOnClick.indexOf("clearAll();") !== -1) || (forceToStringOnClick.indexOf("selectOneWeekFromToday();") !== -1) || (forceToStringOnClick.indexOf("Fortnight();") !== -1) || (forceToStringOnClick.indexOf("Month();") !== -1) || (forceToStringOnClick.indexOf("ClearDate();") !== -1) || (forceToStringValue.indexOf("clear") !== -1) || (forceToStringValue.indexOf("Clear") !== -1) || (forceToStringValue.indexOf("CLEAR") !== -1) || (forceToStringValue.indexOf("reset") !== -1) || (forceToStringValue.indexOf("Reset") !== -1) || (forceToStringValue.indexOf("RESET") !== -1)) {
        var typeOfClick = "internal-link";
        gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&Form=" + formIdOrName + "&ButtonValue=" + inputButtonValue + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
        gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("ButtonValue=" + inputButtonValue).toLowerCase());
      }
      else if ($(this).hasClass("menu-toggle") || $(this).hasClass("search-toggle")) {
        var typeOfClick = "internal-link";
        var linkText = "&LinkText=" + a.find("span").text();
        gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + removeHTMLTagsAndSpaces(linkText) + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
        gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, (removeHTMLTagsAndSpaces(linkText)).toLowerCase());
      }
      else {
        var typeOfClick = "form-submit-link";
        gaTracker("SITETracker.send", "event", "formtracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&Form=" + formIdOrName + "&FormAction=" + removeProtocol(formActionFinal) + "&ButtonValue=" + inputButtonValue + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
        gaTracker("SITETracker.send", "event", "formtracking-summary", typeOfClick, ("FormAction=" + removeProtocol(formActionFinal)).toLowerCase());
        gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&Form=" + formIdOrName + "&FormAction=" + removeProtocol(formActionFinal) + "&ButtonValue=" + inputButtonValue + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
        gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("FormAction=" + removeProtocol(formActionFinal)).toLowerCase());
      }
    });
  });
  // Track page helpful comments
  $(".toggle-form input.submit").on("click",function () {
    var a = $(this);
    var typeOfClick = "form-submit-link";
    var feedbackValue = a.closest("div[id]").attr("data-option") ? a.closest("div[id]").attr("data-option") : "no-feedback-value-found";
    var commentText = a.parent().parent(".toggle-box").find("textarea").val() ? a.parent().parent(".toggle-box").find("textarea").val() : "no-comment-text-entered";
    // Get the closest div id value for the element that was clicked
    var closestDivId = a.closest("div[id]").attr("id") ? a.closest("div[id]").attr("id") : "no-div-id-found",
    // Get the closest div class value for the element that was clicked
      closestDivClass = a.closest("div[class]").attr("class") ? a.closest("div[class]").attr("class") : "no-div-class-found";
    // Get the id value for the element that was clicked 
    var elementId = a.attr("id") ? a.attr("id") : "no-element-id-found",
    // Get the class value for the element that was clicked 
      elementClass = a.attr("class") ? a.attr("class") : "no-element-class-found";
    gaTracker("SITETracker.send", "event", "formtracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&Form=" + "feedback" + "&FormAction=" + "/no-form-action-found" + "&SubmitValue=" + feedbackValue + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
    gaTracker("SITETracker.send", "event", "formtracking-summary", typeOfClick, ("FormAction=" + "/no-form-action-found").toLowerCase());
    gaTracker("SITETracker.send", "event", "clicktracking", typeOfClick, ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch + "&Page-Helpful=" + feedbackValue + "&Comment=" + commentText + "&LinkDIVid=" + closestDivId + "&LinkDIVclass=" + closestDivClass + "&LinkElementId=" + elementId + "&LinkElementClass=" + elementClass).toLowerCase());
    gaTracker("SITETracker.send", "event", "clicktracking-summary", typeOfClick, ("Page-Helpful=" + feedbackValue + "&Comment=" + commentText).toLowerCase());
  });
  // Track scroll depth
  if ($("#_content, .form_table").length) {
    jQuery(function($) {
      // Default time delay before checking location
      var callBackTime = 100;
      // # px before tracking a reader
      var readerLocation = 100;
      // Set some flags for tracking & execution
      var timer = 0;
      var scroller = false;
      var startContent = false;
      var middleContent = false;
      var endContent = false;
      var reachedBackToTop = false;
      var didComplete = false;
      // Set some time variables to calculate reading time
      var startTime = new Date();
      var beginning = startTime.getTime();
      var totalTime = 0;
      // Track the article load
      gaTracker("SITETracker.send", "event", "reading", "page-loaded", ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch).toLowerCase(), undefined, {"nonInteraction": 1});
      // Check the location and track user
      function trackLocation() {
        bottom = $(window).height() + $(window).scrollTop();
        height = $(document).height();
        // If user starts to scroll send an event
        if (bottom > readerLocation && !scroller) {
          currentTime = new Date();
          scrollStart = currentTime.getTime();
          timeToScroll = Math.round((scrollStart - beginning) / 1000);
          gaTracker("SITETracker.send", "event", "reading", "start-scrolling", ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch).toLowerCase(), timeToScroll, {"nonInteraction": 1});
          scroller = true;
        }
        // If user has hit the top of the content send an event
        if (bottom >= (100 + Math.floor($("#_content, .form_table").offset().top)) && !startContent) {
          currentTime = new Date();
          contentScrollStart = currentTime.getTime();
          timeToContentStart = Math.round((contentScrollStart - scrollStart) / 1000);
          gaTracker("SITETracker.send", "event", "reading", "content-top", ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch).toLowerCase(), timeToContentStart, {"nonInteraction": 1});
          startContent = true;
        }
        // If user has hit the middle of the content send an event
        if (bottom >= (Math.floor($("#_content, .form_table").offset().top) + $("#_content, .form_table").innerHeight()/2) && !middleContent) {
          currentTime = new Date();
          contentScrollMiddle = currentTime.getTime();
          timeToContentMiddle = Math.round((contentScrollMiddle - scrollStart) / 1000);
          gaTracker("SITETracker.send", "event", "reading", "content-middle", ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch).toLowerCase(), timeToContentMiddle, {"nonInteraction": 1});
          middleContent = true;
        }
        // If user has hit the bottom of the content send an event
        if (bottom >= ($("#_content, .form_table").innerHeight() + Math.floor($("#_content, .form_table").offset().top)) && !endContent) {
          currentTime = new Date();
          contentScrollEnd = currentTime.getTime();
          timeToContentEnd = Math.round((contentScrollEnd - scrollStart) / 1000);
          gaTracker("SITETracker.send", "event", "reading", "content-bottom", ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch).toLowerCase(), timeToContentEnd, {"nonInteraction": 1});
          endContent = true;
        }
        // If user has reached back to top send an event
        if (bottom >= (Math.floor($(".module-to-top").offset().top)) && !reachedBackToTop) {
          currentTime = new Date();
          backToTopScroll = currentTime.getTime();
          timeToBackToTop = Math.round((backToTopScroll - scrollStart) / 1000);
          gaTracker("SITETracker.send", "event", "reading", "reached-back-to-top", ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch).toLowerCase(), timeToBackToTop, {"nonInteraction": 1});
          reachedBackToTop = true;
        }
        // If user has hit the bottom of the page send an event
        if (bottom >= height && !didComplete) {
          currentTime = new Date();
          end = currentTime.getTime();
          totalTime = Math.round((end - scrollStart) / 1000);
          gaTracker("SITETracker.send", "event", "reading", "page-bottom", ("PageTitle=" + pageTitle + "&PageURL=" + docLocHostnamePathSearch).toLowerCase(), totalTime, {"nonInteraction": 1});
          didComplete = true;
        }
      }
      // Track the scrolling and track location
      $(window).scroll(function() {
        if (timer) {
          clearTimeout(timer);
        }
        // Use a buffer so we don't call trackLocation too often.
        timer = setTimeout(trackLocation, callBackTime);
      });
    });
  }
  /*
  // Insert floodlight tag on Big Marketing page
  if (document.location.pathname === "/events-workshops-and-mentoring/victorias-small-business-festival/feature-events/small-business-big-marketing") {
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').prepend('<iframe src="https://2798013.fls.doubleclick.net/activityi;src=2798013;type=Small0;cat=BigMa0;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
  }
  // Insert floodlight tag on Festival Competition page
  if (document.location.pathname === "/events-workshops-and-mentoring/victorias-small-business-festival/connect") {
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').prepend('<iframe src="https://2798013.fls.doubleclick.net/activityi;src=2798013;type=Small0;cat=Festi0;ord=' + a + '?" width"1" height="1" frameborder="0" style="display:none"></iframe>');
  }
  // Insert floodlight tag on Festival Home page
  if (document.location.pathname === "/events-workshops-and-mentoring/victorias-small-business-festival") {
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $('body').prepend('<iframe src="https://2798013.fls.doubleclick.net/activityi;src=2798013;type=Small0;cat=Homep0;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
  */
  // Insert floodlight tag on Festival Home page - 2015
  if (document.location.pathname === "/events-workshops-and-mentoring/victorias-small-business-festival") {
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    $("body").prepend("<iframe src='https://2798013.fls.doubleclick.net/activityi;src=2798013;type=small00;cat=small0;ord=1;num=" + a + "?' width'1' height='1' frameborder='0' style='display:none'></iframe>");
  }
});
}