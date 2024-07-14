fetch("@components/layouts/header.html")
  .then((response) => response.text())
  .then((html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const header = doc.querySelector("header");
    document.getElementById("header-container").appendChild(header);
  })
  .catch((error) => console.error("Failed to fetch header.html", error));
