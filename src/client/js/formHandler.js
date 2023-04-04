import { checkURL } from './checkURL';

// function handleSubmit(event) {
//   event.preventDefault()
//   const formText = document.getElementById('userInput').value;
//   // const errormessage = Client.checkURL(formText)
//   // document.getElementById("err").innerHTML = '';
//   // if (errormessage) {
//   //     document.getElementById("err").innerHTML = errormessage
//   //     return
//   // }

//   // fetch('http://localhost:8080/checkURL', {
//   //     method: 'POST',
//   //     credentials: 'same-origin',
//   //     headers: {
//   //         'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify({ formText }),
//   // })

//   // let results = document.getElementById('results')

//   // .then(res => res.json())
//   //     .then(function(results) {


//   console.log(":::Calling the external API:::");
//   fetch('http://localhost:8000/api')
//   .then(res => res.json())
//   .then(function(res) {
//       console.log(res);
//       document.getElementById('resultsTable').innerHTML = res.message + '<br>'
//   });

//   let results = document.getElementById('resultsTable')


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('userInput').value
 
    if (Client.checkURL(formText)){
    console.log("::: Form Submitted :::") 
    getMeaningData("http://localhost:8080/checkURL", formText).then(() => updateUI());
    }};


//Helper functions: 
async function getMeaningData(url, userInput) {
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    });
  
    try {
      const newData = await response.JSON();
      console.log(newData);
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };  

const updateUI = async () => {
    const request = await fetch("http://localhost:8080/");
    try {
      const allData = await request.JSON();
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${allData.subjectivity}`;
    console.log(allData.subjectivity);
    document.getElementById("agreement").innerHTML = `Agreement: ${allData.agreement}`;
    console.log(allData.agreement);
    document.getElementById("irony").innerHTML = `Irony: ${allData.irony}`;
    console.log(allData.irony);
    document.getElementById("confidence").innerHTML = `Confidence ${allData.confidence}`;
    console.log(allData.confidence);
    } catch (error) {
      console.log("error", error);
    }
  };

  export { handleSubmit }