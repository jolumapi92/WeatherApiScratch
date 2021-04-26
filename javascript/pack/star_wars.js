fetch("https://swapi.dev/api/people/")
.then(response =>
response.text())
.then(result => {
console.log(JSON.parse(result), 'result')
starWarsData = JSON.parse(result)
console.log(starWarsData.results[0])
});



let selector = document.querySelector('#collection-characters');
let nameC = document.querySelector('#name')
let birth = document.querySelector('#birth')
let eye = document.querySelector('#eye')
let gender = document.querySelector('#gender')
let height = document.querySelector('#height')

selector.addEventListener('change', function(event){
    selected = event.target.value;

    nameC.innerText = `Name: ${starWarsData.results[selected]["name"]}`
    birth.innerText = `Birth Year: ${starWarsData.results[selected]["birth_year"]}`
    eye.innerText = `Eye Color: ${starWarsData.results[selected]["eye_color"]}`
    gender.innerText = `Gender: ${starWarsData.results[selected]["gender"]}`
    height.innerText = `Height: ${starWarsData.results[selected]["height"]}`
})



