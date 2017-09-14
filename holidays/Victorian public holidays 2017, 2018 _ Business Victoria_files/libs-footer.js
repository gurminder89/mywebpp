/*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

var deletedIds = [];

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.11.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( support.ownLast ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.unique( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !(--remaining) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};


var strundefined = typeof undefined;



// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery(function() {
	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {
		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== strundefined ) {
		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {
			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
});




(function() {
	var div = document.createElement( "div" );

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( elem ) {
	var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute("classid") === noData;
};


var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,
		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[0],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each(function() {
				jQuery.data( this, key, value );
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};



// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[0], key ) : emptyGet;
};
var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	// Minified: var a,b,c
	var input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		fragment = document.createDocumentFragment();

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );
	div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	support.noCloneEvent = true;
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}
})();


(function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
	for ( i in { submit: true, change: true, focusin: true }) {
		eventName = "on" + i;

		if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!support.noCloneEvent || !support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[i], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}


(function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== strundefined ) {
			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

})();
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			var condition = conditionFn();

			if ( condition == null ) {
				// The test was not ready at this point; screw the hook this time
				// but check again when needed next time.
				return;
			}

			if ( condition ) {
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	// Minified: var b,c,d,e,f,g, h,i
	var div, style, a, pixelPositionVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal;

	// Setup
	div = document.createElement( "div" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];
	style = a && a.style;

	// Finish early in limited (non-browser) environments
	if ( !style ) {
		return;
	}

	style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
		style.WebkitBoxSizing === "";

	jQuery.extend(support, {
		reliableHiddenOffsets: function() {
			if ( reliableHiddenOffsetsVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		// Support: Android 2.3
		reliableMarginRight: function() {
			if ( reliableMarginRightVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		}
	});

	function computeStyleTests() {
		// Minified: var b,c,d,j
		var div, body, container, contents;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = false;
		reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			boxSizingReliableVal =
				( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Support: Android 2.3
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents, null ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		contents = div.getElementsByTagName( "td" );
		contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
		reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		if ( reliableHiddenOffsetsVal ) {
			contents[ 0 ].style.display = "";
			contents[ 1 ].style.display = "none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		}

		body.removeChild( container );
	}

})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,

	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	// Minified: var a,b,c,d,e
	var input, div, select, a, opt;

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName("a")[ 0 ];

	// First batch of tests.
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
})();


var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// Retrieve booleans specially
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		} :
		function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
});

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	});
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						-1;
			}
		}
	}
});

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {
	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {
		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	}) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
		(!support.reliableHiddenOffsets() &&
			((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	// Support: IE6+
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		return !this.isLocal &&

			// Support: IE7-8
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

			createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	});
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( options ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch( e ) {
									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;
								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					if ( !options.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};





var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);
/*
* rwdImageMaps jQuery plugin v1.5
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2013 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").load(function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(window, document, $) {

	// Opera Mini v7 doesn’t support placeholder although its DOM seems to indicate so
	var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
	var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
	var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
	var prototype = $.fn;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}

				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}

				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != safeActiveElement()) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == safeActiveElement() && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': $input,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

	function safeActiveElement() {
		// Avoid IE9 `document.activeElement` of death
		// https://github.com/mathiasbynens/jquery-placeholder/pull/99
		try {
			return document.activeElement;
		} catch (err) {}
	}

}(this, document, jQuery));

/*
 * jQuery Title Tip
 * Author: Niels Oeltjen
 * Author URL: Elbone.com.au
*/



(function(jQuery){

	jQuery.fn.titletip = function(options){

		var defaults = {
			speed: 500,
			xOffset: 10,
			yOffset: 10,
			element : 'a[title]',
			id: 'titletip'
		};

		var options = $.extend(defaults, options);
		
		this.each(function (){

			var container = $(this);
			var anchor = $(this).find(defaults.element);
			var position = $(this).css('position') || false;

			// console.log('position: '+ position);

			// if (position != 'absolute' && position != 'fixed') {
			// 	$(this).css('position', 'relative');
			// }

			return anchor.each(function (){
		
				// Get title attribute
				var tipTitle = $(this).attr('title');

				// If has title attribute
				if ($(this).attr('title')) {
				
					$(this).hover(
						function (e){
						
							$(this).removeAttr('title').css('cursor', 'pointer');
			           		$('body').append('<div id="' + defaults.id + '">' + tipTitle + '</div>');
			            	$('#' + defaults.id).css("top", (e.pageY + defaults.xOffset) + "px").css("left", (e.pageX + defaults.yOffset) + "px").fadeIn(options.speed);
							
						}, 
						function (e) {
					
							$('#' + defaults.id).remove();
							$(this).attr('title', tipTitle);
							
						}
					);
					
					// If mosue moves
					$(this).mousemove(
						function (e) {
							$('#' + defaults.id).css("top", (e.pageY + defaults.xOffset) + "px").css("left", (e.pageX + defaults.yOffset) + "px");
						}
					);
				
				}

			});
		
		});
		
	};

})( jQuery );
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
/**
* jquery.matchHeight.js v0.5.2
* http://brm.io/jquery-match-height/
* License: MIT
*/

(function($) {

    $.fn.matchHeight = function(byRow) {

        // handle matchHeight('remove')
        if (byRow === 'remove') {
            var that = this;

            // remove fixed height from all selected elements
            this.css('height', '');

            // remove selected elements from all groups
            $.each($.fn.matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1)
            return this;

        // byRow default to true
        byRow = (typeof byRow !== 'undefined') ? byRow : true;

        // keep track of this group so we can re-apply later on load and resize events
        $.fn.matchHeight._groups.push({
            elements: this,
            byRow: byRow
        });

        // match each element's height to the tallest element in the selection
        $.fn.matchHeight._apply(this, byRow);

        return this;
    };

    $.fn.matchHeight._apply = function(elements, byRow) {
        var $elements = $(elements),
            rows = [$elements];

        // get rows if using byRow, otherwise assume one row
        if (byRow) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert the temporary forced style
            $elements.css({
                'display': '',
                'padding-top': '',
                'padding-bottom': '',
                'border-top-width': '',
                'border-bottom-width': '',
                'height': ''
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                maxHeight = 0;

            // ensure elements are visible to prevent 0 height
            var hiddenParents = $row.parents().add($row).filter(':hidden');
            hiddenParents.css({ 'display': 'block' });

            // iterate the row and find the max height
            $row.each(function(){
                var $that = $(this),
                    display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';

                // ensure we get the correct actual height (and not a previously set height value)
                $that.css({ 'display': display, 'height': '' });

                // find the max height (including padding, but not margin)
                if ($that.outerHeight(false) > maxHeight)
                    maxHeight = $that.outerHeight(false);

                // revert display block
                $that.css({ 'display': '' });
            });

            // revert display block
            hiddenParents.css({ 'display': '' });

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css('height', maxHeight - verticalPadding);
            });
        });

        return this;
    };

    /*
    *  _applyDataApi will apply matchHeight to all elements with a data-match-height attribute
    */
   
    $.fn.matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-match-height') || $this.attr('data-mh');
            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /* 
    *  _update function will re-apply matchHeight to all groups with the correct options
    */
   
    $.fn.matchHeight._groups = [];
    $.fn.matchHeight._throttle = 80;

    var previousResizeWidth = -1,
        updateTimeout = -1;

    $.fn.matchHeight._update = function(event) {
        // prevent update if fired from a resize event 
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === previousResizeWidth)
                return;
            previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (updateTimeout === -1) {
            updateTimeout = setTimeout(function() {

                $.each($.fn.matchHeight._groups, function() {
                    $.fn.matchHeight._apply(this.elements, this.byRow);
                });

                updateTimeout = -1;

            }, $.fn.matchHeight._throttle);
        }
    };

    /* 
    *  bind events
    */

    // apply on DOM ready event
    $($.fn.matchHeight._applyDataApi);

    // update heights on load and resize events
    $(window).bind('load resize orientationchange', $.fn.matchHeight._update);

    /*
    *  rows utility function
    *  returns array of jQuery selections representing each row 
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

})(jQuery);

/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

//Add semicolon to prevent IIFE from being passed as argument to concated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function () {

/**
 * Brings an environment as close to ECMAScript 5 compliance
 * as is possible with the facilities of erstwhile engines.
 *
 * Annotated ES5: http://es5.github.com/ (specific links below)
 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
 */

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

function Empty() {}

if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (typeof target != "function") {
            throw new TypeError("Function.prototype.bind called on incompatible " + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = _Array_slice_.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    args.concat(_Array_slice_.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(_Array_slice_.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = Math.max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            boundArgs.push("$" + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        var bound = Function("binder", "return function(" + boundArgs.join(",") + "){return binder.apply(this,arguments)}")(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    };
}

// Shortcut to an often accessed properties, in order to avoid multiple
// dereference that costs universally.
// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
// us it in defining shortcuts.
var call = Function.prototype.call;
var prototypeOfArray = Array.prototype;
var prototypeOfObject = Object.prototype;
var _Array_slice_ = prototypeOfArray.slice;
// Having a toString local variable name breaks in Opera so use _toString.
var _toString = call.bind(prototypeOfObject.toString);
var owns = call.bind(prototypeOfObject.hasOwnProperty);

// If JS engine supports accessors creating shortcuts.
var defineGetter;
var defineSetter;
var lookupGetter;
var lookupSetter;
var supportsAccessors;
if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
    defineGetter = call.bind(prototypeOfObject.__defineGetter__);
    defineSetter = call.bind(prototypeOfObject.__defineSetter__);
    lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
    lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
}

//
// Array
// =====
//

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.12
// Default value for second param
// [bugfix, ielt9, old browsers]
// IE < 9 bug: [1,2].splice(0).join("") == "" but should be "12"
if ([1,2].splice(0).length != 2) {
    var array_splice = Array.prototype.splice;
    var array_push = Array.prototype.push;
    var array_unshift = Array.prototype.unshift;

    if (function() { // test IE < 9 to splice bug - see issue #138
        function makeArray(l) {
            var a = [];
            while (l--) {
                a.unshift(l)
            }
            return a
        }

        var array = []
            , lengthBefore
        ;

        array.splice.bind(array, 0, 0).apply(null, makeArray(20));
        array.splice.bind(array, 0, 0).apply(null, makeArray(26));

        lengthBefore = array.length; //20
        array.splice(5, 0, "XXX"); // add one element

        if (lengthBefore + 1 == array.length) {
            return true;// has right splice implementation without bugs
        }
        // else {
        //    IE8 bug
        // }
    }()) {//IE 6/7
        Array.prototype.splice = function(start, deleteCount) {
            if (!arguments.length) {
                return [];
            } else {
                return array_splice.apply(this, [
                    start === void 0 ? 0 : start,
                    deleteCount === void 0 ? (this.length - start) : deleteCount
                ].concat(_Array_slice_.call(arguments, 2)))
            }
        };
    }
    else {//IE8
        Array.prototype.splice = function(start, deleteCount) {
            var result
                , args = _Array_slice_.call(arguments, 2)
                , addElementsCount = args.length
            ;

            if (!arguments.length) {
                return [];
            }

            if (start === void 0) { // default
                start = 0;
            }
            if (deleteCount === void 0) { // default
                deleteCount = this.length - start;
            }

            if (addElementsCount > 0) {
                if (deleteCount <= 0) {
                    if (start == this.length) { // tiny optimisation #1
                        array_push.apply(this, args);
                        return [];
                    }

                    if (start == 0) { // tiny optimisation #2
                        array_unshift.apply(this, args);
                        return [];
                    }
                }

                // Array.prototype.splice implementation
                result = _Array_slice_.call(this, start, start + deleteCount);// delete part
                args.push.apply(args, _Array_slice_.call(this, start + deleteCount, this.length));// right part
                args.unshift.apply(args, _Array_slice_.call(this, 0, start));// left part

                // delete all items from this array and replace it to 'left part' + _Array_slice_.call(arguments, 2) + 'right part'
                args.unshift(0, this.length);

                array_splice.apply(this, args);

                return result;
            }

            return array_splice.call(this, start, deleteCount);
        }

    }
}

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.13
// Return len+argCount.
// [bugfix, ielt8]
// IE < 8 bug: [].unshift(0) == undefined but should be "1"
if ([].unshift(0) != 1) {
    var array_unshift = Array.prototype.unshift;
    Array.prototype.unshift = function() {
        array_unshift.apply(this, arguments);
        return this.length;
    };
}

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
if (!Array.isArray) {
    Array.isArray = function isArray(obj) {
        return _toString(obj) == "[object Array]";
    };
}

// The IsCallable() check in the Array functions
// has been replaced with a strict check on the
// internal class of the object to trap cases where
// the provided function was actually a regular
// expression literal, which in V8 and
// JavaScriptCore is a typeof "function".  Only in
// V8 are regular expression literals permitted as
// reduce parameters, so it is desirable in the
// general case for the shim to match the more
// strict and common behavior of rejecting regular
// expressions.

// ES5 15.4.4.18
// http://es5.github.com/#x15.4.4.18
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach


// Check failure of by-index access of string characters (IE < 9)
// and failure of `0 in boxedString` (Rhino)
var boxedString = Object("a");
var splitString = boxedString[0] != "a" || !(0 in boxedString);

var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxes = true;
    if (method) {
        method.call('foo', function (item, index, context) {
            if (typeof context !== 'object') { properlyBoxes = false; }
        });
    }
    return !!method && properlyBoxes;
};

if (!Array.prototype.forEach || !properlyBoxesContext(Array.prototype.forEach)) {
    Array.prototype.forEach = function forEach(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            thisp = arguments[1],
            i = -1,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                // context
                fun.call(thisp, self[i], i, object);
            }
        }
    };
}

// ES5 15.4.4.19
// http://es5.github.com/#x15.4.4.19
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
if (!Array.prototype.map || !properlyBoxesContext(Array.prototype.map)) {
    Array.prototype.map = function map(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            result = Array(length),
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self)
                result[i] = fun.call(thisp, self[i], i, object);
        }
        return result;
    };
}

// ES5 15.4.4.20
// http://es5.github.com/#x15.4.4.20
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
if (!Array.prototype.filter || !properlyBoxesContext(Array.prototype.filter)) {
    Array.prototype.filter = function filter(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                    object,
            length = self.length >>> 0,
            result = [],
            value,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                value = self[i];
                if (fun.call(thisp, value, i, object)) {
                    result.push(value);
                }
            }
        }
        return result;
    };
}

// ES5 15.4.4.16
// http://es5.github.com/#x15.4.4.16
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
if (!Array.prototype.every || !properlyBoxesContext(Array.prototype.every)) {
    Array.prototype.every = function every(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self && !fun.call(thisp, self[i], i, object)) {
                return false;
            }
        }
        return true;
    };
}

// ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
if (!Array.prototype.some || !properlyBoxesContext(Array.prototype.some)) {
    Array.prototype.some = function some(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self && fun.call(thisp, self[i], i, object)) {
                return true;
            }
        }
        return false;
    };
}

// ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function reduce(fun /*, initial*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        // no value to return if no initial value and an empty array
        if (!length && arguments.length == 1) {
            throw new TypeError("reduce of empty array with no initial value");
        }

        var i = 0;
        var result;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i++];
                    break;
                }

                // if array contains no values, no initial value to return
                if (++i >= length) {
                    throw new TypeError("reduce of empty array with no initial value");
                }
            } while (true);
        }

        for (; i < length; i++) {
            if (i in self) {
                result = fun.call(void 0, result, self[i], i, object);
            }
        }

        return result;
    };
}

// ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
if (!Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function reduceRight(fun /*, initial*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        // no value to return if no initial value, empty array
        if (!length && arguments.length == 1) {
            throw new TypeError("reduceRight of empty array with no initial value");
        }

        var result, i = length - 1;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i--];
                    break;
                }

                // if array contains no values, no initial value to return
                if (--i < 0) {
                    throw new TypeError("reduceRight of empty array with no initial value");
                }
            } while (true);
        }

        if (i < 0) {
            return result;
        }

        do {
            if (i in this) {
                result = fun.call(void 0, result, self[i], i, object);
            }
        } while (i--);

        return result;
    };
}

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf || ([0, 1].indexOf(1, 2) != -1)) {
    Array.prototype.indexOf = function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = toInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    };
}

// ES5 15.4.4.15
// http://es5.github.com/#x15.4.4.15
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
if (!Array.prototype.lastIndexOf || ([0, 1].lastIndexOf(0, -3) != -1)) {
    Array.prototype.lastIndexOf = function lastIndexOf(sought /*, fromIndex */) {
        var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }
        var i = length - 1;
        if (arguments.length > 1) {
            i = Math.min(i, toInteger(arguments[1]));
        }
        // handle negative indices
        i = i >= 0 ? i : length - Math.abs(i);
        for (; i >= 0; i--) {
            if (i in self && sought === self[i]) {
                return i;
            }
        }
        return -1;
    };
}

//
// Object
// ======
//

// ES5 15.2.3.14
// http://es5.github.com/#x15.2.3.14
if (!Object.keys) {
    // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
    var hasDontEnumBug = true,
        hasProtoEnumBug = (function () {}).propertyIsEnumerable('prototype'),
        dontEnums = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
        ],
        dontEnumsLength = dontEnums.length;

    for (var key in {"toString": null}) {
        hasDontEnumBug = false;
    }

    Object.keys = function keys(object) {
        var isFunction = _toString(object) === '[object Function]',
            isObject = object !== null && typeof object === 'object';

        if (!isObject && !isFunction) {
            throw new TypeError("Object.keys called on a non-object");
        }

        var keys = [],
            skipProto = hasProtoEnumBug && isFunction;
        for (var name in object) {
            if (!(skipProto && name === 'prototype') && owns(object, name)) {
                keys.push(name);
            }
        }

        if (hasDontEnumBug) {
            var ctor = object.constructor,
                skipConstructor = ctor && ctor.prototype === object;
            for (var i = 0; i < dontEnumsLength; i++) {
                var dontEnum = dontEnums[i];
                if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
                    keys.push(dontEnum);
                }
            }
        }
        return keys;
    };

}

//
// Date
// ====
//

// ES5 15.9.5.43
// http://es5.github.com/#x15.9.5.43
// This function returns a String value represent the instance in time
// represented by this Date object. The format of the String is the Date Time
// string format defined in 15.9.1.15. All fields are present in the String.
// The time zone is always UTC, denoted by the suffix Z. If the time value of
// this object is not a finite Number a RangeError exception is thrown.
var negativeDate = -62198755200000,
    negativeYearString = "-000001";
if (
    !Date.prototype.toISOString ||
    (new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1)
) {
    Date.prototype.toISOString = function toISOString() {
        var result, length, value, year, month;
        if (!isFinite(this)) {
            throw new RangeError("Date.prototype.toISOString called on non-finite value.");
        }

        year = this.getUTCFullYear();

        month = this.getUTCMonth();
        // see https://github.com/es-shims/es5-shim/issues/111
        year += Math.floor(month / 12);
        month = (month % 12 + 12) % 12;

        // the date time string format is specified in 15.9.1.15.
        result = [month + 1, this.getUTCDate(),
            this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
        year = (
            (year < 0 ? "-" : (year > 9999 ? "+" : "")) +
            ("00000" + Math.abs(year))
            .slice(0 <= year && year <= 9999 ? -4 : -6)
        );

        length = result.length;
        while (length--) {
            value = result[length];
            // pad months, days, hours, minutes, and seconds to have two
            // digits.
            if (value < 10) {
                result[length] = "0" + value;
            }
        }
        // pad milliseconds to have three digits.
        return (
            year + "-" + result.slice(0, 2).join("-") +
            "T" + result.slice(2).join(":") + "." +
            ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
        );
    };
}


// ES5 15.9.5.44
// http://es5.github.com/#x15.9.5.44
// This function provides a String representation of a Date object for use by
// JSON.stringify (15.12.3).
var dateToJSONIsSupported = false;
try {
    dateToJSONIsSupported = (
        Date.prototype.toJSON &&
        new Date(NaN).toJSON() === null &&
        new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
        Date.prototype.toJSON.call({ // generic
            toISOString: function () {
                return true;
            }
        })
    );
} catch (e) {
}
if (!dateToJSONIsSupported) {
    Date.prototype.toJSON = function toJSON(key) {
        // When the toJSON method is called with argument key, the following
        // steps are taken:

        // 1.  Let O be the result of calling ToObject, giving it the this
        // value as its argument.
        // 2. Let tv be toPrimitive(O, hint Number).
        var o = Object(this),
            tv = toPrimitive(o),
            toISO;
        // 3. If tv is a Number and is not finite, return null.
        if (typeof tv === "number" && !isFinite(tv)) {
            return null;
        }
        // 4. Let toISO be the result of calling the [[Get]] internal method of
        // O with argument "toISOString".
        toISO = o.toISOString;
        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
        if (typeof toISO != "function") {
            throw new TypeError("toISOString property is not callable");
        }
        // 6. Return the result of calling the [[Call]] internal method of
        //  toISO with O as the this value and an empty argument list.
        return toISO.call(o);

        // NOTE 1 The argument is ignored.

        // NOTE 2 The toJSON function is intentionally generic; it does not
        // require that its this value be a Date object. Therefore, it can be
        // transferred to other kinds of objects for use as a method. However,
        // it does require that any such object have a toISOString method. An
        // object is free to use the argument key to filter its
        // stringification.
    };
}

// ES5 15.9.4.2
// http://es5.github.com/#x15.9.4.2
// based on work shared by Daniel Friesen (dantman)
// http://gist.github.com/303249
if (!Date.parse || isNaN(Date.parse("2000-01-01T00:00:00.000Z"))) {
    // XXX global assignment won't work in embeddings that use
    // an alternate object for the context.
    Date = (function(NativeDate) {

        // Date.length === 7
        function Date(Y, M, D, h, m, s, ms) {
            var length = arguments.length;
            if (this instanceof NativeDate) {
                var date = length == 1 && String(Y) === Y ? // isString(Y)
                    // We explicitly pass it through parse:
                    new NativeDate(Date.parse(Y)) :
                    // We have to manually make calls depending on argument
                    // length here
                    length >= 7 ? new NativeDate(Y, M, D, h, m, s, ms) :
                    length >= 6 ? new NativeDate(Y, M, D, h, m, s) :
                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
                    length >= 4 ? new NativeDate(Y, M, D, h) :
                    length >= 3 ? new NativeDate(Y, M, D) :
                    length >= 2 ? new NativeDate(Y, M) :
                    length >= 1 ? new NativeDate(Y) :
                                  new NativeDate();
                // Prevent mixups with unfixed Date object
                date.constructor = Date;
                return date;
            }
            return NativeDate.apply(this, arguments);
        };

        // 15.9.1.15 Date Time String Format.
        var isoDateExpression = new RegExp("^" +
            "(\\d{4}|[\+\-]\\d{6})" + // four-digit year capture or sign +
                                      // 6-digit extended year
            "(?:-(\\d{2})" + // optional month capture
            "(?:-(\\d{2})" + // optional day capture
            "(?:" + // capture hours:minutes:seconds.milliseconds
                "T(\\d{2})" + // hours capture
                ":(\\d{2})" + // minutes capture
                "(?:" + // optional :seconds.milliseconds
                    ":(\\d{2})" + // seconds capture
                    "(?:(\\.\\d{1,}))?" + // milliseconds capture
                ")?" +
            "(" + // capture UTC offset component
                "Z|" + // UTC capture
                "(?:" + // offset specifier +/-hours:minutes
                    "([-+])" + // sign capture
                    "(\\d{2})" + // hours offset capture
                    ":(\\d{2})" + // minutes offset capture
                ")" +
            ")?)?)?)?" +
        "$");

        var months = [
            0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365
        ];

        function dayFromMonth(year, month) {
            var t = month > 1 ? 1 : 0;
            return (
                months[month] +
                Math.floor((year - 1969 + t) / 4) -
                Math.floor((year - 1901 + t) / 100) +
                Math.floor((year - 1601 + t) / 400) +
                365 * (year - 1970)
            );
        }

        function toUTC(t) {
            return Number(new NativeDate(1970, 0, 1, 0, 0, 0, t));
        }

        // Copy any custom methods a 3rd party library may have added
        for (var key in NativeDate) {
            Date[key] = NativeDate[key];
        }

        // Copy "native" methods explicitly; they may be non-enumerable
        Date.now = NativeDate.now;
        Date.UTC = NativeDate.UTC;
        Date.prototype = NativeDate.prototype;
        Date.prototype.constructor = Date;

        // Upgrade Date.parse to handle simplified ISO 8601 strings
        Date.parse = function parse(string) {
            var match = isoDateExpression.exec(string);
            if (match) {
                // parse months, days, hours, minutes, seconds, and milliseconds
                // provide default values if necessary
                // parse the UTC offset component
                var year = Number(match[1]),
                    month = Number(match[2] || 1) - 1,
                    day = Number(match[3] || 1) - 1,
                    hour = Number(match[4] || 0),
                    minute = Number(match[5] || 0),
                    second = Number(match[6] || 0),
                    millisecond = Math.floor(Number(match[7] || 0) * 1000),
                    // When time zone is missed, local offset should be used
                    // (ES 5.1 bug)
                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                    isLocalTime = Boolean(match[4] && !match[8]),
                    signOffset = match[9] === "-" ? 1 : -1,
                    hourOffset = Number(match[10] || 0),
                    minuteOffset = Number(match[11] || 0),
                    result;
                if (
                    hour < (
                        minute > 0 || second > 0 || millisecond > 0 ?
                        24 : 25
                    ) &&
                    minute < 60 && second < 60 && millisecond < 1000 &&
                    month > -1 && month < 12 && hourOffset < 24 &&
                    minuteOffset < 60 && // detect invalid offsets
                    day > -1 &&
                    day < (
                        dayFromMonth(year, month + 1) -
                        dayFromMonth(year, month)
                    )
                ) {
                    result = (
                        (dayFromMonth(year, month) + day) * 24 +
                        hour +
                        hourOffset * signOffset
                    ) * 60;
                    result = (
                        (result + minute + minuteOffset * signOffset) * 60 +
                        second
                    ) * 1000 + millisecond;
                    if (isLocalTime) {
                        result = toUTC(result);
                    }
                    if (-8.64e15 <= result && result <= 8.64e15) {
                        return result;
                    }
                }
                return NaN;
            }
            return NativeDate.parse.apply(this, arguments);
        };

        return Date;
    })(Date);
}

// ES5 15.9.4.4
// http://es5.github.com/#x15.9.4.4
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}


//
// Number
// ======
//

// ES5.1 15.7.4.5
// http://es5.github.com/#x15.7.4.5
if (!Number.prototype.toFixed || (0.00008).toFixed(3) !== '0.000' || (0.9).toFixed(0) === '0' || (1.255).toFixed(2) !== '1.25' || (1000000000000000128).toFixed(0) !== "1000000000000000128") {
    // Hide these variables and functions
    (function () {
        var base, size, data, i;

        base = 1e7;
        size = 6;
        data = [0, 0, 0, 0, 0, 0];

        function multiply(n, c) {
            var i = -1;
            while (++i < size) {
                c += n * data[i];
                data[i] = c % base;
                c = Math.floor(c / base);
            }
        }

        function divide(n) {
            var i = size, c = 0;
            while (--i >= 0) {
                c += data[i];
                data[i] = Math.floor(c / n);
                c = (c % n) * base;
            }
        }

        function toString() {
            var i = size;
            var s = '';
            while (--i >= 0) {
                if (s !== '' || i === 0 || data[i] !== 0) {
                    var t = String(data[i]);
                    if (s === '') {
                        s = t;
                    } else {
                        s += '0000000'.slice(0, 7 - t.length) + t;
                    }
                }
            }
            return s;
        }

        function pow(x, n, acc) {
            return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
        }

        function log(x) {
            var n = 0;
            while (x >= 4096) {
                n += 12;
                x /= 4096;
            }
            while (x >= 2) {
                n += 1;
                x /= 2;
            }
            return n;
        }

        Number.prototype.toFixed = function (fractionDigits) {
            var f, x, s, m, e, z, j, k;

            // Test for NaN and round fractionDigits down
            f = Number(fractionDigits);
            f = f !== f ? 0 : Math.floor(f);

            if (f < 0 || f > 20) {
                throw new RangeError("Number.toFixed called with invalid number of decimals");
            }

            x = Number(this);

            // Test for NaN
            if (x !== x) {
                return "NaN";
            }

            // If it is too big or small, return the string value of the number
            if (x <= -1e21 || x >= 1e21) {
                return String(x);
            }

            s = "";

            if (x < 0) {
                s = "-";
                x = -x;
            }

            m = "0";

            if (x > 1e-21) {
                // 1e-21 < x < 1e21
                // -70 < log2(x) < 70
                e = log(x * pow(2, 69, 1)) - 69;
                z = (e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1));
                z *= 0x10000000000000; // Math.pow(2, 52);
                e = 52 - e;

                // -18 < e < 122
                // x = z / 2 ^ e
                if (e > 0) {
                    multiply(0, z);
                    j = f;

                    while (j >= 7) {
                        multiply(1e7, 0);
                        j -= 7;
                    }

                    multiply(pow(10, j, 1), 0);
                    j = e - 1;

                    while (j >= 23) {
                        divide(1 << 23);
                        j -= 23;
                    }

                    divide(1 << j);
                    multiply(1, 1);
                    divide(2);
                    m = toString();
                } else {
                    multiply(0, z);
                    multiply(1 << (-e), 0);
                    m = toString() + '0.00000000000000000000'.slice(2, 2 + f);
                }
            }

            if (f > 0) {
                k = m.length;

                if (k <= f) {
                    m = s + '0.0000000000000000000'.slice(0, f - k + 2) + m;
                } else {
                    m = s + m.slice(0, k - f) + '.' + m.slice(k - f);
                }
            } else {
                m = s + m;
            }

            return m;
        }
    }());
}


//
// String
// ======
//


// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

var string_split = String.prototype.split;
if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === "t" ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = /()??/.exec("")[1] === void 0; // NPCG: nonparticipating capturing group

        String.prototype.split = function (separator, limit) {
            var string = this;
            if (separator === void 0 && limit === 0)
                return [];

            // If `separator` is not a regex, use native split
            if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
                return string_split.apply(this, arguments);
            }

            var output = [],
                flags = (separator.ignoreCase ? "i" : "") +
                        (separator.multiline  ? "m" : "") +
                        (separator.extended   ? "x" : "") + // Proposed for ES6
                        (separator.sticky     ? "y" : ""), // Firefox 3+
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator = new RegExp(separator.source, flags + "g"),
                separator2, match, lastIndex, lastLength;
            string += ""; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            limit = limit === void 0 ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                limit >>> 0; // ToUint32(limit)
            while (match = separator.exec(string)) {
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === void 0) {
                                    match[i] = void 0;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < string.length) {
                        Array.prototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separator.test("")) {
                    output.push("");
                }
            } else {
                output.push(string.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ("0".split(void 0, 0).length) {
    String.prototype.split = function(separator, limit) {
        if (separator === void 0 && limit === 0) return [];
        return string_split.apply(this, arguments);
    }
}


// ECMA-262, 3rd B.2.3
// Note an ECMAScript standart, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
if ("".substr && "0b".substr(-1) !== "b") {
    var string_substr = String.prototype.substr;
    /**
     *  Get the substring of a string
     *  @param  {integer}  start   where to start the substring
     *  @param  {integer}  length  how many characters to return
     *  @return {string}
     */
    String.prototype.substr = function(start, length) {
        return string_substr.call(
            this,
            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
            length
        );
    }
}

// ES5 15.5.4.20
// whitespace from: http://es5.github.io/#x15.5.4.20
var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
    "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
    "\u2029\uFEFF";
if (!String.prototype.trim || ws.trim()) {
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // http://perfectionkills.com/whitespace-deviations/
    ws = "[" + ws + "]";
    var trimBeginRegexp = new RegExp("^" + ws + ws + "*"),
        trimEndRegexp = new RegExp(ws + ws + "*$");
    String.prototype.trim = function trim() {
        if (this === void 0 || this === null) {
            throw new TypeError("can't convert "+this+" to object");
        }
        return String(this)
            .replace(trimBeginRegexp, "")
            .replace(trimEndRegexp, "");
    };
}

// ES-5 15.1.2.2
if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
    parseInt = (function (origParseInt) {
        var hexRegex = /^0[xX]/;
        return function parseIntES5(str, radix) {
            str = String(str).trim();
            if (!+radix) {
                radix = hexRegex.test(str) ? 16 : 10;
            }
            return origParseInt(str, radix);
        };
    }(parseInt));
}

//
// Util
// ======
//

// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer

function toInteger(n) {
    n = +n;
    if (n !== n) { // isNaN
        n = 0;
    } else if (n !== 0 && n !== (1/0) && n !== -(1/0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
}

function isPrimitive(input) {
    var type = typeof input;
    return (
        input === null ||
        type === "undefined" ||
        type === "boolean" ||
        type === "number" ||
        type === "string"
    );
}

function toPrimitive(input) {
    var val, valueOf, toString;
    if (isPrimitive(input)) {
        return input;
    }
    valueOf = input.valueOf;
    if (typeof valueOf === "function") {
        val = valueOf.call(input);
        if (isPrimitive(val)) {
            return val;
        }
    }
    toString = input.toString;
    if (typeof toString === "function") {
        val = toString.call(input);
        if (isPrimitive(val)) {
            return val;
        }
    }
    throw new TypeError();
}

// ES5 9.9
// http://es5.github.com/#x9.9
var toObject = function (o) {
    if (o == null) { // this matches both null and undefined
        throw new TypeError("can't convert "+o+" to object");
    }
    return Object(o);
};

}));
/* MediaMatch v.2.0.2 - Testing css media queries in Javascript. Authors & copyright (c) 2013: WebLinc, David Knight. */

