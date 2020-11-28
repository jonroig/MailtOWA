'use strict';

const interceptOn = document.getElementById('interceptOn');
const interceptOnLive = document.getElementById('interceptOnLive');
const interceptOff = document.getElementById('interceptOff');
const interceptOnText = document.getElementById('interceptOnText');
const interceptOnLiveText = document.getElementById('interceptOnLiveText');
const interceptOffText = document.getElementById('interceptOffText');

chrome.storage.sync.get('owaIntercept', (data) => {
    console.log('data', data);
    if (data.owaIntercept === "on") {
        interceptOn.checked = true;
        interceptOnLive.checked = false;
        interceptOff.checked = false;
        interceptOnText.style.fontWeight = 'bold';
        interceptOnLive.style.fontWeight = 'normal';
        interceptOffText.style.fontWeight = 'normal';
    } else if (data.owaIntercept === "on_live") {
        interceptOn.checked = false;
        interceptOnLive.checked = true;
        interceptOff.checked = false;
        interceptOnText.style.fontWeight = 'normal';
        interceptOnLiveText.style.fontWeight = 'bold';
        interceptOffText.style.fontWeight = 'normal';
    } else {
        interceptOn.checked = false;
        interceptOnLive.checked = false;
        interceptOff.checked = true;
        interceptOnText.style.fontWeight = 'normal';
        interceptOnLiveText.style.fontWeight = 'normal';
        interceptOffText.style.fontWeight = 'bold';
    }
});

interceptOn.onclick = () => {
    chrome.storage.sync.set({owaIntercept: "on"}, () => {
      console.log('intercept on');
      interceptOn.checked = true;
      interceptOnLive.checked = false;
      interceptOff.checked = false;
      interceptOnText.style.fontWeight = 'bold';
      interceptOnLive.style.fontWeight = 'normal';
      interceptOffText.style.fontWeight = 'normal';
  });
}

interceptOnLive.onclick = () => {
    chrome.storage.sync.set({owaIntercept: "on_live"}, () => {
      console.log('intercept on_live');
      interceptOn.checked = false;
      interceptOnLive.checked = true;
      interceptOff.checked = false;
      interceptOnText.style.fontWeight = 'normal';
      interceptOnLiveText.style.fontWeight = 'bold';
      interceptOffText.style.fontWeight = 'normal';
  });
}

interceptOff.onclick = () => {
    chrome.storage.sync.set({owaIntercept: "off"}, () => {
      console.log('intercept off');
      interceptOn.checked = false;
      interceptOnLive.checked = false;
      interceptOff.checked = true;
      interceptOnText.style.fontWeight = 'normal';
      interceptOnLiveText.style.fontWeight = 'normal';
      interceptOffText.style.fontWeight = 'bold';
  });
}
