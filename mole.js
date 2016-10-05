
$(function(){
	
	var roundTimeSec=60;
	var timeLimit = 60000;
	var score=0;
	var scoreDisplay = document.getElementById("score");
	var timeDisplay = document.getElementById("time");
	var $molePic = $(".molePic");
	var gameTimer;
	var moleTimer;
	var clockTimer;
	var gameInProgress = false;
	var grid = [false,false,false,
				false,false,false,
				false,false,false];
	var timers = [];
				
	var moles = ["#mole0","#mole1","#mole2",
				"#mole3","#mole4","#mole5",
				"#mole6","#mole7","#mole8"];
	
	timeDisplay.innerHTML = roundTimeSec;
				
	$("#submitTime").click(function(){
		roundTimeSec = document.getElementById("userTime").value;
		timeDisplay.innerHTML = roundTimeSec;
		
		
	});
				
	$("#startButton").click(function(){		
	
		if(gameTimer){
			clearTimeout(gameTimer);
			clearInterval(moleTimer);
			clearInterval(clockTimer);
		}
		
		score = 0;
		scoreDisplay.innerHTML=score;		
		$molePic.hide();			
		gameInProgress = true;
		timeLimit = roundTimeSec *1000;
		//$molePic.delay(5000).show(0);	
		
		

		moleTimer = setInterval( function(){			
			var randMole = Math.floor(Math.random()*9);			
			molePopUp(randMole);
		}, 3000);
		
		gameTimer = setTimeout( function(){				
				gameInProgress = false;
				clearInterval(moleTimer);
				clearInterval(clockTimer);
				timeDisplay.innerHTML = roundTimeSec;				
				$molePic.show();
		},timeLimit+100);	
		
		
		countDown(timeLimit);
	});		
		
	$molePic.click( function(){
		if (gameInProgress){
			score++;
			scoreDisplay.innerHTML=score;
			$(this).hide();
		}
	});			

	//while(gameInProgress){	}
	
	function molePopUp(moleNum){
		var moleID = moles[moleNum];
		
		$(moleID).show();
		
		setTimeout( function(){
			if(gameInProgress){
				$(moleID).hide();
			}
			grid[moleNum] = false;
		}, 1000);
	}
	
	function countDown(milliSec){
			timeDisplay.innerHTML = (milliSec/1000);
			clockTimer = setInterval(function(){
			milliSec = milliSec - 1000;
			timeDisplay.innerHTML = (milliSec/1000);
		},1000);		
	}
	
	
})


