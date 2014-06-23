<?php
/*
Copyright 2014 Chris Drumgoole

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




?>
<!DOCTYPE html>
<html class="no-js" lang="en" >

<head>	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PiHA-Kiosk</title>

	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/foundation.css">
	<link rel="stylesheet" href="css/app.css">
	
	<script src="js/vendor/modernizr.js"></script>
	
</head>

<body>
	
	<!-- START Main Grid Container -->
	<div class="row fullWidth">
		<div class="small-12 columns">
			
			<!-- START Tabs Container -->
			<ul class="tabs vertical" data-tab>
				<li class="tab-title active"><a href="#panel-LIFXLights">LIFX Lights</a></li>
				<li class="tab-title"><a href="#panel-NotYet">Not Yet...</a></li>
			</ul>
			<div class="tabs-content vertical">
				<div class="content active" id="panel-LIFXLights">
					<p>LIFX Bulbs</p>
					
					<!-- START LIFX Bulbs Tab Container -->
					
					<!-- ROW -->
					<div class="row">
						<div class="small-6 large-6 columns">
							<!-- START Patterns button area -->
							<div class="panel" id="pattern-button-panel">
								<h3>Patterns</h3>
								<div id="pattern-button-panel-buttons">
									<img src="img/ajax-loader.gif">
								</div>
							</div>
							<!-- END Patterns button area -->
						</div>
						<div class="small-6 large-6 columns">
							<!-- START General Controls Area -->
							<div class="panel" id="general-button-panel">
								<h3>General</h3>
								<div id="general-button-panel-buttons">
									<ul class="button-group">
									  <li><a href="#" class="button" id="general-button-all_on">All On</a></li>
									  <li><a href="#" class="button" id="general-button-all_off">All Off</a></li>
									</ul>
								</div>
							</div>
							<!-- END General Controls Area -->
						</div>
					</div>
					
					<!-- ROW -->
					
					<!-- ROW -->
					<div class="row">
						<div class="small-6 large-6 columns">
							<!-- Placeholder -->
						</div>
						<div class="small-6 large-6 columns">
							<!-- START General Controls Area -->
							<div class="panel" id="general-button-panel">
								<h3>Bulb Status</h3>
								<div id="bulb-status-list">
									<img src="img/ajax-loader.gif">
								</div>
							</div>
							<!-- END General Controls Area -->
						</div>
					</div>
					
					<!-- END LIFX Bulbs Tab Container -->
				</div>
				<div class="content" id="panel-NotYet">
					<p>Panel 2 content goes here.</p>
				</div>
			</div>
			<!-- END Tabs Container -->
			
		</div>
	</div>
	<!-- END Main grid container -->

	<script src="js/vendor/jquery.js"></script>
	<script src="js/foundation.min.js"></script>
	<script src="js/app.js"></script>
	<script>
		$(document).foundation();
	</script>
</body>

</html>