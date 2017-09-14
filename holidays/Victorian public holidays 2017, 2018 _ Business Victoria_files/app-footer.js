var templates = {
	"template-table-wrap" :
		'<div class="table-responsive">' +
			'<div class="scroller">{{table}}</div>' +
			'<div class="label">Scroll for more content</div>' +
		'</div>',

	"template-content-toggle" :
		'<div class="ui-toggle-box {{_class}}">' +
			'<a href="#" role="button" class="toggle-title" title="Click or tap to show or hide the content">' +
				'<{{headerTag}}>' +
					'<div class="inner">{{headerText}}</div>' +
				'</{{headerTag}}>' +
				'<span class="toggle-trigger"></span>' +
			'</a>' +
			'<div class="toggle-content">{{contentHTML}}</div>' +
		'</div>',

	"template-next-default" :
		'<div class="ui-column {{_class}}">' +
			'<div class="title">' +
				'<{{headerTag}}>{{headerText}}</{{headerTag}}>' +
			'</div>' +
			'<div class="content">{{contentHTML}}</div>' +
		'</div>',

	"template-case-study-toggle" :
		'<div class="ui-toggle-box {{_class}}">' +
			'<a href="#" role="button" class="toggle-title" title="Click or tap to show or hide the content">' +
				'<{{headerTag}}>' +
					'<div class="inner">{{headerText}}</div>' +
				'</{{headerTag}}>' +
				'<span class="toggle-trigger"></span>' +
			'</a>' +
			'<div class="toggle-content">{{contentHTML}}<div class="image">{{img}}</div></div>' +
		'</div>',

	"template-case-study-default" :
		'<div class="ui-default {{_class}}">' +
			'<div class="header"><{{headerTag}}>{{headerText}}</{{headerTag}}></div>' +
			'<div class="content">{{contentHTML}}</div>' +
			'<div class="image">{{img}}</div>' +
		'</div>',

	"template-tabs-tab" :
		'<a href="#{{slug}}" class="{{_class}}">{{headerText}}</a>',

	"template-tabs-pane" :
		'<div id="{{slug}}" class="{{_class}}">{{contentHTML}}</div>',

	"template-tabs-widget" :
		'<nav class="nav">{{tabs}}</nav>' +
		'<div class="content">{{panes}}</div>',

	"template-header-elements" :
		'<button class="menu-toggle" title="Click or tap to show or hide the site menu"><span>Menu</span></button>' +
		'<button class="search-toggle" title="Click or tap to show or hide the search bar"><span>Open search form</span></button>' +
		'<div class="search-wrapper">' +
			'<form id="_search" class="search-form">' +
				'<label for="q">Search</label>' +
				'<input class="search" aria-labelledby="Enter your search terms" title="Enter your search terms" id="q" type="text" name="q" placeholder="Search" value="" />' +
				'<input class="submit" type="submit" value="Search">' +
			'</form>' +
		'</div>',

	"template-header-overlay" :
		'<a class="overlay" role="button" title="Click or tap this area to hide the menu">Click or tap this area to hide the menu</a>',

	"template-fieldset-button" :
		'<p><button type="submit">Send feedback</button><a class="toggle-cancel" href="#">Cancel</a></p>',

	"template-page-header" :
		'<div class="background" style="background-image:url({{src}})"></div>' +
		'<img src="{{src}}" alt="{{alt}}"/>',

	// For this to work in IE8 make sure:
	// - All inputs are self-closing ie. end in "/>" not just ">"
	// - All elements have been closed
	"template-newsletters" :
		'<div class="column">' +
			'<div class="header">' +
				'<h3>Subscribe to newsletters</h3>' +
				'<a class="close" href="#" title="Closes the newsletter dialogue" role="button">Close</a>' +
			'</div>' +
			'<div class="small-business active">' +
				'<a class="toggle" href="#" role="button">Small Business Victoria update <span class="toggle-trigger" title="Toggles subscription form">&nbsp;</span></a>' +
				'<form name="subscribe" id="subscribe" action="http://enews.business.vic.gov.au/link/id/zzzz52eee565d0f73425/page.html" method="post">' +
					'<input type="checkbox" name="name_email_halt" style="display: none;" value="yes" />' +
					'<p>Tips, tools, news and events to help you run and grow your business &ndash; delivered fortnightly.</p>' +
					'<fieldset>' +
						'<legend>Sign up for Business Victoria update</legend>' +
						'<input type="hidden" name="parent_id" value="zzzz52eee514ea5cb943" />' +
						'<label class="terms" for="bus_terms" title="Check this box to indicate you have read our privacy statement (this field is required)">' +
							'<input required type="checkbox" name="terms" id="bus_terms" />' +
							'<span>I have read the <a title="Link opens in a new window" target="_blank" href="{{home}}/privacy/detailed-privacy-statement#IntNav12">privacy statement</a> <em>(Required)</em></span>' +
							'<a target="_blank" class="accessible-hide" href="http://www.business.vic.gov.au/privacy/detailed-privacy-statement#IntNav12">privacy statement</a>' +
						'</label>' +
						'<label for="bus_email" class="hidden" title="Enter an email address for newsletters (this field is required)">Email <em>(Required)</em></label>' +
						'<input type="email" name="st[EMAIL]" id="bus_email" value="" placeholder="Your email address" required />' +
						'<input type="submit" id="submit-SBVUpdate" value="Subscribe" name="submit" />' +
						'<p class="error">Please make sure that all fields are filled.</p>' +
					'</fieldset>' +
				'</form>' +
			'</div>' +
			'<div class="export">' +
				'<a class="toggle" href="#" role="button">Export newsletter <span class="toggle-trigger" title="Toggles subscription form">&nbsp;</span></a>' +
				'<form action="https://ap1.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" id="export_update_subscription" name="export_update_subscription" >' +
					'<p>Keep informed about the export industry and receive notifications of Trade Missions and other export opportunities.</p>' +
					'<fieldset>' +
						'<legend>Sign up for Business Victoria&rsquo;s export newsletter</legend>' +
						'<input type="hidden" name="oid" value="00D9000000012Mt" />' +
						'<input type="hidden" name="retURL" value="http://www.business.vic.gov.au/newsletter/export-victoria-newsletter-subscription-confirmation" />' +
						'<input type="hidden" name="00N90000000mfYg" value="Export Updates" />' +
						'<input type="hidden" name="lead_source" value="Website" />' +
						'<input type="hidden" name="recordType" value="012900000000sGL" />' +
						'<input type="hidden" name="00N90000000mfYW" value="Export Enquiry" />' +
						'<input id="last_name" name="last_name" type="hidden" value="Export Newsletter" />' +
						'<input id="company" name="company" type="hidden" value="(not provided)" />' +
						'<input id="phone" name="phone" type="hidden" value="+61399999999" />' +
						'<label class="terms" for="exp_terms">' +
							'<input required type="checkbox" id="exp_terms" name="terms" />' +
							'<span>I have read the <a title="Link opens in a new window" target="_blank" href="{{home}}/privacy/detailed-privacy-statement#IntNav12">privacy statement</a> <em>(Required)</em></span>' +
						'</label>' +
						'<label for="exp_email" class="hidden">Email <em>(Required)</em></label>' +
						'<input id="exp_email" name="email" placeholder="Your email address" type="email" required />' +
						'<input type="submit" id="submit" name="submit" value="Subscribe" />' +
						'<p class="error">Please make sure that all fields are filled.</p>' +
					'</fieldset>' +
				'</form>' +
			'</div>' +
			'<div class="ict">' +
				'<a class="toggle" href="#" role="button">ICT newsletter <span class="toggle-trigger" title="Toggles subscription form">&nbsp;</span></a>' +
				'<form id="subForm-ict" action="http://dbiweb.createsend.com/t/r/s/yhtiujy/" method="post" name="subForm-ict">' +
					'<p>Updates on ICT trade and business development activities and initiatives for Victorian ICT companies.</p>' +
					'<fieldset>' +
						'<legend>Sign up for Business Victoria&rsquo;s ICT Newsletter.</legend>' +
						'<input name="cm-name" id="name-ict" type="hidden" value="ICT Newsletter" />' +
						'<label class="terms" for="ict_terms">' +
							'<input required type="checkbox" name="terms" id="ict_terms" /> ' +
							'<span>I have read the <a title="Link opens in a new window" target="_blank" href="{{home}}/privacy/detailed-privacy-statement#IntNav12">privacy statement</a> <em>(Required)</em></span>' +
						'</label>' +
						'<label for="yhtiujy-yhtiujy" class="hidden">Email <em>(Required)</em></label>' +
						'<input id="yhtiujy-yhtiujy" name="cm-yhtiujy-yhtiujy" type="email" placeholder="Your email address" required />' +
						'<input type="submit" id="submit-ict" value="Subscribe" name="submit" />' +
						'<p class="error">Please make sure that all fields are filled.</p>' +
					'</fieldset>' +
				'</form>' +
			'</div>' +
			'<div class="design-industry">' +
				'<a class="toggle" href="#" role="button">Design industry updates <span class="toggle-trigger" title="Toggles subscription form">&nbsp;</span></a>' +
				'<form id="subForm-design" action="http://dbiweb.createsend.com/t/r/s/wujkuh/" method="post" name="subForm-design">' +
					'<p>News, events and updates that promote the value of design-driven innovation in small to medium businesses.</p>' +
					'<fieldset>' +
						'<legend>Sign up for Business Victoria&rsquo;s Design Industry Updates</legend>' +
						'<input name="cm-name" id="name-design" type="hidden" value="Design Industry Updates" />' +
						'<label class="terms" for="des_terms">' +
							'<input required type="checkbox" name="terms" id="des_terms" />' +
							'<span>I have read the <a title="Link opens in a new window" target="_blank" href="{{home}}/privacy/detailed-privacy-statement#IntNav12">privacy statement</a> <em>(Required)</em></span>' +
						'</label>' +
						'<label for="wujkuh-wujkuh" class="hidden">Email <em>(Required)</em></label>' +
						'<input id="wujkuh-wujkuh" name="cm-wujkuh-wujkuh" type="email" placeholder="Your email address" required />' +
						'<input type="submit" id="submit-design" value="Subscribe" name="submit" />' +
						'<p class="error">Please make sure that all fields are filled.</p>' +
					'</fieldset>' +
				'</form>' +
			'</div>' +
			'<div class="design-small-business">' +
				'<a class="toggle" role="button" href="#">Small Business Festival Victoria News <span class="toggle-trigger" title="Toggles subscription form">&nbsp;</span></a>' +
				'<form id="small-bus-form" action="http://vic.us5.list-manage1.com/subscribe/post?u=c4fab18fc74ced9acacb99cd0&amp;id=abdaa84b03" method="post" name="small-bus-form">' +
					'<p>Get an inside look into the festival and discover new ideas, trends and stories to inspire and amuse.</p>' +
					'<fieldset>' +
						'<legend>Sign up for Small Business Festival Victoria News</legend>' +
						'<label class="terms" for="sbf_terms">' +
							'<input required type="checkbox" name="terms" id="sbf_terms" />' +
							'<span>I have read the <a title="Link opens in a new window" target="_blank" href="{{home}}/privacy/detailed-privacy-statement#IntNav12">privacy statement</a> <em>(Required)</em></span>' +
						'</label>' +
						'<label for="fieldFirstName" class="hidden">First Name <em>(Required)</em></label>' +
						'<input id="fieldFirstName" type="text" value="" name="FNAME" class="required" placeholder="Your first name" required /><p class="errorFirstName"></p>' +
						'<label for="fieldPostCode" class="hidden">Postcode <em>(Required)</em></label>' +
						'<input id="fieldPostCode" type="text" value="" name="PCODE" class="required" placeholder="Your postcode" required /><p class="errorPostCode"></p>' +
						'<label for="fieldEmail" class="hidden">Email <em>(Required)</em></label>' +
						'<input id="fieldEmail" name="EMAIL" type="email" placeholder="Your email address" required />' +
						'<input style="position: absolute; left: -5000px;" type="text" name="b_c4fab18fc74ced9acacb99cd0_abdaa84b03" value="">' +
						'<input type="submit" id="submit_sbf" value="Subscribe" name="submit" />' +
						'<p class="error">Please make sure that all fields are filled.</p>' +
					'</fieldset>' +
				'</form>' +
			'</div>' +
		'</div>',

	"template-feedback" :
		'<div id="_feedback">' +
			'<form method="GET" novalidate="novalidate">' +
				'<ul>{{items}}</ul>' +
			'</form>' +
			'<div class="confirm">Thank you, your feedback is valuable to us.</div>' +
		'</div>',

	"template-feedback-item" :
		'<li>' +
			'<div id="_fieldset-{{option}}" class="toggle-form" data-option="{{option}}">' +
				'<a href="#_feedback-{{option}}" class="toggle-handle">' +
					'<span>{{option}}</span>' +
				'</a>' +
				'<div class="toggle-box">' +
					'<p><label for="{{option}}-text">Any comments? (optional)</label></p>' +
					'<p><textarea id="{{option}}-text" name="{{option}}-text"></textarea></p>' +
					'<p><input class="submit" type="submit" value="Send feedback"><a class="cancel" href="#">Cancel</a>' +
				'</div>' +
			'</div>' +
		'<li>',

	"template-sitemap" :
		'<div class="ui-sitemap"><ul>{{contentHTML}}</ul></div>',
	"template-event-preview":
		'<div class="content">'+
			'<div class="quick-view__overview">' +
				'<h3>{{Title}}</h3>' +
				'<p>{{ShortDescription}}</p>' +
			'</div>' +
			'<div class="quick-view__event-details is-visible">' +
				'<h5 style="{{HideLocation}}">Location</h5>' +
				'<p>{{Address}}</p>' +
				'<p>{{Contacts}}</p>' +
			'</div>' +
			'<div class="quick-view__event-booking is-visible">' +
				'<h5>Make a Booking</h5>' +
				'<div class="booking-actions">' +
						'<a target="_blank" href="{{BookingUrl}}" class="button booking" role="button" style="{{HideBooking}}">Book Now</a>' +
						'<div class="event-date">{{Date}}</div>' +
						'<div class="event-price {{Free}}">{{Price}}</div>' +
						'<div class="event-status nearly-sold-out">{{Status}}</div>' +
				'</div>	' +
			'</div>'+
		'</div>',
		"template-event-recent":
		'<li class="event-history-item">'+
			'<h4><a href="http://www.business.vic.gov.au/events/view/{{Event_ID__c}}">{{Name}}</a></h4>'+
			'<p>{{Short_Description__c}}</p>'+
			'<div class="event-date">{{Date}}</div>'+
			'<div class="event-location">{{Address}}</div>'+
		'</li>',
		"template-event-related":
		'<div class="event-related-item">'+
			'<h5><a href="http://www.business.vic.gov.au/events/view/{{Event_ID__c}}">{{Name}}</a></h5>'+
			'<p class="event-host">{{Host}}</p>'+
			'<p>{{Short_Description__c}}</p>'+
			'<div class="event-date">{{Date}}</div>'+
			'<div class="event-price {{Free}}">{{Price}}</div>'+
			'<div class="event-location">{{Address}}</div>'+
		'</div>',
		"template-event-featured":
			'<div class="events-featured-item">'+
				'<a class="listing-title" href="http://www.business.vic.gov.au/events/view/{{Event_ID__c}}" title="{{Name}}">'+
					'<h3>{{Name}}</h3>'+
				'</a>'+
				'<p class="event-host">{{Host}}</p>'+
				'<div class="event-item-details">'+
					'<div class="event-date">{{Date}}</div>'+
					'<div class="event-price {{Free}}">{{Price}}</div>'+
					'<div class="event-location-details">{{Address}}</div>'+
				'</div>'+
			'</div>',
		"template-event-host":
			'<div class="host-info" id="event-host">'+
				'<div class="logo" style="{{HideImage}}"> '+
					'<a href="#"><img width="100"  src="{{Logo_URL__c}}" alt="{{Name}}"></a>'+
				'</div>'+
				'<h5>{{Name}}</h5>'+
				'<p>{{Description__c}}</p>'+
			'</div>',
		"template-event-feed":
		'<li>'+
			'<a href="http://www.business.vic.gov.au/events/view/{{Event_ID__c}}">{{Name}}</a>'+
			'<span class="event-date">{{Date}}</span>,'+
			'<span class="event-price {{Free}}">{{Price}}</span>'+
			'<span class="event-location-details">{{Address}}</span>'+
        '</li>'
};


	/*  "template-table-wrap" :
		'<div class="table-responsive">' +
			'<div>{{table}}</div>' +
			'<div class="label">Open in <a class="new-window" href="#">new window</a> or scroll for more content</div>' +
		'</div>',*/

var filematches = {

	// Word
	"doc"  : "word",
	"docx" : "word",

	// PDF
	"pdf" : "pdf",

	// Excell
	"xls"  : "spreadsheet",
	"xlr"  : "spreadsheet",
	"xlsx"  : "spreadsheet",
	"xlst" : "spreadsheet",
	"csv"  : "spreadsheet",

	// Text
	"txt" : "text",
	"rtf" : "text",
	"log" : "text",
	"msg" : "text",
	"odt" : "text",
	"pages" : "text",
	"tex" : "text",
	"wpd" : "text",
	"wps" : "text",

	// Vector
	"ai" : "vector",
	"eps" : "vector",
	"ps" : "vector",
	"svg" : "vector",

	// Powerpoint
	"pps"  : "powerpoint",
	"ppt"  : "powerpoint",
	"pptx" : "powerpoint",

	// Media
	"aif" : "media",
	"iff" : "media",
	"m3u" : "media",
	"m4a" : "media",
	"mid" : "media",
	"mp3" : "media",
	"mpa" : "media",
	"ra"  : "media",
	"wav" : "media",
	"wma" : "media",
	"3g2" : "media",
	"3gp" : "media",
	"asf" : "media",
	"asx" : "media",
	"avi" : "media",
	"flv" : "media",
	"m4v" : "media",
	"mov" : "media",
	"mp4" : "media",
	"mpg" : "media",
	"rm"  : "media",
	"srt" : "media",
	"swf" : "media",
	"vob" : "media",
	"wmv" : "media",

	// Images
	"bmp"  : "image",
	"dds"  : "image",
	"gif"  : "image",
	"jpg"  : "image",
	"jpeg"  : "image",
	"png"  : "image",
	"psd"  : "image",
	"pspimage" : "image",
	"tga"  : "image",
	"thm"  : "image",
	"tif"  : "image",
	"tiff" : "image",
	"yuv"  : "image",
	"pct"  : "image",

	// Default
	"" : "default"

}

var Utils = {
	/**
	 * Convert em to pixels
	 * @param em
	 * @returns {number} pixels
	 */
	emToPx: function (em) {
		return em * 16;
	},
	convertToSlug: function (text) {
		return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
	},
	slideTab : function(active, target, parent, _class){
		var duration = 500;
		if (active) {
			target.slideUp(duration, function () {
				parent.removeClass(_class);
			});
		}
		else {
			parent.addClass(_class);
			target.slideDown(duration, function () {});
		}
	},
	toggleState : function (state) {
		var states = 'state-initial state-menu';
		$('body').removeClass(states).addClass('state-' + state);
	},
	returnState : function () {
		return $('body').hasClass('state-initial') ? 'initial' : 'menu';
	},
	mediaQuery : function (min, max) {
		var mq = 'only screen and (';
		if (min > 0) {
			mq += 'min-width: ' + min + 'px';
		}
		if (min > 0 && max > 0) {
			mq += ' and ';
		}
		if (max > 0) {
			mq += 'max-width: ' + max + 'px';
		}
		mq += ')';
		return mq;
	}
};


/**
 * Design breakpoints
 */
var Breakpoint = {
	none: 60,
	xsmall: Utils.emToPx(30),
	small: Utils.emToPx(37.5),
	medium: Utils.emToPx(50),
	large: Utils.emToPx(60),
	xlarge: Utils.emToPx(70),
	xxlarge: Utils.emToPx(96)
};

/**
 * Device properties
 */
var Device = {
	// screen.width is max screen size, not window size
	small: window.screen.width <= Breakpoint.small,
	medium: window.screen.width <= Breakpoint.medium,
	large: window.screen.width <= Breakpoint.large,
	xlarge: window.screen.width <= Breakpoint.xlarge,
	xxlarge: window.screen.width <= Breakpoint.xxlarge
};

/**
 * MatchMedia vars
 */
var MM = {
	none: 'only screen and (min-width: ' + Breakpoint.none + 'px)',
	small: 'only screen and (min-width: ' + Breakpoint.small + 'px)',
	medium: 'only screen and (min-width: ' + Breakpoint.medium + 'px)',
	large: 'only screen and (min-width: ' + Breakpoint.large + 'px)',
	xlarge: 'only screen and (min-width: ' + Breakpoint.xlarge + 'px)',
	xxlarge: 'only screen and (min-width: ' + Breakpoint.xxlarge + 'px)'
};

/**
 * URLs
 */

var InternalURLs = {
	0 : "business.vic.gov.au",
	1 : "localhost",
	2 : "diird.vic.gov.au",
	3 : 'mailto:',
	4 : 'callto:',
	5 : './?a=', // Local assets
	6 : '../', // Relative
	7 : 'uat2.secure.dsdbi.vic.gov.au',
	8 : 'www.facebook.com/share',
	9 : 'twitter.com/home?status',
	10 : 'www.linkedin.com/shareArticle'
};

/**
 * Templating class
 * @param id {string}
 * @constructor
 */
var Template = function (id) {
	//get the template's html and remove comments,
	//such as those obscuring script tags
	// this.html = document.getElementById(id).innerHTML.replace(/<!--|-->/g, '');
	this.html = templates[id];
	// console.log(templates[id]);
};

/**
 * Render the template with given data
 * @param data {object}
 * @returns html {string}
 */
Template.prototype.render = function (data) {
	var html = this.html;
	//replace properties in template with data
	for (var key in data) {
		html = html.replace(new RegExp('\\{\\{' + key + '\\}\\}', 'g'), data[key] || '');
	}
	//make sure no scripts execute again by commenting them out
	//  html = html.replace(/<script/g,'<!-- ').replace(/script>/g,' -->');
	return html;
};

/**
 * Get the raw template post init
 * @returns {XML|string|void|*}
 */
Template.prototype.raw = function () {
	return this.html;
};


// var XXremoveText = function(selector) {
//	 var element = $(selector),
//		 text = element.html();
//	 element.html('<span style="position:fixed;top:-999em;">' + text + '</div>');
// }



/**
 * jQuery functions
 */
(function($){

	/**
	 * Check that selector has size before passing to callback
	 * @param callback {function}
	 */
	$.fn.present = function (callback) {
		if (this.length) {
			callback($(this), $);
		}
	};

	$.fn.backgroundImage = function (url) {
		this.css('background-image', 'url(' + url + ')');
	};

	$.fn.removeText = function (element) {
		// var html = this.html();
		// this.html('<span style="position:fixed;top:-999em;">' + html + '</span>');
	};

	$.fn.markExternal = function (exclusionPattern, _class) {

		// Init array
		exclusions = new Array;

		// If exclusions are a string
		if (exclusionPattern instanceof String) {
			exclusions = split(exclusionPattern);
		}

		$.each(exclusionPattern, function (index, value) {
			exclusions.push('a[href*="' + value + '"]');
		});

		// Add internal links to array
		exclusions.push('a[href^="#"]');
		exclusions.push('a[href^="?"]');
		exclusions.push('a[href^="/?"]');

		// console.log(exclusions);

		// Flatten array
		flatExclusions = exclusions.join(', ');




		// Apply
		$(this).find("a").not(flatExclusions).each( function (index, element){
			var el = $(element);
			if(typeof el.attr('href') != 'undefined' &&  el.find("img").length == 0 && el.attr('href').length > 0 ) {
				el.addClass(_class).attr({
					title : 'External link (opens in same window)',
					rel : 'external'
				});
				if (el.find('accessible-external').length == 0) {
					el.append(' <span class="accessible-external accessible-hide">External link (opens in same window)</span>');
				}
			}
		});
	};

	$.fn.markInternal = function (exclusionPattern, _class) {

		// Init array
		exclusions = new Array;

		// If exclusions are a string
		if (exclusionPattern instanceof String) {
			exclusions = split(exclusionPattern);
		}

		$.each(exclusionPattern, function (index, value) {
			exclusions.push('a[href*="' + value + '"]');
		});

		// Add internal links to array
		exclusions.push('a[href^="#"]');
		exclusions.push('a[href^="?"]');
		exclusions.push('a[href^="/?"]');

		// console.log(exclusions);

		// Flatten array
		flatExclusions = exclusions.join(', ');


		//console.log(flatExclusions);

		// Apply
		$(this).find(flatExclusions).each( function (index, element){
			var el = $(element);
			if(typeof el.attr('target') != 'undefined' &&  el.attr('target') == "_blank") {
				//console.log(el.text() + "- is internal");
				$(this).addClass(_class).attr({
					title : 'Link opens in a new window'
				});
			}
		});
	};

	$.fn.appendAttr = function(attrName, suffix) {
		this.attr(attrName, function(i, val) {
			return val + suffix;
		});
    	return this;
	};

	$.fn.equalHeights = function(px) {
		var parent = $(this).parent();
		var currentTallest = 0;
		parent.children().each(function(i){
			var h = $(this).height();
			if (h > currentTallest) {
				currentTallest = h;
			}
		});
		parent.children().css({'height': currentTallest});
		return this;
	};

})(jQuery);

/*  Made by Thick                                                                       */
/*  @author Kirill Kliavin kirill@studiothick.com

*/


//for testing


if( window.location.href.indexOf("no-image") !== -1){
    document.getElementById("viewport-wrap").className += " has-no-image";
}

var navLevel = 0;
var sideLevel = 0;

var navWidth = 0;
var sideWidth = 0;


var curHeight = 0;
var curTop = 0;
var navTop = 0;
var windowHeight = 0;

var level_back =  $('.level_back_main');


 var arrow  = level_back.find(".level_back_arrow");

 var viewport_wrap = $('.viewport-wrap');

