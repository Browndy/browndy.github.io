// ==UserScript==
// @name         TW Line Drawer
// @namespace    *
// @version      1.0
// @description  *
// @author       Browndy
// @match        https://*.die-staemme.de/game.php?*&screen=map*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	const win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;

	// show UI and enable line mode
	win.TWLD_enableScriptHotkey = "l";
	// enable line mode
	win.TWLD_enableLineModeHotkey = "q";
	// enable label mode
	win.TWLD_enableLabelModeHotkey = "r";
	// enable delete mode
	win.TWLD_enableDeleteModeHotkey = "t";
	// adds the drawn line to the selected group
	win.TWLD_addLineHotkey = "w";
	// removes the last coordinates pair
	win.TWLD_undoCoordsHotkey = "e";

	// set language
	win.TWLD_lang = "de";

	// set default map scale
	win.TWLD_scale = 1;

	// enables zooming for the map
	win.TWLD_enableZoom = false;

	// how many continents are populated? (needed for coord wrap)
	win.TWLD_continents = 16

	// import data from website
	win.TWLD_data = [
		//[world, link]
		//["de197", "https://google.de"]
		["de216", "https://browndy.github.io/DieStämme-Stuff/TW%20Line%20Drawer/Test/test.js"],
		[],
	];

	$.getScript("https://browndy.github.io/DieStämme-Stuff/TW%20Line%20Drawer/TWLineDrawer.js");
})();
