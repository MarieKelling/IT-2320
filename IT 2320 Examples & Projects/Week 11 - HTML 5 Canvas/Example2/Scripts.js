var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');
Main.StandardColor = "#999999";
Main.HighlightColor = "#FF0000";
Main.MousePressed = false;
Main.MX = 0;
Main.MY = 0;

Main.Box = function(x, y, w, h)	//creates a class called box, to instanitate objects of type box 
{														//Every box has an x & y cooridnate, width, & a height
	this.X = x;								//Takes constructor params & sets member variables
	this.Y = y;
	this.Width = w;
	this.Height = h;

	this.IsSelected = function()						//Instance method
	{
		if (!Main.MousePressed) return false;	//If mouse isn't pressed - false
		var withinXAxisCoordinates = Main.MX > this.X && Main.MX < (this.X + this.Width);		//Checks to make sure mouse is inside box horizontally
		var withinYAxisCoordinates = Main.MY > this.Y && Main.MY < (this.Y + this.Height);		//Checks to make sure mouse is inside box verticallly 
		return withinXAxisCoordinates && withinYAxisCoordinates;										//Returns true if inside the box 
	}
}

Main.Boxes = [								//Creates an array of boxes - each w/ a dif x,y cooridnate & size 
	new Main.Box(10, 10, 75, 75),
	new Main.Box(150, 100, 150, 150),
	new Main.Box(300, 300, 250, 250)
];

Main.Canvas.onmousemove = function(event)		//Keeps track of the x,y cooridnate of where the mouse is on the screen 
{
	if (event.offsetX)
	{
		mouseX = event.offsetX;
		mouseY = event.offsetY;
	}
	else if (event.layerX)
	{
		mouseX = event.layerX;
		mouseY = event.layerY;
	}

	Main.MX = mouseX;
	Main.MY = mouseY;
}

Main.MouseUp = function(mouseEvent)
{
	Main.MousePressed = false;
}

Main.MouseDown = function(mouseEvent)
{
	Main.MousePressed = true;
}

Main.Animate = function()
{
	Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);

	for (var i=0; i<Main.Boxes.length; i++)
	{
		var box = Main.Boxes[i];
		Main.Context.fillStyle = box.IsSelected() ? Main.HighlightColor : Main.StandardColor;
		Main.Context.fillRect(box.X, box.Y, box.Width, box.Height);
	}

	requestAnimFrame(function() { Main.Animate(); });
}

window.requestAnimFrame = (function(callback)
{
	return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(document).ready(function()
{
	Main.Animate();
	Main.Canvas.addEventListener('mouseup', function(mouseEvent) { Main.MouseUp(mouseEvent); });			//When mouse is released, 'MouseUp' function executes 
	Main.Canvas.addEventListener('mousedown', function(mouseEvent) { Main.MouseDown(mouseEvent); }); //When mouse is pressed, 'MouseDown' function executes
});