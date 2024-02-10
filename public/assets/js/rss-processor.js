const RSS_URL = 'https://www.nasa.gov/news-release/feed/';

fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
	console.log(data);
	const items = data.querySelectorAll("item");
	let html = ``;
	items.forEach(el => {
	    html += `
        <article>
          <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
          <h2>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
          </h2>
        </article>
      `;
	});
	content.insertAdjacentElement("afterbegin", html);
    });
