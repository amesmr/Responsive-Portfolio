function prepareEmail(to, subject, bodyText) {
    var form = document.createElement('form');
    var emaillink = 'mailto:' + escape(to.value) + '?Subject=' + escape(subject.value) + '&Body=' + escape(bodyText.value ? bodyText.value : ' ');

    //Set the form attributes
    form.setAttribute('method', 'post');
    form.setAttribute('enctype', 'text/plain');
    form.setAttribute('action', emaillink);
    //form.setAttribute('style', 'display:none');

    //Append the form to the body
    document.body.appendChild(form);

    //Submit the form
    form.submit();

    //Clean up
    document.body.removeChild(form);
}
function myFunction(to, subject, bodyText) {
    var emaillink = 'mailto:' + escape(to.value) + '?Subject=' + escape(subject.value) + '&Body=' + escape(bodyText.value ? bodyText.value : ' ');
    // below did nothing to the <a> link in any browser
    //var sendLink = document.getElementById("sendMail").href = emaillink;

    // below did nothing to the link in any browser
    //document.getElementById("sendMail").href.value = emaillink;
    //document.getElementById("sendMail").href = emaillink;

    var sendLink = document.getElementById("sendMail");
    var att = document.createAttribute("href");
    att.value = emaillink;
    sendLink.setAttributeNode(att);
    //sendLink.setAttribute("href" , emaillink);

//  // below works in FireFox, IE and Edge! NOT in Chrome or IE
//  location.href = emaillink;
//
    // below works in FireFox, IE and Edge! NOT in Chrome or IE
    //setTimeout(function(emaillink){document.location.href = emaillink},500);

    // below works in FireFox, Edge or IE! NOT in Chrome
    location.assign(emaillink);
    return true;
}


