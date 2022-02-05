function mySubmitButton(){
    
    var score = 0;
    var currentAnswer1 = document.Questions.question1.value;
    var currentAnswer2 = document.Questions.question2.value;
    var currentAnswer3 = document.Questions.question3.value;
    var currentAnswer4 = document.Questions.question4.value;
    var currentAnswer5= document.Questions.question5.value;
    var results=document.getElementById("results");
   
   
    if (currentAnswer1 =="Java Script"){score+=10};
    if (currentAnswer2 =="Function"){score+=10};
    if (currentAnswer3 =="All the above"){score+=10};
    if (currentAnswer4 =="Script"){score+=10};
    if (currentAnswer5 =="\w"){score+=10};
    Questions.style.display="none";
   
   if (score==50){
       results.textContent="your score is 100%. Congratulations! You are Officially JavaScripted!!";
   }else if (score==40){
       results.textContent="your score is 80%. Keep up! You Are Getting There!";
   }else if (score==30){
       results.textContent="your score is 60%. You can do better!";
   }else if (score==20){
       results.textContent="your score is 40%. Embarassing!. Please retake the test.";
   }else if (score==10){
       results.textContent="your score is 20%. Red Alert!!. Please retake the test";
   }else {
       results.textContent="your score is 0. Did you go through the Content?!. Please revisit your notes then retake the test.";
   
   }
   
   }