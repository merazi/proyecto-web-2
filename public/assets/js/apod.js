// picture of the day getter

var nasa_api='https://api.nasa.gov/planetary/apod?api_key=LwR4XCfJr4l944aaVDXFpmeobpKSwIcqFTRfI7Oi&start_date=2024-01-01&end_date=2024-02-10&thumbs=True';

function parse_apod(data) {
    let html = ``;
    for (let i=data.length-1; i>0; i--){
	var truncatedDescription = data[i].explanation.substring(0, 300);
	truncatedDescription += '[...]';
	html +=`<div class="apod-card">
	      <a href="` + data[i].url + `"><img class="apod-element" src="` + data[i].url /* this is ugly but it works */
	    + `" style="background-image:url('` + data[i].thumbnail_url + `')"></img></a>
	      <div class="apod-card-information">
	  	<h1>` + data[i].title + `</h1>
	  	<p>` + truncatedDescription + `</p>
	  	<p>` + data[i].date + `</p>
	      </div>
	    </div>`
    }
    return html;
}

function add_to_website (html) {
    document.getElementById("contents").insertAdjacentHTML("afterbegin", html);
    document.getElementById("loading").remove();
}

document.getElementById("contents").insertAdjacentHTML("afterbegin", `<h2 id="loading">Loading...</h2>`)

fetch(nasa_api).then(response => {
    return response.json();
}).then(data => {
    // Work with JSON data here
    let html = parse_apod(data);
    add_to_website(html);
}).catch(err => {
    console.log(err.message);
    // Do something for an error here
});
