// main link intercept...

// an example OWA compose URL:
// https://outlook.{office|live}.com/owa/?path=/mail/action/compose&to={to}&subject={subject}&body={body}&cc={cc}&bcc={bcc}"

const handleLink = (e) => {
    theTarget = e.target;
    if (theTarget.tagName.toLowerCase() == 'a' && theTarget.href.substr(0,7) === 'mailto:') {
        chrome.storage.sync.get('owaIntercept', (data) => {
            if (String(data.owaIntercept).startsWith("on")) {
                const mailtoLink = theTarget.href.substr(7).replace('?', '&');
                const paramString = `to=${mailtoLink}`;
                const urlString = data.owaIntercept.length === 2 ? "office" : "live";
                const outlookString = `https://outlook.${urlString}.com/owa/?path=/mail/action/compose&${paramString}`;
                window.open(outlookString, '_blank');
            }
        });
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        return false;
    }
}

document.addEventListener("click", handleLink, false);
