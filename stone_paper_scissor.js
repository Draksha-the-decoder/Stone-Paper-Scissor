let name;  
play.addEventListener('click', function () {
    if (document.getElementById("play").innerHTML == "Play") {
        name = prompt("Enter your name");
        document.getElementById("players").innerHTML = name + " VS Computer";
        document.getElementById("play").innerHTML = "Start"
    }
    else if(document.getElementById("play").innerHTML == "Start"){
        let playing = true; let player_points=0; let computer_points=0;
        while (playing) {
            let playerinput = (prompt("enter stone paper or scissor")).toLowerCase();
            let computerinput = randominput();
            let result = winner(playerinput, computerinput);

            if(result == "invalid input")
            {alert("invalid input");continue;}
            else if( result == "tie")
            { alert(`computer's input is ${computerinput}....nobody wins`); }
            else if(result == "computer")
            { alert(`computer's input is ${computerinput}....winner is computer`);computer_points++;}
            else
            {alert(`computer's input is ${computerinput}....winner is ${result}`);player_points++;}

            playing = confirm("Do you want to continue playing?");
        }
        if(player_points>computer_points)
        { document.getElementById("play").innerHTML = name+" Wins " }
        else if(player_points==computer_points)
        { document.getElementById("play").innerHTML = "Nobody Wins " }
        else
        { document.getElementById("play").innerHTML =" Computer Wins " }
    }
    else{ document.getElementById("play").innerHTML ="Play" }
})
let randominput = () => {
    let computerinput = Math.floor(Math.random() * 3);
    if (computerinput == 0)
        return "stone";
    if (computerinput == 1)
        return "paper";
    if (computerinput == 2)
        return "scissor";
}
let winner = (playerinput, computerinput) => {
    if (playerinput == computerinput) { return "tie"; }
    else if (playerinput == "stone") {
        if (computerinput == "paper") { return "computer"; }
        else { return name; }
    }
    else if (playerinput == "paper") {
        if (computerinput == "scissor") { return "computer"; }
        else { return name; }
    }
    else if (playerinput == "scissor")
    {
        if (computerinput == "stone") { return "computer"; }
        else { return name; }
    }
    else{
        return "invalid input"
    }
}
