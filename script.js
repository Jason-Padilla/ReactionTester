//Gets the current time when the page is first accessed
var startTime = new Date().getTime();

function runTimeDelay()
{
    /*
        This function will wait 0 to 2 seconds before invoking the newShape function.
    */
    setTimeout(createNewShape,Math.random() * 2000)
}

//The function is called at the start of the page so the user can read the instructions and then begin
//trying to click the random shape shown
runTimeDelay();

function createNewShape()
{
    /*
        This function will edit the shape by modifyfing its Top position,
        Left position, Width, Radius percentage, and Color, Dispplay. The radius 
        percentage will change the shape from being a square to being a circle. 
        The Display has to change from its 'none'(invisible) to 'block'(visible) stage.
    */
    var randomTop = Math.floor(Math.random() * 300);
    var randomLeft = Math.floor(Math.random() * 500);
    var randomWidth = Math.floor(Math.random() * 500);
    var randomRadius = Math.floor(Math.random() * 50);

    document.getElementById("shape").style.top = randomTop + "px";
    document.getElementById("shape").style.left = randomLeft + "px";
    document.getElementById("shape").style.width  = randomWidth + "px";
    document.getElementById("shape").style.height = randomWidth + "px";
    document.getElementById("shape").style.borderRadius = randomRadius + "%";
    document.getElementById("shape").style.backgroundColor = getRandomColorCode();

    //This will make the shape appear because the display is set to non
    document.getElementById("shape").style.display = "block";
    //This will reset the timer to the new time
    startTime = new Date().getTime();
}

document.getElementById("shape").onclick = function()
{
    /*
        Thus function will be invoked when the user clicks on the shape. It will then
        make the current shape dissapear and get the time that the user clicked on it.
        It will then show the amount of time it took for the user to click on the shape
        and then create a time delay and then show a new shape.
    */
    
    var endTime = new Date().getTime();
    var amountOfTime = (endTime - startTime) / 1000;

    document.getElementById("shape").style.display = "none";
    document.getElementById("amountOfTime").innerHTML = amountOfTime + "s";
    //This will create a time delay of 0 - 2s and then call the createNewShape function
    runTimeDelay();
}

function getRandomColorCode()
{
    /*
        This function returns a random color code that will be the random color of the shape.
        It does so by splitting a string into an array of 16 indexes (0 - F) and then randomly 
        choosing one of those indexes 6 times. Ex: #A5F2EF
    */
    //The split method turns the string into an array
    var numbers_letters = '0123456789ABCDEF'.split('');
    //Color codes begin with '#' and then have 6 characters after
    var color = '#';

    for(i = 0; i < 6; i++)
    {
        //Uses the math.random method to choose a number from 0 - 15
        color+= numbers_letters[Math.floor(Math.random() * 16)];
    }
    return color
}