jQuery(document).ready(function ($) {


$(window).smartresize(function(){
    rearenge();

});

function isTouchDevice() { return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);}

if (isTouchDevice()) {
    $('body').addClass('touch');
} else {
    $('body').addClass('no-touch');
}

function rearenge(){
   // console.log("rearenge");
     Device = {
        // screen.width is max screen size, not window size
        small:  $(window).width() <= Breakpoint.small,
        medium: $(window).width()  <= Breakpoint.medium,
        large: $(window).width()  <= Breakpoint.large,
        xlarge: $(window).width()  <= Breakpoint.xlarge,
        xxlarge: $(window).width()  <= Breakpoint.xxlarge
    };
    if(Device.medium){
        navWidth = $(".home-navigation").width();

    }else{
        navWidth = $(".home-navigation").width()/2;
    }
    sideWidth = $(".side-navigation").width();
    $(".home-navigation ul").width(navWidth);
    $(".side-navigation ul").width(sideWidth);

    if(navLevel == 0 && !Device.medium)
        position($(".home-navigation .nav-wrap"),1, false);
    else
    position($(".home-navigation .nav-wrap"), navLevel, false);
    position($(".side-navigation .nav-wrap"), sideLevel, true);
    if(viewport_wrap.length != 0){
        curTop = parseInt(viewport_wrap.offset().top || 0);
        navTop  = viewport_wrap.find('.home-navigation .nav-wrap').offset().top || 0;
        windowHeight  = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

  

   
   // console.log( "Nav top:" + curTop);
   // console.log( "Window height: " + windowHeight);

     viewportHeight();

    fadeBanner(navLevel);
}


function getParent(id){
    var parentID = 0;
    for (var key in hierarchy) {
        var pos = hierarchy[key].indexOf(id);
        if(pos != -1){
            parentID = parseInt(key);
        }
    }
    return parentID;

}
function showPrevious(id){


    var parentID = getParent(id);

   if(parentID){
       // showItem(parentID, $(".home-navigation .nav-wrap"));
        //$(".home-navigation .navigation_item[data-id='"+parentID+"'']").trigger("click");
        showPrevious(parentID);
    }
    showItem(id, $(".home-navigation .nav-wrap"));
}

if(window.location.hash.length>0 && $("body.section-home").length > 0){
     var curID = parseInt(window.location.hash.substr(1,window.location.hash.length-1));
      showPrevious(curID);
      $.event.trigger("breadcrumbsUpdated");
}


function hide(container, curLevel, isSide)
{

    var curList  = container.find("ul[data-level='" + curLevel +  "']");
    var off = 1;
    if((isSide && curLevel <= sideLevel))
        off++;

	for(var i = 0; i < 10; i++) {// hide all with higher level
		container.find("ul[data-level='" + (curLevel + i) + "'] a.selected").removeClass("selected");
		container.find("ul[data-level='" + (curLevel + i +off) + "']").remove();
        if(!isSide)
            $(".module-breadcrumbs ul li[data-level='" + (curLevel + i) + "']").remove();

	}
}
function position(container, curLevel, isSide){
   // container.find(".level_back").attr("data-level", curLevel-1);

   if(!container.length)
        return;

	var offset =0;

	var curWidth = container.find("ul").width();
    if(!isSide && !Device.medium){
            curLevel--;
	}


    offset = curWidth * (curLevel) * (-1);
    container.width(curWidth*(curLevel+3));
    if($("body").hasClass("lt-ie9"))
	   container.css("left", offset +"px");
    else
        container.css("transform", "translate(" + offset +"px,0)");

	if(!isSide)
		container.find("div.level_back").width(offset*(-1));
}

var isLegacy = $('.lt-ie9').length > 0;
var isSuperLegacy = $('.lt-ie8').length > 0;
var isNoTransforms = $('.no-csstransforms').length > 0;

function viewportHeight() {

    // console.log("viewportHeight");
    if (!isSuperLegacy) {
          enquire.register( Utils.mediaQuery(Breakpoint.medium), {
             match : function() {
                curHeight = $('.home-navigation').outerHeight();

                 positionBack();

             }
         });

        enquire.register( Utils.mediaQuery(Breakpoint.large), {
            match : function() {


               // console.log( "Nav height:" +curHeight);
                if (isLegacy) {
                    centerBanner()
                   viewport_wrap.animate({
                        'height': curHeight
                    }, 300, centerBanner);
                } else {
                   viewport_wrap.css('height', curHeight);
                    // set timeout before transition applied to stop safari animating from height auto
                    viewport_wrap.css('transition', 'height 0.35s ease');

                }


                // if (isNoTransforms) {
                //     var winw = $(window).width();
                //     var imgw = $('.home-banner__image').width();

                //     // set centering on banner image
                //     if (winw < imgw) {
                //         var marg = (imgw - winw) / -2;

                //         $('.home-banner__image').css('left', marg);
                //     }
                // }



            },
            unmatch : function() {
                if (isLegacy) {
                    viewport_wrap.stop().css('height', '');
                }
                if (isNoTransforms) {
                    $('.home-banner__image').stop().css('left', '');
                }
                viewport_wrap.css({'height': '', 'transition': 'none'});

            }
        });
    }
}

function positionBack(){
   // console.log("positionBack");
    if( level_back.hasClass('is-visible') && level_back.width() > 0 && viewport_wrap.length != 0){      

        var windowTop = $(window).scrollTop();
       
        if(Math.min(curTop + curHeight,  windowTop + windowHeight)  > (Math.max( curTop, windowTop) + 100)){         
           
            var offset = (Math.min(curTop + curHeight,  windowTop + windowHeight) - Math.max( curTop, windowTop))/2 + (((windowTop - curTop) > 0)?(windowTop - curTop):0);
             // + (((curTop - windowTop):0?(curTop - windowTop):0);
            if (!isNoTransforms) {
                if ($('.lt-ie10').length) {
                    arrow.css("transform", "translate(0," + offset + "px)");
                } else {
                    arrow.css("transform", "translate3d(0," + offset + "px,0)");
                }
            } else {
                arrow.css("margin-top", offset);
            }
        }
    }
}

function centerBanner() {
    if (!isSuperLegacy) {
        enquire.register( Utils.mediaQuery(Breakpoint.large), {
            match : function() {
                if (isNoTransforms) {
                    $('.home-banner__image').stop();

                    var winw = $(window).width();
                    var imgw = $('.home-banner__image').width();

                    // set centering on banner image
                    if (winw < imgw) {
                        var marg = -1 * ((imgw - winw) / 2);
                        $('.home-banner__image').animate({
                            'left': marg
                        }, 200);
                        $('.home-banner__image').css({
                            'right': ''
                        });
                    } else {
                        $('.home-banner__image').animate({
                            'left': 0,
                            'right': 0
                        }, 200);
                    }
                }
            },
            unmatch : function() {
                if (isNoTransforms) {
                    $('.home-banner__image').stop().css('left', '');
                }
            }
        })
    }
}


function fadeBanner(curlvl) {
    if (!isSuperLegacy) {
        enquire.register( Utils.mediaQuery(Breakpoint.large), {
            match : function() {
                 // fade banner
                if (curlvl > 0) {
                    $('.home-banner').addClass('is-faded');
                    $('.home-banner__pad').addClass('is-faded');
                } else {
                    $('.home-banner').removeClass('is-faded');
                    $('.home-banner__pad').removeClass('is-faded');
                }
            },
            unmatch : function() {
                $('.home-banner').removeClass('is-faded');
                $('.home-banner__pad').removeClass('is-faded');
            }
        });

        enquire.register( Utils.mediaQuery(Breakpoint.medium), {
            match : function() {
                if (curlvl > 1) {
                    $('.home-navigation ul').removeClass('is-faded');
                    for (var i = curlvl - 1; i > 0; i--) {
                        $('.home-navigation ul[data-level="' + i + '"]').addClass('is-faded');
                    }
                } else {
                    $('.home-navigation ul[data-level="1"]').removeClass('is-faded');
                }
            },
            unmatch : function() {
                $('.home-navigation ul').removeClass('is-faded');
                for (var i = curlvl - 1; i > 0; i--) {
                    $('.home-navigation ul[data-level="' + i + '"]').addClass('is-faded');
                }
            }
        });
    }
}


function showItem(curID, container){
    var curItem  = container.find(".navigation_item[data-id='"+ curID +"']");

    var isHomeNav = container.parent('.home-navigation').length > 0;

    var curKids = hierarchy[curID];

    if(!curKids || !curKids.length)
        return;

    var isSide = container.parent().hasClass("side-navigation");

    var curLevel = parseInt(curItem.attr("data-level"));
    var curSection = curItem.parent().attr("class");

    position(container, curLevel, isSide);
    var pos = container.offset().top || 0;
   if($(window).scrollTop() > pos){
        setTimeout(function(){
            $('html,body').animate({
                  scrollTop: pos
                }, 500);
        }, 500);
    }

    // show back level toggle
    // desktop
    if (isHomeNav) {
        enquire.register( Utils.mediaQuery(Breakpoint.medium), {
            match : function() {

                if (curLevel > 1) {
                    $('.level_back_main').addClass('is-visible');
                } else {
                    $('.level_back_main').removeClass('is-visible');
                }
            }
        });
        // mobile
        enquire.register(Utils.mediaQuery(0, Breakpoint.medium), {
            match : function() {
                if (curLevel > 0) {
                    $('.level_back_main').addClass('is-visible');
                } else {
                    $('.level_back_main').removeClass('is-visible');
                }
            }
        });
    }
    // fade banner
    if(isHomeNav) {
        fadeBanner(curLevel);
    }

    var delay = 0
    if(isSide && sideLevel >  curLevel)
        delay = 500;

   // setTimeout(function(){
        hide(container, curLevel, isSide);

        curItem.addClass("selected");
        if(history.pushState) {
            history.pushState(null, null, '#' + curID);
        }
        else {
             window.location.hash = curID;
        }


        if(!isSide){
            $(".module-breadcrumbs ul").append("<li data-id='"+curID+"'' data-level='" + curLevel + "'><a href='"+curItem.attr("href")+"'><span itemprop='title'>" + curItem.text() + "</span></a>");
            $.event.trigger("breadcrumbsUpdated");
        }


        if(container.find("ul[data-parent="+curID+"]").length == 0){
            var appendString = "<ul data-parent='"+curID+"' data-level='"+ (curLevel + 1) +"' style='width:"+(isSide?sideWidth:navWidth)+"px;'>";
            var container_name = "side-navigation"
            if(!isSide)
                container_name = "home-navigation";

            appendString+="<li class='level_back "+ curSection+"' data-container='"+container_name+"' data-is-side='"+(isSide?1:0)+"'><a href='#'>"+(isSide?curItem.text():"Back")+"</a></li>";
            curKids.forEach(function(index){
                if(typeof nodes[index] == 'undefined')
                    return;

               var url = (typeof HOME_URL != 'undefined'?HOME_URL:""); 
               //url += (url[url.length-1] != "/" ? "/" : "") + nodes[index].u; 
               url += nodes[index].u;
               
                if(index == 82326 && Device.small)
                   url = "http://m.business.vic.gov.au/mobile/ems/home.do";
                var isFolder = (typeof hierarchy[index] != 'undefined' && typeof hierarchy[index].length != 'undefined' && hierarchy[index].length);
                appendString+= "<li class='"+ curSection +"'><a class='navigation_item "+ (isFolder?"Folder":"") +"' data-level='"+ (curLevel + 1) +"'' data-id='" +index+ "' href='" + url +"'>" + $('<div/>').html(nodes[index].n).text()  + "</a></li>";
            });
            appendString+= "</ul>";
            $(appendString).appendTo(container).addClass("visible");
        }

        $(".level_back").attr("data-id", getParent(curID));

        viewportHeight();

        if(isSide)
            sideLevel = curLevel;
        else
            navLevel = curLevel;

    //}, delay);
}

$(".navigation").on("click", ".Folder", function(e){

    e.preventDefault();
    e.stopPropagation();
    var curItem = $(this);
 	var curID = parseInt(curItem.attr("data-id"));
    var curList = curItem.parent().parent();
    var container = curList.parent();
    showItem(curID, container);
});


$(".navigation").on("click", ".level_back", function(e){
    e.preventDefault();
    e.stopPropagation();

    var curId = parseInt($(this).attr("data-id")) || 0;
    var curContainer = $("." + $(this).attr("data-container") + " .nav-wrap");
    if(curId != 0){
            showItem(curId, curContainer);
            //curContainer.find(".folder[data-id="+curId+"]").trigger("click");
    }
    else{
        $('.home-banner').removeClass('is-faded');
        $('.level_back_main').removeClass('is-visible');
        $('.home-banner__pad').removeClass('is-faded');

        if(history.pushState) {
            history.pushState(null, null, '#');
        }
        else {
            window.location.hash = '#';
        }
        var isSide = $(this).attr("data-is-side") == "1";
        var delay = 0;
        if(isSide || Device.medium)
            delay = 500;
        setTimeout(function(){hide(curContainer, 1, false);}, delay);
        sideLevel = 0;
        navLevel = 0;
        if(Device.medium || isSide)
            position(curContainer, 0, isSide);
        else
            position(curContainer, 1, isSide);
    }
  //  viewportHeight();
});

$(".section-home  .module-breadcrumbs").on("click", "a", function(e){
        e.preventDefault();
        e.stopPropagation();
        var curId = parseInt($(this).parent().attr("data-id")) || 0;

        if(curId != 0){
            showItem(curId,$(".home-navigation .nav-wrap"));
            //$(".home-navigation .navigation_item[data-id="+curId+"]").trigger("click");
        }
        else{
           if(history.pushState) {
                history.pushState(null, null, '#');
            }
            else {
                window.location.hash = '#';
            }
            var delay = 0;
           if( Device.medium)
              delay = 500;
            setTimeout(function(){hide($(".home-navigation .nav-wrap"), 1, false);}, delay);
            sideLevel = 0;
            navLevel = 0;
            if(Device.medium)
                position($(".home-navigation .nav-wrap"), 0, false);
            else
                position($(".home-navigation .nav-wrap"), 1, false);


        }
   // viewportHeight();
});


$("body:not(.section-home)  .module-breadcrumbs").on("click", "a.Folder", function(e){

    var curId = parseInt($(this).attr("data-id")) || 0;
    if(curId){
        e.preventDefault();
        window.location = HOME_URL + "#" +curId;
    }
});

$(".section-home .home-navigation").on("click", ".navigation_item", function(e){
  e.stopPropagation();
});


$("body:not(.section-navigation) .home-navigation").on("click",function(e){
    e.preventDefault();
    $(".home-navigation .level_back").trigger("click");
});
var keyboard = {left: 37, up: 38, right: 39, down: 40, enter: 13,  escape: 27};

$(".section-home .navigation").on("focusin", "a", function(){
    var curList =  $(this).parent().parent();
    var curContainer = curList.parent();
    var lists = curContainer.find("ul")
     if(lists.length > 1 && !curList.is(':last-child')){
            lists.last().find("li:not(.level_back) a").first().focus();


     }
   // console.log($(this).text() + " focused");
});

$(".navigation").on("keydown", "a", function(e) {
    e = e || window.event;
    var key = e.which || e.keyCode;


    var curItem = $(this);

    var curContainer = curItem.parent().parent().parent();

    var isSide = curContainer.parent().hasClass("side-navigation");


    switch(e.which) {
        case keyboard.left: // left
            e.preventDefault(); // prevent the default action (scroll / move caret)
            e.stopPropagation();
            curContainer.find(".level_back").last().trigger("click");
            setTimeout(function(){
                curContainer.find("ul").last().find("li:not(.level_back) a").first().focus();
            },500);
        break;

        case keyboard.right: // right
            if(!curItem.hasClass("Folder") && !curItem.parent().hasClass("level_back")){
                window.location.href = curItem.attr("href");
                 return;
            }

            e.preventDefault(); // prevent the default action (scroll / move caret)
            e.stopPropagation();
            if(!curItem.parent().hasClass("level_back")){
                showItem(parseInt(curItem.attr("data-id"))||0, curContainer);
                setTimeout(function(){
                    curContainer.find("ul").last().find("li:not(.level_back) a").first().focus();
                },500);
            }

        break;

        case keyboard.up: // up
            e.preventDefault(); // prevent the default action (scroll / move caret)
            e.stopPropagation();
            var flag = false;
            if(isSide || Device.medium)
                flag = curItem.parent().is(':first-child');
            else
                flag = curItem.parent().prev().hasClass("level_back");
          if(!flag)
                curItem.parent().prev().find("a").focus();
            else
                curContainer.find("ul").last().find("a").last().focus();
               // console.log(curContainer.offset().top + " : " +  curContainer.height() + " : " + $(window).height());
                var pos = curContainer.offset().top + curContainer.height() - $(window).height() || 0;
                $('html,body').animate({
                      scrollTop: pos
                }, 500);
        break;

        case keyboard.down: // down
            e.preventDefault(); // prevent the default action (scroll / move caret)
            e.stopPropagation();
            if(!curItem.parent().is(':last-child'))
                curItem.parent().next().find("a").focus();
            else{
                if(isSide || Device.medium)
                    curContainer.find("ul").last().find("a").first().focus();
                else
                    curContainer.find("ul").last().find("li:not(.level_back) a").first().focus();
                //console.log($(window).scrollTop() + " : " +  curContainer.offset().top);
                var pos = curContainer.offset().top || 0;
                $('html,body').animate({
                      scrollTop: pos
                }, 500);
            }
        break;

        case keyboard.enter: // enter
            if(!curItem.hasClass("Folder") && !curItem.parent().hasClass("level_back")){
                window.location.href = curItem.attr("href");
                 return;
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
            e.stopPropagation();
            if(curItem.parent().hasClass("level_back")){
                 curContainer.find(".level_back").last().trigger("click");
                setTimeout(function(){
                    curContainer.find("ul").last().find("li:not(.level_back) a").first().focus();
                },500);
            }else{
                showItem(parseInt(curItem.attr("data-id"))||0, curContainer);
                setTimeout(function(){
                    curContainer.find("ul").last().find("li:not(.level_back) a").first().focus();
                },500);
            }
        break;

        case keyboard.escape: // escape
            e.preventDefault(); // prevent the default action (scroll / move caret)
            e.stopPropagation();
            if(curContainer.parent().hasClass("side-navigation"))
               // $('.overlay').trigger("click");
                Utils.toggleState('initial');
            else{
                curContainer.find(".level_back").last().trigger("click");
                setTimeout(function(){
                    curContainer.find("ul").last().find("li:not(.level_back) a").first().focus();
                },500);
            }
        break;

        default: return; // exit this handler for other keys
    }

});

rearenge();

if(viewport_wrap.length != 0){
    enquire.register( Utils.mediaQuery(Breakpoint.medium), {
     match : function() {
       $(window).scroll(function () {
            positionBack();
        });

     }
    });
}
if($(".home-banner__feature, .thumb-row__item").length != 0){
    $(".home-banner__feature, .thumb-row__item").markExternal(InternalURLs, 'external-link');
}

});


jQuery(document).ready(function ($) {

    var $document = $(document),
        $body = $(document.body);

    /*
     * Remove images for file icons
    */

    $('.include_asset_summary').present(function (wrappers) {

        wrappers.each(function() {
            var img = $(this).find('img'),
                anchor = $(this).find('a'),
                filename = anchor ? anchor.attr('href') : false,
                filetype = filename ? filename.split('.').pop() : false,
                _class = 'icon-' + filematches[filetype];

            if (filetype) {
                anchor.append('<i></i>').addClass(_class);
                img.remove();
            } else {
                return true; // Continue
            }

        });

    });

    $('.everything').addClass('remodal-bg');

    // html needs lt-ie9 class too
    if ($('.lt-ie9').length) {
    	$('html').addClass('lt-ie9');
    }

    /**
     * Header html insertion
     */
    $('.module-header').present(function (header) {

        // Templates
        var elements = new Template('template-header-elements'),
            overlay = new Template('template-header-overlay');

        // Insert into header
        header.prepend(elements.raw());

        // Insert the overlay
        $(overlay.raw()).insertBefore(header);

        // Functional elements
        var searchToggle = header.find('.search-toggle'),
            searchInput = header.find('input.search'),
            submitInput = header.find('input.submit'),
            openClass = 'search-open';

        searchToggle.on('click', function (event) {
            event.preventDefault();
            // header.toggleClass(openClass);
            if(header.hasClass(openClass)) {
                closeSearch();
                $(".insignia-wrapper").css("z-index", 6);
            } else {
                openSearch();
                $(".insignia-wrapper").css("z-index", 1);
            }
            return false;
        });

        // If user has moved out of nav close it
        searchToggle.on('focus', function (event) {
            Utils.toggleState('initial');
        });

        // searchInput.on('blur', function (event) {
        //     closeSearch();
        //     searchToggle.focus();
        // });

        function closeSearch() {
            header.removeClass(openClass);
            searchToggle.focus();
        }
        function openSearch() {
            header.addClass(openClass);
            searchInput.focus();
        }

        // Add search action
        if (SEARCH_SLUG && HOME_URL) {
            header.find('form').attr('action', HOME_URL + '/' + SEARCH_SLUG).attr('method', 'get');
        }

        // Menu toggle functionality
        $(".skip-to-content").on('click',function (event) {
             Utils.toggleState('initial');

             if($("body.section-home").length > 0)
                {$(".page-content .navigation ul").last().find("li:not(.level_back) a").first().focus();}
            else{$("#_content a").first().focus();}



        });
        header.find('.menu-toggle').on('click', function (event) {
            event.preventDefault;
            if($("body").hasClass("state-initial")){
                Utils.toggleState('menu');
                $('.side-navigation ul').last().find("a").first().focus();
            }else
                  Utils.toggleState('initial');
           // $('.side-navigation .nav-wrap > ul > li > a').first().focus();


        });

        // Hide menu if overlay is clicked
        $('.overlay').on('click', function (event) {
            event.preventDefault;
            Utils.toggleState('initial');

        });

    });


    /**
     * Breadcrumbs sizing
     * For < IE8
     */
/*
    $('.module-breadcrumbs').present( function(moduleBreadcrumbs) {

        var is_ie8 = $('body').hasClass('lt-ie9');

        function _breadcrumbs_layout() {

            // if ( is_ie8 ) {

                // var ul = moduleBreadcrumbs.find('ul'),
                //     li = ul.find('li'),
                //     ulWidth = ul.innerWidth(),
                //     liCount = li.length,
                //     liFirst = li.first(),
                //     liPaddingX = parseInt(liFirst.css("padding-left"), 10) + parseInt(liFirst.css("padding-right"), 10),
                //     liPaddingY = parseInt(liFirst.css("padding-top"), 10) + parseInt(liFirst.css("padding-bottom"), 10),
                //     liTallest = 0,
                //     liWidth = 0;

                // // if(liCount <= 4) {
                // //     liWidth = (ulWidth / 4) - liPaddingX;
                // // }

                // // if(liCount > 4) {
                // //     liWidth = (ulWidth / liCount) - liPaddingX;
                // // }
                // var factor = (liCount <= 4) ? 4 : liCount;

                // li.each(function(i){
                //     var h = $(this).height();
                //     if (h > liTallest) {
                //         liTallest = h;
                //     }
                // });

                // li.each(function (index, element) {
                //     $(this).css({
                //         'height' : ( liTallest + liPaddingY ) + 'px',
                //         'width' : ( ulWidth / factor ) - liPaddingX + 'px'
                //     });
                // });

            // }

            var ul = moduleBreadcrumbs.find('ul'),
                li = ul.find('li');
                liCount = li.length;

            ul.attr('data-count', liCount);

        }

        enquire.register(MM.medium, {
            match : function() {
                _breadcrumbs_layout();

                // If element resizes
                moduleBreadcrumbs.smartresize( function() {
                    _breadcrumbs_layout();
                });

                $(document).on('breadcrumbsUpdated', function (event) {
                    _breadcrumbs_layout();
                });

            },
            unmatch : function() {

                // li.attr('style', '');

            }
        });

        // breadCrumbs.titletip({speed:400});

    });
*/


///////* Author links  and Branding by Kirill *********/

  $('.module-page-header').present (function (modulePageHeader) {

    var container = modulePageHeader.find(".text");
    var curURL = container.attr("data-author-url");
    var curText = container.attr("data-author-text");
    var curImage = container.attr("data-author-image");






    if(typeof curURL != 'undefined' && typeof curText != 'undefined' && typeof curImage != 'undefined'){
        if(curText.trim() != "" && curURL.trim() != "" && curImage.trim() != ""){
          container.append('<a target="_blank" href="'+curURL+'" title="'+curText+'" style="background-image: url('+curImage+');" >&nbsp;</a>');
        }
    }

    var curBrandTitle = container.attr("data-brand-title");
    var curBrandLogo = container.attr("data-brand-logo");
    var curBrandBg = container.attr("data-brand-background");

    if(typeof curBrandTitle != 'undefined' || typeof curBrandLogo != 'undefined' || typeof curBrandBg != 'undefined'){

        if(curBrandTitle.trim() != "" || curBrandLogo.trim() != "" || curBrandBg != ""){



            container = $("#_content .column-left");

            var str = "";

            if(curBrandBg != "" && (curBrandTitle.trim() == "" || curBrandLogo.trim() == "" ))
                str= '<div id="branding-banner" class="branding-banner with-image"><img src="'+curBrandBg+'" alt="banner" /></div>';
            else{
                str = '<div id="branding-banner" class="branding-banner with-bg" style="background-image: url('+curBrandBg+');"><h3>' + curBrandTitle + '</h3>';
                if(curBrandLogo.trim() != "")
                    str+= '<img width="150" alt="Branding logo" src="'+curBrandLogo+'">';
                 str+='</div>';
            }


            container.prepend(str);
        }
    }


   });

    /**
     * Background positioning
     */

    $('.module-breadcrumbs').present( function (moduleBreadcrumbs) {

        $('.module-page-header').present (function (modulePageHeader) {

            // Defaults
            var height = 0;

            // Add classes
            function _calc_header_height (run) {

                if (run == true) {
                    // Calc height
                    height = moduleBreadcrumbs.outerHeight() + modulePageHeader.outerHeight();

                    // Vars (stolen from https://github.com/kumailht/responsive-elements/)
                    var start = 100,
                        end = 900,
                        interval = 50,
                        i = interval > start ? interval : ~~(start / interval) * interval,
                        classes = [];

                    while (i <= end) {
                        if (i < height) classes.push('gt' + i);
                        if (i > height) classes.push('lt' + i);
                        if (i == height) classes.push('lt' + i);

                        i += interval;
                    }

                    // Add the attribute values
                    modulePageHeader.attr('data-height', classes.join(' '));
                    // console.log(classes);

                } else {

                    modulePageHeader.attr('data-height', '');
                    // console.log('none');

                }

            }


            // // Run on page load
            // _calc_header_height(true);

            // // Run again on smartresize
            // $(window).smartresize( function (event) {
            //     _calc_header_height(true);
            // });


        // console.log(Utils.mediaQuery(0, Breakpoint.small));
            //Responsive
            enquire.register( Utils.mediaQuery(0, Breakpoint.small), {
                match : function() {

                    // Run on page load
                    _calc_header_height(true);

                    // Run again on smartresize
                    $(window).smartresize( function (event) {
                        _calc_header_height(true);
                    });

                },
                unmatch : function() {


                }
            });

            enquire.register( Utils.mediaQuery(Breakpoint.small) , {
                match : function() {

                    // Run on page load
                    _calc_header_height(false);

                    // Run again on smartresize
                    $(window).smartresize( function (event) {
                        _calc_header_height(false);
                    });

                },
                unmatch : function() {

                    //_calc_header_height(true);

                }
            });


        });
    });


    /*
     * If nav link has focus open it
    */

    // $('.side-navigation').present(function (nav) {
    //     nav.find('a').on('focus', function(event) {
    //         Utils.toggleState('menu');
    //     });
    //     nav.find('a').on('blur', function(event) {
    //         Utils.toggleState('initial');
    //     });
    // });

    // $('.side-navigation').present(function (nav) {
    //     nav.on('focusout', function(event) {
    //         Utils.toggleState('initial');
    //     });
    // });


    /**
     * Filters page
     */
    $('.module-grants-tabs').present(function (tabs) {
        var lis = tabs.find('li'),
            classFocus = 'focus',
            classActive = 'active';

        lis.each(function () {
            var li = $(this),
                a = li.find('a'),
                ul = li.find('ul'),
                type = a.data('filter-type'); //TODO implement this in markup so we can change the results

            a.click(function (e) {

                if(!$(this).parent().hasClass("more"))// by Kirill
                    return;
                e.preventDefault();
                e.stopPropagation();

                if($(window).width() <= Breakpoint.large){
                    Utils.slideTab(li.hasClass(classFocus), ul, li, classFocus);
                }
                else{
                    if(li.hasClass(classActive)){
                        li.toggleClass(classFocus);
                    }
                    else{
                        //remove classes on all lis
                        lis.removeClass(classActive);
                        lis.removeClass(classFocus);

                        //add classes to the active li
                        li.addClass(classActive);
                        li.addClass(classFocus);

                        //listen for an outside click to close dropdown
                        $document.one('click', function () {
                            li.removeClass(classFocus)
                        });
                    }
                }

            });

        });
    });

    /**
     * Navigation
     */

    function topScroller(e) {
        e.preventDefault();
        // animatedScrollTo(0, 1000); // broken in ie11
        var pageHeight = $('body').outerHeight();

        if (pageHeight < 3500) {
            // page isn't too big to animate reliably on old devices; animate
            $('body, html').animate({
                scrollTop: 0
            }, 1000,
            function() {
                // Animation complete.
                $('.skip-to-content').focus();

            });
        } else {

            // page is too big to animate smoothly & reliably on old devices; don't animate
            $('body, html').scrollTop(0);

            $('.skip-to-content').focus();
        }
    };

    // scroll top button
    $(".module-to-top a").on('click', topScroller);


    /**
     * Module header
     */
    $('.module-copyright').present(function (copyRight) {
        copyRight.find('.badge').removeText();
    });


    /**
     * Switch inline image to background
     */
    $('.module-directory-nav-listing li').present(function (moduleDirNavListing) {
        moduleDirNavListing.each(function (index, element){
            var span = $(element).find('span'),
                img = span.find('img'),
                src = img.attr('src');

            span.css({'background-image' : 'url(' + src + ')'});

        });

    });

    /**
     * Make all button links accessible
     */
     $('a[class*="button"], button, input[type="submit"], input[type="button"], a[class*="toggle"]').present( function (button) {

        button.each( function (index, button) {
            $(button).attr('role', 'button');
        });
    });


    $('.module-grants-results').present(function (moduleGrantsResults) {
        moduleGrantsResults.markExternal(InternalURLs, 'external-link');
    });

    /**
     * Need placeholder on old browsers
    */
    $('input, textarea').placeholder();

    /**
     * Remove empty links inserted by Squiz
     */
    $('a').each( function (index, anchor) {
        var a = $(anchor);
        if (a.contents().length == 0) {
            a.remove();
        }
    });

    /**
     *  Webkit webfonts hack
     * Brings body onto GPU momentarily
     */
    // if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {

    //     // Keyframes CSS
    //     var keyframes = '@-webkit-keyframes fontfix { ' +
    //                         'from { opacity: 1; } ' +
    //                         'to { opacity: 1; } ' +
    //                     '}';

    //     // ANimation CSS
    //     var animation = 'body {' +
    //                         '-webkit-animation-duration: 0.1s; ' +
    //                         '-webkit-animation-name: fontfix; ' +
    //                         '-webkit-animation-iteration-count: 1; ' +
    //                         '-webkit-animation-timing-function: linear; ' +
    //                         '-webkit-animation-delay: 0.1s; ' +
    //                     '}';
    //     // Insert the styles
    //     $('body').append('<style>' + keyframes + animation + '</style>');

    // }

    // make height of homepage thumbs consistent
    //needs improvments
    $('.thumb-row__item img').one('load', function() {
        $('.thumb-row__item').matchHeight(false);
    }).each(function() {
        if(this.complete) $(this).load();
    });
});

//current date
var curDate =  new Date();

//make it midninght
curDate.setHours(0);
curDate.setMinutes(0);
curDate.setSeconds(0);
curDate.setMilliseconds(0);


var showCount = 1;


var monthNames = [ "January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December" ];
var countries = {"ad":"Andorra","ae":"United Arab Emirates","af":"Afghanistan","ag":"Antigua and Barbuda","ai":"Anguilla","al":"Albania","am":"Armenia","ao":"Angola","aq":"Antarctica","ar":"Argentina","as":"American Samoa","at":"Austria","au":"Australia","aw":"Aruba","ax":"Åland Islands","az":"Azerbaijan","ba":"Bosnia and Herzegovina","bb":"Barbados","bd":"Bangladesh","be":"Belgium","bf":"Burkina Faso","bg":"Bulgaria","bh":"Bahrain","bi":"Burundi","bj":"Benin","bl":"Saint Barthélemy","bm":"Bermuda","bn":"Brunei Darussalam","bo":"Bolivia, Plurinational State of","bq":"Bonaire, Sint Eustatius and Saba","br":"Brazil","bs":"Bahamas","bt":"Bhutan","bv":"Bouvet Island","bw":"Botswana","by":"Belarus","bz":"Belize","ca":"Canada","cc":"Cocos (Keeling) Islands","cd":"Congo, the Democratic Republic of the","cf":"Central African Republic","cg":"Congo","ch":"Switzerland","ci":"Côte d'Ivoire","ck":"Cook Islands","cl":"Chile","cm":"Cameroon","cn":"China","co":"Colombia","cr":"Costa Rica","cu":"Cuba","cv":"Cabo Verde","cw":"Curaçao","cx":"Christmas Island","cy":"Cyprus","cz":"Czech Republic","de":"Germany","dj":"Djibouti","dk":"Denmark","dm":"Dominica","do":"Dominican Republic","dz":"Algeria","ec":"Ecuador","ee":"Estonia","eg":"Egypt","eh":"Western Sahara","er":"Eritrea","es":"Spain","et":"Ethiopia","fi":"Finland","fj":"Fiji","fk":"Falkland Islands (Malvinas)","fm":"Micronesia, Federated States of","fo":"Faroe Islands","fr":"France","ga":"Gabon","gb":"United Kingdom","gd":"Grenada","ge":"Georgia","gf":"French Guiana","gg":"Guernsey","gh":"Ghana","gi":"Gibraltar","gl":"Greenland","gm":"Gambia","gn":"Guinea","gp":"Guadeloupe","gq":"Equatorial Guinea","gr":"Greece","gs":"South Georgia and the South Sandwich Islands","gt":"Guatemala","gu":"Guam","gw":"Guinea-Bissau","gy":"Guyana","hk":"Hong Kong","hm":"Heard Island and McDonald Islands","hn":"Honduras","hr":"Croatia","ht":"Haiti","hu":"Hungary","id":"Indonesia","ie":"Ireland","il":"Israel","im":"Isle of Man","in":"India","io":"British Indian Ocean Territory","iq":"Iraq","ir":"Iran, Islamic Republic of","is":"Iceland","it":"Italy","je":"Jersey","jm":"Jamaica","jo":"Jordan","jp":"Japan","ke":"Kenya","kg":"Kyrgyzstan","kh":"Cambodia","ki":"Kiribati","km":"Comoros","kn":"Saint Kitts and Nevis","kp":"Korea, Democratic People's Republic of","kr":"Korea, Republic of","kw":"Kuwait","ky":"Cayman Islands","kz":"Kazakhstan","la":"Lao People's Democratic Republic","lb":"Lebanon","lc":"Saint Lucia","li":"Liechtenstein","lk":"Sri Lanka","lr":"Liberia","ls":"Lesotho","lt":"Lithuania","lu":"Luxembourg","lv":"Latvia","ly":"Libya","ma":"Morocco","mc":"Monaco","md":"Moldova, Republic of","me":"Montenegro","mf":"Saint Martin (French part)","mg":"Madagascar","mh":"Marshall Islands","mk":"Macedonia, the former Yugoslav Republic of","ml":"Mali","mm":"Myanmar","mn":"Mongolia","mo":"Macao","mp":"Northern Mariana Islands","mq":"Martinique","mr":"Mauritania","ms":"Montserrat","mt":"Malta","mu":"Mauritius","mv":"Maldives","mw":"Malawi","mx":"Mexico","my":"Malaysia","mz":"Mozambique","na":"Namibia","nc":"New Caledonia","ne":"Niger","nf":"Norfolk Island","ng":"Nigeria","ni":"Nicaragua","nl":"Netherlands","no":"Norway","np":"Nepal","nr":"Nauru","nu":"Niue","nz":"New Zealand","om":"Oman","pa":"Panama","pe":"Peru","pf":"French Polynesia","pg":"Papua New Guinea","ph":"Philippines","pk":"Pakistan","pl":"Poland","pm":"Saint Pierre and Miquelon","pn":"Pitcairn","pr":"Puerto Rico","ps":"Palestine, State of","pt":"Portugal","pw":"Palau","py":"Paraguay","qa":"Qatar","re":"Réunion","ro":"Romania","rs":"Serbia","ru":"Russian Federation","rw":"Rwanda","sa":"Saudi Arabia","sb":"Solomon Islands","sc":"Seychelles","sd":"Sudan","se":"Sweden","sg":"Singapore","sh":"Saint Helena, Ascension and Tristan da Cunha","si":"Slovenia","sj":"Svalbard and Jan Mayen","sk":"Slovakia","sl":"Sierra Leone","sm":"San Marino","sn":"Senegal","so":"Somalia","sr":"Suriname","ss":"South Sudan","st":"Sao Tome and Principe","sv":"El Salvador","sx":"Sint Maarten (Dutch part)","sy":"Syrian Arab Republic","sz":"Swaziland","tc":"Turks and Caicos Islands","td":"Chad","tf":"French Southern Territories","tg":"Togo","th":"Thailand","tj":"Tajikistan","tk":"Tokelau","tl":"Timor-Leste","tm":"Turkmenistan","tn":"Tunisia","to":"Tonga","tr":"Turkey","tt":"Trinidad and Tobago","tv":"Tuvalu","tw":"Taiwan, Province of China","tz":"Tanzania, United Republic of","ua":"Ukraine","ug":"Uganda","um":"United States Minor Outlying Islands","us":"United States","uy":"Uruguay","uz":"Uzbekistan","va":"Holy See (Vatican City State)","vc":"Saint Vincent and the Grenadines","ve":"Venezuela, Bolivarian Republic of","vg":"Virgin Islands, British","vi":"Virgin Islands, U.S.","vn":"Viet Nam","vu":"Vanuatu","wf":"Wallis and Futuna","ws":"Samoa","ye":"Yemen","yt":"Mayotte","za":"South Africa","zm":"Zambia","zw":"Zimbabwe"};

function preg_quote( str ) {
  return (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
}
//looks for search in data and wraps it with <strong> tag
function highlight( data, search ) {//
  return data.replace( new RegExp( "(" + preg_quote( search ) + ")" , 'gi' ), "<strong>$1</strong>" );
}

//reorder items inside container
/*

Priority
-Hub Pages
-Grants with sub-pages
-Grants without sub-pages
-Awards
-Trade Missions
-Is Open
-Ongoing
-Title keyword match
-Summary keyword match
*/

function reorder(container, items){


    //rank for every item
    var searchRank = new Array(items.length);

    var keyword =  "";
    if($("#queries_keywords_query").length !== 0){
      keyword = $("#queries_keywords_query").val().toLowerCase().trim();
    }

    for(var i=0; i < items.length; i++){

      searchRank[i] = 0;

      var title = $(items[i]).find("h3").text();

      var curPageType= ($(items[i]).attr("data-page_type")|| "").toLowerCase().trim();





      //type rank
      if(curPageType.length !== 0){
          if(curPageType === "page-type__hub" && !$(items[i]).hasClass("is-closed")){
            searchRank[i]+=9000;
          }else if(curPageType === "page-type__grant-detail"){
            searchRank[i]+=8000;
          }else if(curPageType === "page-type__grant-detail-sub"){
            searchRank[i]+=7000;
          }else if(curPageType === "page-type__award"){
            searchRank[i]+=6000;
          }else if(curPageType === "page-type__trade-mission"){
            searchRank[i]+=5000;
          }
        }else{
          searchRank[i]+=4000;
        }

        //open/close rank
        if($(items[i]).hasClass("is-open")){
          searchRank[i]+=100;
          var closeDate = $(items[i]).attr("data-application_closes") || "";
          if(closeDate.length !== 0){
            closeDate = new Date(closeDate);
            if ( Object.prototype.toString.call(closeDate) === "[object Date]"){
              var days = Math.ceil((closeDate - curDate) / (1000 * 3600 * 24));
               searchRank[i]+= Math.ceil((1/days)*365);

            }
          }
        } else if($(items[i]).hasClass("is-ongoing")){
          searchRank[i]+=50;
        } else if($(items[i]).hasClass("is-closed")){
          searchRank[i]-= 4000;
        }


      //keyword rank
      if(keyword.length != 0 && title.toLowerCase().trim().indexOf(keyword) != -1){
        searchRank[i]++;
      }


        $(items[i]).attr("data-rank", searchRank[i]);
       // console.log(searchRank[i]);

    }

    //reorder items by data-rank attribute
    items.sort(function (a, b) {
      return +b.getAttribute('data-rank') - +a.getAttribute('data-rank');
    }).appendTo(container);


}
//matches items with one of the filters (checkboxes)
function matchItems(items, filters){
    var match = true;
      if(filters.length != 0){
        match = false;
        for(var j = 0; j < filters.length && !match; j++ ){
          for(var k = 0; k < items.length; k++)

            if(items[k].trim() == $(filters[j]).attr("value").toLowerCase().trim()){
              match = true;
              break;
            }
        }
      }
    return match;
}

//matches items with one of the filters (select/radio)
function matchItem(items, filter){
    var match = true;
    if(filter.length != 0 && $(filter[0]).val() != "-1") {
      // console.log($(employeesRange[0]).val().toLowerCase().trim());
      match = false;
      for(var k = 0; k < items.length; k++)
        if(items[k].trim() == $(filter[0]).val().toLowerCase().trim()){
        match = true;
        break;
      }
    }
    return match;
}

//searches and filters items by grantsSearch filters
function search(grantsSearch, items, currentInput, resetShowCount){


  resetShowCount = (typeof resetShowCount === 'undefined')?true:resetShowCount;


  var keyword = grantsSearch.find("#queries_keywords_query").val().toLowerCase().trim();

  if(keyword.length > 0 && keyword.length < 3 )
      return;

  var types  = grantsSearch.find(".types-of-assistance input:checked");

  var locations  = grantsSearch.find(".business-location input:checked");

  var employeesRange = grantsSearch.find(".number-of-employees input:checked");

  var stages = grantsSearch.find(".business-stage input:checked");

  var industry  = grantsSearch.find("#industry option:selected");

  var activity  = grantsSearch.find("#activity option:selected");

  var organisations  = grantsSearch.find(".organisation-type input:checked");

  // get text of item without child text
  var justText = function(item) {
      return $(item).clone().children().remove().end().text();
  };

  // console.log(currentInput);
  // for screenreaders: insert description explaining that the search has been updated
  if (currentInput.is('select, input')) {
    var descriptionClass = 'input-description_' + currentInput.attr('id');

    if (currentInput.is('select')) {
      // is select, remove select hint from label text
      var relatedLabelText = justText($('label[for="' + currentInput.attr('id') + '"]'));

    } else {
      // not select
      var relatedLabelText = $('label[for="' + currentInput.attr('id') + '"]').text();
    }
    // console.log('relatedLabelText: ' + relatedLabelText);

    var inputDescription = '<p class="' + descriptionClass + ' accessible-hide">Search updated, now filtered by ' + relatedLabelText + '. <a class="skip-to-filtered-results" href="#grants-meta">Skip to filtered results</a></p>';

    if (currentInput.is('input[type="checkbox"], input[type="radio"]')) {
      // is checkbox or radio, add and then remove when cleared
      if (!($('.' + descriptionClass).length)) {
        // add
        $(inputDescription).insertAfter(currentInput.closest('label'));

        $('.skip-to-filtered-results').on('click', function(e) {
          e.preventDefault();
          $('#grants-meta > *:visible').first().attr('tabindex', 0);
          $('#grants-meta > *:visible').first().focus();
        });

      } else {
        // remove if exists
        $('.' + descriptionClass).remove();
      }
    } else {
      // is select or search, add once and never remove
      if (!($('.' + descriptionClass).length)) {
        $(inputDescription).insertAfter(currentInput);

        $('.skip-to-filtered-results').on('click', function(e) {
          e.preventDefault();
          $('.grants-results-meta > *:visible').first().attr('tabindex', 0);
          $('.grants-results-meta > *:visible').first().focus();
        });
      }
    }
  }


  var hideCount = 0;
  var isOpen = 0;
  var isClosed = 0;
  //loop through all items
  for(var i=0; i < items.length; i++){

     // console.log($(items[i]).attr("data-industry"));
      var curIndustry = ($(items[i]).attr("data-industry") || "").toLowerCase().trim().split("; ");
      var curLocation = ($(items[i]).attr("data-location")|| "").toLowerCase().trim().split("; ");

      var curEmployees = ($(items[i]).attr("data-employees")|| "").toLowerCase().trim().split("; ");
      var curType = ($(items[i]).attr("data-type")|| "").toLowerCase().trim().split("; ");
      var curActivity = ($(items[i]).attr("data-activity")|| "").toLowerCase().trim().split("; ");

      var curStage = ($(items[i]).attr("data-stage")|| "").toLowerCase().trim().split("; ");

      var curOrganisation= ($(items[i]).attr("data-organisation")|| "").toLowerCase().trim().split("; ");

      var typeMatch = matchItems(curType, types);

      var locationMatch = matchItems(curLocation, locations);

      var employeesMatch =  matchItem(curEmployees, employeesRange);

      var stageMatch = matchItems(curStage, stages);

      var industryMatch =  matchItem(curIndustry, industry);

      var activityMatch = matchItem(curActivity, activity);

      var organisationMatch = matchItems(curOrganisation, organisations);

      var keywordMatch = true;

      if(keyword.length != 0){
        var title = $(items[i]).find("h3").text();
        var text = $(items[i]).find("p").text();
        keywordMatch = (title.toLowerCase().trim().indexOf(keyword) != -1 || text.toLowerCase().trim().indexOf(keyword) != -1);

        if(keywordMatch){//highlight matched text
          $(items[i]).find("h3").html(highlight(title, keyword));
          $(items[i]).find("p").html(highlight(text, keyword));
        }


      }else{ // remove strong tags
        $(items[i]).find("h3").text($(items[i]).find("h3").text());
        $(items[i]).find("p").text($(items[i]).find("p").text());
      }

      //hide or show
      if(typeMatch && locationMatch &&  employeesMatch && stageMatch && industryMatch && activityMatch && keywordMatch && organisationMatch){

        $(items[i]).show();
        $(items[i]).addClass("is-visible");

        if($(items[i]).hasClass("is-open") || $(items[i]).hasClass("is-ongoing")){
          isOpen++;

        }else if($(items[i]).hasClass("is-closed")){
          isClosed++;
        }

      }else{
         $(items[i]).hide();
         $(items[i]).removeClass("is-visible");
         hideCount++;
      }

  }

 reorder($(".grants-list"), items);



  $(".grants-results-meta").show();

  if(resetShowCount)
    showCount = 1;


  if((20 * showCount) >= items.parent().find(".grants-results-item.is-visible").length ) {
      $(".grants-load-more").hide();
    }else{
      $(".grants-load-more").show();
      items.parent().find(".grants-results-item.is-visible:gt("+ ((20 * showCount) - 1) +")").hide();
  }

  if(hideCount == items.length){// not found


    showCount = 1;

    $(".grants-load-more").hide();

    $(".grants-results__none").show();
    $(".grants-results__none .keyword").text( keyword );

    if(keyword.length != 0)// no keyword filtering
        $(".grants-results__none  .keyword-prefix").show();
    else
        $(".grants-results__none .keyword-prefix").hide();

    $(".grants-results__count, .grants-results__status, .grants-results__title").hide();


  }else if(hideCount === 0){// all filters off
    $(".grants-results__count, .grants-results__status, .grants-results__none").hide();
    $(".grants-results__title").show();

  }else{


     $(".grants-results__count, .grants-results__status").show();

     $(".grants-results__none, .grants-results__title").hide();

     $(".grants-results__status .open").text(isOpen);

     if(isOpen === 1){ // is/are
         $(".open-verb").text("is");
     }else{
        $(".open-verb").text("are");
     }
     $(".grants-results__status .closed").text(isClosed);

    if(isClosed === 1){ // is/are
         $(".close-verb").text("is");
     }else{
        $(".close-verb").text("are");
     }
     $(".grants-results__count .keyword").text(keyword);

     if(keyword.length != 0)
        $(".grants-results__count  .keyword-prefix").show();
    else
        $(".grants-results__count  .keyword-prefix").hide();

      //displaying count
    $(".grants-results__count .number").text(items.length - hideCount);
     //$(".grants-results__count .count").text(items.length);

     if(items.length - hideCount === 1){// result(s)
      $(".result-ending").text("");
     }else{
      $(".result-ending").text("s");
     }
  }
}

function injectTimeline(source, destination){


        var applicationOpens =  source.attr("data-application_opens") || "";
        var applicationCloses =  source.attr("data-application_closes") || "";
        var applicationLabel =  source.attr("data-application_label") || "Program";
        var applicationLabelPlural = (source.attr("data-application_label_plural") == "1" ? true : false) || false;

        var applicationReopeningCopy =  (source.attr("data-application_reopening_copy") || "").trim();

        var event1Starts  = source.attr("data-event_1_starts") || "";
        var event1Ends  =  source.attr("data-event_1_ends") || "";

        var event1Country = source.attr("data-event_1_country") || "";
        var event1Copy = source.attr("data-event_1_copy") || "";


        var event2Starts  =  source.attr("data-event_2_starts") || "";
        var event2Ends  =  source.attr("data-event_2_ends") || "";

        var event2Country = source.attr("data-event_2_country") || "";

        var event2Copy = source.attr("data-event_2_copy") || "";


        //atleast open date should be set
        if(applicationOpens == "" ){
            console.log("Application date is not set!");
            // alert("Application dates are not set.")
            return;
        }

        applicationOpens = new Date(applicationOpens);
        // check that date is valid
        if ( Object.prototype.toString.call(applicationOpens) !== "[object Date]"){
          console.log("Invalid date format")
          return ;
        }


        //max date on a timeline
        var max = applicationOpens;




        if(applicationCloses !== ""){
           applicationCloses = new Date(applicationCloses);

          if ( Object.prototype.toString.call(applicationCloses) !== "[object Date]"){
            console.log("Invalid date format")
            return ;
          }

          if(applicationOpens >= applicationCloses){
            console.log("Application open date should be before applictaion close date");
            return;
          }
          max = applicationCloses;
        }



        //get event dates
        var event1 = false;
        if(event1Starts != ""){
            event1Starts  = new Date(event1Starts);

            if ( Object.prototype.toString.call(event1Starts) !== "[object Date]"){
                console.log("Invalid date format")

            }else if(applicationCloses > event1Starts){
                 console.log("Event should start after application closure");
            }else{
              event1 = true;

            }
            if(event1Ends != ""){
              event1Ends  = new Date(event1Ends);

              if ( Object.prototype.toString.call(event1Ends) !== "[object Date]"){
                  console.log("Invalid date format")

              }else if(event1Starts >= event1Ends){
                  console.log("Event start date should be before event close date");
                  event1Ends = "";
              }else{
                 // max = event1Ends;
              }
            }
        }



        var event2 = false;
        if(event2Starts != ""){
            event2Starts  = new Date(event2Starts);


            if ( Object.prototype.toString.call(event2Starts) !== "[object Date]"){
                console.log("Invalid date format")

            }else if(event1Ends >= event2Starts){
                console.log("Event date should be after previus event");
            }else{
              event2 = true;

            }

            if(event2Ends != ""){
              event2Ends  = new Date(event2Ends);

              if ( Object.prototype.toString.call(event2Ends) !== "[object Date]"){
                  console.log("Invalid date format")

              }else if(event2Starts >= event2Ends){
                  console.log("Event start date should be before event close date");
                  event2Ends = "";
              }else{
                 // max = event2Ends;
              }
            }
        }



         var fullPeriod = 0;

        var maxPercent = 100;

        var applicationEndPercent =  0;

        var todayPercent = 0;

        var barRange = $('<div class="program-bar__range" />');
        var legend = $('<div class="program-bar__legend" />');
        var curProgress = $('<div class="program-bar__solid" />');


        barRange.append(curProgress);
        destination.append(barRange);
        destination.append(legend);



        //application isn't open forever
        if(applicationCloses !== "" && applicationReopeningCopy === "" ){


          //100% period of time
          fullPeriod = max - applicationOpens;

          //if event exist close date will be on 50% otherwise on 75
          maxPercent = (event1)?50:75;
          //move it to 40% if event 2 exist
          maxPercent = (event2 && event1)?40:maxPercent;

          //if two events, each event takes 20%, otherwise 25%
          eventWidth = event2?20:25;



          applicationEndPercent = (applicationCloses - applicationOpens)*maxPercent/fullPeriod;

          todayPercent = (curDate - applicationOpens)*maxPercent/fullPeriod;




          var appDeadline = $('<div class="program-bar__indicator" />');

          var appDeadlineLabel = $('<p class="program-bar__label is-closed is-on-indicator" />');


          barRange.append(appDeadline);
          legend.append(appDeadlineLabel);


          //set copy only

          //application is closed
          if(curDate > applicationCloses){

            appDeadlineLabel.text(applicationLabel + " " + (applicationLabelPlural ? 'were' : 'was') + " closed on " +applicationCloses.getDate() + " " + monthNames[applicationCloses.getMonth()]);

          }else{
            destination.removeClass("is-closed");

            var appProgress = $('<div id="application-progress" class="program-bar__hatched" />');
            var appProgressLabel = $('<p class="program-bar__label is-open" />');

            barRange.append(appProgress);
            legend.append(appProgressLabel);

            //not open yet
            if(curDate < applicationOpens){
              appProgressLabel.text(applicationLabel + " will be open for applications on " + applicationOpens.getDate() + " " + monthNames[applicationOpens.getMonth()]);
            }else{
              appProgressLabel.text("Currently open for applications");
            }

            var days = Math.ceil((applicationCloses - curDate) / (1000 * 3600 * 24));

            if(days == 0){
              appDeadlineLabel.text(applicationLabel + " close" + (!applicationLabelPlural ? 's' : '') + " today");
            }else if(days == 1){
              appDeadlineLabel.text(applicationLabel + " close" + (!applicationLabelPlural ? 's' : '') + " in " + days + " day");
            }else
              appDeadlineLabel.text(applicationLabel + " close" + (!applicationLabelPlural ? 's' : '') + " in " + days + " days");
          }

          if(event1){


            //single date event
            if(event1Ends === ""){

               var ocasion1Progress = $('<div class="program-bar__indicator" />');

                var ocasion1Label = $('<p class="program-bar__label is-on-indicator is-single-event" />');

                /* Priority:
                  - Copy
                  - Country
                  - Date
                */

               if(event1Copy !== ""){
                  ocasion1Label.text(event1Copy);
                }else if(event1Country !== ""){
                  event1Country = event1Country.toLowerCase().trim();
                  ocasion1Label.text("In " + countries[event1Country]+ " " + event1Starts.getDate() + " " + monthNames[event1Starts.getMonth()]);
                }else{
                  ocasion1Label.text(event1Starts.getDate() + " " + monthNames[event1Starts.getMonth()]);
                }

                barRange.append(ocasion1Progress);
                legend.append(ocasion1Label);

            }else{//


              var event1Progress = $('<div class="program-bar__hatched_inset" />');

              var event1ProgressLabel = $('<p class="program-bar__label" />');

              var event1ProgressLabelCopy = $('<span class="program-bar__copy" />');



              if(event1Copy !== ""){
                  event1ProgressLabelCopy.text(event1Copy);
                  event1ProgressLabel.addClass("is-on-indicator is-single-event");
                }else if(event1Country !== ""){
                  event1Country = event1Country.toLowerCase().trim();
                  event1ProgressLabelCopy.text("In " + countries[event1Country]+ " " + event1Starts.getDate() +  (event1Ends.getMonth() != event1Starts.getMonth()?" " + monthNames[event1Starts.getMonth()] + " ":"") + " - "  + event1Ends.getDate() + " " + monthNames[event1Ends.getMonth()]);

                   var event1ProgressLabelFlag = $('<span class="flag" />');
                    event1ProgressLabelFlag.addClass("flag-"+event1Country);
                    event1ProgressLabel.addClass("has-flag");
                    event1ProgressLabel.append(event1ProgressLabelFlag);

                }else{
                   event1ProgressLabel.addClass("is-on-indicator is-single-event");
                  event1ProgressLabelCopy.text(event1Starts.getDate() +  (event1Ends.getMonth() != event1Starts.getMonth()?" " + monthNames[event1Starts.getMonth()] + " ":"") + " - "  + event1Ends.getDate() + " " + monthNames[event1Ends.getMonth()]);
                }

              barRange.append(event1Progress);
              event1ProgressLabel.append(event1ProgressLabelCopy);
              legend.append(event1ProgressLabel);


            }

            if(event2){

            if(event2Ends === ""){

               var ocasion2Progress = $('<div class="program-bar__indicator" />');

                var ocasion2Label = $('<p class="program-bar__label is-on-indicator is-single-event" />');


                if(event2Copy !== ""){
                  ocasion2Label.text(event2Copy);
                }else if(event2Country !== ""){
                  event2Country = event2Country.toLowerCase().trim();
                  ocasion2Label.text("In " + countries[event2Country]+ " " + event2Starts.getDate() +  (event2Ends.getMonth() != event2Starts.getMonth()?" " + monthNames[event2Starts.getMonth()] + " ":"") + " - "  + event2Ends.getDate() + " " + monthNames[event2Ends.getMonth()]);
                }else{
                  ocasion2Label.text(event2Copy + " " + event2Starts.getDate() + " " + monthNames[event2Starts.getMonth()] );
                }

                barRange.append(ocasion2Progress);
                legend.append(ocasion2Label);

            }else{

               if(event2Country !== ""){
                event2Country = event2Country.toLowerCase().trim();
               }

              var event2Progress = $('<div class="program-bar__hatched_inset" />');

              var event2ProgressLabel = $('<p class="program-bar__label" />');

              var event2ProgressLabelCopy = $('<span class="program-bar__copy" />');


              if(event2Copy !== ""){
                  event2ProgressLabelCopy.text(event2Copy);
                    event2ProgressLabel.addClass("is-on-indicator is-single-event");
              }else if(event2Country !== ""){
                 event2Country = event2Country.toLowerCase().trim();
                event2ProgressLabelCopy.text("In " + countries[event2Country]+ " " + event2Starts.getDate() +  (event2Ends.getMonth() != event2Starts.getMonth()?" " + monthNames[event2Starts.getMonth()] + " ":"") + " - "  + event2Ends.getDate() + " " + monthNames[event2Ends.getMonth()]);
                 var event2ProgressLabelFlag = $('<span class="flag" />');
                 event2ProgressLabelFlag.addClass("flag-"+event2Country);
                 event2ProgressLabel.addClass("has-flag");
                 event2ProgressLabel.append(event2ProgressLabelFlag);
              }else{
                  event2ProgressLabel.addClass("is-on-indicator is-single-event");
                event2ProgressLabelCopy.text(event2Copy + " " + event2Starts.getDate() + " " + monthNames[event2Starts.getMonth()] );
              }


              barRange.append(event2Progress);


              event2ProgressLabel.append(event2ProgressLabelCopy);
              legend.append(event2ProgressLabel);


            }

          }

        }






        }else{


          if(applicationCloses === ""){

            var appProgressLabel = $('<p class="program-bar__label is-open" />');
            appProgressLabel.text("Open for applications");
            legend.append(appProgressLabel);
          }else{
             var appProgressLabel = $('<p class="program-bar__label is-closed" />');
              destination.addClass("is-closed");
              appProgressLabel.text("Closed for applications, " + applicationReopeningCopy);
            legend.append(appProgressLabel);
          }


        }
        //populate positions
        enquire.register( Utils.mediaQuery(Breakpoint.large), {
            match : function() {


              setTimeout(function(){

                if(applicationCloses !== "" && applicationReopeningCopy === "" ){
                  if(curDate > applicationCloses){//application is closed

                    curProgress.css("width", applicationEndPercent + "%");

                    destination.addClass("is-closed");

                  }else{

                    if(curDate >= applicationOpens){

                      var todayPercent = (curDate - applicationOpens)*maxPercent/fullPeriod;
                      curProgress.css("width", todayPercent + "%");
                    }

                    appProgress.css("width", applicationEndPercent + "%");
                    appProgressLabel.css("max-width", applicationEndPercent + "%");


                  }

                  appDeadline.css("left", applicationEndPercent + "%");
                  appDeadlineLabel.css("left", applicationEndPercent + "%");
                  if(!event1)
                    appDeadlineLabel.css("max-width", (100 - applicationEndPercent) + "%");


                  if(event1){


                      if(event1Ends === ""){

                          ocasion1Progress.css("left",  maxPercent + eventWidth + "%");

                          ocasion1Label.css("left",  maxPercent + eventWidth + "%");

                          ocasion1Label.css("max-width", eventWidth + "%");

                      }else{

                        event1EndProgress = (event1Ends - applicationOpens)*maxPercent/fullPeriod;


                        event1Progress.css("left",  maxPercent + eventWidth + "%");
                        event1Progress.css("width", (eventWidth - 5) + "%");

                        event1ProgressLabel.css("left",  maxPercent + eventWidth + "%");
                        event1ProgressLabel.css("max-width", eventWidth + "%");

                      }
                      appDeadlineLabel.css("max-width", eventWidth + "%");

                      if(event2){


                      if(event2Ends === ""){

                          ocasion2Progress.css("left",  maxPercent + eventWidth*2 + "%");

                          ocasion2Label.css("left",  maxPercent + eventWidth*2 + "%");

                          ocasion2Label.css("max-width", eventWidth + "%");

                      }else{




                        event2Progress.css("left",  maxPercent + eventWidth*2 + "%");
                        event2Progress.css("width", (eventWidth - 5) + "%");

                        event2ProgressLabel.css("left",  maxPercent + eventWidth*2 + "%");
                        event2ProgressLabel.css("max-width", eventWidth + "%");

                      }

                  }
                  }

                }
                else{
                  curProgress.css("width", "100%");
                  curProgress.css("border-radius", "3px");

                }
              }, 200);


            },
            unmatch : function() {
                $(".program-bar__label").css({"max-width": "100%", "left": 0});
            }
          });

}


$(document).ready(function () {
    // check if touch events are active
    $window = $(window);
    var isLegacy = $('.lt-ie9').length;
    var root = $('html, body');
    var sidebarleft = $('.column-left');
    var sidebarRight = $('.column-right');
    var sidebarLeftNarrow = $('.column-left_narrow');
    var sidebarRightWide = $('.column-right_wide');
    var overflowedContent = $('.overflowed-content');
    var moduleHeader = $('.module-page-header');
    var moduleText = moduleHeader.find('.text');
    var currentId = moduleHeader.attr('data-page_id') || "";
    var loginLinkUrl = moduleHeader.attr('data-login_link') || "";
    var loginLinkTitle = moduleHeader.attr('data-login_title') || "";
    var featuredName = moduleHeader.attr('data-featured_asset_name')|| "";
    var featuredUrl = moduleHeader.attr('data-featured_asset_url') || "";
    var featuredImage = moduleHeader.attr('data-featured_asset_image') || "";

    var pageType = moduleHeader.attr("data_page-type") || "";

    var heroSplit = moduleHeader.attr("data-background_split") || "";
    var heroImage = moduleHeader.attr("data-background_image")|| "";
    var heroColour = moduleHeader.attr("data-background_colour")|| "";

    var heroLogo1Image = moduleHeader.attr("data-background_logo1_image")|| "";
    var heroLogo1Title = moduleHeader.attr("data-background_logo1_title")|| "";
    var heroLogo1URL = moduleHeader.attr("data-background_logo1_url");


    var heroLogo2Image = moduleHeader.attr("data-background_logo2_image")|| "";
    var heroLogo2Title = moduleHeader.attr("data-background_logo2_title")|| "";
    var heroLogo2URL = moduleHeader.attr("data-background_logo2_url")|| "";

    $('.module-content a:not([href])').addClass('no-href');

    if(heroSplit){
     // console.log("split");
      moduleHeader.css("background-image", "none");
      moduleHeader.addClass("is-split");
      moduleHeader.append($("<img src='"+ heroImage +"' class='trade-mission-header__cover'  alt='" + moduleHeader.find("h1").text() +"'/>"));
    }else{
        //console.log("no split");
    }

    // if full width image or colour applied then apply branding below breadcrumbs on narrow screens
    if((heroImage && !heroSplit) || heroColour){
        moduleHeader.css({"background-size": "cover", "background-position": "center top"});

        // push background up under breadcrumbs on mobile
        var bread = $('.module-breadcrumbs');
        var isCheckingCrumbs,
            crumbHeight;

        // push background up under breadcrumbs on mobile
        var drawCrumbs = function() {
            if (isCheckingCrumbs) {
                crumbHeight = bread.outerHeight();
                moduleHeader.css('padding-top', crumbHeight);
                bread.css({'margin-bottom': crumbHeight * -1, 'background': 'none transparent'});
            }
        }

        enquire.register( Utils.mediaQuery(0, Breakpoint.medium), {
            match : function() {
                // apply top padding and margins so header site under breadcrumbs
                isCheckingCrumbs = true;
                drawCrumbs();
            }, unmatch : function() {
                // reset styles
                isCheckingCrumbs = false;
                moduleHeader.css('padding-top', '');
                bread.css('margin-bottom', '');
            }
        });

        drawCrumbs();
        $window.smartresize(drawCrumbs);
    }

    if(heroColour) {
        enquire.register( Utils.mediaQuery(0, Breakpoint.medium), {
            match : function() {
                $('.module-breadcrumbs').css('background-color', heroColour);
            }, unmatch : function() {
                $('.module-breadcrumbs').css('background-color', '');
            }
        });
    }

    if(heroLogo1Image && heroLogo1Title && heroLogo1URL){

      moduleHeader.addClass("has-logos");
      moduleHeader.find(".text").append($('<a title="' + heroLogo1Title + '" href="'+ heroLogo1URL+'" class="trade-mission-header__logo_left"><img src="'+heroLogo1Image +'" alt="'+ heroLogo1Title +'"></a>'));
    }

    if(heroLogo2Image && heroLogo2Title && heroLogo2URL){

      moduleHeader.addClass("has-logos");
      moduleHeader.find(".text").append($('<a title="' + heroLogo2Title + '" href="'+ heroLogo2URL+'" class="trade-mission-header__logo_right"><img src="'+heroLogo2Image +'" alt="'+ heroLogo2Title +'"></a>'));
    }





    // inject timeline if present
    $(".program-bar").present(function(bar, $){

      bar.each(function(){

          injectTimeline($("#_content"), $(this))

      });
    });



    // ensure that wide columns arent inside overflowed content
    $('.overflowed-content').present( function (numbered, $) {
        // overflowedContent.find('.column-full').detach().insertAfter(overflowedContent);
    });

    // number headings on detail sub page
    $('.numbered').present( function (numbered, $) {
        var headingCount = 1;

        numbered.find('h2').each(function(){
            $(this).prepend('<span class="numbered__count">' + headingCount + '</span>');
            headingCount++;
        });

        var applyLink = $('.overflowed-content').find('.apply-link');
        var savedLink = $('.overflowed-content').find('.saved-link');
        applyLink.appendTo(numbered);
        savedLink.appendTo(numbered);
    });

    $('.grants-list div > .grants-results-item').present( function (grantsItems, $) {
        grantsItems.unwrap();
    });

    $('.checked-criteria').present( function (checkedCriteria, $) {
        checkedCriteria.find('li').each(function() {
            // construct collapsible content
            var checkedContent = $(this).find('em').wrapInner('<span class="checked-criteria__content"></span>').contents().unwrap();
            var foundToggle = checkedContent.length;

            $(this).wrapInner('<span class="checked-criteria__title"></span>');
            checkedContent.detach().appendTo($(this)).wrapInner('<p></p>');

            if (foundToggle) {
                var checkedToggle = '<a href="#" class="checked-criteria__toggle">More details</a>';
                var checkedTitle = $(this).find('.checked-criteria__title');
                $(checkedToggle).insertAfter(checkedTitle);
                checkedTitle.addClass('is-toggle');
            }
        });

        // make collapsible
        $('.checked-criteria__toggle, .checked-criteria__title').on('click', function(e) {
            e.preventDefault();
            if ($(this).hasClass('checked-criteria__toggle')) {
                $(this).toggleClass('is-open');
            } else {
                $(this).siblings('.checked-criteria__toggle').toggleClass('is-open');
            }
            $(this).siblings('.checked-criteria__content').slideToggle();
        });
    });

    $('.program-expect.is-visible').present( function (expectFrame, $) {
        // TODO this code needs some optimisation
        var expectList = expectFrame.find('ol');
        var expectWidth,
            expectLabelWidth;

        expectList.addClass('program-progress__legend').wrap('<div class="program-progress"></div>');

        var expectItems = expectList.find('li');
        var progressFrame = $('.program-progress');
        progressFrame.prepend('<div class="program-progress__range"></div>');

        var progressArrow = $('.program-progress__arrow');

        expectItems.addClass('program-progress__label').each(function() {
            $(this).find('em').wrapInner('<span class="program-progress__state"></span>').contents().unwrap();
        });

        // set arrow position (to first step)
        expectWidth = 100 / expectItems.length;
        expectLabelWidth = 100 / expectItems.length - 5

        for (var i = 1; i < expectItems.length; i++ ) {
            var arrowW,
                arrowX,
                arrowA,
                arrowZ;

            if (i > 1) {
                arrowW = expectWidth;
                arrowX = (i - 1) * expectWidth - 5;
            } else {
                arrowW = expectLabelWidth;
                arrowX = (i - 1) * expectWidth;
            }
            arrowA = (100 - (expectWidth * (i - 1))) / 100 - (i - 1) * 0.05;
            arrowZ = 30 - i;

            $('.program-progress__range').append('<div class="program-progress__arrow" style="width: ' + arrowW + '%; left: ' + arrowX + '%; opacity: ' + arrowA + '; z-index: ' + arrowZ + '"></div>');
        }

        // respond nicely
        enquire.register( Utils.mediaQuery(Breakpoint.large), {
            match : function() {
                expectItems.css('width', expectLabelWidth + "%");
            }, unmatch : function() {
                expectItems.css('width', '');
            }
        });

        enquire.register(Utils.mediaQuery(0, Breakpoint.medium), {
            unmatch : function() {
                expectItems.css('width', '');
            }
        });

        enquire.register(Utils.mediaQuery(Breakpoint.small), {
            match : function() {
                expectItems.css('width', expectLabelWidth + "%");
            }, unmatch : function() {
                expectItems.css('width', '');
            }
        });
    });



    $('.program-steps').present( function () {
        var programStep = $('.program-steps__step');

        for (var i = 0; i < programStep.length; i++ ) {
            $(programStep[i]).find('.program-steps__title').prepend("<span class='program-steps__count'>" + (i + 1) + "</span> " );
        }
    });

    $('.related__categories').present( function (relatedCategories, $) {
        var content = $('.module-content');
        var columnRight = content.find('.column-right');
        var secondLevel = relatedCategories.find('li > ul');
        var relatedPages = relatedCategories.find('li');

        // Move it to sidebar
        relatedCategories.detach().prependTo(columnRight);
        relatedCategories.prepend('<h2>Read more about this program</h2>');

        secondLevel.addClass('related__sub-category').parent().addClass('related__category-parent');
        secondLevel.siblings('a').addClass('related__category-title');
        // secondLevel.siblings('a').find('.related__category-title').unwrap();

        // var categoryToggle = $('.related__category-title');

        // categoryToggle.on('click', function(e) {
        //     e.preventDefault();
        //     $(this).closest('.related__category-parent').toggleClass('is-expanded').find('.related__sub-category').slideToggle(400, function() {
        //         $window.trigger("resize");
        //     });
        // });

        // selected state
        relatedPages.each(function() {
            if ($(this).attr('data-page_id') == currentId) {
                $(this).addClass('is-active');

                // if ($(this).parent().closest('li').length) {
                //     $(this).closest('.related__category-parent').toggleClass('is-expanded').find('.related__sub-category').show(0);
                //     $window.trigger("resize");
                // }
            }
        });
    });




    $('.thumb-list').present( function (thumbList, $) {
        $('.thumb-list img').one('load', function() {
            thumbList.each(function() {
                $(this).find('li').matchHeight(false);
            });
        }).each(function() {
            if(this.complete) $(this).load();
        });
    });


    $('.program-rating').present(function(programRating, $) {
        programRating.siblings(':first-child').append('<span class="program-rating__explain-indicator">?<span class="program-rating__explain-copy">Measures your likelihood of acceptance. A low rating indicates a 100% acceptance rate. A high rating indicates less than 5% acceptance rate.</span></span>');
    });

    $('.quick-view').present( function (quickView, $) {
        var quickViewOverlay = $('.quick-view__overlay');
        var quickViewScroll = $('.quick-view__scroll');
        var quickViewContent = $('.quick-view__content');
        var quickViewFooter = $('.quick-view__footer');
        var quickViewOverview = quickViewContent.find('.quick-view__overview');
        var quickViewValue = quickViewContent.find('.program-value');
        var quickViewEligibility = quickViewContent.find('.program-eligibility');
        var quickViewGlance = quickViewContent.find('.program-glance');
        var quickViewFooter = quickView.find('.quick-view__footer');

        var quickViewBar = quickViewContent.find('.program-bar');

        var quickViewButton = quickViewContent.find('.button-heavy');
        var windowHeight,
            frameHeight;

		var quickViewRemodal = $.remodal.lookup[$('[data-remodal-id=modal]').data('remodal')];

        // show quickview
        $('.js-quickview').on('click touchstart', function(e) {
            // // if quickview is bigger than window sstart it at top of screen
            var parentItem = $(this).closest('.grants-results-item, .awards-stack__item, .trade-missions-stack__item');
            _populateFields(parentItem);
            // _getFrameSizes();
            // _setTopOffset();
            // _sizeModal();
            $window.trigger('resize');

			quickViewRemodal.open();
			console.log(quickViewRemodal);
            e.preventDefault();

            $('.quick-view').attr("tabindex",-1).focus();
            // quickViewOverlay.removeClass('is-hidden');

            // setTimeout(function() {
            //     quickView.fadeIn(500, function() {
            //         // delay timeline animation
            //         quickView.removeClass('is-holding-animation');
            //     });
            // }, 30);
        });

        // hide quickview
        $('.quick-view__close, .quick-view__overlay').on('click touchstart', function(e) {
            e.preventDefault();

			quickViewRemodal.close();

            setTimeout(function() {
                // quickViewOverlay.addClass('is-hidden');

                // quickView.fadeOut(500, function() {
                    // quickView.addClass('is-holding-animation');
                    _emptyFields();
                // });
            }, 100);
        });

        function _emptyFields(item) {
            quickViewBar.empty();

            quickViewOverview.html("");

            quickViewEligibility.html("");
            quickViewEligibility.removeClass("is-visible");

            quickViewValue.html("");
            quickViewValue.removeClass("is-visible");

            quickViewFooter.html("");
            quickViewFooter.removeClass("is-visible");

            quickViewButton.attr('href', "");
        }

        // set contents of quickview
        function _populateFields(item) {

            var itemName = item.find('h3').text();


            var itemOverview = item.attr('data-overview') || "";
            var itemValue = item.attr('data-value') || "";
            var itemGlance = item.attr('data-at_a_glance') || "";
            var itemEligibility = item.attr('data-eligibility') || "";
            var itemUrl = item.attr('data-asset_url') || "";
            var itemContact = item.attr('data-asset_contact') || "";

            quickViewBar.empty();
            injectTimeline(item,quickViewBar);

            quickViewOverview.html(itemOverview);
                        console.log(quickViewOverview);

            var overviewHeading = quickViewOverview.find('h3:first-child, h2:first-child').text();
            quickViewOverview.find('h3:first-child, h2:first-child').remove();
            quickViewOverview.prepend('<h3>' + itemName + '</h3><h5>' + overviewHeading + '</h5>');
            quickViewOverview.find('p > img').unwrap();
            quickViewOverview.find('img').remove();

            if(itemEligibility.length !== 0){
              quickViewEligibility.html(itemEligibility);
              quickViewEligibility.addClass("is-visible");
            }
            if(itemValue.length !== 0){
              quickViewValue.html(itemValue);
              quickViewValue.addClass("is-visible");
            }
           // console.log("contact" + item.attr('data-asset_contact'));

            if(itemContact.length !== 0){
              quickViewFooter.html(itemContact);
              quickViewFooter.addClass("is-visible");
            }

            urlifyInPageLinks(quickViewContent, itemUrl);
            quickViewButton.attr('href', itemUrl);
        }

        function urlifyInPageLinks(content, url) {
          var anchors = $(content).find('a[href^="#"]');
          // console.log(anchors);
          anchors.each(function() {
            var href = $(this).attr('href');

            $(this).attr('href', url + href);
            // console.log("ehdwjhkh: " + url + href)
          });
        }

        // function _getFrameSizes() {
        //     windowHeight = $window.height();
        //     frameHeight = quickView.outerHeight();
        //     // console.log("wh: " + windowHeight);
        //     // console.log("fh: " + frameHeight);
        // }

        // function _setTopOffset() {
        //     var setTopOffsetset = -1 * quickView.parent().offset().top;
        //     quickView.css('top', setTopOffsetset);
        // }

        // var offset,
        //     scrollY;

        // // Do the sticky thing
        // function _sizeModal() {
        //     quickView.css('height', '');
        //     _getFrameSizes();

        //     // if quickview is bigger than window
        //     if (offset < 0) {
        //         quickView.css('height', windowHeight);
        //         offset = 0;
        //     } else {
        //         quickView.css('height', '');
        //     }
        // }

        // function _posModal() {
        //     scrollY = $window.scrollTop();
        //     offset = (windowHeight - frameHeight) / 2;
        //     _translate(Math.round(scrollY + offset));
        // }

        // // Calculate the position
        // function _translate(y) {
        //     // Invoke only at large breakpoint
        //     if ($('.csstransforms').length) {
        //         quickView.css("transform", "translate(0," + y + "px)");
        //         quickView.css("-ms-transform", "translate(0," + y + "px)");
        //     } else {
        //         quickView.css("margin-top", y + "px");
        //     }
        // }

        // $window.smartresize(function () {
        //     _getFrameSizes();
        //     _setTopOffset();
        //     _posModal();
        //     _sizeModal();
        //     _translate(Math.round(scrollY + offset));
        // });

        // $window.scroll(function () {
        //     _getFrameSizes();
        //     _posModal();
        // });

        // _sizeModal();
        // _posModal();
        // _setTopOffset();
    });

    $('body:not(.section-event-calendar-festival-landing) .landing-category-set').present( function (landingCategorySet, $) {
        landingCategorySet.detach().prependTo(overflowedContent);

        var landingCategory = landingCategorySet.find('.landing-category');

        // enquire.register( Utils.mediaQuery(Breakpoint.xsmall), {
        //     match : function() {
        //         landingMinHeight();
        //     }, unmatch : function() {
        //         landingCategory.css('min-height', 0);
        //     }
        // });

        var renderCategories = function() {
            enquire.register( Utils.mediaQuery(0, Breakpoint.xlarge), {
                match : function() {
                    landingMinHeight();
                }, unmatch : function() {
                    landingCategory.css('min-height', '');
                }
            });
        };

        function landingMinHeight() {
            var minH = landingCategory.not('.has-image').find('.landing-category__description').outerHeight();

            $('.landing-category').css('min-height', minH);
        };

        landingCategory.matchHeight(false);

        $window.smartresize(renderCategories);
        renderCategories();

        if (isLegacy) {
            // bgsize isn't supported, so add image
            landingCategory.each(function() {
                var imgSrc = $(this).attr('data-image-url');
                var imgAlt = $(this).attr('data-image-alt');
                var imgTitle = $(this).find('.landing-category__title').text();
                $(this).prepend('<img src="' + imgSrc + '" alt="' + imgAlt + '" title="' + imgTitle + '" />');
            });
        }
    });

    $('.js-carousel').present( function (carouselSource, $) {
        carouselHolder = $('.carousel-holder');

        // scaffold carousel wrapper & pagination
        carouselHolder.addClass('is-visible').append('<div id="carousel-wrapper" class="js-carousel-awards"><div class="carousel-pagination"><a href="#" class="carousel-pagination__prev">&lsaquo; Previous image</a><div class="carousel-pagination__count"></div><a href="#" class="carousel-pagination__next">&rsaquo; Next image</a></div><div id="carousel"></div></div>');
        // populate with frames
        carouselSource.find('.js-carousel__item').each(function(){
            if(!$(this).find('.img-caption').length ){
              $(this).append('<p class="img-caption">&nbsp;</p>');
            }
            $(this).detach().appendTo('#carousel').wrap('<span></span>').find('img').unwrap();

        });

        // remove source scraps
        carouselSource.unwrap().remove();
        // re-init slider now that markup is built
        initSliders();

        // var captionExists = carouselHolder.find('.img-caption').length;

        // if (!captionExists) {
        //     $('#carousel').find('span').append('<p class="img-caption">&nbsp;</p>');
        // }
    });

    // re-unwrap images inside program overview (squiz adds a p for no good reason)
    $('.program-overview').present( function (overview, $) {
        overview.find('p > img').unwrap();
    });

    // re-unwrap images inside program overview (squiz adds a p for no good reason)
    $('.markets').present( function (markets, $) {
        markets.wrap('<div class="column-full"></div>').detach().insertAfter('.grants-hero');
    });



    $('.module-content').present( function (moduleContent, $) {
        var applyUrl = moduleContent.attr("data-info_apply_link") || "";
        var applyLink = $('.apply-link');
        if (applyUrl.length) {
            applyLink.attr("href", applyUrl);
        }
    });

    $('.grants-results-item, .awards-stack__item, .trade-missions-stack__item').present( function (listedItems, $) {

        // populate with open/closed fields
        listedItems.each(function(){


            // hub style & ordering
            if ($(this).attr('data-page_type') == "page-type__hub") {
                $(this).addClass('grants-results__breakout');
            }

            var statusText = "";
            var closeDate = $(this).attr("data-application_closes") || "";


            if(closeDate === ""){

              statusText = "ongoing";

             // console.log(statusText);
               $(this).find('.listing-title').after('<span class="grants-results-item__status">'+statusText+'</span>');
            }else{
              closeDate = new Date(closeDate);

              if ( Object.prototype.toString.call(closeDate) === "[object Date]"){

                if(closeDate < curDate){
                  statusText = "closed";
                 // console.log(statusText);
                  $(this).find('.listing-title').after('<span class="grants-results-item__status">'+statusText+'</span>');

                }else{
                  statusText = "open";
                 // console.log(statusText);
                   var days = Math.ceil((closeDate - curDate) / (1000 * 3600 * 24));
                   var closesText = "";

                   if(days == 0){
                      closesText = "Closes today";
                    }else if(days == 1){
                      closesText = "Closes in " + days + " day";
                    }else{
                      closesText = "Closes in " + days + " days";
                    }

                    $(this).find('.listing-title').after('<span class="grants-results-item__status">'+statusText+'</span><span class="grants-results-item__end-date">'+closesText+'</span>');
                }
              }else{
                console.log("invalid date format");
              }
            }

            $(this).addClass('is-' + statusText.toLowerCase());



            // $(this).find('.grants-results-item__status').text(statusText);
            // $(this).find('.grants-results-item__end-date').text(closesText);




        });
    });

    setTimeout(function() {
        // scroll to page links and give focus
        $('a[href^="#"]').not('.date-picker-control').on('click',function (e) {
            var target = this.hash,
            $target = $(target);

            if ($target.length) {
                e.preventDefault();

                // animatedScrollTo($target.offset().top, 500, null, function() {
                //     window.location.hash = target;
                //     $target.focus();
                // });

        		var pageHeight = $('body').outerHeight();

        		if (pageHeight < 4000) {
        			// page isn't too big to animate reliably on old devices; animate
        			root.animate({
	                    scrollTop: $target.offset().top
	                }, 1000, function() {
	                    window.location.hash = target;
	                    $target.focus();
	                });
        		} else {
        			// page isn't too big to animate reliably on old devices; animate
        			root.scrollTop($target.offset().top);
        			window.location.hash = target;
	                $target.focus();
        		}


            }
        });
    }, 200);


    $('.page-type__grant-detail-sub').present( function (pageContent, $) {
        pageContent.find('.apply-link.button_generated').clone().appendTo('.program-overview');
        pageContent.find('.saved-link.button_generated').clone().appendTo('.program-overview');
    });

    $('.page-type__trade-mission').present( function (pageContent, $) {
        pageContent.find('.apply-link.button_generated').clone().appendTo('.program-glance');
        pageContent.find('.saved-link.button_generated').clone().appendTo('.program-glance');
    });

    // append login link at the end
    if (loginLinkUrl.length && loginLinkTitle.length) {
        moduleText.append('<a href="' + loginLinkUrl + '" class="my-login">' + loginLinkTitle + ' <span class="my-login__carat-icon">›</span></a>')
    }

    // append featured trade mission if present at the end
    if (featuredName.length && featuredUrl.length && featuredImage.length) {
        moduleHeader.addClass('has-narrow-text');
        moduleText.append('<div class="header-link"><a href="' + featuredUrl + '">' + featuredImage + '</a><p>Featured: <br><a href="' + featuredUrl + '">' + featuredName + '</a></p></div>')
    }

    $('.awards-stack__item:not(.featured), .trade-missions-stack__item').present( function (items, $) {
          var container = $(items[0]).parent();
        items.each(function(index, obj){
            // @kirill find way to make these stay up for 2 weeks

            console.log(index);
            if($(this).hasClass("awards-stack__item")){//awards hide if two weeks passed
              if ($(this).hasClass("is-closed")) {
                  var closeDate = $(this).attr("data-application_closes") || "";
                  if(closeDate.length !== 0){

                     closeDate = new Date(closeDate);
                      if ( Object.prototype.toString.call(closeDate) === "[object Date]"){
                        var days = Math.ceil((curDate - closeDate) / (1000 * 3600 * 24));

                        if(days >= 14){
                             $(this).addClass("is-hidden");
                        }
                      }else{
                        console.log("invalid date format");
                      }
                  }

              }
            }else if( $(this).parent().hasClass('is-past')){
                if (!$(this).hasClass("is-closed")) {
                   $(this).addClass("is-hidden");

                }
            }else{
              if ($(this).hasClass("is-closed")) {
                $(this).addClass("is-hidden");

              }
            }
        });
      items = items.not(".is-hidden");
      container.find(".is-hidden").remove();
      reorder(container, items);

    });



    $('.thumbnails').present( function (thumbnails, $) {
        thumbnails.find('img').each(function(){
            $(this).nextUntil('img').wrapAll('<li></li>');
            $(this).next('li').prepend($(this));
        });

        thumbnails.wrapInner('<ul class="thumb-list"></ul>');

        thumbnails.find('li').each(function() {
            var anchor = $(this).find('a').clone();
            anchor.addClass('thumb-list__thumb-link').text('');
            $(this).find('img').wrap(anchor);
        });
    });

    $('.grants-search').present( function (grantsSearch, $) {
       // var grantsSearch = $('.grants-search');
        var clearSearch = $('.js-clear-inputs');
        var searchToggle = $('.grants-search__toggle');
        var searchRefine = $('.grants-search__refine');
        var searchToggleText = $('.grants-search__visibility');
        var isLegacy = $('.lt-ie9').length > 0;
        var timer = 0;
        var items  = $(".grants-results-item");
        var checksAndRadios = grantsSearch.find("input[type=checkbox], input[type=radio]");


        moduleText.append('<span class="go-to-search js-scroll-to-search">Search for assistance</span>');

        $('.related').addClass('related_fixed');


        // move into sidebars
        $('.grants-list').detach().prependTo(sidebarRightWide);
        grantsSearch.detach().prependTo(sidebarLeftNarrow);
        $('.column-left .contact').detach().appendTo(sidebarLeftNarrow);

        var text = "";

        for(var i=0; i < items.length; i++){

            text += $(items[i]).find("h4").text() + " " + $(items[i]).find("p").text() + " ";
        }
        text = text.toLowerCase().replace(/[^\w\s]/gi, '').trim();




        var words = text.split(/\s+/).sort().filter( function(v,i,o){return v!==o[i-1];});

        // console.log(words);

       // var submitButton = $('#grants_search_submit');
        console.log('ichecks init');

        grantsSearch.find('input').icheck({
          cursor: true
        });

        $('grants-search__refine label').each(function() {
            $(this).contents().filter(function(){
                return this.nodeType === 3;
            }).wrap('<span aria-hidden="true" aria-presentation="true"></span>');
        });

        // grantsSearch.find('select').chosen({disable_search_threshold: 20});

        // TODO add dynamically to section landing page
        // <span class="go-to-search js-scroll-to-search">Seach for assistance</span>
        var scrollToSearch = $('.js-scroll-to-search');

        clearSearch.on('click',function(e) {
            e.preventDefault();
            $(this).closest('fieldset').find('input[type=checkbox], input[type=radio]').icheck('unchecked');
            $(this).slideUp();
        });



        scrollToSearch.on('click', function() {
            var searchTop = grantsSearch.offset().top;
            root.animate({
                scrollTop: searchTop
            }, 500, function() {
                grantsSearch.find('.keyword input[type=search]').focus();
            });
        });

        grantsSearch.find("input[type=search]").autocomplete({
            // local autosugest options:
            lookup: words, //local lookup values
            minChars:3,
            onSelect: function(value, data){  search(grantsSearch, items, $('#queries_keywords_query')); }
        });

        grantsSearch.submit(function(event){

            event.preventDefault();

            search(grantsSearch, items, $('#queries_keywords_query'));

        });

          //console.log(grantsSearch.find("input[type=checkbox], input[type=radio], select"));
        checksAndRadios.on('ifChanged', function(e){
           // console.log("Search onCahnge");
          search(grantsSearch, items, $(this));
           if($(this).closest('fieldset').find("input[type=checkbox]:checked, input[type=radio]:checked").length === 0){
            $(this).closest('fieldset').find(".js-clear-inputs").slideUp();
           }else{
            $(this).closest('fieldset').find(".js-clear-inputs").slideDown();
           }
        });


        grantsSearch.find("select").on('change',function(){
         //  console.log("Search onCahnge");
             search(grantsSearch, items, $(this));
        });

        grantsSearch.find("input[type=search]").keypress(function () {
            clearTimeout(timer); // Clear the timer so we don't end up with dupes.
            timer = setTimeout(function() { // assign timer a new timeout
              search(grantsSearch, items, $('#queries_keywords_query'));

            }, 500); //
        });

        grantsSearch.find("input[type=search]").keydown(function (e) {
            if(e.keyCode==8) // backspace
                grantsSearch.find("input[type=search]").trigger('keypress');
        });

        search(grantsSearch, items, $(this));

        searchToggle.on('click', function() {
            searchRefine.slideToggle();

            var text = searchToggleText.text();
            searchToggleText.text(text == "Show" ? "Hide" : "Show");
        });

        $('.grants-hero.is-visible, body:not(.section-event-calendar-festival-landing) .landing-category-set').present( function (markets, $) {
          setTimeout(function(){
             $('.column-right_wide').append('<a href="#" class="grants-load-more"> Show more</a>');
            $('.column-right_wide').append("<p class='cant-find'>Can't find what you're looking for? <a href='http://www.business.vic.gov.au/support-for-your-business#grants-meta'>View all Grants and assistance</a></p>");

          }, 1000);

          $(".column-right_wide").on("click", ".grants-load-more", function(e){
              e.preventDefault();
              showCount++;
              search(grantsSearch, items, $('#queries_keywords_query'), false);
              // remove focus from button
              $('.grants-load-more').blur();

          });
        });
    });


    // wide contact point style
    $('.overflowed-content .column-right_wide .contact').present( function (contactPoint, $) {
        contactPoint.addClass('contact_wide');
    });

    // main content contact point style
    $('.overflowed-content .column-left .contact').present( function (contactPoint, $) {
        if (contactPoint.is(':last-child')) {
            contactPoint.addClass('contact_slim');
        } else {
            contactPoint.addClass('contact_wide');
        }
    });

    // narrow contact point style
    $('.overflowed-content .column-right .contact').present( function (contactPoint, $) {
        contactPoint.addClass('contact_slim');
    });

    // $('.overflowed-content .contact').present( function (contactPoint, $) {
    //     contactPoint.find('a').attr('href', 'http://www.business.vic.gov.au/contact-us');
    // });

    $('.grants-results-item.has-cover, .awards-stack__item.has-cover, .trade-missions-stack__item.has-cover').present( function (items, $) {
        enquire.register( Utils.mediaQuery(Breakpoint.small), {
            match : function() {
                items.find('img').on('load', function() {
                    // console.log('match small');
                    items.matchHeight(true);
                }).each(function() {
                    if(this.complete) $(this).load();
                });

            }, unmatch : function() {
                // console.log('unmatch small');
                items.matchHeight('remove');

            }
        }).register( Utils.mediaQuery(Breakpoint.medium), {
            match : function() {
                // console.log('match medium');
                items.matchHeight('remove');

            }, unmatch : function() {
                items.find('img').on('load', function() {
                    // console.log('unmatch medium');
                    items.matchHeight(true);
                }).each(function() {
                    if(this.complete) $(this).load();
                });
            }
        });
    });


  // remove redundant content (including empty headings)
  if (!$('.grants-hero').hasClass('is-visible')) {
    $('.grants-hero').remove();
  }

  // change text of awards page buttons
  if ($('.module-content').hasClass('page-type__award')) {
      $('.grants-hero__description.is-visible .button-heavy_large').text("View Award");
  }

  //for simple content pages with just one heading
  if ($('.module-page-header .text h2:empty').is(':empty')) {
      $('.module-page-header .text h2').remove();
      $('.module-page-header .text').addClass('simple-page');
  }

  // $('.trade-missions-stack__item').present( function (tradeMission, $) {
  //   tradeMission.unwrap();
  // });

});

var global = global || {}; //namespace

global.preg_quote =  function( str ) {

	return (str+'').toString().replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
};

global.highlight =  function( data, search ) {
	return data.toString().replace( new RegExp( "(" + global.preg_quote( search ) + ")" , 'gi' ), "<strong>$1</strong>" );
};

global.formatedDate = function(d){

	var d_names = new Array("Sunday", "Monday", "Tuesday",
"Wednesday", "Thursday", "Friday", "Saturday");

var m_names = new Array("January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "December");

var curr_day = d.getDay();
var curr_date = d.getDate();

var sup = "";
if (curr_date == 1 || curr_date == 21 || curr_date ==31)
	 {
	 sup = "st";
	 }
else if (curr_date == 2 || curr_date == 22)
	 {
	 sup = "nd";
	 }
else if (curr_date == 3 || curr_date == 23)
	 {
	 sup = "rd";
	 }
else
	 {
	 sup = "th";
	 }



var curr_month = d.getMonth();
var curr_year = d.getFullYear();

return d_names[curr_day] + " " + curr_date /*+ sup*/ + " " + m_names[curr_month] + " " + curr_year;


};

global.parseISO8601 = function(dateStringInRange) { //YYYY-MM-DD to Date IE copatible
		var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
				date = new Date(NaN), month,
				parts = isoExp.exec(dateStringInRange.substring(0,10));

			//  console.log(parts);

		if(parts) {
			month = +parts[2];
			date.setFullYear(parts[1], month - 1, parts[3]);
			if(month != date.getMonth() + 1) {
				date.setTime(NaN);
			}
		}
		return date;
	}
//2015-02-03T22:00:00.000+0000
	global.parseISO8601WithTimezones = function(dateStringInRange) { //YYYY-MM-DD to Date IE copatible
		var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)T(\d\d)\s*$/,
				date = new Date(NaN), month,
				parts = isoExp.exec(dateStringInRange.substring(0,13));

			//  console.log(parts);

		if(parts) {
			month = +parts[2];
			date.setFullYear(parts[1], month - 1, parts[3]);
			if(month != date.getMonth() + 1) {
				date.setTime(NaN);
			}
		}

		date.setHours(parts[4]);

		var daylightStart =  new Date(15,9,4);

		var daylightEnd =  new Date(15,4,4);

		daylightStart.setFullYear(date.getFullYear());
		daylightEnd.setFullYear(date.getFullYear()+1);

		if(date > daylightStart && date < daylightEnd){
			date.setHours(date.getHours() +11);//timezone
		}else{
			date.setHours(date.getHours() +10);
		}

		//console.log(date);


		return date;
	}


	global.parseISO6666 = function(dateStringInRange) { //DD/MM/YYYY to Date IE copatible
		var isoExp = /^\s*(\d\d)\/(\d\d)\/(\d{4})\s*$/,
				date = new Date(NaN), month,
				parts = isoExp.exec(dateStringInRange.substring(0,10));

			//  console.log(parts);

		if(parts) {
			month = +parts[2];
			date.setFullYear(parts[3], month - 1, parts[1]);
			if(month != date.getMonth() + 1) {
				date.setTime(NaN);
			}
		}
		return date;
	}

global.rad = function(x) {
	return x * Math.PI / 180;
};

global.getDistance = function(p1, p2) {
	var R = 6378137; // Earth’s mean radius in meter
	var dLat = global.rad(p2.lat - p1.lat);
	var dLong = global.rad(p2.lng - p1.lng);
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	Math.cos(global.rad(p1.lat)) * Math.cos(global.rad(p2.lat)) *
	Math.sin(dLong / 2) * Math.sin(dLong / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return d; // returns the distance in meter
};


global.formatAMPM = function(date) {

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;

};


global.createCookie = function(name,value,days) {

		if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
};

global.readCookie =  function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
};

global.eraseCookie =  function (name) {
		createCookie(name,"",-1);
};

global.truncateText = function(text, length){
	var length = length || 160;
	var res = text;
	if(text && text.length > length){
			var pos = text.indexOf(" ", length);
			if(pos !== -1){
					res =  text.substring(0, pos) + " &hellip; ";
			}
	}

	return res;
};


global.getParameterByName = function(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


var events = events || {};

events.latitude = "";
events.longitude = "";
events.mapContainer = "";
events.host="";
events.mapMarker="";

events.topics = [];


events.showCount = 1;
events.dataLoaded = 0;

events.itemsOnPage = 10;


events.container = $('#events-list');
events.list = events.container.find("div.events-results-item");


events.callAjax = function(url, callback, element){ //async request
		var xmlhttp;
		// compatible with IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function(){
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && xmlhttp.responseText != "Error: 400"){
					var data = JSON.parse(xmlhttp.responseText);
					if(data && data.totalSize != 0 ){
							callback(data, element);
					}else{
						if(element.length){
              element.remove();
            }else{
               $(element).remove();
            }
					}
				}
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
};


events.getPrices = function(price1, price2, price3){


	var prices = {};

	if(!price1 || price1 == "0"){
		prices.free = true;
	}else if(price1 && !price2 && !price3){
				prices.onePrice = parseFloat(price1);
	}else if(price1 && price2 && !price3){
			var p1 = parseFloat(price1);
			var p2 = parseFloat(price2);

			if(p1 == p2){
				 prices.onePrice  = p1;
			}else if(p1 > p2){
				prices.max = p1;
				prices.min = p2;
			}else{
				prices.min = p1;
				prices.max = p2;
			}
	}else if(price1 && price2 && price3){
			var arr = [parseFloat(price1), parseFloat(price2), parseFloat(price3)];
			prices.max = 0;
			prices.min = 10000000;
			for (var i = 0; i < arr.length; i++) {

				if(arr[i] > prices.max){
					prices.max = arr[i];
				}

				if(arr[i] < prices.min){
					prices.min = arr[i];
				}
			};
			if(prices.min == prices.max){
				prices.onePrice = prices.min;
			}
	}else{
		prices.free = true;
	}
	return prices;

};

/*events.{"totalSize":1,"done":true,"records":[{"attributes":{"type":"Program_Event__c","url":"/services/data/v20.0/sobjects/Program_Event__c/a2EO00000002wv4MAA"},"Id":"a2EO00000002wv4MAA","Name":"Small Business Bus - Oakleigh","Topic__c":"Small Business Bus","Short_Description__c":"The Victorian Government's Small Business Bus provides free mentoring and face-to-face assistance to help you start or build your small business. The Small Business Bus is visiting all regions of Victoria in 2015. Book in now for your free one-on-one mentoring session to get your business moving.","Ticket_Class_1_Cost__c":0.0,"Venue_Street_Address__c":"1A Atherton Road","Venue_Name__c":"Outside the Police Station","Venue_Postcode__c":"3166","Venue_Suburb__c":"Oakleigh","Booking_Status__c":"Bookings Open","Event_ID__c":"E206","First_Session_Start_Date_Time__c":"2015-01-19T23:00:00.000+0000"}]}*/


// events.addUpcomingData = function(data, container){
// 	console.log(data);


// 	for (var i = 0; i < data.records.length && i < 5; i++) {


// 					var obj = data.records[i];

// 					if(obj.Id == events.eventPageContainer.attr("data-id")){
// 						continue;
// 					}

// 					var earliestDate = global.parseISO8601WithTimezones(obj.First_Session_Start_Date_Time__c);


// 					obj.Date = global.formatedDate(earliestDate);

// 					var price = obj.Ticket_Class_1_Cost__c;
// 					if(price == 0){
// 						obj.Price = "Free";
// 						obj.Free = "is-free";
// 					}else if(price != null){
// 						obj.Price = "$" + price;
// 						obj.Free  = "is-free-NOT";
// 					}else{
// 						obj.Price = "";
// 						obj.Free  = "is-free-NOT";
// 					}
// 					obj.Host = obj.Program_Event_Host__r.Name;
// 					obj.Short_Description__c = global.truncateText(data.records[i].Short_Description__c);

// 					obj.Address = obj.Venue_Name__c + " " + obj.Venue_Street_Address__c + " " + obj.Venue_Suburb__c + " " + obj.Venue_Postcode__c;


// 					var template = new Template('template-event-feed');
// 					var formsHTML = template.render(obj);
// 					container.find("ul").append(formsHTML);

// 			};
// 			if(data.records.length){
// 					container.removeClass('is-loading');
// 			}else{
// 				container[0].outerHTML="";
// 			}


// };

events.addRelatedEvent = function(data, container){
			//console.log(data);


			for (var i = 0; i < data.records.length && i < 5; i++) {


					var obj = data.records[i];

					if(obj.Id == events.eventPageContainer.attr("data-id")){
						continue;
					}

					var earliestDate = global.parseISO8601WithTimezones(obj.First_Session_Start_Date_Time__c);

				var latestDate = global.parseISO8601WithTimezones(obj.Last_Session_End_Date_Time__c);

					if(earliestDate.getDate() != latestDate.getDate()){
						obj.Date = global.formatedDate(earliestDate) + " - " + global.formatedDate(latestDate);;
					}else{
						obj.Date = global.formatedDate(earliestDate);
					}



					var price = obj.Ticket_Class_1_Cost__c;
					if(price == 0){
						obj.Price = "Free";
						obj.Free = "is-free";
					}else if(price != null){
						obj.Price = "$" + price;
						obj.Free  = "is-free-NOT";
					}else{
						obj.Price = "";
						obj.Free  = "is-free-NOT";
					}
					obj.Host = obj.Program_Event_Host__r.Name;
					obj.Short_Description__c = global.truncateText(data.records[i].Short_Description__c);

					obj.Address = obj.Venue_Name__c + " " + obj.Venue_Street_Address__c + " " + obj.Venue_Suburb__c + " " + obj.Venue_Postcode__c;


					var template = new Template('template-event-related');
					var formsHTML = template.render(obj);
					container.append(formsHTML);

			};
				if(data.records.length){
						container.removeClass('is-loading');
						container.show();
				}


};
events.addRecentEvent = function(data, container){
		 //console.log(data);

		var obj = data.records[0];

		var earliestDate = global.parseISO8601WithTimezones(obj.First_Session_Start_Date_Time__c);

		var latestDate = global.parseISO8601WithTimezones(obj.Last_Session_End_Date_Time__c);

					if(earliestDate.getDate() != latestDate.getDate()){
						obj.Date = global.formatedDate(earliestDate) + " - " + global.formatedDate(latestDate);;
					}else{
						obj.Date = global.formatedDate(earliestDate);
					}


		var price = obj.Ticket_Class_1_Cost__c;
		if(price == 0){
			obj.Price = "Free";
		}else{
			obj.Price = price;
		}

		obj.Short_Description__c = global.truncateText(data.records[0].Short_Description__c);

		obj.Address = obj.Venue_Name__c + " " + obj.Venue_Street_Address__c + " " + obj.Venue_Suburb__c + " " + obj.Venue_Postcode__c;
		var template = new Template('template-event-recent');
		var formsHTML = template.render(obj);
		container.find("ul").append(formsHTML);

		container.removeClass('is-loading');

		container.find('.event-history-item').matchHeight(true);

};

events.addFeaturedData = function(data, container){

		 // console.log(data);


			for (var i = 0; i < data.records.length && i < 3; i++) {


					var obj = data.records[i];

					var earliestDate = global.parseISO8601WithTimezones(obj.First_Session_Start_Date_Time__c);

					var latestDate = global.parseISO8601WithTimezones(obj.Last_Session_End_Date_Time__c);

					if(earliestDate.getDate() != latestDate.getDate()){
						obj.Date = global.formatedDate(earliestDate) + " - " + global.formatedDate(latestDate);;
					}else{
						obj.Date = global.formatedDate(earliestDate);
					}


					var price = obj.Ticket_Class_1_Cost__c;
					if(price == 0){
						obj.Price = "Free";
						obj.Free = "is-free";
					}else if(price != null){
						obj.Price = "$" + price;
						obj.Free  = "is-free-NOT";
					}else{
						obj.Price = "";
						obj.Free  = "is-free-NOT";
					}

					//obj.Short_Description__c = global.truncateText(data.records[i].Short_Description__c);
					if(obj.Presented_By__c.length && events.festivalPages[events.isFestivalPage].isActualFestival){
						obj.Host = obj.Presented_By__c;
					}else{
						obj.Host = obj.Program_Event_Host__r.Name;
					}





					obj.Address = obj.Venue_Name__c + " " + obj.Venue_Street_Address__c + " " + obj.Venue_Suburb__c + " " + obj.Venue_Postcode__c;


					var template = new Template('template-event-featured');
					var formsHTML = template.render(obj);
					container.append(formsHTML);

			};


				if(data.records.length){
						container.removeClass('is-loading');
						$(".events-featured-item").matchHeight(true);
				}else{
					container[0].outerHTML="";
				}

};


events.addEventPresntedByData = function(str, container){


	var obj = {};
	obj.Name = str;
	obj.HideImage="display:none;"
	obj.Description__c = "";
	var template = new Template('template-event-host');
	var formsHTML = template.render(obj);
	container.append(formsHTML);

};

events.addEventHostData = function(data,container, isFestival, alternativeName){



		var alternativeName = alternativeName || "";
      if(!data){
        return;
      }

			var string =  $('<div/>').html(data).text()/*.replace(/\\/g, '')*/;

			var obj = JSON.parse(string);
			//console.log(obj);

			if(!obj.Logo_URL__c){
				obj.HideImage="display:none;"
			}else{
				obj.HideImage="";
			}

			if(isFestival){//hide description
				obj.Description__c = "";
			}

			if(alternativeName.length && isFestival){
				obj.Name = alternativeName;
			}

			var template = new Template('template-event-host');
			var formsHTML = template.render(obj);
			container.append(formsHTML);




	// var logoImg = container.getElementsByTagName('img')[0];

	// if(data.records[0].Logo_URL__c != null){
	//   logoImg.src = data.records[0].Logo_URL__c;
	//   logoImg.alt = data.records[0].Name;
	//   logoImg.width=100;
	// }else{
	//   logoImg.outerHTML = "";
	// }
	// var title = container.getElementsByTagName('h5')[0];
	// title.textContent = data.records[0].Name;
	// var description = container.getElementsByTagName('p')[0];
	// description.textContent =  data.records[0].Description__c;

	// if(events.mapMarker !== ""){//set map Marker title
	//   events.mapMarker.setTitle(data.records[0].Name);
	// }

	// $(container).removeClass('is-loading')
};



events.addEventSessionData = function(data,container){
		var list = container.getElementsByTagName('ul')[0];

		list.innerHTML="";
		var prevDate = "";



		// var daylightStart = global.parseISO8601("2015-10-04");

		// var daylightEnd = global.parseISO8601("2015-04-04");

		var insertDates = false;
		for (var i = 0; i < data.records.length && !insertDates; i++) {




			if(prevDate != data.records[i].Start_Date__c && i > 0){
				insertDates = true;


			}
			prevDate = data.records[i].Start_Date__c || "";

		}

		var timezoneOffset = 10;

		for (var i = 0; i < data.records.length; i++) {
				var  li = document.createElement('li');


				// var stDate = global.parseISO8601(data.records[i].Start_Date__c);
				// var stTime = new Date("1 Jan 1900 " + data.records[i].Start_Time__c);

				// daylightStart.setFullYear(stDate.getFullYear());

				// daylightEnd.setFullYear(stDate.getFullYear() +1);

				// if(stDate > daylightStart && stDate < daylightEnd ){
				// 	stTime.setHours(stTime.getHours() - 11);
				// }else{
				// 		stTime.setHours(stTime.getHours() - 10);
				// }


				// var endDate = global.parseISO8601(data.records[i].End_Date__c);
				// var endTime = new Date("1 Jan 1900 " + data.records[i].End_Time__c);

				// daylightStart.setFullYear(endDate.getFullYear());

				// daylightEnd.setFullYear(endDate.getFullYear() +1);


				// if(endDate > daylightStart && endDate < daylightEnd ){
				// 	endTime.setHours(endTime.getHours() - 11);
				// }else{
				// 		endTime.setHours(endTime.getHours() - 10);
				// }



				// console.log(global.formatAMPM(stTime));


				li.innerHTML = "<h5>" + data.records[i].Start_Time__c + " - " + data.records[i].End_Time__c + "</h5>";

				if(insertDates){

					var earliestDate = global.parseISO8601(data.records[i].Start_Date__c);

					li.innerHTML+= "<p>"+global.formatedDate(earliestDate)+"</p>";

				}
				prevDate = data.records[i].Start_Date__c;
				li.innerHTML += "<p>"+data.records[i].Name+"</p>";
				list.appendChild(li);
		};

		$(container).find('li').matchHeight(true);
		$(container).removeClass('is-loading');

};



events.initializeEventMap = function(){
		var pos =  new google.maps.LatLng(events.latitude ,events.longitude )
		var mapOptions = {
				center: pos,
				zoom: 14
		};

		var map = new google.maps.Map(events.mapContainer, mapOptions);

		events.mapMarker = new google.maps.Marker({
				position: pos,
				map: map,
				title: events.host
		});

		$("#event-location").removeClass('is-loading');
};

events.loadEventLocation = function(latitude, longitude, element){
		events.latitude = latitude;
		events.longitude = longitude;
		events.mapContainer = element;

		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCIeHr7aUnUetiKH-WDQuV8oG_foUDJAvU&v=3.exp&' +
			'callback=events.initializeEventMap';
		document.body.appendChild(script);
}

events.loadEventData = function(){

	 var hostContainer = document.getElementById('event-host');
	 var productContainer = document.getElementById('event-product');

	 var sessionsContainer = document.getElementById('event-sessions');

	 // var hostId = events.eventPageContainer.attr("data-host-id");
	 // var host2Id = events.eventPageContainer.attr("data-host2-id");
	 var productID =  events.eventPageContainer.attr("data-product-id") || "";

	 var tags =  events.eventPageContainer.attr("data-tag") || "";

	 var eventId = events.eventPageContainer.attr("data-id");


	 document.title = $("#page-title").text();

	 $("#breadcrumb").append('<li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a itemprop="url"  href="http://www.business.vic.gov.au/events" title=""><span itemprop="Small Business Workshops and Events">Small Business Workshops and Events</span></a></li>');




		if(events.eventPageContainer.attr("data-start")){

				var earliestDate = global.parseISO8601WithTimezones(events.eventPageContainer.attr("data-start"));
				$("#event-date").text(global.formatedDate(earliestDate));

				if(events.eventPageContainer.attr("data-end")){
					var latestDate = global.parseISO8601WithTimezones(events.eventPageContainer.attr("data-end"));

					if(earliestDate.getDate() != latestDate.getDate()){
						$("#event-date").text($("#event-date").text() + " - " + global.formatedDate(latestDate));
					}
				}
		}

		//date

	var festivalMatch = false;
	var actualFestival = false;
	if(productID.length != 0 || tags.length != 0) {
		for (var k = 0; k < events.festivalPages.length; k++) {
			if(productID.indexOf(events.festivalPages[k].id) == 0 ||  tags.indexOf(events.festivalPages[k].name) != -1) {
				festivalMatch = true;
				actualFestival = festivalMatch && events.festivalPages[k].isActualFestival;
				/// var productContainer = items[i].getElementsByClassName('event-item-actions')[0];

				var link = document.createElement('a');
				link.href=events.festivalPages[k].url;
				link.className="button-tag festival";

				var productName = (typeof events.festivalPages[k].fullName  !== 'undefined'
					&& events.festivalPages[k].fullName.length) ? events.festivalPages[k].fullName:events.festivalPages[k].name;
				$(link).text(productName);

				var img = new Image();
				img.width = 40;
				img.src = events.festivalPages[k].image;
				if (img.src) { 
					if (events.festivalPages[k].name == "Small Business Festival") {
						$(link).addClass('small-business-festival');
					} else {
						$(link).prepend(img); 
					}
				}

				$(productContainer).prepend(link);
				$('.button-tag img[src=""]').remove();
				$('.button-tag').has('img').addClass('has-image');

				break;
			}
		};

		if(!festivalMatch) { productContainer.outerHTML = ""; }
	}

	events.presented = events.eventPageContainer.attr("data-presented-by") || "";

	// if(presented.length && actualFestival){

	// 	events.addEventPresntedByData(presented, $(".hosts-container"));

	// }else{

		if(events.eventPageContainer.attr("data-host-json")){

				events.addEventHostData(events.eventPageContainer.attr("data-host-json"), $(".hosts-container"), actualFestival, events.presented);

			 // events.callAjax(events.hostsURL + "?id=" + hostId, events.addEventHostData, hostContainer);
		 }
		if(events.eventPageContainer.attr("data-host2-json")){

				events.addEventHostData(events.eventPageContainer.attr("data-host2-json"), $(".hosts-container"), actualFestival);

			 // events.callAjax(events.hostsURL + "?id=" + hostId, events.addEventHostData, hostContainer);
		 }




	if(typeof eventId  !== 'undefined'){
		events.callAjax(events.sessionsURL + "?id=" + eventId, events.addEventSessionData, sessionsContainer);
	}

	var locationContainer =   document.getElementById('event-location');

	addressText = $(locationContainer).first("p").text(); //for hiding

	if(addressText.trim().length) {
		var noLocationText = true;
	}

	var latitude = events.eventPageContainer.attr("data-latitude");
	var longitude = events.eventPageContainer.attr("data-longitude");

	if(latitude == "-37.4713077" && longitude == "144.7851531") {
		if(noLocationText)
		{
			// console.log("hiding");
			$(locationContainer).hide();
		}
	} else {

		if (latitude && longitude) {
			events.loadEventLocation(latitude,longitude, document.getElementById("event-map-canvas"));
		} else {
			$("#event-map-canvas").hide();
			$('.event-location p').css('width', '100%');
		}

	}





	 var recentContainer = $(".module-event-history");

	 var curID = events.eventPageContainer.attr("data-id");

	 var newCookie = curID;

	 var relatedCount = 0;
	 if (cookie = global.readCookie("recent")){
		var recentIDs = cookie.split("#");
		for(var i = 0; i < recentIDs.length; i++){
			if(recentIDs[i] != curID){
				relatedCount++;
				events.callAjax(events.eventURL + "?id=" + recentIDs[i], events.addRecentEvent, recentContainer);
				if(i < 3)
					newCookie+= "#" + recentIDs[i];
			}
		}
	}

	if(relatedCount == 0){
		recentContainer[0].outerHTML = "";
	}

	global.createCookie("recent", newCookie, 365);

	var curTopic = events.eventPageContainer.attr("data-topic");

	var relatedContainer = $(".event-related");
	//console.log(curTopic.replace(/\s+/g, '+'));
	if(curTopic){
		relatedContainer.hide();
		events.callAjax(events.relatedURL + "?id=" + curTopic.replace(/\s+/g, '+'), events.addRelatedEvent, relatedContainer);
	}else{
	    relatedContainer.remove();
	}



	 if(events.eventPageContainer.attr("data-cancelled") && events.eventPageContainer.attr("data-cancelled").indexOf("9") != -1){

		events.eventPageContainer.addClass(".event-cancelled ");
		$(".event-booking .event-price").text('Cancelled').addClass('cancelled-label');


			$('.button.booking').remove();
			$('.event-booking .event-date').remove();
			$('.event-booking > h4').text('Event Cancelled');
			$('.event-status').text('Bookings Closed');

	}else{

		var prices = events.getPrices(events.eventPageContainer.attr("data-event-price-1"),events.eventPageContainer.attr("data-event-price-2"), events.eventPageContainer.attr("data-event-price-3") );

		if(prices.free){
			$(".event-booking .event-price").text("Free").addClass('is-free');
		}else if(prices.onePrice){
			 $(".event-booking .event-price").text("$" + Math.round(prices.onePrice*100)/100);
		}else{
				$(".event-booking .event-price").text("$" + Math.round(prices.min*100)/100 + " - " + "$" + Math.round(prices.max*100)/100);
		}
	}


	 if(events.eventPageContainer.attr("data-disability") === "Yes"){
          events.showAccessibility($(".event-booking"));
       }

        if(typeof events.eventPageContainer.attr("data-parking") !== 'undefined' && events.eventPageContainer.attr("data-parking").length > 1){
          events.showParking($(".event-booking"));
        }








};

events.loadItems = function(sartingPoint) {
	var i = sartingPoint;
	for(; i < events.list.length; i++) { //i < sartingPoint + (events.itemsOnPage*10) &&

		var curItem = $(events.list[i]);
		var productID = curItem.attr("data-product-id") || "";
		var tags =  curItem.attr("data-tag") || "";

		var host1 = curItem.attr("data-host-json") || "";
		var host2 = curItem.attr("data-host2-json") || "";

		//remove non-matching events that shouldn't appear on a custom festival page
		//TODO - check
		if(events.isFestivalPage !== -1 && productID.indexOf(events.festivalPages[events.isFestivalPage].id) !== 0
			&& tags.indexOf(events.festivalPages[events.isFestivalPage].name) == -1) {
			events.list[i].outerHTML = "";
			continue;
		}

        if(typeof curItem.attr("data-parking") !== 'undefined' && curItem.attr("data-parking").length > 1) {
        	events.showParking(curItem);
        }

        if(curItem.attr("data-disability") === "Yes") {
        	events.showAccessibility(curItem);
        }

  		//add additional festival links based on tags and productID
		if(productID.length != 0 || tags.length != 0) {
			var festivalMatch = false;
			for (var k = 0; k < events.festivalPages.length; k++) {
				if(productID.indexOf(events.festivalPages[k].id) == 0 || tags.indexOf(events.festivalPages[k].name) != -1) {
					festivalMatch = true;

					var productContainer = curItem.find('.event-item-actions')[0];

					var link = document.createElement('a');
					link.href=events.festivalPages[k].url;
					link.className="button-tag festival";

					var productName = (typeof events.festivalPages[k].fullName  !== 'undefined'
						&& events.festivalPages[k].fullName.length) ? events.festivalPages[k].fullName : events.festivalPages[k].name;

					$(link).text(productName);

					if(events.festivalPages[k].image.length) {
						if (events.festivalPages[k].name == "Small Business Festival") {
							$(link).addClass('small-business-festival');
						} else {
							var img = new Image();
							img.width = 40;
							img.height = 40;
							img.src = events.festivalPages[k].image;
							$(link).prepend(img);
						}
					}

					$(productContainer).prepend(link);
				}
			};

			//todo check for duplicate festival links
			festivalLinks = $(productContainer).find('a.button-tag:contains("Festival")');
			if(festivalLinks.length > 1)
			{
				festivalLinks.each(function() {
					if($(this).text() == "Small Business Festival Victoria")
					{
						$(this).remove();
					}
				});
			}
		}

		//date
		var startDate = curItem.attr("data-start");
		if(startDate){

			var earliestDate = global.parseISO8601WithTimezones(startDate);
			//global.parseISO8601WithTimezones(startDate);

			if ( Object.prototype.toString.call(earliestDate) === "[object Date]"){

					var dateContainer = curItem.find('.event-date')[0];

					$(dateContainer).text(global.formatedDate(earliestDate));



					var endDate = curItem.attr("data-end");
					if(endDate){
						var latestDate = global.parseISO8601WithTimezones(endDate);

						if(earliestDate.getDate() != latestDate.getDate()){
							$(dateContainer).text($(dateContainer).text() + " - " + global.formatedDate(latestDate));
						}
					}

			}



		}




		//topic

		var topic = curItem.attr("data-topic");

		if(topic && typeof events.topics[topic] === 'undefined'){
			events.topics[topic] = topic;

			events.topicSelect.append("<option value='"+topic+"'>"+topic+"</option>");

		}



		if(curItem.attr("data-cancelled") && curItem.attr("data-cancelled").indexOf("9") != -1){

				curItem.addClass(".event-cancelled ");
				curItem.find(".event-price").text('Cancelled').addClass('cancelled-label');

		}else{

				var prices = events.getPrices(curItem.attr("data-event-price-1"),curItem.attr("data-event-price-2"), curItem.attr("data-event-price-3") );

				if(prices.free){
						curItem.find(".event-price").text("Free").addClass('is-free');
				}else if(prices.onePrice){
						curItem.find(".event-price").text("$" + Math.round(prices.onePrice*100)/100);
				}else{
						curItem.find(".event-price").text("$" + Math.round(prices.min*100)/100 + " - " + "$" + Math.round(prices.max*100)/100);
				}
		}

		// remove loading class
		curItem.removeClass('is-loading');
		// remove empty images in tags
		curItem.find('.button-tag img[src=""]').remove();
		curItem.find('.button-tag').has('img').addClass('has-image');


		if(host1.length || host2.length){

			var $paragraph = curItem.find("> div.event-item-details").first();


			if(host1.length){

				var string =  $('<div/>').html(host1).text();
				//console.log(string);
				var obj = JSON.parse(string);
				//console.log(obj);
				if(obj.Logo_URL__c && obj.Logo_URL__c.length > 10){// not null
					$("<img class='host_image'  src='" + obj.Logo_URL__c + "'   title='"+obj.Name.replace(/"/g, '&quot;')+"'  />").insertAfter($paragraph);
				}

			}

			if(host2.length){



				var string =  $('<div/>').html(host2).text();
				//console.log(string);
				var obj = JSON.parse(string);
				//console.log(obj);
				if(obj.Logo_URL__c && obj.Logo_URL__c.length > 10){// not null
					$("<img class='host_image'  src='" + obj.Logo_URL__c + "'   title='"+obj.Name.replace(/"/g, '&quot;')+"'  />").insertAfter($paragraph);
				}
			}
		}


	}


	events.list = events.container.find("div.events-results-item");


};
events.isFestivalPage = -1;
events.topicSelect = $("#query_topic");

events.loadData = function(container){

// console.log("single event");

	if ( !events.festivalPages || !events.festivalPages.length ) {

			return false;

	}

	var items = events.list;


	var images = [];

	for (var i = 0; i < events.festivalPages.length; i++) {
		if(document.title.indexOf(events.festivalPages[i].name) == 0 || document.title.indexOf(events.festivalPages[i].fullName) == 0){
				events.isFestivalPage = i;
		}


	};

	if(events.isFestivalPage !== -1 && $(".events-featured").length){

		 events.callAjax(events.featuredURL + "?id=" + events.festivalPages[events.isFestivalPage].id, events.addFeaturedData, $(".events-featured"));



	}

	if(events.isFestivalPage !== -1){
		$("#breadcrumb").append('<li itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a itemprop="url"  href="http://www.business.vic.gov.au/events" title=""><span itemprop="Small Business Workshops and Events">Small Business Workshops and Events</span></a></li>');
	}

	//////////
	//console.time("loadItems");

	events.loadItems(0);


	var recentContainer = $(".module-event-history");

 	var relatedCount = 0;

	if (cookie = global.readCookie("recent")){
		var recentIDs = cookie.split("#");
		for(var i = 0; i < recentIDs.length; i++){
				relatedCount++;
				events.callAjax(events.eventURL + "?id=" + recentIDs[i], events.addRecentEvent, recentContainer);

		}
	}

	if(relatedCount == 0){
		recentContainer[0].outerHTML = "";
	}
};



events.reorder = function(container, items){

};

var throttleTimer = false;

events.search = function(container){

		// throttle search to not run more than once every 250ms
		if (!throttleTimer) {

				if( !$("#queries_keyword").length ) {

					return false;

				}

				throttleTimer = true;
				clearTimeout(throttle);

				var throttle = setTimeout(function() {
						throttleTimer = false;
				}, 250);

				var items = events.list;

				var keyword = $("#queries_keyword").val().toLowerCase();

				var topic = $("#query_topic option:selected");

				var startDate = $("#start-date");

				var endDate = $("#end-date");

				var freeEntry = $("#feature-free-entry:checked");
				var accesible = $("#feature-accessible:checked");
				var webinar = $("#feature-webinar:checked");
				var festival = $("#show-all-events:checked");//festival events




				if(keyword.length < 3 && keyword.length != 0){
						return;
				}
				//var location = $("#queries_keyword").val();


				if( $(".lt-ie10").length === 0){ // IE doesn't support history API :(
					setTimeout(function(){
							var _url = "";

							if(keyword){
									_url+="&query="+keyword;
							}

							if(typeof events.currentLocation !== 'undefined' && events.currentLocation.lat != 0 && events.currentLocation.lng != 0){
									_url+="&lat="+events.currentLocation.lat;
									_url+="&lng="+events.currentLocation.lng;
									_url+="&radius=" + $("#query_radius").val();
									_url+="&location=" +$("#queries_location").val();

							}

							if(topic.val() && topic.val() != "-1"){
									_url+="&topic=" + topic.val();
							}

							if(startDate[0].value){
									_url+="&startdate=" + startDate[0].value;
							}
							if(endDate[0].value){
									_url+="&enddate=" + endDate[0].value;
							}

							if(freeEntry.length){
									_url+="&free=true";
							}
							if(accesible.length){
									_url+="&accesible=true";
							}
							if(webinar.length){
									_url+="&webinar=true";
							}

								if(_url.length){
										_url = _url.replace("&", "?");
										_url =  window.location.protocol + "//" + window.location.host  + window.location.pathname + _url + window.location.hash;
										// _url =  events.URL + _url;
										//console.log(_url);

								}else{
										_url =  window.location.protocol + "//" + window.location.host  + window.location.pathname + window.location.hash;

								}
								history.replaceState({}, document.title, _url);

					}, 1000);
				}

				var visibleItems = 0;

				for(var i=0; i < items.length; i++){

						var title = $(items[i]).find("h3").text();
						var text  = $(items[i]).find("p").text();
						var meta =  $(items[i]).find(".event-location-details").text();
						var eventID =  $(items[i]).attr("data-event-id");

						var host = "";
						if($(items[i]).attr("data-host-json").length !== 0){

							var string =  $('<div/>').html($(items[i]).attr("data-host-json")).text();
							//console.log(string);
							var obj = JSON.parse(string);
							//console.log(obj);
							host+= obj.Name + " ";

						}
						if($(items[i]).attr("data-host2-json").length !== 0){

							var string =  $('<div/>').html($(items[i]).attr("data-host2-json")).text();
							//console.log
							var obj = JSON.parse(string);
							//console.log(obj);
							host+= obj.Name + " ";

						}

						var keywordMatch = true;

						if(keyword.length != 0 && keyword != $("#queries_keyword").attr("placeholder")){
								keywordMatch = ((title+" "+text+" "+meta + " " + eventID + " " + host).toLowerCase().trim().indexOf(keyword) != -1);

								if(keywordMatch){
										$(items[i]).find("h3").html(global.highlight(title, keyword));
										$(items[i]).find("p").html(global.highlight(text, keyword));
								}
						}else{ // remove strong tags
								$(items[i]).find("h3").text(title);
								$(items[i]).find("p").text(text);
						}

						var locationMatch = true;
						if(typeof events.currentLocation !== 'undefined' && events.currentLocation.lat != 0 && events.currentLocation.lng != 0){

								locationMatch = false;
								if($(items[i]).attr("data-longitude").length != 0 && $(items[i]).attr("data-latitude").length != 0){
										var itemsLocation = {};
										itemsLocation.lat = parseFloat($(items[i]).attr("data-latitude"));
										itemsLocation.lng = parseFloat($(items[i]).attr("data-longitude"));

										// console.log($("#query_radius"));
										//console.log($(items[i]).find("h3").text() +":" + global.getDistance(events.currentLocation, itemsLocation)/1000);

										var radius = parseInt($("#query_radius").val());
										locationMatch = radius * 1000 > (global.getDistance(events.currentLocation, itemsLocation) );
								}
						}

						var topicMatch = true;

						if(topic.val() && topic.val() != "-1"){
								topicMatch  = $(items[i]).attr("data-topic") && ($(items[i]).attr("data-topic").indexOf(topic.val()) != -1);
						}

						var startMatch = true;
						if(startDate[0].value && startDate[0].value != "dd/mm/yyyy"){
								startMatch = false;

								if($(items[i]).attr("data-start")){
										sDate = global.parseISO6666(startDate[0].value);

										itemDate =  global.parseISO8601WithTimezones($(items[i]).attr("data-start"))

										if ( Object.prototype.toString.call(sDate) === "[object Date]" && Object.prototype.toString.call(itemDate) === "[object Date]" ){
												sDate.setHours(0);
												sDate.setMinutes(0);
												sDate.setSeconds(0);
												sDate.setMilliseconds(0);
												itemDate.setHours(0);
												itemDate.setMinutes(0);
												itemDate.setSeconds(0);
												itemDate.setMilliseconds(0);

												startMatch = itemDate >= sDate;
										}
								}
						}

						var endMatch = true;
						if(endDate[0].value && endDate[0].value != "dd/mm/yyyy"){
								endMatch = false;

								if($(items[i]).attr("data-end") && endDate[0].value != "dd/mm/yyyy"){

										sDate = global.parseISO6666(endDate[0].value);
										itemDate =  global.parseISO8601WithTimezones($(items[i]).attr("data-end"))

										if ( Object.prototype.toString.call(sDate) === "[object Date]" && Object.prototype.toString.call(itemDate) === "[object Date]" ){
												sDate.setHours(0);
												sDate.setMinutes(0);
												sDate.setSeconds(0);
												sDate.setMilliseconds(0);
												itemDate.setHours(0);
												itemDate.setMinutes(0);
												itemDate.setSeconds(0);
												itemDate.setMilliseconds(0);

												endMatch = itemDate <= sDate;
										}
								}
						}



						var  freeMatch = true;

						if(freeEntry.length)
								freeMatch = $(items[i]).find(".event-price").hasClass("is-free");

						var accesibleMatch = true;

						if(accesible.length){
								accesibleMatch = false;
								if($(items[i]).attr("data-disability"))
										accesibleMatch =  $(items[i]).attr("data-disability").length != 0;
						}

						var webinarMatch = true;

						if(webinar.length){
								webinarMatch = false;
								if($(items[i]).attr("data-webinar"))
										webinarMatch =  $(items[i]).attr("data-webinar").length != 0;
						}


						var festivalMatch = true;
						if(festival.length){
								festivalMatch=false;
								if($(items[i]).attr("data-tag")){
										//console.log($(items[i]).attr("data-tag"));
										festivalMatch =  $(items[i]).attr("data-tag").indexOf(events.festivalName) != -1;
								}
						}

						if(keywordMatch && locationMatch && topicMatch && startMatch && endMatch && freeMatch && accesibleMatch && webinarMatch && festivalMatch){
								$(items[i]).show();
								visibleItems++;
						}else{
								$(items[i]).hide();
						}
				}

				if(visibleItems === items.length){

						events.paginate(container);

						$(".events-results__title").show();
						$(".events-results__count, .events-results__none").hide();

				}else{
						$(".events-load-more").hide();

						if(visibleItems === 0){
								$(".events-results__none").show();

								if(keyword.length != 0){// no keyword filtering
										$(".events-results__none  .keyword-prefix").show();
										$(".events-results__none .keyword").text( keyword );
								}else{
										$(".events-results__none .keyword-prefix").hide();
								}

								$(".events-results__count, .events-results__title").hide();

						}else{
								$(".events-results__count").show();

								if(keyword.length != 0){
										$(".events-results__count  .keyword-prefix").show();
										$(".events-results__count .keyword").text(keyword);
								}else
										$(".events-results__count  .keyword-prefix").hide();

								//displaying count
								$(".events-results__count .number").text(visibleItems);

								if(visibleItems === 1){// result(s)
										$(".result-ending").text("");
								}else{
										$(".result-ending").text("s");
								}

								$(".events-results__none, .events-results__title").hide();
						}
				}


				// if (currentInput.is('input[type="checkbox"], input[type="radio"]')) {
				//   // is checkbox or radio, add and then remove when cleared
				//   if (!($('.' + descriptionClass).length)) {
				//     // add
				//     $(inputDescription).insertAfter(currentInput.closest('label'));

				//     $('.skip-to-filtered-results').on('click', function(e) {
				//       e.preventDefault();
				//       $('#grants-meta > *:visible').first().attr('tabindex', 0);
				//       $('#grants-meta > *:visible').first().focus();
				//     });

				//   } else {
				//     // remove if exists
				//     $('.' + descriptionClass).remove();
				//   }
				// } else {
				//   // is select or search, add once and never remove
				//   if (!($('.' + descriptionClass).length)) {
				//     $(inputDescription).insertAfter(currentInput);

				//     $('.skip-to-filtered-results').on('click', function(e) {
				//       e.preventDefault();
				//       $('.grants-results-meta > *:visible').first().attr('tabindex', 0);
				//       $('.grants-results-meta > *:visible').first().focus();
				//     });
				//   }
				// }

		}
};


events.paginate = function(container){

		events.list.show();
		if((events.itemsOnPage * events.showCount) >= events.list.length ) {
				$(".events-load-more").hide();
		}else{
				$(".events-load-more").show();
				container.find("div.events-results-item:gt("+ ((events.itemsOnPage * events.showCount) - 1) +")").hide();
		}
};


events.initLoactionAutocoplete = function(){
		if (typeof google === 'object' && typeof google.maps === 'object' && typeof google.maps.places === 'object'){
				events.setupLoactionAutocoplete();
		}else{
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCIeHr7aUnUetiKH-WDQuV8oG_foUDJAvU&v=3.exp&libraries=places&' +
						'callback=events.setupLoactionAutocoplete';
				document.body.appendChild(script);
		}
};

events.setupLoactionAutocoplete = function(){

	 events.location_suggestions = document.getElementById("location-suggestions");
	events.location_timer = 0;
	events.location_input =  document.getElementById("queries_location");
	events.selected_suggestion = -1;

	 events.autocomplete =  new google.maps.places.AutocompleteService();


	$(events.location_input).keypress(function (e) {
		//console.log("keypress" + e.keyCode);
		if(e.which !== 13){
			events.getLocationSugesstions();
		}
	});

$(events.location_input).keydown(function (e) {
		//console.log("keydone" + e.keyCode);
		if(e.which === 8 ){ // backspace
				events.getLocationSugesstions();

	 //    }else if(e.keyCode === 27){
	 //      e.preventDefault();
	 //      resetInput();

			}else if(events.location_suggestions.childNodes.length !== 0){
	 //       console.log("s_suggestions");

				if(e.which===38 || e.which===40 ){

					if(e.keyCode===38){//up
						if(--events.selected_suggestion < 0){
							events.selected_suggestion = events.location_suggestions.childNodes.length-1;
						}

					}else{//down
						if(++events.selected_suggestion >= events.location_suggestions.childNodes.length){
							events.selected_suggestion = 0;
						}

					}
					events.selectLocationSuggestion();
					e.preventDefault();

				}
			}
	});


	$(".location-suggestions").on("click", "div", function(e){
			events.selected_suggestion = parseInt($(this).attr("data-pos"));
			events.selectLocationSuggestion();
			events.filerByLocation();
	});

};

events.selectLocationSuggestion = function(){
	for (var i = events.location_suggestions.childNodes.length - 1; i >= 0; i--) {
		if(i !== events.selected_suggestion){
			events.location_suggestions.childNodes[i].className="";
		}
		else{
			events.location_suggestions.childNodes[events.selected_suggestion].className="selected";
		}

	}
	events.location_input.value = events.location_suggestions.childNodes[events.selected_suggestion].getAttribute("data-description");



}
events.getLocationSugesstions = function(){

	clearTimeout(events.location_timer); // Clear the timer so we don't end up with dupes.
	events.location_timer = setTimeout(function() { // assign timer a new timeout
		//console.log(events.location_input.value.length);
		if(events.location_input.value.length === 0){
			events.location_suggestions.innerHTML = "";
			events.selected_suggestion = -1;
			if(typeof events.currentLocation !== 'undefined'){
				events.currentLocation.lat = 0;
				events.currentLocation.lng = 0;
			}
			events.search(events.container);
		}else{
				events.autocomplete.getPlacePredictions({ input: events.location_input.value , types: ['(regions)'], componentRestrictions: {country: 'au'}}, events.processLoactionSugesstions);
		}
	}, 300); // 200ms delay, tweak for faster/slower

};

events.processLoactionSugesstions = function(predictions, status) {
	events.location_suggestions.innerHTML = "";
	if (status !== google.maps.places.PlacesServiceStatus.OK || predictions.length == 0) {
		//console.log(status);
		 events.location_suggestions.innerHTML = "";
			events.selected_suggestion = -1;
			if(typeof events.currentLocation !== 'undefined'){
				events.currentLocation.lat = 0;
				events.currentLocation.lng = 0;
			}
		return;
	}

 // var results = document.getElementById('results');

for (var i = 0, prediction; prediction = predictions[i], i<predictions.length; i++) {
		//console.log(prediction);
		var d = $("<div />");
		d.html(global.highlight(prediction.description,events.location_input.value));

		d.attr("data-id", prediction.place_id);
		d.attr("data-description", prediction.description);
		d.attr("data-pos", i);

		$(".location-suggestions").append(d);
	}


};

events.filerByLocation = function(){

		if(events.selected_suggestion == -1){
			return;
		}
		var service = new google.maps.places.PlacesService(events.location_input);
		service.getDetails({
				placeId: events.location_suggestions.childNodes[events.selected_suggestion].getAttribute("data-id")
		},  function(place, status) {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					 // console.log(place);
						events.currentLocation = {};
						events.currentLocation.lat = place.geometry.location.lat();
						events.currentLocation.lng = place.geometry.location.lng();
						events.search(events.container);

						events.location_suggestions.innerHTML = "";
						events.selected_suggestion = -1;

				}else{
						console.error("Failed to get a place");
				}
		});
};

events.filterByCurrentPosition = function(position){

		events.currentLocation = {};
		events.currentLocation.lat =  position.coords.latitude;
		events.currentLocation.lng = position.coords.longitude;
		events.search(events.container);
		events.location_input.value = "Current location";

		events.location_suggestions.innerHTML = "";
		events.selected_suggestion = -1;


		geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng( position.coords.latitude, position.coords.longitude);
		geocoder.geocode({'latLng': latlng}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var flag = false;
				for (var i = 0; i < results.length && !flag ; i++) {
					for (var j = 0; j < results[i].types.length; j++) {
						if(results[i].types[j] == "locality"){
							 events.location_input.value = results[i].formatted_address;
							 flag=true;
							 break;
						}
					};
				};
			} else {
				console.log('Geocoder failed due to: ' + status);
			}
		});
};


// usage: events.showParking($('.event-booking')); or: events.showParking($('.events-results-item'));
events.showParking = function(context) {
		var parking = '<div class="event-parking">Parking available</div><br />';
		$(parking).insertAfter(context.find('.event-location, .event-location-details'));
}


events.showAccessibility = function(context) {
    var accessibility = '<div class="event-accessibility">Accessible venue</div><br />';
    $(accessibility).insertAfter(context.find('.event-location, .event-location-details'));
}
$(document).ready(function () {
		// check if touch events are active
		$window = $(window);
		var isLegacy = $('.lt-ie9').length;
		var root = $('html, body');
		var sidebarleft = $('.column-left');
		var sidebarRight = $('.column-right');
		var sidebarLeftNarrow = $('.column-left_narrow');
		var sidebarRightWide = $('.column-right_wide');
		var overflowedContent = $('.overflowed-content');


		$(".eventFeedList li").present( function (_events, $){

			var filter = _events.parent().attr("data-filter");
			//console.log(filter);
			var count = 0;
			_events.each(function(){
				if(!filter || filter === $(this).attr("data-topic") && count++ < 9){

					if(!$(this).find(".price").text().trim().length || $(this).find(".price").text() == "0" ){
						$(this).find(".price").text("FREE");
						$(this).find(".price").addClass("is-free");
					}else{
						$(this).find(".price").text( "$" + $(this).find(".price").text());
					}

					$(this).find(".startDate").text( global.formatedDate(global.parseISO8601WithTimezones($(this).find(".startDate").text())));

					$(this).show();
				}else{
					$(this).remove();
				}

			});

			if(count >= 9){
				_events.parent().append("<li class='see_more_events'><a href='http://www.business.vic.gov.au/events?topic="+filter+"' title='See more events'>See more events</a>");
			}

		});

		//force focus on location field when clicked (doesn't work on iOS 7 otherwise)
		$('#queries_location, #queries_keyword').on('click touchend',function() {
			$(this).focus();
		});

		// // force click on autocomplete for iOS
		// $('.touch .location-suggestions div').on('touchstart',function(e) {
		// 	$(e.target).trigger('click');
		// });

		//find button tags that have images


		$(".section-event-calendar, .section-event-calendar-festival-landing").present( function (body, $){
			if(body.find(".module-page-header").attr("data-festival")){
					body.addClass("festival-on");
					body.find(".module-page-header").addClass("has-logo");

			}else{
				 $('.module-page-header').css('background-image', '');

				 $(".module-page-header .events-header-actions > a").text("See all events");
				 if($("body:not(.section-event-calendar-festival-landing) .module-page-header .social-buttons").length)
						$(".module-page-header .social-buttons")[0].outerHTML="";
			}

		});

		$(".share-buttons").present( function (shareButtons, $){
				shareButtons.children('a').on('click', function(e) {
						e.preventDefault();
						shareButtons.toggleClass('is-active');
						console.log("toggle");
						root.bind('click', closeShareMenu);
				});


				function closeShareMenu(e) {
						if (!$(e.target).parent().hasClass('share-buttons')) {
								shareButtons.removeClass('is-active');
								root.unbind('click', closeShareMenu);
						}
				}
		});



		$("#event-detail-page").present( function (container, $){//event detail page

				events.eventPageContainer = container;

				events.loadEventData();

				container.find(".info").present(function(paragraph){
						var text = paragraph.text();

						//format bulletpoints

						if(text.match(/\* /g)) {
							textArray = text.split("\n");

							textOutput = "<p>";
							var openList = false;

							for(i = 1; i < textArray.length; i++)
							{
								//skip empty lines
								textArray[i] = textArray[i].trim();
								if(!textArray[i].length ){
									continue;
								}

								if(textArray[i].substring(0,2) == "* ")
								{
									if(!openList)
									{
										openList = true;
										textOutput += "</p>";
										textOutput += "<ul>";
									}
									textOutput += "<li>"+textArray[i].substring(2)+"</li>";
								}
								else
								{
									if(openList)
									{
										textOutput += "</ul>";
										textOutput += "<p>";
									}
									textOutput += textArray[i]+"<br>";
								}
							}
							textOutput += "</p>";
							paragraph.html(textOutput);
						}




						//read more
						var text = paragraph.text();
						var html = paragraph.html();

						if(text.length > 160){

								paragraph.attr("data-text",html);

								var pos = text.indexOf(" ", 160);

								if(pos !== -1){
										paragraph.html("<p>"+text.substring(0, pos) + " ...");
										paragraph.append("<a href='#' class='read_more'>Read more</a></p>") ;
								}

								paragraph.on("click", ".read_more", function(e){
										e.preventDefault();

										paragraph.html(paragraph.attr("data-text"));
								});
						}
				});


				//$(".event-details .info").readmore(); //readmore.js

				$('.event-booking').present( function (booking, $) {
						// function _posBooking() {
						//     scrollY = $window.scrollTop();
						//     offset = (windowHeight - frameHeight) / 2;
						//     _translate(Math.round(scrollY + offset));
						// }

						// // Calculate the position
						// function _translate(y) {
						//     // Invoke only at large breakpoint
						//     if ($('.csstransforms').length) {
						//         quickView.css("transform", "translate(0," + y + "px)");

						//         if ($('.lt-ie10').length) {
						//           quickView.css("-ms-transform", "translate(0," + y + "px)");
						//         }
						//     } else {
						//         quickView.css("margin-top", y + "px");
						//     }hy
						// }

						if (booking.find('.booking.button').length == 0) {
							$('.event-contact').detach().insertAfter('.event-booking .event-location');
						}

						var pageWrap = $('.page-wrap');

					 if(!booking.find(".booking.button").attr("href")){
							booking.find(".booking.button").hide();
					 }

						function pagePad() {
								pageWrap.css('padding-bottom', $('.event-booking').outerHeight());
						}

				 //  console.log(booking);
					var setupMobileBooking = false;

						enquire.register( Utils.mediaQuery(0, Breakpoint.medium), {
								match : function() {
					if (!setupMobileBooking) {
											var breakBefore = '<span class="event-address-comma">,</span>';
											var breakWrap = '<span class="event-address-break"></span>';
											var eachBreak = $('.event-booking').find('br');


											$(breakBefore).insertBefore(eachBreak);
						eachBreak.wrap(breakWrap);
						setupMobileBooking = true;
					}

										// move booking module out of sidebar
										$('.event-booking').detach().prependTo('.page-wrap');
										pagePad();

										$window.bind('resize', pagePad);
								}, unmatch : function() {
										// move booking module into sidebar

										$('.event-booking').detach().prependTo('.column-right .content');
										$window.unbind('resize', pagePad);
										pageWrap.css('padding-bottom', '');
								}
						});
				});


		});



	$('.section-event-calendar-festival-landing').present( function (body , $) {

		$('.events-header-actions').insertAfter('#page-title');
		$('.title-links').insertAfter('#page-title');

		$(".events-hero").present( function (heroContent, $) {
			var _content = $("#_content");
				heroContent.detach().prependTo(_content);
				heroContent.wrap("<div class='overflowed-content'></div>");
				heroContent.find("img").wrap("<div class='events-hero-image'></div>");
				heroContent.find("p").wrap("<div class='events-hero-copy'></div>");

				$(".module-page-header").addClass("has-overflowed-content");
		});

	});




	events.container.present( function (list , $) {//event listing page

		var items = events.list;

		$(".events-results__status span").text(items.length);
		// move into sidebars
		events.container.detach().prependTo(sidebarRightWide);



		sidebarRightWide.on("click", ".events-load-more", function(e){
			e.preventDefault();
			events.showCount++;
			events.paginate(list);
			// remove focus from button
			$('.events-load-more').blur();

		});
		$(".events-featured").present( function (featuredContent, $) {
				var _content = $("#_content");

				featuredContent.detach().prependTo(_content);
				$(".module-page-header").addClass("has-overflowed-content");
		});

		$(".events-hero").present( function (heroContent, $) {
				var _content = $("#_content");

				heroContent.detach().prependTo(_content);

				heroContent.wrap("<div class='overflowed-content'></div>");
				heroContent.find("img").wrap("<div class='events-hero-image'></div>");
				heroContent.find("p").wrap("<div class='events-hero-copy'></div>");

				$(".module-page-header").addClass("has-overflowed-content");
		});


		sidebarRightWide.append('<a href="#" class="events-load-more"> Show more</a>');
		events.loadData(list);

		$('.events-search').present( function (eventsSearch, $) {

			var searchToggle = $('.events-search__toggle');
			var searchRefine = $('.events-search__refine');
			var searchToggleText = $('.events-search__visibility');
			var clearSearch = $('.js-clear-inputs');
			var clearDates = $('.js-clear-date');
			var clearFilterText = $('.js-clear-location, .js-clear-keyword');
			var checksAndRadios = eventsSearch.find("input[type=checkbox], input[type=radio]");
			var items  = events.list;





			//////////////////
				// var keyword = $("#queries_keyword").val().toLowerCase();

				// var topic = $("#query_topic option:selected");

				// var startDate = $("#start-date");

				// var endDate = $("#end-date");

				// var freeEntry = $("#feature-free-entry:checked");
				// var accesible = $("#feature-accessible:checked");
				// var webinar = $("#feature-webinar:checked");
				// var festival = $("#show-all-events:checked");


				//festival events

			//////////


				$("#queries_keyword").val(global.getParameterByName("query"));

				$("#start-date").val(global.getParameterByName("startdate"));
				$("#end-date").val(global.getParameterByName("enddate"));



				$("#queries_location").val(global.getParameterByName("location"));
				events.currentLocation = {};
				events.currentLocation.lat = global.getParameterByName("lat");
				events.currentLocation.lng = global.getParameterByName("lng");
				var _radius =  global.getParameterByName("radius");
				 if(_radius){
					$(".nstSlider").attr("data-cur_min", _radius);
					$("#query_radius").val(_radius);
					$("#query_radius_range").val(_radius);
				 }

				var _topic = global.getParameterByName("topic");
				var _topics = $("#query_topic option");
				for (var i = 0; i < _topics.length && _topic; i++) {
					if(_topics[i].value == _topic){
						$(_topics[i]).attr('selected','selected');
						break;
					}
				};
				if(global.getParameterByName("free") === "true"){
						$("#feature-free-entry").attr("checked", "checked");
				}

				if(global.getParameterByName("accesible") === "true"){
						$("#feature-accessible").attr("checked", "checked");
				}

				if(global.getParameterByName("webinar") === "true"){
						$("#feature-webinar").attr("checked", "checked");
				}








			function dateUpdateStart() {
				dateUpdate($('#start-date'));
			}

			function dateUpdateEnd() {
				dateUpdate($('#end-date'));
			}

			function dateUpdate(item) {
				events.search(list);

				if (item.val() != "") {
					item.siblings('.js-clear-date').removeClass('is-hidden');
					//$('.input-date').trigger('change');
				} else {
					item.siblings('.js-clear-date').addClass('is-hidden');
				}
			}

			datePickerController.setGlobalOptions({
				"nodrag":1
			});

			datePickerController.createDatePicker({
				formElements: {
					"start-date": "%d/%m/%Y"
				},
				statusFormat:"%l, %d%S %F %Y",
				callbackFunctions:{
					"datereturned":[dateUpdateStart],
					"domcreate":[setDateTouchEvents]
				}
			});

			datePickerController.createDatePicker({
					formElements: {
						"end-date": "%d/%m/%Y"
					},
					statusFormat:"%l, %d%S %F %Y",
					callbackFunctions:{
						"datereturned":[dateUpdateEnd],
						"domcreate":[setDateTouchEvents]
					}
			});

			function setDateTouchEvents() {
				// $('.date-picker-table tbody td').on('touchstart', function(e){
				// 	// $(e.target).trigger('click');
				// 	$('.input-date').blur();
				// 	e.preventDefault;
				// 	// var pos = $('.event-date-field').first().offset().top;
				// 	// $(root).scrollTop(pos);
				// });
				// $('.date-picker-table tbody td').on('touchend', function(e){
				// 	e.preventDefault;
				// });

				// $('#start-date, #end-date').on('change', function() {
				// 	datePickerController.hide('#end-date');
				// 	datePickerController.hide('#start-date');
				// });
			}


			// force redraw in ie11
			// $('.date-picker-control').on('click', function() {
			// 	$('.date-picker').removeClass('fd-dp-fade');
			// });

			// handle false date input hover
			$('.date-picker-control').on('mouseover', function() {
				$($(this).attr("href")).addClass('hover');
			});
			$('.date-picker-control').on('mouseout', function() {
				$($(this).attr("href")).removeClass('hover');
			});

			eventsSearch.detach().prependTo(sidebarLeftNarrow);

			events.initLoactionAutocoplete();

			eventsSearch.find('input').icheck({
					cursor: true
			});

			clearSearch.on('click',function(e) {
				e.preventDefault();
				$(this).closest('fieldset').find('input[type=checkbox], input[type=radio]').icheck('unchecked');
				$(this).slideUp();
			});

			clearDates.on('click',function(e) {
				e.preventDefault();
				$(this).siblings('.input-date').val("");
				$(this).addClass('is-hidden');
				events.search(list);
			});

			clearFilterText.on('click', function(e) {
				e.preventDefault();
				$(this).siblings('input[type=text], input[type=search]').val("");
				$(this).addClass('is-hidden');
				events.search(list);
			});

			eventsSearch.find('input[type=text], input[type=search]').on('change input propertychange', function(e) {

				if ($(this).val() !== "") {
					$(this).siblings('.js-clear-location, .js-clear-keyword').removeClass('is-hidden');
				} else {
					$(this).siblings('.js-clear-location, .js-clear-keyword').addClass('is-hidden');
				}
			});


			eventsSearch.find("select, .input-date, #query_radius_range").on('change input propertychange',function(){
					$("#query_radius").val($("#query_radius_range").val());
					events.search(list);
			});

			$('.input-date').on('focus', function() {
					$('.date-picker').addClass('fd-dp-fade').css({display: 'none', position: 'absolute', left: '-999em'});
			});

			// show clear link
			checksAndRadios.on('ifChanged', function(e){
					// console.log("Search onCahnge");
					events.search(list);
					if($(this).closest('fieldset').find("input[type=checkbox]:checked, input[type=radio]:checked").length === 0){
							$(this).closest('fieldset').find(".js-clear-inputs").slideUp();
					}else{
							$(this).closest('fieldset').find(".js-clear-inputs").slideDown();
					}
			});

				// // touch event shim
				// $('.location-suggestions div').on('touchstart', function(e){
				// 	$(e.target).trigger('click');
				// });

			eventsSearch.find("input[type=search]#queries_keyword").keypress(function () {
				clearTimeout(events.keywordTimer); // Clear the timer so we don't end up with dupes.
				events.keywordTimer = setTimeout(function() { // assign timer a new timeout
					events.search(list);

				}, 500); //
			});

			eventsSearch.find("input[type=search]#queries_keyword").keydown(function (e) {
				if(e.keyCode==8) // backspace
					eventsSearch.find("input[type=search]#queries_keyword").trigger('keypress');
			});

			searchToggle.on('click', function() {
				searchRefine.slideToggle();

				$('.nstSlider').nstSlider("refresh");

				var text = searchToggleText.text();
				searchToggleText.text(text == "Show" ? "Hide" : "Show");

				datePickerController.hide('#end-date');
				datePickerController.hide('#start-date');
			});



			var text = "";
			for(var i=0; i < items.length; i++){
					text += $(items[i]).find("h3").text() + " " + $(items[i]).find("p").text() + " ";
			}
			text = text.toString().toLowerCase().replace(/[^\w\s]/gi, '').trim();

			var words = text.split(/\s+/).sort().filter( function(v,i,o){return v!==o[i-1];});

			eventsSearch.find("input[type=search]#queries_keyword").autocomplete({
				// local autosuggest options:
				lookup: words, //local lookup values
				minChars:3,
				onSelect: function(value, data){  events.search(list); }
			});

			eventsSearch.submit(function(event){

					event.preventDefault();
					//console.log("submit");

					if(events.location_suggestions.childNodes.length !== 0){ //if location suggesstions
							if(events.selected_seggesstion != -1){// one selected
									events.filerByLocation();
							}else{
									events.selected_suggestion = 0;//select first
									events.filerByLocation();
							}
					}else{
							events.search(list);
					}

			});

			eventsSearch.on('click',"#query_curent_location", function(e){
					e.preventDefault();
					events.location_input.value = "Looking for your location ...";
					if (navigator.geolocation) {
								navigator.geolocation.getCurrentPosition(events.filterByCurrentPosition, function(error){
										var errorMessage = "";
												switch(error.code) {
														case error.PERMISSION_DENIED:
																errorMessage = "User denied the request for Geolocation."
																break;
														case error.POSITION_UNAVAILABLE:
																errorMessage = "Location information is unavailable."
																break;
														case error.TIMEOUT:
																errorMessage = "The request to get user location timed out."
																break;
														case error.UNKNOWN_ERROR:
																errorMessage = "An unknown error occurred."
																break;
												}
												alert(errorMessage);
								});
						} else {
								alert("Geolocation is not supported by this browser.");
						}
			});


			var justText = function(item) {
					return $(item).clone().children().remove().end().text();
			};

		//accessibility
			eventsSearch.find('input[type=text], input[type=search], select, .input-date').on('change keyup', function() {
					// for screenreaders: insert description explaining that the search has been updated
						var descriptionClass = 'input-description_' + $(this).attr('id');

						var relatedLabelText = justText($('label[for="' + $(this).attr('id') + '"]'));

						var inputDescription = '<p class="' + descriptionClass + ' accessible-hide">Search updated, now filtered by ' + relatedLabelText + '. </p><a class="skip-to-filtered-results" href="#events-meta">Skip to filtered results</a>';
						if (!$('.' + descriptionClass).length) {
								// console.log('relatedLabelText: ' + relatedLabelText);
								$(inputDescription).insertAfter($(this));

								$('.' + descriptionClass).next('.skip-to-filtered-results').on('click', function(e) {
										e.preventDefault();
									$('#events-meta > *:visible').first().attr('tabindex', 1);
									$('#events-meta > *:visible').first().focus();
								});
						}
			});

			eventsSearch.find('input[type=date], .input-date').on('change', function() {
					// for screenreaders: insert description explaining that the search has been updated
						var descriptionClass = 'input-description_' + $(this).attr('id');

						var relatedLabelText = justText($('label[for="' + $(this).attr('id') + '"]'));

						var inputDescription = '<p class="' + descriptionClass + ' accessible-hide">Search updated, now filtered by ' + relatedLabelText + '. </p><a class="skip-to-filtered-results" href="#events-meta">Skip to filtered results</a>';
						if (!$('.' + descriptionClass).length) {
								// console.log('relatedLabelText: ' + relatedLabelText);
								$(inputDescription).insertAfter($(this));

								$('.' + descriptionClass).next('.skip-to-filtered-results').on('click', function(e) {
										e.preventDefault();
									$('#events-meta > *:visible').first().attr('tabindex', 1);
									$('#events-meta > *:visible').first().focus();
								});
						}
			});

			eventsSearch.on('click', "#events-search__example a", function(e){
					e.preventDefault();
					$("input[type=search]#queries_keyword").val($(this).text());
					events.search(list);
			});

			var throttleSlide = false;
			var $grip = $('.nstSlider').find('.leftGrip');
			var $label = $('.nstSlider').parent().find('.leftLabel');

			function slideHandler(cause, leftValue) {
				// throttle slider
				if (!throttleSlide) {
					throttleSlide = true;
					clearTimeout(throttleSlideTimer);

					var throttleSlideTimer = setTimeout(function() {
						throttleSlide = false;
					}, 100);

					var gripSize = $grip.outerWidth();
					var rounded = Math.round(leftValue/10) * 10;

					if (leftValue < 10) {
						rounded = Math.round(leftValue);
					}

					$label.text(rounded + 'km');
					$label.css('left', parseInt($grip.css('left')) + gripSize / 2);
					$('#query_radius').val(rounded).trigger('change');
				}
			}

			function slideEnd(leftValue) {
				events.search(list);
				$('.nstSlider, .leftGrip').blur();
				$('.nstSlider').nstSlider("refresh");
			}

			//console.log($("body.touch"));
			if($("body.touch").length == 0){
				$('.nstSlider').nstSlider({
							"left_grip_selector": ".leftGrip",
							"value_bar_selector": ".bar",
							"user_mouseup_callback": slideEnd,
							"value_changed_callback": slideHandler,
							"touch_tolerance_value_bar_x": 20,
							"touch_tolerance_value_bar_y": 20
						});
				$("#query_radius_range").hide();
				$("#min, #max").hide();
			}else{
				$('.nstSlider').remove();
				$("#query_radius_range").show();
				$("#min, #max").show();
			}
				// enquire.register( Utils.mediaQuery(0, Breakpoint.medium), {
				// 	match : function() {
				// 		//$('.nstSlider').nstSlider("refresh");

				// 	}, unmatch : function() {


				// 		//$('.nstSlider').nstSlider("refresh");
				// 	}
				// });

			$window.smartresize(function() {
				if($("body.touch").length == 0)
					$('.nstSlider').nstSlider("refresh");
			});

				// $('body').on('touchend', function() {
				// 	$('.nstSlider, .leftGrip').blur();
				// 	$('.nstSlider').nstSlider("refresh");
				// });

				// $('.nstSlider, .leftGrip').on('touchmove touchend', function(e) {
				// 	$(e.target).trigger('click');
				// });
				//checkboxes & radios - doesn't work because of $30 in id name
				// $('input[type=checkbox], input[type=radio]').on('change', function() {

				//     var descriptionClass = 'input-description_' + $(this).attr('id');

				//     var relatedLabelText = justText($('label[for="' + $(this).attr('id') + '"]'));
				//     console.log('relatedLabelText: ' + relatedLabelText);

				//     var inputDescription = '<p class="accessible-hide">Search updated, now filtered by ' + relatedLabelText + '. <a class="skip-to-filtered-results" href="#events-meta">Skip to filtered results</a></p>';

				//     //  add and then remove when cleared
				//     if (!($('.' + descriptionClass).length)) {
				//         // add
				//         $(inputDescription).insertAfter($(this).closest('label'));

				//         $('.skip-to-filtered-results').on('click', function(e) {
				//           e.preventDefault();
				//           $('#events-meta > *:visible').first().attr('tabindex', 1);
				//           $('#events-meta > *:visible').first().focus();
				//         });

				//       } else {
				//         // remove if exists
				//         $('.' + descriptionClass).remove();
				//       }

				// });

				//console.log(eventsSearch.find("input[type=checkbox], input[type=radio], select"));
			// checksAndRadios.on('ifChanged', function(e){
			//    // console.log("Search onCahnge");
			//   events.search(list);
			//    if($(this).closest('fieldset').find("input[type=checkbox]:checked, input[type=radio]:checked").length === 0){
			//     $(this).closest('fieldset').find(".js-clear-inputs").slideUp();
			//    }else{
			//     $(this).closest('fieldset').find(".js-clear-inputs").slideDown();
			//    }
			// });


		})//;$('.events-search')

		$('.events-quick-view').present( function (quickView, $) {
			var quickViewOverlay = $('.quick-view__overlay');
			var quickViewScroll = $('.quick-view__scroll');
			var quickViewContent = $('.quick-view__content');
			var quickViewFooter = $('.quick-view__footer');

			var quickViewRemodal = $.remodal.lookup[$('[data-remodal-id=modal]').data('remodal')];

			var offset,
				scrollY;

			var windowHeight,
				frameHeight;

			function _populateFields(parentItem){

				var data = {};

				data.Title = parentItem.find("h3").text();
				data.ShortDescription = parentItem.find("p").html();
				data.Address = parentItem.find(".event-location-details").html();
				data.AddressText = parentItem.find(".event-location-details").text(); //for hiding
				data.Contacts = parentItem.attr("data-contacts");

				if(!data.AddressText.trim().length) {
					data.HideLocation = "display:none;"
				} else {
					data.HideLocation = "";
				}

				data.BookingUrl = parentItem.attr("data-booking");
				if(!data.BookingUrl) {
					data.HideBooking = "display:none;"
				} else {
					data.HideBooking = "";
				}

				data.Date =  parentItem.find(".event-date").text();
				data.Price =  parentItem.find(".event-price").text();
				if(parentItem.find(".event-price").hasClass("is-free")){
					data.Free = "is-free";
				}else{
					data.Free = "is-free-NOT"; //;)
				}
				data.Status=parentItem.attr("data-status");


				template = new Template('template-event-preview');
				formsHTML = template.render(data);
				quickViewContent.html(formsHTML);

			}

			$('.js-quickview')
				.text('Book Now')
				.attr('class', 'button booking')
				.each(
					function(){
						var parentItem = $(this).closest('div.events-results-item');
						if(parentItem.length > 0) {
							var bookingUrl = parentItem.attr("data-booking");
							if(!bookingUrl) {
								$(this).hide();
							} else {
								$(this).attr({
									'href': bookingUrl, 'target': '_blank'
								});
							}
						}
					}
				);

			// hide quickview
			$('.quick-view__close, .quick-view__overlay').on('click', function(e) {
					e.preventDefault();

					quickViewRemodal.close();
			});


		});

		events.search(events.container);

	});

});

var sustainability = sustainability || {};

sustainability.building = [];
sustainability.goals = [];
sustainability.usage = [];
sustainability.industries = [];
sustainability.type = [];


sustainability.showCount = 1;
sustainability.dataLoaded = 0;
sustainability.itemsOnPage = 10;


sustainability.paginate = function(container){

        container.find(".sustainability-results-item").show();
        if((sustainability.itemsOnPage * sustainability.showCount) >= container.find(".sustainability-results-item").length ) {
                $(".sustainability-load-more").hide();
        }else{
                $(".sustainability-load-more").show();
                container.find(".sustainability-results-item:gt("+ ((sustainability.itemsOnPage * sustainability.showCount) - 1) +")").hide();
        }
};
sustainability.sort = function(container){

    var order = parseInt($(".sustainability-results__sort option:selected").val());


    //console.log(order);

    var items =  container.find(".sustainability-results-item");

    var featuredCategory = container.find(".sustainability-results-meta").attr("data-featured") || "featured";



    if(order == 0){ //last updated

         items.sort(function (a, b) {
            var aDate = global.parseISO8601($(a).attr("data-last-updated"));
            var bDate = global.parseISO8601($(b).attr("data-last-updated"));
            var afeatured = "";
            var bfeatured = "";

            if(featuredCategory === "featured"){//general page
                afeatured = $(a).attr("data-featured")||"";
                bfeatured = $(b).attr("data-featured");
            }else{
                afeatured = $(a).attr("data-featured-categories")||"";
                bfeatured = $(b).attr("data-featured-categories")||"";
            }

           
            if(afeatured.indexOf(featuredCategory) !== -1 ^ bfeatured.indexOf(featuredCategory) !== -1){
               if(afeatured.indexOf(featuredCategory) !== -1){
                    return -1;
               }else{
                    return 1;
               }
            }else 
                return bDate - aDate;
        });

    }else if(order == 1){// a-z

        items.sort(function (a, b) {
            return $(a).find("h3").text().trim().localeCompare($(b).find("h3").text().trim());
            //return $(a).find("h3").text() > $(a).find("h3").text();
        });

    }else{// z-a

        items.sort(function (a, b) {
             return $(b).find("h3").text().trim().localeCompare($(a).find("h3").text().trim());
           // return $(a).find("h3").text() < $(b).find("h3").text();
        });

    }
    items.appendTo(container);
    
   sustainability.search(container,  $('.sustainability-search').find("input[type=search]"));

    //reorder items by data-rank attribute
   

   

   
};

//matches items with one of the filters (checkboxes)
sustainability.matchItems = function(items, filters){
    var match = true;
      if(filters.length != 0){
        match = false;
        for(var j = 0; j < filters.length && !match; j++ ){
          for(var k = 0; k < items.length; k++)

            if(items[k].trim() == $(filters[j]).attr("value").toLowerCase().trim()){
              match = true;
              break;
            }
        }
      }
    return match;
};

sustainability.search = function(container, currentInput){

        var visibleItems = 0;

        var items = container.find(".sustainability-results-item");

        var keyword = $("#queries_keyword").val().toLowerCase();

      if (currentInput.is('select, input')) {
        var descriptionClass = 'input-description_' + currentInput.attr('id');

        if (currentInput.is('select')) {
          // is select, remove select hint from label text
          var relatedLabelText = justText($('label[for="' + currentInput.attr('id') + '"]'));

        } else {
          // not select
          var relatedLabelText = $('label[for="' + currentInput.attr('id') + '"]').text();
        }
        // console.log('relatedLabelText: ' + relatedLabelText);

        var inputDescription = '<p class="' + descriptionClass + ' accessible-hide">Search updated, now filtered by ' + relatedLabelText + '. <a class="skip-to-filtered-results" href="#sustainability-meta">Skip to filtered results</a></p>';

        if (currentInput.is('input[type="checkbox"], input[type="radio"]')) {
          // is checkbox or radio, add and then remove when cleared
          if (!($('.' + descriptionClass).length)) {
            // add
            $(inputDescription).insertAfter(currentInput.closest('label'));

            $('.skip-to-filtered-results').on('click', function(e) {
              e.preventDefault();
              $('#grants-meta > *:visible').first().attr('tabindex', 0);
              $('#grants-meta > *:visible').first().focus();
            });

          } else {
            // remove if exists
            $('.' + descriptionClass).remove();
          }
        } else {
          // is select or search, add once and never remove
          if (!($('.' + descriptionClass).length)) {
            $(inputDescription).insertAfter(currentInput);

            $('.skip-to-filtered-results').on('click', function(e) {
              e.preventDefault();
              $('.grants-results-meta > *:visible').first().attr('tabindex', 0);
              $('.grants-results-meta > *:visible').first().focus();
            });
          }
        }
      }

        if(keyword.length < 3 && keyword.length != 0){
                return;
        }

        var buildings = sustainability.fieldsetBuilding.find("input:checked");
        var goals = sustainability.fieldsetGoals.find("input:checked");
        var usage = sustainability.fieldsetUsage.find("input:checked");
        var industries = sustainability.fieldsetIndustries.find("input:checked");
        var types = sustainability.fieldsetType.find("input:checked");


        for(var i=0; i < items.length; i++){

            var title = $(items[i]).find("h3").text();
            var text  = $(items[i]).find("p").text();

            var curBuilding = ($(items[i]).attr("data-building_type")|| "").toLowerCase().trim().split("; ");
            var curGoals = ($(items[i]).attr("data-sustainability_goals")|| "").toLowerCase().trim().split("; ");
            var curUsage = ($(items[i]).attr("data-energy_usage_areas")|| "").toLowerCase().trim().split("; ");
            var curType = ($(items[i]).attr("data-resource_type")|| "").toLowerCase().trim().split("; ");
            var curIndustries = ($(items[i]).attr("data-industries")|| "").toLowerCase().trim().split("; ");


            var buildingMatch = sustainability.matchItems(curBuilding, buildings);

            var goalsMatch = sustainability.matchItems(curGoals, goals);

            var usageMatch = sustainability.matchItems(curUsage, usage);

            var industriesMatch = sustainability.matchItems(curIndustries, industries);

            var typesMatch = sustainability.matchItems(curType, types);


            var keywordMatch = true;

            if(keyword.length != 0 && keyword != $("#queries_keyword").attr("placeholder")){
                    keywordMatch = ((title+" "+text).toLowerCase().trim().indexOf(keyword) != -1);

                    if(keywordMatch){
                            $(items[i]).find("h3").html(global.highlight(title, keyword));
                            $(items[i]).find("p").html(global.highlight(text, keyword));
                    }
            }else{ // remove strong tags
                    $(items[i]).find("h3").text(title);
                    $(items[i]).find("p").text(text);
            }



            if(keywordMatch && buildingMatch && goalsMatch && usageMatch && industriesMatch && typesMatch){
                    $(items[i]).show();
                    visibleItems++;
            }else{
                    $(items[i]).hide();
            }
        }

        $(".sustainability-results__status span").text(items.length);
        





        if(!keyword.length && !buildings.length && !goals.length && !usage.length && !industries.length && !types.length){

              sustainability.paginate(container);

            $(".sustainability-results__title").show();
            $(".sustainability-results__count, .sustainability-results__none").hide();

        }else{
            $(".sustainability-load-more").hide();

            if(visibleItems === 0){
                $(".sustainability-results__none").show();

                if(keyword.length != 0){// no keyword filtering
                        $(".sustainability-results__none  .keyword-prefix").show();
                        $(".sustainability-results__none .keyword").text( keyword );
                }else{
                        $(".sustainability-results__none .keyword-prefix").hide();
                }

                $(".sustainability-results__count, .sustainability-results__title").hide();

            }else{
                $(".sustainability-results__count").show();

                if(keyword.length != 0){
                        $(".sustainability-results__count  .keyword-prefix").show();
                        $(".sustainability-results__count .keyword").text(keyword);
                }else
                        $(".sustainability-results__count  .keyword-prefix").hide();

                //displaying count
                $(".sustainability-results__count .number").text(visibleItems);

                if(visibleItems === 1){// result(s)
                        $(".result-ending").text("");
                }else{
                        $(".result-ending").text("s");
                }

                $(".sustainability-results__none, .sustainability-results__title").hide();
            }
        }

};



$(document).ready(function () {

    $window = $(window);
    var isLegacy = $('.lt-ie9').length;
    var root = $('html, body');
    var sidebarleft = $('.column-left');
    var sidebarRight = $('.column-right');
    var sidebarLeftNarrow = $('.column-left_narrow');
    var sidebarRightWide = $('.column-right_wide');
    var overflowedContent = $('.overflowed-content');
    var moduleHeader = $('.module-page-header');
    var moduleText = moduleHeader.find('.text');

    $('.sustainability-category-set').present( function (sustainabilityCategorySet, $) {
        sustainabilityCategorySet.detach().prependTo(overflowedContent);

        var sustainabilityCategory = sustainabilityCategorySet.find('.sustainability-category');
        enquire.register( Utils.mediaQuery(Breakpoint.large), {
            match : function() {
                sustainabilityCategory.matchHeight(false);
            },
            unmatch : function() {
                sustainabilityCategory.css('height', '');
            }
        });
    });

    $('.sustainability-hero').present( function (sustainabilityCategorySet, $) {
        sustainabilityCategorySet.detach().prependTo(overflowedContent);

    });

    $('.sustainability-featured-set').present( function (featuredSet, $) {
        featuredSet.detach().insertBefore('.column-left');

        featuredSet.find('.sustainability-category').matchHeight();
        featuredSet.find("img").each(function(){
            if(!$(this).attr("src")){
                $(this).parent().remove();
            }
        });

    });


    $('.sustainability-hero__buttons').present( function (heroButtons, $) {
        heroButtons.find('a').addClass('external-link').attr('title', 'External link (Opens in new window)').attr('target', '_blank');
    });


    $('.sustainability-results-item').present( function (listedItems, $) {



        $(".sustainability-results__sort select").on("change", function(){
            console.log("!!!!");
            sustainability.sort(listedItems.first().parent());
        });


        $('.column-right_wide').append('<a href="#" class="sustainability-load-more"> Show more</a>');
        $('.column-right_wide').append("<p class='cant-find'>Can't find what you're looking for? <a href='http://www.business.vic.gov.au/marketing-sales-and-online/business-sustainability/environmental-sustainability-hub#sustainability-meta'>View all sustainability resources</a></p>");

        sustainability.paginate(listedItems.first().parent());

        $(".column-right_wide").on("click", ".sustainability-load-more", function(e){
            e.preventDefault();
            sustainability.showCount++;

            sustainability.paginate(listedItems.first().parent());


            // remove focus from button
            $('.sustainability-load-more').blur();
        });





        sustainability.fieldsetBuilding = $("#sustainability-search-building");
        sustainability.fieldsetGoals = $("#sustainability-search-goals");
        sustainability.fieldsetUsage = $("#sustainability-search-usage");
        sustainability.fieldsetIndustries = $("#sustainability-search-industries");
        sustainability.fieldsetType = $("#sustainability-search-type");

        listedItems.each(function(){
            // reading time?
            // toolkit "provided by"?




            var building = $(this).attr("data-building_type");
            if(building){
                var _buildings = building.split(";");
                _buildings.forEach(function(entry) {
                    entry = entry.trim();
                    if(entry && typeof sustainability.building[entry] === 'undefined'){
                        sustainability.building[entry] = entry;
                        var _id = entry.replace(/ /g, '-').replace(/[^\w\s]/gi, '');
                        sustainability.fieldsetBuilding.append('<label for="'+_id+'"><input value="'+entry+'" id="'+_id+'" type="checkbox" />'+entry+'</label>');
                    }
                });
            }


            var goals = $(this).attr("data-sustainability_goals");
            if(goals){
                var _goals = goals.split(";");
                _goals.forEach(function(entry) {
                    entry = entry.trim();
                    if(entry && typeof sustainability.goals[entry] === 'undefined'){
                        sustainability.goals[entry] = entry;
                        var _id = entry.replace(/ /g, '-').replace(/[^\w\s]/gi, '');
                    //    var _name = entry.charAt(0).toUpperCase() + entry.slice(1);
                        sustainability.fieldsetGoals.append('<label for="'+_id+'"><input value="'+entry+'" id="'+_id+'" type="checkbox" />'+entry+'</label>');
                    }
                });
            }

            var usage = $(this).attr("data-energy_usage_areas");
            if(usage){
                var _usage = usage.split(";");
                _usage.forEach(function(entry) {
                    entry = entry.trim();
                    if(entry && typeof sustainability.usage[entry] === 'undefined'){
                        sustainability.usage[entry] = entry;
                        var _id = entry.replace(/ /g, '-').replace(/[^\w\s]/gi, '');
                    //    var _name = entry.charAt(0).toUpperCase() + entry.slice(1);
                        sustainability.fieldsetUsage.append('<label for="'+_id+'"><input value="'+entry+'" id="'+_id+'" type="checkbox" />'+entry+'</label>');
                    }
                });
            }


            var industries = $(this).attr("data-industries");
            if(industries){
                var _industries = industries.split(";");
                _industries.forEach(function(entry) {
                    entry = entry.trim();
                    if(entry && typeof sustainability.industries[entry] === 'undefined'){
                        sustainability.industries[entry] = entry;
                        var _id = entry.replace(/ /g, '-').replace(/[^\w\s]/gi, '');
                    //    var _name = entry.charAt(0).toUpperCase() + entry.slice(1);
                        sustainability.fieldsetIndustries.append('<label for="'+_id+'"><input value="'+entry+'" id="'+_id+'" type="checkbox" />'+entry+'</label>');
                    }
                });
            }

            var type = $(this).attr("data-resource_type");
            if(type){
                var _type = type.split(";");
                _type.forEach(function(entry) {
                    entry = entry.trim();
                    if(entry && typeof sustainability.type[entry] === 'undefined'){
                        sustainability.type[entry] = entry;
                        var _id = entry.replace(/ /g, '-').replace(/[^\w\s]/gi, '');
                    //    var _name = entry.charAt(0).toUpperCase() + entry.slice(1);
                        sustainability.fieldsetType.append('<label for="'+_id+'"><input value="'+entry+'" id="'+_id+'" type="checkbox" />'+entry+'</label>');
                    }
                });
            }


        });
    });

    $('.sustainability-search').present( function (sustainabilitySearch, $) {
        // var sustainabilitySearch = $('.sustainability-search');
        var clearSearch = $('.js-clear-inputs');
        var clearAll = $('.js-clear-all');
        var searchToggle = $('.sustainability-search__toggle');
        var searchRefine = $('.sustainability-search__refine');
        var searchToggleText = $('.sustainability-search__visibility');
        var isLegacy = $('.lt-ie9').length > 0;
        var timer = 0;
        var items  = $(".sustainability-results-item");
        var checksAndRadios = sustainabilitySearch.find("input[type=checkbox], input[type=radio]");
        var scrollToSearch = $('.js-scroll-to-search');

        var multiToggle = $('.multiselect-accordion legend a');

        moduleText.append('<a href="#queries_keyword" class="go-to-search js-scroll-to-search">Search for resources</a>');

        // move into sidebars
        $('.sustainability-list').detach().prependTo(sidebarRightWide);
        sustainabilitySearch.detach().prependTo(sidebarLeftNarrow);

        var scrollToSearch = $('.js-scroll-to-search');

        scrollToSearch.on('click', function(e) {
            e.preventDefault();
            var searchTop = sustainabilitySearch.offset().top;
            root.animate({
                scrollTop: searchTop
            }, 500, function() {
                $('#queries_keyword').focus();
            });
        });

        var text = "";

        for(var i=0; i < items.length; i++){
            text += $(items[i]).find("h3").text() + " " + $(items[i]).find("p").text() + " ";
        }

        text = text.toLowerCase().replace(/[^\w\s]/gi, '').trim();

        var words = text.split(/\s+/).sort().filter( function(v,i,o){return v!==o[i-1];});

        sustainabilitySearch.find('input').icheck({
            cursor: true
        });

        $('sustainability-search__refine label').each(function() {
            $(this).contents().filter(function(){
                return this.nodeType === 3;
            }).wrap('<span aria-hidden="true" aria-presentation="true"></span>');
        });

        clearSearch.on('click',function(e) {
            e.preventDefault();
            $(this).closest('fieldset').find('input[type=checkbox], input[type=radio]').icheck('unchecked');
            $(this).slideUp();
        });

        clearAll.on('click',function(e) {
            e.preventDefault();
            sustainabilitySearch.find('input[type=checkbox], input[type=radio]').icheck('unchecked');
        });

        scrollToSearch.on('click', function() {
            var searchTop = sustainabilitySearch.offset().top;
            root.animate({
                scrollTop: searchTop
            }, 500, function() {
                sustainabilitySearch.find('.keyword input[type=search]').focus();
            });
        });

        sustainabilitySearch.find("input[type=search]").autocomplete({
            // local autosugest options:
            lookup: words, //local lookup values
            minChars:3,
            onSelect: function(value, data){
                 sustainability.search($(".sustainability-results-item").first().parent(), sustainabilitySearch.find("input[type=search]"));
            }
        });

        multiToggle.on('click', function(e) {
            e.preventDefault();
            $(this).parent().siblings('.multiselect-accordion__content').slideToggle();
        });

        sustainabilitySearch.submit(function(event){
            event.preventDefault();

            sustainability.search($(".sustainability-results-item").first().parent(), sustainabilitySearch.find("input[type=search]"));
        });

        checksAndRadios.on('ifChanged', function(e){
            // console.log("Search onChange");
            sustainability.search($(".sustainability-results-item").first().parent(), $(this));
            if($(this).closest('fieldset').find("input[type=checkbox]:checked, input[type=radio]:checked").length === 0){
                $(this).closest('fieldset').find(".js-clear-inputs").slideUp();
            } else {
                $(this).closest('fieldset').find(".js-clear-inputs").slideDown();
            }
        });


        // sustainabilitySearch.find("select").on('change',function(){
        //     // console.log("Search onChange");
        //     // search(sustainabilitySearch, items, $(this));
        // });

        sustainabilitySearch.find("input[type=search]").keypress(function () {
            clearTimeout(timer); // Clear the timer so we don't end up with dupes.
            timer = setTimeout(function() { // assign timer a new timeout
                sustainability.search($(".sustainability-results-item").first().parent(), sustainabilitySearch.find("input[type=search]"));
            }, 500);
        });

        sustainabilitySearch.find("input[type=search]").keydown(function (e) {
            if(e.keyCode==8) { // backspace
                sustainabilitySearch.find("input[type=search]").trigger('keypress');
            }
        });

        // search(sustainabilitySearch, items, $(this));

        searchToggle.on('click', function() {
            searchRefine.slideToggle();

            var text = searchToggleText.text();
            searchToggleText.text(text == "Show" ? "Hide" : "Show");
        });
        sustainability.sort($(".sustainability-results-item").first().parent());
        
        
    });

});

/**
 * Content modules
 */
jQuery(document).ready(function ($) {

	jQuery('.module-content').present(function (moduleContent, $) {

		var $document = $(document),
			$window = $(window);


		/**
		 * Create the new modules
		 * --------------------------------------------
		 */

		var moduleContentContainer = moduleContent.find('.column-left');

		// init stuff
		var newModules = [];
		var newModulesHTML = "";

		// Add to the modules object
		function _push_module(element, module) {
			var _this = $(element);
			if (_this.html().length > 0) {
				newModules.push(module);
			} else {
				_this.remove();
			}
		}

		if (moduleContentContainer.find("a[data-id='86294']").length > 0 && Device.small)
			moduleContentContainer.find("a[data-id='86294']").attr("href", "http://m.business.vic.gov.au/mobile/ems/home.do");

		// Find elements (order is important) // then hide em with js
		moduleContentContainer.find('> [class*=case-study]').present(function (element) {
			_push_module(element, 'module-case-study');
			$(element).hide();
		});

		moduleContentContainer.find('> .social-promotion, > .social').present(function (element) {
			_push_module(element, 'module-social');
			$(element).hide();
		});

		moduleContentContainer.find('> .next, > form > .next, > .related, > form > .related').present(function (element) {
			_push_module(element, 'module-next');
			$(element).hide();
		});

		moduleContentContainer.find('> .tools, > .events').present(function (element) {
		//moduleContentContainer.find('> .tools').present(function (element) {
			_push_module(element, 'module-tools'); // was content-tabs
			$(element).hide();
		});

		// Loop over object and create elements
		$.each(newModules, function (index, value){
			newModulesHTML += '<div class="' + value + '" id="#_' + value + '"></div>';
		});

		// Append after content module
		moduleContent.after(newModulesHTML);


		$('.slideshow').present( function (slideshowHolder, $) {

	        // scaffold carousel wrapper & pagination
	        slideshowHolder.addClass('is-visible').append('<div id="carousel-wrapper" class="js-carousel-awards"><div class="carousel-pagination"><a href="#" class="carousel-pagination__prev">&lsaquo; Previous image</a><div class="carousel-pagination__count"></div><a href="#" class="carousel-pagination__next">&rsaquo; Next image</a></div><div id="carousel"></div></div>');
	        // populate with frames
	        slideshowHolder.find('span').each(function(){
	            if(!$(this).find('.img-caption').length ){
	              $(this).append('<p class="img-caption">&nbsp;</p>');
	            }
	            $(this).detach().appendTo(slideshowHolder.find('#carousel'));
	        });

	        // remove source scraps
	        // $('#carousel').unwrap();
	        // re-init slider now that markup is built
	        initSliders();

	        // var captionExists = slideshowHolder.find('.img-caption').length;

	        // if (!captionExists) {
	        //     $('#carousel').find('span').append('<p class="img-caption">&nbsp;</p>');
	        // }
	    });


		/**
		 * Move case studies
		 * --------------------------------------------
		 */

		moduleContentContainer.find('> [class*=case-study]').present(function (element) {

			// The module object
			moduleCaseStudy = $('.module-case-study');

			// Data object
			var header = element.find(':header').first(),
				img = element.find('img').first();

			// Markup variables
			var csAccordianMarkup = '';
			var csDefaultMarkup = '';

			// Build data
			var data = {
				_class : element.attr('class'),
				headerText : header.text(),
				headerTag : header.prop('tagName'),
				slug : '_' + Utils.convertToSlug(header.text())
			};

			// Grab then remove image
			if (img.length > 0) {
				data.img = img[0].outerHTML;
				element.find('img').remove();
			}

			// Remove the header element
			if (header.length > 0) {
				element.find(':header').first().remove();
			}

			// Create the new HTML
			data.contentHTML = element[0].innerHTML;

			// Remove the element form the DOM
			element.remove();

			// Build markup
			function _case_study_toggle_markup() {

				// Check if the markup has been written, else create it
				if(csAccordianMarkup.length < 1) {
					var template = new Template('template-case-study-toggle');
					csAccordianMarkup = template.render(data);
				}
				return csAccordianMarkup;

			}

			function _case_study_default_markup() {

				// Check if the markup has been written, else create it
				if (csDefaultMarkup.length < 1) {
					var template = new Template('template-case-study-default');
					csDefaultMarkup = template.render(data);
				}
				return csDefaultMarkup;

			}

			// Insert markup change at breakpoints
			enquire.register(Utils.mediaQuery(0, Breakpoint.large), {
				match : function() {
					moduleCaseStudy.html( _case_study_toggle_markup() );
				},
				unmatch : function() {
					//
				}
			},true);

			enquire.register( Utils.mediaQuery(Breakpoint.large), {
				match : function() {
					moduleCaseStudy.html( _case_study_default_markup() );
				},
				unmatch : function() {
					// moduleCaseStudy.html( _case_study_toggle_markup() );
				}
			},true);


			// Add event handlers
			moduleCaseStudy.on('click', '.toggle-title',  function (event) {
				event.preventDefault;
				var _this = $(this),
					_class = 'open',
					uiToggleBox = _this.parents('.ui-toggle-box'),
					toggleContent = uiToggleBox.find('.toggle-content'),
					isOpen = uiToggleBox.hasClass(_class);

				Utils.slideTab(isOpen, toggleContent, uiToggleBox, _class);
				return false;
			});

		});









		/**
		 * Move tabs to tools module
		 * --------------------------------------------
		 */


		moduleContentContainer.find('> .tools, > .events').present(function (element) {


			// The module object
			moduleTools = $('.module-tools');

			// Mark external urls
			moduleTools.markExternal(InternalURLs, 'external-link');

			// Data object
			var data = {};

			//loop over tools divs and fetch the data
			element.each(function (index) {

				var section = $(this),
					header = section.find('h3');

				data[index] = {
					_class : section.attr('class'),
					headerText: header.text(),
					headerTag: header.prop('tagName'),
					contentHTML: header.remove().end().html(),
					slug: '_' + Utils.convertToSlug(header.text())
				};

			});

			// Remove the elements
			element.remove();

			// Invoke mobile breakpoint
			enquire.register( Utils.mediaQuery(0, Breakpoint.large), {
				match : function () {

					// The template
					var templateAccordion = new Template('template-content-toggle');

					//find each accordion and create HTML
					var html = '';
					$.each(data, function (index, value) {
						html += templateAccordion.render(data[index]);
					});

					// Insert the html
					moduleTools.html(html);



					// Add event handlers
					moduleTools.find('.toggle-title').on('click', function (event) {
						event.preventDefault;
						var _this = $(this),
							_class = 'open',
							uiToggleBox = _this.parents('.ui-toggle-box'),
							toggleContent = uiToggleBox.find('.toggle-content'),
							isOpen = uiToggleBox.hasClass(_class);

						Utils.slideTab(isOpen, toggleContent, uiToggleBox, _class);
						return false;
					});

				},
				unmatch : function() {

					// Empty
					// moduleCaseStudy.html('');

				}
			});

			// Invoke large breakpoint
			enquire.register( Utils.mediaQuery(Breakpoint.large), {
				match : function() {

					//define the templates
					var templateTabs = new Template('template-tabs-tab'),
						templatePanes = new Template('template-tabs-pane'),
						templateWidget = new Template('template-tabs-widget'),
						tabsHTML = '',
						panesHTML = '',
						html = '';

					// Build the tabs and panes
					$.each(data, function (index, value) {
						tabsHTML += templateTabs.render(data[index]);
						panesHTML += templatePanes.render(data[index]);
					});

					// Build the HTML
					html += '<div class="ui-tabs">';
					html += templateWidget.render({tabs: tabsHTML, panes: panesHTML});
					html += '</div>';

					// Insert HTML
					moduleTools.html(html);

					// Now find the new divs and attach listeners
					wrapper = moduleTools.find('.ui-tabs');

					// Tabs
					var tabs = wrapper.find('.nav a'),
						panes = wrapper.find('.content > div'),
						_class = 'active';

					// Set active class to first tabs
					wrapper.find('.nav a').first().addClass(_class);
					wrapper.find('.content > div').first().addClass(_class);

					//tab click listeners
					tabs.each(function () {

						var tab = $(this),
							index = tab.index(),
							pane = panes.eq(index);

						tab.on('click', function (event) {
							 event.preventDefault();

							 tabs.removeClass(_class);
							 panes.removeClass(_class);

							 tab.addClass(_class);
							 pane.addClass(_class);

						 });
					});

				},
				unmatch : function() {

					// Empty
					// moduleCaseStudy.html('');

				}
			},true);

		});


		/**
		 * Move social banner to go after case study
		 * --------------------------------------------
		 */

		moduleContentContainer.find('> .social-promotion, > .social').present(function (element) {

			var moduleHTML = '';

			// Build a string
			element.each(function (index, element) {
				 moduleHTML += element.outerHTML;
			});

			$('.module-social').html(moduleHTML);

			element.remove();

		});


		/**
		 * Create the 'next' module
		 * --------------------------------------------
		 */

		moduleContentContainer.find('> .next, > form > .next, > .related, > form > .related').present(function (element) {

			// Data object
			var data = {};
			var i = 0;

			//loop over tools divs and fetch the data
			element.each(function (index) {

				// object
				var section = $(this).clone();
					header = section.find('h3');

				data[index] = {
					_class : section.attr('class'),
					headerText: header.text(),
					headerTag: header.prop('tagName'),
					contentHTML: header.remove().end().html(),
					slug: '_' + Utils.convertToSlug(header.text())
				};

				// Increment
				i++;


			});

			// Build HTMl for the form
			var options = {
				0: "yes",
				1: "somewhat",
				2: "no"
			};

			var templateFeedbackItems = new Template('template-feedback-item'),
				templateFeedbackItemsHTML = '';

			$.each(options, function (index, value) {
				templateFeedbackItemsHTML += templateFeedbackItems.render({
					option : value
				});
			});


			// Add form to data
			templateForm = new Template('template-feedback');
			data[i+1] = {
				_class : 'feedback-form',
				headerText: 'Was this page helpful?',
				headerTag: 'H3',
				contentHTML: templateForm.render({"items" : templateFeedbackItemsHTML}),
				slug: '_' + Utils.convertToSlug('Was this page helpful')
			};

			// Attach functionality to the form
			function _nxt_form() {

				var nextForms = moduleNext.find('#_feedback form');

				nextForms.each(function () {

					var form = $(this),
						toggleForms = form.find('.toggle-form'),
						toggleFormsBoxes = form.find('.toggle-box'),
						formConfirm = moduleNext.find('#_feedback .confirm');
						_class = 'open';

					toggleForms.each(function () {
						var toggleForm = $(this),
							option = toggleForm.attr('data-option') || 'Error',
							toggleHandle = toggleForm.find('.toggle-handle'),
							toggleBox = toggleForm.find('.toggle-box'),
							cancel = toggleForm.find('.cancel'),
							submit = toggleForm.find('.submit'),
							textarea = toggleForm.find('textarea'),
							speed = 300;

						toggleHandle.on('click', function (event) {
							event.preventDefault();
							toggleFormsBoxes.slideUp(speed);
							toggleBox.slideDown(speed);
							return false;
						});

						cancel.on('click', function (event) {
							event.preventDefault();
							toggleFormsBoxes.slideUp(speed);
							return false;
						});

						//handle form submission
						submit.on('click', function (event){
							event.preventDefault();
							nextForms.hide();
							formConfirm.show();
							return false;
						});
					});
				});

			}

			// Remove the elements
			moduleContentContainer.find('> .next, > form > .next').remove();

			// Now taht it exists grab the module object
			moduleNext = $('.module-next');

			// Invoke mobile breakpoint
			enquire.register( Utils.mediaQuery(0, Breakpoint.large), {
				match : function () {

					// The template
					var templateAccordion = new Template('template-content-toggle')
						templateForm = new Template('feedback-template');

					//find each accordion and create HTML
					var html = '<div class="ui-toggle-boxes">';
					$.each(data, function (index, value) {
						html += templateAccordion.render(data[index]);
					});
					html += '</div>';

					// Insert the html
					moduleNext.html(html);

					// Add event handlers
					moduleNext.find('.toggle-title').on('click', function (event) {
						event.preventDefault;
						var _this = $(this),
							_class = 'open',
							uiToggleBox = _this.parents('.ui-toggle-box'),
							toggleContent = uiToggleBox.find('.toggle-content'),
							isOpen = uiToggleBox.hasClass(_class);

						Utils.slideTab(isOpen, toggleContent, uiToggleBox, _class);
						return false;
					});
					if(moduleNext.find('.next .toggle-title').text() == "<>"){//empty next div
						moduleNext.find('.next').hide();
					}
					// Create form functionality
					_nxt_form();

				},
				unmatch : function() {

					// Empty
					// moduleNext.html('');

				}
			});

			// Invoke large breakpoint
			enquire.register( Utils.mediaQuery(Breakpoint.large), {
				match : function() {

					// The template
					var templateColumn = new Template('template-next-default'),
						templateForm = new Template('feedback-template');

					//find each accordion and create HTML
					var html = '<div class="ui-columns">';
					$.each(data, function (index, value) {
						html += templateColumn.render(data[index]);
					});
					html += '</div>';

					// Insert the html
					moduleNext.html(html);

					if(moduleNext.find('.next .title').text() == "<>"){//empty next div
						moduleNext.find('.next').hide();
					}
					// Create form functionality
					_nxt_form();

				},
				unmatch : function() {

					// Empty
					// moduleNext.html('');

				}
			},true);




			// External links
			moduleNext.markExternal(InternalURLs, 'external-link');

		});


		/**
		 * Move content to sidebar
		 * --------------------------------------------
		 */

		moduleContentContainer.find('> .related, > form > .related, > .whats-next, .calculator-result').present(function (related) { //By Kirill, Jack

			//move results into right column
			$('.column-right').present(function(columnRight){

				// Move it to sidebar
				related.appendTo(columnRight);


				// Defaults
				var _ss_start = 0,
					_ss_end = 0;

				// Seek sidebar in it's new location (overwrite object in memory)
				related = $('.module-content .column-right').find('.related, .whats-next, .calculator-result');

				// mark external links
				related.markExternal(InternalURLs, 'external-link');

				// Do the sticky thing
				function _toggleSticky(start, end) {

					var scrollY = $window.scrollTop();

					if (scrollY > start && scrollY < end) {
						_translate(scrollY - start);
					}
					else if (scrollY < start) {
						_translate(0);
					}

				}

				// Calculate the position
				function _translate(y) {
					// Invoke only at large breakpoint
					enquire.register( Utils.mediaQuery(Breakpoint.medium), {
						match : function() {
							if ($('.csstransforms').length) {
								related.css("transform", "translate(0," + y + "px)");
							} else {
								related.css("margin-top", y);
							}
						},
						unmatch : function() {
							if ($('.csstransforms').length) {
								related.css("transform", "translate(0,0)");
							} else {
								related.css("margin-top", 0);
							}
						}
					},true);

				}

				// Function to fire on load/resize
				function _findPos() {
					// reset transforms before doing calculations
					if ($('.csstransforms').length) {
						related.css("transform", "translate(0,0)");
					} else {
						related.css("margin-top", 0);
					}
					// choose correct offsets
					if ($('.module-content .overflowed-content').length) {
						var content = $('.module-content .overflowed-content');
					} else {
						var content = $('.module-content');
					}
					var columnRight = content.find('.column-right');
					var columnFull = $('.column-right + .column-full');

					var columnRightHeight = columnRight.height();
					var contentRightTop = columnRight.offset().top;
					var contentInnerTopOffset = related.offset().top - contentRightTop - 32;
					var contentHeight = content.height() - (contentRightTop - content.offset().top);

					var columnFullHeight = 0;
					if (columnFull.length) {
						columnFullHeight = columnFull.height();
					}

					// console.log("inneroff: " + contentInnerTopOffset);
					// console.log('colfull height: ' + columnFullHeight);
					// console.log('cobtent height: ' + contentHeight);

					if (contentInnerTopOffset) {
						_ss_start = contentRightTop + contentInnerTopOffset;
						_ss_end = contentRightTop + contentHeight - columnFullHeight - (columnRightHeight - contentInnerTopOffset);
					} else {
						_ss_start = contentRightTop;
						_ss_end = contentRightTop + contentHeight - columnFullHeight - columnRightHeight;
					}

					// console.log("ssstart:" + _ss_start);
					// console.log("ssend:" + _ss_end);

					// reapply transform after calculations completed
					_toggleSticky(_ss_start, _ss_end);
				}

				if ($('.csstransforms').length) {
					related.css("transform", "translate(0,0)");
				} else {
					related.css("margin-top", 0);
				}

				// Invoke only at large breakpoint
				enquire.register( Utils.mediaQuery(Breakpoint.medium), {
					match : function() {
						related.show();

						_findPos();
						$window.smartresize(function () {
							_findPos();
						});

						$window.scroll(function () {
							_toggleSticky(_ss_start, _ss_end);
						});
					}
				},true);


			});

		});



		/**
		 * Form validation
		 * --------------------------------------------
		 */



			// Australian phone number
			jQuery.validator.addMethod("phoneAU", function(value, element) {

				return this.optional(element) || /^(\+?61|0)\d{9}$/.test(value.replace(/\s+/g, ""));
			}, "Please enter a valid phone number");


						// Australian mobile phone number
			jQuery.validator.addMethod("mobileAU", function(value, element) {
				return this.optional(element) || /^(\+?61|0)4\d{8}$/.test(value.replace(/\s+/g, ""));
			}, "Please specify a valid mobile phone number");


		 moduleContentContainer.find("form").not("#form_email_88186, #sustainability-form").each(function () {


		 // 	$(this).on( "submit", function( event ) {
			// 	 // event.preventDefault();
			// 	  console.log( $(this).serialize() );
			// });


		 	$(".areas input[type='checkbox']").change(function() {



					var checkboxes  = $(".areas input[type=checkbox]");
					var options  = $(".areas select option");

					if(checkboxes.length != options.length){
						console.error("Form is broken");
						return;
					}

					for(var i = 0 ; i < checkboxes.length; i++){

						options[i].selected = checkboxes[i].checked;

					}

			 });

		 	$("input#phone").change(function(){
		 		var val = $(this).val();

		 		if(val[0] == "0"){
		 			val = "+61" + val.substr(1);
		 			$(this).val(val);
		 		}else if(val[0] == "6" && val[1] == "1"){
		 			val  = "+" + val;
		 			$(this).val(val);
		 		}

		 	});


			$(this).validate({

				rules: {
			        phone: {
			            required: true,
			           	phoneAU: true
			        }
			    },
				 // rules: {
				 //	givenName: {
				 //	  required: true,
				 //	  minlength: 2
				 //	},
				 //	familyName: {
				 //	  required: true,
				 //	  minlength: 2
				 //	},
				 //  },
				errorElement: "div",
				messages: {
					givenName: "Please enter your given name",
					familyName: "Please enter your family name",
					emailAddress: "Please enter a valid email address",
					comments: "Please enter a comment",
					"q80132:q3": "Please enter a valid email address", //old red tape
					"q80132:q3": "Please enter a valid email address", //new red tape
					"q80134:q1": "Please enter details about the issue you are having", //old red tape
					"q89036:q1": "Please enter details about the issue you are having", //new red tape
					company: "Please enter your company&rsquo;s name",
					first_name: "Please enter your first name",
					last_name: "Please enter your last name", //modified by BVO
					street: "Please enter your address",
					city: "Please enter your suburb", //modified by BVO
					email: "Please enter a valid email address",
					//phone: "Please enter a valid phone number",
					"00N90000001CrQx": "Please enter a valid Australian Business Number (without spaces)",
					description: "Please enter your company&rsquo;s core business",
					state: "Please select your state",

					//phone: "Please enter a valid phone number", //modified by BVO
					"q89031:q3": "Please enter a valid email address",  //added by BVO
					zip: "Please enter your postcode", //added by BVO
					"00N900000031Dgn": "Please select your Local Government Authority", //added by BVO
					industry: "Please select your Industry", //added by BVO
					"00N90000000nAQv": "Please select your Industry Sub-Sector", //added by BVO
					employees: "Please enter number of employees", //added by BVO
					"00N90000009kzcc": "Please enter the Date Business Commenced", //added by BVO
					"00N90000009kzca": "Please select Areas in which I wish to be consulted" ,//added by BVO

					phone: "Please enter a valid phone number starting with +61",
					'gross-revenue': "Gross revenue: Oops. Enter a number equal to revenue from one year of business.",
		            'staff-number': "Staff number: Oops. Enter the average number of staff from one year only.",
		            'hourly-rate': "Hourly rate: Oops. Enter a number that represents an hourly rate, not daily.",
		            'annual-wages': "Annual wages: Oops. Please enter a number equal to wages from one year of business.",
		            'working-days': "Working days: Oops. Please enter a number that represents days worked within a year.",
		            'overtime-rate': "Overtime rate: Oops. Enter a number that represents an hourly rate, not daily.",
		            'overtime-multiplier': "Overtime multiplier: Oops. Enter a number less than 5.",
		            'outgoing-cost': "Outgoing cost: Oops. Please enter a number equal to expenses from one year of business.",
		            "abscence": "Outgoing cost: Oops. Please enter a number equal to expenses from one year of business."


				},
				invalidHandler: function (event, validator) {

					// 'this' refers to the form
					var errors = validator.numberOfInvalids();

						if (errors) {
							//validation failed


							var areas = $(this).find("input[name='areas_checkboxes']").serializeArray();


							if(areas.length == 0){
								$(this).find(".areas label[for='areas_checkboxes']").addClass("unticked");
								$(this).find(".areas label[for='areas_checkboxes']").html('Please select Areas in which I wish to be consulted');
								setTimeout(
		                            function(){ $(".areas div.error").hide(); }
		                        , 500);

							}else{
								 $(this).find(".areas label[for='areas_checkboxes']").removeClass("unticked");
								$(this).find(".areas label[for='areas_checkboxes']").html('Areas in Which I Wish to Be Consulted <em title="required">Required</em>');

							}


							if (!$(this).find("input#bus_terms[type=checkbox]").is(":checked")){
								$(this).find("label.terms").addClass("unticked");
								$(this).find("label.terms >span").html("You must indicate you've read and accept our <a title='Link opens in a new window' target='_blank' href='"+HOME_URL+"/privacy/detailed-privacy-statement#IntNav10'>privacy statement</a>");
								setTimeout(
			                            function(){ $("div.error[for=terms]").hide();}
			                        , 500);
							}
							else{
							   $(this).find("label.terms").removeClass("unticked");
							   $(this).find("label.terms >span").html("<span class='form-required'>Required</span>");

							  }

					} else {
					   //form will be submited
					}
				},
				errorPlacement: function(error, element) {
				   // error.appendTo( element.parentNode );
				    if(element.hasClass("calculator-slider__label")){

				    	$(".calculator-slider__item").append(error);

				    	//error.insertAfter(element.parentNode);
				    }else
				    	error.insertAfter(element);

				  }



			});
		});




		/**
		 * Wrap table for small screen scrolling
		 * --------------------------------------------
		 */

		moduleContentContainer.find('table').present(function (tables) {

			var tableTemplate = new Template('template-table-wrap'),
				content = moduleContentContainer;

			//create the html for each table
			tables.each(function () {

				var table = $(this),
					html = table[0].outerHTML;

				// Insert the new markup
				table.after(tableTemplate.render({table: html}));

				// Delete the old markup
				table.remove();
			});

			function _table_overflow() {

				$('.table-responsive').each(function (index, element){
					var _this = $(element),
						table = _this.find('table'),
						scroller = _this.find('.scroller')[0],
						tolerance = 3; // allows for IE11 and borders

					// If table is bigger
					if(scroller.offsetWidth+tolerance < scroller.scrollWidth) {
						_this.addClass('overflow');
					} else {
						_this.removeClass('overflow');
					}
				});

			}

			$window.smartresize(_table_overflow);
			_table_overflow();

		});

		/**
		 * Open table in new window
		 */

		//  $('.table-responsive').present(function (tableWrapper) {
		// 	  tableWrapper.find('._nw').on('click', function (event) {

		// 		 event.preventDefault;

		// 		 var w = window.open();
		// 		 var html = tableWrapper.find('table').html();

		// 		 $(w.document.body).html(html);

		// 		 return false;

		// 	 });
		// });


		moduleContentContainer.find('.sitemap').present(function (sitemap) {
			var menu = sitemap.find('>ul'),
				data = {},
				sitemapTemplate = new Template('template-sitemap');

			// Render the template
			data['contentHTML'] = menu.html();
			html = sitemapTemplate.render(data);

			// Insert into HTML
			sitemap.after(html);
			sitemap.remove();

			// The sitemap element
			var uiSitemap = moduleContentContainer.find('.ui-sitemap');

			// Insert icon if has children
			uiSitemap.find('li').each(function (index, element) {
				var el = $(element);
				if(el.find('ul').length > 0) {
					el.addClass('has-children');
					el.find('>a').append('<span title="Click or tap to view more"></span>');
				}

			});

			// Attach events
			uiSitemap.find('a').on('click', function (event) {

				var li = $(this).parent('li'),
					next = $(this).next();

				if(next.is("ul")) {
					event.preventDefault;
					next.slideToggle(300);
					li.toggleClass('open');
					return false;
				}

			});

		});

		// moduleContentContainer.find('.sidebar').present(function (sidebar) {
		// 	var html = $(sidebar).html();
		// 	$('.column-right .related').present(function (related)  {
		// 		$(related).append(html);
		// 	});

		// });

		moduleContent.find('[name="queries_searchterm_query"]').present( function (input) {
			$(input).attr('placeholder', 'Search directory for...');
		});

		// Mark external urls
		moduleContent.markExternal(InternalURLs, 'external-link');

		// Fit videos
		moduleContentContainer.fitVids();

		// rwd image maps
		moduleContentContainer.find('img[usemap]').rwdImageMaps();



	});

	if ($('.lt-ie9').length) {
		jQuery('.module-breadcrumbs').present(function () {
			$('.module-breadcrumbs li:last-child').addClass('last-breadcrumb');
		});
	}
});

jQuery('.module-footer').present(function (moduleFooter, $) {

    var newsletterLink = moduleFooter.find(".newsletters a"),
        template = new Template('template-newsletters'),
        formsHTML = template.render({home: HOME_URL});

    // Create the footer module object
    // IE8 chokes on HTML inserted in any other form
    var moduleSubscribe = $('<div>');
    moduleSubscribe.attr('class', 'subscribe');
    moduleSubscribe.attr('id', 'subscribe-to-newsletters');
    moduleSubscribe.html(formsHTML);
    moduleFooter.append(moduleSubscribe);

    moduleSubscribe.markInternal(InternalURLs, 'internal-link');

    //switch order for festival pages
    if($("body").hasClass("section-festival")){
      moduleSubscribe.find(".design-small-business").detach().insertAfter(moduleSubscribe.find(".header"));
    }

    // Open the newsletter module
    function _open_newsletters(_this) {

        $('html,body').animate({
          scrollTop: _this.offset().top-40
        }, 1000);

        moduleSubscribe.show();
        moduleSubscribe.find(" label.terms").removeClass("unticked");
        moduleSubscribe.find("p.error").hide();

        var diff = (_this.offset().top - moduleSubscribe.offset().top) - 21;

        moduleSubscribe.css({marginBottom: diff, top: diff});


        if($("body").hasClass("section-festival")){
          moduleSubscribe.find(".design-small-business .toggle").trigger("click");
        }

        // moduleSubscribe.find(".active input[type='checkbox']").focus();
        moduleSubscribe.find(".close").focus();
    }

    // Close the module
    function _close_newsletters() {
        moduleSubscribe.hide();
        moduleSubscribe.css("top", 0);
        moduleSubscribe.css("margin-bottom", 0);
    }

    // Register click event to open
    newsletterLink.on("click", function (event) {
        event.preventDefault();
        _open_newsletters($(this));
    });

    // On close
    moduleSubscribe.on("click", ".close", function (event) {
        event.preventDefault();
        _close_newsletters();
        newsletterLink.focus(); // return focus to newsletter link
    });


    // Toggles
    moduleSubscribe.on("click", ".toggle", function (event) {
        event.preventDefault();
        var $this = $(this),
            parent = $this.parent(),
            _class = 'active',
            flag = parent.hasClass(_class);

        moduleSubscribe.find(" label.terms").removeClass("unticked");
        moduleSubscribe.find("p.error").hide();
        moduleSubscribe.find("." + _class).removeClass(_class);
        parent.toggleClass(_class, !flag);

        moduleSubscribe.find(".active input[type='checkbox']").focus();
    });

    // Validation
    moduleSubscribe.find("form").each(function () {
        $(this).validate(
        {
          invalidHandler: function (event, validator) {
                // 'this' refers to the form
                var errors = validator.numberOfInvalids();

                if (errors) {

                    if (!moduleSubscribe.find(".active input[type=checkbox]").is(":checked")){
                        moduleSubscribe.find(".active label.terms >span").html("You must indicate you've read and accept our <a title='Link opens in a new window' target='_blank' href='"+HOME_URL+"/privacy/detailed-privacy-statement#IntNav12'>privacy statement</a>");
                        moduleSubscribe.find(".active label.terms").addClass("unticked");
                        setTimeout(
                            function(){moduleSubscribe.find(".active label.terms input").focus();}
                        , 500);
                    } else{
                        moduleSubscribe.find(".active label.terms").removeClass("unticked");
                         moduleSubscribe.find(".active label.terms >span").html("I have read the <a title='Link opens in a new window' target='_blank' href='"+HOME_URL+"/privacy/detailed-privacy-statement#IntNav12'>privacy statement</a><em>(Required)</em>");
                    }

                    if (moduleSubscribe.find(".active input[type=email]").hasClass("valid")){
                         moduleSubscribe.find(".active p.error").hide();
                    } else {
                        setTimeout(function(){moduleSubscribe.find(".active p.error").text("Please enter a valid email address."); moduleSubscribe.find(".active p.error").show(); moduleSubscribe.find(".active label.error").remove();}, 100);
                    }

                    if (moduleSubscribe.find(".active input#fieldPostCode").hasClass("valid")){
                         moduleSubscribe.find(".active p.errorPostCode").hide();
                    } else {
                        setTimeout(function(){moduleSubscribe.find(".active p.errorPostCode").text("Please enter your postcode."); moduleSubscribe.find(".active p.errorPostCode").show(); moduleSubscribe.find(".active label.error").remove();}, 100);
                    }

                    if (moduleSubscribe.find(".active input#fieldFirstName").hasClass("valid")){
                         moduleSubscribe.find(".active p.errorFirstName").hide();
                    } else {//moduleSubscribe.find(".active label.error").not("[for=terms]").text().replace("This","Email")
                        setTimeout(function(){moduleSubscribe.find(".active p.errorFirstName").text("Please enter your first name."); moduleSubscribe.find(".active p.errorFirstName").show(); moduleSubscribe.find(".active label.error").remove();}, 100);
                    }

                } else {

                    moduleSubscribe.find(".active p.error").hide();
                    moduleSubscribe.find(".active label[for=terms]").removeClass("unticked");

                }
            }

        });
    });



});
jQuery('.mailer-signup').present(function (wrap, $) {


    wrap.find("input[type=checkbox]").on("click", function(){
          if (wrap.find("input[type=checkbox]").is(":checked")){


                        //  wrap.find("p.error").hide();
                        setTimeout(function(){
                                 wrap.find(" .terms label.error").remove()}, 100);
                    }
    });


      wrap.find("form").validate(
        {
             messages: { 
                "st[EMAIL]": "Please enter a valid email address",
                "terms" : "You must indicate you've read and accept our <a title='Link opens in a new window' target='_blank' href='"+HOME_URL+"/privacy/detailed-privacy-statement#IntNav12'>privacy statement</a>"
            }

        });




});



//
// Code below is taken from original site javascript.
//




// 8. Content External Links -- external links do not open in new window
// var $exclusions = $(".sharebar, .panel-six, .twitter-feed");
// $(".content a[href^=http]").not("a[href*=services\\.business\\.vic\\.gov\\.au], a[href*=wsh\\.business\\.vic\\.gov\\.au], a[href*=sb\\.business\\.vic\\.gov\\.au], a[href*=tools\\.business\\.vic\\.gov\\.au]").each(
// function(){
// 	if(this.href.indexOf(location.hostname) == -1 && ($exclusions.find($(this)).length < 1 ) && ( $(this).find("img").length == 0) ) {
// 	   $(this).attr({'class': "external-link", title: 'External link (opens in same window)'});
// 	}
// });
// $("a.external").each(
// 	function(){
// 	  $(this).attr('class', 'external-link')
// 	  .attr('title', 'External link (opens in same window)');
// 	}
// );


// Directory Google Map

var geocoder;
var map;

function initializegmap() {
    if(document.getElementById("directory_gmap_canvas") == null) {
        return false;
    }
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
        zoom: 11,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false
    }
    map = new google.maps.Map(document.getElementById("directory_gmap_canvas"), myOptions);
}

function codeAddress() {
    var address = document.getElementById("directory_company_address").value;
    if(geocoder) {
        geocoder.geocode({
            'address': address
        }, function(results, status) {
            if(status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                //alert("Geocode was not successful for the following reason: " + status);
            }
        });
    }
}

// 22.Convert Time from UTC to Melbourne/Asia for Event Feed and Hide the event with Show More link
$(document).ready(function(){


	// if ($(".eventFeedList .startDate").length > 0)
	// {
	// 	timezoneJS.timezone.zoneFileBasePath = 'javascripts/timezones';
	// 	//timezoneJS.timezone.zoneFileBasePath = 'http://www.business.vic.gov.au/_designs/js/timezones';

	// 	timezoneJS.timezone
	// 	timezoneJS.timezone.init();
	// 	$(".startDate").each(function(){
	// 		 unixTime = Date.parse($(this).text());
	// 		 var date = new timezoneJS.Date(unixTime, "GMT");
	// 		 $(this).html(date.toString('d', 'Australia/Melbourne')+' <abbr class="acronym" title="'+date.toString('MMMM', 'Australia/Melbourne')+'">' + date.toString('MMM', 'Australia/Melbourne')+ "</abbr> " + date.toString('yyyy', 'Australia/Melbourne'));
	// 	});
	// }

	// $('.eventFeedList').each(function()
	// {
	// 	var n = parseInt($("meta[name='event.item']").attr('content'));
	// 	if (isNaN(n))
	// 		n = 5;
	// 	n--;

	// if ($(this).children('li').length)
	// {
	// 	$(this).children('li:gt('+n.toString()+')').hide().last().parent('ul').after(
	// 		$('<div style="text-align:right"/>').append(
	// 			$('<a />').attr('href','#').text('Show more').click(function() {
	// 				var a = this;
	// 				var v = $(this).parent('div').siblings('.eventFeedList').children('li:visible').length;
	// 				w = v;
	// 				if (v < 10)
	// 					v = 10;
	// 				else
	// 					v+=10;

	// 				$(this).parent('div').siblings('.eventFeedList').children('li:lt('+v.toString()+')').show(function(){
	// 					if ($(this).parent('.eventFeedList').children('li:not(:visible)').length == 0)
	// 						if ($(this).parent('.eventFeedList').children('li:visible').length >= 15)
	// 						{
	// 							var p = $(a).parent('div');
	// 							$(a).remove();
	// 							$(p).append($('<a />').attr('href', 'https://services.business.vic.gov.au/ems/default.do').text('View all events'));
	// 						}
	// 						else
	// 						   $(a).parent('div').remove();
	// 				});
	// 				$(this).parent('div').siblings('.eventFeedList').children('li:eq('+w+')').children('a').focus();
	// 				return false;
	// 			})
	// 		)
	// 	);
	// }
	// else
	// {
	//    if ($(this).parent('.eventFeed').parent('div').hasClass('tabbody'))
	//    {
	// 	var id = $(this).parents('.tabbody').siblings('.tabhead').attr('id');
	// 	$(this).parents('.tab-wrap').hide();
	// 	id = "#"+id;
	// 	id = id.replace('content', 'navigation');
	// 	if ($(id).hasClass('first'))
	// 	{
	// 		$(id).removeClass('first');
	// 		$(id).next("li").addClass('first');
	// 	}
	// 	if  ($(id).hasClass('last'))
	// 	{
	// 		$(id).removeClass('last');
	// 		$(id).prev("li").addClass('last');
	// 	}
	// 	if ($(id).hasClass('current'))
	// 	{
	// 		if ($(id).next("li").length >0)
	// 		$(id).next("li").addClass('current');
	// 		else
	// 		if ($(id).prev("li").length >0)
	// 			$(id).prev("li").addClass('current');
	// 		$(id).removeClass('current');
	// 	}
	// 	$(id).hide();
	// 	id = "#"+$(".current").attr('id');
	// 	id = id.replace('navigation','content');
	// 	$(id).siblings('.tabbody').show();

	//    } else
	// 	$(this).parent('.eventFeed').parent('div').remove();
	// }
	// });


	//16. Load Google Maps for Directories
	if (document.getElementById("directory_gmap_canvas") != null){
	       initializegmap();
	       codeAddress();
    }

    // 6. Form Validation - Contact Us
	if (document.URL.indexOf("/contact-us/thank-you") !=-1) {
		 var inquiryVal= new RegExp('[\\?]' + 'enquiry' + '=([^&#]*)').exec(window.location.href);
		 // $("#inquiry-no").html(inquiryVal[1]);
		 $("#inquiry-no").html("Your enquiry number is <strong>"+inquiryVal[1]+"</strong>");
	}

});


/**
 * Slider functions
 */
function initSliders() {
    jQuery('#carousel').present(function (carousel, $) {

        var Device = {
            // screen.width is max screen size, not window size
            small:  $(window).width() <= Breakpoint.small,
            medium: $(window).width()  <= Breakpoint.medium,
            large: $(window).width()  <= Breakpoint.large,
            xlarge: $(window).width()  <= Breakpoint.xlarge,
            xxlarge: $(window).width()  <= Breakpoint.xxlarge
        };

        var thumbsInner = $('#thumbs'),
            thumbsWrapper = $('#thumbs-wrapper'),
            slides = carousel.find('span'),
            thumbs = thumbsInner.find('a'),
            pagination = $('.carousel-pagination'),
            thumbTo = null,
            _class = 'active',
            index = 0
            maxCount = $('#carousel > span').length;


        //if we have thumbs the arrange them and
        //create the functions that control them
        function reSizeThumbs(){

            var amount = (Device.small?3:5);

             var _width = thumbsWrapper.width()/((thumbs.length < amount)?thumbs.length:amount*1.1),//thumbs.eq(0).find("img").outerWidth(true),
                thumbCount = thumbs.length,
                thumbsInnerWidth = _width * thumbCount;
                for (var i = 0; i < thumbCount; i++) {

                    thumbs[i].style.width = _width + "px";

             }


            //make inner large enough for all our thumbs

            thumbsInner.css("width",thumbsInnerWidth + "px");


        }

        pagination.present(function () {
            var paginatePrev = $('.carousel-pagination__prev'),
                paginateNext = $('.carousel-pagination__next'),
                paginateCount = $('.carousel-pagination__count');

            $('#carousel-wrapper, .slideshow').addClass('carousel_paginated');

            paginatePrev.on('click', function(e){
                e.preventDefault();

                if (index > 0) {
                    slideTo(index - 1);
                    updatePagination();
                }
            });

            paginateNext.on('click', function(e){
                e.preventDefault();

                if (index < maxCount - 1) {
                    slideTo(index + 1);
                    updatePagination();
                }
            });

            function updatePagination() {
                paginateCount.text((index + 1) + "/" + maxCount);

                if (index == 0) {
                    paginatePrev.addClass('is-disabled');
                } else {
                    paginatePrev.removeClass('is-disabled');
                }

                if (index == maxCount - 1) {
                    paginateNext.addClass('is-disabled');
                } else {
                    paginateNext.removeClass('is-disabled');
                }
            }

            updatePagination();
        });

        thumbsInner.present(function () {

            //attach thumb listeners
            thumbs.click(function (e) {
                e.preventDefault();
                slideTo($(this).index());
            });
            reSizeThumbs();
            //measure the thumbs assuming all thumbs are same width


            /**
             * Set the target thumb as active and call position
             * @param target
             */
            thumbTo = function (target) {
                var targetThumb = thumbs.eq(target);

                //set classes on thumbs
                thumbs.removeClass(_class);
                targetThumb.addClass(_class);

                positionThumbs(target)
            };

            /**
             * Move the thumb wrapper so that all thumbs can be clicked
             * @param target
             */
            function positionThumbs(target) {
                var left;

                //if first or inner < carousel width position hard left
                if (target == 0 || thumbsInnerWidth < thumbsWrapper.width()) {
                    left = 0;
                }
                else {
                    left = -target * width + width;
                }

                thumbsInner.css({marginLeft: left});
            }

            //on smartresize thumb to current index to keep position accurate
            $(window).smartresize(function () {
                Device = {
                    // screen.width is max screen size, not window size
                    small:  $(window).width() <= Breakpoint.small,
                    medium: $(window).width()  <= Breakpoint.medium,
                    large: $(window).width()  <= Breakpoint.large,
                    xlarge: $(window).width()  <= Breakpoint.xlarge,
                    xxlarge: $(window).width()  <= Breakpoint.xxlarge
                };
                //positionThumbs(index);
                reSizeThumbs();
            });
        });

        /**
         * Slide to given index calling thumbnail functions
         * if built
         * @param target
         */
        function slideTo(target) {

            //add slide classes
            slides.removeClass(_class);
            slides.eq(target).addClass(_class);

            //set the thumbnail states if the function was created
            if (thumbTo) {
                thumbTo(target)
            }

            index = target;
        }

        //slide to first
        slideTo(0);
    });
};

jQuery(document).ready(function ($) {
    initSliders();
});

var SocialButtons = {
	'linkedin' : {
		'html' : '',
		'scripts' : {
			0 : {
				'src' : '//platform.linkedin.com/in.js',
				'type' : 'text/javascript'
			},
			1 : {
				'type' : 'IN/Share',
				'data-url' : 'http://business.vic.gov.au',
				'data-counter' : 'right'
			}
		}
	},
	'facebook' : {
		'html' : '<iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;width=130&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=21&amp;appId=420606978052064" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:130px; height:21px;" allowTransparency="true"></iframe>'
	},
	'twitter' : {
		'html' : '<a href="https://twitter.com/share" class="twitter-share-button" data-via="businessvic">Tweet</a>',
		'scripts' : {
			0 : {
				'text' : "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');"
			}
		}
	},
	'googleplus' : {
		'html' : '<div class="g-plusone"></div>',
		'scripts' : {
			0 : {
				'type' : 'text/javascript',
				'src' : 'https://apis.google.com/js/plusone.js'
			}
		}
	}

}

/**
 * Social
 */
$('[data-social]').each(function () {
    
    var _this = $(this),
        provider = _this.attr('data-social');

    // Remove inadvertant external links
	_this.removeClass('external-link');
	 
    // Wrap with new element
	_this.wrap('<div class="-data-social-button-' + provider + '">');

	// Find scripts
    var _scripts = SocialButtons[provider]['scripts'];

    // Now create scripts
    if ( _scripts ) {

    	$.each(_scripts, function (index, value) {
    		
    		var _script = $('<script>');
    		
    		$.each(value, function (attr, val) {

    			if (attr == 'text') {
    				_script.textContent = val;
    			} else {
    				_script.attr(attr, val);
    			}

    		});

    		// Add scripts after
    		_this.after(_script);
    		
    	});

    }

    // Insert the button html
    _this.after( SocialButtons[provider]['html'] );

     // Remove button placeholder
    _this.remove();

});





$(document).ready(function () {


	$('#search-options').click(function(e){
		e.preventDefault();

		$(this).parent().find("ul").toggleClass("visible");



		if($(this).parent().find("ul").hasClass("visible")){
			$(this).text("Hide search options");
		}else{
			$(this).text("Show search options");
		}

	});

});

$(document).ready(function () {
    // check if touch events are active

    $('#calculator-form').present( function (form) {

    function isTouchDevice() { return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);}

    if (isTouchDevice()) {
        $('html').addClass('touch');
    }

    /* cache dom references */
    var body = $('body');
    var breakEven = 50; //TODO update based on calculator logic
    var sliderLabel = $('.calculator-slider__label');
    var sliderLabelWrap = $('.calculator-slider__label-wrap');
    var slider = $('.calculator-slider');
    var radioNumberInputs = $('.radio-number-inputs');

    var labelDynamic = $('.labels-dynamic');
    var labelDynamicLast = $('.labels-dynamic .form-item:last-child .label-wrap');
    var labelDynamicFirst = $('.labels-dynamic .form-item:first-child .label-wrap');
    var labelDynamicOr = $('.radio-number-inputs__or');
    var labelDynamicLabels = $('.labels-dynamic .label-wrap');

    var min = 0;

    var max = 100;
    var timer = 0;

    var formValues = {};

    $('input[type=number]').keypress(function(e) {
        var keys = [];
        var pressed = e.which;
        // console.log("pressed: " + pressed);
        // numbers
        for (i = 48; i < 58; i++)
            keys.push(i);

        // backspace, escape & delete keys
        keys.push(0);
        keys.push(8);
        keys.push(46);

        if (!($.inArray(pressed,keys)>=0))
            e.preventDefault();
    });


    function CommaFormatted(amount) {
        var delimiter = ","; // replace comma if desired
        var a = amount.split('.',2);
        var d = a[1] || "";
        var i = parseInt(a[0]);
        if(isNaN(i)) { return ''; }
        var minus = '';
        if(i < 0) { minus = '-'; }
        i = Math.abs(i);
        var n = new String(i);
        var a = [];
        while(n.length > 3) {
            var nn = n.substr(n.length-3);
            a.unshift(nn);
            n = n.substr(0,n.length-3);
        }
        if(n.length > 0) { a.unshift(n); }
        n = a.join(delimiter);
        if(d.length < 1) { amount = n; }
        else { amount = n + '.' + d; }
        amount = minus + "$" + amount;
        return amount;
    }





     $('#turnover-calculator').present( function (calculator) {
        breakEven = 50;
        min = 1;
        max = 99;

        var fields = calculator.find("form input:not([type='submit'], [type='button']), form select, form textarea");


        fields.change(function(){
           // console.log($(this).val());
            updateValues($(this));
        });


        fields.keypress(function () {
            clearTimeout(timer); // Clear the timer so we don't end up with dupes.
            var element = $(this);
            timer = setTimeout(function() { // assign timer a new timeout
               updateValues(element);
            }, 1000); // 2000ms delay, tweak for faster/slower
        });
       fields.blur(function(){
           // alert($(this).attr("id"));
            if($(this).attr("id") == "percent" && $(this).val() == ""){
                $('.calculator-slider').val(breakEven, { set: true });

                //updateLabelPos();
            }
            clearTimeout(timer);
            updateValues($(this));
        });

        $('.calculator-slider').on('slide change set', function(){
            updateLabelPos();
        });

        updateValues($('#percent'));

        function updateValues(element){




            var required = 0;// because of OR othervise should be 0
            var filled = 0;
             fields.each(function() {
                var val = $(this).val() || 0;
                formValues[$(this).attr('name')] = val;
                if($(this).attr('required')){
                    required++;
                if(val != 0)
                    filled++;
                }

            });



             //console.log(filled/required*100 + '%');

            $('.scroll-display__bar').css('width', filled/required*100 + "%");
           // console.log(formValues);
            $('.scroll-display .separation-lines').css("background-size", 100/required + "% 100%");




            var NumOfWeeksPerYear = 52;




           var _numOfStaff = parseInt(formValues["staff-number"]) || 0;

           var _averageHourlyRate = parseInt(formValues["hourly-rate"]) || 0;

           var _percent = parseInt(formValues["percent"]) || 0;

            var _numOfStaffResignations = (_numOfStaff * _percent) / 100;


            var _totalCostOfAnnualStaffTurnover = Math.round(_numOfStaffResignations * ((_averageHourlyRate * 38 * 52) * 1.3) * 0.25);




            if(_numOfStaff != 0 && _averageHourlyRate != 0 && _percent != 0 ){

                 $(".results-resignations").text(Math.round(_numOfStaffResignations));
                 $(".results-cost").text(CommaFormatted(String(_totalCostOfAnnualStaffTurnover)));

             }else{
                 $(".results-resignations").text(0);
                 $(".results-cost").text("$0");
             }
            // //if(_costOfUnscheduledAbsences)

            // var diff = _costOfOvertime - _costOfAnExtraStaffMember;
            // $(".result-diff").text( (diff >= 0?"$":"-$") + Math.abs(diff));







        }


            function updateLabelPos() {
        enquire.register( Utils.mediaQuery(Breakpoint.medium), {
            match : function() {
                sliderLabelWrap.css('left', $('.noUi-origin')[0].style.left); // read inline style directly for percentage value
                //console.log(sliderLabel.val());
                updateValues(sliderLabel);
                // console.log('matches');
            }
        });
    }

    });


    $('#productivity-calculator').present( function (calculator) {
        breakEven = 40;
        min = 1;
        max = 79;

        var fields = calculator.find("form input:not([type='submit'], [type='button']), form select, form textarea");


        fields.change(function(){
           // console.log($(this).val());
            updateValues($(this));
        });

        fields.keypress(function () {
            clearTimeout(timer); // Clear the timer so we don't end up with dupes.
            var element = $(this);
            timer = setTimeout(function() { // assign timer a new timeout
               updateValues(element);
            }, 1000); // 2000ms delay, tweak for faster/slower
        });
       fields.blur(function(){
            // alert($(this).attr("id"));
            if($(this).attr("id") == "billable-hours" && $(this).val() == ""){
                $('.calculator-slider').val(breakEven, { set: true });

                //updateLabelPos();
            }
            clearTimeout(timer);
            updateValues($(this));
        });


        $('.calculator-slider').on('slide change set', function(){
            updateLabelPos();
        });

        updateValues($('#billable-hours'));

        function updateValues(element){




            var required = 0;// beqacuse of OR othervise should be 0
            var filled = 0;
             fields.each(function() {
                var val = $(this).val() || 0;
                formValues[$(this).attr('name')] = val;
                if($(this).attr('required')){
                    required++;
                if(val != 0)
                    filled++;
                }

            });


             //console.log(filled/required*100 + '%');

            $('.scroll-display__bar').css('width', filled/required*100 + "%");
           // console.log(formValues);
            $('.scroll-display .separation-lines').css("background-size", 100/required + "% 100%");




            var NumOfWeeksPerYear = 52;



            var _totalRevenue = parseInt(formValues["gross-revenue"]) || 0;


            var _overheads = parseInt(formValues["outgoing-cost"]) || 0;

           var _numOfStaff = parseInt(formValues["staff-number"]) || 0;

           var _averageHourlyRate = parseInt(formValues["hourly-rate"]) || 0;


           var _aveBillableHrs = parseInt(formValues["billable-hours"]) || 0;


           var _totalCost = ((_averageHourlyRate * _aveBillableHrs * 52) * _numOfStaff) + _overheads;

           var _revPerHr = 0;

           if(_numOfStaff !=0 && _averageHourlyRate != 0)
               _revPerHr = _totalRevenue / _numOfStaff / _averageHourlyRate / NumOfWeeksPerYear;



           var _minBillableHours = 0;
            if(_revPerHr !=0 && _numOfStaff != 0)
                _minBillableHours = Math.round(_totalCost / _revPerHr / _numOfStaff / NumOfWeeksPerYear);


           var _changeInProfit = 0;
           if(_minBillableHours != _aveBillableHrs)
                _changeInProfit = Math.round((_aveBillableHrs * _revPerHr * _numOfStaff * NumOfWeeksPerYear) - _totalCost);


           if(_totalRevenue != 0 && _overheads != 0 && _numOfStaff != 0 && _averageHourlyRate != 0 && _aveBillableHrs != 0 )
           {


                 $(".results-break-even").text(_minBillableHours);
                 $(".results-profit").text(CommaFormatted(String(_changeInProfit)));
             }else
             {
                 $(".results-break-even").text(0);
                 $(".results-profit").text("$0");
             }
            // //if(_costOfUnscheduledAbsences)

            // var diff = _costOfOvertime - _costOfAnExtraStaffMember;
            // $(".result-diff").text( (diff >= 0?"$":"-$") + Math.abs(diff));



        }

            function updateLabelPos() {
        enquire.register( Utils.mediaQuery(Breakpoint.medium), {
            match : function() {
                sliderLabelWrap.css('left', $('.noUi-origin')[0].style.left); // read inline style directly for percentage value
                //console.log(sliderLabel.val());
                updateValues(sliderLabel);
                // console.log('matches');
            }
        });
    }

    });



    $('#overtime-calculator').present( function (calculator) {
        breakEven = 40;
        min = 1;
        max = 79;

        var fields = calculator.find("form input:not([type='submit'], [type='button']), form select, form textarea");


        fields.change(function(){
           // console.log($(this).val());
            updateValues($(this));
        });


        fields.keypress(function () {
            clearTimeout(timer); // Clear the timer so we don't end up with dupes.
            var element = $(this);
            timer = setTimeout(function() { // assign timer a new timeout
               updateValues(element);
            }, 1000); // 2000ms delay, tweak for faster/slower
        });
       fields.blur(function(){
           // alert($(this).attr("id"));
            if($(this).attr("id") == "overtime-per-employee" && $(this).val() == ""){
                $('.calculator-slider').val(breakEven, { set: true });

                //updateLabelPos();
            }

            clearTimeout(timer);
            updateValues($(this));
        });

        $('.calculator-slider').on('slide change set', function(){
            updateLabelPos();
        });

        updateValues($('#overtime-per-employee'));

        function updateValues(element){

            var required = 0;// beqacuse of OR othervise should be 0
            var filled = 0;
             fields.each(function() {
                var val = $(this).val() || 0;
                formValues[$(this).attr('name')] = val;
                if($(this).attr('required')){
                    required++;
                if(val != 0)
                    filled++;
                }

            });

             //console.log(filled/required*100 + '%');

            $('.scroll-display__bar').css('width', filled/required*100 + "%");
           // console.log(formValues);
            $('.scroll-display .separation-lines').css("background-size", 100/required + "% 100%");








           // var _annualWages = parseInt(formValues["annual-wages"]) || 0;

           var _numOfStaff = parseInt(formValues["staff-number"]) || 0;

           var _averageHourlyRate = parseInt(formValues["hourly-rate"]) || 0;



            var _overtimeRate = parseInt(formValues["overtime-rate"]) || 0;

            var _overTimeMultiplier = parseFloat(formValues["overtime-multiplier"]) || 0;






             if (_overtimeRate != 0 && _averageHourlyRate != 0 && element.attr("id") != "overtime-multiplier"){
                 _overTimeMultiplier = _overtimeRate / _averageHourlyRate;
                if(!isFinite(_overTimeMultiplier))
                    _overTimeMultiplier = 0;
                $("#overtime-multiplier").val(parseFloat(_overTimeMultiplier).toFixed(1) || 0);

                if( $("#overtime-multiplier").val() != "0.0"){
                    $("#overtime-multiplier").removeClass("error");
                    $("#overtime-multiplier + div").hide();
                }


             }

            if(_overTimeMultiplier <= 5 && _overTimeMultiplier >0 && _averageHourlyRate != 0 && element.attr("id") != "overtime-rate"){

                _overtimeRate = _averageHourlyRate * _overTimeMultiplier ;
                $("#overtime-rate").val(Math.round(_overtimeRate) || 0);
                if( $("#overtime-rate").val() != "0"){
                    $("#overtime-rate").removeClass("error");
                    $("#overtime-rate + div").hide();
                }

            }







              var _averageWeeklyHoursOfOvertime = parseInt(formValues["overtime-per-employee"]) || 0;

             // var _averageWeeklyNumOfStaffWorkingOvertime = parseInt(formValues["overtime-stuff"]) || 0;


              var _costOfOvertime = _overtimeRate * _numOfStaff * _averageWeeklyHoursOfOvertime;

              var _costOfAnExtraStaffMember = _averageHourlyRate * 38;


              if(_numOfStaff != 0 && _averageHourlyRate != 0 && _overtimeRate != 0 && _overTimeMultiplier != 0 && _averageWeeklyHoursOfOvertime !=0 ){

                $(".results-overtime").text(CommaFormatted(String(Math.round(_costOfOvertime))));
                $(".results-new-stuff").text(CommaFormatted(String(Math.round(_costOfAnExtraStaffMember))));
                //if(_costOfUnscheduledAbsences)

                var diff = _costOfOvertime - _costOfAnExtraStaffMember;
                $(".result-diff").text(CommaFormatted(String(Math.round(diff))));
            }else{

                  $(".results-overtime").text("$0");
                $(".results-new-stuff").text("$0");
                //if(_costOfUnscheduledAbsences)

                $(".result-diff").text("$0");
            }




        }

            function updateLabelPos() {
        enquire.register( Utils.mediaQuery(Breakpoint.medium), {
            match : function() {
                sliderLabelWrap.css('left', $('.noUi-origin')[0].style.left); // read inline style directly for percentage value
                //console.log(sliderLabel.val());
                updateValues(sliderLabel);
                // console.log('matches');
            }
        });
    }

    });


    $('#abscences-calculator').present( function (calculator) {


        breakEven = 14;

        min = 2;
        max = 26;

        var fields = calculator.find("form input:not([type='submit'], [type='button']), form select, form textarea");

        fields.change(function(){
           // console.log($(this).val());
            updateValues($(this));
        });


        fields.keypress(function () {
            clearTimeout(timer); // Clear the timer so we don't end up with dupes.
            var element = $(this);
            timer = setTimeout(function() { // assign timer a new timeout
               updateValues(element);
            }, 1000); // 2000ms delay, tweak for faster/slower
        });
       fields.blur(function(){
             //alert($(this).attr("id"));
            if($(this).attr("id") == "abscence" && $(this).val() == ""){
                $('.calculator-slider').val(breakEven, { set: true });

                //updateLabelPos();
            }
            clearTimeout(timer);
            updateValues($(this));
        });

        $('.calculator-slider').on('slide change set', function(){
            updateLabelPos();
        });


        var _averageAnnualUnscheduledAbsences = parseInt(formValues["abscence"]) || 0;



        updateValues($('#abscence'));

        function updateValues(element){


            var required = 0;// beqacuse of OR othervise should be 0
            var filled = 0;
             fields.each(function() {
                var val = $(this).val() || 0;
                formValues[$(this).attr('name')] = val;
                if($(this).attr('required')){
                    required++;
                if(val != 0)
                    filled++;
                }

            });



             //console.log(filled/required*100 + '%');

             $('.scroll-display__bar').css('width', filled/required*100 + "%");
           // console.log(formValues);
            $('.scroll-display .separation-lines').css("background-size", 100/required + "% 100%");



            var _totalAnnualRevenue = parseInt(formValues["gross-revenue"]) || 0;


            var _numOfStaff = parseInt(formValues["staff-number"]) || 0;


            var _workingDaysPerYear = parseInt(formValues["working-days"]) || 0;

            var _annualWages = parseInt(formValues["annual-wages"]) || 0;

            var _averageHourlyRate = parseInt(formValues["hourly-rate"]) || 0;




            if (_averageHourlyRate != 0 && _numOfStaff != 0 && _workingDaysPerYear != 0 && element.attr("id") != "annual-wages"){
                 _annualWages = _averageHourlyRate * _numOfStaff * _workingDaysPerYear * 8;
                  $("#annual-wages").val(Math.round(_annualWages) || 0);

                   if( $("#annual-wages").val() != "0"){
                    $("#annual-wages").removeClass("error");
                    $("#annual-wages + div").hide();
                }
             }

            if( _annualWages != 0 && _numOfStaff !=0 && _workingDaysPerYear != 0 && element.attr("id") != "hourly-rate"){
                _averageHourlyRate = _annualWages / _numOfStaff / _workingDaysPerYear / 8 || 0;
                if(!isFinite(_averageHourlyRate))
                    _averageHourlyRate = 0;
                $("#hourly-rate").val(Math.round(_averageHourlyRate) || 0);

                if( $("#hourly-rate").val() != "0"){
                    $("#hourly-rate").removeClass("error");
                    $("#hourly-rate + div").hide();
                }
            }



            var _averageAnnualUnscheduledAbsences = parseInt(formValues["abscence"]) || 0;


            var _salaryCostPerDay =  0;

            if(_averageHourlyRate != 0)
                _salaryCostPerDay = ((_averageHourlyRate * 38 * 52) / 365.25 * 7 / 5);

            var  _lostRevenuePerDay = 0;

            if(_totalAnnualRevenue != 0 && _numOfStaff != 0 && _workingDaysPerYear != 0)
                _lostRevenuePerDay = (_totalAnnualRevenue / _numOfStaff) / _workingDaysPerYear;


            var _costOfUnscheduledAbsences = Math.round((_salaryCostPerDay + _lostRevenuePerDay) * _numOfStaff * _averageAnnualUnscheduledAbsences);


            //console.log(_costOfUnscheduledAbsences);

            if(_totalAnnualRevenue != 0 && _numOfStaff != 0 && _workingDaysPerYear != 0 && _annualWages != 0 &&  _averageHourlyRate != 0 &&  _averageAnnualUnscheduledAbsences != 0){

                $(".results-absence-days").text(_averageAnnualUnscheduledAbsences);
                $(".results-days-in-year").text(_workingDaysPerYear);
                //if(_costOfUnscheduledAbsences)
                $(".results-cost").text(CommaFormatted(String(_costOfUnscheduledAbsences)));
            }else
            {
                  $(".results-absence-days").text(0);
                $(".results-days-in-year").text(0);
                //if(_costOfUnscheduledAbsences)
                $(".results-cost").text("$0");
            }

        }

        function updateLabelPos() {
            enquire.register( Utils.mediaQuery(Breakpoint.medium), {
                match : function() {
                    sliderLabelWrap.css('left', $('.noUi-origin')[0].style.left); // read inline style directly for percentage value
                    //console.log(sliderLabel.val());
                    updateValues(sliderLabel);
                    // console.log('matches');
                }
            });
        }


    });


    if(slider.length > 0){

        slider.noUiSlider({
            start: breakEven,
            range: {
                'min': min,
                'max': max
            },
            step: 1,
            behaviour: 'snap',
            serialization: {
                lower: [
                  $.Link({
                    target: sliderLabel
                  })
                ],
                format: {
                    decimals: 0
                }
            }
        });
    }

    // Listen to keydown events on the slider label field.
    $('.calculator-slider__label').keydown(function( e ) {

        // Convert the string to a number.
        var value = Number( sliderLabel.val() );

        // 38 is key up,
        // 40 is key down.
        switch ( e.which ) {
            case 38: slider.val( value + 1 );
                break;
            case 40: slider.val( value - 1 );
                break;
        }

        enquire.register( Utils.mediaQuery(Breakpoint.medium), {
            match : function() {
                sliderLabelWrap.css('left', $('.noUi-origin')[0].style.left); // read inline style directly for percentage value
                //console.log(sliderLabel.val());
                updateValues(sliderLabel);
                // console.log('matches');
            }
        });
    });

    function positionCalcResult() {
        enquire.register( Utils.mediaQuery(Breakpoint.medium), {
            match : function() {
                if (!$(".module-content .column-right").find('.calculator-result').length) {
                    $('.module-content .column-right').append($('.calculator-result'));
                }
            },
            unmatch : function() {

                if (!$(".page-wrap").children('.calculator-result').length) {
                    $('.page-wrap').append($('.calculator-result'));
                }
            },
            setup : function() {

                if (!$(".page-wrap").children('.calculator-result').length) {
                    $('.page-wrap').append($('.calculator-result'));
                }
            }
        },true);
    }

    function sliderMedia() {
        enquire.register( Utils.mediaQuery(Breakpoint.medium), {
            match : function() {

            },
            unmatch : function() {
                sliderLabelWrap.css('left', '');
            }
        });
    }

    function labelDynamicHeight() {
        enquire.register( Utils.mediaQuery(Breakpoint.xlarge), {
            match : function() {
                labelDynamic.each(function(e) {
                    var labelFirst = $(this).find('.form-item:first-child .label-wrap');
                    var labelLast = $(this).find('.form-item:last-child .label-wrap');
                    var labelOr = $(this).find('.radio-number-inputs__or');

                    var h1 = labelFirst.find('label').outerHeight();
                    var h2 = labelLast.find('label').outerHeight();

                    if (h1 >= h2) {
                        labelFirst.css('height', h1);
                        labelLast.css('height', h1);
                        labelOr.css('top', h2);
                    } else if (h2 > h1) {
                        labelFirst.css('height', h2);
                        labelLast.css('height', h2);
                        labelOr.css('top', h2);
                    }
                });
            }
        });

        enquire.register( Utils.mediaQuery(0, Breakpoint.xlarge), {
            match : function() {
                labelDynamicLabels.css('height', '');
                labelDynamic.each(function(e) {
                    var labelOr = $(this).find('.radio-number-inputs__or');
                    var labelFirst = $(this).find('.form-item:first-child .label-wrap');
                    labelDynamicOr.css('top', labelFirst.find('label').outerHeight());
                });
            }
        });
    }

    function spaceResult() {
        if ($(".page-content + .calculator-result").length) {
            $(".page-content").css("padding-bottom", $(".page-content + .calculator-result").outerHeight());
        } else {
            $(".page-content").css("padding-bottom", "0");
        }
    }

    // fix broken position fixed elements when touch keyboards mess with it
    /* we need this only on touch devices */
    if (isTouchDevice()) {
        $(document)
        .on('focus', 'input', function(e) {
            body.addClass('fixfixed');
        })
        .on('blur', 'input', function(e) {
            body.removeClass('fixfixed');
        });
    }

    radioNumberInputs.find('.incremental-input')
        .on('focus', function() {
            radioNumberInputs.addClass('is-active');
            radioNumberInputs.find('.form-item').removeClass('is-focused');
            $(this).parent('.form-item').addClass('is-focused');
        });

    positionCalcResult();
    labelDynamicHeight();
    spaceResult();

    $(window).smartresize(function(){
        positionCalcResult();
        labelDynamicHeight();
        sliderMedia();
        spaceResult();
    });


    });
});