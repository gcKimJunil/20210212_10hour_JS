const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        coreect: 'c'
    },
    {
        question: 'question 2',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'javaScript',
        coreect: 'd'
    },
    {
        question: 'question 3',
        a: 'Florind Pop',
        b: 'Donald',
        c: 'Donald2',
        d: 'Donald24',
        coreect: 'b'
    },
    {
        question: '질문4',
        a: 'loacker dark',
        b: 'loacker blue',
        c: 'loacker red',
        d: 'loacker yellow',
        coreect: 'b'
    },
    {
        question: '질문5',
        a: '4200',
        b: '4500',
        c: '4800',
        d: '5100',
        coreect: 'b'
    }
];
const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].coreect){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            // TODO: Show results
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
                <button onClick="location.reload()">Reload</button>
            `;
        }    
    }
});