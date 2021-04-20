let header = document.querySelector('#header-page')
console.log(header)
window.addEventListener('keydown', function(event){
    if(event.key === "Enter") {
        header.innerText = "😎🥳⛪️"
    } else if(event.key === "Backspace") {
        header.innerText = "Your weather again!"
    } else if(event.ctrlKey) {
        header.innerText = "Welcome to your weather"
    }
});