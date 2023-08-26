// ==UserScript==
// @name         Attack/Support
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.die-staemme.de/game.php?*screen=place*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	(function() {
		$(document).on("keypress", function(e) {
			switch (String.fromCharCode(e.which)) {
				case "2":
					$("#target_attack").click();
					$("#troop_confirm_submit").click();
					break;
				case "3":
					$("#target_support").click();
					$("#troop_confirm_submit").click();
					break;
			};
		});
	})();
    // Your code here...
})();
