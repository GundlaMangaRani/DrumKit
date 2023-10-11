var numberOfDrumButtons=document.querySelectorAll(".Drum").length;
for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll(".Drum")[i].addEventListener("click",function(){
        console.log(this);
        var passingkey=this.innerHTML;
        soundsOfDrums(passingkey);
        buttonAnimation(passingkey);
        colorchange(passingkey);
    });
}
document.addEventListener("keypress",function(event)
{
    console.log(event);
   soundsOfDrums(event.key);
   buttonAnimation(event.key);
   colorchange(event.key);
})
function soundsOfDrums(key){
switch (key) {
        case "w":var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
         break;
         case "a":var audio=new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
         case "s":var audio=new Audio("sounds/tom-3.mp3");
         audio.play();
         break;
         case "d":var audio=new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
         case "j":var audio=new Audio("sounds/crash.mp3");
         audio.play();
         break;
         case "k":var audio=new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;
         case "l":var audio=new Audio("sounds/snare.mp3");
         audio.play();
         break;
    default:
        break;
}
}
function buttonAnimation(currentkey)
{
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
function colorchange(ck)
{
  document.querySelector("."+ck).classList.add("change");
  setTimeout(function(){
    document.querySelector("."+ck).classList.remove("change");    
  },100);
}