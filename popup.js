'use strict';

const radios = Array.from(document.querySelectorAll('input[name=intercept]'));
const domainInput = document.querySelector('input[name=domain]');
const popupCheckbox = document.querySelector('input[name=popup]');

chrome.storage.sync.get(['owaIntercept', 'owaDomain', 'owaPopup'], (data) => {
    // Set active radio button
    radios.find(el => el.value === data.owaIntercept).checked = true;
    // Set custom domain
    domainInput.value = data.owaDomain || '';
    popupCheckbox.checked = data.owaPopup || false;
});

document.addEventListener('change',  e => {
    // Get active radio button
    const input = radios.find(el => el.checked);
    // Store settings
    chrome.storage.sync.set({
        owaIntercept: input.value,
        owaDomain: domainInput.value || null,
        owaPopup: popupCheckbox.checked,
    });
});
