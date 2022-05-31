const googleSearchButton = document.querySelector("#btn-google-search")

googleSearchButton.addEventListener("click", function(event){
    event.preventDefault();
    
    const form = document.querySelector("#google-search-form");

    const searchTerm = form.querySelector("input[name='q']").value;

    if(searchTerm === ""){
        alert("Írj már be valamit!") 
    } else {
        form.submit()
    }
})


console.log("btn-google-search");