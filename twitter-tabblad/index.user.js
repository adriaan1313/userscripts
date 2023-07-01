// ==UserScript==
// @name         Default following tab Twitter.
// @namespace    https://github.com/adriaan1313/userscripts/tree/master/twitter-tabblad
// @version      0.4
// @description  By default go to the "following" tab on the Twitter home page
// @author       Bunnygamers
// @match        https://twitter.com/*
// @match        http://twitter.com/*
// @icon         https://abs.twimg.com/favicons/twitter-pip.2.ico
// @grant        none
// @installURL   https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/twitter-tabblad/index.user.js
// @updateURL    https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/twitter-tabblad/index.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/twitter-tabblad/index.user.js
// @homepageURL  https://github.com/adriaan1313/userscripts/tree/master/twitter-tabblad
// @require      https://gist.githubusercontent.com/mjblay/18d34d861e981b7785e407c3b443b99b/raw/debc0e6d4d537ac228d1d71f44b1162979a5278c/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';
    waitForKeyElements("a[role=tab]",()=>{if(location.href.endsWith("twitter.com/")||location.href.endsWith("twitter.com")||location.href.endsWith("twitter.com/home")||location.href.endsWith("twitter.com/home/"))document.querySelectorAll("a[role=tab]")[1].click();});
})();
