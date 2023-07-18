// Bunny Game
let flag = 0;
let counter = 0;
let Bunny = document.getElementById("Bunny");
let Wolf = document.getElementById("Wolf");
const bunnyJumping = new Audio('soundEffect/boing.mp3');
const youWon = new Audio('soundEffect/successTrumpets.mp3');
const rageScream = new Audio('soundEffect/Screaming.mp3');
const backgroundMusic = new Audio('soundEffect/MonkeySong.mp3')

function startBunnyGame(){   
      backgroundMusic.play();
      if (true){
            flag = 1;
      }
      let startGame = document.querySelector('#Game_box1');
      startGame.addEventListener("click",jump)

      Wolf.classList.add("animateWolf");
      Bunny.classList.add("animateHop");
      BackgroundContainer.classList.add("animateBackground");
}
function jump(){
      bunnyJumping.play();
      document.getElementById('bunnyScore').remove();
      newScore = document.createElement('h3');
      newScore.setAttribute('id','bunnyScore');
      document.getElementById('Game_header1').appendChild(newScore);
      document.getElementById('bunnyScore').style.color='#f73c02';
      document.getElementById('bunnyScore').style.paddingTop='20px';
      if (Bunny.classList.add("animateBunny") != "animateBunny"){
            Bunny.classList.remove("animateHop");
            Bunny.classList.add("animateBunny");
           
      };
      setTimeout(function(){
            Bunny.classList.remove("animateBunny");
            Bunny.classList.add("animateHop");
      },500);
      counter++;
      let score = document.createTextNode('Your Score: ' + counter*10);
      document.getElementById('bunnyScore').appendChild(score);

}
let checkDead = setInterval(function(){
      let BunnyTop = parseInt(window.getComputedStyle(Bunny).getPropertyValue("top"));
      let WolfLeft = parseInt(window.getComputedStyle(Wolf).getPropertyValue("left"));
      if (counter >= 10){
            // WINNING
            Wolf.style.animation = 'none';
            Wolf.style.display = 'none';
            document.getElementById("myModal2").style.display = "block";
            backgroundMusic.pause();
            youWon.play();
            // for starting the confetti 
            const start = () => {
                  setTimeout(function() {
                  confetti.start()
                  }, 50); // start the confetti after 50ms
            };

            //  for stopping the confetti 
            const stop = () => {
                  setTimeout(function() {
                  confetti.stop()
                  }, 5000); // stop the confetti after 5000ms 
            };
            
            start();
            stop();
      }
      if (WolfLeft < 50 && WolfLeft > 0 && BunnyTop >150 && flag == 1){
            // lOSING
            backgroundMusic.pause();
            rageScream.play();
            Wolf.style.animation = 'none';
            Wolf.style.display = 'none';
            BackgroundContainer.classList.remove("animateBackground");
            // console.log(WolfLeft);
            document.getElementById("myModal").style.display = "block";
            // alert("you lost");
      }
},20);