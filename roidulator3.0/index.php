<?php 
$pageTitle = "Roidulator 3.0";
include('inc/header.php');?>

	<div class="container" style="">
		<div class="row">
			<div class="col-md-12">
				<!--<button style="float:right" onclick="helpButton()">Help</button>-->
				<h1 style="font-size: x-large">Roidulator 3.0</h1>
				<h2><i>Processes input data using substance half-lives to generate a stream of substance longevity.</i></h2>
				<hr>
			</div>
		</div>
	</div>
	
	
	
	
	
	<div class="container" id="main">
		<div id="blankFieldAlert" class="alert alert-danger" style="display:none">You must complete all fields before <strong>Roidulating</strong>.</div>
		<div id="alreadyRoidulated" class="alert alert-danger" style="display:none">This substance was already <strong>Roidulated</strong>.</div>
		<div class="row" style="margin-bottom: 1%">
			<div class="col-md-3">
				<span>Number of Substances: </span>
				<select id="numSub" style="display: inline-block">
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</select>
			</div>
		</div>
		
		<div class="row">	
			<div class="col-md-6">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Roidulator Input</h3>
					</div>
					
					<div id="input" class="panel-body">
					
						<div class="row">
							<div class="col-md-12">
								<label>Substance <span id="currentSubstance">1</span></label>
								<button type="button" class="btn btn-xs btn-primary" id="prev"> < </button>
								<button type="button" class="btn btn-xs btn-primary" id="next"> > </button>
								<button type="button" class="btn btn-xs btn-danger" id="remove"> x </button>
							</div>
						</div>
						
						<hr style="margin: -1% 0 2% 0">
						
						<div class="row">
							<div class="col-md-4">
								Type:
							</div>
							
							<div class="col-md-8">
								<select id="typeSelect" style="width: 100%">
									<option>---</option>
								</select>
							</div>
						</div>
						
						<div class="row">
							<div class="col-md-4">
								Name:
							</div>
							
							<div class="col-md-8">
								<select id="substanceSelect" style="width: 100%">
									<option>---</option>
								</select>
							</div>
						</div>
						
						<div class="row">
							<div class="col-md-4">
								Cycle Length:
							</div>
							
							<div class="col-md-8">
								<input id="cycleLength" type="number" min="0" max="999999"> days
							</div>
						</div>
						
						<div class="row">
							<div class="col-md-4">
								Initial Dose:
							</div>
							
							<div class="col-md-8">
								<input id="initDose" type="number" min="0" max="999999"> mg
							</div>
						</div>
						
						<div class="row">
							<div class="col-md-4">
								Repetative Dose:
							</div>
							
							<div class="col-md-8">
								<input id="repDoseAmt" type="number" min="0" max="999999"> mg every <input id="repDoseFrq" type="number" min="0" max="99999"> days
							</div>
						</div>	
							
						<div class="col-md-3" style="padding-left: 0">
							<button id="roidulate" type="button" class="btn btn-sm btn-primary" style="width: 100%; margin-bottom: 1%">Roidulate</button>
						</div>
						
						<div class="col-md-3" style="padding-left: 0">
							<button id="clear" type="button" class="btn btn-sm btn-primary" style="width: 100%">Clear</button>	
						</div>
						
						<div class="col-md-3" style="padding-left: 0">
							<button id="test" type="button" class="btn btn-sm btn-danger" style="width: 100%">Test Input</button>	
						</div>
						
					</div>
				
				</div>
			</div><!--------------------------------------------------------------INPUT-------------------------------------------------------------->

			<div class="col-md-6">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Roidulator Output</h3>
					</div>
					
					<div id="output" class="panel-body">
						<div class="waiting" style=""></div>
						<div class="row">
							<div id="table" class="col-md-12 table-responsive">
								<div class="row">
								</div>
							</div>
						</div>	
					</div>
				
				</div>
			</div>
		</div>



		<div class="row">
                    <div class="col-md-12">
                        <div id="outputChart" class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o"></i> Roidulator Output Chart</h3>
                            </div>
                            <div class="panel-body">
                            	<div class="waiting" style=""></div>
                                <div class="flot-chart">
                                    <div class="flot-chart-content" id="flot-line-chart" style="height: 20px"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
	</div>
	
<?php include('inc/footer.php');?>                    
                            
                            
                            