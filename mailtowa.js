// main link intercept...

// an example OWA compose URL:
// https://outlook.office.com/owa/?path=/mail/action/compose&to={to}&subject={subject}&body={body}&cc={cc}&bcc={bcc}"

const handleLink = (e) => {
    theTarget = e.target;
    if (theTarget.tagName.toLowerCase() == 'a' && theTarget.href.substr(0,7) === 'mailto:') {
        chrome.storage.sync.get('owaIntercept', (data) => {
            if (data.owaIntercept) {
                const mailtoLink = theTarget.href.substr(7).replace('?', '&');
                const paramString = `to=${mailtoLink}`;
                const outlookString = `https://outlook.office.com/owa/?path=/mail/action/compose&${paramString}`;
                window.open(outlookString, '_blank');

                e.preventDefault();
                return false;
            }
        });
    }
}

document.addEventListener("click", handleLink, false);
