<?php 
$pageTitle = "Roidulator 2.0";
include('inc/header.php');?>

	<div class="container" style="">
		<div class="row">
			<div class="col-md-12">
				<!--<button style="float:right" onclick="helpButton()">Help</button>-->
				<h1 style="font-size: x-large">Roidulator 2.0</h1>
				<h2><i>The Roidulator On Roids</i></h2>
				<hr>
			</div>
		</div>
	</div>
	
	
	
	
	
	<div class="container" id="main">
		<div id="blankFieldAlert" class="alert alert-danger" style="display:none">You must complete all fields before <strong>Roidulating</strong>.</div>
		
		<!--<div class="row" style="margin-bottom: 1%">
			<div class="col-md-3">
				<span>Number of Substances: </span>
				<select id="numSub" style="display: inline-block">
					<option>1</option>
				</select>
			</div>
		</div>-->
		
		<div class="row">	
			<div class="col-md-6">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Roidulator Input</h3>
					</div>
					
					<div id="input" class="panel-body">
					
						<!--<div class="row">
							<div class="col-md-12">
								<label>Substance 1</label>
								<button type="button" class="btn btn-xs btn-primary"> < </button>
								<button type="button" class="btn btn-xs btn-primary"> > </button>
							</div>
							<hr style="margin: -1% 0 2% 0">
						</div>-->
						
						

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
						
						<!--<div class="col-md-3" style="padding-left: 0">
							<button id="test" type="button" class="btn btn-sm btn-danger" style="width: 100%">Test Input</button>	
						</div>-->
						
					</div>
				
				</div>
			</div><!--------------------------------------------------------------INPUT 1-------------------------------------------------------------->
			
			
			
			<div class="col-md-6 hidden" style="display: ">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Roidulator Input</h3>
					</div>
					
					<div id="input" class="panel-body">
					
						<div class="row">
							<div class="col-md-12">
								<label>Substance 2</label>
								<button type="button" class="btn btn-xs btn-primary"> < </button>
								<button type="button" class="btn btn-xs btn-primary"> > </button>
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
			</div><!--------------------------------------------------------------INPUT 2-------------------------------------------------------------->
			
			
			
			
			<div class="col-md-6 hidden">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Roidulator Input</h3>
					</div>
					
					<div id="input" class="panel-body">
					
						<div class="row">
							<div class="col-md-12">
								<label>Substance 3</label>
								<button type="button" class="btn btn-xs btn-primary"> < </button>
								<button type="button" class="btn btn-xs btn-primary"> > </button>
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
			</div><!--------------------------------------------------------------INPUT 3-------------------------------------------------------------->
			
			
			
			
			
		</div><!-----------------------------------------------------------------INPUT--------------------------------------------------------------->
	

		
		<div class="row">
                    <div class="col-md-12">
                        <div id="outputChart" class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o"></i> Roidulator Output Chart</h3>
                            </div>
                            <div class="panel-body">
                            	<div id="waiting" style=""></div>
                                <div class="flot-chart">
                                    <div class="flot-chart-content" id="flot-line-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Roidulator Output</h3>
					</div>
					
					<div id="output" class="panel-body">
						<div class="row">
							<div id="table" class="col-md-12">
								
								<div class="col-md-4">
									<div id="table1">
									</div>
								</div>
								
								<div class="col-md-4">
									<div id="table2">
									</div>
								</div>
								
								<div class="col-md-4">
									<div id="table3">
									</div>
								</div>
								
							</div>
						</div>	
					</div>
				
				</div>
			</div>
		</div>
                
                
                
                
                
		
	</div>
	
<?php include('inc/footer.php');?>                    
                            
                            
                            