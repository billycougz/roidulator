//-----------------------------------------------------------------On page ready, load data
var typeArray = [];
var roidArray = [];
var typeOption = "";
var src = "";

var inputHeight = "";

$(document).ready(function () {

	src = "data/roids.json";
	
	$.getJSON(src, function (response) {
		
		$.each(response, function (index, roid) {
		
			typeOption = "<option>" + roid.type + "</option>";
			if($.inArray(typeOption, typeArray) == -1){
				typeArray.push(typeOption);
				$('#typeSelect').append(typeOption);
			}
			
			roidArray.push(roid);
			
		});
	
	});//End getJSON
	
	inputHeight = $('#input').height();
	$('#output').height(inputHeight);

	$(".waiting").Loadingdotdotdot({
	    "word": "Waiting for Roidulator Input"
	});

}); //end ready

//-----------------------------------------------------------------Load substances in select box when a type is chosen
var substanceOption = "";

$("body").on("change", "#typeSelect", function(){

	$('#substanceSelect').html("<option>---</option>");

	$(roidArray).each(function(index, roid){
		
		if(roid.type == $("#typeSelect").val()){
			substanceOption = $("<option>").html(roid.substance).attr("hl", roid.hl);
			
			$('#substanceSelect').append(substanceOption);
		}
	});
}).trigger( "change" );










//-----------------------------------------------------------------Fade out alert
$("body").on("mousedown", "#main", function(){
	$('#blankFieldAlert').fadeOut("slow");
	$('#alreadyRoidulated').fadeOut("slow");
}).trigger( "mousedown" );















//------------------------------------------------------------------------Roidulate button, creates substance objects
var table = "";
var tableData = "";
var highlight = "";

var name = "";
var type = "";

var day = "";
var remaining = 0.00;
var roidulate = "";

var hl = 0.00;
var initDose = "";
var cycleLength = "";
var repDoseAmt = "";
var repDoseFrq = "";

var outputArray = [];
var substanceArray = [];

$("body").on("click", "#roidulate", function(){
	
	roidulate = "no";
	outputArray = [];
	day = "";
	type = $('#typeSelect').val();
	name = $('#substanceSelect').val();
	initDose = $('#initDose').val();
	cycleLength = $('#cycleLength').val();
	repDoseAmt = $('#repDoseAmt').val();
	repDoseFrq = $('#repDoseFrq').val();
	
	numSubstances = $('#numSub').val();
	currentSubstance = $('#currentSubstance').text();

	if(type == "---" || name == "---" || cycleLength == "" || initDose == "" || repDoseAmt == "" || repDoseFrq == ""){
		roidulate = "no";
		
     		$('#blankFieldAlert').fadeIn("slow");
      		
	}else{
		for(var i = 1; i < (numSubstances + 1) ; i++){
			
			if((currentSubstance == i && substanceArray[i-1] === undefined) || (currentSubstance == i && substanceArray[i-1].type == "---")){
				roidulate = "go";
			}
		}
		
		if(roidulate == "no"){
			$('#alreadyRoidulated').fadeIn("slow");
		}
		

	}
	
	if(roidulate == "go"){
	
			$('.waiting').html("");
			$('#flot-line-chart').height("400px");
			
	
		var substance = new Substance();
	
		for(var i = 1; i < (parseInt(numSubstances) + 1); i++){
			if(currentSubstance == i){
				substanceArray[i-1] = substance;
			}
		}
	
		substance.roidulate();
		graph();


	}//End check for roidulate (go or no)
	
}).trigger( "click" );












//---------------------------------------------------------------------Clear button
$("body").on("click", "#clear", function(){

	$('#cycleLength').val("");
	$('#initDose').val("");
	$('#repDoseAmt').val("");
	$('#repDoseFrq').val("");
	
	$('#typeSelect').val("---");
	$('#substanceSelect').html("<option>---</option>");
	
	$('#table').html("");
	
	$(".waiting").Loadingdotdotdot({
	    "speed": 400,
	    "maxDots": 4,
	    "word": "Waiting for Roidulator Input"
	});

	results = [];
	substanceArray = [];
	$('.flot-chart').html('<div class="flot-chart-content" id="flot-line-chart" style="height: 20px"></div>');
	
}).trigger( "click" );









//---------------------------------------------------------------------TEST BUTTON
$("body").on("click", "#test", function(){

	$('#cycleLength').val("60");
	$('#initDose').val("1200");
	$('#repDoseAmt').val("200");
	$('#repDoseFrq').val("7");
	
	$('#typeSelect').val("Depot Steroid");
	
	substanceOption = $("<option>").html("Winstrol (stanozolol)").attr("hl", "1d");
	$('#substanceSelect').append(substanceOption);
	$('#substanceSelect').val("Winstrol (stanozolol)");
	
}).trigger( "click" );











