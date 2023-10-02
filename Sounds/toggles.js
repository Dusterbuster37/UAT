// buttons
function start()
{
    
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    
}

function stop()
{
    
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function PlayOwl()
{
    mysound = new sound("owl.mp3")
    mysound.play();
}

function sound(src)
{
    this.sound = document.createElement("audio")
    this.sound.src = src;
    this.play = function () {
        this.sound.play();
    }
}
function StopOwl()
{
    window.location.reload();
}