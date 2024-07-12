const question=[
  {
      question :"which is the largest animal in the world ?",
      answers:[
         {Text:"shark",correct:false},
         {Text:"Blue whale",correct:true},
         {Text:"Elephant",correct:false},
         {text:"lion",correct:false},

      
  ]
  
},
{
  question :"which is the smallest country in the world ?",
      answers:[
         {Text:"vatican city",correct:true},
         {Text:"Bhutan",correct:false},
         {Text:"nepal",correct:false},
         {text:"sri lanka",correct:false},
      ] 
},
{
  question :"which is the largest desert in the world ?",
  answers:[
     {Text:"kalahari",correct:false},
     {Text:"gobi",correct:false},
     {Text:"sahara",correct:false},
     {text:"antartica",correct:true},
  ]
},
{
  question :"which is the smallest continent in the world ?",
  answers:[
     {Text:"Asia",correct:false},
     {Text:"Australia",correct:true},
     {Text:"Arctic",correct:false},
     {text:"Africa",correct:false},
  ]
}
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex=0;
let score = 0;
function startQuiz(){
currentQuestionIndex=0;
score=0;
nextButton.innerHTML="Next";
showQuestion();
}
function showQuestion(){
resetState();
let currentQuestion = question[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;
currentQuestion.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer.Text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if(answer.correct){
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click",selectAnswer);

});
}
function resetState(){
nextButton.style.display="none";
while(answerButtons.firstChild){
  answerButtons.removeChild(answerButtons.firstChild);
}
}
function selectAnswer(e){
const SelectedBtn = e.target;
const isCorrect = SelectedBtn.dataset.correct === "true";
if(isCorrect){
  SelectedBtn.classList.add("correct");
  score++;

}else{
  SelectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled= true;
});
nextButton.style.display ="block";
}
function showScore(){
resetState();
questionElement.innerHTML=`you scored ${score} out of ${question.length}!`;
nextButton.innerHTML ="play Again";
nextButton.style.display="block";
}
function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < question.length){
  showQuestion();
}else{
  showScore();
}
}
nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < question.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});


startQuiz();
