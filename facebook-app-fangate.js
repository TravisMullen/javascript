var Contest = {
	init: function( config ) {
		this.config = config,
		//#gm-contest is the ID of the body with the app page
		this.config.access = $('#gm-contest .access'),
		this.config.gate = $('#gm-contest .gate'),
		this.config.body = $('body#gm-contest'),
		this.config.terms = $('#gm-contest .terms-and-conditions'),
		this.config.prizeInfo = $('#gm-contest .prize-information');
			
		this.gate(this.config.gateAction);
	},
	gate: function(action) {
		var self = Contest;
		//open or close
		if (action === "open") {
			//open
			self.displayChange(self.config.gate,self.config.access);
			self.config.body.addClass("open-gate");
		} else {
			//close
			self.displayChange(self.config.access,self.config.gate);
			self.config.body.removeClass("open-gate");
		};
	},
	displayChange: function(hide,show) {
		if (hide.css("display") === "block") { 
			console.log('hidding');
			hide.fadeOut(1000, function(){
				show.fadeIn(800);
				//console.log('hide CallBack');
			});
		} else {
			show.fadeIn(800);
			//console.log('hide without CB');
		}
	}
	
};

$(document).ready(function() {
<?php
	$signed_request = $_REQUEST["signed_request"];
	list($encoded_sig, $payload) = explode('.', $signed_request, 2);
	$data = json_decode(base64_decode(strtr($payload, '-_', '+/')), true);
	 
	if (empty($data["page"]["liked"])) {
	    echo "Contest.init({ gateAction:\"close\" });";
	} else {
	    echo "Contest.init({ gateAction:\"open\" });";
	}
?>
});