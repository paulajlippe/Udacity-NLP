function checkURL() {
  const regex = ('(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?');
    var url = URL;
    if (regex.test(url) === true) {
        return "Valid URL";
    } else {
        return "Invalid URL";
    }
}

export { checkURL }
