$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;
    //var blackPieces = $(".black");
    //var redPieces = $(".red");
    //var checkerPiece = (".black", ".red");
    var occupiedCell = $(".piece");
    var Cell = $(".cell");
    var redCell;
    var blackCell;


    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    } 

    $(".piece").click(function ()
    {
        if (($(this).attr("class") == "cell piece red") || ($(this).attr("class") == "cell piece black")) {
            $(this).addClass("selected");
            $(this).removeClass("cell");
            $(this) = selectedCell;
        }
    }); 

    $(selectedCell), click(function ()
    {

        if ($(selectedCell).attr("class") == "cell piece red")
        {
            
            selectedCell = redCell;
            $(".cell").click(function () {
                $(this) = redCell;
            });
        }
        else {
            
            selectedCell = blackCell;
            $(".cell").click(function () {
                $(this) = blackCell;
            })
        }
    });

   




        //else if ($(this).attr("class") == "selected") 
        //{
        //    $(this).addClass("cell");
        //    $(this).removeClass("selected"); 
        //}

        //$(".highlight").click(function ()
        //{
        //    alert("Hello");
        //    $(this).addClass("cell");
        //    $(this).removeClass("highlight");
        //});

        //$(".piece").click(function ()
        //{
        //    $(this).removeClass("cell");
        //    $(this).addClass("highlight");
        //});

        //checkerPiece.click(function () {
        //    if (className == "black") {
        //        $(".black").removeClass("black");
        //        $(".black").addClass("red");
        //    }
        //    else if (className == "red") {
        //        $(".red").removeClass("red");
        //        $(".red").addClass("black");  
        //    }
        //});
        
    
}); 
