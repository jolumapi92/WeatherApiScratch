fetch("https://swapi.dev/api/people/")
    .then(response =>
    response.text())
    .then(result => {
    console.log(JSON.parse(result), 'result')
    starWarsData = JSON.parse(result)
    
    console.log(starWarsData.results[0])

    })