let points = 0
let myQuestions = [
    {
        question: ["What is 10/2?"],
        answerA: [3, false],
        answerB: [5, true],
        answerC: [15, false], 
        answerD: [7, false]
    },

    
    {   question: ["What color is the sky?"],
        answerA: ["blue", true],
        answerB: ["green", false],
        answerC: ["red", false],
        answerD: ["purple", false]
        
    },
    {
        question: ["Which is a card game?"],
        answerA: ["monopoly",false],
        answerB: ["chess", false],
        answerC: ["solitaire", true],
        answerD: ["clue", false]
   }
]
   

const CategoryOne100Points = myQuestions[0];
document.getElementById('Q-S').innerHTML = myQuestions[0].question[0]
document.getElementById('answer-1').innerHTML = myQuestions[0].answerA[0]
document.getElementById('answer-2').innerHTML = myQuestions[0].answerB[0]
document.getElementById('answer-3').innerHTML = myQuestions[0].answerC[0]
document.getElementById('answer-4').innerHTML = myQuestions[0].answerD[0]
let QuestionOne = document.getElementById('Q1');{
    QuestionOne.addEventListener('click', () =>{
        document.getElementById('Q-C').className ="show"
  })
}


const CategoryOne200Points = myQuestions[1];
document.getElementById('Q-S2').innerHtml = myQuestions[1].question[0]
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
document.getElementById('Q-S3').innerHtml = myQuestions[2].question[0]
document.getElementById('answer-1-3').innerHTML = myQuestions[2].answerA[0]
document.getElementById('answer-2-3').innerHTML = myQuestions[2].answerB[0]
document.getElementById('answer-3-3').innerHTML = myQuestions[2].answerC[0]
document.getElementById('answer-4-3').innerHTML = myQuestions[2].answerD[0]
let QuestionThree = document.getElementById('Q3');{
    QuestionThree.addEventListener('click', () =>{
        document.getElementById('Q-C3').className ="show"
  })
}   

























// let categoryTwo = document.getElementsByClassName('category-2');
// for(let i=0; i < categoryTwo.length; i++){
//     categoryTwo[i].addEventListener('click', () =>{
//         alert('hello')
//     })
// }

// let categoryThree = document.getElementsByClassName('category-3');
// for(let i=0; i < categoryThree.length; i ++){
//     categoryThree[i].addEventListener('click', () =>{
//         alert('hello')
//     })
// }

// let categoryFour = document.getElementsByClassName('category-4');
// for (let i=0; i <categoryFour.length; i++){
//     categoryFour[i].addEventListener('click', () =>{
//     alert('hello')
//     })
// }

// let categoryFice = document.getElementsByClassName('category-5');
// for (let i=0; i < categoryFive.length; i++){
//     categoryFive[i].addEventListener('click', ()=>{
//     alert('hello')
//     })
// }
