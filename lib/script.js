console.log("js file linked");

const randomButton = document.querySelector("#randomButton");
const searchButton = document.querySelector("#searchButton");
let apiURL = "https://api.thecatapi.com/v1/images/search"


// function makes sure that apiURL for random cat image is passed to apiFunction
randomButton.addEventListener("click", function(e) {
    e.preventDefault();
    apiURL = "https://api.thecatapi.com/v1/images/search"
    apiFunction(apiURL);
})

// function makes sure that apiURL for selected category cat image is passed to apiFunction
searchButton.addEventListener("click", function(e) {
    e.preventDefault();
    const category = document.querySelector("select");
    let categoryValue = category.value;
    if (categoryValue > 0) {
        apiURL = `https://api.thecatapi.com/v1/images/search?category_ids=${categoryValue}`
    } else {return;}
    apiFunction(apiURL);
})

// function uses apiURL passed from event listeners in order to run appropriate api data
function apiFunction(myAPI) {
    axios({
        url: `${myAPI}`,
        method: "get",
        headers: {
            "x-api-key": "ba39db58-32e9-4119-8c1c-64f5a5180b82"
        }
    })
    .then((resp) => {
        const randomImage = document.querySelector(".randomCat img");
        randomImage.src = resp.data[0].url;
        })
    .catch(() => {
        console.error(err);
    })
    .finally(() => {
        console.log("aaaand done");
    })
}
