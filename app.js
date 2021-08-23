console.log("Linked")

const inputText = document.querySelector("#inputText")
const subBtn = document.querySelector("#subBtn")
const translatedText = document.querySelector("#translatedText")




subBtn.addEventListener("click",()=>{
    const urt = "https://api.funtranslations.com/translate/mandalorian.json"
    const newURL = urt + "?" + "text=" + inputText.value
    fetch(newURL)
    .then(res => res.json())
    .then(data => {
        let translated = data.contents.translated 
        translatedText.innerText = translated
        console.log
    })
    .catch(err => {
        translatedText.innerText= "Error is: " + err
        translatedText.style.backgroundColor = "red"
        console.log("Error is: ", res.err)})

})