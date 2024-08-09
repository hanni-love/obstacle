document.addEventListener('DOMContentLoaded', function() {
    const questionsContainer = document.getElementById('questions-container');
    const addQuestionButton = document.getElementById('add-question');
    let questionCount = 0;

    function addQuestion() {
        questionCount++;
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');
        questionDiv.innerHTML = `
            <label for="question_${questionCount}">문항 번호 ${questionCount}</label>
            <input autocomplete="off" type="text" id="question_${questionCount}" name="question_${questionCount}" required aria-label="문항 번호 ${questionCount}">
            <br>
            <div class="radio-group">
                <input type="radio" id="answer${questionCount}_1" name="question_${questionCount}" value="1"><label for="answer${questionCount}_1" class="radio-button">1</label>
                <input type="radio" id="answer${questionCount}_2" name="question_${questionCount}" value="2"><label for="answer${questionCount}_2" class="radio-button">2</label>
                <input type="radio" id="answer${questionCount}_3" name="question_${questionCount}" value="3"><label for="answer${questionCount}_3" class="radio-button">3</label>
                <input type="radio" id="answer${questionCount}_4" name="question_${questionCount}" value="4"><label for="answer${questionCount}_4" class="radio-button">4</label>
                <input type="radio" id="answer${questionCount}_5" name="question_${questionCount}" value="5"><label for="answer${questionCount}_5" class="radio-button">5</label>
            </div>
            <br>
        `;
        questionsContainer.appendChild(questionDiv);
    }

    addQuestionButton.addEventListener('click', addQuestion);

    // 초기 문항 추가 (원하는 경우)
    addQuestion();
});
