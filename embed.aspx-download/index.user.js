// ==UserScript==
// @name         embed.aspx Download button
// @namespace    https://github.com/adriaan1313/userscripts/tree/master/embed.aspx-download
// @version      0.1
// @description  Crudely adds a download button to embed.aspx style microsoft office document embeds (like ItsLearning Casper Resources)
// @author       Bunnygamers
// @match        https://*.sharepoint.com/*/embed.aspx?*
// @icon         https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2lJfT
// @grant        none
// @installURL   https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/embed.aspx-download/index.user.js
// @updateURL    https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/embed.aspx-download/index.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/embed.aspx-download/index.user.js
// @homepageURL  https://github.com/adriaan1313/userscripts/tree/master/embed.aspx-download
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener ("load", ()=>document.getElementsByClassName("od-Branding")[0].innerHTML+="<a href="+ g_fileInfo.downloadUrl +" download style=\"float:right; height:20px; margin-top: 13px; padding:0px;\"><button>Download</button></a>");
})();
