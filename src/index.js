function displayPoem(response){
console.log("poem generated");

new Typewriter("#poem",{
    strings:response.data.answer,
    autoStart:true,
    delay:1,
    cursor:"",
});
}

function generatePoem(event){
    event.preventDefault();
    let instructionsInput=document.querySelector("#user-instructions");
    let apiKey= "4b848ft03of375a4da055d8efff97074";
    let context=" you are a romantic poem expert and love to writeshort poem.Do not include html at the start of the poem but use the Html format in the poem.Your mission is to generate a 4 line poem using basic HTML format.Make sure to follow the user instructions.Do not include the title.Sign the poem wiyh 'SheCodes AI'inside a <strong> element at the end of the poem";
    let prompt=`User instruction:Generate a French Poem ${instructionsInput.value}`;
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    console.log("generating poem");

    axios.get(apiUrl).then(displayPoem);
}

let poemElement=document.querySelector("#poem-generator-poem");
poemElement.addEventListener("submit",generatePoem);
