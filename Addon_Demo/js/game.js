var playerturn = 2;
var gamestate = 0;
var ngbutton;





//function checks for win conditions and identfies them
function checkgamewon(){
	
	//checks for each row column and diagonal
	if (document.getElementById("button1").innerHTML==document.getElementById("button2").innerHTML&&document.getElementById("button2").innerHTML==document.getElementById("button3").innerHTML)
		if(document.getElementById("button1").innerHTML!='-')return 1;
	
	if (document.getElementById("button1").innerHTML==document.getElementById("button5").innerHTML&&document.getElementById("button5").innerHTML==document.getElementById("button9").innerHTML)
		if(document.getElementById("button1").innerHTML!='-')return 1;
	
	if (document.getElementById("button1").innerHTML==document.getElementById("button4").innerHTML&&document.getElementById("button4").innerHTML==document.getElementById("button7").innerHTML)
		if(document.getElementById("button1").innerHTML!='-')return 1;
	
	if (document.getElementById("button2").innerHTML==document.getElementById("button5").innerHTML&&document.getElementById("button5").innerHTML==document.getElementById("button8").innerHTML)
		if(document.getElementById("button2").innerHTML!='-')return 1;
	
	if (document.getElementById("button3").innerHTML==document.getElementById("button5").innerHTML&&document.getElementById("button5").innerHTML==document.getElementById("button7").innerHTML)
		if(document.getElementById("button3").innerHTML!='-')return 1;
	
	if (document.getElementById("button3").innerHTML==document.getElementById("button6").innerHTML&&document.getElementById("button6").innerHTML==document.getElementById("button9").innerHTML)
		if(document.getElementById("button3").innerHTML!='-')return 1;
	
	if (document.getElementById("button4").innerHTML==document.getElementById("button5").innerHTML&&document.getElementById("button5").innerHTML==document.getElementById("button6").innerHTML)
		if(document.getElementById("button5").innerHTML!='-')return 1;
	
	if (document.getElementById("button7").innerHTML==document.getElementById("button8").innerHTML&&document.getElementById("button8").innerHTML==document.getElementById("button9").innerHTML)
		if(document.getElementById("button7").innerHTML!='-')return 1;
	
	//checks for avaialable spaces
	if (document.getElementById("button1").innerHTML=='-'||document.getElementById("button2").innerHTML=='-'||document.getElementById("button3").innerHTML=='-'||document.getElementById("button4").innerHTML=='-'||document.getElementById("button5").innerHTML=='-'||document.getElementById("button6").innerHTML=='-'||document.getElementById("button7").innerHTML=='-'||document.getElementById("button8").innerHTML=='-'||document.getElementById("button9").innerHTML=='-')
		return 0;
	
	//return a cat game if no winner and no spaces free
	return 2;
	
}

