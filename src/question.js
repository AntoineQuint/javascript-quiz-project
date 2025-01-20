class Question {
    // YOUR CODE HERE:
    //
    constructor (text, choices, answer, difficulty){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }
    shuffleChoices(){
        let memory = "";
        for (let i = 0; i<this.choices.length; i++){
            let randomNumber = (Math.round(Math.random()*this.choices.length));
            memory = this.choices[i] ;
            this.choices[i] = this.choices[randomNumber];
            this.choices[randomNumber] = memory;
        
        }

    return this.choices;
    }

    // 2. shuffleChoices()
}