var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
 });

document.addEventListener("DOMContentLoaded", (event) => {

    let video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;

document.getElementById("play").addEventListener("click", playVideo);
function playVideo() {
    video.play();
    let volumeInfo = Math.round(video.volume * 100);
    document.getElementById("volume").textContent =  volumeInfo + "%";
}

document.getElementById("pause").addEventListener("click", pauseVideo);   
function pauseVideo() {
    video.pause();
}

document.getElementById("slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate.toFixed(2));
});

document.getElementById("faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed is " + video.playbackRate.toFixed(2));
});

document.getElementById("skip").addEventListener("click", function() {
    if (video.currentTime + 10 < video.duration) {
        video.currentTime =  video.currentTime + 10;
    } else {
        video.currentTime = 0; 
    }
    console.log("Current location is " + video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        document.getElementById("mute").innerText = "Mute";
    } else {
        video.muted = true;
        document.getElementById("mute").innerText = "Unmute";
    }
});

document.getElementById("slider").addEventListener("input", function() {
    let sliderValue = document.getElementById("slider").value;
    video.volume = sliderValue / 100;
    let volumeInfo = Math.round(video.volume * 100);
    document.getElementById("volume").textContent = volumeInfo + "%";
});

document.getElementById("vintage").addEventListener('click', function() {
    document.getElementById("player1").classList.add("oldSchool");
   })

document.getElementById("orig").addEventListener('click', function() {
    document.getElementById("player1").classList.remove("oldSchool");
   })

});
