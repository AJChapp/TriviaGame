var score = 0;
var questionsAnswered=0;
var time = 10;





var timer = function(){
    if(time>-1){
        $('#timeRemaining').html(time)
        time = time-1
    }
    else{
        alert('Times Up!')
        $('.answer').prop('disabled', true)
        window.clearInterval(timerCounter)
        questionsAnswered=3;
    }
}

var answerWrong1 = function(){
    $(".wrong1").prop('disabled',true)
    $(".right1").prop('disabled',true)
    $("#headQ1").css('color' , 'red')
    questionsAnswered= questionsAnswered +1
}

var answerRight1 = function(){
    $(".wrong1").prop('disabled',true)
    $(".right1").prop('disabled',true)
    $("#headQ1").css('color' , 'green')
    score= score +5;
    questionsAnswered= questionsAnswered +1
}
var answerWrong2 = function(){
    $(".wrong2").prop('disabled',true)
    $(".right2").prop('disabled',true)
    $("#headQ2").css('color' , 'red')
    questionsAnswered= questionsAnswered +1
    
}

var answerRight2 = function(){
    $(".wrong2").prop('disabled',true)
    $(".right2").prop('disabled',true)
    $("#headQ2").css('color' , 'green')
    score= score +5
    questionsAnswered= questionsAnswered +1
}
var answerWrong3 = function(){
    $(".wrong3").prop('disabled',true)
    $(".right3").prop('disabled',true)
    $("#headQ3").css('color' , 'red')
    questionsAnswered= questionsAnswered +1
    
}

var answerRight3 = function(){
    $(".wrong3").prop('disabled',true)
    $(".right3").prop('disabled',true)
    $("#headQ3").css('color' , 'green')
    score=  score +5
    questionsAnswered= questionsAnswered +1
}

$('.wrong1').on('click', function(){
    answerWrong1();
})
$('.right1').on('click',function(){
    answerRight1();
})
$('.wrong2').on('click', function(){
    answerWrong2();
})
$('.right2').on('click',function(){
    answerRight2();
})
$('.wrong3').on('click', function(){
    answerWrong3();
})
$('.right3').on('click',function(){
    answerRight3();
})


var timerCounter = window.setInterval(timer, 1000);


$("#submit").on('click', function(){
    
    if(questionsAnswered===3){
        window.clearInterval(timerCounter)
        alert("Your Score Is: "+score);
    }
    else{
        alert("Please answer all questions")
    }
});
