var card = $("#quiz-area");
var countStartNumber = 10;
var timer;



// Questions
var friendsQuestions = [
    {
    question: "To get over Ricard, what did Monica start Making?",
    choices: ["Marmalade", "Jam", "Pancakes", "Eggs"],
    correctAnswer: "Jam",
    //image: "https://78.media.tumblr.com/e5b237794659cf0709891bd8e5c78dee/tumblr_p27u44UF0G1uxq64zo4_540.gif",
},
{
    question: "Monica couldn't tell time until she was what age?",
    choices: ["13", "14", "12", "15"],
    correctAnswer: "13",
    //image: "https://media3.giphy.com/media/zRsY49v1kmWe4/200w.gif?cid=790b7611137e4b9f12d14f390063fb68136326241d069ba3&rid=200w.gif",
},
{
    question: "What does Ross call his Thanksgiving leftover sandwhich?",
    choices: ["The Drool Maker", "Bread Heaven", "The Moist Maker", "Temptation"],
    correctAnswer: "The Moist Maker",
   // image: "https://media3.giphy.com/media/l3NzV0GXRkDGXJMPIO/200.gif?cid=790b7611d6cdfa27d8426d447bc2adfff82212bb49d3d823&rid=200.gif",
},
{
    question: "Who does Ross talk to when he couldn't get his leather pants back on?",
    choices: ["Chandler", "Phoebe", "Monica", "Joey"],
    correctAnswer: "Joey",
   // image: "https://media3.giphy.com/media/hS4AqlRdXLklFH6FjL/200.gif?cid=790b7611bf0fdf95708137a4baa18854520d3884d89386c1&rid=200.gif",
},
{
    question: "Chandler's Mother writes what kinds of novels?",
    choices: ["Fiction", "Erotic", "Mystery", "Fantasy"],
    correctAnswer: "Erotic",
   // image: "https://media2.giphy.com/media/YQHBoOpGwdTwuBSZKs/200.gif?cid=790b761111046eb783d2203071241c8bf290447aec3dee9b&rid=200.gif",
},
{
    question: "What is Phoebe's twin sister's name?",
    choices: ["Lisa", "Emily", "Dr. Phalange", "Ursula"],
    correctAnswer: "Ursula",
    //image: "https://media2.giphy.com/media/l49mvu7JWXTu6lLVid/giphy.gif?cid=790b761198b9cd3f6969478dc93e3d4e7b69a839a783eb36&rid=giphy.gif",
},
{
    question: "What does Ross call martial arts?",
    choices: ["Unagi", "Zanshin", "Self-Defense", "Nothing"],
    correctAnswer: "Unagi",
   // image: "https://media1.giphy.com/media/JOe7JxOiMg61ogl6fH/giphy.gif?cid=790b76110363610124f7b539a86061a30ae191f6aba502ad&rid=giphy.gif",
},
{
    question:"What is the name of the coffee house?",
    choices: ["Coffee Perk", "Park Perk", "Left Perk", "Central Perk"],
    correctAnswer: "Central Perk",
}];



var game = {
    questions: friendsQuestions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        game.counter--;
        $("#counter-number").text(game.counter);

        if (game.counter === 0) {
            game.timeUp();
        }
    },


loadQuestion: function() {
    timer = setInterval(game.countdown, 1000);

    Card.html("<h2" + questions [this.currentQuestion].question + "<h2");
    for(var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
        card.append("<button class='answer-button' id='button' data-name=' " + questions[this.currentQuestion].answers[i] + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }     
},

nextQuestion: function() {
    game.counter = countStartNumber;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
},

timeUp: function(){
    clearInterval(timer);
    $("#counter-number").html(game.counter);

    card.html("<h2>Oh. My. God! Time's Up!</h2>");
    card.append("<h3>Correct Answer is: " + questions[this.currentQuestion].correctAnswer);
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if(game.currentQuestion == question.length - 1) {
        setTimeout(game.results, 3 * 1000);
    }
    else {
        setTimeout(game.nextQuestion, 3 * 1000);
    }
},

results: function(){
    clearInterval(timer);
    
    card.html("<h2>All done, heres how you did!</h2>");

    $("#counter-number").text(game.counter);

    card.append("<h3>Correct Answer: " + game.correct + "</h3>");
    card.append("<h3>Incorrect Answer: " + game.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
},

clicked: function(e) {
    clearInterval(timer);
    if($(e,target).attr("data-name") == questions[this.currentQuestion].correctAnswer) {
        this.answeredCorrectly();
    }
    else {
        this.answeredIncorrectly();
    }

},

answeredIncorrectly: function() {
    game.incorrect++;

    clearInterval(timer);

    card.html("<h2>Nope!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    card.append("<img src=' " + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === this.questions.length - 1) {
        setTimeout(game.results, 3 * 1000);
    }
    else {
        setTimerout(game.nextQuestion, 3 * 1000);
    }
},

answeredCorrectly: function() {
    clearInterval(timer);

    game.correct++;

    card.html("<h2>Correct!<h2>");
    card.append("<img src='" + question[game.currectQuestion].image + "' />"); 
    
    if (game.currentQuestion === question.length - 1) {
        setTimeout(game.nextQuestion, 3 * 1000);
    }
    else {
        setTimeout(game.nextQuestion, 3 * 1000);
    }
},

reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();

}
};



$(document).on("click", "#start-over", function() {
    game.reset();
});
$(document).on("click", ".answer-button", function(e) {
    game.clicked(e);
});
$(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>10</span> Seconds</h2>");
})