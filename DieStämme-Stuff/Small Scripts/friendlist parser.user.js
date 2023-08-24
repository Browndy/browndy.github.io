// ==UserScript==
// @name         Friendlist Parser
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Parses a list of names into the "buddies"-/ or the "command/village sharing"-pages
// @author       Browndy
// @match        https://*.die-staemme.de/game.php*screen=settings&mode=command_sharing
// @match        https://*.die-staemme.de/game.php*screen=settings&mode=village_notes_sharing
// @match        https://*.die-staemme.de/game.php*screen=buddies
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// @downloadURL  https://browndy.github.io/DieStämme-Stuff/Friendlist%20Parser/friendlist%20parser.user.js
// @updateURL    https://browndy.github.io/DieStämme-Stuff/Friendlist%20Parser/friendlist%20parser.user.js
// @homepage     https://browndy.github.io/DieStämme-Stuff/
// ==/UserScript==

(function() {
	"use strict";

	document.addEventListener("paste", async (event) => {
		event.preventDefault();

		var list = (event.clipboardData || window.clipboardData).getData("text").split(/\r\n|\n|\r/);

		var url = window.location.href;

		// on buddies page
		if (url.indexOf("screen=buddies") > -1) {
			url += "&action=add_buddy";

			for (const name of list) {
				//console.log(name)
				let xmlhttp = new XMLHttpRequest();
				xmlhttp.open("POST", url);
				xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xmlhttp.send("name=" + name.trim() + "&h=" + csrf_token);
				UI.SuccessMessage(`Added ${name.trim()}`)
				await new Promise(r => setTimeout(r, 300));
			};

			alert("DONE");
		};

		// on command sharing or notes sharing page
		if (url.indexOf("screen=settings&mode=command_sharing") > -1 || url.indexOf("screen=settings&mode=village_notes_sharing") > -1 ) {
			$("form > table > tbody > tr").each(function() {
				if (list.indexOf($(this).find('td').eq(0).text()) > -1) {
					$(this).find("td").eq(1).find("input").eq(0).prop("checked", true);
				};
				$(this).find("td").eq(2).find("input").eq(0).prop("checked", true);
			});

			await new Promise(r => setTimeout(r, 200));
			$("form").eq(0).submit();
		};
	});
})();
