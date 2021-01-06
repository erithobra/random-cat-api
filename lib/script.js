console.log("js file linked");

axios({
    url: "https://api.thecatapi.com/v1/images/search",
    method: "get"
})

.then((resp) => {
    console.log(resp);
    console.log(resp.data[0].url);
})
.catch(() => {
    console.error(err);
})
.finally(() => {
    console.log("aaaand done");
})