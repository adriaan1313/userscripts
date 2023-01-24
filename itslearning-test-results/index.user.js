// ==UserScript==
// @name         Itslearning Detailed Results Tab
// @namespace    https://github.com/adriaan1313/userscripts/itslearning-test-results
// @version      0.1
// @description  Show Detailed Results Tab, even when the teacher hides it!
// @author       Bunnygamers
// @match        https://*.itslearning.com/Ntt/EditTool/ViewTestResults.aspx?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=itslearning.com
// @grant        none
// @installURL   https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/itslearning-test-results/index.user.js
// @updateURL    https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/itslearning-test-results/index.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/itslearning-test-results/index.user.js
// @homepageURL  https://github.com/adriaan1313/userscripts/tree/master/itslearning-test-results
// ==/UserScript==

(function() {
    'use strict';
    let a = document.getElementsByClassName("ccl-pagetabs h-is-not-mobile")[0];
    if(a.childElementCount<2){
        a.innerHTML+= `<li data-tabitemindex="2"><h2><a href="${window.location.href}&PageTab=2">Detailed results</a></h2></li>`;
    }
    let b = document.getElementsByClassName("ccl-pagetabs h-is-mobile")[0];
    if(b.childElementCount<2){
        b.innerHTML+= `<option value="${window.location.href}&PageTab=2">Detailed Results</option>`;
    }
})();
