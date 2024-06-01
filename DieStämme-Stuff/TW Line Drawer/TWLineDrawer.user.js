// ==UserScript==
// @name         TW Line Drawer
// @namespace    *
// @version      1.0
// @description  *
// @author       Browndy
// @match        https://*.die-staemme.de/game.php?*screen=map*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	const win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;

	// show UI and enable line mode
	const enableScriptHotkey = win.TWLD_enableScriptHotkey || "l";
    // enable line mode
    const enableLineModeHotkey = win.TWLD_enableLineModeHotkey || "q";
    // enable label mode
    const enableLabelModeHotkey = win.TWLD_enableLabelModeHotkey || "r";
    // enable delete mode
    const enableDeleteModeHotkey = win.TWLD_enableDeleteModeHotkey || "t";
    // enable select corridor mode
    const enableSelectCorridorModeHotkey = win.TWLD_enableSelectCorridorHotkey || "u";
    // enable edit select mode
    const enableEditSelectModeHotkey = win.TWLD_enableEditSelectModeHotkey || "i";
    // adds the drawn line to the selected group
    const addLineHotkey = win.TWLD_addLineHotkey || "w";
    // removes the last coordinates pair
    const undoCoordsHotkey = win.TWLD_undoCoordsHotkey || "e";

    // set language
    const lang = win.TWLD_lang || "de";

    // set default map scale
    const scale = win.TWLD_scale || 1;

    // enables zooming for the map
    const enableZoom = win.TWLD_enableZoom || false;

    // how many continents are populated? (needed for coord wrap)
    const continents = win.TWLD_continents || 16;

    // import data from website
    const data = win.TWLD_data || [
        // [world, link]
        // ["de197", "https://google.de"]
        // ["de226", "https://browndy.github.io/DieStämme-Stuff/TW%20Line%20Drawer/Test/test.js"],
        [],
    ];

	$.getScript("https://browndy.github.io/DieStämme-Stuff/TW%20Line%20Drawer/TWLineDrawer.js");
})();