window.matchMedia || (window.matchMedia = function (win) {
    'use strict';

    // Internal globals
    var _doc        = win.document,
        _viewport   = _doc.documentElement,
        _queries    = [],
        _queryID    = 0,
        _type       = '',
        _features   = {},
                    // only screen
                    // only screen and
                    // not screen
                    // not screen and
                    // screen
                    // screen and
        _typeExpr   = /\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,
                    // (-vendor-min-width: 300px)
                    // (min-width: 300px)
                    // (width: 300px)
                    // (width)
                    // (orientation: portrait|landscape)
        _mediaExpr  = /^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,
        _timer      = 0,

        // Helper methods

        /*
            _matches
         */
        _matches = function (media) {
            // screen and (min-width: 400px), screen and (max-width: 500px)
            var mql         = (media.indexOf(',') !== -1 && media.split(',')) || [media],
                mqIndex     = mql.length - 1,
                mqLength    = mqIndex,
                mq          = null,

                // not screen, screen
                negateType      = null,
                negateTypeFound = '',
                negateTypeIndex = 0,
                negate          = false,
                type            = '',

                // (min-width: 400px), (min-width)
                exprListStr = '',
                exprList    = null,
                exprIndex   = 0,
                exprLength  = 0,
                expr        = null,

                prefix      = '',
                length      = '',
                unit        = '',
                value       = '',
                feature     = '',

                match       = false;

            if (media === '') {
                return true;
            }

            do {
                mq          = mql[mqLength - mqIndex];
                negate      = false;
                negateType  = mq.match(_typeExpr);

                if (negateType) {
                    negateTypeFound = negateType[0];
                    negateTypeIndex = negateType.index;
                }

                if (!negateType || ((mq.substring(0, negateTypeIndex).indexOf('(') === -1) && (negateTypeIndex || (!negateType[3] && negateTypeFound !== negateType.input)))) {
                    match = false;
                    continue;
                }

                exprListStr = mq;

                negate = negateType[1] === 'not';

                if (!negateTypeIndex) {
                    type        =  negateType[2];
                    exprListStr = mq.substring(negateTypeFound.length);
                }

                // Test media type
                // Test type against this device or if 'all' or empty ''
                match       = type === _type || type === 'all' || type === '';

                exprList    = (exprListStr.indexOf(' and ') !== -1 && exprListStr.split(' and ')) || [exprListStr];
                exprIndex   = exprList.length - 1;
                exprLength  = exprIndex;

                if (match && exprIndex >= 0 && exprListStr !== '') {
                    do {
                        expr = exprList[exprIndex].match(_mediaExpr);

                        if (!expr || !_features[expr[3]]) {
                            match = false;
                            break;
                        }

                        prefix  = expr[2];
                        length  = expr[5];
                        value   = length;
                        unit    = expr[7];
                        feature = _features[expr[3]];

                        // Convert unit types
                        if (unit) {
                            if (unit === 'px') {
                                // If unit is px
                                value = Number(length);
                            } else if (unit === 'em' || unit === 'rem') {
                                // Convert relative length unit to pixels
                                // Assumed base font size is 16px
                                value = 16 * length;
                            } else if (expr[8]) {
                                // Convert aspect ratio to decimal
                                value = (length / expr[8]).toFixed(2);
                            } else if (unit === 'dppx') {
                                // Convert resolution dppx unit to pixels
                                value = length * 96;
                            } else if (unit === 'dpcm') {
                                // Convert resolution dpcm unit to pixels
                                value = length * 0.3937;
                            } else {
                                // default
                                value = Number(length);
                            }
                        }

                        // Test for prefix min or max
                        // Test value against feature
                        if (prefix === 'min-' && value) {
                            match = feature >= value;
                        } else if (prefix === 'max-' && value) {
                            match = feature <= value;
                        } else if (value) {
                            match = feature === value;
                        } else {
                            match = !!feature;
                        }

                        // If 'match' is false, break loop
                        // Continue main loop through query list
                        if (!match) {
                            break;
                        }
                    } while (exprIndex--);
                }

                // If match is true, break loop
                // Once matched, no need to check other queries
                if (match) {
                    break;
                }
            } while (mqIndex--);

            return negate ? !match : match;
        },

        /*
            _setFeature
         */
        _setFeature = function () {
            // Sets properties of '_features' that change on resize and/or orientation.
            var w   = win.innerWidth || _viewport.clientWidth,
                h   = win.innerHeight || _viewport.clientHeight,
                dw  = win.screen.width,
                dh  = win.screen.height,
                c   = win.screen.colorDepth,
                x   = win.devicePixelRatio;

            _features.width                     = w;
            _features.height                    = h;
            _features['aspect-ratio']           = (w / h).toFixed(2);
            _features['device-width']           = dw;
            _features['device-height']          = dh;
            _features['device-aspect-ratio']    = (dw / dh).toFixed(2);
            _features.color                     = c;
            _features['color-index']            = Math.pow(2, c);
            _features.orientation               = (h >= w ? 'portrait' : 'landscape');
            _features.resolution                = (x && x * 96) || win.screen.deviceXDPI || 96;
            _features['device-pixel-ratio']     = x || 1;
        },

        /*
            _watch
         */
        _watch = function () {
            clearTimeout(_timer);

            _timer = setTimeout(function () {
                var query   = null,
                    qIndex  = _queryID - 1,
                    qLength = qIndex,
                    match   = false;

                if (qIndex >= 0) {
                    _setFeature();

                    do {
                        query = _queries[qLength - qIndex];

                        if (query) {
                            match = _matches(query.mql.media);

                            if ((match && !query.mql.matches) || (!match && query.mql.matches)) {
                                query.mql.matches = match;

                                if (query.listeners) {
                                    for (var i = 0, il = query.listeners.length; i < il; i++) {
                                        if (query.listeners[i]) {
                                            query.listeners[i].call(win, query.mql);
                                        }
                                    }
                                }
                            }
                        }
                    } while(qIndex--);
                }

                
            }, 10);
        },

        /*
            _init
         */
        _init = function () {
            var head        = _doc.getElementsByTagName('head')[0],
                style       = _doc.createElement('style'),
                info        = null,
                typeList    = ['screen', 'print', 'speech', 'projection', 'handheld', 'tv', 'braille', 'embossed', 'tty'],
                typeIndex   = 0,
                typeLength  = typeList.length,
                cssText     = '#mediamatchjs { position: relative; z-index: 0; }',
                eventPrefix = '',
                addEvent    = win.addEventListener || (eventPrefix = 'on') && win.attachEvent;

            style.type  = 'text/css';
            style.id    = 'mediamatchjs';

            head.appendChild(style);

            // Must be placed after style is inserted into the DOM for IE
            info = (win.getComputedStyle && win.getComputedStyle(style)) || style.currentStyle;

            // Create media blocks to test for media type
            for ( ; typeIndex < typeLength; typeIndex++) {
                cssText += '@media ' + typeList[typeIndex] + ' { #mediamatchjs { position: relative; z-index: ' + typeIndex + ' } }';
            }

            // Add rules to style element
            if (style.styleSheet) {
                style.styleSheet.cssText = cssText;
            } else {
                style.textContent = cssText;
            }

            // Get media type
            _type = typeList[(info.zIndex * 1) || 0];

            head.removeChild(style);

            _setFeature();

            // Set up listeners
            addEvent(eventPrefix + 'resize', _watch);
            addEvent(eventPrefix + 'orientationchange', _watch);
        };

    _init();

    /*
        A list of parsed media queries, ex. screen and (max-width: 400px), screen and (max-width: 800px)
    */
    return function (media) {
        var id  = _queryID,
            mql = {
                matches         : false,
                media           : media,
                addListener     : function addListener(listener) {
                    _queries[id].listeners || (_queries[id].listeners = []);
                    listener && _queries[id].listeners.push(listener);
                },
                removeListener  : function removeListener(listener) {
                    var query   = _queries[id],
                        i       = 0,
                        il      = 0;

                    if (!query) {
                        return;
                    }

                    il = query.listeners.length;

                    for ( ; i < il; i++) {
                        if (query.listeners[i] === listener) {
                            query.listeners.splice(i, 1);
                        }
                    }
                }
            };

        if (media === '') {
            mql.matches = true;
            return mql;
        }

        mql.matches = _matches(media);

        _queryID = _queries.push({
            mql         : mql,
            listeners   : null
        });

        return mql;
    };
}(window));
/*!
 * enquire.js v2.1.0 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

;(function (name, context, factory) {
	var matchMedia = window.matchMedia;

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = factory(matchMedia);
	}
	else if (typeof define === 'function' && define.amd) {
		define(function() {
			return (context[name] = factory(matchMedia));
		});
	}
	else {
		context[name] = factory(matchMedia);
	}
}('enquire', this, function (matchMedia) {

	'use strict';

    /*jshint unused:false */
    /**
     * Helper function for iterating over a collection
     *
     * @param collection
     * @param fn
     */
    function each(collection, fn) {
        var i      = 0,
            length = collection.length,
            cont;

        for(i; i < length; i++) {
            cont = fn(collection[i], i);
            if(cont === false) {
                break; //allow early exit
            }
        }
    }

    /**
     * Helper function for determining whether target object is an array
     *
     * @param target the object under test
     * @return {Boolean} true if array, false otherwise
     */
    function isArray(target) {
        return Object.prototype.toString.apply(target) === '[object Array]';
    }

    /**
     * Helper function for determining whether target object is a function
     *
     * @param target the object under test
     * @return {Boolean} true if function, false otherwise
     */
    function isFunction(target) {
        return typeof target === 'function';
    }

    /**
     * Delegate to handle a media query being matched and unmatched.
     *
     * @param {object} options
     * @param {function} options.match callback for when the media query is matched
     * @param {function} [options.unmatch] callback for when the media query is unmatched
     * @param {function} [options.setup] one-time callback triggered the first time a query is matched
     * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
     * @constructor
     */
    function QueryHandler(options) {
        this.options = options;
        !options.deferSetup && this.setup();
    }
    QueryHandler.prototype = {

        /**
         * coordinates setup of the handler
         *
         * @function
         */
        setup : function() {
            if(this.options.setup) {
                this.options.setup();
            }
            this.initialised = true;
        },

        /**
         * coordinates setup and triggering of the handler
         *
         * @function
         */
        on : function() {
            !this.initialised && this.setup();
            this.options.match && this.options.match();
        },

        /**
         * coordinates the unmatch event for the handler
         *
         * @function
         */
        off : function() {
            this.options.unmatch && this.options.unmatch();
        },

        /**
         * called when a handler is to be destroyed.
         * delegates to the destroy or unmatch callbacks, depending on availability.
         *
         * @function
         */
        destroy : function() {
            this.options.destroy ? this.options.destroy() : this.off();
        },

        /**
         * determines equality by reference.
         * if object is supplied compare options, if function, compare match callback
         *
         * @function
         * @param {object || function} [target] the target for comparison
         */
        equals : function(target) {
            return this.options === target || this.options.match === target;
        }

    };
    /**
     * Represents a single media query, manages it's state and registered handlers for this query
     *
     * @constructor
     * @param {string} query the media query string
     * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
     */
    function MediaQuery(query, isUnconditional) {
        this.query = query;
        this.isUnconditional = isUnconditional;
        this.handlers = [];
        this.mql = matchMedia(query);

        var self = this;
        this.listener = function(mql) {
            self.mql = mql;
            self.assess();
        };
        this.mql.addListener(this.listener);
    }
    MediaQuery.prototype = {

        /**
         * add a handler for this query, triggering if already active
         *
         * @param {object} handler
         * @param {function} handler.match callback for when query is activated
         * @param {function} [handler.unmatch] callback for when query is deactivated
         * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
         * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
         */
        addHandler : function(handler) {
            var qh = new QueryHandler(handler);
            this.handlers.push(qh);

            this.matches() && qh.on();
        },

        /**
         * removes the given handler from the collection, and calls it's destroy methods
         * 
         * @param {object || function} handler the handler to remove
         */
        removeHandler : function(handler) {
            var handlers = this.handlers;
            each(handlers, function(h, i) {
                if(h.equals(handler)) {
                    h.destroy();
                    return !handlers.splice(i,1); //remove from array and exit each early
                }
            });
        },

        /**
         * Determine whether the media query should be considered a match
         * 
         * @return {Boolean} true if media query can be considered a match, false otherwise
         */
        matches : function() {
            return this.mql.matches || this.isUnconditional;
        },

        /**
         * Clears all handlers and unbinds events
         */
        clear : function() {
            each(this.handlers, function(handler) {
                handler.destroy();
            });
            this.mql.removeListener(this.listener);
            this.handlers.length = 0; //clear array
        },

        /*
         * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
         */
        assess : function() {
            var action = this.matches() ? 'on' : 'off';

            each(this.handlers, function(handler) {
                handler[action]();
            });
        }
    };
    /**
     * Allows for registration of query handlers.
     * Manages the query handler's state and is responsible for wiring up browser events
     *
     * @constructor
     */
    function MediaQueryDispatch () {
        if(!matchMedia) {
            throw new Error('matchMedia not present, legacy browsers require a polyfill');
        }

        this.queries = {};
        this.browserIsIncapable = !matchMedia('only all').matches;
    }

    MediaQueryDispatch.prototype = {

        /**
         * Registers a handler for the given media query
         *
         * @param {string} q the media query
         * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
         * @param {function} options.match fired when query matched
         * @param {function} [options.unmatch] fired when a query is no longer matched
         * @param {function} [options.setup] fired when handler first triggered
         * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
         */
        register : function(q, options, shouldDegrade) {
            var queries         = this.queries,
                isUnconditional = shouldDegrade && this.browserIsIncapable;

            if(!queries[q]) {
                queries[q] = new MediaQuery(q, isUnconditional);
            }

            //normalise to object in an array
            if(isFunction(options)) {
                options = { match : options };
            }
            if(!isArray(options)) {
                options = [options];
            }
            each(options, function(handler) {
                queries[q].addHandler(handler);
            });

            return this;
        },

        /**
         * unregisters a query and all it's handlers, or a specific handler for a query
         *
         * @param {string} q the media query to target
         * @param {object || function} [handler] specific handler to unregister
         */
        unregister : function(q, handler) {
            var query = this.queries[q];

            if(query) {
                if(handler) {
                    query.removeHandler(handler);
                }
                else {
                    query.clear();
                    delete this.queries[q];
                }
            }

            return this;
        }
    };

	return new MediaQueryDispatch();

}));
/*global jQuery */
/*jshint multistr:true browser:true */
/*!
 * FitVids 1.0.3
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 * Date: Thu Sept 01 18:00:00 2011 -0500
 */

