// Movement script Arthur cathcart
// added event listener
document.addEventListener("DOMContentLoaded", function () {
    var intervalID = 0;
    var change = 100;
  //functions!
    function intervalStart() {
      var i = 0;
      var image = document.getElementById("meme"); // Changed the ID to "meme"
      image.style.position = "relative"; //Set meme position
      intervalID = setInterval(function () {
        image.style.left = change + "px";
        image.style.top = change + "px";
        document.getElementById("msg").textContent = " X = " + image.style.left + " y = " + image.style.top;
        change += 2;
      }, 50);
    }
    //stop
    function intervalStop() {
      clearInterval(intervalID);
    }
     // Name buttons
  document.getElementById("start-button").addEventListener("click", intervalStart);
  document.getElementById("stop-button").addEventListener("click", intervalStop);
});