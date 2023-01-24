// ==UserScript==
// @name         Default following tab Twitter.
// @namespace    https://github.com/adriaan1313/userscripts/twitter-tabblad
// @version      0.1
// @description  By default go to the "following" tab on the Twitter home page
// @author       Bunnygamers
// @match        https://twitter.com/home
// @match        https://twitter.com/
// @icon         https://abs.twimg.com/favicons/twitter-pip.2.ico
// @grant        none
// @installURL   https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/twitter-tabblad/index.user.js
// @updateURL    https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/twitter-tabblad/index.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/twitter-tabblad/index.user.js
// @homepageURL  https://github.com/adriaan1313/userscripts/tree/master/twitter-tabblad
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(()=>{// should make this a proper way of detecting this at some point
        document.querySelectorAll("a[role=tab]")[1].click();
    },800);
})();
