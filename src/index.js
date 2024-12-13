function generatePoem(event){
    event.preventDefault();

    new Typewriter ("#poem",{
        strings:"la tombe dit a la rose",
        autostart:true,
        delay: 1,
        cursor:"",
    });
}

let poemElement=document.querySelector("#poem-generate-form");
poemElement.addEventListener("submit",generatePoem);