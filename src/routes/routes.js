var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("MyMovies API")
    })
  }
  
  module.exports = appRouter