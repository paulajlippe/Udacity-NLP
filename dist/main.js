var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(){var e=URL;return!0==="(?:https?)://(w+:?w*)?(S+)(:d+)?(/|/([w#!:.?+=&%!-/]))?".test(e)?"Valid URL":"Invalid URL"}function o(e){e.preventDefault();let t=document.getElementById("userInput").value;Client.checkURL(t)&&(console.log("::: Form Submitted :::"),async function(e,t){const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.JSON();return console.log(e),e}catch(e){console.log("error",e)}}("http://localhost:8080/checkURL",t).then((()=>c())))}e.r(t),e.d(t,{checkURL:()=>n,handleSubmit:()=>o});const c=async()=>{const e=await fetch("http://localhost:8080/");try{const t=await e.JSON();document.getElementById("subjectivity").innerHTML=`Subjectivity: ${t.subjectivity}`,console.log(t.subjectivity),document.getElementById("agreement").innerHTML=`Agreement: ${t.agreement}`,console.log(t.agreement),document.getElementById("irony").innerHTML=`Irony: ${t.irony}`,console.log(t.irony),document.getElementById("confidence").innerHTML=`Confidence ${t.confidence}`,console.log(t.confidence)}catch(e){console.log("error",e)}};Client=t})();