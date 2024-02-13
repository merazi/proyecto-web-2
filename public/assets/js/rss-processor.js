const RSS_URL = 'https://www.nasa.gov/news-release/feed/';

fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
	const items = data.querySelectorAll("item");
	let html = ``;
	items.forEach(el => {
	    html += `
        <article>
          <h3>
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
