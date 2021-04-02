<?php 
$pageTitle = "Roidulator";
include('inc/header.php');?>

	<div class="container" style="">
		<div class="row">
			<div class="col-md-12">
				<button style="float:right" onclick="helpButton()">Help</button>
				<h1 style="font-size: x-large">Roidulator</h1>
				<h2>You may have more of a subtance in your body than you think.</h2>
				<hr>
			</div>
		</div>
	</div>
	
	<div class="container" id="main">
		
		<div class="row" id="" style="margin-bottom: ">	
		
			<div class="col-md-4">
			
				<div class="col-md-3">
					<img src="img/step1.jpg" style="width: 100%">
				</div>
				
				<div class="col-md-9">
					<select id="typeSelect" style="width: 100%">
						<option>Select Type</option>
					</select>
				</div>
				
			</div>
			
			<div class="col-md-4">
			
				<div class="col-md-3">
					<img src="img/step2.jpg" style="width: 100%">
				</div>
				
				<div class="col-md-9" style="vertical-align: bottom;">
					<select id="substanceSelect" style="width: 100%">
						<option>Select Substance</option>
					</select>
				</div>
				
			</div>
			
			<div class="col-md-4">
			
				<div class="col-md-3">
					<img src="img/step3.jpg" style="width: 100%">
				</div>
				
				<div class="col-md-9">
				
					<div class="col-md-12">
						<h2 style="margin-bottom: 3px">Select Dosage</h2>
					</div>
					
					<div class="col-md-10">
						<input id="mgSlider" type="range" min="0" max="1000" onchange="showValue(this.value + 'mg')">
					</div>
					
					<div class="col-md-2">
						<span id="range"></span>
					</div
				</div>
				
			</div>
				
		</div>
		
		<div class="row" id="">	
			<div class="col-md-12">
				<div class="col-md-12">
					<button id="roidulate" type="button" class="btn btn-sm btn-info" style="margin-top: 1%;width: 100% ">Roidulate</button>
				</div>
			</div>
		</div>
		
		<div class="row" style="margin-top: 3%">
			<div class="col-md-12">
				<div class="col-md-12" id="output">
				</div>
			</div>
		</div>
		
		<div class="row" style="margin-top: 3%">
			<div class="col-md-12">
				<div class="col-md-12">
					<div id="table" style="max-width: 300px">
					</div>
				</div>
			</div>
		</div>
	
	</div>
	
		
<script type="text/javascript"> function showValue(newValue) {document.getElementById("range").innerHTML=newValue;}</script>		
<?php include('inc/footer.php');?>
                            
                            
                            
                            
                            
                            
                            
                            
                            