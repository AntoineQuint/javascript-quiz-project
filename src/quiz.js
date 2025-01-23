class Quiz {
    // YOUR CODE HERE:

    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

    shuffleQuestions() {
        let memoryQ = "";
        for (let j = 0; j < this.questions.length; j++) {
            let randomNumberQ = (Math.floor(Math.random() * this.questions.length));
            memoryQ = this.questions[j];
            this.questions[j] = this.questions[randomNumberQ];
            this.questions[randomNumberQ] = memoryQ;

        }

        return this.questions;
    }

    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers++;
            return true;
        }else{
            return false
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        } else if (this.currentQuestionIndex === this.questions.length) {
            return true;
        }
    }
    filterQuestionsByDifficulty(difficulty) {
        if (difficulty < 1 || difficulty > 3 || typeof difficulty !== "number"){
            return;
        }
        const difficultySort = this.questions.filter(function (element) {
            if (element.difficulty === difficulty) {
                return true;
            } else {
                return false;
            }


        });
        
        return this.questions = difficultySort;
    }
    averageDifficulty() {
        const averageDifficulty = this.questions.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.difficulty;
        }, 0);



        return averageDifficulty / this.questions.length;


    }
}