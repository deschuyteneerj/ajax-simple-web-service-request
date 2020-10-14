/** I should have use this XMLHttpRequest (AJAX) instead of fetch
    //Create the XHR Object
    let xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://api.github.com/users', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                    console.log(JSON.parse(this.responseText));
        }
                }
    //call send
    xhr.send();
    //Common Types of HTTP Statuses
    // 200: OK
    // 404: ERROR
    // 403: FORBIDDEN
*/

    function fetchData() {
        // Call the fetch function:
        fetch('https://thatsthespir.it/api')
        // Convert fetch promise into JSON:
        .then(response => response.json())
        // Send JSON data into a callback function:
        .then(data => renderQuote(data));
    }

    function renderQuote(data) {
            const p = document.getElementById('p');
            const footer = document.getElementById('footer');
            const img = document.getElementById('img');
            // Grab data and insert it into elements:
            p.innerHTML = '"' + data.quote + '"';
            footer.innerHTML = data.author;
            img.src = data.photo;

    }
    // Call the function that will automatically run renderQuote() also:
    fetchData();
    // Create an event on the button to generate a new random quote:
    document.getElementById('generate').addEventListener('click', fetchData);