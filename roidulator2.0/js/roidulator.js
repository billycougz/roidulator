var typeArray = [];
var roidArray = [];
var typeOption = "";
var substanceOption = "";

var inputHeight = "";
var outputHeight = "";



var outputHeightBefore = "";


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
	outputHeightBefore = $('#output').height();
	
	
	$('#flot-line-chart').height("30px");
	
	$("#waiting").Loadingdotdotdot({
	    "speed": 400,
	    "maxDots": 4,
	    "word": "Waiting for Roidulator Input"
	});

}); //end ready










$("body").on("change", "#typeSelect", function(){

	$('#substanceSelect').html("<option>---</option>");

	$(roidArray).each(function(index, roid){
		
		if(roid.type == $("#typeSelect").val()){
			substanceOption = $("<option>").html(roid.substance).attr("hl", roid.hl);
			
			$('#substanceSelect').append(substanceOption);
		}
		
	});

}).trigger( "change" );











$("body").on("mousedown", "#main", function(){
	$('#blankFieldAlert').fadeOut("slow");
}).trigger( "mousedown" );
















var table = "";
var tableData = "";
var highlight = "";

var remaining = 0.00;
var hl = 0.00;
var roidulate = "";

var day = "";
var name = "";
var type = "";
var initDose = "";
var cycleLength = "";
var repDoseAmt = "";
var repDoseFrq = "";

var outputData = [];
var outputArray = [];

var week = 0;

$("body").on("click", "#roidulate", function(){
	
	outputArray = [];
	day = "";
	type = $('#typeSelect').val();
	name = $('#substanceSelect').val();
	initDose = $('#initDose').val();
	cycleLength = $('#cycleLength').val();
	repDoseAmt = $('#repDoseAmt').val();
	repDoseFrq = $('#repDoseFrq').val();

	if(type == "---" || name == "---" || cycleLength == "" || initDose == "" || repDoseAmt == "" || repDoseFrq == ""){
		roidulate = "no";
		
     		$('#blankFieldAlert').fadeIn("slow");
      		
	}else{
		roidulate = "go";
	}
	
	if(roidulate == "go"){
	
	$('#flot-line-chart').height("400px");
	
	$('#waiting').html("");
	$('#output').height("");
	
	table1 = '<table id="" class=""><tbody id="tableData1"></tbody></table>';
	table2 = '<table id="" class=""><tbody id="tableData2"></tbody></table>';
	table3 = '<table id="" class=""><tbody id="tableData3"></tbody></table>';
	
	$('#table1').html(table1);
	$('#table2').html(table2);
	$('#table3').html(table3);
	
	
 	hl = $('option:selected', '#substanceSelect').attr('hl');
 	if(hl.indexOf("h") > -1){
 	
 		hl = parseFloat(hl);
 		hl = hl/24;
 	
 	}
 	
 	hl = parseFloat(hl);
 	repDoseAmt = parseFloat(repDoseAmt);
 	remaining = parseFloat(initDose);
 	cycleLength = parseFloat(cycleLength);
 	
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------	


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------	

 	
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------	

	for(day = 0; day < 25; day++){
	
		if(day !=0){
			remaining = remaining * Math.pow(.5, 1/hl);
		}
		
		highlight = "";
		
		if(day < cycleLength && (day) % repDoseFrq == 0 && day !=0){
			remaining = remaining + repDoseAmt;
			highlight = "highlight";
		}
		
		tableData1 = "<tr class='" + highlight + " '><td><b>Day " + (day + 1) + ": &nbsp;</b></td><td>" + remaining.toFixed(2) + "mg</td></tr>";
		$('#tableData1').append(tableData1);
		
		outputArray.push([day + 1, remaining]);
	}
	
	for(day = 25; day < 50; day++){
	
		remaining = remaining * Math.pow(.5, 1/hl);
		highlight = "";
		
		if(day < cycleLength && (day) % repDoseFrq == 0){
			remaining = remaining + repDoseAmt;
			highlight = "highlight";
		}
		
		tableData2 = "<tr class='" + highlight + " '><td><b>Day " + (day + 1) + ": &nbsp;</b></td><td>" + remaining.toFixed(2) + "mg</td></tr>";
		$('#tableData2').append(tableData2);
		
		outputArray.push([day + 1, remaining]);
	}
	
	for(day = 50; day < 75; day++){

		remaining = remaining * Math.pow(.5, 1/hl);
		highlight = "";
		
		if(day < cycleLength && (day) % repDoseFrq == 0){
			remaining = remaining + repDoseAmt;
			highlight = "highlight";
		}
		
		tableData3 = "<tr class='" + highlight + " '><td><b>Day " + (day + 1) + ": &nbsp;</b></td><td>" + remaining.toFixed(2) + "mg</td></tr>";
		$('#tableData3').append(tableData3);
		
		outputArray.push([day + 1, remaining]);
	}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------	
	
	
	var outputHeightAfter = $('#output').height();
	var heightDifference = outputHeightAfter - outputHeightBefore;
	//$('#outputChart').css('margin-top',"-" + heightDifference +'px');
	      
	      

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

	var plotObj = $.plot($("#flot-line-chart"), [{
                data: outputArray,
                label: "&nbsp;" + name
            }],
            options);
    }
});

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
	
	$('#tableData1').html("");
	$('#tableData2').html("");
	$('#tableData3').html("");
	
	$('#output').height(inputHeight);
	
	$("#waiting").Loadingdotdotdot({
	    "speed": 400,
	    "maxDots": 4,
	    "word": "Waiting for Roidulator Input"
	});
	
	
	
	$('.flot-chart').html('<div class="flot-chart-content" id="flot-line-chart"></div>');
	$('#flot-line-chart').height("30px");
	
	
	
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
























