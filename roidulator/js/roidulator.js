var typeArray = [];
var roidArray = [];
var typeOption = "";
var substanceOption = "";









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

}); //end ready









$("body").on("change", "#typeSelect", function(){

	$('#substanceSelect').html("<option>Select Substance</option>");

	$(roidArray).each(function(index, roid){
		
		if(roid.type == $("#typeSelect").val()){
			substanceOption = $("<option>").html(roid.substance).attr("hl", roid.hl);
			
			$('#substanceSelect').append(substanceOption);
		}
		
	});

}).trigger( "change" );







var substance = "";
var mg = "";
var table = "";

var tableData = "";
var day = "";
var remaining = 0.00;
hl = 0.00;

$("body").on("click", "#roidulate", function(){

	substance = $('#substanceSelect').val();
	mg = $('#mgSlider').val();
	
	output = "<h2>After one <b>" + mg + "mg</b> dose of <b>" + substance + "</b>, the following amounts will remain in your body for the next week:</h2>";

	$('#output').html(output);
	
	
	table = '<div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">Roidulation</h3></div><div class="panel-body"><table id="" class="table"><thread><tr><th>Days After Taking</th><th>Remaining Quantity</th></tr></thread><tbody id="tableData"></tbody></table></div></div>';
	
	$('#table').html(table);
	
	
 	hl = $('option:selected', '#substanceSelect').attr('hl');
 	if(hl.indexOf("h") > -1){
 	
 		hl = parseFloat(hl);
 		hl = hl/24;
 	
 	}
 	
 	hl = parseFloat(hl);
 	
 	
	for(day = 0; day < 8; day++){
	
		remaining = mg * Math.pow(.5, day/hl);
		
		tableData = "<tr><td>" + day + "</td><td>" + remaining.toFixed(2) + "mg</td></tr>";
		$('#tableData').append(tableData);
	}

}).trigger( "click" );


function helpButton() {
    alert("Jk, figure it out");
}