function checkURL() {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    var url = URL;
    if (regex.test(url) === true) {
        return "Valid URL";
    } else {
        return "Invalid URL";
    }
}

export {checkURL}
