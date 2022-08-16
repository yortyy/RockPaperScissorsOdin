/*

*/



function getComputerChoice() {
    let randomnumber = Math.floor(Math.random() * 3);
    let computerchoice;

    if(randomnumber == 0)
    {
        computerchoice = "Rock";
    }
    else if(randomnumber == 1)
    {
        computerchoice = "Paper";
    }
    else if(randomnumber = 2)
    {
        computerchoice = "Scissors";
    }
    return computerchoice
}

function getPlayerSelection() {
    const playernumber = prompt("Type in a number to choose Rock [1], Paper [2] or Scissors [3]:");
    let playerchoice;
    if(playernumber == 1)
    {
        playerchoice = "Rock";
    }
    else if(playernumber == 2)
    {
        playerchoice = "Paper";
    }
    else if(playernumber == 3)
    {
        playerchoice = "Scissors";
    }
    else
    {
        playerchoice = "inputerror";
    }
    return playerchoice
}

function rpsround(playerin) {
    let computerin = getComputerChoice();
    console.log("The computer selected " + computerin + ".")
    let result;
    if(computerin == playerin)
    {
        result = "Draw!";
    }
    else if(playerin == "Rock" && computerin == "Scissors")
    {
        result = "You win!"
        playerwins += 1;
    }
    else if(playerin == "Paper" && computerin == "Rock")
    {
        result = "You win!"
        playerwins += 1;
    }
    else if(playerin == "Scissors" && computerin == "Paper")
    {
        result = "You win!"
        playerwins += 1;
    }
    else
    {
        result = "You lose..."
        computerwins += 1;
    }
    return result
}

let playerwins = 0;
let computerwins = 0;
let playerchoicereal;

while ((playerwins < 2 && computerwins < 2) || (playerwins == computerwins))
{
    playerchoicereal = getPlayerSelection();

    while (playerchoicereal == "inputerror")
    {
        console.log("playerinputerror, redoing selection.");
        playerchoicereal = getPlayerSelection();
    }
    
    console.log("You selected " + playerchoicereal + ".")
    console.log(rpsround(playerchoicereal));
    console.log("W " + playerwins + " / L " + computerwins);
    console.log("-------------------")
}

if(computerwins < playerwins)
{
    console.log("You win the match!");
}
else if(computerwins > playerwins)
{
    console.log("You lose the match...");
}
else
{
    console.log("error");
}