const questions = document.querySelectorAll('#tBodyQuestions tr td:nth-of-type(2)')
const answer = document.querySelectorAll('#answers h3')
document.getElementById('allQuestions').style.display = 'none';
let questionField = document.getElementById('question-field');
let answerField = document.getElementById('answer-field');



start()
function start() {
    const button = document.getElementById('question-btn');
    button.addEventListener('click', viewQ);
    button.className = 'q-button';

    function viewQ() {
        button.innerText == 'Ask me!'? button.innerText = 'Ask me again!':null;
        // button.innerText = '';
        const index = Math.floor(Math.random() * questions.length);
        answerField.innerHTML = '';
        questionField.innerHTML = questions[index].innerHTML;
        
        questionField.addEventListener('click', (e) => {
            const id = e.target.href.split('#')[1];
            const found = Array.from(answer).find(a => a.id == id)
            answerField.innerHTML = found.parentElement.innerHTML;
            answerField.querySelector('h3').className = 'heading'
            answerField.querySelector('strong').remove();
            questionField.innerHTML = '';
        })

    }
}