//----------------------------------------------------------------------Substance class and functions
function Substance(){

	this.type = $('#typeSelect').val();
	this.name = $('#substanceSelect').val();
	this.cycleLength = $('#cycleLength').val();
	this.initDose = $('#initDose').val();
	this.repDoseAmt = $('#repDoseAmt').val();
	this.repDoseFrq = $('#repDoseFrq').val();
	this.hl = $('option:selected', '#substanceSelect').attr('hl');
 	if(this.hl.indexOf("h") > -1){
 	
 		this.hl = parseFloat(hl);
 		this.hl = hl/24;
 	
 	}
 	
 	this.cycleLength = parseFloat(this.cycleLength);
 	this.initDose = parseFloat(this.initDose);
 	this.repDoseAmt = parseFloat(this.repDoseAmt);
 	this.repDoseFrq = parseFloat(this.repDoseFrq);
 	this.hl = parseFloat(this.hl);
}


Substance.prototype.roidulate = function(){
	
	this.remaining = this.initDose;
	this.table = '<div class="col-md-4" style="margin-bottom: 1%;"><table class="table"><caption><b><u>' + this.name + '</u></b></caption><tbody class="tableData" style="display: block; height: 162px; overflow-y: scroll"><tr>';
	
	this.th = '';
	this.td = '';
	
	this.tableData = "";
	
	for(day = 0; day < 60; day++){
	
		if(day !=0){
			this.remaining = this.remaining * Math.pow(.5, 1/this.hl);
		}
		
		highlight = "";
		
		if(day < this.cycleLength && (day) % this.repDoseFrq == 0 && day > 0){
			this.remaining = this.remaining + this.repDoseAmt;
			highlight = "highlight";
		}
		
		//this.th = this.th + '<th>Day ' + (day + 1) +'</th>';
		//this.td = this.td + '<td>' + this.remaining.toFixed(2) + 'mg</td>';
		this.tableData = this.tableData + '<tr class="' + highlight + '"><td><b>' + (day + 1) + ': &nbsp;</b></td><td>' + this.remaining.toFixed(2) + 'mg</td></tr>';
		
		outputArray.push([day + 1, this.remaining]);
	}
	
	//this.table = '<table class="table"><thread><tr>' + this.th + '</tr></thread><tbody><tr>' + this.td + '</tr></tbody></table>';
	
	this.table = this.table + this.tableData + '</tr></tbody></table></div>';
	$('#table').append(this.table);
	
}


var results = [];

/*
Substance.prototype.graph = function(){

	currentSubstance = parseInt($('#currentSubstance').text());
	
	// Flot Line Chart with Tooltips
	$(document).ready(function() {
	    console.log("document ready");
	    var offset = 0;
	    plot();
	
	    function plot() {
	
	        var options = {
	            series: {
	                lines: {
	                    show: true
	                },
	                points: {
	                    show: true
	                }
	            },
	            grid: {
	                hoverable: true //IMPORTANT! this is needed for tooltip to work
	            },
	            yaxis: {
	
	            },
	            tooltip: true,
	            tooltipOpts: {
	                content: "Day %x.1: %y.4mg of " + name,
	                shifts: {
	                    x: -60,
	                    y: 25
	                }
	            }
	        };
	        
		results[currentSubstance - 1] = {data: outputArray, label: "&nbsp;" + name};
		
		this.plotObj = $.plot($("#flot-line-chart"), results ,
	            options);
	    }
	});
}*/

//----------------------------------------------------------------------
function graph(){

	currentSubstance = parseInt($('#currentSubstance').text());

	// Flot Line Chart with Tooltips
	$(document).ready(function() {
	    console.log("document ready");
	    var offset = 0;
	    plot();
	
	    function plot() {
	
	        var options = {
	            series: {
	                lines: {
	                    show: true
	                },
	                points: {
	                    show: true
	                }
	            },
	            grid: {
	                hoverable: true //IMPORTANT! this is needed for tooltip to work
	            },
	            yaxis: {
	
	            },
	            tooltip: true,
	            tooltipOpts: {
	                content: "Day %x.1: %y.4mg of " + name,
	                shifts: {
	                    x: -60,
	                    y: 25
	                }
	            }
	        };
	        
	        if(outputArray != ""){
			results[currentSubstance - 1] = {data: outputArray, label: "&nbsp;" + name};
		}else{
			results[currentSubstance - 1] = {};
		}
		
		this.plotObj = $.plot($("#flot-line-chart"), results ,
	            options);
	    }
	});
}
//----------------------------------------------------------------------




