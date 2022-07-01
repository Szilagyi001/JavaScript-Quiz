
//Propmtbox for user input
let name = prompt(`Please enter your name`);
//convert to uppercase
let nameConverted = name.toUpperCase();
let dsplname = document.getElementById(`name`);
dsplname.innerHTML = nameConverted;


//start the app
let btn = document.getElementById(`btn`);
btn.addEventListener(`click` , startApp);
function startApp() {
//Question one
    let answer1 = `blue`;
    let Attempts = 0;
    let score = 0;
    do {
        //Prompt the question
        qestion1 = prompt(`What colour has the sky?`);
        //Covert to lowercase
        qestion1Cov = qestion1.toLowerCase();
        //Check if the input field is empty
        if (qestion1Cov === "" ) {
            alert(`Field must be filled`);
            continue;
        }
        //Check if there was give 3 wrong answers
        if (qestion1Cov != answer1) {
            Attempts++;
            if (Attempts === 3) {
                crctanswr = false;
                break;
            }
            alert(`The answer is incorrect - try again`);
        //Exit the loop with the else if the answer correct
        } else if (qestion1Cov === answer1) {
            Attempts++;
            crctanswr = true
            alert(`Correct!`);
        }
    } while (qestion1Cov != answer1);
    if (crctanswr === true) {
        score ++;
        alert(`Well done - Next question`);
    } else if (crctanswr === false) {
        //message the user is being forced to the next question
        alert(`Too many incorrect answers! - Next question`);
    }

//Question Two
    let answer2 = `motherwell`;
    let Attempts2 = 0;

    do {
        qestion2 = prompt(`In which city New College Lanarkshire is based?`);
        question2Cov = qestion2.toLowerCase();
        if (question2Cov === "" ) {
            alert(`Field must be filled`);
            continue;
        }
        if (question2Cov != answer2) {
            Attempts2++;
            if (Attempts2 === 3) {
                crctanswr2 = false;
                break;
            }
            alert(`The answer is incorrect - try again`);
        } else if (question2Cov === answer2) {
            Attempts2++;
            crctanswr2 = true
            alert(`Correct!`);
        }
    } while (question2Cov != answer2);
    if (crctanswr2 === true) {
        score ++;
        alert(`Well done - Next question`);
    } else if (crctanswr2 === false) {
        alert(`Too many incorrect answers! - Next question`);
    }

//Question three
    let answer3 = `2021`;
    let Attempts3 = 0;

    do {
        qestion3 = prompt(`In which year our couse started??`);
        if (qestion3 === "" || isNaN(qestion3)) {
            alert(`Field must be filled or not a number`);
            continue;
        }
        if (qestion3 != answer3) {
            Attempts3++;
            if (Attempts3 === 3) {
                crctanswr3 = false;
                break;
            }
            alert(`The answer is incorrect - try again`);
        } else if (qestion3 === answer3) {
            Attempts3++;
            crctanswr3 = true
            alert(`Correct!`);
        }
    } while (qestion3 != answer3);
    if (crctanswr3 === true) {
        score ++;
        alert(`Well done`);
    } else if (crctanswr3 === false) {
        alert(`Too many incorrect answers!`);
    }
//Display the name and score

    displayscore(score);

function displayscore(score) {
    alert(`WELL DONE ${name}\nYOUR SCORE IS ${score}`);
}

}







