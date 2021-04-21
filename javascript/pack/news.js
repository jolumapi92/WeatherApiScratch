var requestOptions = {
    method: 'GET'
};


let num = Math.random()
let randomNumber = Math.ceil(num * num * 10 )

let articleTitle1 = document.querySelector('#title-article-1')
let articleContent1 = document.querySelector('#content-article-1')

let articleTitle2 = document.querySelector('#title-article-2')
let articleContent2 = document.querySelector('#content-article-2')

let articleTitle3 = document.querySelector('#title-article-3')
let articleContent3 = document.querySelector('#content-article-3')

let articleTitle4 = document.querySelector('#title-article-4')
let articleContent4 = document.querySelector('#content-article-4')

let articleTitle5 = document.querySelector('#title-article-5')
let articleContent5 = document.querySelector('#content-article-5')

let articleTitle6 = document.querySelector('#title-article-6')
let articleContent6 = document.querySelector('#content-article-6')


fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=GZXll423rODlAPqfOTa4nNHwyXtQs31K", requestOptions)
    .then(response =>
    response.text())
    .then(result => {
    console.log(JSON.parse(result), 'result')
    newsData = JSON.parse(result)

    articleTitle1.innerText = newsData.results[randomNumber].section
    articleContent1.innerText = newsData.results[randomNumber].abstract

    articleTitle2.innerText = newsData.results[1].section
    articleContent2.innerText = newsData.results[1].abstract

    articleTitle3.innerText = newsData.results[2].section
    articleContent3.innerText = newsData.results[2].abstract

    articleTitle4.innerText = newsData.results[3].section
    articleContent4.innerText = newsData.results[3].abstract

    articleTitle5.innerText = newsData.results[4].section
    articleContent5.innerText = newsData.results[4].abstract

    articleTitle6.innerText = newsData.results[5].section
    articleContent6.innerText = newsData.results[5].abstract
})