const url = require("url");

const inputURL = "https://example.com/path/page?name=Tirth&age=19";

const parsed = new url.URL(inputURL);

console.log("Protocol:", parsed.protocol);
console.log("Hostname:", parsed.hostname);
console.log("Pathname:", parsed.pathname);
console.log("Query Params:");

parsed.searchParams.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});


