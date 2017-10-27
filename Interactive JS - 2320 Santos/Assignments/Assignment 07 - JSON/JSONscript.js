
function createMarieAsObject() 
{

	return {
		
		"firstName" : "Marie",
		"lastName" : "Kelling", 
		"family" : 
		[ 
			{
				"firstName" : "Nate",
				"lastName" : "Kelling"
			},
			
			{
				"firstName" : "James",
				"lastName" : "Kelling"	
			},
			
			{	
				"firstName" : "Sandra",
				"lastName" : "Kelling"		
			}
				
		]
	};
	
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function()
{
	$(".button").mouseover(function()
	{
		$(this).css("border", "2px solid lime");
	});

	$(".button").mouseout(function()
	{
		$(this).css("border", "2px solid black");
	});

	$(".button1").click(function()
	{
		var marie = createMarieAsObject();
		displayFamily(marie);
	});

});  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function displayFamily(marie) 
{
	
	alert(marie.family[0].firstName);
	alert(marie.family[0].lastName); 
	alert(marie.family[1].firstName);
	alert(marie.family[1].lastName); 
	alert(marie.family[2].firstName);
	alert(marie.family[2].lastName); 
	

	//for (var i= 0; i < marie.family.length; i++)
	//{
	//	var player = team.roster[i];
	//	alert("#" + player.number + " " + player.firstName + " " + player.lastName + "."); 
	//}
		
} 




