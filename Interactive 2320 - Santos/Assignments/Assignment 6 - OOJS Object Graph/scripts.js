Cast = {};
Cast.Character = {};

Cast.Character = function(FirstName, LastName, Age)  
{
	this.FirstName = FirstName;	
	this.LastName = LastName;
	this.Age = Age;
} 

Cast.Character.prototype.GetFullName = function()
{
	return this.FirstName + " " + this.LastName + "<br>";
}

Cast.Ted = new Cast.Character("Ted", "Mosby", 30);
Cast.Marshall = new Cast.Character("Marshall", "Eriksen", 30);
Cast.Lily = new Cast.Character("Lily", "Aldrin", 30);
Cast.Barney = new Cast.Character("Barney", "Stinson", 30);
Cast.Robin = new Cast.Character("Robin", "Scherbatsky", 30); 


document.write(Cast.Ted.GetFullName());
document.write(Cast.Marshall.GetFullName());
document.write(Cast.Lily.GetFullName());
document.write(Cast.Barney.GetFullName());
document.write(Cast.Robin.GetFullName());  