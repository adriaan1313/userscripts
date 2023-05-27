// ==UserScript==
// @name         Default channel videos tab
// @namespace    https://github.com/adriaan1313/userscripts/tree/master/yt-channel-videos
// @version      0.3
// @description  Make the "videos" section of a youtube channel page default to Latest again after youtube made a "For You" bit
// @author       Bunnygamers
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @require      https://gist.githubusercontent.com/mjblay/18d34d861e981b7785e407c3b443b99b/raw/debc0e6d4d537ac228d1d71f44b1162979a5278c/waitForKeyElements.js
// @grant        none
// @installURL   https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/yt-channel-videos/index.user.js
// @updateURL    https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/yt-channel-videos/index.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/adriaan1313/userscripts@master/yt-channel-videos/index.user.js
// @homepageURL  https://github.com/adriaan1313/userscripts/tree/master/yt-channel-videos
// ==/UserScript==

(function() {
    if(window.location.href.indexOf("/videos")!=-1) waitForKeyElements("yt-chip-cloud-chip-renderer[role=tab]", ()=>document.querySelectorAll("yt-chip-cloud-chip-renderer[role=tab]")[0].click());
    //https://stackoverflow.com/questions/3522090/event-when-window-location-href-changes
    var oldHref = document.location.href;
    window.onload = function() {
        var bodyList = document.querySelector("body")
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (oldHref != document.location.href) {
                    oldHref = document.location.href;
                    if (window.location.href.indexOf('/videos')!=-1) {
                        waitForKeyElements("yt-chip-cloud-chip-renderer[role=tab]", ()=>document.querySelectorAll("yt-chip-cloud-chip-renderer[role=tab]")[0].click());
                    }
                }
            });
        });
        var config = {
            childList: true,
            subtree: true
        };
        observer.observe(bodyList, config);
    };

})();
