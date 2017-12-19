/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*! jQuery Migrate v3.0.1 | (c) jQuery Foundation and other contributors | jquery.org/license */

void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], window, e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery"), window) : e(jQuery, window);
}(function(e, t) {
    "use strict";
    function r(r) {
        var n = t.console;
        o[r] || (o[r] = !0, e.migrateWarnings.push(r), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + r), 
        e.migrateTrace && n.trace && n.trace()));
    }
    function n(e, t, n, a) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r(a), n;
            },
            set: function(e) {
                r(a), n = e;
            }
        });
    }
    function a(e, t, n, a) {
        e[t] = function() {
            return r(a), n.apply(this, arguments);
        };
    }
    e.migrateVersion = "3.0.1", function() {
        var r = /^[12]\./;
        t.console && t.console.log && (e && !r.test(e.fn.jquery) || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), 
        e.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), 
        t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion));
    }();
    var o = {};
    e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function() {
        o = {}, e.migrateWarnings.length = 0;
    }, "BackCompat" === t.document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var i = e.fn.init, s = e.isNumeric, u = e.find, c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    e.fn.init = function(e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (r("jQuery( '#' ) is not a valid selector"), 
        t[0] = []), i.apply(this, t);
    }, e.fn.init.prototype = e.fn, e.find = function(e) {
        var n = Array.prototype.slice.call(arguments);
        if ("string" == typeof e && c.test(e)) try {
            t.document.querySelector(e);
        } catch (a) {
            e = e.replace(l, function(e, t, r, n) {
                return "[" + t + r + '"' + n + '"]';
            });
            try {
                t.document.querySelector(e), r("Attribute selector with '#' must be quoted: " + n[0]), 
                n[0] = e;
            } catch (e) {
                r("Attribute selector with '#' was not fixed: " + n[0]);
            }
        }
        return u.apply(this, n);
    };
    var d;
    for (d in u) Object.prototype.hasOwnProperty.call(u, d) && (e.find[d] = u[d]);
    e.fn.size = function() {
        return r("jQuery.fn.size() is deprecated and removed; use the .length property"), 
        this.length;
    }, e.parseJSON = function() {
        return r("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments);
    }, e.isNumeric = function(t) {
        var n = s(t), a = function(t) {
            var r = t && t.toString();
            return !e.isArray(t) && r - parseFloat(r) + 1 >= 0;
        }(t);
        return n !== a && r("jQuery.isNumeric() should not be called on constructed objects"), 
        a;
    }, a(e, "holdReady", e.holdReady, "jQuery.holdReady is deprecated"), a(e, "unique", e.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), 
    n(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), 
    n(e.expr, ":", e.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
    var p = e.ajax;
    e.ajax = function() {
        var e = p.apply(this, arguments);
        return e.promise && (a(e, "success", e.done, "jQXHR.success is deprecated and removed"), 
        a(e, "error", e.fail, "jQXHR.error is deprecated and removed"), a(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), 
        e;
    };
    var f = e.fn.removeAttr, y = e.fn.toggleClass, m = /\S+/g;
    e.fn.removeAttr = function(t) {
        var n = this;
        return e.each(t.match(m), function(t, a) {
            e.expr.match.bool.test(a) && (r("jQuery.fn.removeAttr no longer sets boolean properties: " + a), 
            n.prop(a, !1));
        }), f.apply(this, arguments);
    }, e.fn.toggleClass = function(t) {
        return void 0 !== t && "boolean" != typeof t ? y.apply(this, arguments) : (r("jQuery.fn.toggleClass( boolean ) is deprecated"), 
        this.each(function() {
            var r = this.getAttribute && this.getAttribute("class") || "";
            r && e.data(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : e.data(this, "__className__") || "");
        }));
    };
    var h = !1;
    e.swap && e.each([ "height", "width", "reliableMarginRight" ], function(t, r) {
        var n = e.cssHooks[r] && e.cssHooks[r].get;
        n && (e.cssHooks[r].get = function() {
            var e;
            return h = !0, e = n.apply(this, arguments), h = !1, e;
        });
    }), e.swap = function(e, t, n, a) {
        var o, i, s = {};
        h || r("jQuery.swap() is undocumented and deprecated");
        for (i in t) s[i] = e.style[i], e.style[i] = t[i];
        o = n.apply(e, a || []);
        for (i in t) e.style[i] = s[i];
        return o;
    };
    var g = e.data;
    e.data = function(t, n, a) {
        var o;
        if (n && "object" == typeof n && 2 === arguments.length) {
            o = e.hasData(t) && g.call(this, t);
            var i = {};
            for (var s in n) s !== e.camelCase(s) ? (r("jQuery.data() always sets/gets camelCased names: " + s), 
            o[s] = n[s]) : i[s] = n[s];
            return g.call(this, t, i), n;
        }
        return n && "string" == typeof n && n !== e.camelCase(n) && (o = e.hasData(t) && g.call(this, t)) && n in o ? (r("jQuery.data() always sets/gets camelCased names: " + n), 
        arguments.length > 2 && (o[n] = a), o[n]) : g.apply(this, arguments);
    };
    var v = e.Tween.prototype.run, j = function(e) {
        return e;
    };
    e.Tween.prototype.run = function() {
        e.easing[this.easing].length > 1 && (r("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), 
        e.easing[this.easing] = j), v.apply(this, arguments);
    }, e.fx.interval = e.fx.interval || 13, t.requestAnimationFrame && n(e.fx, "interval", e.fx.interval, "jQuery.fx.interval is deprecated");
    var Q = e.fn.load, b = e.event.add, w = e.event.fix;
    e.event.props = [], e.event.fixHooks = {}, n(e.event.props, "concat", e.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), 
    e.event.fix = function(t) {
        var n, a = t.type, o = this.fixHooks[a], i = e.event.props;
        if (i.length) for (r("jQuery.event.props are deprecated and removed: " + i.join()); i.length; ) e.event.addProp(i.pop());
        if (o && !o._migrated_ && (o._migrated_ = !0, r("jQuery.event.fixHooks are deprecated and removed: " + a), 
        (i = o.props) && i.length)) for (;i.length; ) e.event.addProp(i.pop());
        return n = w.call(this, t), o && o.filter ? o.filter(n, t) : n;
    }, e.event.add = function(e, n) {
        return e === t && "load" === n && "complete" === t.document.readyState && r("jQuery(window).on('load'...) called after load event occurred"), 
        b.apply(this, arguments);
    }, e.each([ "load", "unload", "error" ], function(t, n) {
        e.fn[n] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === n && "string" == typeof e[0] ? Q.apply(this, e) : (r("jQuery.fn." + n + "() is deprecated"), 
            e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), 
            this));
        };
    }), e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
        e.fn[n] = function(e, t) {
            return r("jQuery.fn." + n + "() event shorthand is deprecated"), arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), e(function() {
        e(t.document).triggerHandler("ready");
    }), e.event.special.ready = {
        setup: function() {
            this === t.document && r("'ready' event is deprecated");
        }
    }, e.fn.extend({
        bind: function(e, t, n) {
            return r("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return r("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function(e, t, n, a) {
            return r("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, a);
        },
        undelegate: function(e, t, n) {
            return r("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        hover: function(e, t) {
            return r("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e);
        }
    });
    var x = e.fn.offset;
    e.fn.offset = function() {
        var n, a = this[0], o = {
            top: 0,
            left: 0
        };
        return a && a.nodeType ? (n = (a.ownerDocument || t.document).documentElement, e.contains(n, a) ? x.apply(this, arguments) : (r("jQuery.fn.offset() requires an element connected to a document"), 
        o)) : (r("jQuery.fn.offset() requires a valid DOM element"), o);
    };
    var k = e.param;
    e.param = function(t, n) {
        var a = e.ajaxSettings && e.ajaxSettings.traditional;
        return void 0 === n && a && (r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), 
        n = a), k.call(this, t, n);
    };
    var A = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), 
        A.apply(this, arguments);
    };
    var S = e.Deferred, q = [ [ "resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved" ], [ "reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected" ], [ "notify", "progress", e.Callbacks("memory"), e.Callbacks("memory") ] ];
    return e.Deferred = function(t) {
        var n = S(), a = n.promise();
        return n.pipe = a.pipe = function() {
            var t = arguments;
            return r("deferred.pipe() is deprecated"), e.Deferred(function(r) {
                e.each(q, function(o, i) {
                    var s = e.isFunction(t[o]) && t[o];
                    n[i[1]](function() {
                        var t = s && s.apply(this, arguments);
                        t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[i[0] + "With"](this === a ? r.promise() : this, s ? [ t ] : arguments);
                    });
                }), t = null;
            }).promise();
        }, t && t.call(n, n), n;
    }, e.Deferred.exceptionHook = S.exceptionHook, e;
});
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});
(function($, window, document, undefined) {
    'use strict';

    function CubePortfolio(obj, options, callback) {
        /*jshint validthis: true */
        var t = this;

        if ($.data(obj, 'cubeportfolio')) {
            throw new Error('cubeportfolio is already initialized. Destroy it before initialize again!');
        }

        // js element
        t.obj = obj;

        // jquery element
        t.$obj = $(obj);

        // attached this instance to obj
        $.data(t.obj, 'cubeportfolio', t);

        // extend options
        t.options = $.extend({}, $.fn.cubeportfolio.options, options, t.$obj.data('cbp-options'));

        // store the state of the animation used for filters
        t.isAnimating = true;

        // default filter for plugin
        t.defaultFilter = t.options.defaultFilter;

        // registered events (observator & publisher pattern)
        t.registeredEvents = [];

        // queue for this plugin
        t.queue = [];

        // has wrapper
        t.addedWrapp = false;

        // register callback function
        if ($.isFunction(callback)) {
            t.registerEvent('initFinish', callback, true);
        }

        // when there are no .cbp-item
        var children = t.$obj.children();

        t.$obj.addClass('cbp');

        if (children.length === 0 || children.first().hasClass('cbp-item')) {
            t.wrapInner(t.obj, 'cbp-wrapper');
            t.addedWrapp = true;
        }

        // jquery wrapper element
        t.$ul = t.$obj.children().addClass('cbp-wrapper');

        // wrap the $ul in a outside wrapper
        t.wrapInner(t.obj, 'cbp-wrapper-outer');

        t.wrapper = t.$obj.children('.cbp-wrapper-outer');

        t.blocks = t.$ul.children('.cbp-item');
        t.blocksOn = t.blocks;

        // wrap .cbp-item-wrap div inside .cbp-item
        t.wrapInner(t.blocks, 'cbp-item-wrapper');

        // register and initialize plugins
        t.plugins = $.map(CubePortfolio.plugins, function(pluginName) {
            return pluginName(t);
        });

        // used by the filters plugin. @todo - remove from here and create proper API with position for plugins
        t.triggerEvent('afterPlugins');

        // wait to load all images and then go further
        t.loadImages(t.$obj, t.display);
    }


    $.extend(CubePortfolio.prototype, {
        storeData: function(blocks, indexStart) {
            var t = this;

            indexStart = indexStart || 0; // used by loadMore

            blocks.each(function(index, el) {
                var item = $(el),
                    width = item.width(),
                    height = item.height();

                item.data('cbp', {
                    index: indexStart + index, // used when I sort the items and I need them to revert that sorting
                    wrapper: item.children('.cbp-item-wrapper'),

                    widthInitial: width,
                    heightInitial: height,

                    width: width, // used by drag & drop wp @todo - maybe I will use widthAndGap
                    height: height,

                    widthAndGap: width + t.options.gapVertical,
                    heightAndGap: height + t.options.gapHorizontal,

                    left: null,
                    leftNew: null,
                    top: null,
                    topNew: null,

                    pack: false,
                });
            });
        },


        // http://bit.ly/pure-js-wrap
        wrapInner: function(items, classAttr) {
            var t = this,
                item, i, div;

            classAttr = classAttr || '';

            if (items.length && items.length < 1) {
                return; // there are no .cbp-item
            } else if (items.length === undefined) {
                items = [items];
            }

            for (i = items.length - 1; i >= 0; i--) {
                item = items[i];

                div = document.createElement('div');

                div.setAttribute('class', classAttr);

                while (item.childNodes.length) {
                    div.appendChild(item.childNodes[0]);
                }

                item.appendChild(div);
            }
        },

        removeAttrImage: function(img) {
            img.removeAttribute('width');
            img.removeAttribute('height');
            img.removeAttribute('style');
        },


        /**
         * Wait to load all images
         */
        loadImages: function(elems, callback) {
            var t = this;

            // wait a frame (Safari bug)
            requestAnimationFrame(function() {
                var imgs = elems.find('img').map(function(index, el) {
                    // don't wait for images that have a width & height defined
                    if (el.hasAttribute('width') && el.hasAttribute('height')) {
                        el.style.width = el.getAttribute('width') + 'px';
                        el.style.height = el.getAttribute('height') + 'px';

                        if (el.hasAttribute('data-cbp-src')) {
                            return null;
                        }

                        if (t.checkSrc(el) === null) {
                            t.removeAttrImage(el);
                        } else {
                            var img = $('<img>');

                            img.on('load.cbp error.cbp', function() {
                                $(this).off('load.cbp error.cbp');
                                t.removeAttrImage(el);
                            });

                            if(el.srcset){
                                img.attr('sizes', el.sizes || '100vw');
                                img.attr('srcset', el.srcset);
                            } else {
                                img.attr('src', el.src);
                            }
                        }

                        return null;
                    } else {
                        return t.checkSrc(el);
                    }
                });

                var imgsLength = imgs.length;

                if (imgsLength === 0) {
                    callback.call(t);
                    return;
                }

                $.each(imgs, function(i, el) {
                    var img = $('<img>');

                    img.on('load.cbp error.cbp', function() {
                        $(this).off('load.cbp error.cbp');

                        imgsLength--;

                        if (imgsLength === 0) {
                            callback.call(t);
                        }
                    });

                    // ie8 compatibility
                    if(el.srcset){
                        img.attr('sizes', el.sizes);
                        img.attr('srcset', el.srcset);
                    } else {
                        img.attr('src', el.src);
                    }
                });
            });
        },


        checkSrc: function(el) {
            var srcset = el.srcset;
            var src = el.src;

            if (src === '') {
                return null;
            }

            var img = $('<img>');

            if(srcset){
                img.attr('sizes', el.sizes || '100vw');
                img.attr('srcset', srcset);
            } else {
                img.attr('src', src);
            }

            var node = img[0];

            if (node.complete && node.naturalWidth !== undefined && node.naturalWidth !== 0) {
                return null;
            }

            return node;
        },


        /**
         * Show the plugin
         */
        display: function() {
            var t = this;

            // store to data values of t.blocks
            t.storeData(t.blocks);

            t.triggerEvent('initStartRead');
            t.triggerEvent('initStartWrite');

            // make layout
            t.layoutAndAdjustment();

            t.triggerEvent('initEndRead');
            t.triggerEvent('initEndWrite');

            // plugin is ready to show and interact
            t.$obj.addClass('cbp-ready');

            t.runQueue('delayFrame', t.delayFrame);
        },


        delayFrame: function() {
            var t = this;

            requestAnimationFrame(function() {
                t.resizeEvent();

                t.triggerEvent('initFinish');

                // animating is now false
                t.isAnimating = false;

                // trigger public event initComplete
                t.$obj.trigger('initComplete.cbp');
            });
        },


        /**
         * Add resize event when browser width changes
         */
        resizeEvent: function() {
            var t = this;

            CubePortfolio.private.resize.initEvent({
                instance: t,
                fn: function() {
                    // used by wp fullWidth force option
                    t.triggerEvent('beforeResizeGrid');

                    if (t.width !== t.$obj.outerWidth()) {

                        if (t.options.gridAdjustment === 'alignCenter') {
                            t.wrapper[0].style.maxWidth = '';
                        }

                        // reposition the blocks with gridAdjustment set to true
                        t.layoutAndAdjustment();

                        t.triggerEvent('resizeGrid');
                    }

                    t.triggerEvent('resizeWindow');
                }
            });
        },


        gridAdjust: function() {
            var t = this;

            // update the current grid width
            t.width = t.$obj.outerWidth();

            // if responsive
            if (t.options.gridAdjustment === 'responsive') {
                t.responsiveLayout();
            } else {
                // reset the style attribute for all blocks so I can read a new width & height
                // for the current grid width. This is usefull for the styles defined in css
                // to create a custom responsive system.
                // Note: reset height if it was set for addHeightToBlocks
                t.blocks.removeAttr('style');

                t.blocks.each(function(index, el) {
                    var data = $(el).data('cbp'),
                        bound = el.getBoundingClientRect(),
                        width = t.columnWidthTruncate(bound.right - bound.left),
                        height = Math.round(bound.bottom - bound.top);

                    data.height = height;
                    data.heightAndGap = height + t.options.gapHorizontal;

                    data.width = width;
                    data.widthAndGap = width + t.options.gapVertical;
                });

                t.widthAvailable = t.width + t.options.gapVertical;
            }

            // used by slider layoutMode
            t.triggerEvent('gridAdjust');
        },


        layoutAndAdjustment: function() {
            var t = this;

            t.gridAdjust();

            t.layout();
        },


        /**
         * Build the layout
         */
        layout: function() {
            var t = this;

            t.computeBlocks(t.filterConcat(t.defaultFilter));

            if (t.options.layoutMode === 'slider') {
                t.sliderLayoutReset();
                t.sliderLayout();
            } else {
                t.mosaicLayoutReset();
                t.mosaicLayout();
            }

            // positionate the blocks
            t.positionateItems();

            // resize main container height
            t.resizeMainContainer();
        },


        computeFilter: function(expression) {
            var t = this;

            t.computeBlocks(expression);

            t.mosaicLayoutReset();
            t.mosaicLayout();

            // filter call layout
            t.filterLayout();
        },


        /**
         *  Default filter layout if nothing overrides
         */
        filterLayout: function() {
            var t = this;

            t.blocksOff.addClass('cbp-item-off');

            t.blocksOn.removeClass('cbp-item-off')
                .each(function(index, el) {
                    var data = $(el).data('cbp');

                    data.left = data.leftNew;
                    data.top = data.topNew;

                    el.style.left = data.left + 'px';
                    el.style.top = data.top + 'px';
                });

            // resize main container height
            t.resizeMainContainer();

            t.filterFinish();
        },


        /**
         *  Trigger when a filter is finished
         */
        filterFinish: function() {
            var t = this;

            // if blocks are sorted (the index ascending is broken) revert
            // this state so the index is ascending again
            if (t.blocksAreSorted) {
                t.sortBlocks(t.blocks, 'index');
            }

            t.isAnimating = false;

            t.$obj.trigger('filterComplete.cbp');
            t.triggerEvent('filterFinish');
        },


        computeBlocks: function(expression) {
            var t = this;

            // blocks that are visible before applying the filter
            t.blocksOnInitial = t.blocksOn;

            // blocks visible after applying the filter
            t.blocksOn = t.blocks.filter(expression);

            // blocks off after applying the filter
            t.blocksOff = t.blocks.not(expression);

            t.triggerEvent('computeBlocksFinish', expression);
        },


        /**
         * Make this plugin responsive
         */
        responsiveLayout: function() {
            var t = this;

            // calculate numbers of cols
            t.cols = t[($.isArray(t.options.mediaQueries) ? 'getColumnsBreakpoints' : 'getColumnsAuto')]();

            t.columnWidth = t.columnWidthTruncate((t.width + t.options.gapVertical) / t.cols);

            t.widthAvailable = t.columnWidth * t.cols;

            if (t.options.layoutMode === 'mosaic') {
                t.getMosaicWidthReference();
            }

            t.blocks.each(function(index, el) {
                var data = $(el).data('cbp'),
                    cols = 1, // grid & slider layoutMode must be 1
                    width;

                if (t.options.layoutMode === 'mosaic') {
                    cols = t.getColsMosaic(data.widthInitial);
                }

                width = t.columnWidth * cols - t.options.gapVertical;

                el.style.width = width + 'px';
                data.width = width;
                data.widthAndGap = width + t.options.gapVertical;

                // reset height if it was set for addHeightToBlocks
                el.style.height = '';
            });

            var imgs = [];

            t.blocks.each(function(index, el) {
                var block = $(el),
                    width = block.data('cbp').width;

                $.each(block.find('img').filter('[width][height]'), function(index, el) {
                    var imgWidth = parseInt(el.getAttribute('width'), 10);
                    var imgHeight = parseInt(el.getAttribute('height'), 10);
                    var ratio = parseFloat((imgWidth / imgHeight).toFixed(10));

                    imgs.push({
                        el: el,
                        width: width,
                        height: Math.round(width / ratio),
                    });
                });
            });

            $.each(imgs, function(index, item) {
                 item.el.width = item.width;
                 item.el.height = item.height;
                 item.el.style.width = item.width + 'px';
                 item.el.style.height = item.height + 'px';
            });

            t.blocks.each(function(index, el) {
                var data = $(el).data('cbp'),
                    bound = el.getBoundingClientRect(),
                    height = Math.round(bound.bottom - bound.top);

                data.height = height;
                data.heightAndGap = height + t.options.gapHorizontal;
            });
        },


        getMosaicWidthReference: function() {
            var t = this,
                arrWidth = [];

            t.blocks.each(function(index, el) {
                var data = $(el).data('cbp');
                arrWidth.push(data.widthInitial);
            });

            arrWidth.sort(function(a, b) {
                return a - b;
            });

            if (arrWidth[0]) {
                t.mosaicWidthReference = arrWidth[0];
            } else {
                t.mosaicWidthReference = t.columnWidth;
            }
        },


        getColsMosaic: function(widthInitial) {
            var t = this;

            if (widthInitial === t.width) {
                return t.cols;
            }

            var ratio = widthInitial / t.mosaicWidthReference;

            if (ratio % 1 >= 0.79) {
                ratio = Math.ceil(ratio);
            } else {
                ratio = Math.floor(ratio);
            }

            return Math.min(Math.max(ratio, 1), t.cols);
        },


        /**
         * Get numbers of columns when t.options.mediaQueries is not an array
         */
        getColumnsAuto: function() {
            var t = this;

            if (t.blocks.length === 0) {
                return 1;
            }

            var columnWidth = t.blocks.first().data('cbp').widthInitial + t.options.gapVertical;

            return Math.max(Math.round(t.width / columnWidth), 1);
        },


        /**
         * Get numbers of columns if t.options.mediaQueries is an array
         */
        getColumnsBreakpoints: function() {
            var t = this,
                gridWidth = t.width,
                mediaQuery;

            $.each(t.options.mediaQueries, function(index, obj) {
                if (gridWidth >= obj.width) {
                    mediaQuery = obj;
                    return false;
                }
            });

            if (!mediaQuery) {
                mediaQuery = t.options.mediaQueries[t.options.mediaQueries.length - 1];
            }

            // the columns breakpoints is triggered
            t.triggerEvent('onMediaQueries', mediaQuery.options);

            return mediaQuery.cols;
        },


        /**
         *  Defines how the columns dimension & position (width, left) will be truncated
         *
         *  If you use `Math.*` there could be some issues with the items on the right side
         *  that can have some pixels hidden(1 or 2, depends on the number of columns)
         *  but this is a known limitation.
         *
         *  If you don't use the built-in captions effects (overlay at hover over an item) returning
         *  the possibly floated values may be a solution for the pixels hidden on the right side.
         *
         *  The column width must be an integer because browsers have some visual issues
         *  with transform properties for caption effects.
         *
         *  The initial behaviour was return Math.floor
         *
         */
        columnWidthTruncate: function(value) {
            return Math.floor(value);
        },


        positionateItems: function() {
            var t = this,
                data;

            t.blocksOn.removeClass('cbp-item-off')
                .each(function(index, el) {
                    data = $(el).data('cbp');

                    data.left = data.leftNew;
                    data.top = data.topNew;

                    el.style.left = data.left + 'px';
                    el.style.top = data.top + 'px';
                });

            t.blocksOff.addClass('cbp-item-off');

            // if blocks are sorted (the index ascending is broken) revert
            // this state so the index is ascending again
            if (t.blocksAreSorted) {
                t.sortBlocks(t.blocks, 'index');
            }
        },


        /**
         * Resize main container vertically
         */
        resizeMainContainer: function() {
            var t = this,
                height = Math.max(t.freeSpaces.slice(-1)[0].topStart - t.options.gapHorizontal, 0),
                maxWidth;

            // set max-width to center the grid if I need to
            if (t.options.gridAdjustment === 'alignCenter') {
                maxWidth = 0;

                t.blocksOn.each(function(index, el) {
                    var data = $(el).data('cbp'),
                        rightEdge = data.left + data.width;

                    if (rightEdge > maxWidth) {
                        maxWidth = rightEdge;
                    }
                });

                t.wrapper[0].style.maxWidth = maxWidth + 'px';
            }

            // set container height for `overflow: hidden` to be applied
            if (height === t.height) {
                t.triggerEvent('resizeMainContainer');
                return;
            }

            t.obj.style.height = height + 'px';

            // if resizeMainContainer is called for the first time skip this event trigger
            if (t.height !== undefined) {
                if (CubePortfolio.private.modernBrowser) {
                    t.$obj.one(CubePortfolio.private.transitionend, function() {
                        t.$obj.trigger('pluginResize.cbp');
                    });
                } else {
                    t.$obj.trigger('pluginResize.cbp');
                }
            }

            t.height = height;

            t.triggerEvent('resizeMainContainer');
        },


        filterConcat: function(filter) {
            return filter.replace(/\|/gi, '');
        },


        pushQueue: function(name, deferred) {
            var t = this;

            t.queue[name] = t.queue[name] || [];
            t.queue[name].push(deferred);
        },


        runQueue: function(name, fn) {
            var t = this,
                queue = t.queue[name] || [];

            $.when.apply($, queue).then($.proxy(fn, t));
        },


        clearQueue: function(name) {
            var t = this;

            t.queue[name] = [];
        },


        /**
         *  Register event
         */
        registerEvent: function(name, callbackFunction, oneTime) {
            var t = this;

            if (!t.registeredEvents[name]) {
                t.registeredEvents[name] = [];
            }

            t.registeredEvents[name].push({
                func: callbackFunction,
                oneTime: oneTime || false
            });
        },


        /**
         *  Trigger event
         */
        triggerEvent: function(name, param) {
            var t = this,
                i, len;

            if (t.registeredEvents[name]) {
                for (i = 0, len = t.registeredEvents[name].length; i < len; i++) {
                    t.registeredEvents[name][i].func.call(t, param);

                    if (t.registeredEvents[name][i].oneTime) {
                        t.registeredEvents[name].splice(i, 1);
                        // function splice change the t.registeredEvents[name] array
                        // if event is one time you must set the i to the same value
                        // next time and set the length lower
                        i--;
                        len--;
                    }
                }
            }
        },


        addItems: function(items, callback, position) {
            var t = this;

            // wrap .cbp-item-wrap div inside .cbp-item
            t.wrapInner(items, 'cbp-item-wrapper');

            t.$ul[position](items.addClass('cbp-item-loading').css({
                top: '100%',
                left: 0
            }));

            if (CubePortfolio.private.modernBrowser) {
                items.last().one(CubePortfolio.private.animationend, function() {
                    t.addItemsFinish(items, callback);
                });
            } else {
                t.addItemsFinish(items, callback); // @todo - on ie8 & ie9 callback triggers to early
            }

            t.loadImages(items, function() {
                t.$obj.addClass('cbp-updateItems');

                if (position === 'append') {
                    // push to data values of items
                    t.storeData(items, t.blocks.length);
                    $.merge(t.blocks, items);
                } else {
                    // push to data values of items
                    t.storeData(items);

                    var itemsLen = items.length;
                    t.blocks.each(function(index, el) {
                        $(el).data('cbp').index = itemsLen + index;
                    });

                    // push the new items to t.blocks
                    t.blocks = $.merge(items, t.blocks);
                }

                t.triggerEvent('addItemsToDOM', items);

                t.layoutAndAdjustment();

                // if show count was actived, call show count function again
                if (t.elems) {
                    CubePortfolio.public.showCounter.call(t.obj, t.elems);
                }
            });
        },


        addItemsFinish: function(items, callback) {
            var t = this;

            t.isAnimating = false;

            t.$obj.removeClass('cbp-updateItems');
            items.removeClass('cbp-item-loading');

            if ($.isFunction(callback)) {
                callback.call(t, items);
            }

            // trigger public event onAfterLoadMore
            t.$obj.trigger('onAfterLoadMore.cbp', [items]);
        },

        removeItems: function (items, callback) {
            var t = this;

            t.$obj.addClass('cbp-updateItems');

            if (CubePortfolio.private.modernBrowser) {
                items.last().one(CubePortfolio.private.animationend, function() {
                    t.removeItemsFinish(items, callback);
                });
            } else {
                t.removeItemsFinish(items, callback); // @todo - on ie8 & ie9 callback triggers to early
            }

            items.each(function(index, el) {
                t.blocks.each(function(index2, el2) {
                    if (el === el2) {
                        var removeEl = $(el2);

                        // remove element from blocks
                        t.blocks.splice(index2, 1);

                        if (CubePortfolio.private.modernBrowser) {
                            removeEl.one(CubePortfolio.private.animationend, function() {
                                removeEl.remove();
                            });
                            removeEl.addClass('cbp-removeItem');
                        } else {
                            removeEl.remove();
                        }
                    }
                });
            });

            t.blocks.each(function(index, el) {
                $(el).data('cbp').index = index;
            });

            t.layoutAndAdjustment();

            // if show count was actived, call show count function again
            if (t.elems) {
                CubePortfolio.public.showCounter.call(t.obj, t.elems);
            }
        },


        removeItemsFinish: function(items, callback) {
            var t = this;

            t.isAnimating = false;

            t.$obj.removeClass('cbp-updateItems');

            if ($.isFunction(callback)) {
                callback.call(t, items);
            }
        },
    });


    /**
     * jQuery plugin initializer
     */
    $.fn.cubeportfolio = function(method, options, callback) {
        return this.each(function() {
            if (typeof method === 'object' || !method) {
                return CubePortfolio.public.init.call(this, method, options);
            } else if (CubePortfolio.public[method]) {
                return CubePortfolio.public[method].call(this, options, callback);
            }

            throw new Error('Method ' + method + ' does not exist on jquery.cubeportfolio.js');
        });
    };

    CubePortfolio.plugins = {};
    $.fn.cubeportfolio.constructor = CubePortfolio;
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    $.extend(CubePortfolio.prototype, {
        mosaicLayoutReset: function() {
            var t = this;

            // flag to be set after the blocks sorting is done
            t.blocksAreSorted = false;

            // when I start the layout again all blocks must not be positionated
            // reset height if it was set for addHeightToBlocks
            t.blocksOn.each(function(index, el) {
                $(el).data('cbp').pack = false;

                if (t.options.sortToPreventGaps) {
                    el.style.height = '';
                }
            });

            // array of objects where I keep the spaces available in the grid
            t.freeSpaces = [{
                leftStart: 0,
                leftEnd: t.widthAvailable,
                topStart: 0,
                topEnd: Math.pow(2, 18) // @todo - optimize
            }];
        },


        mosaicLayout: function() {
            var t = this;

            for (var i = 0, blocksLen = t.blocksOn.length; i < blocksLen; i++) {
                var spaceIndexAndBlock = t.getSpaceIndexAndBlock();

                // if space or block are null then start sorting
                if (spaceIndexAndBlock === null) {
                    t.mosaicLayoutReset();

                    // sort blocks
                    t.sortBlocksToPreventGaps();

                    // after the sort is finished start the layout again
                    t.mosaicLayout();

                    return;
                }

                t.generateF1F2(spaceIndexAndBlock.spaceIndex, spaceIndexAndBlock.dataBlock);

                t.generateG1G2G3G4(spaceIndexAndBlock.dataBlock);

                t.cleanFreeSpaces();

                t.addHeightToBlocks();
            }

            // sort the blocks from top to bottom to add properly displayAnimation and animationType
            if (t.blocksAreSorted) {
                t.sortBlocks(t.blocksOn, 'topNew');
            }
        },


        /**
         * Chose from freeSpaces the best space available
         * Find block by verifying if it can fit in bestSpace(top-left space available)
         * If block doesn't fit in the first space available & t.options.sortToPreventGaps
         * is set to true then sort the blocks and start the layout once again
         * Decide the free rectangle Fi from F to pack the rectangle R into.
         */
        getSpaceIndexAndBlock: function() {
            var t = this,
                spaceIndexAndBlock = null;

            $.each(t.freeSpaces, function(index1, space) {
                var widthSpace = space.leftEnd - space.leftStart,
                    heightSpace = space.topEnd - space.topStart;

                t.blocksOn.each(function(index2, block) {
                    var data = $(block).data('cbp');

                    if (data.pack === true) {
                        return;
                    }

                    if (data.widthAndGap <= widthSpace && data.heightAndGap <= heightSpace) {
                        // now the rectagle can be positioned
                        data.pack = true;

                        spaceIndexAndBlock = {
                            spaceIndex: index1,
                            dataBlock: data
                        };

                        data.leftNew = space.leftStart;
                        data.topNew = space.topStart;

                        // if the block is founded => return from this loop
                        return false;
                    }
                });

                // if first space don't have a block and sortToPreventGaps is true => return from loop
                if (!t.blocksAreSorted && t.options.sortToPreventGaps && index1 > 0) {
                    spaceIndexAndBlock = null;

                    return false;
                }

                // if space & block is founded => return from loop
                if (spaceIndexAndBlock !== null) {
                    return false;
                }
            });

            return spaceIndexAndBlock;
        },


        /**
         * Use the MAXRECTS split scheme to subdivide Fi(space) into F1 and F2 and
         * then remove that space from spaces
         * Insert F1 & F2 in F in place of Fi
         */
        generateF1F2: function(spaceIndex, block) {
            var t = this,
                space = t.freeSpaces[spaceIndex];

            var F1 = {
                leftStart: space.leftStart + block.widthAndGap,
                leftEnd: space.leftEnd,
                topStart: space.topStart,
                topEnd: space.topEnd
            };

            var F2 = {
                leftStart: space.leftStart,
                leftEnd: space.leftEnd,
                topStart: space.topStart + block.heightAndGap,
                topEnd: space.topEnd
            };

            // remove Fi from F
            t.freeSpaces.splice(spaceIndex, 1);

            if (F1.leftEnd > F1.leftStart && F1.topEnd > F1.topStart) {
                t.freeSpaces.splice(spaceIndex, 0, F1);
                spaceIndex++;
            }

            if (F2.leftEnd > F2.leftStart && F2.topEnd > F2.topStart) {
                t.freeSpaces.splice(spaceIndex, 0, F2);
            }
        },


        /**
         * Generate G1, G2, G3, G4 from intersaction of t.freeSpaces with block
         */
        generateG1G2G3G4: function(block) {
            var t = this;

            var spaces = [];

            $.each(t.freeSpaces, function(index, space) {
                var intersectSpace = t.intersectSpaces(space, block);

                // if block & space are the same push space in spaces and return
                if (intersectSpace === null) {
                    spaces.push(space);
                    return;
                }

                t.generateG1(space, intersectSpace, spaces);
                t.generateG2(space, intersectSpace, spaces);
                t.generateG3(space, intersectSpace, spaces);
                t.generateG4(space, intersectSpace, spaces);
            });

            t.freeSpaces = spaces;
        },


        /**
         * Return the intersected rectagle of Fi and block
         * If the two spaces don't intersect or are the same return null
         */
        intersectSpaces: function(space1, block) {
            var t = this,
                space2 = {
                    leftStart: block.leftNew,
                    leftEnd: block.leftNew + block.widthAndGap,
                    topStart: block.topNew,
                    topEnd: block.topNew + block.heightAndGap,
                };

            if (space1.leftStart === space2.leftStart &&
                space1.leftEnd === space2.leftEnd &&
                space1.topStart === space2.topStart &&
                space1.topEnd === space2.topEnd) {
                return null;
            }

            var leftStart = Math.max(space1.leftStart, space2.leftStart),
                leftEnd = Math.min(space1.leftEnd, space2.leftEnd),
                topStart = Math.max(space1.topStart, space2.topStart),
                topEnd = Math.min(space1.topEnd, space2.topEnd);

            if (leftEnd <= leftStart || topEnd <= topStart) {
                return null;
            }

            return {
                leftStart: leftStart,
                leftEnd: leftEnd,
                topStart: topStart,
                topEnd: topEnd
            };
        },


        /**
         * The top subdivide space
         */
        generateG1: function(space, intersectSpace, spaces) {
            if (space.topStart === intersectSpace.topStart) {
                return;
            }

            spaces.push({
                leftStart: space.leftStart,
                leftEnd: space.leftEnd,
                topStart: space.topStart,
                topEnd: intersectSpace.topStart
            });
        },


        /**
         * The right subdivide space
         */
        generateG2: function(space, intersectSpace, spaces) {
            if (space.leftEnd === intersectSpace.leftEnd) {
                return;
            }

            spaces.push({
                leftStart: intersectSpace.leftEnd,
                leftEnd: space.leftEnd,
                topStart: space.topStart,
                topEnd: space.topEnd
            });
        },


        /**
         * The bottom subdivide space
         */
        generateG3: function(space, intersectSpace, spaces) {
            if (space.topEnd === intersectSpace.topEnd) {
                return;
            }

            spaces.push({
                leftStart: space.leftStart,
                leftEnd: space.leftEnd,
                topStart: intersectSpace.topEnd,
                topEnd: space.topEnd
            });
        },


        /**
         * The left subdivide space
         */
        generateG4: function(space, intersectSpace, spaces) {
            if (space.leftStart === intersectSpace.leftStart) {
                return;
            }

            spaces.push({
                leftStart: space.leftStart,
                leftEnd: intersectSpace.leftStart,
                topStart: space.topStart,
                topEnd: space.topEnd
            });
        },


        /**
         * For every Fi check if is another Fj so Fj contains Fi
         * @todo - refactor
         */
        cleanFreeSpaces: function() {
            var t = this;

            // sort space from top to bottom and left to right
            t.freeSpaces.sort(function(space1, space2) {
                if (space1.topStart > space2.topStart) {
                    return 1;
                } else if (space1.topStart < space2.topStart) {
                    return -1;
                } else {
                    if (space1.leftStart > space2.leftStart) {
                        return 1;
                    } else if (space1.leftStart < space2.leftStart) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            });

            t.correctSubPixelValues();

            t.removeNonMaximalFreeSpaces();
        },


        /**
         * If topStart values for spaces are <= 1px then align those spaces
         */
        correctSubPixelValues: function() {
            var t = this,
                i, len, diff, space1, space2;

            for (i = 0, len = t.freeSpaces.length - 1; i < len; i++) {
                space1 = t.freeSpaces[i];
                space2 = t.freeSpaces[i + 1];

                if ((space2.topStart - space1.topStart) <= 1) {
                    space2.topStart = space1.topStart;
                }
            }
        },


        /**
         * Remove spaces that are not maximal
         * If Fi contains Fj then remove Fj from F
         */
        removeNonMaximalFreeSpaces: function() {
            var t = this;

            t.uniqueFreeSpaces();

            t.freeSpaces = $.map(t.freeSpaces, function(space1, index1) {
                $.each(t.freeSpaces, function(index2, space2) {
                    // don't compare the same free spaces
                    if (index1 === index2) {
                        return;
                    }

                    if (space2.leftStart <= space1.leftStart &&
                        space2.leftEnd >= space1.leftEnd &&
                        space2.topStart <= space1.topStart &&
                        space2.topEnd >= space1.topEnd) {

                        space1 = null;
                        return false;
                    }
                });

                return space1;
            });
        },


        /**
         * Remove duplicates spaces from freeSpaces
         */
        uniqueFreeSpaces: function() {
            var t = this,
                result = [];

            $.each(t.freeSpaces, function(index1, space1) {
                $.each(result, function(index2, space2) {
                    if (space2.leftStart === space1.leftStart &&
                        space2.leftEnd === space1.leftEnd &&
                        space2.topStart === space1.topStart &&
                        space2.topEnd === space1.topEnd) {

                        space1 = null;
                        return false;
                    }
                });

                if (space1 !== null) {
                    result.push(space1);
                }
            });

            t.freeSpaces = result;
        },


        /**
         * If freeSpaces arrray has only one space and that space overlap the
         * height of the bottom blocks with 1px cut those blocks
         */
        addHeightToBlocks: function() {
            var t = this;

            $.each(t.freeSpaces, function(indexSpace, space) {
                t.blocksOn.each(function(indexBlock, block) {
                    var data = $(block).data('cbp');

                    if (data.pack !== true) {
                        return;
                    }

                    if (!t.intersectSpaces(space, data)) {
                        return;
                    }

                    var diff = space.topStart - data.topNew - data.heightAndGap;

                    if (diff === -1) {
                        block.style.height = (data.height - 1) + 'px';
                    }
                });
            });
        },


        /**
         * Sort by the longer width first, followed by a comparison of the shorter height
         */
        sortBlocksToPreventGaps: function() {
            var t = this;

            t.blocksAreSorted = true;

            t.blocksOn.sort(function(block1, block2) {
                var data1 = $(block1).data('cbp'),
                    data2 = $(block2).data('cbp');

                // order desc by width
                if (data1.widthAndGap < data2.widthAndGap) {
                    return 1;
                } else if (data1.widthAndGap > data2.widthAndGap) {
                    return -1;
                } else {
                    // order desc by height
                    if (data1.heightAndGap < data2.heightAndGap) {
                        return 1;
                    } else if (data1.heightAndGap > data2.heightAndGap) {
                        return -1;
                    } else {
                        // order asc by index
                        if (data1.index > data2.index) {
                            return 1;
                        } else if (data1.index < data2.index) {
                            return -1;
                        }
                    }
                }
            });
        },


        /**
         * Generic sort block function from lower to highest values
         */
        sortBlocks: function(blocks, compare) {
            var t = this;

            blocks.sort(function(block1, block2) {
                var data1 = $(block1).data('cbp'),
                    data2 = $(block2).data('cbp');

                // if the items are equally order them from left to right
                if (data1[compare] > data2[compare]) {
                    return 1;
                } else if (data1[compare] < data2[compare]) {
                    return -1;
                } else {
                    if (data1.leftNew > data2.leftNew) {
                        return 1;
                    } else if (data1.leftNew < data2.leftNew) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            });
        }
    });
})(jQuery, window, document);
// Plugin default options
jQuery.fn.cubeportfolio.options = {
    /**
     *  Define the wrapper for filters
     *  Values: strings that represent the elements in the document (DOM selector).
     */
    filters: '',

    /**
     *  Define the wrapper for loadMore
     *  Values: strings that represent the elements in the document (DOM selector).
     */
    loadMore: '',

    /**
     *  How the loadMore functionality should behave. Load on click on the button or
     *  automatically when you scroll the page
     *  Values: - click
     *          - auto
     */
    loadMoreAction: 'click',

    /**
     *  Define the search input element
     *  Values: strings that represent the element in the document (DOM selector).
     */
    search: '',

    /**
     *  Layout Mode for this instance
     *  Values: 'grid', 'mosaic' or 'slider'
     */
    layoutMode: 'grid',

    /**
     *  Sort the items (bigger to smallest) if there are gaps in grid
     *  Option available only for `layoutMode: 'mosaic'`
     *  Values: true or false
     */
    sortToPreventGaps: false,

    /**
     *  Mouse and touch drag support
     *  Option available only for `layoutMode: 'slider'`
     *  Values: true or false
     */
    drag: true,

    /**
     *  Autoplay the slider
     *  Option available only for `layoutMode: 'slider'`
     *  Values: true or false
     */
    auto: false,

    /**
     *  Autoplay interval timeout. Time is set in milisecconds
     *  1000 milliseconds equals 1 second.
     *  Option available only for `layoutMode: 'slider'`
     *  Values: only integers (ex: 1000, 2000, 5000)
     */
    autoTimeout: 5000,

    /**
     *  Stops autoplay when user hover the slider
     *  Option available only for `layoutMode: 'slider'`
     *  Values: true or false
     */
    autoPauseOnHover: true,

    /**
     *  Show `next` and `prev` buttons for slider
     *  Option available only for `layoutMode: 'slider'`
     *  Values: true or false
     */
    showNavigation: true,

    /**
     *  Show pagination for slider
     *  Option available only for `layoutMode: 'slider'`
     *  Values: true or false
     */
    showPagination: true,

    /**
     *  Enable slide to first item (last item)
     *  Option available only for `layoutMode: 'slider'`
     *  Values: true or false
     */
    rewindNav: true,

    /**
     *  Scroll by page and not by item. This option affect next/prev buttons and drag support
     *  Option available only for `layoutMode: 'slider'`
     *  Values: true or false
     */
    scrollByPage: false,

    /**
     *  Default filter for plugin
     *  Option available only for `layoutMode: 'grid'`
     *  Values: strings that represent the filter name(ex: *, .logo, .web-design, .design)
     */
    defaultFilter: '*',

    /**
     *  Enable / disable the deeplinking feature when you click on filters
     *  Option available only for `layoutMode: 'grid'`
     *  Values: true or false
     */
    filterDeeplinking: false,

    /**
     *  Defines which animation to use for items that will be shown or hidden after a filter has been activated.
     *  Option available only for `layoutMode: 'grid'`
     *  The plugin use the best browser features available (css3 transitions and transform, GPU acceleration).
     *  Values: - fadeOut
     *          - quicksand
     *          - bounceLeft
     *          - bounceTop
     *          - bounceBottom
     *          - moveLeft
     *          - slideLeft
     *          - fadeOutTop
     *          - sequentially
     *          - skew
     *          - slideDelay
     *          - rotateSides
     *          - flipOutDelay
     *          - flipOut
     *          - unfold
     *          - foldLeft
     *          - scaleDown
     *          - scaleSides
     *          - frontRow
     *          - flipBottom
     *          - rotateRoom
     */
    animationType: 'fadeOut',

    /**
     *  Adjust the layout grid
     *  Values: - default (no adjustment applied)
     *          - alignCenter (align the grid on center of the page)
     *          - responsive (use a fluid algorithm to resize the grid)
     */
    gridAdjustment: 'responsive',

    /**
     * Define `media queries` for columns layout.
     * Format: [{width: a, cols: d}, {width: b, cols: e}, {width: c, cols: f}],
     * where a, b, c are the grid width and d, e, f are the columns displayed.
     * e.g. [{width: 1100, cols: 4}, {width: 800, cols: 3}, {width: 480, cols: 2}] means
     * if (gridWidth >= 1100) => show 4 columns,
     * if (gridWidth >= 800 && gridWidth < 1100) => show 3 columns,
     * if (gridWidth >= 480 && gridWidth < 800) => show 2 columns,
     * if (gridWidth < 480) => show 2 columns
     * Keep in mind that a > b > c
     * This option is available only when `gridAdjustment: 'responsive'`
     * Values:  - array of objects of format: [{width: a, cols: d}, {width: b, cols: e}]
     *          - you can define as many objects as you want
     *          - if this option is `false` Cube Portfolio will adjust the items
     *            width automatically (default option for backward compatibility)
     */
    mediaQueries: false,

    /**
     *  Horizontal gap between items
     *  Values: only integers (ex: 1, 5, 10)
     */
    gapHorizontal: 10,

    /**
     *  Vertical gap between items
     *  Values: only integers (ex: 1, 5, 10)
     */
    gapVertical: 10,

    /**
     *  Caption - the overlay that is shown when you put the mouse over an item
     *  NOTE: If you don't want to have captions set this option to an empty string ( caption: '')
     *  Values: - pushTop
     *          - pushDown
     *          - revealBottom
     *          - revealTop
     *          - revealLeft
     *          - moveRight
     *          - overlayBottom
     *          - overlayBottomPush
     *          - overlayBottomReveal
     *          - overlayBottomAlong
     *          - overlayRightAlong
     *          - minimal
     *          - fadeIn
     *          - zoom
     *          - opacity
     *          - ''
     */
    caption: 'pushTop',

    /**
     *  The plugin will display his content based on the following values.
     *  Values: - default (the content will be displayed without any animation)
     *          - fadeIn (the plugin will fully preload the images before displaying the items with a fadeIn effect)
     *          - fadeInToTop (the plugin will fully preload the images before displaying the items with a fadeIn effect from bottom to top)
     *          - sequentially (the plugin will fully preload the images before displaying the items with a sequentially effect)
     *          - bottomToTop (the plugin will fully preload the images before displaying the items with an animation from bottom to top)
     */
    displayType: 'fadeIn',

    /**
     *  Defines the speed of displaying the items (when `displayType == default` this option will have no effect)
     *  Values: only integers, values in ms (ex: 200, 300, 500)
     */
    displayTypeSpeed: 400,

    /**
     *  This is used to define any clickable elements you wish to use to trigger lightbox popup on click.
     *  Values: strings that represent the elements in the document (DOM selector)
     */
    lightboxDelegate: '.cbp-lightbox',

    /**
     *  Enable / disable gallery mode
     *  Values: true or false
     */
    lightboxGallery: true,

    /**
     *  Attribute of the delegate item that contains caption for lightbox
     *  Values: html atributte
     */
    lightboxTitleSrc: 'data-title',

    /**
     *  Markup of the lightbox counter
     *  Values: html markup
     */
    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

    /**
     *  This is used to define any clickable elements you wish to use to trigger singlePage popup on click.
     *  Values: strings that represent the elements in the document (DOM selector)
     */
    singlePageDelegate: '.cbp-singlePage',

    /**
     *  Enable / disable the deeplinking feature for singlePage popup
     *  Values: true or false
     */
    singlePageDeeplinking: true,

    /**
     *  Enable / disable the sticky navigation for singlePage popup
     *  Values: true or false
     */
    singlePageStickyNavigation: true,

    /**
     *  Markup of the singlePage counter
     *  Values: html markup
     */
    singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',

    /**
     *  Defines which animation to use when singlePage appear
     *  Values: - left
     *          - fade
     *          - right
     */
    singlePageAnimation: 'left',

    /**
     *  Use this callback to update singlePage content.
     *  The callback will trigger after the singlePage popup is open.
     *  Values: function
     */
    singlePageCallback: null,

    /**
     *  This is used to define any clickable elements you wish to use to trigger singlePageInline on click.
     *  Values: strings that represent the elements in the document (DOM selector)
     */
    singlePageInlineDelegate: '.cbp-singlePageInline',

    /**
     *  Enable / disable the deeplinking feature for singlePageInline
     *  Values: true or false
     */
    singlePageInlineDeeplinking: false,

    /**
     *  This is used to define the position of singlePageInline block
     *  Values: - above ( above current element )
     *          - below ( below current elemnet)
     *          - top ( positon top )
     *          - bottom ( positon bottom )
     */
    singlePageInlinePosition: 'top',

    /**
     *  Push the open panel in focus and at close go back to the former stage
     *  Values: true or false
     */
    singlePageInlineInFocus: true,

    /**
     *  Use this callback to update singlePageInline content.
     *  The callback will trigger after the singlePageInline is open.
     *  Values: function
     */
    singlePageInlineCallback: null,

    /**
     *  Used by the plugins registered to set local options for the current instance
     *  Values: object
     */
    plugins: {},
};
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;
    var $window = $(window);

    CubePortfolio.private = {
        publicEvents: function(eventName, time, beforeEventCallback) {
            var t = this;

            // array of objects: {instance: instance, fn: fn}
            t.events = [];

            t.initEvent = function(obj) {
                if (t.events.length === 0) {
                    t.scrollEvent();
                }

                t.events.push(obj);
            };

            t.destroyEvent = function(instance) {
                t.events = $.map(t.events, function(val, index) {
                    if (val.instance !== instance) {
                        return val;
                    }
                });

                if (t.events.length === 0) {
                    // remove scroll event
                    $window.off(eventName);
                }
            };

            t.scrollEvent = function() {
                var timeout;

                // resize
                $window.on(eventName, function() {
                    clearTimeout(timeout);

                    timeout = setTimeout(function() {
                        if ($.isFunction(beforeEventCallback) && beforeEventCallback.call(t)) {
                            return;
                        }

                        $.each(t.events, function(index, val) {
                            val.fn.call(val.instance);
                        });
                    }, time);
                });
            };
        },

        /**
         * Check if cubeportfolio instance exists on current element
         */
        checkInstance: function(method) {
            var t = $.data(this, 'cubeportfolio');

            if (!t) {
                throw new Error('cubeportfolio is not initialized. Initialize it before calling ' + method + ' method!');
            }

            t.triggerEvent('publicMethod');

            return t;
        },

        /**
         * Get info about client browser
         */
        browserInfo: function() {
            var t = CubePortfolio.private,
                appVersion = navigator.appVersion,
                transition, animation, perspective;

            if (appVersion.indexOf('MSIE 8.') !== -1) { // ie8
                t.browser = 'ie8';
            } else if (appVersion.indexOf('MSIE 9.') !== -1) { // ie9
                t.browser = 'ie9';
            } else if (appVersion.indexOf('MSIE 10.') !== -1) { // ie10
                t.browser = 'ie10';
            } else if (window.ActiveXObject || 'ActiveXObject' in window) { // ie11
                t.browser = 'ie11';
            } else if ((/android/gi).test(appVersion)) { // android
                t.browser = 'android';
            } else if ((/iphone|ipad|ipod/gi).test(appVersion)) { // ios
                t.browser = 'ios';
            } else if ((/chrome/gi).test(appVersion)) {
                t.browser = 'chrome';
            } else {
                t.browser = '';
            }

            // check if perspective is available
            perspective = t.styleSupport('perspective');

            // if perspective is not available => no modern browser
            if (typeof perspective === undefined) {
                return;
            }

            transition = t.styleSupport('transition');

            t.transitionend = {
                WebkitTransition: 'webkitTransitionEnd',
                transition: 'transitionend'
            }[transition];

            animation = t.styleSupport('animation');

            t.animationend = {
                WebkitAnimation: 'webkitAnimationEnd',
                animation: 'animationend'
            }[animation];

            t.animationDuration = {
                WebkitAnimation: 'webkitAnimationDuration',
                animation: 'animationDuration'
            }[animation];

            t.animationDelay = {
                WebkitAnimation: 'webkitAnimationDelay',
                animation: 'animationDelay'
            }[animation];

            t.transform = t.styleSupport('transform');

            if (transition && animation && t.transform) {
                t.modernBrowser = true;
            }
        },


        /**
         * Feature testing for css3
         */
        styleSupport: function(prop) {
            var supportedProp,
                // capitalize first character of the prop to test vendor prefix
                webkitProp = 'Webkit' + prop.charAt(0).toUpperCase() + prop.slice(1),
                div = document.createElement('div');

            // browser supports standard CSS property name
            if (prop in div.style) {
                supportedProp = prop;
            } else if (webkitProp in div.style) {
                supportedProp = webkitProp;
            }

            // avoid memory leak in IE
            div = null;

            return supportedProp;
        },

    };

    CubePortfolio.private.browserInfo();

    CubePortfolio.private.resize = new CubePortfolio.private.publicEvents('resize.cbp', 50, function() {
        if (window.innerHeight == screen.height) {
            // this is fulll screen mode. don't need to trigger a resize
            return true;
        }
    });
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    CubePortfolio.public = {

        /*
         * Init the plugin
         */
        init: function(options, callback) {
            new CubePortfolio(this, options, callback);
        },

        /*
         * Destroy the plugin
         */
        destroy: function(callback) {
            var t = CubePortfolio.private.checkInstance.call(this, 'destroy');

            t.triggerEvent('beforeDestroy');

            // remove data
            $.removeData(this, 'cubeportfolio');

            // remove data from blocks
            t.blocks.removeData('cbp');

            // remove loading class and .cbp on container
            t.$obj.removeClass('cbp-ready').removeAttr('style');

            // remove class from ul
            t.$ul.removeClass('cbp-wrapper');

            // remove resize event
            CubePortfolio.private.resize.destroyEvent(t);

            t.$obj.off('.cbp');

            // reset blocks
            t.blocks.removeClass('cbp-item-off').removeAttr('style');

            t.blocks.find('.cbp-item-wrapper').each(function(index, el) {
                var elem = $(el),
                    children = elem.children();

                if (children.length) {
                    children.unwrap();
                } else {
                    elem.remove();
                }
            });

            t.destroySlider();

            // remove .cbp-wrapper-outer
            t.$ul.unwrap();

            // remove .cbp-wrapper
            if (t.addedWrapp) {
                t.blocks.unwrap();
            }

            if (t.blocks.length === 0) {
                t.$ul.remove();
            }

            $.each(t.plugins, function(i, item) {
                if (typeof item.destroy === 'function') {
                    item.destroy();
                }
            });

            if ($.isFunction(callback)) {
                callback.call(t);
            }

            t.triggerEvent('afterDestroy');
        },

        /*
         * Filter the plugin by filterName
         */
        filter: function(param, callback) {
            var t = CubePortfolio.private.checkInstance.call(this, 'filter'),
                expression;

            if (t.isAnimating) {
                return;
            }

            t.isAnimating = true;

            // register callback function
            if ($.isFunction(callback)) {
                t.registerEvent('filterFinish', callback, true);
            }

            if ($.isFunction(param)) {
                expression = param.call(t, t.blocks);

                if(expression === undefined) {
                    throw new Error('When you call cubeportfolio API `filter` method with a param of type function you must return the blocks that will be visible.');
                }
            } else {
                if (t.options.filterDeeplinking) {
                    var url = location.href.replace(/#cbpf=(.*?)([#\?&]|$)/gi, '');
                    location.href = url + '#cbpf=' + encodeURIComponent(param);

                    if (t.singlePage && t.singlePage.url) {
                        t.singlePage.url = location.href;
                    }
                }

                t.defaultFilter = param;
                expression = t.filterConcat(t.defaultFilter);
            }

            if (t.singlePageInline && t.singlePageInline.isOpen) {
                t.singlePageInline.close('promise', {
                    callback: function() {
                        t.computeFilter(expression);
                    }
                });
            } else {
                t.computeFilter(expression);
            }
        },

        /*
         * Show counter for filters
         */
        showCounter: function(elems, callback) {
            var t = CubePortfolio.private.checkInstance.call(this, 'showCounter');

            // register callback function
            if ($.isFunction(callback)) {
                t.registerEvent('showCounterFinish', callback, true);
            }

            t.elems = elems;

            elems.each(function() {
                var el = $(this);

                var count = t.blocks.filter(el.data('filter')).length;
                el.find('.cbp-filter-counter').text(count);
            });

            t.triggerEvent('showCounterFinish', elems);
        },

        // alias for append public method
        appendItems: function(els, callback) {
            CubePortfolio.public.append.call(this, els, callback);
        },

        /*
         * Append elements
         */
        append: function(els, callback) {
            var t = CubePortfolio.private.checkInstance.call(this, 'append'),
                items = $(els).filter('.cbp-item');

            if (t.isAnimating || items.length < 1) {
                if ($.isFunction(callback)) {
                    callback.call(t, items);
                }

                return;
            }

            t.isAnimating = true;

            if (t.singlePageInline && t.singlePageInline.isOpen) {
                t.singlePageInline.close('promise', {
                    callback: function() {
                        t.addItems(items, callback, 'append');
                    }
                });
            } else {
                t.addItems(items, callback, 'append');
            }
        },

        /*
         * Prepend elements
         */
        prepend: function(els, callback) {
            var t = CubePortfolio.private.checkInstance.call(this, 'prepend'),
                items = $(els).filter('.cbp-item');

            if (t.isAnimating || items.length < 1) {
                if ($.isFunction(callback)) {
                    callback.call(t, items);
                }

                return;
            }

            t.isAnimating = true;

            if (t.singlePageInline && t.singlePageInline.isOpen) {
                t.singlePageInline.close('promise', {
                    callback: function() {
                        t.addItems(items, callback, 'prepend');
                    }
                });
            } else {
                t.addItems(items, callback, 'prepend');
            }
        },

        /*
         * Remove elements from the instance and DOM.
         * els - jQuery DOM Object
         */
        remove: function(els, callback) {
            var t = CubePortfolio.private.checkInstance.call(this, 'remove'),
                items = $(els).filter('.cbp-item');

            if (t.isAnimating || items.length < 1) {
                if ($.isFunction(callback)) {
                    callback.call(t, items);
                }

                return;
            }

            t.isAnimating = true;

            if (t.singlePageInline && t.singlePageInline.isOpen) {
                t.singlePageInline.close('promise', {
                    callback: function() {
                        t.removeItems(items, callback);
                    }
                });
            } else {
                t.removeItems(items, callback);
            }
        },
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    // @todo - gandit cum ar trebui sa fac aici ca nu prea ar merge un plugin
    // pt slider ca as extinde pe CubePortfolio.prototype la fiecare initializare
    $.extend(CubePortfolio.prototype, {
        updateSliderPagination: function() {
            var t = this,
                pages,
                i;

            if (t.options.showPagination) {
                // get number of pages
                pages = Math.ceil(t.blocksOn.length / t.cols);
                t.navPagination.empty();

                for (i = pages - 1; i >= 0; i--) {
                    $('<div/>', {
                        'class': 'cbp-nav-pagination-item',
                        'data-slider-action': 'jumpTo'
                    }).appendTo(t.navPagination);
                }

                t.navPaginationItems = t.navPagination.children();
            }

            // enable disable the nav
            t.enableDisableNavSlider();
        },

        destroySlider: function() {
            var t = this;

            if (t.options.layoutMode !== 'slider') {
                return;
            }

            t.$obj.removeClass('cbp-mode-slider');

            t.$ul.removeAttr('style');

            t.$ul.off('.cbp');

            $(document).off('.cbp'); // @todo - don't interfer with the lightbox

            if (t.options.auto) {
                t.stopSliderAuto();
            }
        },

        nextSlider: function(el) {
            var t = this;

            if (t.isEndSlider()) {
                if (t.isRewindNav()) {
                    t.sliderActive = 0;
                } else {
                    return;
                }
            } else {
                if (t.options.scrollByPage) {
                    t.sliderActive = Math.min(t.sliderActive + t.cols, t.blocksOn.length - t.cols);
                } else {
                    t.sliderActive += 1;
                }
            }

            t.goToSlider();
        },

        prevSlider: function(el) {
            var t = this;

            if (t.isStartSlider()) {
                if (t.isRewindNav()) {
                    t.sliderActive = t.blocksOn.length - t.cols;
                } else {
                    return;
                }
            } else {
                if (t.options.scrollByPage) {
                    t.sliderActive = Math.max(0, t.sliderActive - t.cols);
                } else {
                    t.sliderActive -= 1;
                }
            }

            t.goToSlider();
        },

        jumpToSlider: function(el) {
            var t = this,
                index = Math.min(el.index() * t.cols, t.blocksOn.length - t.cols);

            if (index === t.sliderActive) {
                return;
            }

            t.sliderActive = index;

            t.goToSlider();
        },

        jumpDragToSlider: function(pos) {
            var t = this,
                jumpWidth,
                offset,
                condition,
                index,
                dragLeft = (pos > 0) ? true : false;

            if (t.options.scrollByPage) {
                jumpWidth = t.cols * t.columnWidth;
                offset = t.cols;
            } else {
                jumpWidth = t.columnWidth;
                offset = 1;
            }

            pos = Math.abs(pos);
            index = Math.floor(pos / jumpWidth) * offset;

            if (pos % jumpWidth > 20) {
                index += offset;
            }

            if (dragLeft) { // drag to left
                t.sliderActive = Math.min(t.sliderActive + index, t.blocksOn.length - t.cols);
            } else { // drag to right
                t.sliderActive = Math.max(0, t.sliderActive - index);
            }

            t.goToSlider();
        },

        isStartSlider: function() {
            return this.sliderActive === 0;
        },

        isEndSlider: function() {
            var t = this;
            return (t.sliderActive + t.cols) > t.blocksOn.length - 1;
        },

        goToSlider: function() {
            var t = this;

            // enable disable the nav
            t.enableDisableNavSlider();

            t.updateSliderPosition();
        },

        startSliderAuto: function() {
            var t = this;

            if (t.isDrag) {
                t.stopSliderAuto();
                return;
            }

            t.timeout = setTimeout(function() {
                // go to next slide
                t.nextSlider();

                // start auto
                t.startSliderAuto();

            }, t.options.autoTimeout);
        },

        stopSliderAuto: function() {
            clearTimeout(this.timeout);
        },

        enableDisableNavSlider: function() {
            var t = this,
                page,
                method;

            if (!t.isRewindNav()) {
                method = (t.isStartSlider()) ? 'addClass' : 'removeClass';
                t.navPrev[method]('cbp-nav-stop');

                method = (t.isEndSlider()) ? 'addClass' : 'removeClass';
                t.navNext[method]('cbp-nav-stop');
            }

            if (t.options.showPagination) {
                if (t.options.scrollByPage) {
                    page = Math.ceil(t.sliderActive / t.cols);
                } else {
                    if (t.isEndSlider()) {
                        page = t.navPaginationItems.length - 1;
                    } else {
                        page = Math.floor(t.sliderActive / t.cols);
                    }
                }

                // add class active on pagination's items
                t.navPaginationItems.removeClass('cbp-nav-pagination-active')
                    .eq(page)
                    .addClass('cbp-nav-pagination-active');
            }

            if (t.customPagination) {
                if (t.options.scrollByPage) {
                    page = Math.ceil(t.sliderActive / t.cols);
                } else {
                    if (t.isEndSlider()) {
                        page = t.customPaginationItems.length - 1;
                    } else {
                        page = Math.floor(t.sliderActive / t.cols);
                    }
                }

                // add class active on pagination's items
                t.customPaginationItems.removeClass(t.customPaginationClass)
                    .eq(page)
                    .addClass(t.customPaginationClass);
            }
        },

        /**
         * If slider loop is enabled don't add classes to `next` and `prev` buttons
         */
        isRewindNav: function() {
            var t = this;

            if (!t.options.showNavigation) {
                return true;
            }

            if (t.blocksOn.length <= t.cols) {
                return false;
            }

            if (t.options.rewindNav) {
                return true;
            }

            return false;
        },

        sliderItemsLength: function() {
            return this.blocksOn.length <= this.cols;
        },

        /**
         * Arrange the items in a slider layout
         */
        sliderLayout: function() {
            var t = this;

            t.blocksOn.each(function(index, el) {
                var data = $(el).data('cbp');

                // update the values with the new ones
                data.leftNew = t.columnWidth * index;
                data.topNew = 0;

                t.sliderFreeSpaces.push({
                    topStart: data.heightAndGap
                });
            });

            t.getFreeSpacesForSlider();

            t.$ul.width(t.columnWidth * t.blocksOn.length - t.options.gapVertical);
        },

        getFreeSpacesForSlider: function() {
            var t = this;

            t.freeSpaces = t.sliderFreeSpaces.slice(t.sliderActive, t.sliderActive + t.cols);

            t.freeSpaces.sort(function(space1, space2) {
                if (space1.topStart > space2.topStart) {
                    return 1;
                } else if (space1.topStart < space2.topStart) {
                    return -1;
                }
            });
        },

        updateSliderPosition: function() {
            var t = this,
                value = -t.sliderActive * t.columnWidth;

            if (CubePortfolio.private.modernBrowser) {
                t.$ul[0].style[CubePortfolio.private.transform] = 'translate3d(' + value + 'px, 0px, 0)';
            } else {
                t.$ul[0].style.left = value + 'px';
            }

            t.getFreeSpacesForSlider();

            t.resizeMainContainer();
        },

        dragSlider: function() {
            var t = this,
                $document = $(document),
                posInitial,
                pos,
                target,
                ulPosition,
                ulMaxWidth,
                isAnimating = false,
                events = {},
                isTouch = false,
                touchStartEvent,
                isHover = false;

            t.isDrag = false;

            if (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints > 0)) {

                events = {
                    start: 'touchstart.cbp',
                    move: 'touchmove.cbp',
                    end: 'touchend.cbp'
                };

                isTouch = true;
            } else {
                events = {
                    start: 'mousedown.cbp',
                    move: 'mousemove.cbp',
                    end: 'mouseup.cbp'
                };
            }

            function dragStart(e) {
                if (t.sliderItemsLength()) {
                    return;
                }

                if (!isTouch) {
                    e.preventDefault();
                } else {
                    touchStartEvent = e;
                }

                if (t.options.auto) {
                    t.stopSliderAuto();
                }

                if (isAnimating) {
                    $(target).one('click.cbp', function() {
                        return false;
                    });
                    return;
                }

                target = $(e.target);
                posInitial = pointerEventToXY(e).x;
                pos = 0;
                ulPosition = -t.sliderActive * t.columnWidth;
                ulMaxWidth = t.columnWidth * (t.blocksOn.length - t.cols);

                $document.on(events.move, dragMove);
                $document.on(events.end, dragEnd);

                t.$obj.addClass('cbp-mode-slider-dragStart');
            }

            function dragEnd(e) {
                t.$obj.removeClass('cbp-mode-slider-dragStart');

                // put the state to animate
                isAnimating = true;

                if (pos !== 0) {
                    target.one('click.cbp', function(e) {
                        return false;
                    });

                    // wait a frame to be sure the .cbp-mode-slider-dragStart is removed from the dom
                    requestAnimationFrame(function() {
                        t.jumpDragToSlider(pos);
                        t.$ul.one(CubePortfolio.private.transitionend, afterDragEnd);
                    });
                } else {
                    afterDragEnd.call(t);
                }

                $document.off(events.move);
                $document.off(events.end);
            }

            function dragMove(e) {
                pos = posInitial - pointerEventToXY(e).x;

                if (pos > 8 || pos < -8) {
                    e.preventDefault();
                }

                t.isDrag = true;

                var value = ulPosition - pos;

                if (pos < 0 && pos < ulPosition) { // to right
                    value = (ulPosition - pos) / 5;
                } else if (pos > 0 && (ulPosition - pos) < -ulMaxWidth) { // to left
                    value = -ulMaxWidth + (ulMaxWidth + ulPosition - pos) / 5;
                }

                if (CubePortfolio.private.modernBrowser) {
                    t.$ul[0].style[CubePortfolio.private.transform] = 'translate3d(' + value + 'px, 0px, 0)';
                } else {
                    t.$ul[0].style.left = value + 'px';
                }
            }

            function afterDragEnd() {
                isAnimating = false;
                t.isDrag = false;

                if (t.options.auto) {
                    if (t.mouseIsEntered) {
                        return;
                    }

                    t.startSliderAuto();
                }
            }

            function pointerEventToXY(e) {
                if (e.originalEvent !== undefined && e.originalEvent.touches !== undefined) {
                    e = e.originalEvent.touches[0];
                }

                return {
                    x: e.pageX,
                    y: e.pageY
                };
            }

            t.$ul.on(events.start, dragStart);
        },

        /**
         * Reset the slider layout
         */
        sliderLayoutReset: function() {
            var t = this;

            t.freeSpaces = [];

            t.sliderFreeSpaces = [];
        },
    });
})(jQuery, window, document);
if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik M�ller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function() {
    var lastTime = 0;
    var vendors = ['moz', 'webkit'];

    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; x++) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        parent.filterLayout = t.filterLayout;

        parent.registerEvent('computeBlocksFinish', function(expression) {
            parent.blocksOn2On = parent.blocksOnInitial.filter(expression);
            parent.blocksOn2Off = parent.blocksOnInitial.not(expression);
        });
    }

    // here this value point to parent grid
    Plugin.prototype.filterLayout = function() {
        var t = this;

        t.$obj.addClass('cbp-animation-' + t.options.animationType);

        // [1] - blocks that are only moving with translate
        t.blocksOn2On.addClass('cbp-item-on2on')
            .each(function(index, el) {
                var data = $(el).data('cbp');
                el.style[CubePortfolio.private.transform] = 'translate3d(' + (data.leftNew - data.left) + 'px, ' + (data.topNew - data.top) + 'px, 0)';
            });

        // [2] - blocks than intialy are on but after applying the filter are off
        t.blocksOn2Off.addClass('cbp-item-on2off');

        // [3] - blocks that are off and it will be on
        t.blocksOff2On = t.blocksOn
            .filter('.cbp-item-off')
            .removeClass('cbp-item-off')
            .addClass('cbp-item-off2on')
            .each(function(index, el) {
                var data = $(el).data('cbp');

                el.style.left = data.leftNew + 'px';
                el.style.top = data.topNew + 'px';
            });

        if (t.blocksOn2Off.length) {
            t.blocksOn2Off.last().data('cbp').wrapper.one(CubePortfolio.private.animationend, animationend);
        } else if (t.blocksOff2On.length) {
            t.blocksOff2On.last().data('cbp').wrapper.one(CubePortfolio.private.animationend, animationend);
        } else {
            animationend();
        }

        // resize main container height
        t.resizeMainContainer();

        function animationend() {
            t.blocks.removeClass('cbp-item-on2off cbp-item-off2on cbp-item-on2on')
                .each(function(index, el) {
                    var data = $(el).data('cbp');

                    data.left = data.leftNew;
                    data.top = data.topNew;

                    el.style.left = data.left + 'px';
                    el.style.top = data.top + 'px';

                    el.style[CubePortfolio.private.transform] = '';
                });

            t.blocksOff.addClass('cbp-item-off');

            t.$obj.removeClass('cbp-animation-' + t.options.animationType);

            t.filterFinish();
        }
    };

    Plugin.prototype.destroy = function() {
        var parent = this.parent;
        parent.$obj.removeClass('cbp-animation-' + parent.options.animationType);
    };

    CubePortfolio.plugins.animationClassic = function(parent) {
        if (!CubePortfolio.private.modernBrowser || $.inArray(parent.options.animationType, ['boxShadow', 'fadeOut', 'flipBottom', 'flipOut', 'quicksand', 'scaleSides', 'skew']) < 0) {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        parent.filterLayout = t.filterLayout;
    }

    // here this value point to parent grid
    Plugin.prototype.filterLayout = function() {
        var t = this,
            ulClone = t.$ul[0].cloneNode(true);

        ulClone.setAttribute('class', 'cbp-wrapper-helper');
        t.wrapper[0].insertBefore(ulClone, t.$ul[0]);

        requestAnimationFrame(function() {
            t.$obj.addClass('cbp-animation-' + t.options.animationType);

            t.blocksOff.addClass('cbp-item-off');

            t.blocksOn.removeClass('cbp-item-off')
                .each(function(index, el) {
                    var data = $(el).data('cbp');

                    data.left = data.leftNew;
                    data.top = data.topNew;

                    el.style.left = data.left + 'px';
                    el.style.top = data.top + 'px';

                    if (t.options.animationType === 'sequentially') {
                        data.wrapper[0].style[CubePortfolio.private.animationDelay] = (index * 60) + 'ms';
                    }
                });

            if (t.blocksOn.length) {
                t.blocksOn.last().data('cbp').wrapper.one(CubePortfolio.private.animationend, animationend);
            } else if (t.blocksOnInitial.length) {
                t.blocksOnInitial.last().data('cbp').wrapper.one(CubePortfolio.private.animationend, animationend);
            } else {
                animationend();
            }

            // resize main container height
            t.resizeMainContainer();
        });

        function animationend() {
            t.wrapper[0].removeChild(ulClone);

            if (t.options.animationType === 'sequentially') {
                t.blocksOn.each(function(index, el) {
                    $(el).data('cbp').wrapper[0].style[CubePortfolio.private.animationDelay] = '';
                });
            }

            t.$obj.removeClass('cbp-animation-' + t.options.animationType);

            t.filterFinish();
        }
    };

    Plugin.prototype.destroy = function() {
        var parent = this.parent;
        parent.$obj.removeClass('cbp-animation-' + parent.options.animationType);
    };

    CubePortfolio.plugins.animationClone = function(parent) {
        if (!CubePortfolio.private.modernBrowser || $.inArray(parent.options.animationType, ['fadeOutTop', 'slideLeft', 'sequentially']) < 0) {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        parent.filterLayout = t.filterLayout;
    }

    // here this value point to parent grid
    Plugin.prototype.filterLayout = function() {
        var t = this,
            ulClone = t.$ul.clone(true, true);

        ulClone[0].setAttribute('class', 'cbp-wrapper-helper');
        t.wrapper[0].insertBefore(ulClone[0], t.$ul[0]);

        // hack for safari osx because it doesn't want to work if I set animationDelay
        // on cbp-item-wrapper before I clone the t.$ul
        var items = ulClone.find('.cbp-item').not('.cbp-item-off');
        t.sortBlocks(items, 'top');
        items.children('.cbp-item-wrapper').each(function(index, el) {
            el.style[CubePortfolio.private.animationDelay] = (index * 50) + 'ms';
        });

        requestAnimationFrame(function() {
            t.$obj.addClass('cbp-animation-' + t.options.animationType);

            t.blocksOff.addClass('cbp-item-off');

            t.blocksOn.removeClass('cbp-item-off')
                .each(function(index, el) {
                    var data = $(el).data('cbp');

                    data.left = data.leftNew;
                    data.top = data.topNew;

                    el.style.left = data.left + 'px';
                    el.style.top = data.top + 'px';

                    data.wrapper[0].style[CubePortfolio.private.animationDelay] = (index * 50) + 'ms';
                });

            var onLength = t.blocksOn.length,
                offLength = items.length;

            if (onLength === 0 && offLength === 0) {
                animationend();
            } else if (onLength < offLength) {
                items.last().children('.cbp-item-wrapper').one(CubePortfolio.private.animationend, animationend);
            } else {
                t.blocksOn.last().data('cbp').wrapper.one(CubePortfolio.private.animationend, animationend);
            }

            // resize main container height
            t.resizeMainContainer();
        });

        function animationend() {
            t.wrapper[0].removeChild(ulClone[0]);

            t.$obj.removeClass('cbp-animation-' + t.options.animationType);

            t.blocks.each(function(index, el) {
                $(el).data('cbp').wrapper[0].style[CubePortfolio.private.animationDelay] = '';
            });

            t.filterFinish();
        }
    };

    Plugin.prototype.destroy = function() {
        var parent = this.parent;
        parent.$obj.removeClass('cbp-animation-' + parent.options.animationType);
    };

    CubePortfolio.plugins.animationCloneDelay = function(parent) {
        if (!CubePortfolio.private.modernBrowser || $.inArray(parent.options.animationType, ['3dflip', 'flipOutDelay', 'foldLeft', 'frontRow', 'rotateRoom', 'rotateSides', 'scaleDown', 'slideDelay', 'unfold']) < 0) {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        parent.filterLayout = t.filterLayout;
    }

    // here this value point to parent grid
    Plugin.prototype.filterLayout = function() {
        var t = this,
            ulClone = t.$ul[0].cloneNode(true);

        ulClone.setAttribute('class', 'cbp-wrapper-helper');
        t.wrapper[0].insertBefore(ulClone, t.$ul[0]);

        requestAnimationFrame(function() {
            t.$obj.addClass('cbp-animation-' + t.options.animationType);

            t.blocksOff.addClass('cbp-item-off');

            t.blocksOn.removeClass('cbp-item-off')
                .each(function(index, el) {
                    var data = $(el).data('cbp');

                    data.left = data.leftNew;
                    data.top = data.topNew;

                    el.style.left = data.left + 'px';
                    el.style.top = data.top + 'px';
                });

            if (t.blocksOn.length) {
                t.$ul.one(CubePortfolio.private.animationend, animationend);
            } else if (t.blocksOnInitial.length) {
                $(ulClone).one(CubePortfolio.private.animationend, animationend);
            } else {
                animationend();
            }

            // resize main container height
            t.resizeMainContainer();
        });

        function animationend() {
            t.wrapper[0].removeChild(ulClone);

            t.$obj.removeClass('cbp-animation-' + t.options.animationType);

            t.filterFinish();
        }
    };

    Plugin.prototype.destroy = function() {
        var parent = this.parent;
        parent.$obj.removeClass('cbp-animation-' + parent.options.animationType);
    };

    CubePortfolio.plugins.animationWrapper = function(parent) {
        if (!CubePortfolio.private.modernBrowser || $.inArray(parent.options.animationType, ['bounceBottom', 'bounceLeft', 'bounceTop', 'moveLeft']) < 0) {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var t = this;
        var options = parent.options;

        t.parent = parent;

        t.captionOn = options.caption;

        parent.registerEvent('onMediaQueries', function(opt) {
            if (opt && opt.hasOwnProperty('caption')) {
                if (t.captionOn !== opt.caption) {
                    t.destroy();
                    t.captionOn = opt.caption;
                    t.init();
                }
            } else if (t.captionOn !== options.caption) {
                t.destroy();
                t.captionOn = options.caption;
                t.init();
            }
        });

        t.init();
    }

    Plugin.prototype.init = function() {
        var t = this;

        // if caption is active
        if (t.captionOn == '') {
            return;
        }

        if (t.captionOn !== 'expand' && !CubePortfolio.private.modernBrowser) {
            t.parent.options.caption = t.captionOn = 'minimal';
        }

        // .cbp-caption-active is used only for css
        // so it will not generate a big css from sass if a caption is set
        t.parent.$obj.addClass('cbp-caption-active cbp-caption-' + t.captionOn);
    };

    Plugin.prototype.destroy = function() {
        this.parent.$obj.removeClass('cbp-caption-active cbp-caption-' + this.captionOn);
    };

    CubePortfolio.plugins.caption = function(parent) {
        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        parent.registerEvent('initFinish', function() {
            parent.$obj.on('click.cbp', '.cbp-caption-defaultWrap', function(e) {
                e.preventDefault();

                if (parent.isAnimating) {
                    return;
                }

                parent.isAnimating = true;

                var defaultWrap = $(this),
                    activeWrap = defaultWrap.next(),
                    caption = defaultWrap.parent(),
                    endStyle = {
                        position: 'relative',
                        height: activeWrap.outerHeight(true)
                    },
                    startStyle = {
                        position: 'relative',
                        height: 0
                    };

                parent.$obj.addClass('cbp-caption-expand-active');

                // swap endStyle & startStyle
                if (caption.hasClass('cbp-caption-expand-open')) {
                    var temp = startStyle;
                    startStyle = endStyle;
                    endStyle = temp;
                    caption.removeClass('cbp-caption-expand-open');
                }

                activeWrap.css(endStyle);

                parent.$obj.one('pluginResize.cbp', function() {
                    parent.isAnimating = false;
                    parent.$obj.removeClass('cbp-caption-expand-active');

                    if (endStyle.height === 0) {
                        caption.removeClass('cbp-caption-expand-open');
                        activeWrap.attr('style', '');
                    }
                });

                // reposition the blocks
                parent.layoutAndAdjustment();

                // set activeWrap to 0 so I can start animation in the next frame
                activeWrap.css(startStyle);

                // delay animation
                requestAnimationFrame(function() {
                    caption.addClass('cbp-caption-expand-open');

                    activeWrap.css(endStyle);

                    // used by slider layoutMode
                    parent.triggerEvent('gridAdjust');

                    parent.triggerEvent('resizeGrid');
                });
            });
        }, true);
    }

    Plugin.prototype.destroy = function() {
        this.parent.$obj.find('.cbp-caption-defaultWrap').off('click.cbp').parent().removeClass('cbp-caption-expand-active');
    };

    CubePortfolio.plugins.captionExpand = function(parent) {
        if (parent.options.caption !== 'expand') {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var deferred = $.Deferred();

        parent.pushQueue('delayFrame', deferred);

        parent.registerEvent('initEndWrite', function() {
            parent.blocksOn.each(function(index, el) {
                el.style[CubePortfolio.private.animationDelay] = (index * parent.options.displayTypeSpeed) + 'ms';
            });

            parent.$obj.addClass('cbp-displayType-bottomToTop');

            // get last element
            parent.blocksOn.last().one(CubePortfolio.private.animationend, function() {
                parent.$obj.removeClass('cbp-displayType-bottomToTop');

                parent.blocksOn.each(function(index, el) {
                    el.style[CubePortfolio.private.animationDelay] = '';
                });

                // resolve event after the animation is finished
                deferred.resolve();
            });
        }, true);
    }

    CubePortfolio.plugins.displayBottomToTop = function(parent) {
        if (!CubePortfolio.private.modernBrowser || parent.options.displayType !== 'bottomToTop' || parent.blocksOn.length === 0) {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var deferred = $.Deferred();

        parent.pushQueue('delayFrame', deferred);

        parent.registerEvent('initEndWrite', function() {
            parent.obj.style[CubePortfolio.private.animationDuration] = parent.options.displayTypeSpeed + 'ms';

            parent.$obj.addClass('cbp-displayType-fadeIn');

            parent.$obj.one(CubePortfolio.private.animationend, function() {
                parent.$obj.removeClass('cbp-displayType-fadeIn');

                parent.obj.style[CubePortfolio.private.animationDuration] = '';

                // resolve event after the animation is finished
                deferred.resolve();
            });
        }, true);
    }

    CubePortfolio.plugins.displayFadeIn = function(parent) {
        if (!CubePortfolio.private.modernBrowser || (parent.options.displayType !== 'lazyLoading' && parent.options.displayType !== 'fadeIn') || parent.blocksOn.length === 0) {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var deferred = $.Deferred();

        parent.pushQueue('delayFrame', deferred);

        parent.registerEvent('initEndWrite', function() {
            parent.obj.style[CubePortfolio.private.animationDuration] = parent.options.displayTypeSpeed + 'ms';

            parent.$obj.addClass('cbp-displayType-fadeInToTop');

            parent.$obj.one(CubePortfolio.private.animationend, function() {
                parent.$obj.removeClass('cbp-displayType-fadeInToTop');

                parent.obj.style[CubePortfolio.private.animationDuration] = '';

                // resolve event after the animation is finished
                deferred.resolve();
            });
        }, true);
    }

    CubePortfolio.plugins.displayFadeInToTop = function(parent) {
        if (!CubePortfolio.private.modernBrowser || parent.options.displayType !== 'fadeInToTop' || parent.blocksOn.length === 0) {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var deferred = $.Deferred();

        parent.pushQueue('delayFrame', deferred);

        parent.registerEvent('initEndWrite', function() {
            parent.blocksOn.each(function(index, el) {
                el.style[CubePortfolio.private.animationDelay] = (index * parent.options.displayTypeSpeed) + 'ms';
            });

            parent.$obj.addClass('cbp-displayType-sequentially');

            // get last element
            parent.blocksOn.last().one(CubePortfolio.private.animationend, function() {
                parent.$obj.removeClass('cbp-displayType-sequentially');

                parent.blocksOn.each(function(index, el) {
                    el.style[CubePortfolio.private.animationDelay] = '';
                });

                // resolve event after the animation is finished
                deferred.resolve();
            });
        }, true);
    }

    CubePortfolio.plugins.displaySequentially = function(parent) {
        if (!CubePortfolio.private.modernBrowser || parent.options.displayType !== 'sequentially' || parent.blocksOn.length === 0) {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        t.filters = $(parent.options.filters);
        t.filterData = [];

        parent.registerEvent('afterPlugins', function(elems) {
            // set default filter if it's present in url
            t.filterFromUrl();
            t.registerFilter();
        });

        // reset filters active class after the search is used
        parent.registerEvent('resetFiltersVisual', function() {
            var arr = parent.options.defaultFilter.split('|');

            t.filters.each(function(index, el) {
                var items = $(el).find('.cbp-filter-item');

                $.each(arr, function(index, val) {
                    var item = items.filter('[data-filter="' + val + '"]');
                    if (item.length) {
                        item.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
                        arr.splice(index, 1);
                        return false;
                    }
                });
            });

            parent.defaultFilter = parent.options.defaultFilter;
        });
    }

    Plugin.prototype.registerFilter = function() {
        var t = this,
            parent = t.parent,
            filtersCallback,
            arr = parent.defaultFilter.split('|');

        t.wrap = t.filters.find('.cbp-l-filters-dropdownWrap')
            .on({
                'mouseover.cbp': function() {
                    $(this).addClass('cbp-l-filters-dropdownWrap-open');
                },
                'mouseleave.cbp': function() {
                    $(this).removeClass('cbp-l-filters-dropdownWrap-open');
                }
            });

        t.filters.each(function(index, el) {
            var filter = $(el),
                filterName = '*',
                items = filter.find('.cbp-filter-item'),
                dropdown = {};

            if (filter.hasClass('cbp-l-filters-dropdown')) {
                dropdown.wrap = filter.find('.cbp-l-filters-dropdownWrap');
                dropdown.header = filter.find('.cbp-l-filters-dropdownHeader');
                dropdown.headerText = dropdown.header.text();
            }

            // activate counter for filters
            parent.$obj.cubeportfolio('showCounter', items);

            $.each(arr, function(index, val) {
                if (items.filter('[data-filter="' + val + '"]').length) {
                    filterName = val;
                    arr.splice(index, 1);
                    return false;
                }
            });

            $.data(el, 'filterName', filterName);
            t.filterData.push(el);

            t.filtersCallback(dropdown, items.filter('[data-filter="' + filterName + '"]'));

            items.on('click.cbp', function() {
                var item = $(this);

                if (item.hasClass('cbp-filter-item-active') || parent.isAnimating) {
                    return;
                }

                t.filtersCallback(dropdown, item);

                $.data(el, 'filterName', item.data('filter'));

                var name = $.map(t.filterData, function(el, index) {
                    var f = $.data(el, 'filterName');
                    return (f !== "" && f !== '*') ? f : null;
                });

                if (name.length < 1) {
                    name = ['*'];
                }

                var filterJoin = name.join('|');

                if (parent.defaultFilter !== filterJoin) {
                    // filter the items
                    parent.$obj.cubeportfolio('filter', filterJoin);
                }
            });
        });
    };

    Plugin.prototype.filtersCallback = function(dropdown, item) {
        if (!$.isEmptyObject(dropdown)) {
            dropdown.wrap.trigger('mouseleave.cbp');

            if (dropdown.headerText) {
                dropdown.headerText = '';
            } else {
                dropdown.header.html(item.html());
            }
        }

        item.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
    };

    /**
     * Check if filters are present in url
     */
    Plugin.prototype.filterFromUrl = function() {
        var match = /#cbpf=(.*?)([#\?&]|$)/gi.exec(location.href);

        if (match !== null) {
            this.parent.defaultFilter = decodeURIComponent(match[1]);
        }
    };

    Plugin.prototype.destroy = function() {
        var t = this;

        t.filters.find('.cbp-filter-item').off('.cbp');
        t.wrap.off('.cbp');
    };

    CubePortfolio.plugins.filters = function(parent) {
        if (parent.options.filters === '') {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var gapVerticalInitial = parent.options.gapVertical;
        var gapHorizontalInitial = parent.options.gapHorizontal;

        parent.registerEvent('onMediaQueries', function(opt) {
            parent.options.gapVertical = (opt && opt.hasOwnProperty('gapVertical'))? opt.gapVertical : gapVerticalInitial;
            parent.options.gapHorizontal = (opt && opt.hasOwnProperty('gapHorizontal'))? opt.gapHorizontal : gapHorizontalInitial;

            parent.blocks.each(function(index, el) {
                var data = $(el).data('cbp');

                data.widthAndGap = data.width + parent.options.gapVertical;
                data.heightAndGap = data.height + parent.options.gapHorizontal;
            });
        });
    }

    CubePortfolio.plugins.changeGapOnMediaQueries = function(parent) {
        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var options = {};

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        t.options = $.extend({}, options, t.parent.options.plugins.inlineSlider);

        t.runInit();

        parent.registerEvent('addItemsToDOM', function() {
            t.runInit();
        });

    }

    function InitSlider(slider) {
        var t = this;

        if (slider.hasClass('cbp-slider-inline-ready')) {
            return;
        }

        slider.addClass('cbp-slider-inline-ready');

        t.items = slider.find('.cbp-slider-wrapper').children('.cbp-slider-item');

        t.active = t.items.filter('.cbp-slider-item--active').index();
        t.total = t.items.length - 1;

        t.updateLeft();

        slider.find('.cbp-slider-next').on('click.cbp', function(e) {
            e.preventDefault();

            if (t.active < t.total) {
                t.active++;
                t.updateLeft();
            } else if (t.active === t.total) {
                t.active = 0;
                t.updateLeft();
            }
        });

        slider.find('.cbp-slider-prev').on('click.cbp', function(e) {
            e.preventDefault();

            if (t.active > 0) {
                t.active--;
                t.updateLeft();
            } else if (t.active === 0) {
                t.active = t.total;
                t.updateLeft();
            }
        });
    };

    InitSlider.prototype.updateLeft = function() {
        var t = this;

        t.items.removeClass('cbp-slider-item--active');
        t.items.eq(t.active).addClass('cbp-slider-item--active');

        t.items.each(function(index, el) {
            el.style.left = (index - t.active) + '00%';
        });
    };

    Plugin.prototype.runInit = function() {
        var t = this;

        t.parent.$obj.find('.cbp-slider-inline').not('.cbp-slider-inline-ready').each(function(index, el) {
            var slider = $(el);
            var activeImage = slider.find('.cbp-slider-item--active').find('img')[0];

            if (activeImage.hasAttribute('data-cbp-src')) {
                t.parent.$obj.on('lazyLoad.cbp', function(e, image) {
                    if (image.src === activeImage.src) {
                        new InitSlider(slider);
                    }
                });
            } else {
                new InitSlider(slider);
            }
        });
    };

    Plugin.prototype.destroy = function() {
        var t = this;

        t.parent.$obj.find('.cbp-slider-next').off('click.cbp');
        t.parent.$obj.find('.cbp-slider-prev').off('click.cbp');

        t.parent.$obj.off('lazyLoad.cbp');

        t.parent.$obj.find('.cbp-slider-inline').each(function(index, el) {
            var slider = $(el);

            slider.removeClass('cbp-slider-inline-ready');

            var items = slider.find('.cbp-slider-item');
            items.removeClass('cbp-slider-item--active');

            items.removeAttr('style');

            items.eq(0).addClass('cbp-slider-item--active');
        });
    };

    CubePortfolio.plugins.inlineSlider = function(parent) {
        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var options = {
        loadingClass: 'cbp-lazyload',
        threshold: 400, // loads images 150px before they're visible
    };

    var CubePortfolio = $.fn.cubeportfolio.constructor;
    var $window = $(window);

    // add scroll event to page for lazyLoad
    CubePortfolio.private.lazyLoadScroll = new CubePortfolio.private.publicEvents('scroll.cbplazyLoad', 50);

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        t.options = $.extend({}, options, t.parent.options.plugins.lazyLoad);

        parent.registerEvent('initFinish', function() {
            t.loadImages();

            parent.registerEvent('resizeMainContainer', function() {
                t.loadImages();
            });

            parent.registerEvent('filterFinish', function() {
                t.loadImages();
            });

            CubePortfolio.private.lazyLoadScroll.initEvent({
                instance: t,
                fn: t.loadImages
            });
        }, true);

    }

    Plugin.prototype.loadImages = function() {
        var t = this;

        var imgs = t.parent.$obj.find('img').filter('[data-cbp-src]');

        if (imgs.length === 0) {
            return;
        }

        t.screenHeight = $window.height();

        imgs.each(function(index, el) {
            var parentNode = $(el.parentNode);

            if (!t.isElementInScreen(el)) {
                parentNode.addClass(t.options.loadingClass);
                return;
            }

            var dataSrc = el.getAttribute('data-cbp-src');

            if (t.parent.checkSrc($('<img>').attr('src', dataSrc)) === null) {
                t.removeLazyLoad(el, dataSrc);
                parentNode.removeClass(t.options.loadingClass);
            } else {
                parentNode.addClass(t.options.loadingClass);
                $('<img>').on('load.cbp error.cbp', function() {
                    t.removeLazyLoad(el, dataSrc, parentNode);
                }).attr('src', dataSrc); // for ie8
            }
        });
    };

    Plugin.prototype.removeLazyLoad = function(el, dataSrc, parentNode) {
        var t = this;

        el.src = dataSrc;
        el.removeAttribute('data-cbp-src');
        t.parent.removeAttrImage(el);

        // trigger public event
        t.parent.$obj.trigger('lazyLoad.cbp', el);

        if (parentNode) {
            if (CubePortfolio.private.modernBrowser) {
                $(el).one(CubePortfolio.private.transitionend, function() {
                    parentNode.removeClass(t.options.loadingClass);
                });
            } else {
                parentNode.removeClass(t.options.loadingClass);
            }
        }
    };

    Plugin.prototype.isElementInScreen = function(el) {
        var t = this;

        var bound = el.getBoundingClientRect();
        var bottom = bound.bottom + t.options.threshold;
        var screenHeight = t.screenHeight + bottom - (bound.top - t.options.threshold);

        return bottom >= 0 && bottom <= screenHeight;
    };

    Plugin.prototype.destroy = function() {
        CubePortfolio.private.lazyLoadScroll.destroyEvent(this);
    };

    CubePortfolio.plugins.lazyLoad = function(parent) {
        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    // add scroll event to page for loadMore
    CubePortfolio.private.loadMoreScroll = new CubePortfolio.private.publicEvents('scroll.loadMore', 100);

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        t.loadMore = $(parent.options.loadMore).find('.cbp-l-loadMore-link');

        // load click or auto action
        if (t.loadMore.length) {
            t[parent.options.loadMoreAction]();
        }
    }

    Plugin.prototype.createURL = function(url, clicks) {
        return url + (/\?/.test(url) ? '&' : '?') + 'block=' + clicks;
    };

    Plugin.prototype.click = function() {
        var t = this,
            numberOfClicks = 0;

        t.loadMore.on('click.cbp', function(e) {
            var button = $(this);

            e.preventDefault();

            if (t.parent.isAnimating || button.hasClass('cbp-l-loadMore-stop')) {
                return;
            }

            // set loading status
            button.addClass('cbp-l-loadMore-loading');

            numberOfClicks++;

            // perform ajax request
            $.ajax({
                url: t.createURL(t.loadMore.attr('href'), numberOfClicks),
                type: 'GET',
                dataType: 'HTML'
            }).done(function(result) {
                var items = result.replace(/(\r\n|\n|\r)/gm, '');

                var startBlock = items.indexOf('cbp-loadMore-block' + numberOfClicks);

                // stop the loadMore because the block doesn't exist
                if (startBlock === -1) {
                    button.addClass('cbp-l-loadMore-stop');
                    return;
                }

                // set start from where I will substring
                var start = items.indexOf('>', startBlock) + 1;

                var endBlock = items.indexOf('cbp-loadMore-block' + (numberOfClicks + 1));

                // if endBlock doesn't exist
                var end = (endBlock === -1)? items.lastIndexOf('</') : items.lastIndexOf('</', endBlock);

                t.parent.$obj.cubeportfolio('append', items.substring(start, end), function() {
                    // remove class from button
                    button.removeClass('cbp-l-loadMore-loading');

                    // check if we have more works
                    if (endBlock === -1) {
                        button.addClass('cbp-l-loadMore-stop');
                    }
                });

            }).fail(function() {
                // error
            });

        });
    };


    Plugin.prototype.auto = function() {
        var t = this;
        var $window = $(window);

        t.parent.$obj.on('initComplete.cbp', function() {
            Object.create({
                init: function() {
                    var self = this;

                    // the job inactive
                    self.isActive = false;

                    self.numberOfClicks = 0;

                    // set loading status
                    t.loadMore.addClass('cbp-l-loadMore-loading');

                    // add events for scroll
                    self.addEvents();

                    // trigger method on init
                    self.getNewItems();
                },

                addEvents: function() {
                    var self = this;

                    t.loadMore.on('click.cbp', function(e) {
                        e.preventDefault();
                    });

                    CubePortfolio.private.loadMoreScroll.initEvent({
                        instance: self,
                        fn: function() {
                            if (!t.parent.isAnimating) {
                                // get new items on scroll
                                self.getNewItems();
                            }
                        }
                    });

                    // when the filter is completed
                    t.parent.$obj.on('filterComplete.cbp', function() {
                        self.getNewItems();
                    });
                },

                getNewItems: function() {
                    var self = this,
                        topLoadMore, topWindow;

                    if (self.isActive || t.loadMore.hasClass('cbp-l-loadMore-stop')) {
                        return;
                    }

                    // add a treshold
                    topLoadMore = t.loadMore.offset().top - 200;
                    topWindow = $window.scrollTop() + $window.height();

                    if (topLoadMore > topWindow) {
                        return;
                    }

                    // this job is now busy
                    self.isActive = true;

                    // increment number of clicks
                    self.numberOfClicks++;

                    // perform ajax request
                    $.ajax({
                            url: t.createURL(t.loadMore.attr('href'), self.numberOfClicks),
                            type: 'GET',
                            dataType: 'HTML',
                        })
                        .done(function(result) {
                            var items = result.replace(/(\r\n|\n|\r)/gm, '');

                            var startBlock = items.indexOf('cbp-loadMore-block' + self.numberOfClicks);

                            // stop the loadMore because the block doesn't exist
                            if (startBlock === -1) {
                                t.loadMore.addClass('cbp-l-loadMore-stop');
                                return;
                            }

                            // set start from where I will substring
                            var start = items.indexOf('>', startBlock) + 1;

                            var endBlock = items.indexOf('cbp-loadMore-block' + (self.numberOfClicks + 1));
                            var end;

                            // if endBlock doesn't exist
                            if (endBlock === -1) {
                                end = items.lastIndexOf('</');
                            } else {
                                end = items.lastIndexOf('</', endBlock);
                            }

                            t.parent.$obj.cubeportfolio('append', items.substring(start, end), function() {
                                if (endBlock === -1) {
                                    t.loadMore.addClass('cbp-l-loadMore-stop');

                                    // remove events
                                    CubePortfolio.private.loadMoreScroll.destroyEvent(this);
                                    t.parent.$obj.off('filterComplete.cbp');
                                } else {
                                    // make the job inactive
                                    self.isActive = false;

                                    $window.trigger('scroll.loadMore');
                                }
                            });
                        })
                        .fail(function() {
                            // make the job inactive
                            self.isActive = false;
                        });
                }
            }).init();
        });

    };


    Plugin.prototype.destroy = function() {
        var t = this;

        t.loadMore.off('.cbp');

        CubePortfolio.private.loadMoreScroll.destroyEvent(this);
    };

    CubePortfolio.plugins.loadMore = function(parent) {
        if (parent.options.loadMore === '') {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    var popup = {
        /**
         * init function for popup
         * @param cubeportfolio = cubeportfolio instance
         * @param type =  'lightbox' or 'singlePage'
         */
        init: function(cubeportfolio, type) {
            var t = this,
                currentBlock;

            // remember cubeportfolio instance
            t.cubeportfolio = cubeportfolio;

            // remember if this instance is for lightbox or for singlePage
            t.type = type;

            // remember if the popup is open or not
            t.isOpen = false;

            t.options = t.cubeportfolio.options;

            if (type === 'lightbox') {
                t.cubeportfolio.registerEvent('resizeWindow', function() {
                    t.resizeImage();
                });
            }

            if (type === 'singlePageInline') {
                t.height = 0;

                // create markup, css and add events for SinglePageInline
                t.createMarkupSinglePageInline();

                t.cubeportfolio.registerEvent('resizeGrid', function() {
                    if (t.isOpen) {
                        // @todo must add support for this features in the future
                        t.close(); // workaround
                    }
                });

                if (t.options.singlePageInlineDeeplinking) {
                    t.url = location.href;

                    if (t.url.slice(-1) === '#') {
                        t.url = t.url.slice(0, -1);
                    }

                    var links = t.url.split('#cbpi=');
                    var url = links.shift(); // remove first item

                    $.each(links, function(index, link) {
                        t.cubeportfolio.blocksOn.each(function(index1, el) {
                            var singlePageInline = $(el).find(t.options.singlePageInlineDelegate + '[href="' + link + '"]');

                            if (singlePageInline.length) {
                                currentBlock = singlePageInline;
                                return false;
                            }
                        });

                        if (currentBlock) {
                            return false;
                        }
                    });

                    if (currentBlock) {
                        t.cubeportfolio.registerEvent('initFinish', function() {
                            t.openSinglePageInline(t.cubeportfolio.blocksOn, currentBlock[0]);
                        }, true);
                    }
                }

                return;
            }

            // create markup, css and add events for lightbox and singlePage
            t.createMarkup();

            if (type === 'singlePage') {
                t.cubeportfolio.registerEvent('resizeWindow', function() {
                    if (t.options.singlePageStickyNavigation) {

                        var width = t.wrap[0].clientWidth;

                        if (width > 0) {
                            t.navigationWrap.width(width);

                            // set navigation width='window width' to center the divs
                            t.navigation.width(width);
                        }

                    }
                });

                if (t.options.singlePageDeeplinking) {
                    t.url = location.href;

                    if (t.url.slice(-1) === '#') {
                        t.url = t.url.slice(0, -1);
                    }

                    var links = t.url.split('#cbp=');
                    var url = links.shift(); // remove first item

                    $.each(links, function(index, link) {
                        t.cubeportfolio.blocksOn.each(function(index1, el) {
                            var singlePage = $(el).find(t.options.singlePageDelegate + '[href="' + link + '"]');

                            if (singlePage.length) {
                                currentBlock = singlePage;
                                return false;
                            }
                        });

                        if (currentBlock) {
                            return false;
                        }
                    });

                    if (currentBlock) {
                        t.url = url;

                        var self = currentBlock,
                            gallery = self.attr('data-cbp-singlePage'),
                            blocks = [];

                        if (gallery) {
                            blocks = self.closest($('.cbp-item')).find('[data-cbp-singlePage="' + gallery + '"]');
                        } else {
                            t.cubeportfolio.blocksOn.each(function(index, el) {
                                var item = $(el);

                                if (item.not('.cbp-item-off')) {
                                    item.find(t.options.singlePageDelegate).each(function(index2, el2) {
                                        if (!$(el2).attr('data-cbp-singlePage')) {
                                            blocks.push(el2);
                                        }
                                    });
                                }
                            });
                        }

                        t.openSinglePage(blocks, currentBlock[0]);
                    } else if (links.length) { // @todo - hack to load items from loadMore
                        var fakeLink = document.createElement('a');
                        fakeLink.setAttribute('href', links[0]);
                        t.openSinglePage([fakeLink], fakeLink);
                    }
                }
            }
        },

        /**
         * Create markup, css and add events
         */
        createMarkup: function() {
            var t = this,
                animationCls = '';

            if (t.type === 'singlePage') {
                if (t.options.singlePageAnimation !== 'left') {
                    animationCls = ' cbp-popup-singlePage-' + t.options.singlePageAnimation;
                }
            }

            // wrap element
            t.wrap = $('<div/>', {
                'class': 'cbp-popup-wrap cbp-popup-' + t.type + animationCls,
                'data-action': (t.type === 'lightbox') ? 'close' : ''
            }).on('click.cbp', function(e) {
                if (t.stopEvents) {
                    return;
                }

                var action = $(e.target).attr('data-action');

                if (t[action]) {
                    t[action]();
                    e.preventDefault();
                }
            });

            // content element
            t.content = $('<div/>', {
                'class': 'cbp-popup-content'
            }).appendTo(t.wrap);

            // append loading div
            $('<div/>', {
                'class': 'cbp-popup-loadingBox'
            }).appendTo(t.wrap);

            // add background only for ie8
            if (CubePortfolio.private.browser === 'ie8') {
                t.bg = $('<div/>', {
                    'class': 'cbp-popup-ie8bg',
                    'data-action': (t.type === 'lightbox') ? 'close' : ''
                }).appendTo(t.wrap);
            }

            // create navigation wrap
            t.navigationWrap = $('<div/>', {
                'class': 'cbp-popup-navigation-wrap'
            }).appendTo(t.wrap);

            // create navigation block
            t.navigation = $('<div/>', {
                'class': 'cbp-popup-navigation'
            }).appendTo(t.navigationWrap);

            // close
            t.closeButton = $('<div/>', {
                'class': 'cbp-popup-close',
                'title': 'Close (Esc arrow key)',
                'data-action': 'close'
            }).appendTo(t.navigation);

            // next
            t.nextButton = $('<div/>', {
                'class': 'cbp-popup-next',
                'title': 'Next (Right arrow key)',
                'data-action': 'next'
            }).appendTo(t.navigation);


            // prev
            t.prevButton = $('<div/>', {
                'class': 'cbp-popup-prev',
                'title': 'Previous (Left arrow key)',
                'data-action': 'prev'
            }).appendTo(t.navigation);


            if (t.type === 'singlePage') {
                if (t.options.singlePageCounter) {
                    // counter for singlePage
                    t.counter = $(t.options.singlePageCounter).appendTo(t.navigation);
                    t.counter.text('');
                }

                t.content.on('click.cbp', t.options.singlePageDelegate, function(e) {
                    e.preventDefault();

                    var i,
                        len = t.dataArray.length,
                        href = this.getAttribute('href');

                    for (i = 0; i < len; i++) {
                        if (t.dataArray[i].url === href) {
                            break;
                        }
                    }

                    t.singlePageJumpTo(i - t.current);
                });

                // if there are some events than overrides the default scroll behaviour don't go to them
                t.wrap.on('mousewheel.cbp' + ' DOMMouseScroll.cbp', function(e) {
                    e.stopImmediatePropagation();
                });
            }

            $(document).on('keydown.cbp', function(e) {
                // if is not open => return
                if (!t.isOpen) {
                    return;
                }

                // if all events are stopped => return
                if (t.stopEvents) {
                    return;
                }

                if (lightboxIsOpen) {
                    e.stopImmediatePropagation();
                }

                if (e.keyCode === 37) { // prev key
                    t.prev();
                } else if (e.keyCode === 39) { // next key
                    t.next();
                } else if (e.keyCode === 27) { //esc key
                    t.close();
                }
            });
        },

        createMarkupSinglePageInline: function() {
            var t = this;

            // wrap element
            t.wrap = $('<div/>', {
                'class': 'cbp-popup-singlePageInline'
            }).on('click.cbp', function(e) {
                if (t.stopEvents) {
                    return;
                }

                var action = $(e.target).attr('data-action');

                if (action && t[action]) {
                    t[action]();
                    e.preventDefault();
                }
            });

            // content element
            t.content = $('<div/>', {
                'class': 'cbp-popup-content'
            }).appendTo(t.wrap);

            // append loading div
            // $('<div/>', {
            //     'class': 'cbp-popup-loadingBox'
            // }).appendTo(t.wrap);

            // create navigation block
            t.navigation = $('<div/>', {
                'class': 'cbp-popup-navigation'
            }).appendTo(t.wrap);

            // close
            t.closeButton = $('<div/>', {
                'class': 'cbp-popup-close',
                'title': 'Close (Esc arrow key)',
                'data-action': 'close'
            }).appendTo(t.navigation);
        },

        destroy: function() {
            var t = this,
                body = $('body');

            // remove off key down
            $(document).off('keydown.cbp');

            // external lightbox and singlePageInline
            body.off('click.cbp', t.options.lightboxDelegate);
            body.off('click.cbp', t.options.singlePageDelegate);

            t.content.off('click.cbp', t.options.singlePageDelegate);

            t.cubeportfolio.$obj.off('click.cbp', t.options.singlePageInlineDelegate);
            t.cubeportfolio.$obj.off('click.cbp', t.options.lightboxDelegate);
            t.cubeportfolio.$obj.off('click.cbp', t.options.singlePageDelegate);

            t.cubeportfolio.$obj.removeClass('cbp-popup-isOpening');

            t.cubeportfolio.$obj.find('.cbp-item').removeClass('cbp-singlePageInline-active');

            t.wrap.remove();
        },

        openLightbox: function(blocks, currentBlock) {
            var t = this,
                i = 0,
                currentBlockHref, tempHref = [],
                element;

            if (t.isOpen) {
                return;
            }

            lightboxIsOpen = true;

            // remember that the lightbox is open now
            t.isOpen = true;

            // remember to stop all events after the lightbox has been shown
            t.stopEvents = false;

            // array with elements
            t.dataArray = [];

            // reset current
            t.current = null;

            currentBlockHref = currentBlock.getAttribute('href');
            if (currentBlockHref === null) {
                throw new Error('HEI! Your clicked element doesn\'t have a href attribute.');
            }

            $.each(blocks, function(index, item) {
                var href = item.getAttribute('href'),
                    src = href, // default if element is image
                    type = 'isImage', // default if element is image
                    videoLink;

                if ($.inArray(href, tempHref) === -1) {
                    if (currentBlockHref === href) {
                        t.current = i;
                    } else if (!t.options.lightboxGallery) {
                        return;
                    }

                    if (/youtu\.?be/i.test(href)) {
                        var indexVideo = href.lastIndexOf('v=') + 2;

                        if (indexVideo === 1) {
                            indexVideo = href.lastIndexOf('/') + 1;
                        }

                        videoLink = href.substring(indexVideo);

                        if (!(/autoplay=/i.test(videoLink))) {
                            videoLink += '&autoplay=1';
                        }

                        videoLink = videoLink.replace(/\?|&/, '?');

                        // create new href
                        src = '//www.youtube.com/embed/' + videoLink;

                        type = 'isYoutube';
                    } else if (/vimeo\.com/i.test(href)) {
                        videoLink = href.substring(href.lastIndexOf('/') + 1);

                        if (!(/autoplay=/i.test(videoLink))) {
                            videoLink += '&autoplay=1';
                        }

                        videoLink = videoLink.replace(/\?|&/, '?');

                        // create new href
                        src = '//player.vimeo.com/video/' + videoLink;

                        type = 'isVimeo';
                    } else if (/www\.ted\.com/i.test(href)) {
                        // create new href
                        src = 'http://embed.ted.com/talks/' + href.substring(href.lastIndexOf('/') + 1) + '.html';

                        type = 'isTed';
                    } else if (/soundcloud\.com/i.test(href)) {
                        // create new href
                        src = href;

                        type = 'isSoundCloud';
                    } else if (/(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(href)) {
                        if (href.indexOf('|') !== -1) {
                            // create new href
                            src = href.split('|');
                        } else {
                            // create new href
                            src = href.split('%7C');
                        }

                        type = 'isSelfHostedVideo';
                    } else if (/\.mp3$/i.test(href)) {
                        src = href;
                        type = 'isSelfHostedAudio';
                    }

                    t.dataArray.push({
                        src: src,
                        title: item.getAttribute(t.options.lightboxTitleSrc),
                        type: type
                    });

                    i++;
                }

                tempHref.push(href);
            });

            // total numbers of elements
            t.counterTotal = t.dataArray.length;

            if (t.counterTotal === 1) {
                t.nextButton.hide();
                t.prevButton.hide();
                t.dataActionImg = '';
            } else {
                t.nextButton.show();
                t.prevButton.show();
                t.dataActionImg = 'data-action="next"';
            }

            // append to body
            t.wrap.appendTo(document.body);

            t.scrollTop = $(window).scrollTop();

            t.originalStyle = $('html').attr('style');

            $('html').css({
                overflow: 'hidden',
                marginRight: window.innerWidth - $(document).width()
            });

            t.wrap.addClass('cbp-popup-transitionend');

            // show the wrapper (lightbox box)
            t.wrap.show();

            // get the current element
            element = t.dataArray[t.current];

            // call function if current element is image or video (iframe)
            t[element.type](element);
        },

        openSinglePage: function(blocks, currentBlock) {
            var t = this,
                i = 0,
                currentBlockHref, tempHref = [];

            if (t.isOpen) {
                return;
            }

            // check singlePageInline and close it
            if (t.cubeportfolio.singlePageInline && t.cubeportfolio.singlePageInline.isOpen) {
                t.cubeportfolio.singlePageInline.close();
            }

            // remember that the lightbox is open now
            t.isOpen = true;

            // remember to stop all events after the popup has been showing
            t.stopEvents = false;

            // array with elements
            t.dataArray = [];

            // reset current
            t.current = null;

            currentBlockHref = currentBlock.getAttribute('href');
            if (currentBlockHref === null) {
                throw new Error('HEI! Your clicked element doesn\'t have a href attribute.');
            }

            $.each(blocks, function(index, item) {
                var href = item.getAttribute('href');

                if ($.inArray(href, tempHref) === -1) {
                    if (currentBlockHref === href) {
                        t.current = i;
                    }

                    t.dataArray.push({
                        url: href,
                        element: item
                    });

                    i++;
                }

                tempHref.push(href);
            });

            // total numbers of elements
            t.counterTotal = t.dataArray.length;

            if (t.counterTotal === 1) {
                t.nextButton.hide();
                t.prevButton.hide();
            } else {
                t.nextButton.show();
                t.prevButton.show();
            }

            // append to body
            t.wrap.appendTo(document.body);

            t.scrollTop = $(window).scrollTop();

            // go to top of the page (reset scroll)
            t.wrap.scrollTop(0);

            // show the wrapper
            t.wrap.show();

            // finish the open animation
            t.finishOpen = 2;

            // if transitionend is not fulfilled
            t.navigationMobile = $();
            t.wrap.one(CubePortfolio.private.transitionend, function() {
                $('html').css({
                    overflow: 'hidden',
                    marginRight: window.innerWidth - $(document).width()
                });

                t.wrap.addClass('cbp-popup-transitionend');

                // make the navigation sticky
                if (t.options.singlePageStickyNavigation) {

                    t.wrap.addClass('cbp-popup-singlePage-sticky');

                    t.navigationWrap.width(t.wrap[0].clientWidth);

                    if (CubePortfolio.private.browser === 'android' || CubePortfolio.private.browser === 'ios') {
                        // wrap element
                        t.navigationMobile = $('<div/>', {
                            'class': 'cbp-popup-singlePage cbp-popup-singlePage-sticky',
                            'id': t.wrap.attr('id')
                        }).on('click.cbp', function(e) {
                            if (t.stopEvents) {
                                return;
                            }

                            var action = $(e.target).attr('data-action');

                            if (t[action]) {
                                t[action]();
                                e.preventDefault();
                            }
                        });

                        t.navigationMobile.appendTo(document.body).append(t.navigationWrap);
                    }
                }

                t.finishOpen--;

                if (t.finishOpen <= 0) {
                    t.updateSinglePageIsOpen.call(t);
                }
            });

            if (CubePortfolio.private.browser === 'ie8' || CubePortfolio.private.browser === 'ie9') {
                $('html').css({
                    overflow: 'hidden',
                    marginRight: window.innerWidth - $(document).width()
                });

                t.wrap.addClass('cbp-popup-transitionend');

                // make the navigation sticky
                if (t.options.singlePageStickyNavigation) {
                    t.navigationWrap.width(t.wrap[0].clientWidth);

                    setTimeout(function() {
                        t.wrap.addClass('cbp-popup-singlePage-sticky');
                    }, 1000);
                }

                t.finishOpen--;
            }

            t.wrap.addClass('cbp-popup-loading');

            // force reflow and then add class
            t.wrap.offset();
            t.wrap.addClass('cbp-popup-singlePage-open');

            // change link
            if (t.options.singlePageDeeplinking) {
                // ignore old #cbp from href
                t.url = t.url.split('#cbp=')[0];
                location.href = t.url + '#cbp=' + t.dataArray[t.current].url;
            }

            // run callback function
            if ($.isFunction(t.options.singlePageCallback)) {
                t.options.singlePageCallback.call(t, t.dataArray[t.current].url, t.dataArray[t.current].element);
            }
        },

        openSinglePageInline: function(blocks, currentBlock, fromOpen) {
            var t = this,
                start = 0,
                currentBlockHref,
                tempCurrent,
                cbpitem,
                parentElement;

            fromOpen = fromOpen || false;

            t.fromOpen = fromOpen;

            t.storeBlocks = blocks;
            t.storeCurrentBlock = currentBlock;

            // check singlePageInline and close it
            if (t.isOpen) {
                tempCurrent = $(currentBlock).closest('.cbp-item').index();

                if ((t.dataArray[t.current].url !== currentBlock.getAttribute('href')) || (t.current !== tempCurrent)) {
                    t.cubeportfolio.singlePageInline.close('open', {
                        blocks: blocks,
                        currentBlock: currentBlock,
                        fromOpen: true
                    });
                } else {
                    t.close();
                }

                return;
            }

            // remember that the lightbox is open now
            t.isOpen = true;

            // remember to stop all events after the popup has been showing
            t.stopEvents = false;

            // array with elements
            t.dataArray = [];

            // reset current
            t.current = null;

            currentBlockHref = currentBlock.getAttribute('href');
            if (currentBlockHref === null) {
                throw new Error('HEI! Your clicked element doesn\'t have a href attribute.');
            }

            cbpitem = $(currentBlock).closest('.cbp-item')[0];

            blocks.each(function(index, el) {
                if (cbpitem === el) {
                    t.current = index;
                }
            });

            t.dataArray[t.current] = {
                url: currentBlockHref,
                element: currentBlock
            };

            parentElement = $(t.dataArray[t.current].element).parents('.cbp-item').addClass('cbp-singlePageInline-active');

            // total numbers of elements
            t.counterTotal = blocks.length;

            t.wrap.insertBefore(t.cubeportfolio.wrapper);

            t.topDifference = 0;

            if (t.options.singlePageInlinePosition === 'top') {
                t.blocksToMove = blocks;
                t.top = 0;
            } else if (t.options.singlePageInlinePosition === 'bottom') {
                t.blocksToMove = $();
                t.top = t.cubeportfolio.height;
            } else if (t.options.singlePageInlinePosition === 'above') {
                var currentEl = $(blocks[t.current]);
                var top = currentEl.data('cbp').top;
                var end = top + currentEl.height();

                t.top = top;

                t.blocksToMove = $();

                blocks.each(function(index, el) {
                    var element = $(el);

                    var topEl = element.data('cbp').top;
                    var endEl = topEl + element.height();

                    if (endEl <= top) {
                        return;
                    }

                    if (topEl >= top) {
                        t.blocksToMove = t.blocksToMove.add(el);
                    }

                    if ((topEl < top) && (endEl > top)) {
                        t.top = endEl + t.options.gapHorizontal;

                        if ((endEl - top) > t.topDifference) {
                            t.topDifference = endEl - top + t.options.gapHorizontal;
                        }
                    }
                });

                t.top = Math.max(t.top - t.options.gapHorizontal, 0);
            } else { // below
                var currentEl = $(blocks[t.current]);
                var top = currentEl.data('cbp').top;
                var end = top + currentEl.height();

                t.top = end;

                t.blocksToMove = $();

                blocks.each(function(index, el) {
                    var element = $(el);
                    var height = element.height();

                    var topEl = element.data('cbp').top;
                    var endEl = topEl + height;

                    if (endEl <= end) {
                        return;
                    }

                    if (topEl >= (end - height / 2)) {
                        t.blocksToMove = t.blocksToMove.add(el);
                        return;
                    }

                    if ((endEl > end) && (topEl < end)) {
                        if (endEl > t.top) {
                            t.top = endEl;
                        }

                        if ((endEl - end) > t.topDifference) {
                            t.topDifference = endEl - end;
                        }
                    }
                });
            }

            t.wrap[0].style.height = t.wrap.outerHeight(true) + 'px';

            // debouncer for inline content
            t.deferredInline = $.Deferred();

            if (t.options.singlePageInlineInFocus) {
                t.scrollTop = $(window).scrollTop();

                var goToScroll = t.cubeportfolio.$obj.offset().top + t.top - 100;

                if (t.scrollTop !== goToScroll) {
                    $('html,body').animate({
                            scrollTop: goToScroll
                        }, 350)
                        .promise()
                        .then(function() {
                            t.resizeSinglePageInline();
                            t.deferredInline.resolve();
                        });
                } else {
                    t.resizeSinglePageInline();
                    t.deferredInline.resolve();
                }
            } else {
                t.resizeSinglePageInline();
                t.deferredInline.resolve();
            }

            t.cubeportfolio.$obj.addClass('cbp-popup-singlePageInline-open');

            t.wrap.css({
                top: t.top
            });

            // change link
            if (t.options.singlePageInlineDeeplinking) {
                // ignore old #cbpi from href
                t.url = t.url.split('#cbpi=')[0];
                location.href = t.url + '#cbpi=' + t.dataArray[t.current].url;
            }

            // register callback function
            if ($.isFunction(t.options.singlePageInlineCallback)) {
                t.options.singlePageInlineCallback.call(t, t.dataArray[t.current].url, t.dataArray[t.current].element);
            }
        },

        resizeSinglePageInline: function() {
            var t = this;

            t.height = ((t.top === 0) || (t.top === t.cubeportfolio.height)) ? t.wrap.outerHeight(true) : t.wrap.outerHeight(true) - t.options.gapHorizontal;

            t.height += t.topDifference;

            t.storeBlocks.each(function(index, el) {
                if (CubePortfolio.private.modernBrowser) {
                    el.style[CubePortfolio.private.transform] = '';
                } else {
                    el.style.marginTop = '';
                }
            });

            t.blocksToMove.each(function(index, el) {
                if (CubePortfolio.private.modernBrowser) {
                    el.style[CubePortfolio.private.transform] = 'translate3d(0px, ' + t.height + 'px, 0)';
                } else {
                    el.style.marginTop = t.height + 'px';
                }
            });

            t.cubeportfolio.obj.style.height = t.cubeportfolio.height + t.height + 'px';
        },

        revertResizeSinglePageInline: function() {
            var t = this;

            // reset deferred object
            t.deferredInline = $.Deferred();

            t.storeBlocks.each(function(index, el) {
                if (CubePortfolio.private.modernBrowser) {
                    el.style[CubePortfolio.private.transform] = '';
                } else {
                    el.style.marginTop = '';
                }
            });

            t.cubeportfolio.obj.style.height = t.cubeportfolio.height + 'px';
        },

        appendScriptsToWrap: function(scripts) {
            var t = this,
                index = 0,
                loadScripts = function(item) {
                    var script = document.createElement('script'),
                        src = item.src;

                    script.type = 'text/javascript';

                    if (script.readyState) { // ie
                        script.onreadystatechange = function() {
                            if (script.readyState == 'loaded' || script.readyState == 'complete') {
                                script.onreadystatechange = null;
                                index++;
                                if (scripts[index]) {
                                    loadScripts(scripts[index]);
                                }
                            }
                        };
                    } else {
                        script.onload = function() {
                            index++;
                            if (scripts[index]) {
                                loadScripts(scripts[index]);
                            }
                        };
                    }

                    if (src) {
                        script.src = src;
                    } else {
                        script.text = item.text;
                    }

                    t.content[0].appendChild(script);

                };

            loadScripts(scripts[0]);
        },

        updateSinglePage: function(html, scripts, isWrap) {
            var t = this,
                counterMarkup,
                animationFinish;

            t.content.addClass('cbp-popup-content').removeClass('cbp-popup-content-basic');

            if (isWrap === false) {
                t.content.removeClass('cbp-popup-content').addClass('cbp-popup-content-basic');
            }

            // update counter navigation
            if (t.counter) {
                counterMarkup = $(t.getCounterMarkup(t.options.singlePageCounter, t.current + 1, t.counterTotal));
                t.counter.text(counterMarkup.text());
            }

            t.fromAJAX = {
                html: html,
                scripts: scripts
            };

            t.finishOpen--;

            if (t.finishOpen <= 0) {
                t.updateSinglePageIsOpen.call(t);
            }
        },

        updateSinglePageIsOpen: function() {
            var t = this,
                selectorSlider;

            t.wrap.addClass('cbp-popup-ready');
            t.wrap.removeClass('cbp-popup-loading');

            t.content.html(t.fromAJAX.html);

            if (t.fromAJAX.scripts) {
                t.appendScriptsToWrap(t.fromAJAX.scripts);
            }

            t.fromAJAX = {};


            // trigger public event
            t.cubeportfolio.$obj.trigger('updateSinglePageStart.cbp');

            // instantiate slider if exists
            selectorSlider = t.content.find('.cbp-slider');
            if (selectorSlider.length) {
                selectorSlider.find('.cbp-slider-item').addClass('cbp-item');
                t.slider = selectorSlider.cubeportfolio({
                    layoutMode: 'slider',
                    mediaQueries: [{
                        width: 1,
                        cols: 1
                    }],
                    gapHorizontal: 0,
                    gapVertical: 0,
                    caption: '',
                    coverRatio: '', // wp version only
                });
            } else {
                t.slider = null;
            }

            // check for social share icons
            t.checkForSocialLinks(t.content);

            // scroll bug on android and ios
            if (CubePortfolio.private.browser === 'android' || CubePortfolio.private.browser === 'ios') {
                $('html').css({
                    position: 'fixed'
                });
            }

            // trigger public event
            t.cubeportfolio.$obj.trigger('updateSinglePageComplete.cbp');
        },

        checkForSocialLinks: function(content) {
            var t = this;

            t.createFacebookShare(content.find('.cbp-social-fb'));
            t.createTwitterShare(content.find('.cbp-social-twitter'));
            t.createGooglePlusShare(content.find('.cbp-social-googleplus'));
            t.createPinterestShare(content.find('.cbp-social-pinterest'));
        },

        createFacebookShare: function(item) {
            if (item.length && !item.attr('onclick')) {
                item.attr('onclick', "window.open('http://www.facebook.com/sharer.php?u=" + encodeURIComponent(window.location.href) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;");
            }
        },

        createTwitterShare: function(item) {
            if (item.length && !item.attr('onclick')) {
                item.attr('onclick', "window.open('https://twitter.com/intent/tweet?source=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent(document.title) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=300'); return false;");
            }
        },

        createGooglePlusShare: function(item) {
            if (item.length && !item.attr('onclick')) {
                item.attr('onclick', "window.open('https://plus.google.com/share?url=" + encodeURIComponent(window.location.href) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=450'); return false;");
            }
        },

        createPinterestShare: function(item) {
            if (item.length && !item.attr('onclick')) {
                var media = '';
                var firstImg = this.content.find('img')[0];

                if(firstImg) {
                    media = firstImg.src;
                }

                item.attr('onclick', "window.open('http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(window.location.href) + "&media=" + media + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;");
            }
        },

        updateSinglePageInline: function(html, scripts) {
            var t = this;

            t.content.html(html);

            if (scripts) {
                t.appendScriptsToWrap(scripts);
            }

            // trigger public event
            t.cubeportfolio.$obj.trigger('updateSinglePageInlineStart.cbp');

            t.singlePageInlineIsOpen.call(t);
        },

        singlePageInlineIsOpen: function() {
            var t = this;

            function finishLoading() {
                t.wrap.addClass('cbp-popup-singlePageInline-ready');
                t.wrap[0].style.height = '';

                t.resizeSinglePageInline();

                // trigger public event
                t.cubeportfolio.$obj.trigger('updateSinglePageInlineComplete.cbp');
            }

            // wait to load all images
            t.cubeportfolio.loadImages(t.wrap, function() {
                // instantiate slider if exists
                var selectorSlider = t.content.find('.cbp-slider');

                if (selectorSlider.length) {
                    selectorSlider.find('.cbp-slider-item').addClass('cbp-item');

                    selectorSlider.one('initComplete.cbp', function() {
                        t.deferredInline.done(finishLoading);
                    });

                    selectorSlider.on('pluginResize.cbp', function() {
                        t.deferredInline.done(finishLoading);
                    });

                    t.slider = selectorSlider.cubeportfolio({
                        layoutMode: 'slider',
                        displayType: 'default',
                        mediaQueries: [{
                            width: 1,
                            cols: 1
                        }],
                        gapHorizontal: 0,
                        gapVertical: 0,
                        caption: '',
                        coverRatio: '', // wp version only
                    });
                } else {
                    t.slider = null;
                    t.deferredInline.done(finishLoading);
                }

                // check for social share icons
                t.checkForSocialLinks(t.content);
            });
        },

        isImage: function(el) {
            var t = this,
                img = new Image();

            t.tooggleLoading(true);

            t.cubeportfolio.loadImages($('<div><img src="' + el.src + '"></div>'), function() {
                t.updateImagesMarkup(el.src, el.title, t.getCounterMarkup(t.options.lightboxCounter, t.current + 1, t.counterTotal));

                t.tooggleLoading(false);
            });
        },

        isVimeo: function(el) {
            var t = this;
            t.updateVideoMarkup(el.src, el.title, t.getCounterMarkup(t.options.lightboxCounter, t.current + 1, t.counterTotal));
        },

        isYoutube: function(el) {
            var t = this;
            t.updateVideoMarkup(el.src, el.title, t.getCounterMarkup(t.options.lightboxCounter, t.current + 1, t.counterTotal));
        },

        isTed: function(el) {
            var t = this;
            t.updateVideoMarkup(el.src, el.title, t.getCounterMarkup(t.options.lightboxCounter, t.current + 1, t.counterTotal));
        },

        isSoundCloud: function(el) {
            var t = this;
            t.updateVideoMarkup(el.src, el.title, t.getCounterMarkup(t.options.lightboxCounter, t.current + 1, t.counterTotal));
        },

        isSelfHostedVideo: function(el) {
            var t = this;
            t.updateSelfHostedVideo(el.src, el.title, t.getCounterMarkup(t.options.lightboxCounter, t.current + 1, t.counterTotal));
        },

        isSelfHostedAudio: function(el) {
            var t = this;
            t.updateSelfHostedAudio(el.src, el.title, t.getCounterMarkup(t.options.lightboxCounter, t.current + 1, t.counterTotal));
        },

        getCounterMarkup: function(markup, current, total) {
            if (!markup.length) {
                return '';
            }

            var mapObj = {
                current: current,
                total: total
            };

            return markup.replace(/\{\{current}}|\{\{total}}/gi, function(matched) {
                return mapObj[matched.slice(2, -2)];
            });
        },

        updateSelfHostedVideo: function(src, title, counter) {
            var t = this,
                i;

            t.wrap.addClass('cbp-popup-lightbox-isIframe');

            var markup = '<div class="cbp-popup-lightbox-iframe">' +
                '<video controls="controls" height="auto" style="width: 100%">';

            for (i = 0; i < src.length; i++) {
                if (/(\.mp4)/i.test(src[i])) {
                    markup += '<source src="' + src[i] + '" type="video/mp4">';
                } else if (/(\.ogg)|(\.ogv)/i.test(src[i])) {
                    markup += '<source src="' + src[i] + '" type="video/ogg">';
                } else if (/(\.webm)/i.test(src[i])) {
                    markup += '<source src="' + src[i] + '" type="video/webm">';
                }
            }

            markup += 'Your browser does not support the video tag.' +
                '</video>' +
                '<div class="cbp-popup-lightbox-bottom">' +
                ((title) ? '<div class="cbp-popup-lightbox-title">' + title + '</div>' : '') +
                counter +
                '</div>' +
                '</div>';

            t.content.html(markup);
            t.wrap.addClass('cbp-popup-ready');
            t.preloadNearbyImages();
        },

        updateSelfHostedAudio: function(src, title, counter) {
            var t = this,
                i;

            t.wrap.addClass('cbp-popup-lightbox-isIframe');

            var markup = '<div class="cbp-popup-lightbox-iframe">' +
                '<div class="cbp-misc-video"><audio controls="controls" height="auto" style="width: 75%">' +
                '<source src="' + src + '" type="audio/mpeg">' +
                'Your browser does not support the audio tag.' +
                '</audio></div>' +
                '<div class="cbp-popup-lightbox-bottom">' +
                ((title) ? '<div class="cbp-popup-lightbox-title">' + title + '</div>' : '') +
                counter +
                '</div>' +
                '</div>';

            t.content.html(markup);
            t.wrap.addClass('cbp-popup-ready');
            t.preloadNearbyImages();
        },

        updateVideoMarkup: function(src, title, counter) {
            var t = this;
            t.wrap.addClass('cbp-popup-lightbox-isIframe');

            var markup = '<div class="cbp-popup-lightbox-iframe">' +
                '<iframe src="' + src + '" frameborder="0" allowfullscreen scrolling="no"></iframe>' +
                '<div class="cbp-popup-lightbox-bottom">' +
                ((title) ? '<div class="cbp-popup-lightbox-title">' + title + '</div>' : '') +
                counter +
                '</div>' +
                '</div>';

            t.content.html(markup);
            t.wrap.addClass('cbp-popup-ready');
            t.preloadNearbyImages();
        },

        updateImagesMarkup: function(src, title, counter) {
            var t = this;

            t.wrap.removeClass('cbp-popup-lightbox-isIframe');

            var markup = '<div class="cbp-popup-lightbox-figure">' +
                '<img src="' + src + '" class="cbp-popup-lightbox-img" ' + t.dataActionImg + ' />' +
                '<div class="cbp-popup-lightbox-bottom">' +
                ((title) ? '<div class="cbp-popup-lightbox-title">' + title + '</div>' : '') +
                counter +
                '</div>' +
                '</div>';

            t.content.html(markup);
            t.wrap.addClass('cbp-popup-ready');
            t.resizeImage();
            t.preloadNearbyImages();
        },

        next: function() {
            var t = this;
            t[t.type + 'JumpTo'](1);
        },

        prev: function() {
            var t = this;
            t[t.type + 'JumpTo'](-1);
        },

        lightboxJumpTo: function(index) {
            var t = this,
                el;

            t.current = t.getIndex(t.current + index);

            // get the current element
            el = t.dataArray[t.current];

            // call function if current element is image or video (iframe)
            t[el.type](el);
        },

        singlePageJumpTo: function(index) {
            var t = this;

            t.current = t.getIndex(t.current + index);

            // register singlePageCallback function
            if ($.isFunction(t.options.singlePageCallback)) {
                t.resetWrap();

                // go to top of the page (reset scroll)
                t.wrap.scrollTop(0);

                t.wrap.addClass('cbp-popup-loading');

                if (t.slider) {
                    CubePortfolio.private.resize.destroyEvent($.data(t.slider[0], 'cubeportfolio'));
                }

                t.options.singlePageCallback.call(t, t.dataArray[t.current].url, t.dataArray[t.current].element);

                if (t.options.singlePageDeeplinking) {
                    location.href = t.url + '#cbp=' + t.dataArray[t.current].url;
                }
            }
        },

        resetWrap: function() {
            var t = this;

            if (t.type === 'singlePage' && t.options.singlePageDeeplinking) {
                location.href = t.url + '#';
            }

            if (t.type === 'singlePageInline' && t.options.singlePageInlineDeeplinking) {
                location.href = t.url + '#';
            }
        },

        getIndex: function(index) {
            var t = this;

            // go to interval [0, (+ or -)this.counterTotal.length - 1]
            index = index % t.counterTotal;

            // if index is less then 0 then go to interval (0, this.counterTotal - 1]
            if (index < 0) {
                index = t.counterTotal + index;
            }

            return index;
        },

        close: function(method, data) {
            var t = this;

            function finishClose() {
                // remove resize event
                if (t.slider) {
                    CubePortfolio.private.resize.destroyEvent($.data(t.slider[0], 'cubeportfolio'));
                }

                // reset content
                t.content.html('');

                // hide the wrap
                t.wrap.detach();

                t.cubeportfolio.$obj.removeClass('cbp-popup-singlePageInline-open cbp-popup-singlePageInline-close');

                if (method === 'promise') {
                    if ($.isFunction(data.callback)) {
                        data.callback.call(t.cubeportfolio);
                    }
                }
            }

            function checkFocusInline() {
                // add this to prevent the page to jump after the resetWrap
                var scrollTop = $(window).scrollTop();
                t.resetWrap();
                $(window).scrollTop(scrollTop);

                if (t.options.singlePageInlineInFocus && method !== 'promise') {
                    $('html,body').animate({
                            scrollTop: t.scrollTop
                        }, 350)
                        .promise()
                        .then(function() {
                            finishClose();
                        });
                } else {
                    finishClose();
                }
            }

            // now the popup is closed
            t.isOpen = false;

            if (t.type === 'singlePageInline') {
                if (method === 'open') {
                    t.wrap.removeClass('cbp-popup-singlePageInline-ready');
                    $(t.dataArray[t.current].element).closest('.cbp-item').removeClass('cbp-singlePageInline-active');
                    t.openSinglePageInline(data.blocks, data.currentBlock, data.fromOpen);
                } else {
                    t.height = 0;

                    t.revertResizeSinglePageInline();
                    t.wrap.removeClass('cbp-popup-singlePageInline-ready');
                    t.cubeportfolio.$obj.addClass('cbp-popup-singlePageInline-close');
                    t.cubeportfolio.$obj.find('.cbp-item').removeClass('cbp-singlePageInline-active');

                    if (CubePortfolio.private.modernBrowser) {
                        t.wrap.one(CubePortfolio.private.transitionend, function() {
                            checkFocusInline();
                        });
                    } else {
                        checkFocusInline();
                    }
                }

            } else if (t.type === 'singlePage') {
                t.resetWrap();

                t.wrap.removeClass('cbp-popup-ready cbp-popup-transitionend');

                // scroll bug on android and ios
                if (CubePortfolio.private.browser === 'android' || CubePortfolio.private.browser === 'ios') {
                    $('html').css({
                        position: ''
                    });

                    t.navigationWrap.appendTo(t.wrap);
                    t.navigationMobile.remove();
                }

                $(window).scrollTop(t.scrollTop);

                // weird bug on mozilla. fixed with setTimeout
                setTimeout(function() {
                    t.stopScroll = true;

                    t.navigationWrap.css({
                        top: t.wrap.scrollTop()
                    });

                    t.wrap.removeClass('cbp-popup-singlePage-open cbp-popup-singlePage-sticky');

                    if (CubePortfolio.private.browser === 'ie8' || CubePortfolio.private.browser === 'ie9') {
                        // remove resize event
                        if (t.slider) {
                            CubePortfolio.private.resize.destroyEvent($.data(t.slider[0], 'cubeportfolio'));
                        }

                        // reset content
                        t.content.html('');

                        // hide the wrap
                        t.wrap.detach();

                        $('html').css({
                            overflow: '',
                            marginRight: '',
                            position: ''
                        });

                        t.navigationWrap.removeAttr('style');
                    }
                }, 0);

                $('html').css({
                    overflow: '',
                    marginRight: '',
                    position: ''
                });

                t.wrap.one(CubePortfolio.private.transitionend, function() {
                    // remove resize event
                    if (t.slider) {
                        CubePortfolio.private.resize.destroyEvent($.data(t.slider[0], 'cubeportfolio'));
                    }

                    // reset content
                    t.content.html('');

                    // hide the wrap
                    t.wrap.detach();


                    t.navigationWrap.removeAttr('style');
                });
            } else {
                lightboxIsOpen = false;

                if (t.originalStyle) {
                    $('html').attr('style', t.originalStyle);
                } else {
                    $('html').css({
                        overflow: '',
                        marginRight: ''
                    });
                }

                $(window).scrollTop(t.scrollTop);

                // remove resize event
                if (t.slider) {
                    CubePortfolio.private.resize.destroyEvent($.data(t.slider[0], 'cubeportfolio'));
                }

                // reset content
                t.content.html('');

                // hide the wrap
                t.wrap.detach();
            }
        },

        tooggleLoading: function(state) {
            var t = this;

            t.stopEvents = state;
            t.wrap[(state) ? 'addClass' : 'removeClass']('cbp-popup-loading');
        },

        resizeImage: function() {
            // if lightbox is not open go out
            if (!this.isOpen) {
                return;
            }

            var img = this.content.find('img');
            var figure = img.parent();
            var height = $(window).height() - (figure.outerHeight(true) - figure.height()) - this.content.find('.cbp-popup-lightbox-bottom').outerHeight(true);

            img.css('max-height', height + 'px');
        },

        preloadNearbyImages: function() {
            var t = this;
            var arr = [
                t.getIndex(t.current + 1),
                t.getIndex(t.current + 2),
                t.getIndex(t.current + 3),
                t.getIndex(t.current - 1),
                t.getIndex(t.current - 2),
                t.getIndex(t.current - 3),
            ];

            for (var i = arr.length - 1; i >= 0; i--) {
                if (t.dataArray[arr[i]].type === 'isImage') {
                    t.cubeportfolio.checkSrc(t.dataArray[arr[i]]);
                }
            }
        }
    };

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        // if lightboxShowCounter is false, put lightboxCounter to ''
        if (parent.options.lightboxShowCounter === false) {
            parent.options.lightboxCounter = '';
        }

        // if singlePageShowCounter is false, put singlePageCounter to ''
        if (parent.options.singlePageShowCounter === false) {
            parent.options.singlePageCounter = '';
        }

        // @todo - schedule this in  future
        parent.registerEvent('initStartRead', function() {
            t.run();
        }, true);
    }

    // little hack for keydown issue when lightbox & singlePage is open
    var lightboxIsOpen = false;
    var lightboxInit = false;
    var singlePageInit = false;

    Plugin.prototype.run = function() {
        var t = this,
            p = t.parent,
            body = $(document.body);

        // default value for lightbox
        p.lightbox = null;

        // LIGHTBOX
        if (p.options.lightboxDelegate && !lightboxInit) {
            // init only one time @todo
            lightboxInit = true;

            p.lightbox = Object.create(popup);
            p.lightbox.init(p, 'lightbox');

            body.on('click.cbp', p.options.lightboxDelegate, function(e) {
                e.preventDefault();

                var self = $(this),
                    gallery = self.attr('data-cbp-lightbox'),
                    scope = t.detectScope(self),
                    cbp = scope.data('cubeportfolio'),
                    blocks = [];

                // is inside a cbp
                if (cbp) {
                    cbp.blocksOn.each(function(index, el) {
                        var item = $(el);

                        if (item.not('.cbp-item-off')) {
                            item.find(p.options.lightboxDelegate).each(function(index2, el2) {
                                if (gallery) {
                                    if ($(el2).attr('data-cbp-lightbox') === gallery) {
                                        blocks.push(el2);
                                    }
                                } else {
                                    blocks.push(el2);
                                }
                            });
                        }
                    });
                } else {
                    if (gallery) {
                        blocks = scope.find(p.options.lightboxDelegate + '[data-cbp-lightbox=' + gallery + ']');
                    } else {
                        blocks = scope.find(p.options.lightboxDelegate);
                    }
                }

                p.lightbox.openLightbox(blocks, self[0]);
            });
        }

        // default value for singlePage
        p.singlePage = null;

        // SINGLEPAGE
        if (p.options.singlePageDelegate && !singlePageInit) {
            // init only one time @todo
            singlePageInit = true;

            p.singlePage = Object.create(popup);
            p.singlePage.init(p, 'singlePage');

            body.on('click.cbp', p.options.singlePageDelegate, function(e) {
                e.preventDefault();

                var self = $(this),
                    gallery = self.attr('data-cbp-singlePage'),
                    scope = t.detectScope(self),
                    cbp = scope.data('cubeportfolio'),
                    blocks = [];

                // is inside a cbp
                if (cbp) {
                    cbp.blocksOn.each(function(index, el) {
                        var item = $(el);

                        if (item.not('.cbp-item-off')) {
                            item.find(p.options.singlePageDelegate).each(function(index2, el2) {
                                if (gallery) {
                                    if ($(el2).attr('data-cbp-singlePage') === gallery) {
                                        blocks.push(el2);
                                    }
                                } else {
                                    blocks.push(el2);
                                }
                            });
                        }
                    });
                } else {
                    if (gallery) {
                        blocks = scope.find(p.options.singlePageDelegate + '[data-cbp-singlePage=' + gallery + ']');
                    } else {
                        blocks = scope.find(p.options.singlePageDelegate);
                    }
                }

                p.singlePage.openSinglePage(blocks, self[0]);
            });
        }

        // default value for singlePageInline
        p.singlePageInline = null;

        // SINGLEPAGEINLINE
        if (p.options.singlePageInlineDelegate) {
            p.singlePageInline = Object.create(popup);

            p.singlePageInline.init(p, 'singlePageInline');

            p.$obj.on('click.cbp', p.options.singlePageInlineDelegate, function(e) {
                e.preventDefault();

                var oldDate = $.data(this, 'cbp-locked'),
                    newDate = $.data(this, 'cbp-locked', +new Date());

                if(!oldDate || ((newDate - oldDate) > 300)) {
                    p.singlePageInline.openSinglePageInline(p.blocksOn, this);
                }
            });
        }
    };

    Plugin.prototype.detectScope = function(item) {
        var singlePageInline,
            singlePage,
            cbp;

        singlePageInline = item.closest('.cbp-popup-singlePageInline');
        if (singlePageInline.length) {
            cbp = item.closest('.cbp', singlePageInline[0]);
            return (cbp.length) ? cbp : singlePageInline;
        }

        singlePage = item.closest('.cbp-popup-singlePage');
        if (singlePage.length) {
            cbp = item.closest('.cbp', singlePage[0]);
            return (cbp.length) ? cbp : singlePage;
        }

        cbp = item.closest('.cbp');
        return (cbp.length) ? cbp : $(document.body);

    };

    Plugin.prototype.destroy = function() {
        var p = this.parent;

        $(document.body).off('click.cbp');

        // @todo - remove these from here
        lightboxInit = false;
        singlePageInit = false;

        // destroy lightbox if enabled
        if (p.lightbox) {
            p.lightbox.destroy();
        }

        // destroy singlePage if enabled
        if (p.singlePage) {
            p.singlePage.destroy();
        }

        // destroy singlePage inline if enabled
        if (p.singlePageInline) {
            p.singlePageInline.destroy();
        }
    };

    CubePortfolio.plugins.popUp = function(parent) {
        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        t.searchInput = $(parent.options.search);

        t.searchInput.each(function(index, el) {
            var selector = el.getAttribute('data-search');

            if (!selector) {
                selector = '*';
            }

            $.data(el, 'searchData', {
                value: el.value,
                el: selector
            });
        });

        var timeout = null;

        t.searchInput.on('keyup.cbp paste.cbp', function(e) {
            e.preventDefault();

            var el = $(this);

            clearTimeout(timeout);
            timeout = setTimeout(function() {
                t.runEvent.call(t, el);
            }, 350);
        });

        t.searchNothing = t.searchInput.siblings('.cbp-search-nothing').detach();
        t.searchNothingHeight = null;
        t.searchNothingHTML = t.searchNothing.html();

        t.searchInput.siblings('.cbp-search-icon').on('click.cbp', function(e) {
            e.preventDefault();

            t.runEvent.call(t, $(this).prev().val(''));
        });
    }

    Plugin.prototype.runEvent = function(el) {
        var t = this,
            value = el.val(),
            searchData = el.data('searchData'),
            reg = new RegExp(value, 'i');

        if (searchData.value === value || t.parent.isAnimating) {
            return;
        }

        searchData.value = value;

        if (value.length > 0) {
            el.attr('value', value);
        } else {
            el.removeAttr('value');
        }

        t.parent.$obj.cubeportfolio('filter', function(blocks) {
            var blocksNew = blocks.filter(function(index, block) {
                var text = $(block).find(searchData.el).text();

                if (text.search(reg) > -1) {
                    return true;
                }
            });

            if (blocksNew.length === 0 && t.searchNothing.length) {
                var innerText = t.searchNothingHTML.replace('{{query}}', value);
                t.searchNothing.html(innerText);

                t.searchNothing.appendTo(t.parent.$obj);

                if (t.searchNothingHeight === null) {
                    t.searchNothingHeight = t.searchNothing.outerHeight(true);
                }

                t.parent.registerEvent('resizeMainContainer', function() {
                    t.parent.height = t.parent.height + t.searchNothingHeight;
                    t.parent.obj.style.height = t.parent.height + 'px';
                }, true);
            } else {
                t.searchNothing.detach();
            }

            // reset filters active class after the search is used
            t.parent.triggerEvent('resetFiltersVisual');

            return blocksNew;
        }, function() {
            el.trigger('keyup.cbp');
        });
    };

    Plugin.prototype.destroy = function() {
        var t = this;

        t.searchInput.off('.cbp');
        t.searchInput.next('.cbp-search-icon').off('.cbp');

        t.searchInput.each(function(index, el) {
            $.removeData(el);
        });
    };

    CubePortfolio.plugins.search = function(parent) {
        if (parent.options.search === '') {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
(function($, window, document, undefined) {
    'use strict';

    var options = {
        /**
         *  Pagination custom selector
         *  Values: strings that represent the elements in the document (DOM selector).
         */
        pagination: '',
        paginationClass: 'cbp-pagination-active',
    };

    var CubePortfolio = $.fn.cubeportfolio.constructor;

    function Plugin(parent) {
        var t = this;

        t.parent = parent;

        t.options = $.extend({}, options, t.parent.options.plugins.slider);

        var customPagination = $(t.options.pagination);

        if (customPagination.length > 0) {
            t.parent.customPagination = customPagination;
            t.parent.customPaginationItems = customPagination.children();
            t.parent.customPaginationClass = t.options.paginationClass;

            t.parent.customPaginationItems.on('click.cbp', function(e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();

                if (t.parent.sliderStopEvents) {
                    return;
                }

                t.parent.jumpToSlider($(this));
            });
        }

        t.parent.registerEvent('gridAdjust', function() {
            t.sliderMarkup.call(t.parent);

            t.parent.registerEvent('gridAdjust', function() {
                t.updateSlider.call(t.parent);
            });
        }, true);
    }

    /**
     * Create mark-up for slider layout
     */
    Plugin.prototype.sliderMarkup = function() {
        var t = this;

        t.sliderStopEvents = false;

        t.sliderActive = 0;

        t.$obj.one('initComplete.cbp', function() {
            t.$obj.addClass('cbp-mode-slider');
        });

        t.nav = $('<div/>', {
            'class': 'cbp-nav'
        });

        t.nav.on('click.cbp', '[data-slider-action]', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();

            if (t.sliderStopEvents) {
                return;
            }

            var el = $(this),
                action = el.attr('data-slider-action');

            if (t[action + 'Slider']) {
                t[action + 'Slider'](el);
            }
        });

        if (t.options.showNavigation) {
            t.controls = $('<div/>', {
                'class': 'cbp-nav-controls'
            });

            t.navPrev = $('<div/>', {
                'class': 'cbp-nav-prev',
                'data-slider-action': 'prev'
            }).appendTo(t.controls);

            t.navNext = $('<div/>', {
                'class': 'cbp-nav-next',
                'data-slider-action': 'next'
            }).appendTo(t.controls);

            t.controls.appendTo(t.nav);
        }

        if (t.options.showPagination) {
            t.navPagination = $('<div/>', {
                'class': 'cbp-nav-pagination'
            }).appendTo(t.nav);
        }

        if (t.controls || t.navPagination) {
            t.nav.appendTo(t.$obj);
        }

        t.updateSliderPagination();

        if (t.options.auto) {
            if (t.options.autoPauseOnHover) {
                t.mouseIsEntered = false;
                t.$obj.on('mouseenter.cbp', function(e) {
                    t.mouseIsEntered = true;
                    t.stopSliderAuto();
                }).on('mouseleave.cbp', function(e) {
                    t.mouseIsEntered = false;
                    t.startSliderAuto();
                });
            }

            t.startSliderAuto();
        }

        if (t.options.drag && CubePortfolio.private.modernBrowser) {
            t.dragSlider();
        }
    };

    Plugin.prototype.updateSlider = function() {
        var t = this;

        t.updateSliderPosition();

        t.updateSliderPagination();
    };

    Plugin.prototype.destroy = function() {
        var t = this;

        if (t.parent.customPaginationItems) {
            t.parent.customPaginationItems.off('.cbp');
        }

        if (t.parent.controls || t.parent.navPagination) {
            t.parent.nav.off('.cbp');
            t.parent.nav.remove();
        }
    };

    CubePortfolio.plugins.slider = function(parent) {
        if (parent.options.layoutMode !== 'slider') {
            return null;
        }

        return new Plugin(parent);
    };
})(jQuery, window, document);
/*
 *  Vide - v0.5.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(root.jQuery);
  }
})(this, function($) {

  'use strict';

  /**
   * Name of the plugin
   * @private
   * @const
   * @type {String}
   */
  var PLUGIN_NAME = 'vide';

  /**
   * Default settings
   * @private
   * @const
   * @type {Object}
   */
  var DEFAULTS = {
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    position: '50% 50%',
    posterType: 'detect',
    resizing: true,
    bgColor: 'transparent',
    className: ''
  };

  /**
   * Not implemented error message
   * @private
   * @const
   * @type {String}
   */
  var NOT_IMPLEMENTED_MSG = 'Not implemented';

  /**
   * Parse a string with options
   * @private
   * @param {String} str
   * @returns {Object|String}
   */
  function parseOptions(str) {
    var obj = {};
    var delimiterIndex;
    var option;
    var prop;
    var val;
    var arr;
    var len;
    var i;

    // Remove spaces around delimiters and split
    arr = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',').split(',');

    // Parse a string
    for (i = 0, len = arr.length; i < len; i++) {
      option = arr[i];

      // Ignore urls and a string without colon delimiters
      if (
        option.search(/^(http|https|ftp):\/\//) !== -1 ||
        option.search(':') === -1
      ) {
        break;
      }

      delimiterIndex = option.indexOf(':');
      prop = option.substring(0, delimiterIndex);
      val = option.substring(delimiterIndex + 1);

      // If val is an empty string, make it undefined
      if (!val) {
        val = undefined;
      }

      // Convert a string value if it is like a boolean
      if (typeof val === 'string') {
        val = val === 'true' || (val === 'false' ? false : val);
      }

      // Convert a string value if it is like a number
      if (typeof val === 'string') {
        val = !isNaN(val) ? +val : val;
      }

      obj[prop] = val;
    }

    // If nothing is parsed
    if (prop == null && val == null) {
      return str;
    }

    return obj;
  }

  /**
   * Parse a position option
   * @private
   * @param {String} str
   * @returns {Object}
   */
  function parsePosition(str) {
    str = '' + str;

    // Default value is a center
    var args = str.split(/\s+/);
    var x = '50%';
    var y = '50%';
    var len;
    var arg;
    var i;

    for (i = 0, len = args.length; i < len; i++) {
      arg = args[i];

      // Convert values
      if (arg === 'left') {
        x = '0%';
      } else if (arg === 'right') {
        x = '100%';
      } else if (arg === 'top') {
        y = '0%';
      } else if (arg === 'bottom') {
        y = '100%';
      } else if (arg === 'center') {
        if (i === 0) {
          x = '50%';
        } else {
          y = '50%';
        }
      } else {
        if (i === 0) {
          x = arg;
        } else {
          y = arg;
        }
      }
    }

    return { x: x, y: y };
  }

  /**
   * Search a poster
   * @private
   * @param {String} path
   * @param {Function} callback
   */
  function findPoster(path, callback) {
    var onLoad = function() {
      callback(this.src);
    };

    $('<img src="' + path + '.gif">').on('load', onLoad);
    $('<img src="' + path + '.jpg">').on('load', onLoad);
    $('<img src="' + path + '.jpeg">').on('load', onLoad);
    $('<img src="' + path + '.png">').on('load', onLoad);
  }

  /**
   * Vide constructor
   * @param {HTMLElement} element
   * @param {Object|String} path
   * @param {Object|String} options
   * @constructor
   */
  function Vide(element, path, options) {
    this.$element = $(element);

    // Parse path
    if (typeof path === 'string') {
      path = parseOptions(path);
    }

    // Parse options
    if (!options) {
      options = {};
    } else if (typeof options === 'string') {
      options = parseOptions(options);
    }

    // Remove an extension
    if (typeof path === 'string') {
      path = path.replace(/\.\w*$/, '');
    } else if (typeof path === 'object') {
      for (var i in path) {
        if (path.hasOwnProperty(i)) {
          path[i] = path[i].replace(/\.\w*$/, '');
        }
      }
    }

    this.settings = $.extend({}, DEFAULTS, options);
    this.path = path;

    // https://github.com/VodkaBears/Vide/issues/110
    try {
      this.init();
    } catch (e) {
      if (e.message !== NOT_IMPLEMENTED_MSG) {
        throw e;
      }
    }
  }

  /**
   * Initialization
   * @public
   */
  Vide.prototype.init = function() {
    var vide = this;
    var path = vide.path;
    var poster = path;
    var sources = '';
    var $element = vide.$element;
    var settings = vide.settings;
    var position = parsePosition(settings.position);
    var posterType = settings.posterType;
    var $video;
    var $wrapper;

    // Set styles of a video wrapper
    $wrapper = vide.$wrapper = $('<div>')
      .addClass(settings.className)
      .css({
        position: 'absolute',
        'z-index': -1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover',
        'background-color': settings.bgColor,
        'background-repeat': 'no-repeat',
        'background-position': position.x + ' ' + position.y
      });

    // Get a poster path
    if (typeof path === 'object') {
      if (path.poster) {
        poster = path.poster;
      } else {
        if (path.mp4) {
          poster = path.mp4;
        } else if (path.webm) {
          poster = path.webm;
        } else if (path.ogv) {
          poster = path.ogv;
        }
      }
    }

    // Set a video poster
    if (posterType === 'detect') {
      findPoster(poster, function(url) {
        $wrapper.css('background-image', 'url(' + url + ')');
      });
    } else if (posterType !== 'none') {
      $wrapper.css('background-image', 'url(' + poster + '.' + posterType + ')');
    }

    // If a parent element has a static position, make it relative
    if ($element.css('position') === 'static') {
      $element.css('position', 'relative');
    }

    $element.prepend($wrapper);

    if (typeof path === 'object') {
      if (path.mp4) {
        sources += '<source src="' + path.mp4 + '.mp4" type="video/mp4">';
      }

      if (path.webm) {
        sources += '<source src="' + path.webm + '.webm" type="video/webm">';
      }

      if (path.ogv) {
        sources += '<source src="' + path.ogv + '.ogv" type="video/ogg">';
      }

      $video = vide.$video = $('<video>' + sources + '</video>');
    } else {
      $video = vide.$video = $('<video>' +
        '<source src="' + path + '.mp4" type="video/mp4">' +
        '<source src="' + path + '.webm" type="video/webm">' +
        '<source src="' + path + '.ogv" type="video/ogg">' +
        '</video>');
    }

    // https://github.com/VodkaBears/Vide/issues/110
    try {
      $video

        // Set video properties
        .prop({
          autoplay: settings.autoplay,
          loop: settings.loop,
          volume: settings.volume,
          muted: settings.muted,
          defaultMuted: settings.muted,
          playbackRate: settings.playbackRate,
          defaultPlaybackRate: settings.playbackRate
        });
    } catch (e) {
      throw new Error(NOT_IMPLEMENTED_MSG);
    }

    // Video alignment
    $video.css({
      margin: 'auto',
      position: 'absolute',
      'z-index': -1,
      top: position.y,
      left: position.x,
      '-webkit-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      '-ms-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      '-moz-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      transform: 'translate(-' + position.x + ', -' + position.y + ')',

      // Disable visibility, while loading
      visibility: 'hidden',
      opacity: 0
    })

    // Resize a video, when it's loaded
    .one('canplaythrough.' + PLUGIN_NAME, function() {
      vide.resize();
    })

    // Make it visible, when it's already playing
    .one('playing.' + PLUGIN_NAME, function() {
      $video.css({
        visibility: 'visible',
        opacity: 1
      });
      $wrapper.css('background-image', 'none');
    });

    // Resize event is available only for 'window'
    // Use another code solutions to detect DOM elements resizing
    $element.on('resize.' + PLUGIN_NAME, function() {
      if (settings.resizing) {
        vide.resize();
      }
    });

    // Append a video
    $wrapper.append($video);
  };

  /**
   * Get a video element
   * @public
   * @returns {HTMLVideoElement}
   */
  Vide.prototype.getVideoObject = function() {
    return this.$video[0];
  };

  /**
   * Resize a video background
   * @public
   */
  Vide.prototype.resize = function() {
    if (!this.$video) {
      return;
    }

    var $wrapper = this.$wrapper;
    var $video = this.$video;
    var video = $video[0];

    // Get a native video size
    var videoHeight = video.videoHeight;
    var videoWidth = video.videoWidth;

    // Get a wrapper size
    var wrapperHeight = $wrapper.height();
    var wrapperWidth = $wrapper.width();

    if (wrapperWidth / videoWidth > wrapperHeight / videoHeight) {
      $video.css({

        // +2 pixels to prevent an empty space after transformation
        width: wrapperWidth + 2,
        height: 'auto'
      });
    } else {
      $video.css({
        width: 'auto',

        // +2 pixels to prevent an empty space after transformation
        height: wrapperHeight + 2
      });
    }
  };

  /**
   * Destroy a video background
   * @public
   */
  Vide.prototype.destroy = function() {
    delete $[PLUGIN_NAME].lookup[this.index];
    this.$video && this.$video.off(PLUGIN_NAME);
    this.$element.off(PLUGIN_NAME).removeData(PLUGIN_NAME);
    this.$wrapper.remove();
  };

  /**
   * Special plugin object for instances.
   * @public
   * @type {Object}
   */
  $[PLUGIN_NAME] = {
    lookup: []
  };

  /**
   * Plugin constructor
   * @param {Object|String} path
   * @param {Object|String} options
   * @returns {JQuery}
   * @constructor
   */
  $.fn[PLUGIN_NAME] = function(path, options) {
    var instance;

    this.each(function() {
      instance = $.data(this, PLUGIN_NAME);

      // Destroy the plugin instance if exists
      instance && instance.destroy();

      // Create the plugin instance
      instance = new Vide(this, path, options);
      instance.index = $[PLUGIN_NAME].lookup.push(instance) - 1;
      $.data(this, PLUGIN_NAME, instance);
    });

    return this;
  };

  $(document).ready(function() {
    var $window = $(window);

    // Window resize event listener
    $window.on('resize.' + PLUGIN_NAME, function() {
      for (var len = $[PLUGIN_NAME].lookup.length, i = 0, instance; i < len; i++) {
        instance = $[PLUGIN_NAME].lookup[i];

        if (instance && instance.settings.resizing) {
          instance.resize();
        }
      }
    });

    // https://github.com/VodkaBears/Vide/issues/68
    $window.on('unload.' + PLUGIN_NAME, function() {
      return false;
    });

    // Auto initialization
    // Add 'data-vide-bg' attribute with a path to the video without extension
    // Also you can pass options throw the 'data-vide-options' attribute
    // 'data-vide-options' must be like 'muted: false, volume: 0.5'
    $(document).find('[data-' + PLUGIN_NAME + '-bg]').each(function(i, element) {
      var $element = $(element);
      var options = $element.data(PLUGIN_NAME + '-options');
      var path = $element.data(PLUGIN_NAME + '-bg');

      $element[PLUGIN_NAME](path, options);
    });
  });

});

(function($, window, document, undefined) {
  
  'use strict';
  
  /* ======================================================================= */
  /* VARIABLES
  /* ======================================================================= */
  
    var vars = {
      // Prefix
      prefix: (function() {
        var styles  = window.getComputedStyle(document.documentElement, ''),
            pre     = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1],
            dom     = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
        
        return {
          ns          : 'wb-',
          dom         : dom,
          lowercase   : pre,
          css         : '-' + pre + '-',
          js          : pre[0].toUpperCase() + pre.substr(1)
        };
      })()
    };
  
  /* ======================================================================= */
  /* HELPERS
  /* ======================================================================= */
    
    var helpers = {};
     
    /*
      Use this helper to scroll the document smoothly to a target position.
      
      Parameters:
        
        - scrollTarget [0]                  Scroll target, it can be an integer, a selector or a string that consists of an integer preceded by += or -=.
        - scrollDuration [800]              Scroll duration in milli-seconds.
        - scrollEasing ['easeInOutCubic']   Scroll easing function.
        - scrollOffset [false]              Number of pixels to offset from the target position, vertically.
        - scrollChangeHash [true]           Change the URL hash (location.hash) when done scrolling.
        - step [false]                      Callback function to invoke on scroll.

      Example: helpers.scrollTo({parameters});
    */
    
    helpers.scrollTo = function(options) {
      var target,
        o = $.extend({
          scrollTarget    : 0,
          scrollDuration    : 800,
          scrollEasing    : 'easeInOutCubic',
          scrollOffset    : false,
          scrollChangeHash  : true,
          scrollElement   : $('html, body'),
          step        : false,
        }, options);
      
      target = o.scrollTarget;
      
      /* handle incrementation/decrementation from current scroll position */
      if (typeof target === 'string' && (target.indexOf('+=', 0) === 0 || target.indexOf('-=', 0) === 0)) {
        var s = (target.slice(0, 1) == '-' ? -1 : 1),
          n = target.slice(2);
        
        if (n.toString().lastIndexOf('%') === n.length - 1) {
          n = parseInt(n, 10)*$(window).height()/100;
        }
        
        target = $(o.scrollElement).scrollTop() + s*Number(n);
      }
      
      /* target is an explicit number */
      if (!isNaN(target)) {
        target = Number(target);
      }
      /* target is a DOM element */
      else {
        target = $(target).length ? $(target).offset().top : 0;
      }
      
      /* scroll to page top */
      if (!target || target == '#' || $(target).length === 0) target = 0;
      
      /* handle offset */
      target += o.scrollOffset || 0;
      
      $(o.scrollElement).stop(true, false).animate({scrollTop: target} , {
        duration: o.scrollDuration,
        easing: o.scrollEasing,
        step: function() {
          if (o.step) o.step();
        },
        complete: function() {
          if (o.scrollChangeHash && typeof o.scrollTarget === 'string' && o.scrollTarget.indexOf('#', 0) === 0) {
            location.hash = o.scrollTarget;
          }
        }
      });
    }
  
  /* ======================================================================= */
  /* EVENT HANDLERS
  /* ======================================================================= */
  
    /* --------------------------------- */
    /* SCROLL EVENT HANDLER
    /* --------------------------------- */
    
      /*
        Assign a function to the 'scrollEventHandler' object to create a scroll event listener.
        
        Example: scrollEventHandler.fn.myListener = function(){ console.log(this.scrollTop); }
      */
      
      var scrollEventHandler = {
        fn: {},
        target: $(window),
        init: function() {
          var scrollTarget = scrollEventHandler.target.get(0) === document.body ? $(window) : scrollEventHandler.target;
          scrollEventHandler.onScroll();
          scrollTarget.on('scroll', scrollEventHandler.onScroll);
        },
        onScroll: function(e) {
          for (var fn in scrollEventHandler.fn) {
            scrollEventHandler.shoutAt(fn, e);
          }
        },
        shoutAt: function(fn, e) {
          if (scrollEventHandler.fn.hasOwnProperty(fn) && typeof scrollEventHandler.fn[fn] === 'function') {
            scrollEventHandler.fn[fn].call({
              scrollTop       : scrollEventHandler.target.scrollTop(),
              windowHeight    : $(window).height(),
              documentHeight  : $(document).height(),
              event           : e
            });
          }
        }
      };
    
    /* --------------------------------- */
    /* RESIZE EVENT HANDLER
    /* --------------------------------- */
    
      /*
        Assign a function to the 'resizeEventHandler' object to create a resize event listener.
        
        Example: resizeEventHandler.fn.myListener = function(){ console.log(this.windowHeight); }
      */
      
      var resizeEventHandler = {
        fn: {},
        target: $(window),
        timeout: null,
        init: function() {
          resizeEventHandler.onResize();
          resizeEventHandler.target.on('resize', resizeEventHandler.onResize);
        },
        onResize: function(e) {
          clearTimeout(resizeEventHandler.timeout);
          
          resizeEventHandler.timeout = setTimeout(function() {
            for (var fn in resizeEventHandler.fn) {
              resizeEventHandler.shoutAt(fn, e);
            }
          }, 50);
        },
        shoutAt: function(fn, e) {
          if (resizeEventHandler.fn.hasOwnProperty(fn) && typeof resizeEventHandler.fn[fn] === 'function') {
            resizeEventHandler.fn[fn].call({
              scrollTop       : resizeEventHandler.target.scrollTop(),
              targetWidth     : resizeEventHandler.target.width(),
              targetHeight    : resizeEventHandler.target.height(),
              windowWidth     : $(window).width(),
              windowHeight    : $(window).height(),
              documentWidth   : $(document).width(),
              documentHeight  : $(document).height(),
              event           : e
            });
          }
        }
      };
  
  /* ======================================================================= */
  /* MODULES
  /* ======================================================================= */
  
    /*
      Use whiteboard.modules.define method to create a new module.
      
      Example: whiteboard.modules.define('myModule', function(){ console.log('Hello world!'); });
    */
    
    var modules = {};
    
    window.whiteboard = {
      modules: {
        define: function(moduleName, fn) {
          modules[moduleName] = fn;
        },
        
        init: function(scope) {
          initModules(scope);
        }
      }
    };
    
    function initModules(scope) {
      for (var fn in modules) {
        initModule(fn, scope);
      }
    }
    
    function initModule(fn, scope) {
      if (modules.hasOwnProperty(fn) && typeof modules[fn] === 'function') {
        modules[fn].call(scope, {
          vars: vars,
          helpers: helpers,
          resizeEventHandler: resizeEventHandler,
          scrollEventHandler: scrollEventHandler,
          initModule: initModule
        });
      }
    }
    
  /* ======================================================================= */
  /* ON READY
  /* ======================================================================= */
  
    $(function() {
      initModules($('body'));
      resizeEventHandler.init();
      scrollEventHandler.init();
    });
                                  
}(jQuery, window, document));

/* ///////////////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////////////// */

  /* ======================================================================= */
  /* MODULES
  /* ======================================================================= */
  
  /* --------------------------------- */
  /* HEADER TOGGLE
  /* --------------------------------- */
  
    /*
      The toggle button will, by default, affect its parent header.
      If you want to place the toggle button outside the header, you
      need to assign an ID attribute to the header and referenece that
      ID using a data attribute on the toggle.
      
      Example:
      
        <div id="my-header" class="wb-header ...">...</div>
        <div data-wb-header="my-header" class="wb-header-toggle">
          <button>Toggle</button>
        </div>
    */
    
    whiteboard.modules.define('headerToggle', function(wb) {
      if (whiteboard.headerToggleInitialized) return;
      
      whiteboard.headerToggleInitialized = true;
      
      $('body')
      .on('click', function(e) {
        var id, header, toggle;
        
        header = $(e.target).closest('.' + wb.vars.prefix.ns + 'header');
        toggle = $(e.target).closest('.' + wb.vars.prefix.ns + 'header-toggle');
        
        var isActive = header.hasClass(wb.vars.prefix.ns + 'is-active');
        var overlayClicked = $(e.target).hasClass(wb.vars.prefix.ns + 'header');
        var allToggles = $('.' + wb.vars.prefix.ns + 'header-toggle');
        var allHeaders = $('.' + wb.vars.prefix.ns + 'header');
        
        if (!isActive) return;
        
        if (overlayClicked) {
          setHeaderState(allToggles, allHeaders, false);
        }
        
        if (overlayClicked) {
          return false;
        }
      })
      .on('click', '.' + wb.vars.prefix.ns + 'header-toggle', function(e) {
        var id = $(this).data(wb.vars.prefix.ns + 'header'),
            header = $(this).closest('.' + wb.vars.prefix.ns + 'header'),
            state = !$(this).hasClass(wb.vars.prefix.ns + 'is-active');
        
        if (!id && header.length) {
          setHeaderState($(this), header, state);
          return;
        }
        
        setHeaderStateByID(id, state);
      });
      
      function setHeaderStateByID(id, state) {
        var toggle, header;
        
        if (id == undefined) {
          toggle = $('.' + wb.vars.prefix.ns + 'header-toggle');
          header = $('.' + wb.vars.prefix.ns + 'header');
        } else {
          toggle = $('.' + wb.vars.prefix.ns + 'header-toggle[data-' + wb.vars.prefix.ns + 'header=' + id + ']');
          header = $('.' + wb.vars.prefix.ns + 'header#' + id);
        }
        
        setHeaderState(toggle, header, state);
      }
      
      function setHeaderState(toggle, header, state) {
        toggle[state ? 'addClass' : 'removeClass'](wb.vars.prefix.ns + 'is-active');
        header[state ? 'addClass' : 'removeClass'](wb.vars.prefix.ns + 'is-active');
        
        if (!state) {
          setTimeout(function() {
            header.find('.' + wb.vars.prefix.ns + 'is-active').removeClass(wb.vars.prefix.ns + 'is-active');
          }, 300);
        }
      }
    });

  /* --------------------------------- */
  /* SCROLL CLASSES
  /* --------------------------------- */

    /*
      Adds classes to the body element to indicate scroll level
    */

    whiteboard.modules.define('scrollClasses', function(wb) {
      var moduleScope = $(this);
      var scrollTimeout;
      
      wb.scrollEventHandler.fn.scrollClasses = function() {
        var scrollTop     = this.scrollTop,
            windowHeight  = this.windowHeight;
        
        $('body').removeClass(wb.vars.prefix.ns + 'is-scrolled ' + wb.vars.prefix.ns + 'is-scrolled-more');
        
        if (scrollTop > 0) {
          $('body').addClass(wb.vars.prefix.ns + 'is-scrolled');
        }
        
        if (scrollTop > 150) {
          $('body').addClass(wb.vars.prefix.ns + 'is-scrolled-more');
        }
        
        clearTimeout(scrollTimeout);
        
        $('body').addClass(wb.vars.prefix.ns + 'is-scrolling');
        
        scrollTimeout = setTimeout(function() {
          $('body').removeClass(wb.vars.prefix.ns + 'is-scrolling');
        }, 500);
      }
    });
  
  /* --------------------------------- */
  /* DROP-DOWN NAV
  /* --------------------------------- */

    /*
      This module handles drop-down menus for main nav.
    */

    whiteboard.modules.define('dropDownNav', function(wb) {
      var moduleScope = $(this);
      
      moduleScope.find('.' + wb.vars.prefix.ns + 'drop-down-nav').each(function() {
        var root = $(this).children('ul');
        
        /* indicate items that have sub-menus */
        root.find('li').has('> ul').addClass(wb.vars.prefix.ns + 'has-submenu');
        
        /* indicate items that have mega-menus */
        root.find('li').has('> .' + wb.vars.prefix.ns + 'mega-menu').addClass(wb.vars.prefix.ns + 'has-megamenu');
        
        /* handle submenus overflow */
        root.find('li').has('> ul').each(function() {
          var li = $(this),
              ul = li.children('ul');
          
          li.on('mouseenter', function() {
            li.addClass(wb.vars.prefix.ns + 'is-hover');
            
            /* handle horizontal overflow */
            if (ul.offset() && ul.offset().left + ul.outerWidth() > $(window).width()) {
              ul.addClass(wb.vars.prefix.ns + 'overflow-h');
            }
            
            /* handle vertical overflow */
            if (ul.offset() && ul.offset().top + ul.outerHeight() - $(window).scrollTop() > $(window).height()) {
              ul.addClass(wb.vars.prefix.ns + 'overflow-v');
            }
          });
          
          li.on('mouseleave', function() {
            li.removeClass(wb.vars.prefix.ns + 'is-hover');
            
            /* remove overflow classes */
            ul
            .removeClass(wb.vars.prefix.ns + 'overflow-h')
            .removeClass(wb.vars.prefix.ns + 'overflow-v');
          });
          
          li.children('a').click(function() {
            li.toggleClass(wb.vars.prefix.ns + 'is-clicked');
            return false;
          });
        });
      });
    });

  /* --------------------------------- */
  /* STICKY NAV
  /* --------------------------------- */

    /*
      Adds classes to the body element to indicate scroll level
    */

    whiteboard.modules.define('stickyNav', function(wb) {
      var moduleScope = $(this),
          headerPos = 0;
      
      wb.scrollEventHandler.fn.stickyNav = function() {
        var scrollTop     = this.scrollTop,
            windowHeight  = this.windowHeight,
            header = $('.' + wb.vars.prefix.ns + 'header-sticky');
        
        headerPos = Math.max(headerPos, Math.max(0, scrollTop - header.height()));
        headerPos = Math.min(scrollTop, headerPos);
        
        $('.' + wb.vars.prefix.ns + 'header-sticky').css('top', headerPos);
      }
    });

  /* --------------------------------- */
  /* MINI CART TOGGLE
  /* --------------------------------- */
  
    whiteboard.modules.define('miniCartToggle', function(wb) {
      var moduleScope = $(this);
      
      if (!window.miniCartInit) {
        $('body')
        .on('click', function(e) {
          if ($(e.target).closest('#' + wb.vars.prefix.ns + 'mini-cart').length === 0 &&
              $(e.target).closest('.' + wb.vars.prefix.ns + 'mini-cart-toggle').length === 0) {
            $('#' + wb.vars.prefix.ns + 'mini-cart').removeClass((wb.vars.prefix.ns + 'is-active'));
          }
        });
        
        window.miniCartInit = true;
      }
      
      moduleScope.find('.' + wb.vars.prefix.ns + 'mini-cart-toggle').each(function() {
        $(this).click(function() {
          $('#' + wb.vars.prefix.ns + 'mini-cart').toggleClass((wb.vars.prefix.ns + 'is-active'));
        });
      });
    });

/* ///////////////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////////////// */

  /* ======================================================================= */
  /* SMOOTH SCROLL
  /* ======================================================================= */
  
  /* --------------------------------- */
  /* MOUSE SCROLL
  /* --------------------------------- */
  
    /*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
     * Licensed under the MIT License (LICENSE.txt).
     *
     * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
     * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
     * Thanks to: Seamus Leahy for adding deltaX and deltaY
     *
     * Version: 3.0.6
     * 
     * Requires: 1.2.2+
     */
     
    (function($) {

        var types = ['DOMMouseScroll', 'mousewheel'];

        if ($.event.fixHooks) {
            for (var i = types.length; i;) {
                $.event.fixHooks[types[--i]] = $.event.mouseHooks;
            }
        }

        $.event.special.mousewheel = {
            setup: function() {
                if (this.addEventListener) {
                    for (var i = types.length; i;) {
                        this.addEventListener(types[--i], handler, false);
                    }
                } else {
                    this.onmousewheel = handler;
                }
            },

            teardown: function() {
                if (this.removeEventListener) {
                    for (var i = types.length; i;) {
                        this.removeEventListener(types[--i], handler, false);
                    }
                } else {
                    this.onmousewheel = null;
                }
            }
        };

        $.fn.extend({
            mousewheel: function(fn) {
                return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
            },

            unmousewheel: function(fn) {
                return this.unbind("mousewheel", fn);
            }
        });


        function handler(event) {
            var orgEvent = event || window.event,
                args = [].slice.call(arguments, 1),
                delta = 0,
                returnValue = true,
                deltaX = 0,
                deltaY = 0;
            event = $.event.fix(orgEvent);
            event.type = "mousewheel";

            // Old school scrollwheel delta
            if (orgEvent.wheelDelta) {
                delta = orgEvent.wheelDelta / 120;
            }
            if (orgEvent.detail) {
                delta = -orgEvent.detail / 3;
            }

            // New school multidimensional scroll (touchpads) deltas
            deltaY = delta;

            // Gecko
            if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
                deltaY = 0;
                deltaX = -1 * delta;
            }

            // Webkit
            if (orgEvent.wheelDeltaY !== undefined) {
                deltaY = orgEvent.wheelDeltaY / 120;
            }
            if (orgEvent.wheelDeltaX !== undefined) {
                deltaX = -1 * orgEvent.wheelDeltaX / 120;
            }

            // Add event and delta to the front of the arguments
            args.unshift(event, delta, deltaX, deltaY);

            return ($.event.dispatch || $.event.handle).apply(this, args);
        }
        
    })(jQuery);
  
  /* --------------------------------- */
  /* SMOOTH SCROLL
  /* --------------------------------- */
  
    /**
     * jquery.simplr.smoothscroll
     * version 1.0
     * copyright (c) 2012 https://github.com/simov/simplr-smoothscroll
     * licensed under MIT
     * requires jquery.mousewheel - https://github.com/brandonaaron/jquery-mousewheel/
     */;
    (function($) {
        'use strict';

        $.srSmoothscroll = function(options) {

            var self = $.extend({
                step: 100,
                speed: 200,
                ease: "swing"
            }, options || {});
            
            // private fields & init
            var win = $(window),
                doc = $(document),
                /* REMOVED */ // top = 0,
                /* ADDED */ top = win.scrollTop(),
                step = self.step,
                speed = self.speed,
                viewport = win.height(),
                body = (navigator.userAgent.indexOf('AppleWebKit') !== -1) ? $('body') : $('html'),
                wheel = false;

            // events
            $('body').mousewheel(function(event, delta) {

                wheel = true;

                if (delta < 0) // down
                top = (top + viewport) >= doc.height() ? top : top += step;

                else // up
                top = top <= 0 ? 0 : top -= step;

                body.stop().animate({
                    scrollTop: top
                }, speed, self.ease, function() {
                    wheel = false;
                });

                return false;
            });

            win.on('resize', function(e) {
                viewport = win.height();
            })
                .on('scroll', function(e) {
                if (!wheel) top = win.scrollTop();
            });

        };
    })(jQuery);
  
  
$(document).ready(function(){

	/* Video Banner */

	$('#main__video').vide('img/Push-The-Buttons', {
		muted: true,
	 	loop: true,
	 	autoplay: true,
	 	posterType: 'detect'
	});

	/* Video Banner */


	/* Portfolio */

	$('#grid-container').cubeportfolio({
		layoutMode: 'grid',
		mediaQueries: [{
			width: 1400,
			cols: 2,
		}, {
			width: 1200,
			cols: 2,
		}, {
			width: 992,
			cols: 2,
		}, {
			width: 768,
			cols: 2,
		}, {
			width: 480,
			cols: 1,
		}],
	    animationType: 'flipOutDelay',
	    gapHorizontal: 10,
	    gapVertical: 10,
	    gridAdjustment: 'responsive',
	    caption: 'overlayBottomReveal',
	    displayType: 'fadeIn',
	    displayTypeSpeed: 300
	});

	/* Portfolio */


	/* Clients */

	$('#js-grid-clients').cubeportfolio({
	    layoutMode: 'slider',
	    drag: true,
	    auto: true,
	    autoTimeout: 3000,
	    autoPauseOnHover: true,
	    showNavigation: false,
	    showPagination: true,
	    rewindNav: true,
	    scrollByPage: false,
	    gridAdjustment: 'responsive',
	    mediaQueries: [{
			width: 1400,
			cols: 5,
		}, {
			width: 1200,
			cols: 5,
		}, {
			width: 992,
			cols: 4,
		}, {
			width: 768,
			cols: 3,
		}, {
			width: 480,
			cols: 2,
		}],
	    gapHorizontal: 0,
	    gapVertical: 50,
	    caption: 'opacity',
	    displayType: 'fadeIn',
	    displayTypeSpeed: 100,
	});

	/* Clients */

});


(function() {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm_share",
        b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q);
    }
})();




//# sourceMappingURL=../maps/script.js.map
