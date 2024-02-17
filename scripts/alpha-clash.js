// function play(){
// //      console.log('play start6 now');
// // }

// // step 1.. >>
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden')
// // show the playground..>
// const playgroundSection = document.getElementById('play-ground');
// // console.log(playgroundSection.classList)
// playgroundSection.classList.remove('hidden')
// }



// capture..what i pressed..Events..>
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    // stop game if pressed "esc"...>>
    if(playerPressed === 'Escape'){
        gameover();
    }

    //get  expected to pressed,,..>   
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);
    // console.log(currentAlphabetElement.innerText)
// check matched ore not...>>  
    if(playerPressed === expectedAlphabet){
        console.log('you get point');
        // console.log('dur vai right key press koro',expectedAlphabet)
// update score:1.get corrent score 
      const currentScoreElement = document.getElementById('current-score')
     const currentScoreText = currentScoreElement.innerText;
     const currentScore = parseInt(currentScoreText);
     console.log(currentScore); 

    //   2.increase the score by. 
    const newScore = currentScore + 1;
 //  3. show the upadate score. 
        currentScoreElement.innerText = newScore;
   
        removeBackgroundColorById(expectedAlphabet)
        continueGame(); 
    }
        else {
            console.log('you lost a life');
// step:1:get the current life numnber>>>>
const  currentLifeElement = document.getElementById('current-life');
const currentLifeText =currentLifeElement.innerText;
const currentLife = parseInt(currentLifeText)
// 2.REDUSE LIFE counr:
const newLife = currentLife -  1
// step:3. display updated life count:
currentLifeElement.innerText = newLife; 
if(newLife === 0 ){
    gameover();
}



        }
}
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    // generate a random alphabet..>
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set alphaebt generated alphabet to scren show/...>
    const currentAlphabetElement = document.getElementById('current-alphabet');
  
     currentAlphabetElement.innerText = alphabet;
    // set setBackground..> 
    setBackgroundColorById(alphabet);

}
function play() {
//   hide everythbing
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')
    // resent score:..>
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)

    continueGame()
}
function gameover(){
    hideElementById('play-ground');
    showElementById('final-score');
    // 1.get the final score>>>
const lastScore = getTextElementValueById('current-score')
console.log(lastScore);
setTextElementValueById('last-score',lastScore);
// clear the lastr selected boraange color:>
const currentAlphabet = getElementTextById('current-alphabet');
removeBackgroundColorById(currentAlphabet);
}