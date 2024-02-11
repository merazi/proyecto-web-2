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
          <h3 style="display: inline-block;">
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              <p style="display: inline-block;">🚀</p>
              ${el.querySelector("title").innerHTML}
            </a>
          </h3>
          <p>${el.querySelector("description").textContent}</p
        </article>
      `;
	});
	document.getElementById("contents").insertAdjacentHTML("beforebegin", html);
    });
