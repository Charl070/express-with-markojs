import express from "express";
import { configure } from "lasso";
import { serveStatic } from "lasso/middleware";
import markoMiddleware from "@marko/express";
import homePage from "./pages/home";

configure({
  plugins: [
    "lasso-marko" 
  ],
});

express()
  .use(markoMiddleware())
  .use(serveStatic())
  .get("/", homePage)
  .listen(8080, function () {
    console.log(
      "Server started! Try it out:\nhttp://localhost:" +
        this.address().port +
        "/"
    );

    if (process.send) {
      process.send("online");
    }
  });
