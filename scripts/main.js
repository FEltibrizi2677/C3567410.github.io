let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://i.imgur.com/lKzD9nD.png') {
    myImage.setAttribute ('src','https://i.imgur.com/lKzD9nD.png');
  } else {
    myImage.setAttribute ('src','https://internetfreedom.in/content/images/2016/08/iff-logo-600x250.png');
  }
}
document.querySelector('h1').onclick = function() {
  alert('Ouch! Stop poking me!');
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Internet is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Internet is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Internet is cool, ' + myName;
  }
  var mediaElem = document.getElementById("my-media-element");
mediaElem.load();
 var mediaElem = document.querySelector("video");
mediaElem.audioTracks.onaddtrack = function(event) {
  audioTrackAdded(event.track);
}

}