var numSubstances = "";
var currentSubstance = "";

$("body").on("click", "#next", function(){
	numSubstances = $('#numSub').val();
	currentSubstance = $('#currentSubstance').text();

	for(var i = 1; i < numSubstances; i++){
	
		if(currentSubstance == i && currentSubstance < numSub){
			
			$('#currentSubstance').text(i + 1);
			
			if(substanceArray[i] == undefined){
			
				$('#cycleLength').val("");
				$('#initDose').val("");
				$('#repDoseAmt').val("");
				$('#repDoseFrq').val("");
				
				$('#typeSelect').val("---");
				$('#substanceSelect').html("<option>---</option>");
			}else{
				$('#typeSelect').val(substanceArray[i].type);
				
				$('#substanceSelect').html("<option>---</option>");
			
				$(roidArray).each(function(index, roid){
					
					if(roid.type == $("#typeSelect").val()){
						substanceOption = $("<option>").html(roid.substance).attr("hl", roid.hl);
						
						$('#substanceSelect').append(substanceOption);
					}
				});
				
				
				
				$('#substanceSelect').val(substanceArray[i].name);
				$('#cycleLength').val(substanceArray[i].cycleLength);
				$('#initDose').val(substanceArray[i].initDose);
				$('#repDoseAmt').val(substanceArray[i].repDoseAmt);
				$('#repDoseFrq').val(substanceArray[i].repDoseFrq);
			}
		}
	}

}).trigger( "click" );


$("body").on("click", "#prev", function(){

	numSubstances = $('#numSub').val();
	currentSubstance = $('#currentSubstance').text();

	for(var i = 1; i < numSubstances + 1; i++){
	
		if(currentSubstance == i && currentSubstance > 1){
			
			$('#currentSubstance').text(i - 1);
			
			if(substanceArray[i - 2] == undefined){
			
				$('#cycleLength').val("");
				$('#initDose').val("");
				$('#repDoseAmt').val("");
				$('#repDoseFrq').val("");
				
				$('#typeSelect').val("---");
				$('#substanceSelect').html("<option>---</option>");
			}else{
				$('#typeSelect').val(substanceArray[i - 2].type);
				
				
				
				
				$('#substanceSelect').html("<option>---</option>");
			
				$(roidArray).each(function(index, roid){
					
					if(roid.type == $("#typeSelect").val()){
						substanceOption = $("<option>").html(roid.substance).attr("hl", roid.hl);
						
						$('#substanceSelect').append(substanceOption);
					}
				});

				$('#substanceSelect').val(substanceArray[i - 2].name);
				$('#cycleLength').val(substanceArray[i - 2].cycleLength);
				$('#initDose').val(substanceArray[i - 2].initDose);
				$('#repDoseAmt').val(substanceArray[i - 2].repDoseAmt);
				$('#repDoseFrq').val(substanceArray[i - 2].repDoseFrq);
			}
		}
	}

}).trigger( "click" );










$("body").on("click", "#remove", function(){

	currentSubstance = $('#currentSubstance').text();
	numSubstances = $('#numSub').val();
	
	for(var i = 1; i < (parseInt(numSubstances) + 1); i++){
		console.log(i);
		if(currentSubstance == i){
		
			var index = i-1;
			
			substanceArray[i-1].type = "---";
			substanceArray[i-1].name = "---";
			substanceArray[i-1].cycleLength = "";
			substanceArray[i-1].initDose = "";
			substanceArray[i-1].repDoseAmt = "";
			substanceArray[i-1].repDoseFrq = "";
			substanceArray[i-1].hl = "";
		 	if(substanceArray[i-1].hl.indexOf("h") > -1){
		 	
		 		substanceArray[i-1].hl = "";
		 		substanceArray[i-1].hl = "";
		 	
		 	}
			
			//results = results.slice(i-1);
			console.log(results);
			outputArray = "";
			graph();
			
			
			var deleteTable = $('#table .col-md-4').eq(i - 1);
			deleteTable.remove();
			
			
			//------------------------------clear
			$('#cycleLength').val("");
			$('#initDose').val("");
			$('#repDoseAmt').val("");
			$('#repDoseFrq').val("");
			
			$('#typeSelect').val("---");
			$('#substanceSelect').html("<option>---</option>");
			//------------------------------clear
		}
		
		
		}
		
}).trigger( "click" );



$("body").on("change", "#numSub", function(){

	if($('#numSub').val() == 1){
		$('#currentSubstance').text("1");
	}
	
	if($('#numSub').val() == 2){
		if($('#currentSubstance').text() == 3){
			$('#currentSubstance').text("2");
		}
	}

}).trigger( "change" );