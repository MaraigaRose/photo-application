function checkAnswers() {
    let score = 0
    quiz = document.forms.Quiz.elements;
    answer1 = quiz.favourite.value;
    if (answer1 =="Tom") {
        score = score + 1;
    }

    answer2 = quiz.colour.value;
    if (answer2 =="Tabby") {
        score = score + 1;
    }

    alert ("Well done your score was ..." + score);
}
