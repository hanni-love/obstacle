from flask import Flask, render_template, request, redirect, url_for
import json
import os

app = Flask(__name__)

# JSON 파일에서 문제와 정답 읽기
def load_answers(quiz_name):
    file_path = os.path.join('data', f'{quiz_name}.json')
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            return json.load(file)
    return None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/quiz/<quiz_name>', methods=['GET', 'POST'])
def quiz(quiz_name):
    quizzes = ['자이스토리 영어 독해 기본', '자이스토리 영어 독해 완성']  # 문제집 목록
    selected_quiz = quiz_name
    correct_answers = load_answers(selected_quiz)
    
    result = None
    if request.method == 'POST':
        if correct_answers:
            try:
                question_number = request.form['question_number']
                user_answer = request.form['user_answer'].strip().upper()
                correct_answer = correct_answers.get(question_number)
                
                if correct_answer is None:
                    result = "올바른 문항 번호를 입력해주세요"
                elif user_answer == correct_answer:
                    result = "정답입니다"
                else:
                    result = "오답입니다"
            except ValueError:
                result = "Please enter a valid number."
        else:
            result = "제대로 작동하지 않았습니다. 새로고침을 해주세요"

    return render_template('quiz.html', result=result, quizzes=quizzes, selected_quiz=selected_quiz)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
