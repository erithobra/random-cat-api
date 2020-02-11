const randomCatImage = document.querySelector('.randomCatImage')
const categoryCatImage = document.querySelector('.categoryCatImage')
const randomButton = document.querySelector('.randomButton')
const apiKey = 'c263e181-4eb2-4c10-a847-2272774d028c'
const form = document.querySelector('form')

const getRandomCat = () => {
    axios({
        url: 'https://api.thecatapi.com/v1/images/search',
        method: 'GET'
    })
    .then(response => {
        let randomCatUrl = response.data[0].url
        randomCatImage.setAttribute('src', randomCatUrl)
    })
}

const getCategoryCat = (event) => {
    event.preventDefault()
    let userInput = event.target.elements[0].value
    let categoryText = userInput.toLowerCase();	
    let categories = [
        {
            id: 5,
            name: "boxes"
        },
        {
            id: 15,
            name: "clothes"
        },
        {
            id: 1,
            name: "hats"
        },
        {
            id: 14,
            name: "sinks"
        },
        {
            id: 2,
            name: "space"
        },
        {
            id: 4,
            name: "sunglasses"
        },
        {
            id: 7,
            name: "ties"
        }
    ]

    let category = categories.find(category => {
        return categoryText == category.name || categoryText == category.id;
    });

    console.log(category)

    axios({
        url: `https://api.thecatapi.com/v1/images/search?category_ids=${category.id}`,
        method: 'GET',
        headers: {
            'x-api-key': `${apiKey}`
        }
    })
    .then(response => {
        console.log(response)
        categoryCatImage.setAttribute('src', response.data[0].url)
    })
}

randomButton.addEventListener('click', getRandomCat)
form.addEventListener('submit', getCategoryCat)
