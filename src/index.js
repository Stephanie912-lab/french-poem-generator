function displayPoem(response){
console.log("poem generated");
new Typewriter("#poem",{
    strings:response.data.answer,
    autostart:true,
    delay:1,
    cursor:"",
});
}

function generatePoem(event){
    event.preventDefault();
    let instructionsInput=document.querySelector("#user-instructions");
    let apiKey= "4b848ft03of375a4da055d8efff97074";
    let context=`Generate a French Poem ${instructionsInput.value}`;
    let prompt="you are a romantic poem expert and love to writeshort poem.Your mission is to generate a 4 line poem in basic HTML.Make sure to follow the user instructions";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    console.log("generating poem");

    axios.get(apiUrl).then(displayPoem);
}

let poemElement=document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit",generatePoem);
