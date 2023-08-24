// ==UserScript==
// @name         TW Declaration Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes declarations of war with more than 1000 characters from war stats
// @author       Browndy
// @match        https://*.die-staemme.de/game.php?*screen=wars&mode=stats&war=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("#ally_content tr tr").each(function() {
        if (this.innerHTML.includes("Erklärung") && this.innerHTML.length > 1000) {
            this.remove();
        };
    });
})();
