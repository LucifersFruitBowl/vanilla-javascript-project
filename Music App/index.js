window.addEventListener("load", () => {

    //Get the sounds (audio in the html)
    const sounds = document.querySelectorAll(".sound");

    //get all the divs in the html (this represents the pads you can click on)
    const pads = document.querySelectorAll(".pads div");

    //get the visual div for the bubble aniimation 
    const visual = document.querySelector(".visual");

    //all the colors that  correspond to each pad
    const colors = [
        "#0000cc",
        "#41C8E5",
        "#6E9EEB",
        "#9A75F0",
        "#C74BF6",
        "#F320FA",
        "#d3606f",
        "#d13434"
    ];

    //for each pad and index of pad play the sound
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function (){
            sounds[index].currentTime = 0;
            sounds[index].play();
            //pass the index to the bubble function 
            createBubbles(index);
            padsAnimation(index);    
            onKeyFunction(); 

        });
    });

    //create the bubble function 
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);

        //pass through each color at the index of the pad 
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";

        //on animation end, remove the div for performance optimization
        bubble.addEventListener("animationend", function (){
            visual.removeChild(this);
        });
    }

    //create the pads animation 
    const padsAnimation = function (index){
        pads[index].classList.add("pressed");
            setTimeout(function() {
                pads[index].classList.remove("pressed");
              }, 50);
    }

    //create an event listener for the keypresses 
    const onKeyFunction = document.addEventListener("keypress", function(event) {
        //call the function 
        makeSoundOnKeyPress(event.key);
        //call the padsanimation too (this wont work?)
        padsAnimation(event.key);
      
      });
      
      
      function makeSoundOnKeyPress(key) {
      
        switch (key) {
            case "a":
                const sound1 = new Audio("/sounds/trigger-bap.wav");    
                sound1.play();
                break;

            case "s":
                const sound2 = new Audio("/sounds/bap.wav");
                sound2.play();
                break;

            case "d":
                const sound3 = new Audio("/sounds/clock.wav");
                sound3.play();
                break;

            case "f":
                const sound4 = new Audio("/sounds/drop-kick.wav");
                sound4.play();
                break;

            case "g":
                const sound5 = new Audio("/sounds/pond-drop.wav");
                sound5.play();
                break;

            case "h":
                const sound6 = new Audio("/sounds/say-bow-beep.wav");
                sound6.play();
                break;
            
            case "j":
                const sound7 = new Audio("/sounds/snappin-bap.wav");
                sound7.play();
                break;

            case "k":
                const sound8 = new Audio("/sounds/thick-kick.wav");
                sound8.play();
                break;
      
      
          default: console.log(key);
          break;
      
        }
      }
});