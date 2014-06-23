$(document).ready(function() {

	(function poll() {
	    setTimeout(function() {
		/*
		
			// Function to get data from a RESTful URL and return objects in JSON
			function getDataFromURL(url) {
				$.ajax({
		            url: url,
		            type: "GET",
					success: function(data) {
						if (data.status !== "SUCCESS") {
							console.log("Not found");
						} else {
							console.log("success");
							return data.object;
						}
					},
					
					dataType: "json",
		            complete: poll,
		            timeout: 2000
				})
			}
			
			var patterns_return = getDataFromURL("http://192.168.1.221:5439/patterns");
		//	console.log(patterns_return);
			
		//	var bulbs_return = getDataFromURL("http://192.168.1.221:5439/state");
		//	console.log(bulbs_return);
		*/
		
			// START Get Patterns
			$.ajax({
	            url: "http://192.168.1.221:5439/patterns",
	            type: "GET",
	            success: function(patterns_data) {
					var block = $('#pattern-button-panel-buttons');
					block.html("");
					if(patterns_data.status !== "SUCCESS") {
						block.html("There was an issue requesting bulb state. Please try again.");
					} else {
						$.each(patterns_data.object.patterns, function(key,val) {
							block.append( "<a href='#' class='button pattern-button' id='pattern-button-" + val + "'>" + val + "</a><br/>" );
						});
						
					}
					
					patterns_data = null;
	            },
	            dataType: "json",
	            complete: poll,
	            timeout: 2000
	        })
	
			// END Get Patterns
						
			// START Get State of Bulbs
	        $.ajax({
	            url: "http://192.168.1.221:5439/state",
	            type: "GET",
	            success: function(bulbs_data) {
					var block = $('#bulb-status-list');
					block.html("");
					if(bulbs_data.status !== "SUCCESS") {
						block.html("There was an issue requesting bulb state. Please try again.");
					} else {
						//console.log(bulbs_data.object);
						$.each(bulbs_data.object, function(key, val) {
							var d = new Date(val.state_ts *1000);
							var now = new Date();
							var last_refreshed_css_id = 'bulb-status_last-refreshed-normal';
							// Check if the bulb is older than 10 seconds - it may be gone..
							if ((now.getTime() - d.getTime()) > 10000) {
								last_refreshed_css_id = 'bulb-status_last-refreshed-old';
							} else {
								last_refreshed_css_id = 'bulb-status_last-refreshed-normal';
							}
							block.append("<p id='bulb-status_bulb-name'>" + val.label + "<div id='bulb-status_bulb-color' style='background:" + val.rgb +"'></div></p>");
							block.append("<p id='" + last_refreshed_css_id + "'>Last Refreshed: " + d.toLocaleString() + "</p>");
							val = null;
							key = null;
						});
					}
					
					bulbs_data = null;
	            },
	            dataType: "json",
	            complete: poll,
	            timeout: 2000
	        })
			// END Get State of Bulbs
	
	    }, 10000);
	})();

	// Delegated handler for pattern button clicking
	$("#pattern-button-panel-buttons").on('click', 'a.pattern-button', function() {
		
		// Construct API URL
		var pattern_call_url =	 "http://192.168.1.221:5439/pattern/" + this.id.replace("pattern-button-","");
		$.getJSON(pattern_call_url,function(result){
			console.log( "JSON Data: ", result);
		});
	});



	/*
	 * Hard coded LIFX Bulb Buttons
	 */
	$("#general-button-all_on").click(function(){
		var apiURL = "http://192.168.1.221:5439/power/on";
		$.getJSON(apiURL,function(result){
			console.log( "JSON Data: ", result);
		});
	});
	
	$("#general-button-all_off").click(function(){
		var apiURL = "http://192.168.1.221:5439/power/off";
		$.getJSON(apiURL,function(result){
			console.log( "JSON Data: ", result);
		});
	});
});