//function that takes turns
function turn(num){
	
	//switch to update the correct button based on whose turn
	switch(num){
		case 1:
			if(document.getElementById("button1").innerHTML=='X'||document.getElementById("button1").innerHTML=='O')
				return 0;
			if(playerturn==0)document.getElementById("button1").innerHTML='X';
			if(playerturn==1)document.getElementById("button1").innerHTML='O';
			break;
			
		case 2:
			if(document.getElementById("button2").innerHTML=='X'||document.getElementById("button2").innerHTML=='O')
				return 0;
			if(playerturn==0)document.getElementById("button2").innerHTML='X';
			if(playerturn==1)document.getElementById("button2").innerHTML='O';
			break;
			
		case 3:
			if(document.getElementById("button3").innerHTML=='X'||document.getElementById("button3").innerHTML=='O')
				return 0;
			if(playerturn==0)document.getElementById("button3").innerHTML='X';
			if(playerturn==1)document.getElementById("button3").innerHTML='O';
			break;
			
		case 4:
			if(document.getElementById("button4").innerHTML=='X'||document.getElementById("button4").innerHTML=='O')
				return 0;
			if(playerturn==0)document.getElementById("button4").innerHTML='X';
			if(playerturn==1)document.getElementById("button4").innerHTML='O';
			break;
			
		case 5:
			if(document.getElementById("button5").innerHTML=='X'||document.getElementById("button5").innerHTML=='O')
				return 0;
			if(playerturn==0)document.getElementById("button5").innerHTML='X';
			if(playerturn==1)document.getElementById("button5").innerHTML='O';
			break;
			
		case 6:
			if(document.getElementById("button6").innerHTML=='X'||document.getElementById("button6").innerHTML=='O')
				return 0;
			if(playerturn==0)document.getElementById("button6").innerHTML='X';
			if(playerturn==1)document.getElementById("button6").innerHTML='O';
			break;
			
		case 7:
			if(document.getElementById("button7").innerHTML=='X'||document.getElementById("button7").innerHTML=='O')
				return 0;
			if(playerturn==0)document.getElementById("button7").innerHTML='X';
			if(playerturn==1)document.getElementById("button7").innerHTML='O';
			break;
			
		case 8:
			if(document.getElementById("button8").innerHTML=='X'||document.getElementById("button8").innerHTML=='O')
				return 0;
			if(playerturn==0)document.getElementById("button8").innerHTML='X';
			if(playerturn==1)document.getElementById("button8").innerHTML='O';
			break;
			
		case 9:
			if(document.getElementById("button9").innerHTML=='X'||document.getElementById("button9").innerHTML=='O')
				return 0;
			if(playerturn==0)document.getElementById("button9").innerHTML='X';
			if(playerturn==1)document.getElementById("button9").innerHTML='O';
			break;
			
	}
	//check game to see if it is won, if so start the gameover state
	var iswon=checkgamewon();
	if(iswon==1&&playerturn==0){
		document.getElementById("text").innerHTML = "You Win";
		gamestate = 1;
		gameover();
		return 3;
	}
	if(iswon==1&&playerturn==1){
		document.getElementById("text").innerHTML = "Computer Wins";
		gamestate = 1;
		gameover();
		return 3;
	}
	if(iswon==2){
		document.getElementById("text").innerHTML = "Cat Game, no winner";
		gamestate = 1;
		gameover();
		return 3;
	}
	//if the player just moved call for an ai move
	if(playerturn==0)aiMove();
	
}
//button functions call approprate turn setup
var button1Click = function(){
	if(gamestate==1) return 0;
	playerturn=0;
	turn(1);
}
var button2Click = function(){
	if(gamestate==1) return 0;
	playerturn=0;
	turn(2);
}
var button3Click = function(){
	if(gamestate==1) return 0;
	playerturn=0;
	turn(3);
}
var button4Click = function(){
	if(gamestate==1) return 0;
	playerturn=0;
	turn(4);
}
var button5Click = function(){
	if(gamestate==1) return 0;
	playerturn=0;
	turn(5);
}
var button6Click = function(){
	if(gamestate==1) return 0;
	playerturn=0;
	turn(6);
}
var button7Click = function(){
	if(gamestate==1) return 0;
	playerturn=0;
	turn(7);
}
var button8Click = function(){
	if(gamestate==1) return 0;
	playerturn=0;
	turn(8);
}
var button9Click = function(){
	if(gamestate==1) return 0;
	playerturn=0;
	turn(9);
}

// button function that calls an ai move for the first move, function never called after first turn
var compfirst = function() {
	var turnnum=0
	if(gamestate==1) return 0;
	if(turnnum>0) return 1;
	aiMove();
	
}
// resets the gamestate back to its original state when a new game is chosen
var newgame = function() {
	document.getElementById("button1").innerHTML = "-";
	document.getElementById("button2").innerHTML = "-";
	document.getElementById("button3").innerHTML = "-";
	document.getElementById("button4").innerHTML = "-";
	document.getElementById("button5").innerHTML = "-";
	document.getElementById("button6").innerHTML = "-";
	document.getElementById("button7").innerHTML = "-";
	document.getElementById("button8").innerHTML = "-";
	document.getElementById("button9").innerHTML = "-";
	playerturn = 1;
	gamestate = 0;
	ngbutton.parentNode.removeChild(ngbutton);
	document.getElementById("button10").style.display="block"
	document.getElementById("text").innerHTML = "Start playing or let the computer start";
	
}
// generates a random number and calls turn to take the ai's turn
function aiMove(){
	if(gamestate==1) return 0;
	playerturn = 1;
	while(turn(Math.floor((Math.random() * 9) + 1))==0);
	document.getElementById("button10").style.display="none"
}

// sets up the gameover state and prompts for a new game
function gameover(){
	
	ngbutton = document.createElement("button");        
	var t = document.createTextNode("Click to Start a New Game");       
	ngbutton.appendChild(t);
	ngbutton.onclick = newgame;
	document.body.appendChild(ngbutton);
	
}


document.getElementById("button1").onclick=button1Click;
document.getElementById("button2").onclick=button2Click;
document.getElementById("button3").onclick=button3Click;
document.getElementById("button4").onclick=button4Click;
document.getElementById("button5").onclick=button5Click;
document.getElementById("button6").onclick=button6Click;
document.getElementById("button7").onclick=button7Click;
document.getElementById("button8").onclick=button8Click;
document.getElementById("button9").onclick=button9Click;
document.getElementById("button10").onclick=compfirst;




