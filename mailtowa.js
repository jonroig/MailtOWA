// main link intercept...

// an example OWA compose URL:
// https://outlook.{office|live}.com/owa/?path=/mail/action/compose&to={to}&subject={subject}&body={body}&cc={cc}&bcc={bcc}"

const handleLink = (e) => {
    const theTarget = e.target;
    if (theTarget.tagName.toLowerCase() == 'a' && theTarget.href.substr(0,7) === 'mailto:') {
        chrome.storage.sync.get(['owaIntercept', 'owaDomain', 'owaPopup'], (data) => {
            if (String(data.owaIntercept).startsWith("on")) {
                const mailtoLink = theTarget.href.substr(7).replace('?', '&');
                const paramString = `to=${mailtoLink}`;
                const domain = {
                    on: 'outlook.office.com',
                    on_live: 'outlook.live.com',
                    on_custom: data.owaDomain
                }[data.owaIntercept];
                const outlookString = `https://${domain}/owa/?path=/mail/action/compose&${paramString}`;
                window.open(outlookString, '_blank', data.owaPopup ? 'width=800' : null);
            }
        });
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        return false;
    }
}

document.addEventListener("click", handleLink, false);
