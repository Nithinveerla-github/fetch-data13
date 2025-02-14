let get = document.getElementById("text1");
get.addEventListener("click", async () => {
    try {
        let data = await fetch("https://node-13server.onrender.com/fake");
        let response = await data.json();
        let container = document.getElementById("container1");
        container.innerHTML = ""; // Clear previous data

        response.forEach(ele => {
            let subcontainer = document.createElement("div");
            subcontainer.classList.add("subcontainer");

            subcontainer.innerHTML = `
                <h2>${ele.category}</h2>
                <img src="${ele.image}" alt="${ele.category}">
                <p>${ele.description}</p>
                <h4>$${ele.price}</h4>
            `;
            container.appendChild(subcontainer);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

let post = document.getElementById("text2");
post.addEventListener("click", async () => {
    try {
        let data = await fetch("https://node-13server.onrender.com/dummy", { method: "POST" });
        let response = await data.json();
        let container = document.getElementById("container2");
        container.innerHTML = ""; // Clear previous data

        response.quotes.forEach(ele => {
            let subcontainer2 = document.createElement("div");
            subcontainer2.classList.add("subcontainer2");

            subcontainer2.innerHTML = `
                <h4>(QUOTE) - ${ele.quote}</h4>
                <h4>AUTHOR: ${ele.author}</h4>
            `;
            container.appendChild(subcontainer2);
        });
    } catch (error) {
        console.error("Error fetching quotes:", error);
    }
});
