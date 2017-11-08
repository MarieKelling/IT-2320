window.onload = function() 
{
	
	document.getElementById("button").onclick = function ()
	{ 
		this.innerHTML = "Thank You!" ; 
	}
	
	document.getElementById("table").onclick = function ()
	{
		this.style.border = "3px solid yellow"; 
	}
	
	for (var i = 1; i<=3; i++)
	{
		var id = "blog-item" + i; 
		document.getElementById(id).onmouseover = function ()
		{
			this.className = "upsize";   
		}
	}
	
	for (var i = 1; i<=3; i++)
	{
		var id = "blog-item" + i; 
		document.getElementById(id).onmouseout = function ()
		{
			this.className = "";   
		}
	}
	
	for (var i = 1; i<=4; i++)
	{
		var id = "nav-item" + i;
		document.getElementById(id).onmouseover = function ()
		{
			this.className = "emphasize";   
		}
	}
	
	for (var i = 1; i<=4; i++) 
	{
		var id = "nav-item" +i;
		document.getElementById(id).onmouseout = function ()
		{
			this.className = "";    
		} 
	}
	
} 






	
	


