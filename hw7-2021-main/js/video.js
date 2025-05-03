var video;
var slider = document.querySelector("#slider");
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);

	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	video.volume = slider.value/100;
	document.querySelector("#volume").innerHTML = slider.value  + "%";
	console.log("Volume is set to " + slider.value  + "%");
	console.log("Volume is set to " + video.volume*100 + "%");

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("Video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("Video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime = video.currentTime + 10;
	if(video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(!video.muted){
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
		console.log("Mute");
	}
	else{
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
		console.log("Unmute");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(slider.value);
	video.volume = slider.value/100;
	document.querySelector("#volume").innerHTML = slider.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("video").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").classList.remove("oldSchool");
});