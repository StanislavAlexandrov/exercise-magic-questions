var originalQuestions = [
    "This is a magical question, isn't it?",
    'Do you believe in magic?',
    "What's your favorite magical creature?",
    // Add as many questions as you like
];

var questions = [...originalQuestions];
var chimeAudio = new Audio('src/chime.wav'); // create audio object

document.getElementById('magic-button').addEventListener('click', function () {
    var magicContainer = document.getElementById('magic-container');
    var magicGif = document.getElementById('magic-gif');
    var magicText = document.getElementById('magic-text');
    var magicButton = document.getElementById('magic-button');

    if (magicButton.innerHTML === 'Restart') {
        // Reset everything
        questions = [...originalQuestions];
        magicButton.innerHTML = 'Click Me!';
        magicContainer.innerHTML = `
      <img id="magic-gif" src="src/magic.gif" />
      <p id="magic-text" style="opacity: 0;"></p>
    `;
    } else {
        if (questions.length > 0) {
            var randomIndex = Math.floor(Math.random() * questions.length);
            var question = questions[randomIndex];
            magicText.innerText = question;
            questions.splice(randomIndex, 1); // remove the selected question from the array

            // Reset the states
            magicGif.style.opacity = '1';
            magicGif.classList.remove('fade-out');

            magicText.style.opacity = '0';
            magicText.classList.remove('show');

            chimeAudio.play(); // play audio

            setTimeout(function () {
                magicGif.classList.add('fade-out');
            }, 1); // Change the timing to fit the duration of your gif

            setTimeout(function () {
                magicText.classList.add('show');
                magicText.style.opacity = '1';
            }, 500); // Change the timing to fit when you want the text to start appearing
        } else {
            magicContainer.innerHTML = "<p>That's it!</p>";
            magicButton.innerHTML = 'Restart';
        }
    }
});
