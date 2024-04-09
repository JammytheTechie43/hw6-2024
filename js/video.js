var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.addEventListener("DOMContentLoaded", function() {
	var video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
});

document.getElementById("play").addEventListener("click", function() {
	var video = document.querySelector(".video");
	video.play();
	console.log("Volume: ${video.volume}");
});

document.getElementById("pause").addEventListener("click", function() {
	document.querySelector(".video").pause();
});

document.getElementById("slower").addEventListener("click", function() {
	var video = document.querySelector(".video");
	video.playbackRate *= 0.9;
	console.log("Speed: ${video.playbackRate}");
});

document.getElementById("faster").addEventListener("click", function() {
	var video = document.querySelector(".video");
	video.playbackRate /= 0.9;
	console.log("Speed: ${video.playbackRate}");
});

document.getElementById("skip").addEventListener("click", function() {
	var video = document.querySelector(".video");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) video.currentTime = 0;
	console.log("Current Time: ${video.currentTime}");
});

document.getElementById("mute").addEventListener("click", function() {
	var video = document.querySelector(".video");
	video.muted = !video.muted;
	console.log("Muted: ${video.muted}");
});

document.getElementById("slider").addEventListener("input", function() {
	var video = document.querySelector(".video");
	video.volume = this.value / 100;
	document.getElementById("volume").innerHTML = this.value;
});

document.getElementById("vintage").addEventListener("click", function() {
	document.querySelector(".video").classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
	document.querySelector(".video").classList.remove("oldSchool");
});

