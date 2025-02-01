function yes() {
    document.getElementById("messageContainer").style.display = "none";
    document.getElementById("mediaContainer").style.display = "block";

    var audioElement = document.getElementById("myAudio");
    audioElement.play();
}

function no(){
    teleportMessage();
}

function teleportMessage() {
    const container = document.getElementById("messageContainer");

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const randomLeft = Math.random() * (vw - containerWidth);
    const randomTop = Math.random() * (vh - containerHeight);
   
    container.style.position = "absolute";
    container.style.left = randomLeft + "px";
    container.style.top = randomTop + "px";
}