(function( $ ){

    "use strict";

    $.fn.fitVids = function( options ) {
        var settings = {
            customSelector: null
        };

        if(!document.getElementById('fit-vids-style')) {

            var div = document.createElement('div'),
                ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
                cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';

            div.className = 'fit-vids-style';
            div.id = 'fit-vids-style';
            div.style.display = 'none';
            div.innerHTML = cssStyles;

            ref.parentNode.insertBefore(div,ref);

        }

        if ( options ) {
            $.extend( settings, options );
        }

        return this.each(function(){
            var selectors = [
                "iframe[src*='player.vimeo.com']",
                "iframe[src*='youtube.com']",
                "iframe[src*='youtube-nocookie.com']",
                "iframe[src*='kickstarter.com'][src*='video.html']",
                "object",
                "embed"
            ];

            if (settings.customSelector) {
                selectors.push(settings.customSelector);
            }

            var $allVideos = $(this).find(selectors.join(','));
            $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

            $allVideos.each(function(){
                var $this = $(this);
                if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
                var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
                    width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
                    aspectRatio = height / width;
                if(!$this.attr('id')){
                    var videoID = 'fitvid' + Math.floor(Math.random()*999999);
                    $this.attr('id', videoID);
                }
                $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
                $this.removeAttr('height').removeAttr('width');
            });
        });
    };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
/*! iCheck v2.0.0 - http://git.io/arlzeA, (c) Damir Sultanov - http://fronteed.com */
(function(r,w,m){r.ichecked||(r.ichecked=function(){m=r.jQuery||r.Zepto;var z={autoInit:!0,autoAjax:!0,tap:!0,checkboxClass:"icheckbox",radioClass:"iradio",checkedClass:"checked",disabledClass:"disabled",indeterminateClass:"indeterminate",hoverClass:"hover",callbacks:{ifCreated:!1},classes:{base:"icheck",div:"#-item",area:"#-area-",input:"#-input",label:"#-label"}};r.icheck=m.extend(z,r.icheck);var l=r.navigator.userAgent,$=/MSIE [5-8]/.test(l)||9>w.documentMode,C=/Opera Mini/.test(l),D=z.classes.base,
N=z.classes.div.replace("#",D),aa=z.classes.area.replace("#",D),O=z.classes.input.replace("#",D),P=z.classes.label.replace("#",D);delete z.classes;var ba={},p={},ja=RegExp(D+"\\[(.*?)\\]"),H=function(a,c,e){a&&(c=ja.exec(a))&&p[c[1]]&&(e=c[1]);return e},ca=r.getComputedStyle,W=r.PointerEvent||r.MSPointerEvent,x="ontouchend"in r,E=/mobile|tablet|phone|ip(ad|od)|android|silk|webos/i.test(l),l=["mouse","down","up","over","out"],t=r.PointerEvent?["pointer",l[1],l[2],l[3],l[4]]:["MSPointer","Down","Up",
"Over","Out"],Q=["touch","start","end"],R=x&&E||W,S=R?x?Q[0]+Q[1]:t[0]+t[3]:l[0]+l[3],X=R?x?Q[0]+Q[2]:t[0]+t[4]:l[0]+l[4],L=R?x?!1:t[0]+t[1]:l[0]+l[1],Y=R?x?!1:t[0]+t[2]:l[0]+l[2],l=C?"":S+".i "+X+".i ",t=!C&&L?L+".i "+Y+".i":"",I,T,da=!1!==z.areaStyle?'position:absolute;display:block;content:"";top:#;bottom:#;left:#;right:#;':0,U=function(a,c,e){I||(I=w.createElement("style"),(w.head||w.getElementsByTagName("head")[0]).appendChild(I),r.createPopup||I.appendChild(w.createTextNode("")),T=I.sheet||
I.styleSheet);c||(c="div."+(e?aa+e+":after":N+" input."+O));a=a.replace(/!/g," !important");T.addRule?T.addRule(c,a,0):T.insertRule(c+"{"+a+"}",0)};U("position:absolute!;display:block!;outline:none!;"+(z.debug?"":"opacity:0!;z-index:-99!;clip:rect(0 0 0 0)!;"));(x&&E||C)&&U("cursor:pointer!;","label."+P+",div."+N);U("display:none!","iframe.icheck-frame");var F=function(a,c,e,b,f,d,k){if(b=a.className)return f=" "+b+" ",1===e?d=c:0===e?k=c:(d=c[0],k=c[1]),d&&0>f.indexOf(" "+d+" ")&&(f+=d+" "),k&&~f.indexOf(" "+
k+" ")&&(f=f.replace(" "+k+" "," ")),f=f.replace(/^\s+|\s+$/g,""),f!==b&&(a.className=f),f},ea=function(a,c,e,b,f,d){p[c]&&(b=p[c],f=b.className,d=m(J(a,"div",f)),d.length&&(m(a).removeClass(O+" "+f).attr("style",b.style),m("label."+b.esc).removeClass(P+" "+f),m(d).replaceWith(m(a)),e&&M(a,c,e)),p[c]=!1)},fa=function(a,c,e,b,f){e=[];for(b=a.length;b--;)if(c=a[b],c.type)~"input[type=checkbox],input[type=radio]".indexOf(c.type)&&e.push(c);else for(c=m(c).find("input[type=checkbox],input[type=radio]"),
f=c.length;f--;)e.push(c[f]);return e},J=function(a,c,e,b){for(;9!==a.nodeType;)if(a=a.parentNode,a.tagName==c.toUpperCase()&&~a.className.indexOf(e)){b=a;break}return b},M=function(a,c,e){e="if"+e;if(!1!==p[c].callbacks){if("function"==typeof p[c].callbacks[e])p[c].callbacks[e](a,p[c]);!1!==p[c].callbacks[e]&&m(a).trigger(e)}},ga=function(a,c,e,b){a=fa(a);for(var f=a.length;f--;){var d=a[f],k=d.attributes,l={},g=k.length,h,n,t={},x={},s,q=d.id,v=d.className,y,C=d.type,Z=m.cache?m.cache[d[m.expando]]:
0,A=H(v),K,u,B="",G=!1;u=[];for(var E=r.FastClick?" needsclick":"";g--;)h=k[g].name,n=k[g].value,~h.indexOf("data-")&&(t[h.substr(5)]=n),"style"==h&&(y=n),l[h]=n;Z&&Z.data&&(t=m.extend(t,Z.data));for(s in t){n=t[s];if("true"==n||"false"==n)n="true"==n;x[s.replace(/checkbox|radio|class|id|label/g,function(a,b){return 0===b?a:a.charAt(0).toUpperCase()+a.slice(1)})]=n}k=m.extend({},z,r.icheck,x,c);g=k.handle;"checkbox"!==g&&"radio"!==g&&(g="input[type=checkbox],input[type=radio]");if(!1!==k.init&&~g.indexOf(C)){for(A&&
ea(d,A);!p[A];)if(A=Math.random().toString(36).substr(2,5),!p[A]){K=D+"["+A+"]";break}delete k.autoInit;delete k.autoAjax;k.style=y||"";k.className=K;k.esc=K.replace(/(\[|\])/g,"\\$1");p[A]=k;if(g=J(d,"label",""))!g.htmlFor&&q&&(g.htmlFor=q),u.push(g);if(q)for(h=m('label[for="'+q+'"]');h.length--;)q=h[h.length],q!==g&&u.push(q);for(n=u.length;n--;)q=u[n],h=q.className,h=(g=H(h))?F(q,D+"["+g+"]",0):(h?h+" ":"")+P,q.className=h+" "+K+E;u=w.createElement("div");if(k.inherit)for(q=k.inherit.split(/\s*,\s*/),
h=q.length;h--;)g=q[h],void 0!==l[g]&&("class"==g?B+=l[g]+" ":u.setAttribute(g,"id"==g?D+"-"+l[g]:l[g]));B+=k[C+"Class"];B+=" "+N+" "+K;k.area&&da&&(G=(""+k.area).replace(/%|px|em|\+|-/g,"")|0)&&(ba[G]||(U(da.replace(/#/g,"-"+G+"%"),!1,G),ba[G]=!0),B+=" "+aa+G);u.className=B+E;d.className=(v?v+" ":"")+O+" "+K;d.parentNode.replaceChild(u,d);u.appendChild(d);k.insert&&m(u).append(k.insert);G&&(l=ca?ca(u,null).getPropertyValue("position"):u.currentStyle.position,"static"==l&&(u.style.position="relative"));
V(d,u,A,"updated",!0,!1,e);p[A].done=!0;b||M(d,A,"Created")}}},V=function(a,c,e,b,f,d,k){var m=p[e],g={},h={};g.checked=[a.checked,"Checked","Unchecked"];d&&!k||"click"===b||(g.disabled=[a.disabled,"Disabled","Enabled"],g.indeterminate=["true"==a.getAttribute("indeterminate")||!!a.indeterminate,"Indeterminate","Determinate"]);"updated"==b||"click"==b?(h.checked=d?!g.checked[0]:g.checked[0],d&&!k||"click"===b||(h.disabled=g.disabled[0],h.indeterminate=g.indeterminate[0])):"checked"==b||"unchecked"==
b?h.checked="checked"==b:"disabled"==b||"enabled"==b?h.disabled="disabled"==b:"indeterminate"==b||"determinate"==b?h.indeterminate="determinate"!==b:h.checked=!g.checked[0];ha(a,c,g,h,e,m,b,f,d,k)},ha=function(a,c,e,b,f,d,k,l,g,h,n){var r=a.type,t="radio"==r?"Radio":"Checkbox",s,q,v,y,x,w,A,z,u,B;c||(c=J(a,"div",d.className));if(c){for(s in b)if(q=b[s],e[s][0]!==q&&"updated"!==k&&"click"!==k&&(a[s]=q),h&&(q?a.setAttribute(s,s):a.removeAttribute(s)),d[s]!==q){d[s]=q;u=!0;if("checked"==s&&(B=!0,!n&&
q&&(p[f].done||h)&&"radio"==r&&a.name))for(y=J(a,"form",""),v='input[name="'+a.name+'"]',v=y&&!h?m(y).find(v):m(v),y=v.length;y--;)x=v[y],w=H(x.className),a!==x&&p[w]&&p[w].checked&&(A={checked:[!0,"Checked","Unchecked"]},z={checked:!1},ha(x,!1,A,z,w,p[w],"updated",l,g,h,!0));v=[d[s+"Class"],d[s+t+"Class"],d[e[s][1]+"Class"],d[e[s][1]+t+"Class"],d[s+"LabelClass"]];y=[v[3]||v[2],v[1]||v[0]];q&&y.reverse();F(c,y);if(d.mirror&&v[4])for(y=m("label."+d.esc);y.length--;)F(y[y.length],v[4],q?1:0);l&&!n||
M(a,f,e[s][q?1:2])}if(!l||n)u&&M(a,f,"Changed"),B&&M(a,f,"Toggled");d.cursor&&!E&&(d.disabled||d.pointer?d.disabled&&d.pointer&&(c.style.cursor="default",d.pointer=!1):(c.style.cursor="pointer",d.pointer=!0));p[f]=d}};m.fn.icheck=function(a,c){if(/^(checked|unchecked|indeterminate|determinate|disabled|enabled|updated|toggle|destroy|data|styler)$/.test(a))for(var e=fa(this),b=e.length;b--;){var f=e[b],d=H(f.className);if(d){if("data"==a)return p[d];if("styler"==a)return J(f,"div",p[d].className);"destroy"==
a?ea(f,d,"Destroyed"):V(f,!1,d,a);"function"==typeof c&&c(f)}}else"object"!=typeof a&&a||ga(this,a||{});return this};var ia;m(w).on("click.i "+l+t,"label."+P+",div."+N,function(a){var c=this,e=H(c.className);if(e){var b=a.type,f=p[e],d=f.esc,e="DIV"==c.tagName,k,l,g,h,n=[["label",f.activeLabelClass,f.hoverLabelClass],["div",f.activeClass,f.hoverClass]];e&&n.reverse();if(b==L||b==Y){n[0][1]&&F(c,n[0][1],b==L?1:0);if(f.mirror&&n[1][1])for(g=m(n[1][0]+"."+d);g.length--;)F(g[g.length],n[1][1],b==L?1:
0);e&&b==Y&&f.tap&&E&&W&&!C&&(h=!0)}else if(b==S||b==X){n[0][2]&&F(c,n[0][2],b==S?1:0);if(f.mirror&&n[1][2])for(g=m(n[1][0]+"."+d);g.length--;)F(g[g.length],n[1][2],b==S?1:0);e&&b==X&&f.tap&&E&&x&&!C&&(h=!0)}else e&&(E&&(x||W)&&f.tap&&!C||(h=!0));h&&setTimeout(function(){l=a.currentTarget||{};"LABEL"!==l.tagName&&(!f.change||100<+new Date-f.change)&&(k=m(c).find("input."+d).click(),($||C)&&k.change())},2)}}).on("click.i change.i focusin.i focusout.i keyup.i keydown.i","input."+O,function(a){var c=
H(this.className);if(c){var e=a.type,b=p[c],f=b.esc,d="click"==e?!1:J(this,"div",b.className);if("click"==e)p[c].change=+new Date,a.stopPropagation();else if("change"==e)d&&!this.disabled&&V(this,d,c,"click");else if(~e.indexOf("focus")){if(a=[b.focusClass,b.focusLabelClass],a[0]&&d&&F(d,a[0],"focusin"==e?1:0),b.mirror&&a[1])for(b=m("label."+f);b.length--;)F(b[b.length],a[1],"focusin"==e?1:0)}else d&&!this.disabled&&("keyup"==e?(("checkbox"==this.type&&32==a.keyCode&&b.keydown||"radio"==this.type&&
!this.checked)&&V(this,d,c,"click",!1,!0),p[c].keydown=p[ia].keydown=!1):(ia=c,p[c].keydown=!0))}}).ready(function(){r.icheck.autoInit&&m("."+D).icheck();if(r.jQuery){var a=w.body||w.getElementsByTagName("body")[0];m.ajaxSetup({converters:{"text html":function(c){if(r.icheck.autoAjax&&a){var e=w.createElement("iframe"),b;$||(e.style="display:none");e.className="iframe.icheck-frame";e.src="about:blank";a.appendChild(e);b=e.contentDocument?e.contentDocument:e.contentWindow.document;b.open();b.write(c);
b.close();a.removeChild(e);b=m(b);ga(b.find("."+D),{},!0);b=b[0];c=(b.body||b.getElementsByTagName("body")[0]).innerHTML}return c}}})}})},"function"==typeof define&&define.amd?define("icheck",[r.jQuery?"jquery":"zepto"],r.ichecked):r.ichecked())})(window,document);

/*

$.Link (part of noUiSlider) - WTFPL */
(function(c){function m(a,c,d){if((a[c]||a[d])&&a[c]===a[d])throw Error("(Link) '"+c+"' can't match '"+d+"'.'");}function r(a){void 0===a&&(a={});if("object"!==typeof a)throw Error("(Format) 'format' option must be an object.");var h={};c(u).each(function(c,n){if(void 0===a[n])h[n]=A[c];else if(typeof a[n]===typeof A[c]){if("decimals"===n&&(0>a[n]||7<a[n]))throw Error("(Format) 'format.decimals' option must be between 0 and 7.");h[n]=a[n]}else throw Error("(Format) 'format."+n+"' must be a "+typeof A[c]+
".");});m(h,"mark","thousand");m(h,"prefix","negative");m(h,"prefix","negativeBefore");this.r=h}function k(a,h){"object"!==typeof a&&c.error("(Link) Initialize with an object.");return new k.prototype.p(a.target||function(){},a.method,a.format||{},h)}var u="decimals mark thousand prefix postfix encoder decoder negative negativeBefore to from".split(" "),A=[2,".","","","",function(a){return a},function(a){return a},"-","",function(a){return a},function(a){return a}];r.prototype.a=function(a){return this.r[a]};
r.prototype.L=function(a){function c(a){return a.split("").reverse().join("")}a=this.a("encoder")(a);var d=this.a("decimals"),n="",k="",m="",r="";0===parseFloat(a.toFixed(d))&&(a="0");0>a&&(n=this.a("negative"),k=this.a("negativeBefore"));a=Math.abs(a).toFixed(d).toString();a=a.split(".");this.a("thousand")?(m=c(a[0]).match(/.{1,3}/g),m=c(m.join(c(this.a("thousand"))))):m=a[0];this.a("mark")&&1<a.length&&(r=this.a("mark")+a[1]);return this.a("to")(k+this.a("prefix")+n+m+r+this.a("postfix"))};r.prototype.w=
function(a){function c(a){return a.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g,"\\$&")}var d;if(null===a||void 0===a)return!1;a=this.a("from")(a);a=a.toString();d=a.replace(RegExp("^"+c(this.a("negativeBefore"))),"");a!==d?(a=d,d="-"):d="";a=a.replace(RegExp("^"+c(this.a("prefix"))),"");this.a("negative")&&(d="",a=a.replace(RegExp("^"+c(this.a("negative"))),"-"));a=a.replace(RegExp(c(this.a("postfix"))+"$"),"").replace(RegExp(c(this.a("thousand")),"g"),"").replace(this.a("mark"),".");a=this.a("decoder")(parseFloat(d+
a));return isNaN(a)?!1:a};k.prototype.K=function(a,h){this.method=h||"html";this.j=c(a.replace("-tooltip-","")||"<div/>")[0]};k.prototype.H=function(a){this.method="val";this.j=document.createElement("input");this.j.name=a;this.j.type="hidden"};k.prototype.G=function(a){function h(a,c){return[c?null:a,c?a:null]}var d=this;this.method="val";this.target=a.on("change",function(a){d.B.val(h(c(a.target).val(),d.t),{link:d,set:!0})})};k.prototype.p=function(a,h,d,k){this.g=d;this.update=!k;if("string"===
typeof a&&0===a.indexOf("-tooltip-"))this.K(a,h);else if("string"===typeof a&&0!==a.indexOf("-"))this.H(a);else if("function"===typeof a)this.target=!1,this.method=a;else{if(a instanceof c||c.zepto&&c.zepto.isZ(a)){if(!h){if(a.is("input, select, textarea")){this.G(a);return}h="html"}if("function"===typeof h||"string"===typeof h&&a[h]){this.method=h;this.target=a;return}}throw new RangeError("(Link) Invalid Link.");}};k.prototype.write=function(a,c,d,k){if(!this.update||!1!==k)if(this.u=a,this.F=a=
this.format(a),"function"===typeof this.method)this.method.call(this.target[0]||d[0],a,c,d);else this.target[this.method](a,c,d)};k.prototype.q=function(a){this.g=new r(c.extend({},a,this.g instanceof r?this.g.r:this.g))};k.prototype.J=function(a){this.B=a};k.prototype.I=function(a){this.t=a};k.prototype.format=function(a){return this.g.L(a)};k.prototype.A=function(a){return this.g.w(a)};k.prototype.p.prototype=k.prototype;c.Link=k})(window.jQuery||window.Zepto);/*

$.fn.noUiSlider - WTFPL - refreshless.com/nouislider/ */
(function(c){function m(e){return"number"===typeof e&&!isNaN(e)&&isFinite(e)}function r(e){return c.isArray(e)?e:[e]}function k(e,b){e.addClass(b);setTimeout(function(){e.removeClass(b)},300)}function u(e,b){return 100*b/(e[1]-e[0])}function A(e,b){if(b>=e.d.slice(-1)[0])return 100;for(var a=1,c,f,d;b>=e.d[a];)a++;c=e.d[a-1];f=e.d[a];d=e.c[a-1];c=[c,f];return d+u(c,0>c[0]?b+Math.abs(c[0]):b-c[0])/(100/(e.c[a]-d))}function a(e,b){if(100<=b)return e.d.slice(-1)[0];for(var a=1,c,f,d;b>=e.c[a];)a++;c=
e.d[a-1];f=e.d[a];d=e.c[a-1];c=[c,f];return 100/(e.c[a]-d)*(b-d)*(c[1]-c[0])/100+c[0]}function h(a,b){for(var c=1,g;(a.dir?100-b:b)>=a.c[c];)c++;if(a.m)return g=a.c[c-1],c=a.c[c],b-g>(c-g)/2?c:g;a.h[c-1]?(g=a.h[c-1],c=a.c[c-1]+Math.round((b-a.c[c-1])/g)*g):c=b;return c}function d(a,b){if(!m(b))throw Error("noUiSlider: 'step' is not numeric.");a.h[0]=b}function n(a,b){if("object"!==typeof b||c.isArray(b))throw Error("noUiSlider: 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
c.each(b,function(b,g){var d;"number"===typeof g&&(g=[g]);if(!c.isArray(g))throw Error("noUiSlider: 'range' contains invalid value.");d="min"===b?0:"max"===b?100:parseFloat(b);if(!m(d)||!m(g[0]))throw Error("noUiSlider: 'range' value isn't numeric.");a.c.push(d);a.d.push(g[0]);d?a.h.push(isNaN(g[1])?!1:g[1]):isNaN(g[1])||(a.h[0]=g[1])});c.each(a.h,function(b,c){if(!c)return!0;a.h[b]=u([a.d[b],a.d[b+1]],c)/(100/(a.c[b+1]-a.c[b]))})}function E(a,b){"number"===typeof b&&(b=[b]);if(!c.isArray(b)||!b.length||
2<b.length)throw Error("noUiSlider: 'start' option is incorrect.");a.b=b.length;a.start=b}function I(a,b){a.m=b;if("boolean"!==typeof b)throw Error("noUiSlider: 'snap' option must be a boolean.");}function J(a,b){if("lower"===b&&1===a.b)a.i=1;else if("upper"===b&&1===a.b)a.i=2;else if(!0===b&&2===a.b)a.i=3;else if(!1===b)a.i=0;else throw Error("noUiSlider: 'connect' option doesn't match handle count.");}function D(a,b){switch(b){case "horizontal":a.k=0;break;case "vertical":a.k=1;break;default:throw Error("noUiSlider: 'orientation' option is invalid.");
}}function K(a,b){if(2<a.c.length)throw Error("noUiSlider: 'margin' option is only supported on linear sliders.");a.margin=u(a.d,b);if(!m(b))throw Error("noUiSlider: 'margin' option must be numeric.");}function L(a,b){switch(b){case "ltr":a.dir=0;break;case "rtl":a.dir=1;a.i=[0,2,1,3][a.i];break;default:throw Error("noUiSlider: 'direction' option was not recognized.");}}function M(a,b){if("string"!==typeof b)throw Error("noUiSlider: 'behaviour' must be a string containing options.");var c=0<=b.indexOf("snap");
a.n={s:0<=b.indexOf("tap")||c,extend:0<=b.indexOf("extend"),v:0<=b.indexOf("drag"),fixed:0<=b.indexOf("fixed"),m:c}}function N(a,b,d){a.o=[b.lower,b.upper];a.g=b.format;c.each(a.o,function(a,e){if(!c.isArray(e))throw Error("noUiSlider: 'serialization."+(a?"upper":"lower")+"' must be an array.");c.each(e,function(){if(!(this instanceof c.Link))throw Error("noUiSlider: 'serialization."+(a?"upper":"lower")+"' can only contain Link instances.");this.I(a);this.J(d);this.q(b.format)})});a.dir&&1<a.b&&a.o.reverse()}
function O(a,b){var f={c:[],d:[],h:[!1],margin:0},g;g={step:{e:!1,f:d},start:{e:!0,f:E},connect:{e:!0,f:J},direction:{e:!0,f:L},range:{e:!0,f:n},snap:{e:!1,f:I},orientation:{e:!1,f:D},margin:{e:!1,f:K},behaviour:{e:!0,f:M},serialization:{e:!0,f:N}};a=c.extend({connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"},a);a.serialization=c.extend({lower:[],upper:[],format:{}},a.serialization);c.each(g,function(c,d){if(void 0===a[c]){if(d.e)throw Error("noUiSlider: '"+c+"' is required.");
return!0}d.f(f,a[c],b)});f.style=f.k?"top":"left";return f}function P(a,b){var d=c("<div><div/></div>").addClass(f[2]),g=["-lower","-upper"];a.dir&&g.reverse();d.children().addClass(f[3]+" "+f[3]+g[b]);return d}function Q(a,b){b.j&&(b=new c.Link({target:c(b.j).clone().appendTo(a),method:b.method,format:b.g},!0));return b}function R(a,b){var d,f=[];for(d=0;d<a.b;d++){var k=f,h=d,m=a.o[d],n=b[d].children(),r=a.g,s=void 0,v=[],s=new c.Link({},!0);s.q(r);v.push(s);for(s=0;s<m.length;s++)v.push(Q(n,m[s]));
k[h]=v}return f}function S(a,b,c){switch(a){case 1:b.addClass(f[7]);c[0].addClass(f[6]);break;case 3:c[1].addClass(f[6]);case 2:c[0].addClass(f[7]);case 0:b.addClass(f[6])}}function T(a,b){var c,d=[];for(c=0;c<a.b;c++)d.push(P(a,c).appendTo(b));return d}function U(a,b){b.addClass([f[0],f[8+a.dir],f[4+a.k]].join(" "));return c("<div/>").appendTo(b).addClass(f[1])}function V(d,b,m){function g(){return t[["width","height"][b.k]]()}function n(a){var b,c=[q.val()];for(b=0;b<a.length;b++)q.trigger(a[b],
c)}function u(d,p,e){var g=d[0]!==l[0][0]?1:0,H=x[0]+b.margin,k=x[1]-b.margin;e&&1<l.length&&(p=g?Math.max(p,H):Math.min(p,k));100>p&&(p=h(b,p));p=Math.max(Math.min(parseFloat(p.toFixed(7)),100),0);if(p===x[g])return 1===l.length?!1:p===H||p===k?0:!1;d.css(b.style,p+"%");d.is(":first-child")&&d.toggleClass(f[17],50<p);x[g]=p;b.dir&&(p=100-p);c(y[g]).each(function(){this.write(a(b,p),d.children(),q)});return!0}function B(a,b,c){c||k(q,f[14]);u(a,b,!1);n(["slide","set","change"])}function w(a,c,d,e){a=
a.replace(/\s/g,".nui ")+".nui";c.on(a,function(a){var c=q.attr("disabled");if(q.hasClass(f[14])||void 0!==c&&null!==c)return!1;a.preventDefault();var c=0===a.type.indexOf("touch"),p=0===a.type.indexOf("mouse"),F=0===a.type.indexOf("pointer"),g,k,l=a;0===a.type.indexOf("MSPointer")&&(F=!0);a.originalEvent&&(a=a.originalEvent);c&&(g=a.changedTouches[0].pageX,k=a.changedTouches[0].pageY);if(p||F)F||void 0!==window.pageXOffset||(window.pageXOffset=document.documentElement.scrollLeft,window.pageYOffset=
document.documentElement.scrollTop),g=a.clientX+window.pageXOffset,k=a.clientY+window.pageYOffset;l.C=[g,k];l.cursor=p;a=l;a.l=a.C[b.k];d(a,e)})}function C(a,c){var b=c.b||l,d,e=!1,e=100*(a.l-c.start)/g(),f=b[0][0]!==l[0][0]?1:0;var k=c.D;d=e+k[0];e+=k[1];1<b.length?(0>d&&(e+=Math.abs(d)),100<e&&(d-=e-100),d=[Math.max(Math.min(d,100),0),Math.max(Math.min(e,100),0)]):d=[d,e];e=u(b[0],d[f],1===b.length);1<b.length&&(e=u(b[1],d[f?0:1],!1)||e);e&&n(["slide"])}function s(a){c("."+f[15]).removeClass(f[15]);
a.cursor&&c("body").css("cursor","").off(".nui");G.off(".nui");q.removeClass(f[12]);n(["set","change"])}function v(a,b){1===b.b.length&&b.b[0].children().addClass(f[15]);a.stopPropagation();w(z.move,G,C,{start:a.l,b:b.b,D:[x[0],x[l.length-1]]});w(z.end,G,s,null);a.cursor&&(c("body").css("cursor",c(a.target).css("cursor")),1<l.length&&q.addClass(f[12]),c("body").on("selectstart.nui",!1))}function D(a){var d=a.l,e=0;a.stopPropagation();c.each(l,function(){e+=this.offset()[b.style]});e=d<e/2||1===l.length?
0:1;d-=t.offset()[b.style];d=100*d/g();B(l[e],d,b.n.m);b.n.m&&v(a,{b:[l[e]]})}function E(a){var c=(a=a.l<t.offset()[b.style])?0:100;a=a?0:l.length-1;B(l[a],c,!1)}var q=c(d),x=[-1,-1],t,y,l;if(q.hasClass(f[0]))throw Error("Slider was already initialized.");t=U(b,q);l=T(b,t);y=R(b,l);S(b.i,q,l);(function(a){var b;if(!a.fixed)for(b=0;b<l.length;b++)w(z.start,l[b].children(),v,{b:[l[b]]});a.s&&w(z.start,t,D,{b:l});a.extend&&(q.addClass(f[16]),a.s&&w(z.start,q,E,{b:l}));a.v&&(b=t.find("."+f[7]).addClass(f[10]),
a.fixed&&(b=b.add(t.children().not(b).children())),w(z.start,b,v,{b:l}))})(b.n);d.vSet=function(){var a=Array.prototype.slice.call(arguments,0),d,e,g,h,m,s,t=r(a[0]);"object"===typeof a[1]?(d=a[1].set,e=a[1].link,g=a[1].update,h=a[1].animate):!0===a[1]&&(d=!0);b.dir&&1<b.b&&t.reverse();h&&k(q,f[14]);a=1<l.length?3:1;1===t.length&&(a=1);for(m=0;m<a;m++)h=e||y[m%2][0],h=h.A(t[m%2]),!1!==h&&(h=A(b,h),b.dir&&(h=100-h),!0!==u(l[m%2],h,!0)&&c(y[m%2]).each(function(a){if(!a)return s=this.u,!0;this.write(s,
l[m%2].children(),q,g)}));!0===d&&n(["set"]);return this};d.vGet=function(){var a,c=[];for(a=0;a<b.b;a++)c[a]=y[a][0].F;return 1===c.length?c[0]:b.dir?c.reverse():c};d.destroy=function(){c.each(y,function(){c.each(this,function(){this.target&&this.target.off(".nui")})});c(this).off(".nui").removeClass(f.join(" ")).empty();return m};q.val(b.start)}function W(a){if(!this.length)throw Error("noUiSlider: Can't initialize slider on empty selection.");var b=O(a,this);return this.each(function(){V(this,
b,a)})}function X(a){return this.each(function(){var b=c(this).val(),d=this.destroy(),f=c.extend({},d,a);c(this).noUiSlider(f);d.start===f.start&&c(this).val(b)})}function B(){return this[0][arguments.length?"vSet":"vGet"].apply(this[0],arguments)}var G=c(document),C=c.fn.val,z=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",
end:"mouseup touchend"},f="noUi-target noUi-base noUi-origin noUi-handle noUi-horizontal noUi-vertical noUi-background noUi-connect noUi-ltr noUi-rtl noUi-dragable  noUi-state-drag  noUi-state-tap noUi-active noUi-extended noUi-stacking".split(" ");c.fn.val=function(){var a=arguments,b=c(this[0]);return arguments.length?this.each(function(){(c(this).hasClass(f[0])?B:C).apply(c(this),a)}):(b.hasClass(f[0])?B:C).call(b)};c.noUiSlider={Link:c.Link};c.fn.noUiSlider=function(a,b){return(b?X:W).call(this,
a)}})(window.jQuery||window.Zepto);

﻿/**
*  Ajax Autocomplete for jQuery, version 1.2.9
*  (c) 2013 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery"],d):d(jQuery)})(function(d){function g(a,b){var c=function(){},c={autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:g.formatResult,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:c,onSearchComplete:c,onSearchError:c,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,
lookupFilter:function(a,b,c){return-1!==a.value.toLowerCase().indexOf(c)},paramName:"query",transformResult:function(a){return"string"===typeof a?d.parseJSON(a):a}};this.element=a;this.el=d(a);this.suggestions=[];this.badQueries=[];this.selectedIndex=-1;this.currentValue=this.element.value;this.intervalId=0;this.cachedResponse={};this.onChange=this.onChangeInterval=null;this.isLocal=!1;this.suggestionsContainer=null;this.options=d.extend({},c,b);this.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"};
this.hint=null;this.hintValue="";this.selection=null;this.initialize();this.setOptions(b)}var k=function(){return{escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},createNode:function(a){var b=document.createElement("div");b.className=a;b.style.position="absolute";b.style.display="none";return b}}}();g.utils=k;d.Autocomplete=g;g.formatResult=function(a,b){var c="("+k.escapeRegExChars(b)+")";return a.value.replace(RegExp(c,"gi"),"<strong>$1</strong>")};g.prototype=
{killerFn:null,initialize:function(){var a=this,b="."+a.classes.suggestion,c=a.classes.selected,e=a.options,f;a.element.setAttribute("autocomplete","off");a.killerFn=function(b){0===d(b.target).closest("."+a.options.containerClass).length&&(a.killSuggestions(),a.disableKillerFn())};a.suggestionsContainer=g.utils.createNode(e.containerClass);f=d(a.suggestionsContainer);f.appendTo(e.appendTo);"auto"!==e.width&&f.width(e.width);f.on("mouseover.autocomplete",b,function(){a.activate(d(this).data("index"))});
f.on("mouseout.autocomplete",function(){a.selectedIndex=-1;f.children("."+c).removeClass(c)});f.on("click.autocomplete",b,function(){a.select(d(this).data("index"))});a.fixPosition();a.fixPositionCapture=function(){a.visible&&a.fixPosition()};d(window).on("resize.autocomplete",a.fixPositionCapture);a.el.on("keydown.autocomplete",function(b){a.onKeyPress(b)});a.el.on("keyup.autocomplete",function(b){a.onKeyUp(b)});a.el.on("blur.autocomplete",function(){a.onBlur()});a.el.on("focus.autocomplete",function(){a.onFocus()});
a.el.on("change.autocomplete",function(b){a.onKeyUp(b)})},onFocus:function(){this.fixPosition();if(this.options.minChars<=this.el.val().length)this.onValueChange()},onBlur:function(){this.enableKillerFn()},setOptions:function(a){var b=this.options;d.extend(b,a);if(this.isLocal=d.isArray(b.lookup))b.lookup=this.verifySuggestionsFormat(b.lookup);d(this.suggestionsContainer).css({"max-height":b.maxHeight+"px",width:b.width+"px","z-index":b.zIndex})},clearCache:function(){this.cachedResponse={};this.badQueries=
[]},clear:function(){this.clearCache();this.currentValue="";this.suggestions=[]},disable:function(){this.disabled=!0;this.currentRequest&&this.currentRequest.abort()},enable:function(){this.disabled=!1},fixPosition:function(){var a;"body"===this.options.appendTo&&(a=this.el.offset(),a={top:a.top+this.el.outerHeight()+"px",left:a.left+"px"},"auto"===this.options.width&&(a.width=this.el.outerWidth()-2+"px"),d(this.suggestionsContainer).css(a))},enableKillerFn:function(){d(document).on("click.autocomplete",
this.killerFn)},disableKillerFn:function(){d(document).off("click.autocomplete",this.killerFn)},killSuggestions:function(){var a=this;a.stopKillSuggestions();a.intervalId=window.setInterval(function(){a.hide();a.stopKillSuggestions()},50)},stopKillSuggestions:function(){window.clearInterval(this.intervalId)},isCursorAtEnd:function(){var a=this.el.val().length,b=this.element.selectionStart;return"number"===typeof b?b===a:document.selection?(b=document.selection.createRange(),b.moveStart("character",
-a),a===b.text.length):!0},onKeyPress:function(a){if(!this.disabled&&!this.visible&&40===a.which&&this.currentValue)this.suggest();else if(!this.disabled&&this.visible){switch(a.which){case 27:this.el.val(this.currentValue);this.hide();break;case 39:if(this.hint&&this.options.onHint&&this.isCursorAtEnd()){this.selectHint();break}return;case 9:if(this.hint&&this.options.onHint){this.selectHint();return}case 13:if(-1===this.selectedIndex){this.hide();return}this.select(this.selectedIndex);if(9===a.which&&
!1===this.options.tabDisabled)return;break;case 38:this.moveUp();break;case 40:this.moveDown();break;default:return}a.stopImmediatePropagation();a.preventDefault()}},onKeyUp:function(a){var b=this;if(!b.disabled){switch(a.which){case 38:case 40:return}clearInterval(b.onChangeInterval);if(b.currentValue!==b.el.val())if(b.findBestHint(),0<b.options.deferRequestBy)b.onChangeInterval=setInterval(function(){b.onValueChange()},b.options.deferRequestBy);else b.onValueChange()}},onValueChange:function(){var a=
this.options,b=this.el.val(),c=this.getQuery(b);this.selection&&(this.selection=null,(a.onInvalidateSelection||d.noop).call(this.element));clearInterval(this.onChangeInterval);this.currentValue=b;this.selectedIndex=-1;if(a.triggerSelectOnValidInput&&(b=this.findSuggestionIndex(c),-1!==b)){this.select(b);return}c.length<a.minChars?this.hide():this.getSuggestions(c)},findSuggestionIndex:function(a){var b=-1,c=a.toLowerCase();d.each(this.suggestions,function(a,d){if(d.value.toLowerCase()===c)return b=
a,!1});return b},getQuery:function(a){var b=this.options.delimiter;if(!b)return a;a=a.split(b);return d.trim(a[a.length-1])},getSuggestionsLocal:function(a){var b=this.options,c=a.toLowerCase(),e=b.lookupFilter,f=parseInt(b.lookupLimit,10),b={suggestions:d.grep(b.lookup,function(b){return e(b,a,c)})};f&&b.suggestions.length>f&&(b.suggestions=b.suggestions.slice(0,f));return b},getSuggestions:function(a){var b,c=this,e=c.options,f=e.serviceUrl,l,g;e.params[e.paramName]=a;l=e.ignoreParams?null:e.params;
c.isLocal?b=c.getSuggestionsLocal(a):(d.isFunction(f)&&(f=f.call(c.element,a)),g=f+"?"+d.param(l||{}),b=c.cachedResponse[g]);b&&d.isArray(b.suggestions)?(c.suggestions=b.suggestions,c.suggest()):c.isBadQuery(a)||!1===e.onSearchStart.call(c.element,e.params)||(c.currentRequest&&c.currentRequest.abort(),c.currentRequest=d.ajax({url:f,data:l,type:e.type,dataType:e.dataType}).done(function(b){c.currentRequest=null;c.processResponse(b,a,g);e.onSearchComplete.call(c.element,a)}).fail(function(b,d,f){e.onSearchError.call(c.element,
a,b,d,f)}))},isBadQuery:function(a){for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){this.visible=!1;this.selectedIndex=-1;d(this.suggestionsContainer).hide();this.signalHint(null)},suggest:function(){if(0===this.suggestions.length)this.hide();else{var a=this.options,b=a.formatResult,c=this.getQuery(this.currentValue),e=this.classes.suggestion,f=this.classes.selected,g=d(this.suggestionsContainer),k=a.beforeRender,m="",h;if(a.triggerSelectOnValidInput&&
(h=this.findSuggestionIndex(c),-1!==h)){this.select(h);return}d.each(this.suggestions,function(a,d){m+='<div class="'+e+'" data-index="'+a+'">'+b(d,c)+"</div>"});"auto"===a.width&&(h=this.el.outerWidth()-2,g.width(0<h?h:300));g.html(m);a.autoSelectFirst&&(this.selectedIndex=0,g.children().first().addClass(f));d.isFunction(k)&&k.call(this.element,g);g.show();this.visible=!0;this.findBestHint()}},findBestHint:function(){var a=this.el.val().toLowerCase(),b=null;a&&(d.each(this.suggestions,function(c,
d){var f=0===d.value.toLowerCase().indexOf(a);f&&(b=d);return!f}),this.signalHint(b))},signalHint:function(a){var b="";a&&(b=this.currentValue+a.value.substr(this.currentValue.length));this.hintValue!==b&&(this.hintValue=b,this.hint=a,(this.options.onHint||d.noop)(b))},verifySuggestionsFormat:function(a){return a.length&&"string"===typeof a[0]?d.map(a,function(a){return{value:a,data:null}}):a},processResponse:function(a,b,c){var d=this.options;a=d.transformResult(a,b);a.suggestions=this.verifySuggestionsFormat(a.suggestions);
d.noCache||(this.cachedResponse[c]=a,0===a.suggestions.length&&this.badQueries.push(c));b===this.getQuery(this.currentValue)&&(this.suggestions=a.suggestions,this.suggest())},activate:function(a){var b=this.classes.selected,c=d(this.suggestionsContainer),e=c.children();c.children("."+b).removeClass(b);this.selectedIndex=a;return-1!==this.selectedIndex&&e.length>this.selectedIndex?(a=e.get(this.selectedIndex),d(a).addClass(b),a):null},selectHint:function(){var a=d.inArray(this.hint,this.suggestions);
this.select(a)},select:function(a){this.hide();this.onSelect(a)},moveUp:function(){-1!==this.selectedIndex&&(0===this.selectedIndex?(d(this.suggestionsContainer).children().first().removeClass(this.classes.selected),this.selectedIndex=-1,this.el.val(this.currentValue),this.findBestHint()):this.adjustScroll(this.selectedIndex-1))},moveDown:function(){this.selectedIndex!==this.suggestions.length-1&&this.adjustScroll(this.selectedIndex+1)},adjustScroll:function(a){var b=this.activate(a),c,e;b&&(b=b.offsetTop,
c=d(this.suggestionsContainer).scrollTop(),e=c+this.options.maxHeight-25,b<c?d(this.suggestionsContainer).scrollTop(b):b>e&&d(this.suggestionsContainer).scrollTop(b-this.options.maxHeight+25),this.el.val(this.getValue(this.suggestions[a].value)),this.signalHint(null))},onSelect:function(a){var b=this.options.onSelect;a=this.suggestions[a];this.currentValue=this.getValue(a.value);this.el.val(this.currentValue);this.signalHint(null);this.suggestions=[];this.selection=a;d.isFunction(b)&&b.call(this.element,
a)},getValue:function(a){var b=this.options.delimiter,c;if(!b)return a;c=this.currentValue;b=c.split(b);return 1===b.length?a:c.substr(0,c.length-b[b.length-1].length)+a},dispose:function(){this.el.off(".autocomplete").removeData("autocomplete");this.disableKillerFn();d(window).off("resize.autocomplete",this.fixPositionCapture);d(this.suggestionsContainer).remove()}};d.fn.autocomplete=function(a,b){return 0===arguments.length?this.first().data("autocomplete"):this.each(function(){var c=d(this),e=
c.data("autocomplete");if("string"===typeof a){if(e&&"function"===typeof e[a])e[a](b)}else e&&e.dispose&&e.dispose(),e=new g(this,a),c.data("autocomplete",e)})}});
/*! Nestoria Slider - v1.0.9 - 2015-01-23
* http://lokku.github.io/jquery-nstslider/
* Copyright (c) 2015 Lokku Ltd.; Licensed MIT */
(function($) {
    /*
     * These are used for user interaction. This plugin assumes the user can
     * interact with one control at a time. For this reason it's safe to keep
     * these global.
     */
    var _$current_slider;
    var _is_mousedown;
    var _original_mousex;

    // both for keyboard and mouse interaction
    var _is_left_grip;

    // for keyboard interaction only
    var _before_keydown_value;
    var _before_keydown_pixel;
    var _before_keyup_value;
    var _before_keyup_pixel;

    var _methods = {
         'getSliderValuesAtPositionPx' : function (leftPx, rightPx) {
              var $this = this,
                  leftPxInValue, rightPxInValue,
                  pixel_to_value_mapping_func = $this.data('pixel_to_value_mapping');

              if (typeof pixel_to_value_mapping_func !== 'undefined') {
                  leftPxInValue = pixel_to_value_mapping_func(leftPx);
                  rightPxInValue = pixel_to_value_mapping_func(rightPx);
              }
              else {
                  var w = _methods.getSliderWidthPx.call($this) - $this.data('left_grip_width');
                  leftPxInValue = _methods.inverse_rangemap_0_to_n.call($this, leftPx, w);
                  rightPxInValue = _methods.inverse_rangemap_0_to_n.call($this, rightPx, w);
              }

              return [leftPxInValue, rightPxInValue];
         },
         /*
          *  Move slider grips to the specified position. This method is
          *  designed to run within the user interaction lifecycle. Only call
          *  this method if the user has interacted with the sliders
          *  actually...
          *
          *  First the desired positions are validated. If values are ok, the
          *  move is performed, otherwise it's just ignored because weird
          *  values have been passed.
          */
         'validateAndMoveGripsToPx' : function (nextLeftGripPositionPx, nextRightGripPositionPx) {
             var $this = this;

             var draggableAreaLengthPx = _methods.getSliderWidthPx.call($this) - $this.data('left_grip_width');

             //
             // Validate & Move
             //
             if (nextRightGripPositionPx <= draggableAreaLengthPx &&
                 nextLeftGripPositionPx >= 0 &&
                 nextLeftGripPositionPx <= draggableAreaLengthPx &&
                 (!$this.data('has_right_grip') || nextLeftGripPositionPx <= nextRightGripPositionPx) ) {

                 var prevMin = $this.data('cur_min'),
                     prevMax = $this.data('cur_max');

                 // note: also stores new cur_min, cur_max
                 _methods.set_position_from_px.call($this, nextLeftGripPositionPx, nextRightGripPositionPx);

                 // set the style of the grips according to the highlighted range
                 _methods.refresh_grips_style.call($this);

                 _methods.notify_changed_implicit.call($this, 'drag_move', prevMin, prevMax);
             }

             return $this;
         },
         /*
          * Update aria attributes of the slider based on the current
          * configuration of the slider.
          */
         'updateAriaAttributes' : function () {
            var $this = this,
                settings = $this.data('settings'),
                $leftGrip = $this.find(settings.left_grip_selector);

            //
            // double grips sliders is probably the most common case...
            // ... also, the values to be set in the two cases are quite
            // different.
            //
            if ($this.data('has_right_grip')) {

                var $rightGrip = $this.find(settings.right_grip_selector);

                //
                // grips are mutually binding their max/min values when 2 grips
                // are present. For example, we should imagine the left grip as
                // being constrained between [ rangeMin, valueMax ]
                //
                $leftGrip
                    .attr('aria-valuemin', $this.data('range_min'))
                    .attr('aria-valuenow', methods.get_current_min_value.call($this))
                    .attr('aria-valuemax', methods.get_current_max_value.call($this));

                $rightGrip
                    .attr('aria-valuemin', methods.get_current_min_value.call($this))
                    .attr('aria-valuenow', methods.get_current_max_value.call($this))
                    .attr('aria-valuemax', $this.data('range_max'));
            }
            else {
                $leftGrip
                    .attr('aria-valuemin', $this.data('range_min'))
                    .attr('aria-valuenow', methods.get_current_min_value.call($this))
                    .attr('aria-valuemax', $this.data('range_max'));
            }

            return $this;
         },
         /*
          * Return the width in pixels of the slider bar, i.e., the maximum
          * number of pixels the user can slide the slider over. This function
          * should always be used internally to obtain the width of the
          * slider in pixels!
          */
         'getSliderWidthPx' : function () {
            var $this = this;

            //
            // .width() can actually return a floating point number! see
            // jquery docs!
            //
            return Math.round($this.width());
         },
         /*
          * Return the position of a given grip in pixel in integer format.
          * Use this method internally if you are literally going to get the
          * left CSS property from the provided grip.
          *
          * This method assumes a certain grip exists and will have the left
          * property.
          *
          * This is generally safe for the left grip, because it is basically
          * guaranteed to exist. But for the right grip you should be really
          * using getRightGripPositionPx instead.
          *
          */
         'getGripPositionPx' : function ($grip) {
            return parseInt($grip.css('left').replace('px',''), 10);
         },
         /*
          * Just the same as getGripPositionPx, but there is no need to provide
          * the $slider.
          */
         'getLeftGripPositionPx' : function () {
            var $this = this,
                settings = $this.data('settings'),
                $leftGrip = $this.find(settings.left_grip_selector);

            return _methods.getGripPositionPx.call($this, $leftGrip);
         },
         /*
          * Return the position of the right Grip if it exists or return the
          * current position if not. Even if the right grip doesn't exist, its
          * position should be defined, as it determines the position of the
          * bar.
          */
         'getRightGripPositionPx' : function () {
            var $this = this,
                settings = $this.data('settings');

                if ($this.data('has_right_grip')) {
                    return _methods.getGripPositionPx.call($this,
                        $this.find(settings.right_grip_selector)
                    );
                }

                // default
                var sliderWidthPx = _methods.getSliderWidthPx.call($this) - $this.data('left_grip_width');
                return _methods.rangemap_0_to_n.call($this, $this.data('cur_max'), sliderWidthPx);
         },
         /*
          * Return the width of the left grip.  Like getSliderWidthPx, this
          * method deals with .width() returning a floating point number. All
          * the code in this plugin assumes an integer here!
          */
         'getLeftGripWidth' : function () {
            var $this = this,
                settings = $this.data('settings'),
                $leftGrip = $this.find(settings.left_grip_selector);

            return Math.round($leftGrip.width());
         },
         /*
          * Return the width of the right grip. The calling method should
          * check that the right grip actually exists. This method assumes it
          * does.
          */
         'getRightGripWidth' : function () {
            var $this = this,
                settings = $this.data('settings'),
                $rightGrip = $this.find(settings.right_grip_selector);

            return Math.round($rightGrip.width());
         },
         /*
          * Perform binary search to find searchElement into a generic array.
          * It uses a customized compareFunc to perform the comparison between
          * two elements of the array and a getElement function to pick the
          * element from the array (e.g., in case we want to pick a field of an
          * array of objects)
          */
         'binarySearch' : function(array, searchElement, getElementFunc, compareFunc) {
              var minIndex = 0;
              var maxIndex = array.length - 1;
              var currentIndex;
              var currentElement;

              while (minIndex <= maxIndex) {
                  currentIndex = (minIndex + maxIndex) / 2 | 0;
                  currentElement = getElementFunc(array, currentIndex);

                  // lt = -1 (searchElement < currentElement)
                  // eq = 0
                  // gt = 1  (searchElement > currentElement)
                  var lt_eq_gt = compareFunc(searchElement, array, currentIndex);

                  if (lt_eq_gt > 0) {
                      minIndex = currentIndex + 1;
                  }
                  else if (lt_eq_gt < 0) {
                      maxIndex = currentIndex - 1;
                  }
                  else {
                      return currentIndex;
                  }
              }

              return -1;
        },
        /*
         * Returns true if this slider has limit, false otherwise. There can be
         * an upper limit and a lower limit for the sliders.
         * The lower/upper limits are values that are out of the slider range,
         * but that can be selected by the user when he moves a slider all the
         * way down the minimum and up to the maximum value.
         */
        'haveLimits' : function () {
            var $this = this,
                lowerLimit = $this.data('lower-limit'),
                upperLimit = $this.data('upper-limit'),
                haveLimits = false;

            if (typeof lowerLimit !== 'undefined' &&
                typeof upperLimit !== 'undefined') {

                haveLimits = true;
            }

            return haveLimits;
        },
        /*
         * This method is called whenever the style of the grips needs to get
         * updated.
         */
        'refresh_grips_style' : function () {
            var $this = this,
            settings = $this.data('settings');

            // Skip refreshing grips style if no hihglight is specified in
            // construction
            if (typeof settings.highlight === 'undefined') {
                return;
            }

            var highlightedRangeMin = $this.data('highlightedRangeMin');

            if (typeof highlightedRangeMin === 'undefined') {
                return;
            }

            var $leftGrip = $this.find(settings.left_grip_selector),
                $rightGrip = $this.find(settings.right_grip_selector),
                highlightedRangeMax = $this.data('highlightedRangeMax'),
                curMin = $this.data('cur_min'),
                curMax = $this.data('cur_max'),
                highlightGripClass = settings.highlight.grip_class;

            // curmin is within the highlighted range
            if (curMin < highlightedRangeMin || curMin > highlightedRangeMax) {
                // de-highlight grip
                $leftGrip.removeClass(highlightGripClass);
            }
            else {
                // highlight grip
                $leftGrip.addClass(highlightGripClass);
            }

            // time to highlight right grip
            if (curMax < highlightedRangeMin || curMax > highlightedRangeMax) {
                // de-highlight grip
                $rightGrip.removeClass(highlightGripClass);
            }
            else {
                // highlight grip
                $rightGrip.addClass(highlightGripClass);
            }
        },
        /*
         *  Set left and right handle at the right position on the screen (pixels)
         *  given the desired position in currency.
         *
         *  e.g., _methods.set_position_from_val.call($this, 10000, 100000);
         *
         *        may set the left handle at 100px and the right handle at
         *        200px;
         *
         */
        'set_position_from_val' : function (cur_min, cur_max) {
            var $this = this;
            //
            // We need to understand how much pixels cur_min and cur_max
            // correspond.
            //
            var range_min = $this.data('range_min'),
                range_max = $this.data('range_max');

            //
            // (safety) constrain the cur_min or the cur_max value between the
            // max/min ranges allowed for this slider.
            //
            if (cur_min < range_min) { cur_min = range_min; }
            if (cur_min > range_max) { cur_min = range_max; }

            if ($this.data('has_right_grip')) {
                if (cur_max > range_max) { cur_max = range_max; }
                if (cur_max < range_min) { cur_max = range_min; }
            }
            else {
                cur_max = $this.data('cur_max');
            }

            var leftPx = methods.value_to_px.call($this, cur_min),
                rightPx = methods.value_to_px.call($this, cur_max);

            _methods.set_handles_at_px.call($this, leftPx, rightPx);

            // save this position
            $this.data('cur_min', cur_min);

            if ($this.data('has_right_grip')) {
                $this.data('cur_max', cur_max);
            }

            return $this;
        },
        /*
         * Set the position of the handles at the specified pixel points (taking
         * the whole slider width as a maximum point).
         */
        'set_position_from_px' : function (leftPx, rightPx) {
            var $this = this;

            //
            // we need to find a value from the given value in pixels
            //

            // now set the position as requested...
            _methods.set_handles_at_px.call($this, leftPx, rightPx);

            var valueLeftRight = _methods.getSliderValuesAtPositionPx.call($this, leftPx, rightPx),
                leftPxInValue = valueLeftRight[0],
                rightPxInValue = valueLeftRight[1];

            // ... and save the one we've found.
            $this.data('cur_min', leftPxInValue);

            if ($this.data('has_right_grip')) {
                $this.data('cur_max', rightPxInValue);
            }

            return $this;
        },
        'set_handles_at_px' : function (leftPx, rightPx) {
            var $this = this;
            var settings = $this.data('settings');

            var left_grip_selector = settings.left_grip_selector,
                right_grip_selector = settings.right_grip_selector,
                value_bar_selector = settings.value_bar_selector;

            var handleWidth = $this.data('left_grip_width'),
                innerBarDeltaPx = handleWidth/2;

            // set here
            if ($this.data('has_right_grip')) {
                $this.find(value_bar_selector)
                    .css('left', (leftPx + innerBarDeltaPx) + 'px')
                    .css('width', (rightPx - leftPx + innerBarDeltaPx) + 'px');

                $this.find(left_grip_selector).css('left', leftPx + 'px');
            }
            else {
                if (leftPx < rightPx) {
                    $this.find(value_bar_selector)
                        .css('left', (leftPx + innerBarDeltaPx) + 'px')
                        .css('width', (rightPx - leftPx + innerBarDeltaPx) + 'px');
                }
                else {
                    $this.find(value_bar_selector)
                        .css('left', (rightPx + innerBarDeltaPx) + 'px')
                        .css('width', (leftPx - rightPx + innerBarDeltaPx) + 'px');
                }

                $this.find(left_grip_selector).css('left', leftPx + 'px');
            }

            $this.find(right_grip_selector).css('left', rightPx + 'px');

            return $this;

        },
        'drag_start_func_touch' : function (e, settings, $left_grip, $right_grip, is_touch) {
            var $this = this,
                original_event = e.originalEvent,
                touch = original_event.touches[0];

            // for touch devices we need to make sure we allow the user to scroll
            // if the click was too far from the slider.
            var curY = touch.pageY,
                curX = touch.pageX;

            // is the user allowed to grab if he/she tapped too far from the
            // slider?
            var ydelta = Math.abs($this.offset().top - curY),
                slider_left = $this.offset().left,
                xldelta = slider_left - curX,
                xrdelta = curX - (slider_left + $this.width());

            if (ydelta > settings.touch_tolerance_value_bar_y  ||
                xldelta > settings.touch_tolerance_value_bar_x ||
                xrdelta > settings.touch_tolerance_value_bar_x ) {

                return;
            }

            original_event.preventDefault();
            _original_mousex = touch.pageX;

            // true : is touch event
            _methods.drag_start_func.call($this, touch, settings, $left_grip,
                $right_grip, is_touch);
        },
        'drag_start_func' : function (e, settings, $leftGrip, $rightGrip,
                is_touch) {

            var $this = this;

            $this.find(settings.left_grip_selector +
                ',' + settings.value_bar_selector +
                ',' + settings.right_grip_selector).removeClass(

                settings.animating_css_class
            );

            if (!methods.is_enabled.call($this)) { return; }

            //
            // if the user used the finger, he/she is allowed to touch anywhere.
            // but if the mouse is used, we want to enable the logic only for
            // left grip, right grip, bar/panel elements.
            //
            var $target = $(e.target);

            // ... if the highlight range was enabled we should check wether
            // the user has tapped or clicked the highlight panel...
            var targetIsPanelSelector = false;
            if (typeof settings.highlight === 'object') {
                targetIsPanelSelector = $target.is(settings.highlight.panel_selector);
            }

            if (is_touch === false &&
                !$target.is(settings.left_grip_selector) &&
                !$target.is(settings.right_grip_selector) &&
                !$target.is(settings.value_bar_selector) &&
                !targetIsPanelSelector &&
                !$target.is($this) ) {

                return;
            }

            // - - - -
            // the following logic finds the nearest slider grip and starts
            // dragging it.
            // - - - -

            _$current_slider = $this;

            var leftGripPositionPx = _methods.getGripPositionPx.call($this, $leftGrip),
                sliderWidthPx = _methods.getSliderWidthPx.call($this) - $this.data('left_grip_width'),
                lleft = $leftGrip.offset().left,
                rleft, // don't compute this yet (maybe not needed if 1 grip)
                curX,
                ldist,
                rdist,
                ldelta,
                rdelta;

            var rightGripPositionPx = _methods.getRightGripPositionPx.call($this);

            //
            // We need to do as if the click happened a bit more on the left.
            // That's because we will be setting the left CSS property at the
            // point where the click happened, meaning the slider grip will be
            // spanning to the right.
            //
            curX = Math.round(e.pageX) - ($this.data('left_grip_width') / 2);

            // calculate deltas from left and right grip
            ldist = Math.abs(lleft - curX);
            ldelta = curX - lleft;

            if ($this.data('has_right_grip')) {
                rleft = $rightGrip.offset().left;
                rdist = Math.abs(rleft - curX);
                rdelta = curX - rleft;
            }
            else {
                // no right grip... we make the right slider
                // unreachable!
                rdist = ldist * 2;
                rdelta = ldelta * 2;
            }

            // notify the beginning of a dragging...
            settings.user_drag_start_callback.call($this, e);

            if (ldist === rdist) {

                if (curX < lleft) {
                    // move the left grip
                    leftGripPositionPx += ldelta;
                    _is_left_grip = true;
                }
                else {
                    // move the right grip
                    rightGripPositionPx += rdelta;
                    _is_left_grip = false;
                }
            }
            else if (ldist < rdist) {

                // move the left grip
                leftGripPositionPx += ldelta;
                _is_left_grip = true;
            }
            else {
                // move the right grip
                rightGripPositionPx += rdelta;
                _is_left_grip = false;
            }

            //
            // Limit the right grip to the maximum allowed - as the user can
            // actually click beyond it!
            //
            // ...............
            //               ^-- maximum clickable
            //              ^--- maximum allowed (i.e., sliderWidth - gripWidth)
            //
            // if user clicks at sliderWidth, we will be setting CSS left of
            // right handle having:
            //
            // ...............R  <-- out of bound :-(
            //               ^-- maximum clickable
            //              ^--- maximum allowed (i.e., sliderWidth - gripWidth)
            //
            // but we want:
            //
            // ..............R <-- within bound :-)
            //               ^-- maximum clickable
            //              ^--- maximum allowed (i.e., sliderWidth - gripWidth)
            //
            // Hence we limit.
            //

            if ($this.data('has_right_grip')) {
                // here we check the right handle only, because it should
                // always be the one that gets moved if the user clicks towards
                // the right extremity!
                if (rightGripPositionPx > sliderWidthPx) {
                    rightGripPositionPx = sliderWidthPx;
                }
            }
            else {
                // in case we have one handle only, we will be moving the left
                // handle instead of the right one... hence we need to perform
                // this check on the left handle as well!
                if (leftGripPositionPx > sliderWidthPx) {
                    leftGripPositionPx = sliderWidthPx;
                }
            }

            // this can happen because the user can click on the left handle!
            // (which is out of the left boundary)
            if (leftGripPositionPx < 0) {
                leftGripPositionPx = 0;
            }

            _is_mousedown = true;

            var prev_min = $this.data('cur_min'),
                prev_max = $this.data('cur_max');

            _methods.set_position_from_px.call($this, leftGripPositionPx, rightGripPositionPx);

            // set the style of the grips according to the highlighted range
            _methods.refresh_grips_style.call($this);

            _methods.notify_changed_implicit.call($this, 'drag_start', prev_min, prev_max);

            e.preventDefault();
        },
        'drag_move_func_touch' : function (e) {
            if (_is_mousedown === true) {
                var original_event = e.originalEvent;
                original_event.preventDefault();
                var touch = original_event.touches[0];
                _methods.drag_move_func(touch);
            }
        },
        'drag_move_func' : function (e) {
            if (_is_mousedown) {
                // our slider element.
                var $this = _$current_slider,
                    settings = $this.data('settings'),
                    sliderWidthPx = _methods.getSliderWidthPx.call($this) - $this.data('left_grip_width'),
                    leftGripPositionPx = _methods.getLeftGripPositionPx.call($this);

                var rightGripPositionPx = _methods.getRightGripPositionPx.call($this);

                //
                // Here we are going to set the position in pixels based on
                // where the user has moved the mouse cursor. We obtain the
                // position of the mouse cursors via e.pageX, which returns the
                // absolute position of the mouse on the screen.
                //
                var absoluteMousePosition = Math.round(e.pageX);

                //
                // Compute the delta (in px) for the slider movement. It is the
                // difference between the new position of the cursor and the
                // old position of the cursor.
                //
                // Based on the delta we decide how to move the dragged handle.
                //
                // 0 : no movement
                // -delta: move left
                // +delta: move right
                //
                var delta = absoluteMousePosition - _original_mousex;

                //
                // User cannot drag the handles outside the slider bar area.
                //

                // 1) calculate the area within which the movement is
                //    considered to be valid.
                var half_a_grip_width = $this.data('left_grip_width') / 2,
                    drag_area_start = $this.offset().left + $this.data('left_grip_width') - half_a_grip_width,
                    drag_area_end = drag_area_start + sliderWidthPx;

                if (settings.crossable_handles === false && $this.data('has_right_grip')) {
                    // if handles are not crossable, we should define the left
                    // and the right boundary of the movement.
                    if (_is_left_grip) {
                        drag_area_end = drag_area_start + rightGripPositionPx;
                    }
                    else {
                        drag_area_start = drag_area_start + leftGripPositionPx;
                    }
                }

                // 2) by default we accept to move the slider according to both
                // the deltas (i.e., left or right)
                var ignore_positive_delta = 0,
                    ignore_negative_delta = 0;

                // 3) but if the user is moving the mouse beyond the draggable
                // area, we should only accept a movement in one direction.
                if (absoluteMousePosition < drag_area_start) {
                    ignore_positive_delta = 1;
                    ignore_negative_delta = 0;
                }
                if (absoluteMousePosition > drag_area_end) {
                    ignore_negative_delta = 1;
                    ignore_positive_delta = 0;
                }

                //
                // Here we decide whether to invert the grip being moved.
                //
                if (settings.crossable_handles === true &&
                    $this.data('has_right_grip')) {

                    if (_is_left_grip) {

                        // ... if we are using the left grip
                        if (rightGripPositionPx <= sliderWidthPx) {

                            // the inversion logic should only be active when the
                            // slider is not at the extremity
                            if (leftGripPositionPx + delta > rightGripPositionPx) {

                                _is_left_grip = false;

                                // TWEAK: keep the position of the left handle fixed
                                // at the one of the right handle as the user may
                                // have moved the mouse too fast, thus giving
                                // leftGripPositionPx > rightGripPositionPx.
                                //
                                // Basically here we avoid:
                                //
                                // Initial State:
                                //
                                // ------L-R------  (leftGripPositionPx < rightGripPositionPx)
                                //
                                // Fast Mouse Move:
                                //
                                // --------R--L---  (leftGripPositionPx + delta)
                                // --------R-L----  (leftGripPositionPx [ still > rightGripPositionPx! ])
                                //
                                // _is_left_grip becomes false (this code)
                                //
                                leftGripPositionPx = rightGripPositionPx;
                            }
                        }
                    }
                    else {
                        // ... converse logic
                        if (leftGripPositionPx >= 0) {
                            if (rightGripPositionPx + delta < leftGripPositionPx) {

                                // current_max = current_min;
                                _is_left_grip = true;

                                rightGripPositionPx = leftGripPositionPx;
                            }
                        }
                    }
                }

                //
                // Decide the position of the new handles.
                //
                var nextLeftGripPositionPx = leftGripPositionPx,
                    nextRightGripPositionPx = rightGripPositionPx;

                if ((delta > 0 && !ignore_positive_delta) ||
                    (delta < 0 && !ignore_negative_delta)) {

                    if (_is_left_grip) {
                        nextLeftGripPositionPx += delta;
                    }
                    else {
                        nextRightGripPositionPx += delta;
                    }
                }

                _methods.validateAndMoveGripsToPx.call($this, nextLeftGripPositionPx, nextRightGripPositionPx);

                // prepare for next movement
                _original_mousex = absoluteMousePosition;

                e.preventDefault();
            }
        },
        'drag_end_func_touch' : function (e) {
            var original_event = e.originalEvent;
            original_event.preventDefault();
            var touch = original_event.touches[0];
            _methods.drag_end_func(touch);
        },
        'drag_end_func' : function (/* e */) {
            var $this = _$current_slider;
            if (typeof $this !== 'undefined') {
                _is_mousedown = false;
                _original_mousex = undefined;

                _methods.notify_mouse_up_implicit.call($this, _is_left_grip);

                // require another click on a handler before going into here again!
                _$current_slider = undefined;

                // put back the class once user finished dragging
                var settings = $this.data('settings');
                $this.find(settings.left_grip_selector +
                    ',' + settings.value_bar_selector +
                    ',' + settings.right_grip_selector).addClass(

                    settings.animating_css_class
                );
            }
        },
        'get_rounding_for_value' : function (v) {
            var $this = this;
            var rounding = $this.data('rounding');
            var rounding_ranges = $this.data('rounding_ranges');

            if (typeof rounding_ranges === 'object') {

                // then it means the rounding is not fixed, we should find the
                // value in the roundings_array.
                var roundingIdx  = _methods.binarySearch.call($this, rounding_ranges, v,
                    // pick an element from the array
                    function (array, index) { return array[index].range; },

                    // compare search element with current element
                    // < 0 search < current
                    // 0   equals
                    // > 0 search > current
                    function (search, array, currentIdx) {

                        // first check if this is our element

                        // this is our element if the search value is:
                        if (search < array[currentIdx].range) {

                            // we can have a match or search in the left half
                            if (currentIdx > 0) {
                                if (search >= array[currentIdx - 1].range) {
                                    return 0;
                                }
                                else {
                                    // go left
                                    return -1;
                                }
                            }
                            else {
                                return 0;
                            }
                        }
                        else {
                            // we must search in the next half
                            return 1;
                        }
                    }
                );

                rounding = 1;
                if (roundingIdx > -1) {
                    rounding = parseInt(rounding_ranges[roundingIdx].value, 10);
                }
                else {
                    var lastIdx = rounding_ranges.length - 1;
                    if (v >= rounding_ranges[lastIdx].range) {
                        rounding = rounding_ranges[lastIdx].value;
                    }
                }
            }
            return rounding;
        },
        /*
         * Calls the user mouseup callback with the right parameters. Relies on
         * $data('beforestart_min/max') in addition to the isLeftGrip parameter.
         *
         * NOTE: saves the new beforestart_min and begforestart_max as well.
         */
        'notify_mouse_up_implicit' : function(isLeftGrip) {
            var $this = this,
                current_min_value = methods.get_current_min_value.call($this),
                current_max_value = methods.get_current_max_value.call($this),
                didValuesChange = false;

            // check if we changed.
            if (($this.data('beforestart_min') !== current_min_value) ||
                ($this.data('beforestart_max') !== current_max_value)
            ) {
                // values have changed!
                didValuesChange = true;

                // save the new values
                $this.data('beforestart_min', current_min_value);
                $this.data('beforestart_max', current_max_value);
            }


            var settings = $this.data('settings');

            settings.user_mouseup_callback.call($this,
                methods.get_current_min_value.call($this),
                methods.get_current_max_value.call($this),
                isLeftGrip,
                didValuesChange
            );

            return $this;
        },
        /*
         * NOTE: this method may take the previous min/max value as input.
         *       if no arguments are provided the method blindly notifies.
         */
        'notify_changed_implicit' : function (cause, prevMin, prevMax) {
            var $this = this;

            var force = false;
            if (cause === 'init' || cause === 'refresh') {
                force = true;
            }

            var curMin = methods.get_current_min_value.call($this),
                curMax = methods.get_current_max_value.call($this);

            if (!force) {
                prevMin = methods.round_value_according_to_rounding.call($this, prevMin);
                prevMax = methods.round_value_according_to_rounding.call($this, prevMax);
            }

            if (force || curMin !== prevMin || curMax !== prevMax) {

                _methods.notify_changed_explicit.call($this, cause, prevMin, prevMax, curMin, curMax);

                force = 1;
            }

            return force;
        },
        'notify_changed_explicit' : function (cause, prevMin, prevMax, curMin, curMax) {
            var $this = this,
                settings = $this.data('settings');

            // maybe update aria attributes for accessibility
            if ($this.data('aria_enabled')) {
                _methods.updateAriaAttributes.call($this);
            }

            settings.value_changed_callback.call($this, cause, curMin, curMax, prevMin, prevMax);

            return $this;
        },
        'validate_params' : function (settings) {
            var $this = this;
            var min_value = $this.data('range_min'),
                max_value = $this.data('range_max'),
                cur_min = $this.data('cur_min'),
                lower_limit = $this.data('lower-limit'),
                upper_limit = $this.data('upper-limit');

            var have_limits = _methods.haveLimits.call($this);

            if (typeof min_value === 'undefined') {
                $.error("the data-range_min attribute was not defined");
            }
            if (typeof max_value === 'undefined') {
                $.error("the data-range_max attribute was not defined");
            }
            if (typeof cur_min === 'undefined') {
                $.error("the data-cur_min attribute must be defined");
            }
            if (min_value > max_value) {
                $.error("Invalid input parameter. must be min < max");
            }

            if (have_limits && lower_limit > upper_limit) {
                $.error('Invalid data-lower-limit or data-upper-limit');
            }
            if ($this.find(settings.left_grip_selector).length === 0) {
                $.error("Cannot find element pointed by left_grip_selector: " + settings.left_grip_selector);
            }
            /*
             * NOTE: only validate right grip selector if it is not
             * undefined otherwise just assume that if it isn't
             * found isn't there. This is because we initialize the
             * slider at once and let the markup decide if the
             * slider is there or not.
             */
            if (typeof settings.right_grip_selector !== 'undefined') {
                if ($this.find(settings.right_grip_selector).length === 0) {
                    $.error("Cannot find element pointed by right_grip_selector: " + settings.right_grip_selector);
                }
            }

            // same thing for the value bar selector
            if (typeof settings.value_bar_selector !== 'undefined') {
                if ($this.find(settings.value_bar_selector).length === 0) {
                    $.error("Cannot find element pointed by value_bar_selector" + settings.value_bar_selector);
                }
            }
        },
        /*
         * Maps a value between [minRange -- maxRange] into [0 -- n].
         * The target range will be an integer number.
         */
        'rangemap_0_to_n' : function (val, n) {
            var $this = this;
            var rangeMin = $this.data('range_min');
            var rangeMax = $this.data('range_max');

            if (val <= rangeMin) { return 0; }
            if (val >= rangeMax) { return n; }

            return Math.floor((n * val - n * rangeMin) / (rangeMax - rangeMin));
        },
        /*
         * Maps a value between [0 -- max] back into [minRange -- maxRange].
         * The target range can be a floating point number.
         */
        'inverse_rangemap_0_to_n' : function (val, max) {
            var $this = this;
            var rangeMin = $this.data('range_min');
            var rangeMax = $this.data('range_max');

            if (val <= 0)   { return rangeMin; }
            if (val >= max) { return rangeMax; }

            //
            // To do this we first map 0 -- max relatively withing [minRange
            // and maxRange], that is between [0 and (maxRange-minRange)].
            //
            var relativeMapping = (rangeMax - rangeMin) * val / max;

            // ... then we bring this to the actual value by adding rangeMin.
            return relativeMapping + rangeMin;
        }

    };
    var methods = {
        'teardown' : function () {
            var $this = this;

            // remove all data set with .data()
            $this.removeData();

            // unbind the document as well
            $(document)
                .unbind('mousemove.nstSlider')
                .unbind('mouseup.nstSlider');

            // unbind events bound to the container element
            $this.parent()
                .unbind('mousedown.nstSlider')
                .unbind('touchstart.nstSlider')
                .unbind('touchmove.nstSlider')
                .unbind('touchend.nstSlider');

            // unbind events bound to the current element
            $this.unbind('keydown.nstSlider')
                .unbind('keyup.nstSlider');

            return $this;
        },
        'init' : function(options) {
            var settings = $.extend({
                'animating_css_class' : 'nst-animating',
                // this is the distance from the value bar by which we should
                // grab the left or the right handler.
                'touch_tolerance_value_bar_y': 30,  // px
                'touch_tolerance_value_bar_x': 15,  // px
                // where is the left grip?
                'left_grip_selector': '.nst-slider-grip-left',
                // where is the right grip?
                // undefined = (only left grip bar)
                'right_grip_selector': undefined,

                // Specify highlight like this if you want to highlight a range
                // in the slider.
                //
                // 'highlight' : {
                //     'grip_class' : '.nsti-slider-hi',
                //     'panel_selector' : '.nst-slider-highlight-panel'
                // },
                'highlight' : undefined,

                // Lets you specify the increment rounding for the slider handles
                // for when the user moves them.
                // It can be a string, indicating a fixed increment, or an object
                // indicating the increment based on the value to be rounded.
                //
                // This can be specified in the following form: {
                //    '1' : '100',
                //    '10' : '1000',  /* rounding = 10 for values in [100-999] */
                //    '50' : '10000',
                // }
                'rounding': undefined,

                // if the bar is not wanted
                'value_bar_selector': undefined,

                // Allow handles to cross each other while one of them is being
                // dragged. This option is ignored if just one handle is used.
                'crossable_handles': true,

                'value_changed_callback': function(/*cause, vmin, vmax*/) { return; },
                'user_mouseup_callback' : function(/*vmin, vmax, left_grip_moved*/) { return; },
                'user_drag_start_callback' : function () { return; }
            }, options);

            //
            // we need to unbind events attached to the document,
            // as if we replace html elements and re-initialize, we
            // don't want to double-bind events!
            //
            var $document = $(document);

            // make sure only one event is bound to the document
            $document.unbind('mouseup.nstSlider');
            $document.unbind('mousemove.nstSlider');

            $document.bind('mousemove.nstSlider', _methods.drag_move_func);
            $document.bind('mouseup.nstSlider',   _methods.drag_end_func);

            return this.each(function() {
                //
                // $this is like:
                //
                // <div class="outer-slider" data-... data-...>
                //     <div class="bar"></div>
                //     <div class="leftGrip"></div>
                //     <div class="rightGrip"></div>
                // </div>
                //
                // It is supposed to be enclosed in a container
                //
                var $this = $(this),
                    $container = $this.parent();

                // enable: the user is able to move the grips of this slider.
                $this.data('enabled', true);

                // fix some values first
                var rangeMin = $this.data('range_min'),
                    rangeMax = $this.data('range_max'),
                    valueMin = $this.data('cur_min'),
                    valueMax = $this.data('cur_max');

                // assume 0 if valueMax is not specified
                if (typeof valueMax === 'undefined') {
                    valueMax = valueMin;
                }

                if (rangeMin === '') { rangeMin = 0; }
                if (rangeMax === '') { rangeMax = 0; }
                if (valueMin === '') { valueMin = 0; }
                if (valueMax === '') { valueMax = 0; }

                $this.data('range_min', rangeMin);
                $this.data('range_max', rangeMax);
                $this.data('cur_min', valueMin);
                $this.data('cur_max', valueMax);

                // halt on error
                _methods.validate_params.call($this, settings);

                $this.data('settings', settings);

                // override rounding from markup if defined in configuration
                if (typeof settings.rounding !== 'undefined') {
                    methods.set_rounding.call($this, settings.rounding);
                }
                else if (typeof $this.data('rounding') !== 'undefined') {
                    methods.set_rounding.call($this, $this.data('rounding'));
                }
                else {
                    methods.set_rounding.call($this, 1);
                }

                var left_grip = $this.find(settings.left_grip_selector)[0],
                    $left_grip = $(left_grip),
                    $right_grip = $($this.find(settings.right_grip_selector)[0]);

                // make sure left grip can be tabbed if the user hasn't
                // defined their own tab index
                if (typeof $left_grip.attr('tabindex') === 'undefined') {
                    $left_grip.attr('tabindex', 0);
                }

                // no right handler means single handler
                var has_right_grip = false;
                if ($this.find(settings.right_grip_selector).length > 0) {
                    has_right_grip = true;

                    // make sure right grip can be tabbed if the user hasn't
                    // defined their own tab index
                    if (typeof $right_grip.attr('tabindex') === 'undefined') {
                        $right_grip.attr('tabindex', 0);
                    }
                }
                $this.data('has_right_grip', has_right_grip);

                // enable aria attributes update?
                if ($this.data('aria_enabled') === true) {
                    // setup aria role attributes on each grip
                    $left_grip
                        .attr('role', 'slider')
                        .attr('aria-disabled', 'false');

                    if (has_right_grip) {
                        $right_grip
                            .attr('role', 'slider')
                            .attr('aria-disabled', 'false');
                    }
                }

                //
                // deal with keypresses here
                //
                $this.bind('keyup.nstSlider', function (e) {
                    if ($this.data('enabled')) {
                        switch (e.which) {
                            case 37:   // left
                            case 38:   // up
                            case 39:   // right
                            case 40:   // down

                            if (_before_keydown_value === _before_keyup_value) {

                                // we should search for the next value change...
                                // ... in which direction? depends on whe

                                var searchUntil = _methods.getSliderWidthPx.call($this),
                                    val,
                                    i,
                                    setAtPixel;

                                if (_before_keydown_pixel - _before_keyup_pixel < 0) {
                                    // the grip was moved towards the right

                                    for (i=_before_keyup_pixel; i<=searchUntil; i++) {
                                        // if the value at pixel i is different than
                                        // the current value then we are good to go.
                                        //
                                        val = methods.round_value_according_to_rounding.call($this,
                                            _methods.getSliderValuesAtPositionPx.call($this, i, i)[1]
                                        );
                                        if (val !== _before_keyup_value) {
                                            setAtPixel = i;
                                            break;
                                        }
                                    }
                                }
                                else {
                                    // the grip was moved towards the left

                                    for (i=_before_keyup_pixel; i>=0; i--) {

                                        // if the value at pixel i is different than
                                        // the current value then we are good to go.
                                        //
                                        val = methods.round_value_according_to_rounding.call($this,
                                            _methods.getSliderValuesAtPositionPx.call($this, i, i)[1]
                                        );
                                        if (val !== _before_keyup_value) {
                                           setAtPixel = i;
                                           break;
                                        }
                                    }
                                }


                                // we need to set the slider at this position
                                if (_is_left_grip) {
                                    _methods.validateAndMoveGripsToPx.call($this, setAtPixel, _methods.getRightGripPositionPx.call($this));
                                }
                                else {
                                    _methods.validateAndMoveGripsToPx.call($this, _methods.getLeftGripPositionPx.call($this), setAtPixel);
                                }

                                //
                                // call the mouseup callback when the key is up!
                                //
                                _methods.notify_mouse_up_implicit.call($this, _is_left_grip);
                            }
                        }

                        // clear values
                        _before_keydown_value = undefined;
                        _before_keydown_pixel = undefined;
                        _before_keyup_value = undefined;
                        _before_keyup_pixel = undefined;
                    }
                });
                $this.bind('keydown.nstSlider', function (evt) {
                    if ($this.data('enabled')) {

                        var moveHandleBasedOnKeysFunc = function ($grip, e) {

                            var nextLeft = _methods.getLeftGripPositionPx.call($this),
                                nextRight = _methods.getRightGripPositionPx.call($this);

                            if (typeof _before_keydown_value === 'undefined') {
                                _before_keydown_pixel = _is_left_grip ? nextLeft : nextRight;

                                _before_keydown_value = _is_left_grip ? methods.get_current_min_value.call($this) : methods.get_current_max_value.call($this);
                            }

                            switch (e.which) {
                                case 37:   // left
                                case 40:   // down
                                    if (_is_left_grip) { nextLeft--; } else { nextRight--; }
                                    e.preventDefault();
                                    break;

                                case 38:   // up
                                case 39:   // right
                                    if (_is_left_grip) { nextLeft++; } else { nextRight++; }

                                    e.preventDefault();
                                    break;
                            }

                            _before_keyup_pixel = _is_left_grip ?  nextLeft : nextRight;

                            // may write into cur_min, cur_max data...
                            _methods.validateAndMoveGripsToPx.call($this, nextLeft,
                                nextRight);

                            _before_keyup_value = _is_left_grip ? methods.get_current_min_value.call($this) : methods.get_current_max_value.call($this);
                        };

                        // default
                        if (has_right_grip && $this.find(':focus').is($right_grip)) {
                            _is_left_grip = false;
                            moveHandleBasedOnKeysFunc.call($this, $right_grip, evt);
                        }
                        else {
                            _is_left_grip = true;
                            moveHandleBasedOnKeysFunc.call($this, $left_grip, evt);
                        }
                    }
                });

                // determine size of grips
                var left_grip_width = _methods.getLeftGripWidth.call($this),
                    right_grip_width = has_right_grip ?
                        _methods.getRightGripWidth.call($this) : left_grip_width;

                $this.data('left_grip_width', left_grip_width);
                $this.data('right_grip_width', right_grip_width);

                $this.data('value_bar_selector', settings.value_bar_selector);

                // this will set the range to the right extreme in such a case.
                if (rangeMin === rangeMax || valueMin === valueMax) {
                    methods.set_range.call($this, rangeMin, rangeMax);
                }
                else {

                    // set the initial position
                    _methods.set_position_from_val.call($this,
                        $this.data('cur_min'), $this.data('cur_max'));
                }

                _methods.notify_changed_implicit.call($this, 'init');

                // handle mouse movement
                $this.data('beforestart_min', methods.get_current_min_value.call($this));
                $this.data('beforestart_max', methods.get_current_max_value.call($this));

                // pass a closure, so that 'this' will be the current slider bar,
                // not the container.
                $this.bind('mousedown.nstSlider', function (e) {
                    _methods.drag_start_func.call($this, e, settings, $left_grip, $right_grip, false);
                });

                $container.bind('touchstart.nstSlider', function (e) {
                    _methods.drag_start_func_touch.call($this, e, settings, $left_grip, $right_grip, true);
                });
                $container.bind('touchend.nstSlider',  function (e) {
                    _methods.drag_end_func_touch.call($this, e);
                });
                $container.bind('touchmove.nstSlider', function (e) {
                    _methods.drag_move_func_touch.call($this, e);
                });

                // if the data-histogram attribute exists, then use this
                // histogram to set the step distribution
                var step_histogram = $this.data('histogram');
                if (typeof step_histogram !== 'undefined') {
                    methods.set_step_histogram.call($this, step_histogram);
                }
            }); // -- each slider
        },
        'get_range_min' : function () {
            var $this = this;
            return $this.data('range_min');
        },
        'get_range_max' : function () {
            var $this = this;
            return $this.data('range_max');
        },
        'get_current_min_value' : function () {
            var $this = $(this);

            var rangeMin = methods.get_range_min.call($this),
                rangeMax = methods.get_range_max.call($this);

            var currentMin = $this.data('cur_min');

            var min;
            if (rangeMin >= currentMin) {
                min = rangeMin;
            }
            else {
                min = methods.round_value_according_to_rounding.call($this, currentMin);
            }

            if (_methods.haveLimits.call($this)) {
                if (min <= rangeMin) {
                    return $this.data('lower-limit');
                }
                else if (min >= rangeMax) {
                    return $this.data('upper-limit');
                }
            }
            else {
                if (min <= rangeMin) {
                    return rangeMin;
                }
                else if (min >= rangeMax) {
                    return rangeMax;
                }
            }

            return min;
        },
        'get_current_max_value' : function () {
            var $this = $(this);

            var rangeMin = methods.get_range_min.call($this),
                rangeMax = methods.get_range_max.call($this);

            var currentMax = $this.data('cur_max');

            var max;
            if (rangeMax <= currentMax) {
                max = rangeMax;
            }
            else {
                max = methods.round_value_according_to_rounding.call($this, currentMax);
            }


            if (_methods.haveLimits.call($this)) {
                if (max >= rangeMax) {
                    return $this.data('upper-limit');
                }
                else if (max <= rangeMin) {
                    return $this.data('lower-limit');
                }
            }
            else {
                if (max >= rangeMax) {
                    return rangeMax;
                }
                else if (max <= rangeMin) {
                    return rangeMin;
                }
            }

            return max;
        },
        'is_handle_to_left_extreme' : function () {
            var $this = this;
            if (_methods.haveLimits.call($this)) {
                return $this.data('lower-limit') === methods.get_current_min_value.call($this);
            }
            else {
                return methods.get_range_min.call($this) === methods.get_current_min_value.call($this);
            }
        },
        'is_handle_to_right_extreme' : function () {
            var $this = this;
            if (_methods.haveLimits.call($this)) {
                return $this.data('upper-limit') === methods.get_current_max_value.call($this);
            }
            else {
                return methods.get_range_max.call($this) === methods.get_current_max_value.call($this);
            }
        },
        // just call set_position on the current values
        'refresh' : function () {
            var $this = this;

            // re-set the slider step if specified
            var lastStepHistogram = $this.data('last_step_histogram');
            if (typeof lastStepHistogram !== 'undefined') {
                methods.set_step_histogram.call($this, lastStepHistogram);
            }

            // re-center given values
            _methods.set_position_from_val.call($this,
                methods.get_current_min_value.call($this),
                methods.get_current_max_value.call($this)
            );

            // re-highlight the range
            var highlightRangeMin = $this.data('highlightedRangeMin');
            if (typeof highlightRangeMin === 'number') {
                // a highlight range is present, we must update it
                var highlightRangeMax = $this.data('highlightedRangeMax');
                methods.highlight_range.call($this, highlightRangeMin, highlightRangeMax);
            }

            _methods.notify_changed_implicit.call($this, 'refresh');
            return $this;
        },
        'disable' : function () {
            var $this = this,
                settings = $this.data('settings');

            $this.data('enabled', false)
                .find(settings.left_grip_selector)
                    .attr('aria-disabled', 'true')
                .end()
                .find(settings.right_grip_selector)
                    .attr('aria-disabled', 'true');

            return $this;
        },
        'enable' : function() {
            var $this = this,
                settings = $this.data('settings');

            $this.data('enabled', true)
                .find(settings.left_grip_selector)
                    .attr('aria-disabled', 'false')
                .end()
                .find(settings.right_grip_selector)
                    .attr('aria-disabled', 'false');

            return $this;
        },
        'is_enabled' : function() {
            var $this = this;
            return $this.data('enabled');
        },
        /*
         * This one is the public method, called externally.
         * It sets the position and notifies in fact.
         */
        'set_position' : function(min, max) {
            var $this = this;

            var prev_min = $this.data('cur_min'),
                prev_max = $this.data('cur_max');

            if (min > max) {
                _methods.set_position_from_val.call($this, max, min);
            }
            else {
                _methods.set_position_from_val.call($this, min, max);
            }

            // set the style of the grips according to the highlighted range
            _methods.refresh_grips_style.call($this);

            _methods.notify_changed_implicit.call($this, 'set_position', prev_min, prev_max);

            // this is for the future, therefore "before the next
            // interaction starts"
            $this.data('beforestart_min', min);
            $this.data('beforestart_max', max);
        },
        /*
         * This tells the slider to increment its step non linearly over the
         * current range, based on the histogram on where results are.
         *
         * the input parameter 'histogram' identifies an empirical probability
         * density function (PDF).
         *
         */
        'set_step_histogram' : function (histogram) {
            var $this = this;

            $this.data('last_step_histogram', histogram);

            if (typeof histogram === 'undefined') {
                $.error('got an undefined histogram in set_step_histogram');
                _methods.unset_step_histogram.call($this);
            }

            var sliderWidthPx = _methods.getSliderWidthPx.call($this) - $this.data('left_grip_width'),
                nbuckets = histogram.length;

            if (sliderWidthPx <= 0) {
                // that means the slider is not visible...
                return;
            }

            //
            // we need to transform this pdf into a cdf, and use it to obtain
            // two mappings: pixel to value and value to pixel.
            //
            // 1) normalize the pdf to sum to sliderWidthPx first
            var i;
            var histogram_sum = 0;
            for (i=0; i<nbuckets; i++) {
                histogram_sum += histogram[i];
            }

            //
            // if the sum of the histogram is 0 it means that all is 0 in the
            // histogram! (i.e, flat histogram). In this case we already know
            // what's going to be the answer...
            //
            if (histogram_sum === 0) {
                // ... and the answer is: a linear scale between min_range and
                // max range!
                methods.unset_step_histogram.call($this);

                return $this;
            }

            // coefficient for normalization
            var coeff = parseFloat(histogram_sum)/sliderWidthPx;

            // go normalize the histogram using this coefficient!
            for (i=0; i<nbuckets; i++) {
                histogram[i] = histogram[i]/coeff;
            }

            // 2) now that the histogram is normalized, extract the cumulative
            // distribution function (CDF). This is an always increasing function
            // that ranges between 0 and sliderWidthPx;
            //
            // We also build the inverted cdf, just the cdf read the other way
            // around.
            //
            var cdf = [ histogram[0] ];  // points to pixels
            for (i=1; i<nbuckets; i++) {
                var cdf_x = cdf[i-1] + histogram[i];
                cdf.push(cdf_x);
            }
            cdf.push(sliderWidthPx);


            // the first value here is always min_range as the cdf is supposed
            // to start from 0 (also first pixel = min_range)
            var pixel_to_value_lookup = [ $this.data('range_min') ];

            var last_filled = 0; // we've already filled 0

            // now stretch over the rest of the cdf
            var last_price_for_cdf_bucket = pixel_to_value_lookup[0];

            var cdf_bucket_count = 0;
            while (last_filled <= sliderWidthPx) { // do until all pixels are filled

                // get next item from cdf
                var fill_up_to_px = parseInt(cdf.shift(), 10);
                var price_for_cdf_bucket =
                    _methods.inverse_rangemap_0_to_n.call($this, cdf_bucket_count+1, nbuckets+1);

                cdf_bucket_count++;

                // how many pixels do we have to fill
                var fill_tot = fill_up_to_px - last_filled;

                // interpolate and fill
                var diff = price_for_cdf_bucket - last_price_for_cdf_bucket;
                for (i = last_filled; i < fill_up_to_px; i++) {
                    var next_price_for_cdf_bucket =
                        last_price_for_cdf_bucket + (diff * (i-last_filled+1) / fill_tot);

                    pixel_to_value_lookup.push(next_price_for_cdf_bucket);

                    last_filled++;

                    last_price_for_cdf_bucket = next_price_for_cdf_bucket;
                }

                if (last_filled === sliderWidthPx) {
                    break;
                }
            }
            pixel_to_value_lookup[pixel_to_value_lookup.length-1] = $this.data('range_max');

            // 3) build lookup functions to extract pixels and values from the
            // cdf and the inverted cdf.
            //
            var pixel_to_value_mapping = function (pixel) {
                return pixel_to_value_lookup[parseInt(pixel, 10)];
            };

            var value_to_pixel_mapping = function (value) {
                // binary search into the array of pixels...
                var pixel = _methods.binarySearch.call($this, pixel_to_value_lookup, value,
                    function(a, i) { return a[i]; },  // access a value in the array

                    // Must return:
                    //
                    // s: element to search for
                    // a: array we are looking in
                    // i: position of the element we are looking for
                    //
                    // -1 (s < a[i])
                    // 0  found (= a[i])
                    // 1  (s > a[i])
                    function (s, a, i) {
                        if (s === a[i])          { return 0; }
                        if (s < a[i] && i === 0) { return 0; }
                        if (a[i-1] <= s && s < a[i]) { return 0; }
                        if (s > a[i])           { return 1;  }
                        if (s <= a[i-1])        { return -1; }
                        $.error('cannot compare s: ' + s + ' with a[' + i + ']. a is: ' + a.join(','));
                    }
                );

                return pixel;
            };

            //
            // these two functions will be stored and then used internally to
            // decide what value to display given a certain pixel, and what
            // pixel to put the slider on given a certain value.
            //
            $this.data('pixel_to_value_mapping', pixel_to_value_mapping);
            $this.data('value_to_pixel_mapping', value_to_pixel_mapping);

            return $this;
        },
        /*
         * Remove the pixel-to-value and the value-to-pixel mappings from the
         * slider so that the slider can follow a linear step over the current
         * range again.
         */
        'unset_step_histogram' : function () {
            var $this = this;

            $this.removeData('pixel_to_value_mapping');
            $this.removeData('value_to_pixel_mapping');
            $this.removeData('last_step_histogram');

            return $this;
        },
        'set_range' : function (rangeMin, rangeMax) {
            var $this = this;

            // get the current values
            var oldMin = methods.get_current_min_value.call($this),
                oldMax = methods.get_current_max_value.call($this);

            // set range
            $this.data('range_min', rangeMin);
            $this.data('range_max', rangeMax);

            // try to re-center old values in the new range.
            // NOTE: this may set different values!
            _methods.set_position_from_val.call($this, oldMin, oldMax);

            /*
             * Re-highlight ranges if any are defined.
             */
            // var highlightRangeMin = $this.data('highlightedRangeMin');
            // if (typeof rangeMin === 'number') {
            //     // a highlight range is present, we must update it
            //     var highlightRangeMax = $this.data('highlightedRangeMax');
            //     methods.highlight_range.call($this, highlightRangeMin, highlightRangeMax);
            // }

            // pass old min and max in the notify_changed_implicit method, so that we
            // notify if we need to
            _methods.notify_changed_implicit.call($this, 'set_range', oldMin, oldMax);

            return $this;
        },
        /*
         * This method highlights the range of the slider apart from the
         * position of the slider grips.
         * To work well, the slider must have background color set to
         * transparent in the CSS or not set.
         */
        'highlight_range' : function(rangeMin, rangeMax) {
            var $this = this;
            var settings = $this.data('settings');

            if (typeof settings.highlight === "undefined") {
                $.error('you cannot call highlight_range if you haven\' specified the "highlight" parameter in construction!');
            }

            // avoid empty string
            if (!rangeMin) { rangeMin = 0; }
            if (!rangeMax) { rangeMax = 0; }

            // we need to map rangeMin and rangeMax into pixels.
            var leftPx = methods.value_to_px.call($this, rangeMin),
                rightPx = methods.value_to_px.call($this, rangeMax),
                barWidth = rightPx - leftPx + $this.data('left_grip_width');

            // set position
            var $highlightPanel = $this.find(
                settings.highlight.panel_selector
            );

            $highlightPanel.css('left', leftPx + "px");
            $highlightPanel.css('width', barWidth + "px");

            // keep the latest highlighted range, because if set_range is called
            // we must be able to update the highlighting.
            $this.data('highlightedRangeMin', rangeMin);
            $this.data('highlightedRangeMax', rangeMax);

            // now decide wether the handler should be highlight
            _methods.refresh_grips_style.call($this);

            return $this;
        },
        /*
         * Sets the increment rounding for the slider, see input parameters section
         * for more information.
         */
        'set_rounding' : function (rounding) {
            var $this = this;

            if (typeof rounding === 'string' && rounding.indexOf('{') > -1) {
                // probably a json string
                rounding = $.parseJSON(rounding);
            }

            $this.data('rounding', rounding);

            // build an array of roundings and sort it by value to facilitate search
            // when the range is going to be set.
            var roundings_array = [];
            if (typeof rounding === 'object') {
                // initial object has the form { value : range }
                var rounding_value;
                for (rounding_value in rounding) { // skip_javascript_test
                    if (rounding.hasOwnProperty(rounding_value)) {
                        var rounding_range = rounding[rounding_value];
                        roundings_array.push({
                            'range' : rounding_range,
                            'value' : rounding_value
                        });
                    }
                }

                // now sort it by rounding range
                roundings_array.sort(function (a, b) { return a.range - b.range; });

                $this.data('rounding_ranges', roundings_array);
            }
            else {
                $this.removeData('rounding_ranges');
            }

            return $this;
        },
        'get_rounding' : function () {
            var $this = this;
            return $this.data('rounding');
        },
        /*
         * This method rounds a given value to the closest integer defined
         * according to the rounding. Examples:
         * rounding: 10 v: 12.3    --> 10
         * rounding: 1 v: 12.3     --> 12
         * rounding: 10 v: 12.6    --> 13
         */
        'round_value_according_to_rounding' : function(v) {
            var $this = this;
            var rounding = _methods.get_rounding_for_value.call($this, v);

            if (rounding > 0) {
                // We bring ourselves in a space of unitary roundings. You can
                // imagine now that sliders range between a certain minimum and
                // maximum, and we always increase/decrease of one.
                var increment = v / rounding;

                // This is the proposed value.
                var increment_int = parseInt(increment, 10);

                // delta is a positive number between 0 and 1 that tells us how
                // close is the slider to integer + 1 (i.e., the next rounding).
                // 0 means the grip is exactly on integer
                // 1 means the grip is on integer + 1.
                var delta = increment - increment_int;

                // now use delta to modify or not the current value.
                if (delta > 0.5) {
                    increment_int++;
                }

                // we now move the
                var rounded = increment_int * rounding;

                return rounded;
            }
            else {
                $.error('rounding must be > 0, got ' + rounding + ' instead');
            }
            return v;
        },
        /*
         * Utility function. Given a value within the range of the slider,
         * converts the value in pixels. If a value_to_pixel_mapping function
         * is defined it will be used, otherwise a linear mapping is used for
         * the conversion.
         */
        'value_to_px' : function (value) {
            var $this = this,
                value_to_pixel_mapping_func = $this.data('value_to_pixel_mapping');

            // try using non-linear mapping if it's there...
            if (typeof value_to_pixel_mapping_func !== 'undefined') {
                return value_to_pixel_mapping_func(value);
            }

            // ... use linear mapping otherwise
            var w = _methods.getSliderWidthPx.call($this) - $this.data('left_grip_width');
            return _methods.rangemap_0_to_n.call($this, value, w);
        },
    };

    var __name__ = 'nstSlider';

    $.fn[__name__] = function(method) {
        /*
         * Just a router for method calls
         */
        if (methods[method]) {
            if (this.data('initialized') === true) {
                // call a method
                return methods[method].apply(this,
                    Array.prototype.slice.call(arguments, 1)
                );
            }
            else {
                throw new Error('method ' + method + ' called on an uninitialized instance of ' + __name__);
            }
        }
        else if (typeof method === 'object' || !method) {
            // call init, user passed the settings as parameters
            this.data('initialized', true);
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Cannot call method ' + method);
        }
    };
})(jQuery);
/*! DatePicker v6.3.6 MIT/GPL2 @freqdec */
var datePickerController = (function datePickerController() {

    "use strict";

    var debug               = false,
        isOpera             = Object.prototype.toString.call(window.opera) === "[object Opera]",
        describedBy         = "",
        languageInfo        = parseUILanguage(),
        nbsp                = String.fromCharCode(160),
        datePickers         = {},
        weeksInYearCache    = {},
        bespokeTitles       = {},
        uniqueId            = 0,
        finalOpacity        = 100,
        cssAnimations       = null,
        transitionEnd       = "",
        buttonTabIndex      = true,
        mouseWheel          = true,
        deriveLocale        = false,
        localeImport        = false,
        nodrag              = false,
        langFileFolder      = false,
        returnLocaleDate    = false,
        kbEvent             = false,
        dateParseFallback   = true,
        cellFormat          = "%d %F %Y",
        titleFormat         = "%F %d, %Y",
        statusFormat        = "",
        formatParts         = isOpera ? ["%j"] : ["%j", " %F %Y"],
        dPartsRegExp        = /%([d|j])/,
        mPartsRegExp        = /%([M|F|m|n])/,
        yPartsRegExp        = /%[y|Y]/,
        noSelectionRegExp   = /date-picker-unused|out-of-range|day-disabled|not-selectable/,
        formatTestRegExp    = /%([d|j|M|F|m|n|Y|y])/,
        formatSplitRegExp   = /%([d|D|l|j|N|w|S|W|M|F|m|n|t|Y|y])/,
        rangeRegExp         = /^((\d\d\d\d)(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01]))$/,
        wcDateRegExp        = /^(((\d\d\d\d)|(\*\*\*\*))((0[1-9]|1[012])|(\*\*))(0[1-9]|[12][0-9]|3[01]))$/,
        wsCharClass         = "\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029",
        // https://gist.github.com/padolsey/527683
        oldIE               = (function(){var undef,v = 3,div = document.createElement('div'),all = div.getElementsByTagName('i');while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',all[0]); return v > 4 ? v : undef;}());

    (function() {
        var scriptFiles = document.getElementsByTagName('script'),
            json        = parseJSON(String(scriptFiles[scriptFiles.length - 1].innerHTML).replace(/[\n\r\s\t]+/g, " ").replace(/^\s+/, "").replace(/\s+$/, ""));

        if(typeof json === "object" && !("err" in json)) {
            affectJSON(json);
        };

        if(deriveLocale && typeof(fdLocale) != "object") {
            var head   = document.getElementsByTagName("head")[0] || document.documentElement,
                loc    = langFileFolder ? langFileFolder : scriptFiles[scriptFiles.length - 1].src.substr(0, scriptFiles[scriptFiles.length - 1].src.lastIndexOf("/")) + "/lang/",
                script,
                i;

            for(i = 0; i < languageInfo.length; i++) {
                script          = document.createElement('script');
                script.type     = "text/javascript";
                script.src      = loc + languageInfo[i] + ".js";
                script.charSet  = "utf-8";

                if(oldIE && oldIE < 8) {
                    var bases = document.getElementsByTagName('base');
                    if (bases.length && bases[0].childNodes.length) {
                            bases[0].appendChild(script);
                    } else {
                            head.appendChild(script);
                    };
                    bases = null;
                } else {
                    head.appendChild(script);
                };
            };

            script = null;
        } else {
            returnLocaleDate = true;
        };
    })();

    function removeChildNodes(elem) {
        while(elem.firstChild) {
            elem.removeChild(elem.firstChild);
        };
    };

    function addClass(e, c) {
        if(new RegExp("(^|[" + wsCharClass + "])" + c + "([" + wsCharClass + "]|$)").test(e.className)) {
            return;
        };
        e.className += ( e.className ? " " : "" ) + c;
    };

    function removeClass(e, c) {
        e.className = !c ? "" : e.className.replace(new RegExp("(^|[" + wsCharClass + "])" + c + "([" + wsCharClass + "]|$)"), " ").replace(new RegExp("/^[" + wsCharClass + "][" + wsCharClass + "]*/"), '').replace(new RegExp("/[" + wsCharClass + "][" + wsCharClass + "]*$/"), '');
    };

    // Attempts to parse the current language from the HTML element. Defaults to "en" if none given
    function parseUILanguage() {
        var languageTag = document.getElementsByTagName('html')[0].getAttribute('lang') || document.getElementsByTagName('html')[0].getAttribute('xml:lang');
        languageTag = !languageTag ? "en" : languageTag.toLowerCase();
        return languageTag.search(/^([a-z]{2,3})-([a-z]{2})$/) != -1 ? [languageTag.match(/^([a-z]{2,3})-([a-z]{2})$/)[1], languageTag] : [languageTag];
    };

    // Cross browser split from http://blog.stevenlevithan.com/archives/cross-browser-split
    var cbSplit = function(str, separator, limit) {
        // if `separator` is not a regex, use the native `split`
        if(Object.prototype.toString.call(separator) !== "[object RegExp]") {
                return cbSplit._nativeSplit.call(str, separator, limit);
        };

        var output        = [],
            lastLastIndex = 0,
            flags         = "",
            separator     = RegExp(separator.source, "g"),
            separator2, match, lastIndex, lastLength;

        str = str + "";

        if(!cbSplit._compliantExecNpcg) {
            separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags);
        };

        /* behavior for `limit`: if it's...
        - `undefined`: no limit.
        - `NaN` or zero: return an empty array.
        - a positive number: use `Math.floor(limit)`.
        - a negative number: no limit.
        - other: type-convert, then use the above rules. */
        if(limit === undefined || +limit < 0) {
            limit = Infinity;
        } else {
            limit = Math.floor(+limit);
            if(!limit) {
                return [];
            };
        };

        while(match = separator.exec(str)) {
            lastIndex = match.index + match[0].length; // `separator.lastIndex` is not reliable cross-browser

            if (lastIndex > lastLastIndex) {
                output.push(str.slice(lastLastIndex, match.index));

                // fix browsers whose `exec` methods don't consistently return `undefined` for nonparticipating capturing groups
                if(!cbSplit._compliantExecNpcg && match.length > 1) {
                    match[0].replace(separator2, function () {
                        for (var i = 1; i < arguments.length - 2; i++) {
                            if(arguments[i] === undefined) {
                                match[i] = undefined;
                            };
                        };
                    });
                };

                if(match.length > 1 && match.index < str.length) {
                    Array.prototype.push.apply(output, match.slice(1));
                };

                lastLength = match[0].length;
                lastLastIndex = lastIndex;

                if(output.length >= limit) {
                    break;
                };
            };

            if(separator.lastIndex === match.index) {
                // avoid an infinite loop
                separator.lastIndex++;
            };
        };

        if(lastLastIndex === str.length) {
            if (lastLength || !separator.test("")) {
                output.push("");
            };
        } else {
            output.push(str.slice(lastLastIndex));
        };

        return output.length > limit ? output.slice(0, limit) : output;
    };
    // NPCG: nonparticipating capturing group
    cbSplit._compliantExecNpcg = /()??/.exec("")[1] === undefined;
    cbSplit._nativeSplit = String.prototype.split;

    // Affects the JSON passed to the script
    function affectJSON(json) {
        if(!(typeof json === "object")) {
            return;
        };

        var key,
            switchObj = {
                "debug":function(value) {
                    debug = !!value;
                    return true;
                },
                "lang":function(value) {
                    if(typeof value === "string" && value.search(/^[a-z]{2,3}(-([a-z]{2}))?$/i) != -1) {
                        languageInfo = [value.toLowerCase()];
                        returnLocaleDate = true;
                        deriveLocale = true;
                    };
                    return true;
                },
                "nodrag":function(value) {
                    nodrag = !!value;
                    return true;
                },
                "buttontabindex":function(value) {
                    buttonTabIndex = !!value;
                    return true;
                },
                "derivelocale":function(value) {
                    deriveLocale = !!value;
                    return true;
                },
                "mousewheel":function(value) {
                    mouseWheel = !!value;
                    return true;
                },
                "cellformat":function(value) {
                    if(typeof value === "string") {
                        parseCellFormat(value);
                    };
                    return true;
                },
                "titleformat":function(value) {
                    if(typeof value === "string") {
                        titleFormat = value;
                    };
                    return true;
                },
                "statusformat":function(value) {
                    if(typeof value === "string") {
                        statusFormat = value;
                    };
                    return true;
                },
                "describedby":function(value) {
                    if(typeof value === "string") {
                        describedBy = value;
                    };
                    return true;
                },
                "finalopacity":function(value) {
                    if(typeof value === 'number' && (+value > 20 && +value <= 100)) {
                        finalOpacity = parseInt(value, 10);
                    };
                    return true;
                },
                "bespoketitles":function(value) {
                    if(typeof value === "object") {
                        bespokeTitles = {};
                        for(var dt in value) {
                            if(value.hasOwnProperty(dt) && String(dt).match(wcDateRegExp) != -1) {
                                bespokeTitles[dt] = String(value[dt]);
                            };
                        };
                    };
                    return true;
                },
                "dateparsefallback":function(value) {
                    dateParseFallback = !!value;
                    return true;
                },
                "languagefilelocation":function(value) {
                    langFileFolder = value;
                    return true;
                },
                "_default":function() {
                    if(debug) {
                        throw "Unknown key located within JSON data: " + key;
                    };
                    return true;
                }
            };

        for(key in json) {
            if(!json.hasOwnProperty(key)) {
                continue;
            };
            (switchObj.hasOwnProperty(String(key).toLowerCase()) && switchObj[String(key).toLowerCase()] || switchObj._default)(json[key]);
        };
    };

    // Parses the JSON passed either between the script tags or by using the
    // setGlobalOptions method
    function parseJSON(str) {
        if(!(typeof str === 'string') || str == "") {
            return {};
        };
        try {
            // Does a JSON (native or not) Object exist
            if(typeof JSON === "object" && JSON.parse) {
                return window.JSON.parse(str);
            // Genious code taken from: http://kentbrewster.com/badges/
            } else if(/debug|lang|nodrag|buttontabindex|derivelocale|mousewheel|cellformat|titleformat|statusformat|describedby|finalopacity|bespoketitles|dateparsefallback/.test(str.toLowerCase())) {
                var f = Function(['var document,top,self,window,parent,Number,Date,Object,Function,',
                    'Array,String,Math,RegExp,Image,ActiveXObject;',
                    'return (' , str.replace(/<\!--.+-->/gim,'').replace(/\bfunction\b/g,'function-') , ');'].join(''));
                return f();
            };
        } catch (e) { };

        if(debug) {
            throw "Could not parse the JSON object";
        };

        return {"err":1};
    };

    // Parses the cell format to use whenever the datepicker has keyboard focus
    function parseCellFormat(value) {
        if(isOpera) {
            // Don't use hidden text for opera due to the default
            // "blue" browser focus outline stretching outside of the viewport
            // and degrading visual accessibility. Harsh & hackish though...
            formatParts = ["%j"];
            cellFormat  = "%j %F %Y";
            return;
        };

        // If no day part stipulated then use presets
        if(value.match(/%([d|j])/) == -1) {
            return;
        };

        // Basic split on the %j or %d modifiers
        formatParts = cbSplit(value, /%([d|j])/);
        cellFormat  = value;
    };

    function pad(value, length) {
        length = Math.min(4, length || 2);
        return "0000".substr(0,length - Math.min(String(value).length, length)) + value;
    };

    // Very, very basic event functions
    function addEvent(obj, type, fn) {
        if(obj.addEventListener) {
            obj.addEventListener(type, fn, true);
        } else if(obj.attachEvent) {
            obj.attachEvent("on"+type, fn);
        };
    };
    function removeEvent(obj, type, fn) {
        try {
            if(obj.removeEventListener) {
                obj.removeEventListener(type, fn, true);
            } else if(obj.detachEvent) {
                obj.detachEvent("on"+type, fn);
            };
        } catch(err) {};
    };
    function stopEvent(e) {
        e = e || document.parentWindow.event;
        if(e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        };

        if(oldIE) {
            e.cancelBubble = true;
            e.returnValue = false;
        };

        return false;
    };

    function setARIARole(element, role) {
        if(element && element.tagName) {
            element.setAttribute("role", role);
        };
    };

    function setARIAProperty(element, property, value) {
        if(element && element.tagName) {
            element.setAttribute("aria-" + property, value);
        };
    };

    // Sets a tabindex attribute on an element, bends over for IE.
    function setTabIndex(e, i) {
        e.setAttribute(oldIE ? "tabIndex" : "tabindex", i);
        e.tabIndex = i;
    };

    function dateToYYYYMMDD(dt) {
        return dt instanceof Date && !isNaN(dt) ? dt.getFullYear() + pad(dt.getMonth() + 1) + "" + pad(dt.getDate()) : dt;
    };

    // The datePicker object itself
    function datePicker(options) {
        this.dateSet             = null;
        this.timerSet            = false;
        this.visible             = false;
        this.fadeTimer           = null;
        this.timer               = null;
        this.yearInc             = 0;
        this.monthInc            = 0;
        this.dayInc              = 0;
        this.mx                  = 0;
        this.my                  = 0;
        this.x                   = 0;
        this.y                   = 0;
        this.created             = false;
        this.disabled            = false;
        this.opacity             = 0;
        this.opacityTo           = 100;
        this.finalOpacity        = 100;
        this.inUpdate            = false;
        this.kbEventsAdded       = false;
        this.fullCreate          = false;
        this.selectedTD          = null;
        this.cursorTD            = null;
        this.cursorDate          = options.cursorDate ? options.cursorDate : "",
        this.date                = options.cursorDate ? new Date(+options.cursorDate.substr(0,4), +options.cursorDate.substr(4,2) - 1, +options.cursorDate.substr(6,2),5,0,0) : new Date();
        this.defaults            = {};
        this.dynDisabledDates    = {};
        this.dateList            = [];
        this.bespokeClass        = options.bespokeClass;
        this.firstDayOfWeek      = localeImport.firstDayOfWeek;
        this.interval            = new Date();
        this.clickActivated      = false;
        this.showCursor          = false;
        this.noFocus             = true;
        this.kbEvent             = false;
        this.delayedUpdate       = false;
        this.bespokeTitles       = {};
        this.bespokeTabIndex     = options.bespokeTabIndex;

        for(var thing in options) {
            if(!options.hasOwnProperty(thing) || String(thing).search(/^(callbacks|formElements|enabledDates|disabledDates)$/) != -1) {
                continue;
            };
            this[thing] = options[thing];
        };

        if(oldIE) {
            this.iePopUp = null;
        };

        for(var i = 0, prop; prop = ["callbacks", "formElements"][i]; i++) {
            this[prop] = {};
            if(prop in options) {
                for(thing in options[prop]) {
                    if(options[prop].hasOwnProperty(thing)) {
                            this[prop][thing] = options[prop][thing];
                    };
                };
            };
        };

        // Adjust time to stop daylight savings madness on windows
        this.date.setHours(5);

        // Called from an associated form elements onchange event
        this.changeHandler = function() {
            // In a perfect world this shouldn't ever happen
            if(o.disabled) {
                return;
            };
            o.setDateFromInput();
            o.callback("dateset", o.createCbArgObj());
        };

        // Creates the object passed to the callback functions
        this.createCbArgObj = function() {
            return this.dateSet ? {
                "id"    :this.id,
                "date"  :this.dateSet,
                "dd"    :pad(this.date.getDate()),
                "mm"    :pad(this.date.getMonth() + 1),
                "yyyy"  :this.date.getFullYear()
                } : {
                "id"    :this.id,
                "date"  :null,
                "dd"    :null,
                "mm"    :null,
                "yyyy"  :null
                };
        };

        // Attempts to grab the window scroll offsets
        this.getScrollOffsets = function() {
            if(typeof(window.pageYOffset) == 'number') {
                //Netscape compliant
                return [window.pageXOffset, window.pageYOffset];
            } else if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                //DOM compliant
                return [document.body.scrollLeft, document.body.scrollTop];
            } else if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                //IE6 standards compliant mode
                return [document.documentElement.scrollLeft, document.documentElement.scrollTop];
            };
            return [0,0];
        };

        // Calculates the current list of disabled & enabled dates for a specific year/month
        this.getDateExceptions = function(y, m) {

            m = pad(m);

            var obj     = {},
                lower   = o.firstDateShown,
                upper   = o.lastDateShown,
                rLength = o.dateList.length,
                rNumber, workingDt, workingY, workingM, dtLower, dtUpper, i, dt, dt1, dt2, rngLower, rngUpper, cDate;

            if(!upper || !lower) {
                lower = o.firstDateShown = y + pad(m) + "01";
                upper = o.lastDateShown  = y + pad(m) + pad(daysInMonth(m, y));
            };

            dtLower = Number(lower.substr(0,6));
            dtUpper = Number(upper.substr(0,6));

            workingDt = String(dtLower);

            while(+workingDt <= dtUpper) {
                workingY = workingDt.substr(0,4);
                workingM = workingDt.substr(4,2);

                for(rNumber = 0; rNumber < rLength; rNumber++) {
                    dt1 = String(o.dateList[rNumber].rLow).replace(/^(\*\*\*\*)/, workingY).replace(/^(\d\d\d\d)(\*\*)/, "$1"+workingM);
                    dt2 = String(o.dateList[rNumber].rHigh).replace(/^(\*\*\*\*)/, workingY).replace(/^(\d\d\d\d)(\*\*)/, "$1"+workingM);

                    // Single date
                    if(dt2 == 1) {
                        if(+dt1 >= +o.firstDateShown && +dt1 <= +o.lastDateShown) {
                            obj[dt1] = o.dateList[rNumber].type;
                        };
                        continue;
                    };

                    // Date Range
                    if(dt1 <= dt2
                       &&
                       workingDt >= dt1.substr(0,6)
                       &&
                       workingDt <= dt2.substr(0,6)
                       ) {
                        rngLower = Math.max(dt1, Math.max(String(workingDt) + "01", this.firstDateShown));
                        rngUpper = Math.min(dt2, Math.min(String(workingDt) + "31", this.lastDateShown));
                        for(i = rngLower; i <= rngUpper; i++) {
                            obj[i] = o.dateList[rNumber].type;
                        };
                    };
                };

                // Let the Date Object take care of month overflowss
                workingDt = new Date(workingY, +workingM, 2);
                workingDt = workingDt.getFullYear()+""+pad(workingDt.getMonth()+1);
            };

            return obj;
        };

        // Repositions the datepicker beside the button - to the bottom by
        // preference but to the top if there is not enough room to display the
        // entire U.I. at the bottom (it really should be updated to favour
        // bottom positioning if not enough room to display the entire U.I. at
        // the top in that scenario though)
        this.reposition = function() {
            if(!o.created || o.staticPos) {
                return;
            };

            o.div.style.visibility = "hidden";
            o.div.style.left = o.div.style.top = "0px";
            o.div.style.display = "block";

            var osh         = o.div.offsetHeight,
                osw         = o.div.offsetWidth,
                elem        = document.getElementById('fd-but-' + o.id),
                pos         = o.truePosition(elem),
                trueBody    = (document.compatMode && document.compatMode!="BackCompat") ? document.documentElement : document.body,
                sOffsets    = o.getScrollOffsets(),
                scrollTop   = sOffsets[1],
                scrollLeft  = sOffsets[0],
                tSpace      = parseInt(pos[1] - 2) - parseInt(scrollTop),
                bSpace      = parseInt(trueBody.clientHeight + scrollTop) - parseInt(pos[1] + elem.offsetHeight + 2);

            o.div.style.visibility = "visible";

            o.div.style.left = Number(parseInt(trueBody.clientWidth+scrollLeft) < parseInt(osw+pos[0]) ? Math.abs(parseInt((trueBody.clientWidth+scrollLeft) - osw)) : pos[0]) + "px";
            o.div.style.top  = (bSpace > tSpace) ? Math.abs(parseInt(pos[1] + elem.offsetHeight + 2)) + "px" : Math.abs(parseInt(pos[1] - (osh + 2))) + "px";
            if(oldIE === 6) {
                o.iePopUp.style.top    = o.div.style.top;
                o.iePopUp.style.left   = o.div.style.left;
                o.iePopUp.style.width  = osw + "px";
                o.iePopUp.style.height = (osh - 2) + "px";
            };
        };

        this.removeCursorHighlight = function() {
            var td = document.getElementById(o.id + "-date-picker-hover");
            if(td) {
                removeClass(td, "date-picker-hover");
            };
        };

        this.addCursorHighlight = function() {
            var td = document.getElementById(o.id + "-date-picker-hover");
            if(td) {
                addClass(td, "date-picker-hover");
            };
        };
        // Resets the tabindex of the previously focused cell
        this.removeOldFocus = function() {
            var td = document.getElementById(o.id + "-date-picker-hover");
            if(td) {
                try {
                    setTabIndex(td, -1);
                    removeClass(td, "date-picker-hover");
                    td.id = "";
                    td.onblur  = null;
                    td.onfocus = null;
                } catch(err) {};
            };
        };

        // Sets the tabindex & focus on the currently highlighted cell
        this.setNewFocus = function() {
            var td = document.getElementById(o.id + "-date-picker-hover");
            if(td) {
                try {
                    setTabIndex(td, 0);
                    if(this.showCursor) {
                        addClass(td, "date-picker-hover");
                    };
                    // If opened with the keyboard then add focus & blur events to the cell
                    if(!this.clickActivated) {
                        td.onblur    = o.onblur;
                        td.onfocus   = o.onfocus;
                    };

                    // If opened with the keyboard (and not in opera) then add a screen-reader friendly date format
                    if(!isOpera && !this.clickActivated) {
                        o.addAccessibleDate();
                    };

                    // Try to programmatically set focus on the cell
                    if(!this.noFocus && !this.clickActivated) {
                        setTimeout(function() { try { td.focus(); } catch(err) {}; }, 0);
                    };
                } catch(err) { };
            };
        };

        // Adds a screen-reader friendly date to the current cell whenever
        // the datepicker has been opened with the keyboard
        this.addAccessibleDate = function() {
            var td   = document.getElementById(o.id + "-date-picker-hover");

            if(td && !(td.getElementsByTagName("span").length)) {
                var ymd = td.className.match(/cd-([\d]{4})([\d]{2})([\d]{2})/),
                    noS = td.className.search(noSelectionRegExp) != -1,
                    spn = document.createElement('span'),
                    spnC;

                spn.className       = "fd-screen-reader";

                removeChildNodes(td);

                if(noS) {
                    spnC = spn.cloneNode(false);
                    spnC.appendChild(document.createTextNode(getTitleTranslation(13)));
                    td.appendChild(spnC);
                };

                for(var pt = 0, part; part = formatParts[pt]; pt++) {
                    if(part == "%j" || part == "%d") {
                        td.appendChild(document.createTextNode(printFormattedDate(new Date(ymd[1], +ymd[2]-1, ymd[3], 5, 0, 0), part, true)));
                    } else {
                        spnC = spn.cloneNode(false);
                        spnC.appendChild(document.createTextNode(printFormattedDate(new Date(ymd[1], +ymd[2]-1, ymd[3], 5, 0, 0), part, true)));
                        td.appendChild(spnC);
                    };
                };
            };
        };

        // Sets the current cursor to a specific date
        this.setCursorDate = function(yyyymmdd) {
            if(String(yyyymmdd).search(/^([0-9]{8})$/) != -1) {
                this.date = new Date(+yyyymmdd.substr(0,4), +yyyymmdd.substr(4,2) - 1, +yyyymmdd.substr(6,2), 5, 0, 0);
                this.cursorDate = yyyymmdd;

                if(this.staticPos) {
                    this.updateTable();
                };
            };
        };

        // Updates the table used to display the datepicker
        this.updateTable = function(noCallback) {
            if(!o || o.inUpdate || !o.created) {
                return;
            };

            // We are currently updating (used to stop public methods from firing)
            o.inUpdate = true;

            // Remove the focus from the currently highlighted cell
            o.removeOldFocus();

            o.div.dir = localeImport.rtl ? "rtl" : "ltr";

            // If the update timer initiated
            if(o.timerSet && !o.delayedUpdate) {
                // Are we incrementing/decrementing the month
                if(o.monthInc) {
                    var n = o.date.getDate(),
                        d = new Date(o.date);

                    d.setDate(2);
                    d.setMonth(d.getMonth() + o.monthInc * 1);
                    // Don't go over the days in the month
                    d.setDate(Math.min(n, daysInMonth(d.getMonth(),d.getFullYear())));

                    o.date = new Date(d);
                } else {
                    o.date.setDate(Math.min(o.date.getDate()+o.dayInc, daysInMonth(o.date.getMonth()+o.monthInc,o.date.getFullYear()+o.yearInc)));
                    o.date.setMonth(o.date.getMonth() + o.monthInc);
                    o.date.setFullYear(o.date.getFullYear() + o.yearInc);
                };
            };

            // Make sure the internal date is within range
            o.outOfRange();

            // Disable/enable the today button
            if(!o.noToday) {
                o.disableTodayButton();
            };

            // Disable/enable the month & year buttons
            o.showHideButtons(o.date);

            var cd = o.date.getDate(),
                cm = o.date.getMonth(),
                cy = o.date.getFullYear(),
                cursorDate = (String(cy) + pad(cm+1) + pad(cd)),
                tmpDate    = new Date(cy, cm, 1, 5, 0, 0);

            tmpDate.setHours(5);

            var dt, dts, cName, row, td, i, currentDate, cellAdded, col, currentStub, abbr, bespokeRenderClass, spnC, dateSetD, selectable, weekDay,
                // Weekday of the fist of the month
                weekDayC            = (tmpDate.getDay() + 6) % 7,
                // The column index this weekday will occupy
                firstColIndex       = (((weekDayC - o.firstDayOfWeek) + 7 ) % 7) - 1,
                // The number of days in the current month
                dpm                 = daysInMonth(cm, cy),
                // Today as a Date Object
                today               = new Date(),
                // Today as a YYYYMMDD String
                today               = today.getFullYear() + pad(today.getMonth()+1) + pad(today.getDate()),
                // A Sring date stub in a YYYYMM format for the current date
                stub                = String(tmpDate.getFullYear()) + pad(tmpDate.getMonth()+1),
                //
                cellAdded           = [4,4,4,4,4,4],
                // The first day of the previous month as a Date Object
                lm                  = new Date(cy, cm-1, 1, 5, 0, 0),
                // The first day of the next month as a Date Object
                nm                  = new Date(cy, cm+1, 1, 5, 0, 0),
                // The number of days in the previous month
                daySub              = daysInMonth(lm.getMonth(), lm.getFullYear()),
                // YYYYMM String date stub for the next month
                stubN               = String(nm.getFullYear()) + pad(nm.getMonth()+1),
                // YYYYMM String date stub for the previous month
                stubP               = String(lm.getFullYear()) + pad(lm.getMonth()+1),
                weekDayN            = (nm.getDay() + 6) % 7,
                weekDayP            = (lm.getDay() + 6) % 7,
                // A SPAN node to clone when adding dates to individual cells
                spn                 = document.createElement('span');

            // Give the "fd-screen-reader" class to the span in order to hide them in the UI
            // but keep them accessible to screen-readers
            spn.className       = "fd-screen-reader";

            // The first & last dates shown on the datepicker UI - could be a date from the previous & next month respectively
            o.firstDateShown    = !o.constrainSelection && o.fillGrid && (0 - firstColIndex < 1) ? String(stubP) + (daySub + (0 - firstColIndex)) : stub + "01";
            o.lastDateShown     = !o.constrainSelection && o.fillGrid ? stubN + pad(41 - firstColIndex - dpm) : stub + String(dpm);

            // Store a reference to the current YYYYMM String representation of the current month
            o.currentYYYYMM     = stub;

            bespokeRenderClass  = o.callback("redraw", {id:o.id, dd:pad(cd), mm:pad(cm+1), yyyy:cy, firstDateDisplayed:o.firstDateShown, lastDateDisplayed:o.lastDateShown}) || {};

            // An Object of dates that have been explicitly disabled (1) or enabled (0)
            dts                 = o.getDateExceptions(cy, cm+1);

            // Double check current date within limits etc
            o.checkSelectedDate();
            //
            dateSetD            = (o.dateSet != null) ? o.dateSet.getFullYear() + pad(o.dateSet.getMonth()+1) + pad(o.dateSet.getDate()) : false;

            // If we have selected a date then set its ARIA selected property
            // to false. We then set the ARIA selected property to true on the
            // newly selected cell after redrawing the table
            if(this.selectedTD != null) {
                setARIAProperty(this.selectedTD, "selected", false);
                this.selectedTD = null;
            };

            // Redraw all of the table cells representing the date parts of the UI
            for(var curr = 0; curr < 42; curr++) {
                // Current row
                row  = Math.floor(curr / 7);
                // Current TD node
                td   = o.tds[curr];
                // Clone our SPAN node
                spnC = spn.cloneNode(false);
                // Remove any previous contents from the cell
                removeChildNodes(td);

                // If the current cell contains a date
                if((curr > firstColIndex && curr <= (firstColIndex + dpm)) || o.fillGrid) {
                    currentStub     = stub;
                    weekDay         = weekDayC;
                    dt              = curr - firstColIndex;
                    cName           = [];
                    selectable      = true;

                    // Are we drawing last month
                    if(dt < 1) {
                        dt              = daySub + dt;
                        currentStub     = stubP;
                        weekDay         = weekDayP;
                        selectable      = !o.constrainSelection;
                        cName.push("month-out");
                    // Are we drawing next month
                    } else if(dt > dpm) {
                        dt -= dpm;
                        currentStub     = stubN;
                        weekDay         = weekDayN;
                        selectable      = !o.constrainSelection;
                        cName.push("month-out");
                    };

                    // Calcuate this cells weekday
                    weekDay = (weekDay + dt + 6) % 7;

                    // Push a classname representing the weekday e.g. "day-3"
                    cName.push("day-" + weekDay + " cell-" + curr);

                    // A YYYYMMDD String representation of this cells date
                    currentDate = currentStub + String(dt < 10 ? "0" : "") + dt;

                    // If this cells date is out of range
                    if(o.rangeLow && +currentDate < +o.rangeLow || o.rangeHigh && +currentDate > +o.rangeHigh) {
                        // Add a classname to style the cell and stop selection
                        td.className = "out-of-range";
                        // Reset this TD nodes title attribute
                        td.title = "";
                        // Append the cells date as a text node to the TD
                        td.appendChild(document.createTextNode(dt));
                        // Jaysus, what the feck does this line do again...
                        if(o.showWeeks) {
                            cellAdded[row] = Math.min(cellAdded[row], 2);
                        };
                    // This cells date is within the lower & upper ranges (or no ranges have been defined)
                    } else {
                        // If it's a date from last or next month and the "constrainSelection" option
                        // is false then give the cell a CD-YYYYMMDD class
                        if(selectable) {
                            td.title = titleFormat ? printFormattedDate(new Date(+String(currentStub).substr(0,4), +String(currentStub).substr(4, 2) - 1, +dt, 5, 0, 0), titleFormat, true) : "";
                            cName.push("cd-" + currentDate + " yyyymmdd-" + currentDate + " yyyymm-" + currentStub + " mmdd-" + currentStub.substr(4,2) + pad(dt));
                        // Otherwise give a "not-selectable" class (which shouldn't be styled in any way, it's for internal use)
                        } else {
                            td.title = titleFormat ? getTitleTranslation(13) + " " + printFormattedDate(new Date(+String(currentStub).substr(0,4), +String(currentStub).substr(4, 2) - 1, +dt, 5, 0, 0), titleFormat, true) : "";
                            cName.push("yyyymmdd-" + currentDate + " yyyymm-" + currentStub + " mmdd-" + currentStub.substr(4,2) + pad(dt) + " not-selectable");
                        };

                        // Add a classname if the current cells date is today
                        if(currentDate == today) {
                            cName.push("date-picker-today");
                        };

                        // If this cell represents the currently selected date
                        if(dateSetD == currentDate) {
                            // Add a classname (for styling purposes)
                            cName.push("date-picker-selected-date");
                            // Set the ARIA selected property to true
                            setARIAProperty(td, "selected", "true");
                            // And cache a reference to the current cell
                            this.selectedTD = td;
                        };

                        // If the current cell has been explicitly disabled
                        if(((currentDate in dts) && dts[currentDate] == 1)
                           // or
                           ||
                           // ... the current weekday has been disabled
                           (o.disabledDays[weekDay]
                            &&
                           // ... and the current date has not been explicitly enabled
                           !((currentDate in dts) && dts[currentDate] == 0)
                           )
                          ) {
                            // Add a classname to style the cell and stop selection
                            cName.push("day-disabled");
                            // Update the current cells title to say "Disabled date: ..." (or whatever the translation says)
                            if(titleFormat && selectable) {
                                td.title = getTitleTranslation(13) + " " + td.title;
                            };
                        };

                        // Has the redraw callback given us a bespoke classname to add to this cell
                        if(currentDate in bespokeRenderClass) {
                            cName.push(bespokeRenderClass[currentDate]);
                        };

                        // Do we need to highlight this cells weekday representation
                        if(o.highlightDays[weekDay]) {
                            cName.push("date-picker-highlight");
                        };

                        // Is the current onscreen cursor set to this cells date
                        if(cursorDate == currentDate) {
                            td.id = o.id + "-date-picker-hover";
                        };

                        // Add the date to the TD cell as a text node. Note: If the datepicker has been given keyboard
                        // events, this textnode is replaced by a more screen-reader friendly date during the focus event
                        td.appendChild(document.createTextNode(dt));

                        // Add the classnames to the TD node
                        td.className = cName.join(" ");

                        // If the UI displays week numbers then update the celladded
                        if(o.showWeeks) {
                            cellAdded[row] = Math.min(cName[0] == "month-out" ? 3 : 1, cellAdded[row]);
                        };
                    };
                // The current TD node is empty i.e. represents no date in the UI
                } else {
                    // Add a classname to style the cell
                    td.className = "date-picker-unused";
                    // Add a non-breaking space to unused TD node (for IEs benefit mostly)
                    td.appendChild(document.createTextNode(nbsp));
                    // Reset the TD nodes title attribute
                    td.title = "";
                };
                // Do we update the week number for this row
                if(o.showWeeks && curr - (row * 7) == 6) {
                    removeChildNodes(o.wkThs[row]);
                    o.wkThs[row].appendChild(document.createTextNode(cellAdded[row] == 4 && !o.fillGrid ? nbsp : getWeekNumber(cy, cm, curr - firstColIndex - 6)));
                    o.wkThs[row].className = "date-picker-week-header" + (["",""," out-of-range"," month-out",""][cellAdded[row]]);
                };
            };

            // Update the UI title bar displaying the year & month
            var span = o.titleBar.getElementsByTagName("span");
            removeChildNodes(span[0]);
            removeChildNodes(span[1]);
            span[0].appendChild(document.createTextNode(getMonthTranslation(cm, false) + nbsp));
            span[1].appendChild(document.createTextNode(cy));

            // If we are in an animation
            if(o.timerSet) {
                // Speed the timer up a little bit to make the pause between updates quicker
                o.timerInc = 50 + Math.round(((o.timerInc - 50) / 1.8));
                // Recall this function in a timeout
                o.timer = window.setTimeout(o.updateTable, o.timerInc);
            };

            // We are not currently updating the UI
            o.inUpdate = o.delayedUpdate = false;
            // Focus on the correct TD node
            o.setNewFocus();
        };

        // Removes all scaffold from the DOM & events from memory
        this.destroy = function() {

            // Remove the button if it exists
            if(document.getElementById("fd-but-" + this.id)) {
                document.getElementById("fd-but-" + this.id).parentNode.removeChild(document.getElementById("fd-but-" + this.id));
            };

            if(!this.created) {
                return;
            };

            // Event cleanup for Internet Explorers benefit
            removeEvent(this.table, "mousedown", o.onmousedown);
            removeEvent(this.table, "mouseover", o.onmouseover);
            removeEvent(this.table, "mouseout", o.onmouseout);
            removeEvent(document, "mousedown", o.onmousedown);
            removeEvent(document, "mouseup",   o.clearTimer);

            if (window.addEventListener && !window.devicePixelRatio) {
                try {
                    window.removeEventListener('DOMMouseScroll', this.onmousewheel, false);
                } catch(err) {};
            } else {
                removeEvent(document, "mousewheel", this.onmousewheel);
                removeEvent(window,   "mousewheel", this.onmousewheel);
            };
            o.removeOnFocusEvents();
            clearTimeout(o.fadeTimer);
            clearTimeout(o.timer);

            if(oldIE === 6 && !o.staticPos) {
                try {
                    o.iePopUp.parentNode.removeChild(o.iePopUp);
                    o.iePopUp = null;
                } catch(err) {};
            };

            if(this.div && this.div.parentNode) {
                this.div.parentNode.removeChild(this.div);
            };

            o = null;
        };

        this.resizeInlineDiv = function()  {
            o.div.style.width = o.table.offsetWidth + "px";
            o.div.style.height = o.table.offsetHeight + "px";
        };

        this.reset = function() {
            var elemID, elem;
            for(elemID in o.formElements) {
                elem = document.getElementById(elemID);
                if(elem) {
                    if(elem.tagName.toLowerCase() == "select") {
                        elem.selectedIndex = o.defaultVals[elemID];
                    } else {
                        elem.value = o.defaultVals[elemID];
                    };
                };
            };
            o.changeHandler();
        };

        // Creates the DOM scaffold
        this.create = function() {

            if(document.getElementById("fd-" + this.id)) {
                return;
            };

            var tr, row, col, tableHead, tableBody, tableFoot;

            this.noFocus = true;

            function createTH(details) {
                var th = document.createElement('th');
                if(details.thClassName) {
                    th.className = details.thClassName;
                };
                if(details.colspan) {
                    th.setAttribute(oldIE ? 'colSpan' : "colspan", details.colspan);
                };
                th.unselectable = "on";
                return th;
            };
            function createThAndButton(tr, obj) {
                for(var i = 0, details; details = obj[i]; i++) {
                    var th = createTH(details);
                    tr.appendChild(th);
                    var but = document.createElement('span');
                    but.className = details.className;
                    but.id = o.id + details.id;
                    but.appendChild(document.createTextNode(details.text || o.nbsp));
                    but.title = details.title || "";
                    but.unselectable = "on";
                    th.appendChild(but);
                };
            };

            this.div                     = document.createElement('div');
            this.div.id                  = "fd-" + this.id;
            this.div.className           = "date-picker" + (cssAnimations ? " fd-dp-fade " : "") + this.bespokeClass;

            // Attempt to hide the div from screen readers during content creation
            this.div.style.visibility = "hidden";
            this.div.style.display = "none";

            // Set the ARIA describedby property if the required block available
            if(this.describedBy && document.getElementById(this.describedBy)) {
                setARIAProperty(this.div, "describedby", this.describedBy);
            };

            // Set the ARIA labelled property if the required label available
            if(this.labelledBy) {
                setARIAProperty(this.div, "labelledby", this.labelledBy.id);
            };

            this.idiv                     = document.createElement('div');

            this.table             = document.createElement('table');
            this.table.className   = "date-picker-table";
            this.table.onmouseover = this.onmouseover;
            this.table.onmouseout  = this.onmouseout;
            this.table.onclick     = this.onclick;

            if(this.finalOpacity < 100) {
                this.idiv.style.opacity = Math.min(Math.max(parseInt(this.finalOpacity, 10) / 100, .2), 1);
            };

            if(this.staticPos) {
                this.table.onmousedown  = this.onmousedown;
            };

            this.div.appendChild(this.idiv);
            this.idiv.appendChild(this.table);

            var dragEnabledCN = !this.dragDisabled ? " drag-enabled" : "";

            if(!this.staticPos) {
                this.div.style.visibility = "hidden";
                this.div.className += dragEnabledCN;
                document.getElementsByTagName('body')[0].appendChild(this.div);

                if(oldIE === 6) {
                    this.iePopUp = document.createElement('iframe');
                    this.iePopUp.src = "javascript:'<html></html>';";
                    this.iePopUp.setAttribute('className','iehack');
                    // Remove iFrame from tabIndex
                    this.iePopUp.setAttribute("tabIndex", -1);
                    // Hide it from ARIA aware technologies
                    setARIARole(this.iePopUp, "presentation");
                    setARIAProperty(this.iePopUp, "hidden", "true");
                    this.iePopUp.scrolling = "no";
                    this.iePopUp.frameBorder = "0";
                    this.iePopUp.name = this.iePopUp.id = this.id + "-iePopUpHack";
                    document.body.appendChild(this.iePopUp);
                };

                // Aria "hidden" property for non active popup datepickers
                setARIAProperty(this.div, "hidden", "true");
            } else {
                var elem = document.getElementById(this.positioned ? this.positioned : this.id);
                if(!elem) {
                    this.div = null;
                    if(debug) {
                        throw this.positioned ? "Could not locate a datePickers associated parent element with an id:" + this.positioned : "Could not locate a datePickers associated input with an id:" + this.id;
                    };
                    return;
                };

                this.div.className += " static-datepicker";

                if(this.positioned) {
                    elem.appendChild(this.div);
                } else {
                    elem.parentNode.insertBefore(this.div, elem.nextSibling);
                };

                if(this.hideInput) {
                    for(var elemID in this.formElements) {
                        elem = document.getElementById(elemID);
                        if(elem) {
                            elem.className += " fd-hidden-input";
                        };
                    };
                };

                setTimeout(this.resizeInlineDiv, 300);
            };
            // ARIA Application role
            setARIARole(this.div, "application");
            //setARIARole(this.table, "grid");

            if(this.statusFormat) {
                tableFoot = document.createElement('tfoot');
                this.table.appendChild(tableFoot);
                tr = document.createElement('tr');
                tr.className = "date-picker-tfoot";
                tableFoot.appendChild(tr);
                this.statusBar = createTH({thClassName:"date-picker-statusbar" + dragEnabledCN, colspan:this.showWeeks ? 8 : 7});
                tr.appendChild(this.statusBar);
                this.updateStatus();
            };

            tableHead = document.createElement('thead');
            tableHead.className = "date-picker-thead";
            this.table.appendChild(tableHead);

            tr  = document.createElement('tr');
            setARIARole(tr, "presentation");

            tableHead.appendChild(tr);

            // Title Bar
            this.titleBar = createTH({thClassName:"date-picker-title" + dragEnabledCN, colspan:this.showWeeks ? 8 : 7});

            tr.appendChild(this.titleBar);
            tr = null;

            var span = document.createElement('span');
            span.appendChild(document.createTextNode(nbsp));
            span.className = "month-display" + dragEnabledCN;
            this.titleBar.appendChild(span);

            span = document.createElement('span');
            span.appendChild(document.createTextNode(nbsp));
            span.className = "year-display" + dragEnabledCN;
            this.titleBar.appendChild(span);

            span = null;

            tr  = document.createElement('tr');
            setARIARole(tr, "presentation");
            tableHead.appendChild(tr);

            createThAndButton(tr, [
            {className:"prev-but prev-year",  id:"-prev-year-but", text:"\u00AB", title:getTitleTranslation(2) },
            {className:"prev-but prev-month", id:"-prev-month-but", text:"\u2039", title:getTitleTranslation(0) },
            {colspan:this.showWeeks ? 4 : 3, className:"today-but", id:"-today-but", text:getTitleTranslation(4)},
            {className:"next-but next-month", id:"-next-month-but", text:"\u203A", title:getTitleTranslation(1)},
            {className:"next-but next-year",  id:"-next-year-but", text:"\u00BB", title:getTitleTranslation(3) }
            ]);

            tableBody = document.createElement('tbody');
            this.table.appendChild(tableBody);

            var colspanTotal = this.showWeeks ? 8 : 7,
                colOffset    = this.showWeeks ? 0 : -1,
                but, abbr, formElemId, formElem;

            for(var rows = 0; rows < 7; rows++) {
                row = document.createElement('tr');

                if(rows != 0) {
                    // ARIA Grid role
                    setARIARole(row, "row");
                    tableBody.appendChild(row);
                } else {
                    tableHead.appendChild(row);
                };

                for(var cols = 0; cols < colspanTotal; cols++) {
                    if(rows === 0 || (this.showWeeks && cols === 0)) {
                        col = document.createElement('th');
                    } else {
                        col = document.createElement('td');
                        setARIAProperty(col, "describedby", this.id + "-col-" + cols + (this.showWeeks ? " " + this.id + "-row-" + rows : ""));
                        setARIAProperty(col, "selected", "false");
                    };

                    if(oldIE) {
                        col.unselectable = "on";
                    };

                    row.appendChild(col);
                    if((this.showWeeks && cols > 0 && rows > 0) || (!this.showWeeks && rows > 0)) {
                        //setARIARole(col, "gridcell");
                    } else {
                        if(rows === 0 && cols > colOffset) {
                            col.className = "date-picker-day-header";
                            col.scope = "col";
                            //setARIARole(col, "columnheader");
                            col.id = this.id + "-col-" + cols;
                        } else {
                            col.className = "date-picker-week-header";
                            col.scope = "row";
                            //setARIARole(col, "rowheader");
                            col.id = this.id + "-row-" + rows;
                        };
                    };
                };
            };

            col = row = null;

            this.ths = this.table.getElementsByTagName('thead')[0].getElementsByTagName('tr')[2].getElementsByTagName('th');

            for (var y = 0; y < colspanTotal; y++) {

                if(y == 0 && this.showWeeks) {
                    this.ths[y].appendChild(document.createTextNode(getTitleTranslation(6)));
                    this.ths[y].title = getTitleTranslation(8);
                    continue;
                };

                if(y > (this.showWeeks ? 0 : -1)) {
                    but = document.createElement("span");
                    but.className = "fd-day-header";
                    if(oldIE) {
                        but.unselectable = "on";
                    };
                    this.ths[y].appendChild(but);
                };
            };

            but = null;

            this.trs             = this.table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
            this.tds             = this.table.getElementsByTagName('tbody')[0].getElementsByTagName('td');
            this.butPrevYear     = document.getElementById(this.id + "-prev-year-but");
            this.butPrevMonth    = document.getElementById(this.id + "-prev-month-but");
            this.butToday        = document.getElementById(this.id + "-today-but");
            this.butNextYear     = document.getElementById(this.id + "-next-year-but");
            this.butNextMonth    = document.getElementById(this.id + "-next-month-but");

            if(this.noToday) {
                this.butToday.style.display = "none";
            };

            if(this.showWeeks) {
                this.wkThs = this.table.getElementsByTagName('tbody')[0].getElementsByTagName('th');
                this.div.className += " weeks-displayed";
            };

            tableBody = tableHead = tr = createThAndButton = createTH = null;

            this.updateTableHeaders();
            this.created = true;
            this.updateTable();

            if(this.staticPos) {
                this.visible = true;
                this.opacity = 100;
                this.div.style.visibility = "visible";
                this.div.style.display = "block";
                this.noFocus = true;
                this.fade();
            } else {
                this.reposition();
                this.div.style.visibility = "visible";
                this.fade();
                this.noFocus = true;
            };

            this.callback("domcreate", { "id":this.id });
        };

        this.transEnd = function() {
            o.div.style.display     = "none";
            o.div.style.visibility  = "hidden";
            setARIAProperty(o.div, "hidden", "true");
        };

        this.fade = function() {
            window.clearTimeout(o.fadeTimer);
            o.fadeTimer = null;
            if(cssAnimations) {
                o.opacity = o.opacityTo;
                if(o.opacityTo == 0) {
                    o.visible = false;
                    addEvent(o.div, transitionEnd, o.transEnd);
                    addClass(o.div, "fd-dp-fade");
                } else {
                    removeEvent(o.div, transitionEnd, o.transEnd);
                    o.visible               = true;
                    o.div.style.display     = "block";
                    o.div.style.visibility  = "visible";
                    setARIAProperty(o.div, "hidden", "false");
                    removeClass(o.div, "fd-dp-fade");
                };
                return;
            };

            var diff = Math.round(o.opacity + ((o.opacityTo - o.opacity) / 4));
            o.setOpacity(diff);
            if(Math.abs(o.opacityTo - diff) > 3 && !o.noFadeEffect) {
                o.fadeTimer = window.setTimeout(o.fade, 50);
            } else {
                o.setOpacity(o.opacityTo);
                if(o.opacityTo == 0) {
                    o.div.style.display    = "none";
                    o.div.style.visibility = "hidden";
                    setARIAProperty(o.div, "hidden", "true");
                    o.visible = false;
                } else {
                    setARIAProperty(o.div, "hidden", "false");
                    o.visible = true;
                };
            };
        };
        this.trackDrag = function(e) {
            e = e || window.event;
            var diffx = (e.pageX?e.pageX:e.clientX?e.clientX:e.x) - o.mx;
            var diffy = (e.pageY?e.pageY:e.clientY?e.clientY:e.Y) - o.my;
            o.div.style.left = Math.round(o.x + diffx) > 0 ? Math.round(o.x + diffx) + 'px' : "0px";
            o.div.style.top  = Math.round(o.y + diffy) > 0 ? Math.round(o.y + diffy) + 'px' : "0px";
            if(oldIE === 6 && !o.staticPos) {
                o.iePopUp.style.top    = o.div.style.top;
                o.iePopUp.style.left   = o.div.style.left;
            };
        };
        this.stopDrag = function(e) {
            var b = document.getElementsByTagName("body")[0];
            removeClass(b, "fd-drag-active");
            removeEvent(document,'mousemove',o.trackDrag, false);
            removeEvent(document,'mouseup',o.stopDrag, false);
            o.div.style.zIndex = 9999;
        };
        this.onmousedown = function(e) {
            e = e || document.parentWindow.event;
            var el     = e.target != null ? e.target : e.srcElement,
                origEl = el,
                hideDP = true,
                reg    = new RegExp("^fd-(but-)?" + o.id + "$");

            o.mouseDownElem = null;

            // Are we within the wrapper div or the button
            while(el) {
                if(el.id && el.id.length && el.id.search(reg) != -1) {
                    hideDP = false;
                    break;
                };
                try {
                    el = el.parentNode;
                } catch(err) {
                    break;
                };
            };

            // If not, then ...
            if(hideDP) {
                hideAll();
                return true;
            };

            if((o.div.className + origEl.className).search('fd-disabled') != -1) {
                return true;
            };

            // We check the mousedown events on the buttons
            if(origEl.id.search(new RegExp("^" + o.id + "(-prev-year-but|-prev-month-but|-next-month-but|-next-year-but)$")) != -1) {

                o.mouseDownElem = origEl;

                addEvent(document, "mouseup", o.clearTimer);
                addEvent(origEl, "mouseout",  o.clearTimer);

                var incs = {
                        "-prev-year-but":[0,-1,0],
                        "-prev-month-but":[0,0,-1],
                        "-next-year-but":[0,1,0],
                        "-next-month-but":[0,0,1]
                    },
                    check = origEl.id.replace(o.id, ""),
                    dateYYYYMM = Number(o.date.getFullYear() + pad(o.date.getMonth()+1));

                o.timerInc      = 800;
                o.timerSet      = true;
                o.dayInc        = incs[check][0];
                o.yearInc       = incs[check][1];
                o.monthInc      = incs[check][2];
                o.accellerator  = 1;

                if(!(o.currentYYYYMM == dateYYYYMM)) {
                    if((o.currentYYYYMM < dateYYYYMM && (o.yearInc == -1 || o.monthInc == -1)) || (o.currentYYYYMM > dateYYYYMM && (o.yearInc == 1 || o.monthInc == 1))) {
                        o.delayedUpdate = false;
                        o.timerInc = 1200;
                    } else {
                        o.delayedUpdate = true;
                    };
                };

                o.updateTable();

                return stopEvent(e);

            } else if(el.className.search("drag-enabled") != -1) {
                    o.mx = e.pageX ? e.pageX : e.clientX ? e.clientX : e.x;
                    o.my = e.pageY ? e.pageY : e.clientY ? e.clientY : e.Y;
                    o.x  = parseInt(o.div.style.left, 10);
                    o.y  = parseInt(o.div.style.top, 10);
                    addEvent(document,'mousemove',o.trackDrag, false);
                    addEvent(document,'mouseup',o.stopDrag, false);
                    addClass(document.getElementsByTagName("body")[0], "fd-drag-active");
                    o.div.style.zIndex = 10000;

                    return stopEvent(e);
            };
            return true;
        };
        this.onclick = function(e) {
            if((!cssAnimations && o.opacity != o.opacityTo) || o.disabled) {
                return stopEvent(e);
            };

            e = e || document.parentWindow.event;
            var el = e.target != null ? e.target : e.srcElement;

            while(el.parentNode) {
                // Are we within a valid i.e. clickable TD node
                if(el.tagName && el.tagName.toLowerCase() == "td") {

                    if(el.className.search(/cd-([0-9]{8})/) == -1 || el.className.search(noSelectionRegExp) != -1) {
                        return stopEvent(e);
                    };

                    var cellDate = el.className.match(/cd-([0-9]{8})/)[1];
                    o.date       = new Date(cellDate.substr(0,4),cellDate.substr(4,2)-1,cellDate.substr(6,2), 5, 0, 0);
                    o.dateSet    = new Date(o.date);
                    o.noFocus    = true;
                    o.callback("dateset", { "id":o.id, "date":o.dateSet, "dd":o.dateSet.getDate(), "mm":o.dateSet.getMonth() + 1, "yyyy":o.dateSet.getFullYear() });
                    o.returnFormattedDate();
                    o.hide();
                    o.stopTimer();
                    break;
                } else if(el.id && el.id == o.id + "-today-but") {
                    o.date = new Date();
                    o.updateTable();
                    o.stopTimer();
                    break;
                } else if(el.className.search(/date-picker-day-header/) != -1) {
                    var cnt = o.showWeeks ? -1 : 0,
                        elem = el;

                    while(elem.previousSibling) {
                        elem = elem.previousSibling;
                        if(elem.tagName && elem.tagName.toLowerCase() == "th") {
                            cnt++;
                        };
                    };

                    o.firstDayOfWeek = (o.firstDayOfWeek + cnt) % 7;
                    o.updateTableHeaders();
                    break;
                };
                try {
                    el = el.parentNode;
                } catch(err) {
                    break;
                };
            };

            return stopEvent(e);
        };

        this.show = function(autoFocus) {
            if(this.staticPos) {
                return;
            };

            var elem, elemID;
            for(elemID in this.formElements) {
                elem = document.getElementById(this.id);
                if(!elem || (elem && elem.disabled)) {
                    return;
                };
            };

            this.noFocus = true;

            // If the datepicker doesn't exist in the dom
            if(!this.created || !document.getElementById('fd-' + this.id)) {
                this.created    = false;
                this.fullCreate = false;
                this.create();
                this.fullCreate = true;
            } else {
                this.setDateFromInput();
                this.reposition();
            };

            this.noFocus = !!!autoFocus;

            if(this.noFocus) {
                this.clickActivated = true;
                this.showCursor = false;
                addEvent(document, "mousedown", this.onmousedown);
                if(mouseWheel) {
                    if (window.addEventListener && !window.devicePixelRatio) {
                        window.addEventListener('DOMMouseScroll', this.onmousewheel, false);
                    } else {
                        addEvent(document, "mousewheel", this.onmousewheel);
                        addEvent(window,   "mousewheel", this.onmousewheel);
                    };
                };
            } else {
                this.clickActivated = false;
                this.showCursor = true;
            };

            this.opacityTo = 100;
            this.div.style.display = "block";

            if(oldIE === 6) {
                this.iePopUp.style.width    = this.div.offsetWidth + "px";
                this.iePopUp.style.height   = this.div.offsetHeight + "px";
                this.iePopUp.style.display  = "block";
            };

            this.setNewFocus();
            this.fade();
            var butt = document.getElementById('fd-but-' + this.id);
            if(butt) {
                  addClass(butt, "date-picker-button-active");
            };
        };

        this.hide = function() {
            if(!this.visible || !this.created || !document.getElementById('fd-' + this.id)) {
                return;
            };

            this.kbEvent = false;

            removeClass(o.div, "date-picker-focus");

            this.stopTimer();
            this.removeOnFocusEvents();
            this.clickActivated = false;
            this.noFocus = true;
            this.showCursor = false;
            this.setNewFocus();

            if(this.staticPos) {
                return;
            };

            if(this.statusBar) {
                this.updateStatus(getTitleTranslation(9));
            };

            var butt = document.getElementById('fd-but-' + this.id);

            if(butt) {
                removeClass(butt, "date-picker-button-active");
            };

            removeEvent(document, "mousedown", this.onmousedown);

            if(mouseWheel) {
                if (window.addEventListener && !window.devicePixelRatio) {
                    try {
                        window.removeEventListener('DOMMouseScroll', this.onmousewheel, false);
                    } catch(err) {};
                } else {
                    removeEvent(document, "mousewheel", this.onmousewheel);
                    removeEvent(window,   "mousewheel", this.onmousewheel);
                };
            };


            if(oldIE === 6) {
                this.iePopUp.style.display = "none";
            };

            this.opacityTo = 0;
            this.fade();
        };

        this.onblur = function(e) {
            o.removeCursorHighlight();
            o.hide();
        };
        // The current cursor cell gains focus
        this.onfocus = function(e) {
            o.noFocus = false;
            addClass(o.div, "date-picker-focus");
            if(o.statusBar) {
                o.updateStatus(printFormattedDate(o.date, o.statusFormat, true));
            };
            o.showCursor = true;
            o.addCursorHighlight();
            o.addOnFocusEvents();
        };
        this.onmousewheel = function(e) {
            e = e || document.parentWindow.event;
            var delta = 0;

            if (e.wheelDelta) {
                delta = e.wheelDelta/120;
                if (isOpera && window.opera.version() < 9.2) {
                    delta = -delta;
                };
            } else if(e.detail) {
                delta = -e.detail/3;
            };

            var n = o.date.getDate(),
                d = new Date(o.date),
                inc = delta > 0 ? 1 : -1;

            d.setDate(2);
            d.setMonth(d.getMonth() + inc * 1);
            d.setDate(Math.min(n, daysInMonth(d.getMonth(),d.getFullYear())));

            if(o.outOfRange(d)) {
                return stopEvent(e);
            };

            o.date = new Date(d);

            o.updateTable();

            if(o.statusBar) {
                o.updateStatus(printFormattedDate(o.date, o.statusFormat, true));
            };

            return stopEvent(e);
        };
        this.onkeydown = function (e) {
            o.stopTimer();

            if(!o.visible) {
                return false;
            };

            e = e || document.parentWindow.event;

            var kc = e.keyCode ? e.keyCode : e.charCode;

            if(kc == 13) {
                // RETURN/ENTER: close & select the date
                var td = document.getElementById(o.id + "-date-picker-hover");
                if(!td || td.className.search(/cd-([0-9]{8})/) == -1 || td.className.search(/out-of-range|day-disabled/) != -1) {
                    return stopEvent(e);
                };
                o.dateSet = new Date(o.date);
                o.callback("dateset", o.createCbArgObj());
                o.returnFormattedDate();
                o.hide();
                return stopEvent(e);
            } else if(kc == 27) {
                // ESC: close, no date selection, refocus on popup button
                if(!o.staticPos) {
                    o.hide();
                    var butt = document.getElementById('fd-but-' + o.id);
                    if(butt) {
                        setTimeout(function(){try{butt.focus()}catch(err){}},0);
                    };
                    return stopEvent(e);
                };
                return true;
            } else if(kc == 32 || kc == 0) {
                // SPACE: goto todays date
                o.date = new Date();
                o.updateTable();

                return stopEvent(e);
            } else if(kc == 9) {
                // TAB: pass focus - non popup datepickers only
                if(!o.staticPos) {
                    return stopEvent(e);
                };
                return true;
            };
            // TODO - test the need for the IE specific stuff in IE9

            // Internet Explorer fires the keydown event faster than the JavaScript engine can
            // update the interface. The following attempts to fix this.

            if(oldIE) {
                if(new Date().getTime() - o.interval.getTime() < 50) { return stopEvent(e); };
                o.interval = new Date();
            };

            // A number key has been pressed so change the first day of the week
            if((kc > 49 && kc < 56) || (kc > 97 && kc < 104)) {
                if(kc > 96) {
                    kc -= (96-48);
                };
                kc -= 49;
                o.firstDayOfWeek = (o.firstDayOfWeek + kc) % 7;
                o.updateTableHeaders();
                return stopEvent(e);
            };

            // If outside any other tested keycodes then let the keystroke pass
            if(kc < 33 || kc > 40) {
                return true;
            };

            var d = new Date(o.date),
                cursorYYYYMM = o.date.getFullYear() + pad(o.date.getMonth()+1),
                tmp;

            // HOME: Set date to first day of current month
            if(kc == 36) {
                d.setDate(1);
            // END: Set date to last day of current month
            } else if(kc == 35) {
                d.setDate(daysInMonth(d.getMonth(),d.getFullYear()));
            // PAGE UP & DOWN
            } else if ( kc == 33 || kc == 34) {
                var inc = (kc == 34) ? 1 : -1;

                // CTRL + PAGE UP/DOWN: Moves to the same date in the previous/next year
                if(e.ctrlKey) {
                    d.setFullYear(d.getFullYear() + inc * 1);
                // PAGE UP/DOWN: Moves to the same date in the previous/next month
                } else {
                    var n = o.date.getDate();

                    d.setDate(2);
                    d.setMonth(d.getMonth() + inc * 1);
                    d.setDate(Math.min(n, daysInMonth(d.getMonth(),d.getFullYear())));
                };
            // LEFT ARROW
            } else if ( kc == 37 ) {
                d = new Date(o.date.getFullYear(), o.date.getMonth(), o.date.getDate() - 1, 5, 0, 0);
            // RIGHT ARROW
            } else if ( kc == 39 || kc == 34) {
                d = new Date(o.date.getFullYear(), o.date.getMonth(), o.date.getDate() + 1, 5, 0, 0);
            // UP ARROW
            } else if ( kc == 38 ) {
                d = new Date(o.date.getFullYear(), o.date.getMonth(), o.date.getDate() - 7, 5, 0, 0);
            // DOWN ARROW
            } else if ( kc == 40 ) {
                d = new Date(o.date.getFullYear(), o.date.getMonth(), o.date.getDate() + 7, 5, 0, 0);
            };

            // If the new date is out of range then disallow action
            if(o.outOfRange(d)) {
                return stopEvent(e);
            };

            // Otherwise set the new cursor date
            o.date = d;

            // Update the status bar if needs be
            if(o.statusBar) {
                o.updateStatus(o.getBespokeTitle(o.date.getFullYear(),o.date.getMonth() + 1,o.date.getDate()) || printFormattedDate(o.date, o.statusFormat, true));
            };

            // YYYYMMDD format String of the current cursor date
            var t = String(o.date.getFullYear()) + pad(o.date.getMonth()+1) + pad(o.date.getDate());

            // If we need to redraw the UI completely
            if(e.ctrlKey || (kc == 33 || kc == 34) || t < o.firstDateShown || t > o.lastDateShown) {
                o.updateTable();
                if(oldIE) {
                    o.interval = new Date();
                };
            // Just highlight current cell
            } else {
                // Do we need to disable the today button for this date
                if(!o.noToday) {
                    o.disableTodayButton();
                };
                // Remove focus from the previous cell
                o.removeOldFocus();
                // Show/hide the month & year buttons
                o.showHideButtons(o.date);

                // Locate this TD
                for(var i = 0, td; td = o.tds[i]; i++) {
                    if(td.className.search("cd-" + t) == -1) {
                        continue;
                    };

                    td.id = o.id + "-date-picker-hover";
                    o.setNewFocus();
                    break;
                };
            };

            return stopEvent(e);
        };
        this.onmouseout = function(e) {
            e = e || document.parentWindow.event;
            var p = e.toElement || e.relatedTarget;

            while(p && p != this) {
                try {
                    p = p.parentNode;
                } catch(e) {
                    p = this;
                };
            };

            if(p == this) {
                return false;
            };

            if(o.clickActivated || (o.staticPos && !o.kbEventsAdded)) {
                o.showCursor = false;
                o.removeCursorHighlight();
            };

            if(o.currentTR) {
                o.currentTR.className = "";
                o.currentTR = null;
            };

            if(o.statusBar) {
                o.updateStatus(o.dateSet ? o.getBespokeTitle(o.dateSet.getFullYear(),o.dateSet.getMonth() + 1,o.dateSet.getDate()) || printFormattedDate(o.dateSet, o.statusFormat, true) : getTitleTranslation(9));
            };
        };
        this.onmouseover = function(e) {
            e = e || document.parentWindow.event;
            var el = e.target != null ? e.target : e.srcElement;
            while(el.nodeType != 1) {
                el = el.parentNode;
            };

            if(!el || ! el.tagName) {
                return;
            };

            o.noFocus = true;

            var statusText = getTitleTranslation(9);
            if(o.clickActivated || (o.staticPos && !o.kbEventsAdded)) {
                o.showCursor = false;
            };

            switch (el.tagName.toLowerCase()) {
                case "td":
                    if(el.className.search(/date-picker-unused|out-of-range/) != -1) {
                        statusText = getTitleTranslation(9);
                    } if(el.className.search(/cd-([0-9]{8})/) != -1) {
                        o.showCursor = true;

                        o.stopTimer();
                        var cellDate = el.className.match(/cd-([0-9]{8})/)[1];

                        o.removeOldFocus();
                        el.id = o.id+"-date-picker-hover";
                        o.setNewFocus();

                        o.date = new Date(+cellDate.substr(0,4),+cellDate.substr(4,2)-1,+cellDate.substr(6,2), 5, 0, 0);
                        if(!o.noToday) {
                            o.disableTodayButton();
                        };

                        statusText = o.getBespokeTitle(+cellDate.substr(0,4),+cellDate.substr(4,2),+cellDate.substr(6,2)) || printFormattedDate(o.date, o.statusFormat, true);
                    };
                    break;
                case "th":
                    if(!o.statusBar) {
                        break;
                    };
                    if(el.className.search(/drag-enabled/) != -1) {
                        statusText = getTitleTranslation(10);
                    } else if(el.className.search(/date-picker-week-header/) != -1) {
                        var txt = el.firstChild ? el.firstChild.nodeValue : "";
                        statusText = txt.search(/^(\d+)$/) != -1 ? getTitleTranslation(7, [txt, txt < 3 && o.date.getMonth() == 11 ? getWeeksInYear(o.date.getFullYear()) + 1 : getWeeksInYear(o.date.getFullYear())]) : getTitleTranslation(9);
                    };
                    break;
                case "span":
                    if(!o.statusBar) {
                        break;
                    };

                    if(el.className.search(/day-([0-6])/) != -1) {
                        var day = el.className.match(/day-([0-6])/)[1];
                        statusText = getTitleTranslation(11, [getDayTranslation(day, false)]);
                    } else if(el.className.search(/(drag-enabled|today-but|prev-(year|month)|next-(year|month))/) != -1 && el.className.search(/disabled/) == -1) {
                        statusText = getTitleTranslation({"drag-enabled":10,"prev-year":2,"prev-month":0,"next-year":3,"next-month":1,"today-but":12}[el.className.match(/(drag-enabled|today-but|prev-(year|month)|next-(year|month))/)[0]]);
                    };

                    break;
                default:
                    statusText = "";
            };
            while(el.parentNode) {
                el = el.parentNode;
                if(el.nodeType == 1 && el.tagName.toLowerCase() == "tr") {
                    if(o.currentTR) {
                        if(el == o.currentTR) {
                            break;
                        };
                        o.currentTR.className = "";
                    };
                    el.className = "dp-row-highlight";
                    o.currentTR = el;
                    break;
                };
            };
            if(o.statusBar && statusText) {
                o.updateStatus(statusText);
            };

            if(!o.showCursor) {
                o.removeCursorHighlight();
            };
        };
        this.clearTimer = function() {
            o.stopTimer();
            o.timerInc      = 800;
            o.yearInc       = 0;
            o.monthInc      = 0;
            o.dayInc        = 0;

            removeEvent(document, "mouseup", o.clearTimer);
            if(o.mouseDownElem != null) {
                removeEvent(o.mouseDownElem, "mouseout",  o.clearTimer);
            };
            o.mouseDownElem = null;
        };

        var o = this;

        this.setDateFromInput();

        if(this.staticPos) {
            this.create();
        } else {
            this.createButton();
        };

        (function() {
            var elemID,
                elem,
                elemCnt = 0;

            for(elemID in o.formElements) {
                elem = document.getElementById(elemID);
                if(elem && elem.tagName && elem.tagName.search(/select|input/i) != -1) {
                    addEvent(elem, "change", o.changeHandler);
                    if(elemCnt == 0 && elem.form) {
                        addEvent(elem.form, "reset", o.reset);
                    };
                    elemCnt++;
                };

                if(!elem || elem.disabled == true) {
                    o.disableDatePicker();
                };
            };
        })();

        // We have fully created the datepicker...
        this.fullCreate = true;
    };
    datePicker.prototype.addButtonEvents = function(but) {
        function buttonEvent (e) {
            e = e || window.event;

            var inpId     = this.id.replace('fd-but-',''),
                dpVisible = isVisible(inpId),
                autoFocus = false,
                kbEvent   = datePickers[inpId].kbEvent;

            if(kbEvent) {
                datePickers[inpId].kbEvent = false;
                return;
            };

            if(e.type == "keydown") {
                var kc = e.keyCode != null ? e.keyCode : e.charCode;
                if(kc != 13) return true;
                datePickers[inpId].kbEvent = true;
                if(dpVisible) {
                    removeClass(this, "date-picker-button-active");
                    hideAll();
                    return stopEvent(e);
                };
                autoFocus = true;
            } else {
                datePickers[inpId].kbEvent = false;
            };

            if(!dpVisible) {
                addClass(this, "date-picker-button-active");
                hideAll(inpId);
                showDatePicker(inpId, autoFocus);
            } else {
                removeClass(this, "date-picker-button-active");
                hideAll();
            };

            return stopEvent(e);
        };

        but.onclick     = buttonEvent;
        but.onkeydown   = buttonEvent;

        if(!buttonTabIndex) {
            setTabIndex(but, -1);
        } else {
            setTabIndex(but, this.bespokeTabIndex);
        };
    };

    datePicker.prototype.createButton = function() {

        if(this.staticPos || document.getElementById("fd-but-" + this.id)) {
                return;
        };

        var inp         = document.getElementById(this.id),
            span        = document.createElement('span'),
            but         = document.createElement('a');

        but.href        = "#" + this.id;
        but.className   = "date-picker-control";
        but.title       = getTitleTranslation(5);
        but.id          = "fd-but-" + this.id;

        span.appendChild(document.createTextNode(nbsp));
        but.appendChild(span);

        span = document.createElement('span');
        span.className = "fd-screen-reader";
        span.appendChild(document.createTextNode(but.title));
        but.appendChild(span);

        // Set the ARIA role to be "button"
        setARIARole(but, "button");

        // Set a "haspopup" ARIA property
        setARIAProperty(but, "haspopup", true);

        if(this.positioned && document.getElementById(this.positioned)) {
            document.getElementById(this.positioned).appendChild(but);
        } else {
            inp.parentNode.insertBefore(but, inp.nextSibling);
        };

        this.addButtonEvents(but);

        but = null;

        this.callback("dombuttoncreate", {id:this.id});
    };
    datePicker.prototype.setBespokeTitles = function(titles) {
        this.bespokeTitles = {};
        this.addBespokeTitles(titles);
    };
    datePicker.prototype.addBespokeTitles = function(titles) {
        for(var dt in titles) {
            if(titles.hasOwnProperty(dt)) {
                this.bespokeTitles[dt] = titles[dt];
            };
        };
    };
    datePicker.prototype.getBespokeTitle = function(y,m,d) {
        var dt,
            dtFull,
            yyyymmdd = y + String(pad(m)) + pad(d);

        // Try the datepickers bespoke titles
        for(dt in this.bespokeTitles) {
            if(this.bespokeTitles.hasOwnProperty(dt)) {
                dtFull = String(dt).replace(/^(\*\*\*\*)/, y).replace(/^(\d\d\d\d)(\*\*)/, "$1"+ pad(m));
                if(dtFull == yyyymmdd) {
                    return this.bespokeTitles[dt];
                };
            };
        };

        // Try the generic bespoke titles
        for(dt in bespokeTitles) {
            if(bespokeTitles.hasOwnProperty(dt)) {
                dtFull = String(dt).replace(/^(\*\*\*\*)/, y).replace(/^(\d\d\d\d)(\*\*)/, "$1"+ pad(m));
                if(dtFull == yyyymmdd) {
                    return bespokeTitles[dt];
                };
            };
        };

        return false;
    };
    datePicker.prototype.returnSelectedDate = function() {
        return this.dateSet;
    };
    datePicker.prototype.setRangeLow = function(range) {
        if(String(range).search(rangeRegExp) == -1) {
            if(debug) {
                throw "Invalid value passed to setRangeLow method: " + range;
            };
            return false;
        };
        this.rangeLow = range;
        if(!this.inUpdate) {
            this.setDateFromInput();
        };
    };
    datePicker.prototype.setRangeHigh = function(range) {
        if(String(range).search(rangeRegExp) == -1) {
            if(debug) {
                throw "Invalid value passed to setRangeHigh method: " + range;
            };
            return false;
        };
        this.rangeHigh = range;
        if(!this.inUpdate) {
            this.setDateFromInput();
        };
    };
    datePicker.prototype.setDisabledDays = function(dayArray) {
        if(!dayArray.length || dayArray.join("").search(/^([0|1]{7})$/) == -1) {
            if(debug) {
                throw "Invalid values located when attempting to call setDisabledDays";
            };
            return false;
        };
        this.disabledDays = dayArray;
        if(!this.inUpdate) {
            this.setDateFromInput();
        };
    };

    datePicker.prototype.setDisabledDates = function(dateObj) {
        this.filterDateList(dateObj, true);
    };
    datePicker.prototype.setEnabledDates = function(dateObj) {
        this.filterDateList(dateObj, false);
    };
    datePicker.prototype.addDisabledDates = function(dateObj) {
        this.addDatesToList(dateObj, true);
    };
    datePicker.prototype.addEnabledDates = function(dateObj) {
        this.addDatesToList(dateObj, false);
    };
    datePicker.prototype.filterDateList = function(dateObj, type) {
        var tmpDates = [];
        for(var i = 0; i < this.dateList.length; i++) {
            if(this.dateList[i].type != type) {
                tmpDates.push(this.dateList[i]);
            };
        };

        this.dateList = tmpDates.concat();
        this.addDatesToList(dateObj, type);
    };
    datePicker.prototype.addDatesToList = function(dateObj, areDisabled) {
        var startD;
        for(startD in dateObj) {
            if(String(startD).search(wcDateRegExp) != -1 && (dateObj[startD] == 1 || String(dateObj[startD]).search(wcDateRegExp) != -1)) {

                if(dateObj[startD] != 1 && Number(String(startD).replace(/^\*\*\*\*/, 2010).replace(/^(\d\d\d\d)(\*\*)/, "$1"+"22")) > Number(String(dateObj[startD]).replace(/^\*\*\*\*/, 2010).replace(/^(\d\d\d\d)(\*\*)/, "$1"+"22"))) {
                    continue;
                };

                this.dateList.push({
                    type:!!(areDisabled),
                    rLow:startD,
                    rHigh:dateObj[startD]
                });
            };
        };

        if(!this.inUpdate) {
            this.setDateFromInput();
        };
    };
    datePicker.prototype.setSelectedDate = function(yyyymmdd) {
        if(String(yyyymmdd).search(wcDateRegExp) == -1) {
            return false;
        };

        var match = yyyymmdd.match(rangeRegExp),
            dt    = new Date(+match[2],+match[3]-1,+match[4], 5, 0, 0);

        if(!dt || isNaN(dt) || !this.canDateBeSelected(dt)) {
            return false;
        };

        this.dateSet = new Date(dt);

        if(!this.inUpdate) {
            this.updateTable();
        };

        this.callback("dateset", this.createCbArgObj());
        this.returnFormattedDate();
    };
    datePicker.prototype.checkSelectedDate = function() {
        if(this.dateSet && !this.canDateBeSelected(this.dateSet)) {
            this.dateSet = null;
        };
        if(!this.inUpdate) {
            this.updateTable();
        };
    };
    datePicker.prototype.addOnFocusEvents = function() {
        if(this.kbEventsAdded || this.noFocus) {
            return;
        };

        addEvent(document, "keypress", this.onkeydown);
        addEvent(document, "mousedown", this.onmousedown);

        if(oldIE) {
            removeEvent(document, "keypress", this.onkeydown);
            addEvent(document, "keydown", this.onkeydown);
        };
        if(window.devicePixelRatio) {
            removeEvent(document, "keypress", this.onkeydown);
            addEvent(document, "keydown", this.onkeydown);
        };
        this.noFocus = false;
        this.kbEventsAdded = true;
    };
    datePicker.prototype.removeOnFocusEvents = function() {

        if(!this.kbEventsAdded) {
            return;
        };

        removeEvent(document, "keypress",  this.onkeydown);
        removeEvent(document, "keydown",   this.onkeydown);
        removeEvent(document, "mousedown", this.onmousedown);

        this.kbEventsAdded = false;
    };
    datePicker.prototype.stopTimer = function() {
        this.timerSet = false;
        window.clearTimeout(this.timer);
    };
    datePicker.prototype.setOpacity = function(op) {
        this.div.style.opacity = op/100;
        this.div.style.filter = 'alpha(opacity=' + op + ')';
        this.opacity = op;
    };
    datePicker.prototype.truePosition = function(element) {
        var pos = this.cumulativeOffset(element);
        if(isOpera) {
                return pos;
        };
        var iebody      = (document.compatMode && document.compatMode != "BackCompat")? document.documentElement : document.body,
            dsocleft    = document.all ? iebody.scrollLeft : window.pageXOffset,
            dsoctop     = document.all ? iebody.scrollTop  : window.pageYOffset,
            posReal     = this.realOffset(element);
        return [pos[0] - posReal[0] + dsocleft, pos[1] - posReal[1] + dsoctop];
    };
    datePicker.prototype.realOffset = function(element) {
        var t = 0, l = 0;
        do {
            t += element.scrollTop  || 0;
            l += element.scrollLeft || 0;
            element = element.parentNode;
        } while(element);
        return [l, t];
    };
    datePicker.prototype.cumulativeOffset = function(element) {
        var t = 0, l = 0;
        do {
            t += element.offsetTop  || 0;
            l += element.offsetLeft || 0;
            element = element.offsetParent;
        } while(element);
        return [l, t];
    };
    datePicker.prototype.outOfRange = function(tmpDate) {

        if(!this.rangeLow && !this.rangeHigh) {
            return false;
        };

        var level = false;

        if(!tmpDate) {
            level   = true;
            tmpDate = this.date;
        };

        var d  = pad(tmpDate.getDate()),
            m  = pad(tmpDate.getMonth() + 1),
            y  = tmpDate.getFullYear(),
            dt = String(y)+String(m)+String(d);

        if(this.rangeLow && +dt < +this.rangeLow) {
            if(!level) {
                return true;
            };
            this.date = new Date(this.rangeLow.substr(0,4), this.rangeLow.substr(4,2)-1, this.rangeLow.substr(6,2), 5, 0, 0);
            return false;
        };
        if(this.rangeHigh && +dt > +this.rangeHigh) {
            if(!level) {
                return true;
            };
            this.date = new Date(this.rangeHigh.substr(0,4), this.rangeHigh.substr(4,2)-1, this.rangeHigh.substr(6,2), 5, 0, 0);
        };
        return false;
    };
    datePicker.prototype.canDateBeSelected = function(tmpDate) {
        if(!tmpDate || isNaN(tmpDate)) {
            return false;
        };

        var d  = pad(tmpDate.getDate()),
            m  = pad(tmpDate.getMonth() + 1),
            y  = tmpDate.getFullYear(),
            dt = y + "" + m + "" + d,
            dd = this.getDateExceptions(y, m),
            wd = tmpDate.getDay() == 0 ? 7 : tmpDate.getDay();

        // If date out of range
        if((this.rangeLow && +dt < +this.rangeLow)
           ||
           (this.rangeHigh && +dt > +this.rangeHigh)
           ||
           // or the date has been explicitly disabled
           ((dt in dd) && dd[dt] == 1)
           ||
           // or the date lies on a disabled weekday and it hasn't been explicitly enabled
           (this.disabledDays[wd-1] && (!(dt in dd) || ((dt in dd) && dd[dt] == 1)))) {
                return false;
        };

        return true;
    };
    datePicker.prototype.updateStatus = function(msg) {
        removeChildNodes(this.statusBar);

        // All this arseing about just for sups in the footer... nice typography and all that...
        if(msg && this.statusFormat.search(/%S/) != -1 && msg.search(/([0-9]{1,2})(st|nd|rd|th)/) != -1) {
            msg = cbSplit(msg.replace(/([0-9]{1,2})(st|nd|rd|th)/, "$1<sup>$2</sup>"), /<sup>|<\/sup>/);
            var dc = document.createDocumentFragment();
            for(var i = 0, nd; nd = msg[i]; i++) {
                if(/^(st|nd|rd|th)$/.test(nd)) {
                    var sup = document.createElement("sup");
                    sup.appendChild(document.createTextNode(nd));
                    dc.appendChild(sup);
                } else {
                    dc.appendChild(document.createTextNode(nd));
                };
            };
            this.statusBar.appendChild(dc);
        } else {
            this.statusBar.appendChild(document.createTextNode(msg ? msg : getTitleTranslation(9)));
        };
    };

    /* Still needs work... */
    datePicker.prototype.setDateFromInput = function() {
        var origDateSet = this.dateSet,
            m           = false,
            but         = this.staticPos ? false : document.getElementById("fd-but-" + this.id),
            e           = localeImport.imported ? [].concat(localeDefaults.fullMonths).concat(localeDefaults.monthAbbrs) : [],
            l           = localeImport.imported ? [].concat(localeImport.fullMonths).concat(localeImport.monthAbbrs) : [],
            eosRegExp   = /(3[01]|[12][0-9]|0?[1-9])(st|nd|rd|th)/i,
            elemCnt     = 0,
            dt          = false,
            allFormats, i, elemID, elem, elemFmt, d, y, elemVal, dp, mp, yp;

        // Reset the internal dateSet variable
        this.dateSet = null;

        // Try and get a year, month and day from the form element values
        for(elemID in this.formElements) {

            elem = document.getElementById(elemID);

            if(!elem) {
                return false;
            };

            elemCnt++;

            elemVal = String(elem.value);

            if(!elemVal) {
                continue;
            };

            elemFmt     = this.formElements[elemID];
            allFormats  = [elemFmt];
            dt          = false;
            dp          = elemFmt.search(dPartsRegExp) != -1;
            mp          = elemFmt.search(mPartsRegExp) != -1;
            yp          = elemFmt.search(yPartsRegExp) != -1;

            // Try to assign some default date formats to throw at
            // the (simple) regExp parser for single date parts.
            if(!(dp && mp && yp)) {
                if(yp && !(mp || dp)) {
                    allFormats = allFormats.concat([
                        "%Y",
                        "%y"
                        ]);
                } else if(mp && !(yp || dp)) {
                    allFormats = allFormats.concat([
                        "%M",
                        "%F",
                        "%m",
                        "%n"
                        ]);
                } else if(dp && !(yp || mp)) {
                    allFormats = allFormats.concat([
                        "%d%",
                        "%j"
                        ]);
                };
            };

            for(i = 0; i < allFormats.length; i++) {
                dt = parseDateString(elemVal, allFormats[i]);

                if(dt) {
                    if(!d && dp && dt.d) {
                        d = dt.d;
                    };
                    if(m === false && mp && dt.m) {
                        m = dt.m;
                    };
                    if(!y && yp && dt.y) {
                        y = dt.y;
                    };
                };

                if(((dp && d) || !dp)
                   &&
                   ((mp && !m === false) || !mp)
                   &&
                   ((yp && y) || !yp)) {
                    break;
                };
            };
        };

        // Last ditch attempt at date parsing for single inputs that
        // represent the day, month and year parts of the date format.
        // I'm - thankfully - passing this responsibility off to the browser.
        // Date parsing in js sucks but the browsers' in-built Date.parse method
        // will inevitably be better than anything I would hazard to write.
        // Date.parse is implementation dependant though so don't expect
        // consistency, rhyme or reason.
        if(dateParseFallback && (!d || m === false || !y) && dp && mp && yp && elemCnt == 1 && elemVal) {
            // If locale imported then replace month names with English
            // counterparts if necessary
            if(localeImport.imported) {
                for(i = 0; i < l.length; i++) {
                    elemVal = elemVal.replace(new RegExp(l[i], "i"), e[i]);
                };
            };

            // Remove English ordinal suffix
            if(elemVal.search(eosRegExp) != -1) {
                elemVal = elemVal.replace(eosRegExp, elemVal.match(eosRegExp)[1]);
            };

            // Older browsers have problems with dashes so we replace with
            // slashes which appear to be supported by all and then try to use
            // the in-built Date Object to parse a valid date
            dt = new Date(elemVal.replace(new RegExp("\-", "g"), "/"));

            if(dt && !isNaN(dt)) {
                d = dt.getDate();
                m = dt.getMonth() + 1;
                y = dt.getFullYear();
            };
        };

        dt = false;

        if(d && !(m === false) && y) {
            if(+d > daysInMonth(+m - 1, +y)) {
                d  = daysInMonth(+m - 1, +y);
                dt = false;
            } else {
                dt = new Date(+y, +m - 1, +d, 5, 0, 0);
            };
        };

        if(but) {
            removeClass(but, "date-picker-dateval");
        };

        if(!dt || isNaN(dt)) {
            var newDate = new Date(y || new Date().getFullYear(), !(m === false) ? m - 1 : new Date().getMonth(), 1, 5, 0, 0);
            this.date = this.cursorDate ? new Date(+this.cursorDate.substr(0,4), +this.cursorDate.substr(4,2) - 1, +this.cursorDate.substr(6,2), 5, 0, 0) : new Date(newDate.getFullYear(), newDate.getMonth(), Math.min(+d || new Date().getDate(), daysInMonth(newDate.getMonth(), newDate.getFullYear())), 5, 0, 0);

            this.outOfRange();
            if(this.fullCreate) {
                this.updateTable();
            };
            return;
        };

        dt.setHours(5);
        this.date = new Date(dt);
        this.outOfRange();

        if(dt.getTime() == this.date.getTime() && this.canDateBeSelected(this.date)) {
            this.dateSet = new Date(this.date);
            if(but) {
                addClass(but, "date-picker-dateval");
            };
            this.returnFormattedDate(true);
        };

        if(this.fullCreate) {
            this.updateTable();
        };
    };
    datePicker.prototype.setSelectIndex = function(elem, indx) {
        for(var opt = elem.options.length-1; opt >= 0; opt--) {
            if(elem.options[opt].value == indx) {
                elem.selectedIndex = opt;
                return;
            };
        };
    };
    datePicker.prototype.returnFormattedDate = function(noFocus) {
        var but = this.staticPos ? false : document.getElementById("fd-but-" + this.id);

        if(!this.dateSet) {
            if(but) {
                removeClass(but, "date-picker-dateval");
            };
            return;
        };

        var d   = pad(this.dateSet.getDate()),
            m   = pad(this.dateSet.getMonth() + 1),
            y   = this.dateSet.getFullYear(),
            el  = false,
            elemID, elem, elemFmt, fmtDate;

        noFocus = !!noFocus;

        for(elemID in this.formElements) {
            elem    = document.getElementById(elemID);

            if(!elem) {
                return;
            };

            if(!el) {
                el = elem;
            };

            elemFmt = this.formElements[elemID];

            fmtDate = printFormattedDate(this.dateSet, elemFmt, returnLocaleDate);
            if(elem.tagName.toLowerCase() == "input") {
                elem.value = fmtDate;
            } else {
                this.setSelectIndex(elem, fmtDate);
            };
        };

        if(this.staticPos) {
            this.noFocus = true;
            this.updateTable();
            this.noFocus = false;
        } else if(but) {
            addClass(but, "date-picker-dateval");
        };

        if(this.fullCreate) {
            if(el.type && el.type != "hidden" && !noFocus) {
                try{
                    el.focus();
                } catch(err) {};
            };
        };

        if(!noFocus) {
            this.callback("datereturned", this.createCbArgObj());
        };
    };
    datePicker.prototype.disableDatePicker = function() {
        if(this.disabled) {
            return;
        };

        if(this.staticPos) {
            this.removeOnFocusEvents();
            this.removeOldFocus();
            this.noFocus = true;
            addClass(this.div, "date-picker-disabled");
            this.table.onmouseover = this.table.onclick = this.table.onmouseout = this.table.onmousedown = null;
            removeEvent(document, "mousedown", this.onmousedown);
            removeEvent(document, "mouseup",   this.clearTimer);
        } else {
            if(this.visible) {
                this.hide();
            };
            var but = document.getElementById("fd-but-" + this.id);
            if(but) {
                addClass(but, "date-picker-control-disabled");
                // Set a "disabled" ARIA state
                setARIAProperty(but, "disabled", true);
                but.onkeydown = but.onclick = function() {
                    return false;
                };
                setTabIndex(but, -1);
                but.title = "";
            }
        };

        clearTimeout(this.timer);
        this.disabled = true;
    };
    datePicker.prototype.enableDatePicker = function() {
        if(!this.disabled) {
            return;
        };

        if(this.staticPos) {
            this.removeOldFocus();

            if(this.dateSet != null) {
                this.date = this.dateSet;
            };
            this.noFocus = true;
            this.updateTable();
            removeClass(this.div, "date-picker-disabled");
            this.disabled = false;
            this.table.onmouseover = this.onmouseover;
            this.table.onmouseout  = this.onmouseout;
            this.table.onclick     = this.onclick;
            this.table.onmousedown = this.onmousedown;
        } else {
            var but = document.getElementById("fd-but-" + this.id);
            if(but) {
                removeClass(but, "date-picker-control-disabled");
                // Reset the "disabled" ARIA state
                setARIAProperty(but, "disabled", false);
                this.addButtonEvents(but);
                but.title = getTitleTranslation(5);
            };
        };

        this.disabled = false;
    };
    datePicker.prototype.disableTodayButton = function() {
        var today = new Date();
        removeClass(this.butToday, "fd-disabled");
        if(this.outOfRange(today)
           ||
           (this.date.getDate() == today.getDate()
            &&
            this.date.getMonth() == today.getMonth()
            &&
            this.date.getFullYear() == today.getFullYear())
            ) {
            addClass(this.butToday, "fd-disabled");
        };
    };
    datePicker.prototype.updateTableHeaders = function() {
        var colspanTotal = this.showWeeks ? 8 : 7,
            colOffset    = this.showWeeks ? 1 : 0,
            d, but;

        for(var col = colOffset; col < colspanTotal; col++ ) {
            d = (this.firstDayOfWeek + (col - colOffset)) % 7;
            this.ths[col].title = getDayTranslation(d, false);

            if(col > colOffset) {
                but = this.ths[col].getElementsByTagName("span")[0];
                removeChildNodes(but);

                but.appendChild(document.createTextNode(getDayTranslation(d, true)));
                but.title = this.ths[col].title;
                but = null;
            } else {
                removeChildNodes(this.ths[col]);
                this.ths[col].appendChild(document.createTextNode(getDayTranslation(d, true)));
            };

            removeClass(this.ths[col], "date-picker-highlight");
            if(this.highlightDays[d]) {
                addClass(this.ths[col], "date-picker-highlight");
            };
        };

        if(this.created) {
            this.updateTable();
        };
    };
    datePicker.prototype.callback = function(type, args) {
        if(!type || !(type in this.callbacks)) {
            return false;
        };

        var ret = false,
            func;

        for(func = 0; func < this.callbacks[type].length; func++) {
            ret = this.callbacks[type][func](args || this.id);
        };

        return ret;
    };
    datePicker.prototype.showHideButtons = function(tmpDate) {
        if(!this.butPrevYear) {
            return;
        };

        var tdm = tmpDate.getMonth(),
            tdy = tmpDate.getFullYear();

        if(this.outOfRange(new Date((tdy - 1), tdm, daysInMonth(+tdm, tdy-1), 5, 0, 0))) {
            addClass(this.butPrevYear, "fd-disabled");
            if(this.yearInc == -1) {
                this.stopTimer();
            };
        } else {
            removeClass(this.butPrevYear, "fd-disabled");
        };

        if(this.outOfRange(new Date(tdy, (+tdm - 1), daysInMonth(+tdm-1, tdy), 5, 0, 0))) {
            addClass(this.butPrevMonth, "fd-disabled");
            if(this.monthInc == -1) {
                this.stopTimer();
            };
        } else {
            removeClass(this.butPrevMonth, "fd-disabled");
        };

        if(this.outOfRange(new Date((tdy + 1), +tdm, 1, 5, 0, 0))) {
            addClass(this.butNextYear, "fd-disabled");
            if(this.yearInc == 1) {
                this.stopTimer();
            };
        } else {
            removeClass(this.butNextYear, "fd-disabled");
        };

        if(this.outOfRange(new Date(tdy, +tdm + 1, 1, 5, 0, 0))) {
            addClass(this.butNextMonth, "fd-disabled");
            if(this.monthInc == 1) {
                this.stopTimer();
            };
        } else {
            removeClass(this.butNextMonth, "fd-disabled");
        };
    };
    var localeDefaults = {
        fullMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],
        monthAbbrs:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        fullDays:  ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        dayAbbrs:  ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        titles:    ["Previous month","Next month","Previous year","Next year", "Today", "Show Calendar", "wk", "Week [[%0%]] of [[%1%]]", "Week", "Select a date", "Click \u0026 Drag to move", "Display \u201C[[%0%]]\u201D first", "Go to Today\u2019s date", "Disabled date :"],
        rtl:       false,
        firstDayOfWeek:0,
        imported:  false
    };
    var joinNodeLists = function() {
        if(!arguments.length) {
            return [];
        };
        var nodeList = [];
        for (var i = 0; i < arguments.length; i++) {
            for (var j = 0, item; item = arguments[i][j]; j++) {
                nodeList[nodeList.length] = item;
            };
        };
        return nodeList;
    };
    var cleanUp = function() {
        var dp, fe;
        for(dp in datePickers) {
            for(fe in datePickers[dp].formElements) {
                if(!document.getElementById(fe)) {
                    datePickers[dp].destroy();
                    datePickers[dp] = null;
                    delete datePickers[dp];
                    break;
                };
            };
        };
    };
    var hideAll = function(exception) {
        var dp;
        for(dp in datePickers) {
            if(!datePickers[dp].created || (exception && exception == datePickers[dp].id)) {
                continue;
            };
            datePickers[dp].hide();
        };
    };
    var hideDatePicker = function(inpID) {
        if(inpID in datePickers) {
            if(!datePickers[inpID].created || datePickers[inpID].staticPos) {
                return;
            };
            datePickers[inpID].hide();
        };
    };
    var showDatePicker = function(inpID, autoFocus) {
        if(!(inpID in datePickers)) {
            return false;
        };

        datePickers[inpID].clickActivated = !!!autoFocus;
        datePickers[inpID].show(autoFocus);
        return true;
    };
    var destroy = function(e) {
        e = e || window.event;

        // Don't remove datepickers if it's a pagehide/pagecache event (webkit et al)
        if(e.persisted) {
            return;
        };

        var dp;
        for(dp in datePickers) {
            datePickers[dp].destroy();
            datePickers[dp] = null;
            delete datePickers[dp];
        };
        datePickers = null;

        removeEvent(window, 'unload', datePickerController.destroy);
    };
    var destroySingleDatePicker = function(id) {
        if(id && (id in datePickers)) {
            datePickers[id].destroy();
            datePickers[id] = null;
            delete datePickers[id];
        };
    };
    var getTitleTranslation = function(num, replacements) {
        replacements = replacements || [];
        if(localeImport.titles.length > num) {
             var txt = localeImport.titles[num];
             if(replacements && replacements.length) {
                for(var i = 0; i < replacements.length; i++) {
                    txt = txt.replace("[[%" + i + "%]]", replacements[i]);
                };
             };
             return txt.replace(/[[%(\d)%]]/g,"");
        };
        return "";
    };
    var getDayTranslation = function(day, abbreviation) {
        var titles = localeImport[abbreviation ? "dayAbbrs" : "fullDays"];
        return titles.length && titles.length > day ? titles[day] : "";
    };
    var getMonthTranslation = function(month, abbreviation) {
        var titles = localeImport[abbreviation ? "monthAbbrs" : "fullMonths"];
        return titles.length && titles.length > month ? titles[month] : "";
    };
    var daysInMonth = function(nMonth, nYear) {
        nMonth = (nMonth + 12) % 12;
        return (((0 == (nYear%4)) && ((0 != (nYear%100)) || (0 == (nYear%400)))) && nMonth == 1) ? 29: [31,28,31,30,31,30,31,31,30,31,30,31][nMonth];
    };
    var getWeeksInYear = function(Y) {
        if(Y in weeksInYearCache) {
            return weeksInYearCache[Y];
        };

        var X1 = new Date(Y, 0, 4),
            X2 = new Date(Y, 11, 28);

        X1.setDate(X1.getDate() - (6 + X1.getDay()) % 7);
        X2.setDate(X2.getDate() + (7 - X2.getDay()) % 7);

        weeksInYearCache[Y] = Math.round((X2 - X1) / 604800000);

        return weeksInYearCache[Y];
    };

    var getWeekNumber = function(y,m,d) {
        var d   = new Date(y, m, d, 0, 0, 0),
            DoW = d.getDay(),
            ms;

        d.setDate(d.getDate() - (DoW + 6) % 7 + 3);
        ms = d.valueOf();
        d.setMonth(0);
        d.setDate(4);
        return Math.round((ms - d.valueOf()) / (7 * 864e5)) + 1;
    };

    var printFormattedDate = function(date, fmt, useImportedLocale) {
        if(!date || isNaN(date)) {
            return fmt;
        };

        var d           = date.getDate(),
            D           = date.getDay(),
            m           = date.getMonth(),
            y           = date.getFullYear(),
            locale      = useImportedLocale ? localeImport : localeDefaults,
            fmtParts    = String(fmt).split(formatSplitRegExp),
            fmtParts    = cbSplit(fmt, formatSplitRegExp),
            fmtNewParts = [],
            flags       = {
                        "d":pad(d),
                        "D":locale.dayAbbrs[D == 0 ? 6 : D - 1],
                        "l":locale.fullDays[D == 0 ? 6 : D - 1],
                        "j":d,
                        "N":D == 0 ? 7 : D,
                        "w":D,
                        "W":getWeekNumber(y,m,d),
                        "M":locale.monthAbbrs[m],
                        "F":locale.fullMonths[m],
                        "m":pad(m + 1),
                        "n":m + 1,
                        "t":daysInMonth(m, y),
                        "y":String(y).substr(2,2),
                        "Y":y,
                        "S":["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                        },
            len         = fmtParts.length,
            currFlag, f;

        for(f = 0; f < len; f++) {
            currFlag = fmtParts[f];
            fmtNewParts.push(currFlag in flags ? flags[currFlag] : currFlag);
        };

        return fmtNewParts.join("");
    };
    var parseDateString = function(str, fmt) {
        var d     = false,
            m     = false,
            y     = false,
            dp    = fmt.search(dPartsRegExp) != -1 ? 1 : 0,
            mp    = fmt.search(mPartsRegExp) != -1 ? 1 : 0,
            yp    = fmt.search(yPartsRegExp) != -1 ? 1 : 0,
            now   = new Date(),
            parts = cbSplit(fmt, formatSplitRegExp),
            str   = "" + str,
            len   = parts.length,
            pt, part, l;

        loopLabel:
        for(pt = 0; pt < len; pt++) {
            part = parts[pt];

            if(part === "") {
                continue loopLabel;
            };

            if(str.length == 0) {
                break;
            };

            switch(part) {
                // Dividers - be easy on them all i.e. accept them all when parsing...
                case "/":
                case ".":
                case " ":
                case "-":
                case ",":
                case ":":
                    str = str.substr(1);
                    break;
                // DAY
                case "d":
                    // Day of the month, 2 digits with leading zeros (01 - 31)
                    if(str.search(/^(3[01]|[12][0-9]|0[1-9])/) != -1) {
                        d = str.substr(0,2);
                        str = str.substr(2);
                        break;
                    } else {
                        return false;
                    };
                case "j": // Day of the month without leading zeros (1 - 31)
                    if(str.search(/^(3[01]|[12][0-9]|[1-9])/) != -1) {
                        d = +str.match(/^(3[01]|[12][0-9]|[1-9])/)[0];
                        str = str.substr(str.match(/^(3[01]|[12][0-9]|[1-9])/)[0].length);
                        break;
                    } else {
                        return false;
                    };
                case "D": // A textual representation of a day, three letters (Mon - Sun)
                case "l": // A full textual representation of the day of the week (Monday - Sunday)
                          // Accept English & imported locales and both modifiers
                    l = localeDefaults.fullDays.concat(localeDefaults.dayAbbrs);
                    if(localeImport.imported) {
                        l = l.concat(localeImport.fullDays).concat(localeImport.dayAbbrs);
                    };

                    for(var i = 0; i < l.length; i++) {
                        if(new RegExp("^" + l[i], "i").test(str)) {
                            str = str.substr(l[i].length);
                            continue loopLabel;
                        };
                    };

                    break;
                case "N": // ISO-8601 numeric representation of the day of the week (added in PHP 5.1.0) 1 (for Monday) through 7 (for Sunday)
                case "w": // Numeric representation of the day of the week 0 (for Sunday) through 6 (for Saturday)
                    if(str.search(part == "N" ? /^([1-7])/ : /^([0-6])/) != -1) {
                        str = str.substr(1);
                    };
                    break;
                case "S": // English ordinal suffix for the day of the month, 2 characters: st, nd, rd or th
                    if(str.search(/^(st|nd|rd|th)/i) != -1) {
                        str = str.substr(2);
                    };
                    break;
                // WEEK
                case "W": // ISO-8601 week number of year, weeks starting on Monday (added in PHP 4.1.0): 1 - 53
                    if(str.search(/^([1-9]|[1234[0-9]|5[0-3])/) != -1) {
                        str = str.substr(str.match(/^([1-9]|[1234[0-9]|5[0-3])/)[0].length);
                    };
                    break;
                // MONTH
                case "M": // A short textual representation of a month, three letters
                case "F": // A full textual representation of a month, such as January or March
                          // Accept English & imported locales and both modifiers
                    l = localeDefaults.fullMonths.concat(localeDefaults.monthAbbrs);
                    if(localeImport.imported) {
                        l = l.concat(localeImport.fullMonths).concat(localeImport.monthAbbrs);
                    };
                    for(var i = 0; i < l.length; i++) {
                        if(str.search(new RegExp("^" + l[i],"i")) != -1) {
                            str = str.substr(l[i].length);
                            m = ((i + 12) % 12) + 1;
                            continue loopLabel;
                        };
                    };
                    return false;
                case "m": // Numeric representation of a month, with leading zeros
                    l = /^(1[012]|0[1-9])/;
                    if(str.search(l) != -1) {
                        m = +str.substr(0, 2);
                        str = str.substr(2);
                        break;
                    } else {
                        return false;
                    };
                case "n": // Numeric representation of a month, without leading zeros
                          // Accept either when parsing
                    l = /^(1[012]|[1-9])/;
                    if(str.search(l) != -1) {
                        m = +str.match(l)[0];
                        str = str.substr(str.match(l)[0].length);
                        break;
                    } else {
                        return false;
                    };
                case "t": // Number of days in the given month: 28 through 31
                    if(str.search(/2[89]|3[01]/) != -1) {
                        str = str.substr(2);
                        break;
                    } else {
                        return false;
                    };
                // YEAR

                case "Y": // A full numeric representation of a year, 4 digits
                    if(str.search(/^(\d{4})/) != -1) {
                        y = str.substr(0,4);
                        str = str.substr(4);
                        break;
                    } else {
                        return false;
                    };
                case "y": // A two digit representation of a year
                    if(str.search(/^(0[0-9]|[1-9][0-9])/) != -1) {
                        y = str.substr(0,2);
                        y = +y < 50 ? '20' + String(y) : '19' + String(y);
                        str = str.substr(2);
                        break;
                    } else {
                        return false;
                    };
                default:
                   str = str.substr(part.length);
            };
        };

        if((dp && d === false) || (mp && m === false) || (yp && y === false)) {
            return false;
        };

        if(dp && mp && yp && +d > daysInMonth(+m - 1, +y)) {
            return false;
        };

        return {
            "d":dp ? +d : false,
            "m":mp ? +m : false,
            "y":yp ? +y : false
            };
    };

    var findLabelForElement = function(element) {
        var label;
        if(element.parentNode && element.parentNode.tagName.toLowerCase() == "label") {
            label = element.parentNode;
        } else {
            var labelList = document.getElementsByTagName('label');
            // loop through label array attempting to match each 'for' attribute to the id of the current element
            for(var lbl = 0; lbl < labelList.length; lbl++) {
                // Internet Explorer requires the htmlFor test
                if((labelList[lbl]['htmlFor'] && labelList[lbl]['htmlFor'] == element.id) || (labelList[lbl].getAttribute('for') == element.id)) {
                    label = labelList[lbl];
                    break;
                };
            };
        };

        if(label && !label.id && element.id) {
            label.id = element.id + "_label";
        };

        return label;
    };
    var updateLanguage = function() {
        if(typeof(window.fdLocale) == "object" ) {
            localeImport = {
                titles          : fdLocale.titles,
                fullMonths      : fdLocale.fullMonths,
                monthAbbrs      : fdLocale.monthAbbrs,
                fullDays        : fdLocale.fullDays,
                dayAbbrs        : fdLocale.dayAbbrs,
                firstDayOfWeek  : ("firstDayOfWeek" in fdLocale) ? fdLocale.firstDayOfWeek : 0,
                rtl             : ("rtl" in fdLocale) ? !!(fdLocale.rtl) : false,
                imported        : true
            };
        } else if(!localeImport) {
            localeImport = localeDefaults;
        };
    };
    var loadLanguage = function() {
        updateLanguage();
        var dp;
        for(dp in datePickers) {
            if(!datePickers[dp].created) {
                continue;
            };
            datePickers[dp].updateTable();
        };
    };
    var checkElem = function(elem) {
        return !(!elem || !elem.tagName || !((elem.tagName.toLowerCase() == "input" && (elem.type == "text" || elem.type == "hidden")) || elem.tagName.toLowerCase() == "select"));
    };
    var addDatePicker = function(options) {
        updateLanguage();

        if(cssAnimations === null) {
            cssAnimations = testCSSAnimationSupport();
        };

        if(!options.formElements) {
            if(debug) {
                throw "No form elements stipulated within initialisation parameters";
            };
            return;
        };

        options.id            = (options.id && (options.id in options.formElements)) ? options.id : "";
        options.enabledDates  = false;
        options.disabledDates = false;

        var partsFound  = {d:0,m:0,y:0},
            defaultVals = {},
            cursorDate  = false,
            myMin       = 0,
            myMax       = 0,
            fmt, opts, dtPartStr, elemID, elem, dt, i;

        for(elemID in options.formElements) {
            elem = document.getElementById(elemID);

            if(!checkElem(elem)) {
                if(debug) {
                    throw "Element '" + elemID + "' is of the wrong type or does not exist within the DOM";
                };
                return false;
            };

            if(!(options.formElements[elemID].match(formatTestRegExp))) {
                if(debug) {
                    throw "Element '" + elemID + "' has a date format that does not contain either a day (d|j), month (m|F|n) or year (y|Y) part: " + options.formElements[elemID];
                };
                return false;
            };

            if(!options.id) {
                options.id = elemID;
            };

            defaultVals[elemID] = elem.tagName == "select" ? elem.selectedIndex || 0 : elem.defaultValue;

            fmt             = {
                "value":options.formElements[elemID]
            };

            fmt.d = fmt.value.search(dPartsRegExp) != -1;
            fmt.m = fmt.value.search(mPartsRegExp) != -1;
            fmt.y = fmt.value.search(yPartsRegExp) != -1;

            if(fmt.d) {
                partsFound.d++;
            };
            if(fmt.m) {
                partsFound.m++;
            };
            if(fmt.y) {
                partsFound.y++;
            };

            if(elem.tagName.toLowerCase() == "select") {
                // If we have a selectList, then try to parse the higher and lower limits
                var selOptions = elem.options;

                // Check the yyyymmdd
                if(fmt.d && fmt.m && fmt.y) {
                    cursorDate = false;

                    // Dynamically calculate the available "enabled" dates
                    options.enabledDates = {};
                    options.disabledDates = {};

                    for(i = 0; i < selOptions.length; i++) {
                        dt = parseDateString(selOptions[i].value, fmt.value);

                        if(dt && dt.y && !(dt.m === false) && dt.d) {

                            dtPartStr = dt.y + "" + pad(dt.m) + pad(dt.d);
                            if(!cursorDate) {
                                cursorDate = dtPartStr;
                            };

                            options.enabledDates[dtPartStr] = 1;

                            if(!myMin || +dtPartStr < +myMin) {
                                myMin = dtPartStr;
                            };

                            if(!myMax || +dtPartStr > +myMax) {
                                myMax = dtPartStr;
                            };
                        };
                    };

                    // Automatically set cursor to first available date (if no bespoke cursorDate was set);
                    if(!options.cursorDate && cursorDate) {
                        options.cursorDate = cursorDate;
                    };

                    options.disabledDates[myMin] = myMax;

                } else if(fmt.m && fmt.y) {

                    for(i = 0; i < selOptions.length; i++) {
                        dt = parseDateString(selOptions[i].value, fmt.value);
                        if(dt.y && !(dt.m === false)) {
                            dtPartStr = dt.y + "" + pad(dt.m);

                            if(!myMin || +dtPartStr < +myMin) {
                                myMin = dtPartStr;
                            };

                            if(!myMax || +dtPartStr > +myMax) {
                                myMax = dtPartStr;
                            };
                        };
                    };

                    // Round the min & max values to be used as rangeLow & rangeHigh
                    myMin += "" + "01";
                    myMax += "" + daysInMonth(+myMax.substr(4,2) - 1, +myMax.substr(0,4));

                } else if(fmt.y) {
                    for(i = 0; i < selOptions.length; i++) {
                        dt = parseDateString(selOptions[i].value, fmt.value);
                        if(dt.y) {
                            if(!myMin || +dt.y < +myMin) {
                                myMin = dt.y;
                            };

                            if(!myMax || +dt.y > +myMax) {
                                myMax = dt.y;
                            };
                        };
                    };

                    // Round the min & max values to be used as rangeLow & rangeHigh
                    myMin += "" + "0101";
                    myMax += "" + "1231";
                };
            };
        };

        if(!(partsFound.d == 1 && partsFound.m == 1 && partsFound.y == 1)) {
            if(debug) {
                throw "Could not find all of the required date parts within the date format for element: " + elem.id;
            };
            return false;
        };

        options.rangeLow = dateToYYYYMMDD(options.rangeLow || false);
        options.rangeHigh = dateToYYYYMMDD(options.rangeHigh || false);
        options.cursorDate = dateToYYYYMMDD(options.cursorDate || false);
        if(myMin && (!options.rangeLow  || (+options.rangeLow < +myMin))) {
            options.rangeLow = myMin;
        };
        if(myMax && (!options.rangeHigh || (+options.rangeHigh > +myMax))) {
            options.rangeHigh = myMax;
        };

        opts = {
            formElements:options.formElements,
            // default values
            defaultVals:defaultVals,
            // Form element id
            id:options.id,
            // Non popup datepicker required
            staticPos:!!(options.staticPos || options.nopopup),
            // Position static datepicker or popup datepicker's button
            positioned:options.positioned && document.getElementById(options.positioned) ? options.positioned : "",
            // Ranges stipulated in YYYYMMDD format
            rangeLow:options.rangeLow && String(options.rangeLow).search(rangeRegExp) != -1 ? options.rangeLow : "",
            rangeHigh:options.rangeHigh && String(options.rangeHigh).search(rangeRegExp) != -1 ? options.rangeHigh : "",
            // Status bar format
            statusFormat:options.statusFormat || statusFormat,
            // No fade in/out effect
            noFadeEffect:!!(options.staticPos) ? true : !!(options.noFadeEffect),
            // No drag functionality
            dragDisabled:nodrag || !!(options.staticPos) ? true : !!(options.dragDisabled),
            // Bespoke tabindex for this datePicker (or its activation button)
            bespokeTabIndex:options.bespokeTabindex && typeof options.bespokeTabindex == 'number' ? parseInt(options.bespokeTabindex, 10) : 0,
            // Bespoke titles
            bespokeTitles:options.bespokeTitles || (bespokeTitles || {}),
            // Final opacity
            finalOpacity:options.finalOpacity && typeof options.finalOpacity == 'number' && (options.finalOpacity > 20 && options.finalOpacity <= 100) ? parseInt(+options.finalOpacity, 10) : (!!(options.staticPos) ? 100 : finalOpacity),
            // Do we hide the form elements on datepicker creation
            hideInput:!!(options.hideInput),
            // Do we hide the "today" button
            noToday:!!(options.noTodayButton),
            // Do we show week numbers
            showWeeks:!!(options.showWeeks),
            // Do we fill the entire grid with dates
            fillGrid:!!(options.fillGrid),
            // Do we constrain selection of dates outside the current month
            constrainSelection:"constrainSelection" in options ? !!(options.constrainSelection) : true,
            // The date to set the initial cursor to
            cursorDate:options.cursorDate && String(options.cursorDate).search(rangeRegExp) != -1 ? options.cursorDate : "",
            // Locate label to set the ARIA labelled-by property
            labelledBy:findLabelForElement(elem),
            // Have we been passed a describedBy to set the ARIA decribed-by property...
            describedBy:(options.describedBy && document.getElementById(options.describedBy)) ? options.describedBy : describedBy && document.getElementById(describedBy) ? describedBy : "",
            // Callback functions
            callbacks:options.callbackFunctions ? options.callbackFunctions : {},
            // Days of the week to highlight (normally the weekend)
            highlightDays:options.highlightDays && options.highlightDays.length && options.highlightDays.length == 7 ? options.highlightDays : [0,0,0,0,0,1,1],
            // Days of the week to disable
            disabledDays:options.disabledDays && options.disabledDays.length && options.disabledDays.length == 7 ? options.disabledDays : [0,0,0,0,0,0,0],
            // A bespoke class to give the datepicker
            bespokeClass:options.bespokeClass ? " " + options.bespokeClass : ""
        };

        datePickers[options.id] = new datePicker(opts);

        if("disabledDates" in options && !(options.disabledDates === false)) {
            datePickers[options.id].setDisabledDates(options.disabledDates)
        };

        if("enabledDates" in options && !(options.enabledDates === false)) {
            datePickers[options.id].setEnabledDates(options.enabledDates)
        };

        datePickers[options.id].callback("create", datePickers[options.id].createCbArgObj());
    };

    // Used by the button to dictate whether to open or close the datePicker
    var isVisible = function(id) {
        return (!id || !(id in datePickers)) ? false : datePickers[id].visible;
    };

    var updateStatic = function() {
        var dp;
        for(dp in datePickers) {
            if(datePickers.hasOwnProperty(dp)) {
                datePickers[dp].changeHandler();
            };
        };
    };

    var testCSSAnimationSupport = function() {
        var domPrefixes     = ["Webkit","Moz", "ms", "O"],
            elm             = document.createElement('div'),
            transitions     = ["WebkitTransition", "transition", "OTransition", "MozTransition", "msTransition"],
            t;

        for(t = 0; t < transitions.length; t++) {
            if(transitions[t] in elm.style) {
                transitionEnd = transitions[t] == "webkitTransition" || transitions[t] == "OTransition" ? transitions[t] + "End" : "transitionend"
                break;
            }
        }

        if(!transitionEnd) {
            return false;
        };

        if(elm.style.animationName) { return true; }

        for( var i = 0; i < domPrefixes.length; i++ ) {
            if(elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
                return true;
            };
        };

        return false;
    };

    addEvent(window, 'unload', destroy);
    addEvent(window, "load", function() { setTimeout(updateStatic, 0); });

    // Add oldie class if needed for IE < 9
    if(oldIE) {
        addClass(document.documentElement, "oldie");
    };

    return {
        // General event functions...
        addEvent:               function(obj, type, fn) { return addEvent(obj, type, fn); },
        removeEvent:            function(obj, type, fn) { return removeEvent(obj, type, fn); },
        stopEvent:              function(e) { return stopEvent(e); },
        // Show a single popup datepicker
        show:                   function(inpID) { return showDatePicker(inpID, false); },
        // Hide a popup datepicker
        hide:                   function(inpID) { return hideDatePicker(inpID); },
        // Create a new datepicker
        createDatePicker:       function(options) { addDatePicker(options); },
        // Destroy a datepicker (remove events and DOM nodes)
        destroyDatePicker:      function(inpID) { destroySingleDatePicker(inpID); },
        // Check datePicker form elements exist, if not, destroy the datepicker
        cleanUp:                function() { cleanUp(); },
        // Pretty print a date object according to the format passed in
        printFormattedDate:     function(dt, fmt, useImportedLocale) { return printFormattedDate(dt, fmt, useImportedLocale); },
        // Update the internal date using the form element value
        setDateFromInput:       function(inpID) { if(!inpID || !(inpID in datePickers)) return false; datePickers[inpID].setDateFromInput(); },
        // Set low and high date ranges
        setRangeLow:            function(inpID, yyyymmdd) { if(!inpID || !(inpID in datePickers)) { return false; }; datePickers[inpID].setRangeLow(dateToYYYYMMDD(yyyymmdd)); },
        setRangeHigh:           function(inpID, yyyymmdd) { if(!inpID || !(inpID in datePickers)) { return false; }; datePickers[inpID].setRangeHigh(dateToYYYYMMDD(yyyymmdd)); },
        // Set bespoke titles for a datepicker instance
        setBespokeTitles:       function(inpID, titles) {if(!inpID || !(inpID in datePickers)) { return false; }; datePickers[inpID].setBespokeTitles(titles); },
        // Add bespoke titles for a datepicker instance
        addBespokeTitles:       function(inpID, titles) {if(!inpID || !(inpID in datePickers)) { return false; }; datePickers[inpID].addBespokeTitles(titles); },
        // Attempt to parse a valid date from a date string using the passed in format
        parseDateString:        function(str, format) { return parseDateString(str, format); },
        // Change global configuration parameters
        setGlobalOptions:       function(json) { affectJSON(json); },
        // Forces the datepickers "selected" date
        setSelectedDate:        function(inpID, yyyymmdd) { if(!inpID || !(inpID in datePickers)) { return false; }; datePickers[inpID].setSelectedDate(dateToYYYYMMDD(yyyymmdd)); },
        // Is the date valid for selection i.e. not outside ranges etc
        dateValidForSelection:  function(inpID, dt) { if(!inpID || !(inpID in datePickers)) return false; return datePickers[inpID].canDateBeSelected(dt); },
        // Add disabled and enabled dates
        addDisabledDates:       function(inpID, dts) { if(!inpID || !(inpID in datePickers)) return false; datePickers[inpID].addDisabledDates(dts); },
        setDisabledDates:       function(inpID, dts) { if(!inpID || !(inpID in datePickers)) return false; datePickers[inpID].setDisabledDates(dts); },
        addEnabledDates:        function(inpID, dts) { if(!inpID || !(inpID in datePickers)) return false; datePickers[inpID].addEnabledDates(dts); },
        setEnabledDates:        function(inpID, dts) { if(!inpID || !(inpID in datePickers)) return false; datePickers[inpID].setEnabledDates(dts); },
        // Disable and enable the datepicker
        disable:                function(inpID) { if(!inpID || !(inpID in datePickers)) return false; datePickers[inpID].disableDatePicker(); },
        enable:                 function(inpID) { if(!inpID || !(inpID in datePickers)) return false; datePickers[inpID].enableDatePicker(); },
        // Set the cursor date
        setCursorDate:          function(inpID, yyyymmdd) { if(!inpID || !(inpID in datePickers)) return false; datePickers[inpID].setCursorDate(dateToYYYYMMDD(yyyymmdd)); },
        // Whats the currently selected date
        getSelectedDate:        function(inpID) { return (!inpID || !(inpID in datePickers)) ? false : datePickers[inpID].returnSelectedDate(); },
        // Attempt to update the language (causes a redraw of all datepickers on the page)
        loadLanguage:           function() { loadLanguage(); },
        // Set the debug level i.e. throw errors or fail silently
        setDebug:               function(dbg) { debug = !!(dbg); },
        // Converts Date Object to a YYYYMMDD formatted String
        dateToYYYYMMDDStr:      function(dt) { return dateToYYYYMMDD(dt); }
    };
})();

/*
 *  Remodal - v0.5.0
 *  Flat, responsive, lightweight, easy customizable modal window plugin with declarative state notation and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function(a){"use strict";function b(a){var b,c,d,e,f=a.css("transition-duration")||a.css("-webkit-transition-duration")||a.css("-moz-transition-duration")||a.css("-o-transition-duration")||a.css("-ms-transition-duration")||"0s",g=a.css("transition-delay")||a.css("-webkit-transition-delay")||a.css("-moz-transition-delay")||a.css("-o-transition-delay")||a.css("-ms-transition-delay")||"0s";for(f=f.split(", "),g=g.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;c>e;e++)d=parseFloat(f[e])+parseFloat(g[e]),d>b&&(b=d);return 1e3*d}function c(){if(a(document.body).height()<=a(window).height())return 0;var b,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),b=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),b-c}function d(){var b=a(document.body),d=parseInt(b.css("padding-right"),10)+c();b.css("padding-right",d+"px"),a("html").addClass(k+"-is-locked")}function e(){var b=a(document.body),d=parseInt(b.css("padding-right"),10)-c();b.css("padding-right",d+"px"),a("html").removeClass(k+"-is-locked")}function f(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;c>e;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||("false"===d?!1:d)),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function g(c,d){var e,f,g,h=this;h.settings=a.extend({},l,d),h.$body=a(document.body),h.$overlay=a("."+k+"-overlay"),h.$overlay.length||(h.$overlay=a("<div>").addClass(k+"-overlay"),h.$body.append(h.$overlay)),h.$bg=a("."+k+"-bg"),h.$closeButton=a("<a href='#'></a>").addClass(k+"-close"),h.$wrapper=a("<div>").addClass(k+"-wrapper"),h.$modal=c,h.$modal.addClass(k),h.$modal.css("visibility","visible"),h.$modal.append(h.$closeButton),h.$wrapper.append(h.$modal),h.$body.append(h.$wrapper),h.$confirmButton=h.$modal.find("."+k+"-confirm"),h.$cancelButton=h.$modal.find("."+k+"-cancel"),e=b(h.$overlay),f=b(h.$modal),g=b(h.$bg),h.td=f>e?f:e,h.td=g>h.td?g:h.td,h.$closeButton.bind("click."+k,function(a){a.preventDefault(),h.close()}),h.$cancelButton.bind("click."+k,function(a){a.preventDefault(),h.$modal.trigger("cancel"),h.settings.closeOnCancel&&h.close("cancellation")}),h.$confirmButton.bind("click."+k,function(a){a.preventDefault(),h.$modal.trigger("confirm"),h.settings.closeOnConfirm&&h.close("confirmation")}),a(document).bind("keyup."+k,function(a){27===a.keyCode&&h.settings.closeOnEscape&&h.close()}),h.$wrapper.bind("click."+k,function(b){var c=a(b.target);c.hasClass(k+"-wrapper")&&h.settings.closeOnAnyClick&&h.close()}),h.index=a[k].lookup.push(h)-1,h.busy=!1}function h(b,c){var d,e,f=location.hash.replace("#","");if("undefined"==typeof c&&(c=!0),f){try{e=a("[data-"+k+"-id="+f.replace(new RegExp("/","g"),"\\/")+"]")}catch(g){}e&&e.length&&(d=a[k].lookup[e.data(k)],d&&d.settings.hashTracking&&d.open())}else c&&i&&!i.busy&&i.settings.hashTracking&&i.close()}var i,j,k="remodal",l={hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnAnyClick:!0};g.prototype.open=function(){if(!this.busy){var b,c=this;c.busy=!0,c.$modal.trigger("open"),b=c.$modal.attr("data-"+k+"-id"),b&&c.settings.hashTracking&&(j=a(window).scrollTop(),location.hash=b),i&&i!==c&&(i.$overlay.hide(),i.$wrapper.hide(),i.$body.removeClass(k+"-is-active")),i=c,d(),c.$overlay.show(),c.$wrapper.show(),setTimeout(function(){c.$body.addClass(k+"-is-active"),setTimeout(function(){c.busy=!1,c.$modal.trigger("opened")},c.td+50)},25)}},g.prototype.close=function(b){if(!this.busy){this.busy=!0,this.$modal.trigger({type:"close",reason:b});var c=this;c.settings.hashTracking&&c.$modal.attr("data-"+k+"-id")===location.hash.substr(1)&&(location.hash="",a(window).scrollTop(j)),c.$body.removeClass(k+"-is-active"),setTimeout(function(){c.$overlay.hide(),c.$wrapper.hide(),e(),c.busy=!1,c.$modal.trigger({type:"closed",reason:b})},c.td+50)}},a[k]={lookup:[]},a.fn[k]=function(b){var c,d;return this.each(function(e,f){d=a(f),null==d.data(k)?(c=new g(d,b),d.data(k,c.index),c.settings.hashTracking&&d.attr("data-"+k+"-id")===location.hash.substr(1)&&c.open()):c=a[k].lookup[d.data(k)]}),c},a(document).ready(function(){a(document).on("click","[data-"+k+"-target]",function(b){b.preventDefault();var c=b.currentTarget,d=c.getAttribute("data-"+k+"-target"),e=a("[data-"+k+"-id="+d+"]");a[k].lookup[e.data(k)].open()}),a(document).find("."+k).each(function(b,c){var d=a(c),e=d.data(k+"-options");e?("string"==typeof e||e instanceof String)&&(e=f(e)):e={},d[k](e)})}),a(window).bind("hashchange."+k,h)}(window.jQuery||window.Zepto);