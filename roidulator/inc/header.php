                                                                                                                                <!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<title><?php echo $pageTitle; ?></title>
	
	
	
	
	
	
	
    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap theme -->
    <link href="../css/bootstrap-theme.min.css" rel="stylesheet">

	<link href="speedulator/css/style.css" rel="stylesheet">


    <!-- Custom styles for this template -->
    <link href="../theme.css" rel="stylesheet">

    <!-- Just for debugging purposes. Dont actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../js/ie-emulation-modes-warning.js"></script>

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../js/ie10-viewport-bug-workaround.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	
	

	<link rel="stylesheet" type="text/css" href="/css/customNav.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<link rel="icon" type="image/png" href="favicon.ico">
	
	
	
	
	
	
	
	
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <style type="text/css">
      html { height: 100% }
      body { height: 100%; margin: 0; padding: 0 }
      #map-canvas { height: 300px; }
    </style>
    <script type="text/javascript"
      src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCOrqEEeTeqtjw2-qdtxJ5_G1HxG5les4k">
    </script>
    <script type="text/javascript">
      function initialize() {
      directionsDisplay = new google.maps.DirectionsRenderer();
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directionsPanel"));    
      }
     
      
      
      
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>
	
	
	
	
	
</head>

<body>


<header>
    <!-- Fixed navbar -->
    <div class="navbar navbar-inverse navbar-static-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="http://billycougan.com/">BillyCougan.com</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class=""><a href="http://billycougan.com/">Home</a></li>
            <li><a href="/about.php">Detailed Self-Bio</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Projects <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
               <li class="dropdown-header">JavaScript Projects</li>
                <li><a href="/mlb" target="_blank">MLB Stats on Deck</a></li>
                <li><a href="/speedulator" target="_blank">Speedulator</a></li>
                <li><a href="/beer_ajax.php">AJAX Brewgle</a></li>
                <li class="divider"></li>
                <li class="dropdown-header">Other</li>
                <li><a href="/loosenup" target="_blank">Loosen Up!</a></li>
                <li><a href="/beer.php">PHP Brewgle</a></li>
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
</header>

<div id="content">
	
	
                            
                            
                            
                            
                            
                            