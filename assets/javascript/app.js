
	var trivaQuestions = $('#question'); 
	var win = 0; 
	var loss = 0; 
	var countDown = {
		timer, // at 05:00


		// set timer for five minutes, display as 00:00
		start: function() {
			timerStart = setInterval(countDown.down, 60000 * 5); 
			$('#timer').html('00:00');
		},

		// timer function to start at 5 minutes and count down
		// make math function call to display minutes and seconds
		// display this all in timer div in html
		down: function() {
			countDown.timer--;
			var changeTime = countDown.timeChanger(countDown.timer);
			$('#timer').html(countDown.timer);
		},

		// math stuff for minutes and seconds 
		timeChanger: function(p) {
			var minute = Math.floor(p/60); 
			var second = p - (minute * 60); 
			if (second < 10) {
				second = "0" + second; 
			} else if (minute === 0) {
				minute = "0" + minute; 
			} return minute + ":" + second; 
		},
	
		// if the countDown == 0, answerChoices div will display score
		zeroTime: function() {
			if (countDown.timer == 0) {
				$('#answerChoice').text("Wins:" + " " + win + " " + "Losses:" + " " + loss);
		}}
	};

	// on.click > start timer 
	$('#start').on('click', start);

	// when done button is clicked, display scoreboard 
	$('#done').on('click', countDown.zeroTime) 

	

	

	var questions = [
		{
			question: "Where is the Great Pyramid of Giza located?",
			answerChoices : ["Denmark", "Egpyt", "United States of America", "Kazakhstan"],
			correctAnswer : "Egpyt"
		},
		{
			question : "What present day country was the Hanging Garden Gardens of Babylon thought to have been built?",
			answerChoices : ["Ireland", "Samolia", "Jamaica", "Iraq"],
			correctAnswer : "Iraq"
		},
		{
			question : "Where was The Colossus titan-god of the sun Helios erected?", 
			answerChoices : ["Turkey", "Canada", "Greek Island of Rhodes", "China"],
			correctAnswer : "Greek Island of Rhodes"	
		}, 
		{
			question : "Where was the Lighthouse of Alexandria built?",
			answerChoices : ["Egpyt", "Japan", "Greece", "Portugal"],
			correctAnswer : "Egpyt"
		},
		{
			question : "What present day country was the Temple of Artemis built?",
			answerChoices : ["Libya", "Turkey", "Georgia", "Cyprus"],
			correctAnswer : "Turkey"
		}, 
		{
			question : "Where was the statue of Zeus erected?", 
			answerChoices : ["Italy", "Croatia", "Greece", "Austria"], 
			correctAnswer : "Greece"
		},
		{	question : "What present day country was the Mausoleum at Halicarnassus built?",
			answerChoices : ["Mexico", "Bulgaria", "Belgium", "Turkey"],
			correctAnswer : "Turkey"
		},
	]

/*	$('#start').on('click', function(){
		// start timer
		// var countDown = $('#start').setTimeout()
		// loop through the array with questions/choices 
		for(var i = 1; i < questions.question; i++) {
			for(var j = 1; j <questions.answerChoices; i++)
				console.log(questions.answerChoices[j]);
		};
			console.log(questions.question[i]);
				});
*/

	// on.click > loop through array to display questions and answer set

	// if radioButtonSelected = questions.correctAnswer > win++, else loss++ 


