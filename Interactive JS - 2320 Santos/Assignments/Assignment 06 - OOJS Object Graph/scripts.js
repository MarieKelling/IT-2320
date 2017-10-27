Cast = {};
Cast.Character = {};

Cast.Character = function(FirstName, LastName, Profession)  
{
	this.FirstName = FirstName;	
	this.LastName = LastName;
	this.Profession = Profession;
} 

Cast.Character.prototype.GetCharacterInfo = function()
{
	return this.FirstName + " " + this.LastName + " " + this.Profession + "<br>";
}

Cast.Ted = new Cast.Character("Ted", "Mosby", " -- The Architect");
Cast.Marshall = new Cast.Character("Marshall", "Eriksen", " -- The Lawyer");
Cast.Lily = new Cast.Character("Lily", "Aldrin", " -- The Teacher");
Cast.Barney = new Cast.Character("Barney", "Stinson", " -- The guy who Provides Legal Exculpation And Signs Everything (P.L.E.A.S.E.)");
Cast.Robin = new Cast.Character("Robin", "Scherbatsky", " -- The Metro News One Reporter");  


document.write(Cast.Ted.GetCharacterInfo());
document.write(Cast.Marshall.GetCharacterInfo());
document.write(Cast.Lily.GetCharacterInfo());
document.write(Cast.Barney.GetCharacterInfo());
document.write(Cast.Robin.GetCharacterInfo());    