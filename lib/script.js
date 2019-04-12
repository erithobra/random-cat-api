let randomURL = 'https://api.thecatapi.com/v1/images/search'
let randomButton = document.querySelector('.randomButton')

let searchURL = 'https://api.thecatapi.com/v1/images/search?category_ids='
let searchButton = document.querySelector('.searchButton')

randomButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  fetch(randomURL)
    .then(res => {
      return res.json()
    })
    .then(json => {
      console.log(json)
      //   let catDiv = document.querySelector('.randomCat')
      let catImage = document.querySelector('.randomCatImage')
      catImage.src = `${json[0].url}`
    //   catDiv.appendChild(catImage)
    })
})

searchButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  let category = document.querySelector('input').value
  fetch(searchURL + category, {
    headers: {
      'x-api-key': 'd249b90b-3df0-40d4-8ee3-7d81591b024c'
    }
  })
    .then(res => {
      return res.json()
    })
    .then(json => {
      console.log(json)
      let categoryCatImage = document.querySelector('.categoryCatImage')
      categoryCatImage.src = `${json[0].url}`
    })
})
