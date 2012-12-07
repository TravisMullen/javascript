var ObjectOfYourChoice = {
	init: function( config ) {
		this.config.body = $("body"),
		this.config.activeClasses = [];
		
	}
	updateBodyClass: function(newClass) {
		var self = Portfolio,
			//activeClasses[] is set-up in INIT
			ac = self.config.activeClasses,
			acs = ac.join(" "),
			nc = newClass,
			bc = self.config.body,
			compare = $.grep( ac, function(n,i){
				   	if (n === nc) { return n };
				 });
		if (bc.hasClass(nc)) { return };
		if (compare.length < 1) { ac.push(nc) };
		return bc.removeClass(acs).addClass(nc);
	}
};


ObjectOfYourChoice.updateBodyClass("new-class");
