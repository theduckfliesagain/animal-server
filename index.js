// Get buttons from HTML
const btns = document.querySelectorAll("[type='button']");

// Add event listener to each btn
btns.forEach(btn => {
    btn.addEventListener('click', getRequestAsync);
})

// promise version
// function getRequest(e){
//     let page = e.target.value;
//     let url = `http://localhost:3000/${page}`;

//     fetch(url)
//         .then(r => r.json())
//         .then(console.log);
// }


// async version
async function getRequestAsync(e){
    // Get the value of the clicked btn
    let page = e.target.value;
    let url = `http://localhost:3000/${page}`;
    try {
        const response = await fetch(url);
        const jsonData = await response.json();
        displayInfo(jsonData);
    } catch (err) {
        console.log(err)
        displayError(err);
    }
    
}

function displayInfo(jsonData){
    console.log(jsonData);
    const info = document.createElement("div");
    const content = document.createTextNode(Object.values(jsonData));
    info.appendChild(content);

    document.getElementById("fetch-btns").append(info);
}

function displayError(err){
    const info = document.createElement("div");
    info.className = "error";
    const text = `Error: ${err}. Is the server running?`
    const content = document.createTextNode(text);
    info.appendChild(content);

    document.getElementById("fetch-btns").append(info);
}


console.log(btns);