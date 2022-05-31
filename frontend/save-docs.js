setInterval(save, 3000);

function save(){
    const textarea = document.querySelector('#doc-text')
    const docText = textarea.value

    const saveText = document.querySelector("#save-in-progress-text");
    saveText.classList.remove('hidden')
    
    await fetch("http://127.0.0.1:9000/", {
        method: "POST",
        body: docText
    })
    saveText.classList.add('hidden') 
}