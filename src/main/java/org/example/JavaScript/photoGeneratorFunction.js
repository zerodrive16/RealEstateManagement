function httpRequest() {

    const apiKey = "7nQ9HYoAbyT-q5_NATX7MiRYH2-oYnJSCXAmLL9Ibq4";
    const category = "real-estates";
    const apiURL = `https://api.unsplash.com/photos/random?query=${category}&client_id=${apiKey}`;

    fetch(apiURL).then(response => {
        if(!response.ok) {
            throw new Error("Network or API Call was not ok");
        }
        return response.json();
    }).then(data => {
        console.log(data);

        // sets the size of the picture
        const width = 507;
        const height = 325;
        const imageUrl = `${data.urls.raw}&w=${width}&h=${height}&fit=crop`;

        // using innerHTML to output picture as HTML
        document.getElementById("apiTest").innerHTML = `
                    <img class="img-fluid rounded-start" src="${imageUrl}" alt="${data.alt_description}" />
                `;
    }).catch(error => {
        console.error("Error: ", error);
    });
}
httpRequest();