let questionsUnanswered = 16
let score = 0
function add0(i) {
    questionsUnanswered -= 1
    // increment the score by 100 points
    score += 0
    console.log('score', score)
    document.getElementById("p").innerHTML = score
    if (score >= 3000 && questionsUnanswered == 0) {
        alert('You win!')
    } else if (score < 3000 && questionsUnanswered == 0) {
        alert('You lose')
    }

}

function add100(i) {
    // minus one from questions unaswered 
    questionsUnanswered -= 1
    // increment the score by 100 points
    score += 100
    console.log('score', score)
    document.getElementById("p").innerHTML = score
    if (score >= 3000 && questionsUnanswered == 0) {
        alert('You win!')
    } else if (score < 3000 && questionsUnanswered == 0) {
        alert('You lose')
    }

}
function add200(i) {
    questionsUnanswered -= 1
    score += 200
    console.log('score', score)
    document.getElementById("p").innerHTML = score
    if (score >= 3000 && questionsUnanswered == 0) {
        alert('You win!')
    } else if (score < 3000 && questionsUnanswered == 0) {
        alert('You lose')
    }
}

function add300(i) {
    questionsUnanswered -= 1
    score += 300
    console.log('score', score)
    document.getElementById("p").innerHTML = score
    if (score >= 3000 && questionsUnanswered == 0) {
        alert('You win!')
    } else if (score < 3000 && questionsUnanswered == 0) {
        alert('You lose')
    }
}
function add400(i) {
    questionsUnanswered -= 1
    score += 400
    console.log('score', score)
    document.getElementById("p").innerHTML = score
    if (score >= 3000 && questionsUnanswered == 0) {
        alert('You win!')
    } else if (score < 3000 && questionsUnanswered == 0) {
        alert('You lose')
    }
}
function setVisibility(id, visibility) {
    document.getElementById(id).style.display = visibility;
}


let QuestionOne = document.getElementById('Q1')
QuestionOne.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C').className = "show"
});

const wrongAnswer = () => {
    alert('WRONG')
}
const rightAnswer = () => {
    alert('CORRECT!')
}

let QuestionTwo = document.getElementById('Q2');
QuestionTwo.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C2').className = "show"
})


let QuestionThree = document.getElementById('Q3');
QuestionThree.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C3').className = "show"
})


let QuestionFour = document.getElementById('Q4');
QuestionFour.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C4').className = "show"
})


let QuestionFive = document.getElementById('Q5');
QuestionFive.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C5').className = "show"
})


let QuestionSix = document.getElementById('Q6');
QuestionSix.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C6').className = "show"
})


let QuestionSeven = document.getElementById('Q7');
QuestionSeven.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C7').className = "show"
})


let QuestionEight = document.getElementById('Q8');
QuestionEight.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C8').className = "show"
})


let QuestionNine = document.getElementById('Q9');
QuestionNine.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C9').className = "show"
})


let QuestionTen = document.getElementById('Q10');
QuestionTen.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C10').className = "show"
})


let QuestionEleven = document.getElementById('Q11');
QuestionEleven.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C11').className = "show"
})


let QuestionTwelve = document.getElementById('Q12');
QuestionTwelve.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C12').className = "show"
})


let QuestionThirteen = document.getElementById('Q13');
QuestionThirteen.addEventListener('click', (e) => {

    e.target.style.color = '#f00'
    document.getElementById('Q-C13').className = "show"
})


let QuestionFourteen = document.getElementById('Q14'); {
    QuestionFourteen.addEventListener('click', (e) => {

        e.target.style.color = '#f00'
        document.getElementById('Q-C14').className = "show"
    })
}

let QuestionFifteen = document.getElementById('Q15'); {
    QuestionFifteen.addEventListener('click', (e) => {

        e.target.style.color = '#f00'
        document.getElementById('Q-C15').className = "show"
    })
}

let QuestionSixteen = document.getElementById('Q16'); {
    QuestionSixteen.addEventListener('click', (e) => {

        e.target.style.color = '#f00'
        document.getElementById('Q-C16').className = "show"
    })
}


