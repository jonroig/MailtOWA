'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.get('owaIntercept', (data) => {
    if (!data.owaIntercept) {
      chrome.storage.sync.set({owaIntercept: "on"}, function() {
        console.log('Intercept activated!');
      });
    }
  })
});
