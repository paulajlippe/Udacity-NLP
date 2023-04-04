// function checkURL(userInput) {
//     let regex = ('(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?');
//     return regex.test(userInput)
// }

function checkURL() {
  const expression = new RegExp('(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?');
  const regex = new RegExp(expression);
    var url = URL;
    if (regex.test(url) === true) {
        return "Valid URL";
    } else {
        return "Invalid URL";
    }
}

export { checkURL }
