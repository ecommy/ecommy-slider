ecommy-slider
=============

Very simple jquery slideshow

please check the demo for how it works

1. you build a list of html elements like:

		<ul id="homeslideshow" class="ecommy-slideshow">
			<li class="v1"><img src="../img/1.jpg" /></li>
			<li class="v2"><img src="../img/2.jpg" /></li>
			<li class="v3"><img src="../img/3.jpg" /></li>
		</ul>
		
2. you include the css, js libraries in the header
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<link rel="stylesheet" type="text/css" href="../css/style.css" />
		<script type="text/javascript" src="../js/ecommy-slider.js"></script>
		
		
3. you start the slideshow
		<script type="text/javascript">
			$('document').ready(function() {
				$('#homeslideshow').ecommy_slider();
			});
		</script>