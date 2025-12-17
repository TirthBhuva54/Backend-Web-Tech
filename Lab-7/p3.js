const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  fs.readFile("about.txt", "utf8", (err, data) => {
    if (err) {
      res.end(`Error: ${err.message}`);
      return;
    }
    res.write(`data: ${data}`);
  });
  res.end("End")
});

server.listen(3000, () => {
  console.log("Server started @3000");
});
