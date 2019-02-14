document.getElementById("adviceSubmit").addEventListener("click", function (event) {
    event.preventDefault();

    const url = "https://api.adviceslip.com/advice";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let adviceString = "";
            adviceString += "<p class=\"advice\">\t" + json.slip.advice + "</p>";
            document.getElementById("adviceReturn").innerHTML = adviceString;
        });
});