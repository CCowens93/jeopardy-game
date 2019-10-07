function add100(i)
                {
                var score = document.getElementById("p").textContent
                for(let i=1; i < 101; i++)
                score ++
                document.getElementById("p").innerHTML = score
                }
            
 function add200(i)
                {
                var score = document.getElementById("p").textContent
                for(let i= 1; i < 201; i++)        
                score ++ 
                document.getElementById("p").innerHTML = score
                }
                
function add300(i)
                {
                var score = document.getElementById("p").textContent
                for(let i =1; i < 301; i++)
                score++
                document.getElementById("p").innerHTML = score
                }
function add400(i)
                {
                var score = document.getElementById("p").textContent
                for (let i =1; i < 401; i++)
                score++
                document.getElementById("p").innerHTML = score
                }
function setVisibility(id, visibility) {
                document.getElementById(id).style.display = visibility;
                    }
                    


let score = 0
if(score >=2000){
    console.log('You win!')
}


                   

let myQuestions = [
    {
        question: ["Which of these is a good luck potion?"],
        answerA: ["Amortentia"] ,
        answerB: ["Felix Felicis"],
        answerC: ["Polyjuice Potion"], 
        answerD: ["Veritaserum"]
    },

    
    {   question: ["Who invented the Elixir of Life?"],
        answerA: ["Nicolas Flamel"],
        answerB: ["Gellert GrindelWald"],
        answerC: ["Albus Dumbledore"],
        answerD: ["Newt Scamander"]
        
    },
    {
        question: ["Which of the following is not an ingredient in the Polyjuice Potion?"],
        answerA: ["Knotgrass"],
        answerB: ["Lacewing Flies"],
        answerC: ["Sneezewort"],
        answerD: ["Fluxweed"]
   },
   {
        question: ["What potion is created by mixing powdered root of asphodel to an infusion of wormwood?"],
        answerA: ["Draught of Peace"],
        answerB: ["Draught of Living Death"],
        answerC: ["Invigoration Draught"],
        answerD: ["Strengthening Solution"]
    },
    {   
        question: ["Which Hogwarts house did Moaning Myrtle belond in?"],
        answerA: ["Gryffindor"],
        answerB: ["Slytherin"],
        answerC: ["Ravenclaw"],
        answerD: ["Hufflepuff"]
    },
    {   
        question: ["Which floor was forbidden to students on Harry Potter's first year?"],
        answerA: ["fourth"],
        answerB: ["first"],
        answerC: ["seventh"],
        answerD: ["second"]
    },
    {   
        question: ["Which magical creature is not native to the Forbidden Forest?"],
        answerA: ["Acromantula"],
        answerB: ["Centaur"],
        answerC: ["Thunderbird"],
        answerD: ["Unicorn"]
    },
    {   
        question: ["Which fruit do you tickle to get into the Hogwarts kitchens?"],
        answerA: ["Pear"],
        answerB: ["Peach"],
        answerC: ["Apple"],
        answerD: ["Grapes"]
    },
    {   
        question: ["What is Harry Potter's patronus?"],
        answerA: ["Doe"],
        answerB: ["Stag"],
        answerC: ["Otter"],
        answerD: ["Phoenix"]
    },
    {     
        question: ["Which of these is a summoning spell?"],
        answerA: ["Accio"],
        answerB: ["Stupefy"],
        answerC: ["Aguamenti"],
        answerD: ["confundo"]
        
    },
    {   
        question: ["Which of these is not an Unforgivable Curse?"],
        answerA: ["Imperius Curse"],
        answerB: ["Cruciatus Curse"],
        answerC: ["The Killing Curse"],
        answerD: ["Flagrante Curse"]
    },
    {   
        question: ["What does Antonin Dolohov's curse achieve?"],
        answerA: ["Gives the recipient to get a strong cold"],
        answerB: ["Causes things to explode"],
        answerC: ["Causes a streak of purple flame to hit the target"],
        answerD: ["Makes the target's ears shrivel up"]
    },
    {   
        question: ["Which class did Snape always want to teach?"],
        answerA: ["Defence Against The Dark Arts"],
        answerB: ["Potions"],
        answerC: ["Charms"],
        answerD: ["transfiguration"]
    },
    {   
        question: ["What is the name of the oldest Weasley sibling?"],
        answerA: ["Ron"],
        answerB: ["Charlie"],
        answerC: ["Percy"],
        answerD: ["Bill"]
    },
    {   
        question: ["Who does Ron impersonate to sneak into the Ministry of Magic?"],
        answerA: ["Dirk Cresswell"],
        answerB: ["Reginald Cattermole"],
        answerC: ["John Dawlish"],
        answerD: ["Lucius Malfoy"]
    },
    {   
        question: ["Which Marauder became a Death Eater?"],
        answerA: ["Sirius Black"],
        answerB: ["James Potter"],
        answerC: ["Remus Lupin"],
        answerD: ["Peter Pettigrew"]
    },
]

