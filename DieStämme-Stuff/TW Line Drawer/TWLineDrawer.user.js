// ==UserScript==
// @name         TW Line Drawer
// @namespace    *
// @version      1.2
// @description  *
// @author       Browndy
// @match        https://*.die-staemme.de/game.php?*screen=map*
// @match        https://*.die-staemme.de/game.php?*screen=twld*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(function () {
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
	// enable select corridor mode
	win.TWLD_enableSelectCorridorHotkey = "u";
	// enable edit select mode
	win.TWLD_enableEditSelectModeHotkey = "i";
	// adds the drawn line to the selected group
	win.TWLD_addLineHotkey = "w";
	// removes the last coordinates pair
	win.TWLD_undoCoordsHotkey = "e";

	// set language
	win.TWLD_lang = "de";

	// set default map scale
	win.TWLD_scale = 1;

	// enables zooming for the map
	win.TWLD_enableZoom = true;
	// only zoom while holding shift
	win.TWLD_zoomOnShift = true;

	// how many continents are populated? (needed for coord wrap)
	win.TWLD_continents = 16;

	// import data from website
	win.TWLD_data = [
		// [world, link]
		// ["de197", "https://google.de"]
		// ["de226", "https://browndy.github.io/DieStämme-Stuff/TW%20Line%20Drawer/Test/test.js"],
		[],
	];

	win.$.ajaxSetup({cache: true});
	win.$.getScript("https://browndy.github.io/DieStämme-Stuff/TW%20Line%20Drawer/Clean/TWLineDrawer.js");
})();
