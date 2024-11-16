const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("hello , world");
  } else if (req.url === "/user" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json");
    res.end(
      JSON.stringify({
        name: "john doe",
        age: 30,
        email: "eden9876102@gmail.com",
      })
    );
  } else {
    res.statusCode = 404;
    res.setHeader("content-type", "text/plain");
    res.end("not found");
  }
});
