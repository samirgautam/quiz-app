let quizCollection = [
    {
        id: 1,
        question: "Who is the first president of Nepal?",
        options:["Ram Baran Yadav","Babu Ram Bhattarai","Girija Prasad Koirala","Bidhya Devi Bhandari"],
        correct: "Ram Baran Yadav"
    },
    {
        id: 2,
        question: "What is my Name?",
        options:["Samir Gautam","Sammy G","Some GG","Samir the gentle wind"],
        correct: "Samir Gautam"
    },
    {
        id: 3,
        question: "What is the capital of Nepal?",
        options:["Birgunj","Bhaktapur","Bhadrapur","Kathmandu"],
        correct: "Kathmandu"
    },
    {
        id: 4,
        question: "How cool is JS?",
        options:["cool","very cool","not cool","cool as hell"],
        correct: "very cool"
    },
    {
        id: 5,
        question: "What is the full form of HTML?",
        options:["Huge Text Markup Language","Huge Text Modular Language","Hyper Text Markup Language","Hidden Text Modular Language"],
        correct: "Hyper Text Markup Language"
    }
];
let count = 0;
const start = document.querySelector(".start");
const startBtn = document.querySelector(".start-btn");
const nextBtn = document.querySelector(".next-btn");
const quizWrapper = document.querySelector(".quiz-wrapper");
const quiz = document.querySelector(".quiz");
const options = document.querySelector(".options");
const score = document.querySelector(".score");
const restart = document.querySelector(".restart");
const restartBtn = document.querySelector(".restart-btn");

//add event listener
options.addEventListener('click',selectOption);
//if start button clicked
let i=0;
function showQuestions(){

  
    const queText = document.querySelector(".question");
    let queTag = '<p>'+ quizCollection[i].question +'</p>';
    queText.innerHTML = queTag;
    const optionText = document.querySelector(".options");
        let optionTag = '<li class="option1">'+quizCollection[i].options[0]+'</li>'
                         +'<li class="option2">'+quizCollection[i].options[1]+'</li>'
                         +'<li class="option3">'+quizCollection[i].options[2]+'</li>'
                         +'<li class="option4">'+quizCollection[i].options[3]+'</li>'
                        ;
        optionText.innerHTML = optionTag; 
        document.getElementById('welcomeText').innerHTML ="Choose the correct answer";
    nextBtn.onclick = ()=>{
        
    i++;
    if(i==4)
    {
      //nextBtn.innerHTML = "Restart"  

      nextBtn.onclick =()=>{
       
        document.getElementById('welcomeText').innerHTML ="Thank you for Playing";
        quizWrapper.classList.remove("active");
        restart.classList.add("active");
        showScore();
      //  start.classList.add("active");
      restartBtn.onclick =()=>{

        window.location.reload();
      }


        
      }
    }
    let queTag = '<p>'+ quizCollection[i].question +'</p>';
    queText.innerHTML = queTag;
    let optionTag = '<li class="option1">'+quizCollection[i].options[0]+'</li>'
    +'<li class="option2">'+quizCollection[i].options[1]+'</li>'
    +'<li class="option3">'+quizCollection[i].options[2]+'</li>'
    +'<li class="option4">'+quizCollection[i].options[3]+'</li>'
   ;
    optionText.innerHTML = optionTag; 
    quiz.classList.remove("selected");

    }
}


function selectOption(event)
{
    
   const op = event.target;

    //alert(op);
    if(op.innerHTML === quizCollection[i].correct)
    {
        count++;
        op.style.background = 'rgb(81, 128, 81)';
    }
    else{
        op.style.background = 'rgb(185, 52, 52)'
    }

quiz.classList.add("selected");
   
}
function showScore(){
    let scoreTag = '<p> Your score is '+count  +'</p>';
     score.innerHTML = scoreTag;
}

startBtn.onclick = ()=>{

    quizWrapper.classList.add("active");
    start.classList.remove("active");

    showQuestions();  
}