const CategoryOne100Points = myQuestions[0];
document.getElementById('Q-S').innerHTML = myQuestions[0].question
document.getElementById('answer-1').innerHTML = myQuestions[0].answerA
document.getElementById('answer-2').innerHTML = myQuestions[0].answerB
document.getElementById('answer-3').innerHTML = myQuestions[0].answerC
document.getElementById('answer-4').innerHTML = myQuestions[0].answerD
let QuestionOne = document.getElementById('Q1');{
    QuestionOne.addEventListener('click', () =>{
        document.getElementById('Q-C').className ="show"
    });
}        
const CategoryOne200Points = myQuestions[1];
document.getElementById('Q-S2').innerHtml = myQuestions[1].question
document.getElementById('answer-1-2').innerHTML = myQuestions[1].answerA[0]
document.getElementById('answer-2-2').innerHTML = myQuestions[1].answerB[0]
document.getElementById('answer-3-2').innerHTML = myQuestions[1].answerC[0]
document.getElementById('answer-4-2').innerHTML = myQuestions[1].answerD[0]
let QuestionTwo = document.getElementById('Q2');{
    QuestionTwo.addEventListener('click', () =>{
        document.getElementById('Q-C2').className ="show"
  })
}   
const CategoryOne300Points = myQuestions[2];
document.getElementById('Q-S3').innerHtml = myQuestions[2].question
document.getElementById('answer-1-3').innerHTML = myQuestions[2].answerA[0]
document.getElementById('answer-2-3').innerHTML = myQuestions[2].answerB[0]
document.getElementById('answer-3-3').innerHTML = myQuestions[2].answerC[0]
document.getElementById('answer-4-3').innerHTML = myQuestions[2].answerD[0]
let QuestionThree = document.getElementById('Q3');{
    QuestionThree.addEventListener('click', () =>{
        document.getElementById('Q-C3').className ="show"
  })
} 
const CategoryOne400Points = myQuestions[3];
document.getElementById('Q-S4').innerHtml = myQuestions[3].question
document.getElementById('answer-1-4').innerHTML = myQuestions[3].answerA[0]
document.getElementById('answer-2-4').innerHTML = myQuestions[3].answerB[0]
document.getElementById('answer-3-4').innerHTML = myQuestions[3].answerC[0]
document.getElementById('answer-4-4').innerHTML = myQuestions[3].answerD[0]
let QuestionFour = document.getElementById('Q4');{
    QuestionFour.addEventListener('click', () =>{
        document.getElementById('Q-C4').className ="show"
  })
}   
const CategoryTwo100Points = myQuestions[4];
document.getElementById('Q-S5').innerHtml = myQuestions[4].question
document.getElementById('answer-1-5').innerHTML = myQuestions[4].answerA[0]
document.getElementById('answer-2-5').innerHTML = myQuestions[4].answerB[0]
document.getElementById('answer-3-5').innerHTML = myQuestions[4].answerC[0]
document.getElementById('answer-4-5').innerHTML = myQuestions[4].answerD[0]
let QuestionFive = document.getElementById('Q5');{
    QuestionFive.addEventListener('click', () =>{
        document.getElementById('Q-C5').className ="show"
  })
}   
const CategoryTwo200Points = myQuestions[5];
document.getElementById('Q-S6').innerHtml = myQuestions[5].question
document.getElementById('answer-1-6').innerHTML = myQuestions[5].answerA[0]
document.getElementById('answer-2-6').innerHTML = myQuestions[5].answerB[0]
document.getElementById('answer-3-6').innerHTML = myQuestions[5].answerC[0]
document.getElementById('answer-4-6').innerHTML = myQuestions[5].answerD[0]
let QuestionSix = document.getElementById('Q6');{
    QuestionSix.addEventListener('click', () =>{
        document.getElementById('Q-C6').className ="show"
  })
} 
const CategoryTwo300Points = myQuestions[6];
document.getElementById('Q-S7').innerHtml = myQuestions[6].question
document.getElementById('answer-1-7').innerHTML = myQuestions[6].answerA[0]
document.getElementById('answer-2-7').innerHTML = myQuestions[6].answerB[0]
document.getElementById('answer-3-7').innerHTML = myQuestions[6].answerC[0]
document.getElementById('answer-4-7').innerHTML = myQuestions[6].answerD[0]
let QuestionSeven = document.getElementById('Q7');{
    QuestionSeven.addEventListener('click', () =>{
        document.getElementById('Q-C7').className ="show"
  })
} 
const CategoryTwo400Points = myQuestions[7];
document.getElementById('Q-S8').innerHtml = myQuestions[7].question
document.getElementById('answer-1-8').innerHTML = myQuestions[7].answerA[0]
document.getElementById('answer-2-8').innerHTML = myQuestions[7].answerB[0]
document.getElementById('answer-3-8').innerHTML = myQuestions[7].answerC[0]
document.getElementById('answer-4-8').innerHTML = myQuestions[7].answerD[0]
let QuestionEight = document.getElementById('Q8');{
    QuestionEight.addEventListener('click', () =>{
        document.getElementById('Q-C8').className ="show"
  })
} 
const CategoryThree100Points = myQuestions[8];
document.getElementById('Q-S9').innerHtml = myQuestions[8].question
document.getElementById('answer-1-9').innerHTML = myQuestions[8].answerA[0]
document.getElementById('answer-2-9').innerHTML = myQuestions[8].answerB[0]
document.getElementById('answer-3-9').innerHTML = myQuestions[8].answerC[0]
document.getElementById('answer-4-9').innerHTML = myQuestions[8].answerD[0]
let QuestionNine = document.getElementById('Q9');{
    QuestionNine.addEventListener('click', () =>{
        document.getElementById('Q-C9').className ="show"
  })
} 
const CategoryThree200Points = myQuestions[9];
document.getElementById('Q-S10').innerHtml = myQuestions[9].question
document.getElementById('answer-1-10').innerHTML = myQuestions[9].answerA[0]
document.getElementById('answer-2-10').innerHTML = myQuestions[9].answerB[0]
document.getElementById('answer-3-10').innerHTML = myQuestions[9].answerC[0]
document.getElementById('answer-4-10').innerHTML = myQuestions[9].answerD[0]
let QuestionTen = document.getElementById('Q9');{
    QuestionTen.addEventListener('click', () =>{
        document.getElementById('Q-C9').className ="show"
  })
} 
const CategoryThree300Points = myQuestions[10];
document.getElementById('Q-S11').innerHtml = myQuestions[10].question
document.getElementById('answer-1-11').innerHTML = myQuestions[10].answerA[0]
document.getElementById('answer-2-11').innerHTML = myQuestions[10].answerB[0]
document.getElementById('answer-3-11').innerHTML = myQuestions[10].answerC[0]
document.getElementById('answer-4-11').innerHTML = myQuestions[10].answerD[0]
let QuestionEleven = document.getElementById('Q10');{
    QuestionEleven.addEventListener('click', () =>{
        document.getElementById('Q-C10').className ="show"
  })
} 
const CategoryThree400Points = myQuestions[11];
document.getElementById('Q-S12').innerHtml = myQuestions[11].question
document.getElementById('answer-1-12').innerHTML = myQuestions[11].answerA[0]
document.getElementById('answer-2-12').innerHTML = myQuestions[11].answerB[0]
document.getElementById('answer-3-12').innerHTML = myQuestions[11].answerC[0]
document.getElementById('answer-4-12').innerHTML = myQuestions[11].answerD[0]
let QuestionTwelve = document.getElementById('Q12');{
    QuestionTwelve.addEventListener('click', () =>{
        document.getElementById('Q-C12').className ="show"
  })
} 
const CategoryFour100Points = myQuestions[12];
document.getElementById('Q-S13').innerHtml = myQuestions[12].question
document.getElementById('answer-1-13').innerHTML = myQuestions[12].answerA[0]
document.getElementById('answer-2-13').innerHTML = myQuestions[12].answerB[0]
document.getElementById('answer-3-13').innerHTML = myQuestions[12].answerC[0]
document.getElementById('answer-4-13').innerHTML = myQuestions[12].answerD[0]
let QuestionThirteen = document.getElementById('Q13');{
    QuestionThirteen.addEventListener('click', () =>{
        document.getElementById('Q-C13').className ="show"
  })
} 
const CategoryFour200Points = myQuestions[13];
document.getElementById('Q-S14').innerHtml = myQuestions[13].question
document.getElementById('answer-1-14').innerHTML = myQuestions[13].answerA[0]
document.getElementById('answer-2-14').innerHTML = myQuestions[13].answerB[0]
document.getElementById('answer-3-14').innerHTML = myQuestions[13].answerC[0]
document.getElementById('answer-4-14').innerHTML = myQuestions[13].answerD[0]
let QuestionFourteen = document.getElementById('Q14');{
    QuestionFourteen.addEventListener('click', () =>{
        document.getElementById('Q-C14').className ="show"
  })
} 
const CategoryFour300Points = myQuestions[14];
document.getElementById('Q-S15').innerHtml = myQuestions[14].question
document.getElementById('answer-1-15').innerHTML = myQuestions[14].answerA[0]
document.getElementById('answer-2-15').innerHTML = myQuestions[14].answerB[0]
document.getElementById('answer-3-15').innerHTML = myQuestions[14].answerC[0]
document.getElementById('answer-4-15').innerHTML = myQuestions[14].answerD[0]
let QuestionFifteen = document.getElementById('Q15');{
    QuestionFifteen.addEventListener('click', () =>{
        document.getElementById('Q-C15').className ="show"
  })
} 
const CategoryFour400Points = myQuestions[15];
document.getElementById('Q-S5').innerHtml = myQuestions[15].question
document.getElementById('answer-1-16').innerHTML = myQuestions[15].answerA[0]
document.getElementById('answer-2-16').innerHTML = myQuestions[15].answerB[0]
document.getElementById('answer-3-16').innerHTML = myQuestions[15].answerC[0]
document.getElementById('answer-4-16').innerHTML = myQuestions[15].answerD[0]
let QuestionSixteen = document.getElementById('Q16');{
    QuestionSixteen.addEventListener('click', () =>{
        document.getElementById('Q-C16').className ="show"
  })
}


