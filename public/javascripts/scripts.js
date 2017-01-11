var days_of_month = undefined;

$( document ).ready(function() {

	var today = new Date();

	days_of_month = new Date(today.getFullYear(),today.getMonth()+1,0).getDate();

	today.setHours(8);
	today.setMinutes(0);

	var table = "<table>" +
					"<thead>" +
						"<tr>";

	var row = "<td></td>";
	minutes = 0;
	for(j = 0; j < 22; j++){
		var temp_hour = new Date(today.getTime() + minutes*60000);

		row += "<td> "+temp_hour.getHours()+":"+temp_hour.getMinutes()+" </td>";

		minutes = minutes + 30;
	}

	table += row;

	table += "</tr>" +
			"</thead>" +
			"<tbody>";

	var rows = "";

	for(i = 1; i <= days_of_month; i++){
		rows += "<tr>";
		rows += "<td>"+i+"</td>";
		rows += "<td><div class='portlet'>"+
        "<div class='portlet-header'>Sessao1</div>"+
        "<div class='portlet-content'>Sessão de fotos </div></div></td>";
		rows += "</tr>";
	}

	table += rows+"</tbody>"+
			"</table>";

	$("#containerdata3").append(table);

	$("#containerdata2").append(table);
});