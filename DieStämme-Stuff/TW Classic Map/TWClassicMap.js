(function () {
	const win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
	const map = typeof unsafeWindow != 'undefined' ? unsafeWindow.TWMap : window.TWMap;
	
	// classic, new, new_skins
	const pack = win.TWCM_pack || "new";
	console.log("loading " + pack + " map");
	
	map.graphics = "https://raw.githubusercontent.com/Browndy/tw-style-packs/master/packs/" + pack + "/graphics/";
	map.graphics += map.night ? "n_" : "";

	map.reload();
	
	// document-idle
	window.addEventListener ("load", function() {
		map.reload();
    	if (game_data.player.is_guest === undefined) return;
    	$("#map_container")[0].children[0].remove();
	});
})();
