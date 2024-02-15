// function play(){
//     //step-1: hide the home screen. to hide the screen sdd the class hidden to the home section 

//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     //show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    // console.log('player pressed ', playerPressed);

    //stop the game if pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    //check matched or not 
    if (playerPressed === expectedAlphabet) {
        // console.log('you get a point');

        //update score :
        //1.get the current score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        //2.increase the score by 1
        // const newScore = currentScore + 1;

        //3. show the update score 
        // currentScoreElement.innerText = newScore;

        //-------------------------------------------------------------------------------------------------------------------
        //use utility 
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);

        //start a new round 
        removeBackgroundColor(expectedAlphabet);
        continueGame();

    } else {
        // console.log('you missed . you lost a life ');

        //step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);


        //step-2: reduce the life count
        // const newLife = currentLife - 1;

        //step-3: display the update life count 
        // currentLifeElement.innerText = newLife;

        //-------------------------------------------------------------------------------------------------------------------
        //use utility
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);

        //start a new round 
        removeBackgroundColor(expectedAlphabet);
        continueGame();

        if (newLife === 0) {
            gameOver();
        }

    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();

    //step-2: set random generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet ;

    //set background color 
    setBackgroundColor(alphabet);
}

function play() {
    //hide everything show only the playground
    hideElementById('home');
    showElementById('play-ground');
    hideElementById('score');

    //rest score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('score');

    //update final score 
    //1.get the final score 
    const finalScore = getTextElementValueById('current-score')
    setTextElementValueById('final-score', finalScore);

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColor(currentAlphabet);


}