'use strict';

const interceptOn = document.getElementById('interceptOn');
const interceptOff = document.getElementById('interceptOff');
const interceptOnText = document.getElementById('interceptOnText');
const interceptOffText = document.getElementById('interceptOffText');

chrome.storage.sync.get('owaIntercept', (data) => {
    console.log('data', data);
    if (data.owaIntercept) {
        interceptOn.checked = true;
        interceptOff.checked = false;
        interceptOnText.style.fontWeight = 'bold';
        interceptOffText.style.fontWeight = 'normal';
    } else {
        interceptOn.checked = false;
        interceptOff.checked = true;
        interceptOnText.style.fontWeight = 'normal';
        interceptOffText.style.fontWeight = 'bold';
    }
});

interceptOn.onclick = () => {
    chrome.storage.sync.set({owaIntercept: true}, () => {
      console.log('intercept on');
      interceptOn.checked = true;
      interceptOff.checked = false;
      interceptOnText.style.fontWeight = 'bold';
      interceptOffText.style.fontWeight = 'normal';
  });
}

interceptOff.onclick = () => {
    chrome.storage.sync.set({owaIntercept: false}, () => {
      console.log('intercept off');
      interceptOn.checked = false;
      interceptOff.checked = true;
      interceptOnText.style.fontWeight = 'normal';
      interceptOffText.style.fontWeight = 'bold';
  });
}
