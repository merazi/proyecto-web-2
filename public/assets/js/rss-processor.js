const RSS_URL = 'https://www.nasa.gov/news-release/feed/';

fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
	console.log(data);
	const items = data.querySelectorAll("item");
	let html = ``;
	console.log(data.querySelector("link"))
	items.forEach(el => {
	    html += `
        <article>
          <!--<img src="${el.querySelector("link").innerHTML}image/large.jpg" alt=""/>-->
          <h1 style="display: inline-block;">
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              <img src="https://img.icons8.com/color/50/nasa.png" alt="" style="vertical-align: middle;"/>
              ${el.querySelector("title").innerHTML}
            </a>
          </h1>
          <p>${el.querySelector("description").innerHTML}</p
        </article>
      `;
	});
	document.getElementById("contents").insertAdjacentHTML("beforebegin", html);
    });
