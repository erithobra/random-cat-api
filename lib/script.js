console.log("js file linked");

axios({
    url: "https://api.thecatapi.com/v1/images/search",
    method: "get"
})

.then((resp) => {
    console.log(resp);
    console.log(resp.data[0].url);

    const randomButton = document.querySelector("#randomButton")

    randomButton.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("button click!");
        
        const randomImage = document.querySelector(".randomCat img");
        randomImage.src = resp.data[0].url;
    })
})
.catch(() => {
    console.error(err);
})
.finally(() => {
    console.log("aaaand done");
})