'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({owaIntercept: true}, function() {
    console.log('Intercept activated!');
  });
});
