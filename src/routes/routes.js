const { HandCashCloudAccount, AppAuthorization, Environments} 
    = require('@handcash/handcash-connect-beta')

const ENV = Environments.beta
const MYMOVIES = '5fbd42a24f14f70c6a0b1510'

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("MyMovies API")
    })
    app.get("/loginredirect", async function(req, res) {
        const redirectUrl = await AppAuthorization.getRedirectionLoginUrl(
            MYMOVIES, ENV  
        )
        res.status(200).send(redirectUrl)
    })
    app.get("/pay", async function(req, res) {
        const cloudAccount = HandCashCloudAccount.fromAuthToken(req.auth, ENV);
        const paymentParameters = {
        description: 'mymovies api',
        appAction: 'play',
        payments: [
            { to: 'fullcycle', currency: 'USD', amount: 0.01 },
        ]
        }
        const paymentResult = await cloudAccount.wallet.pay(paymentParameters);
        console.log(paymentResult)
        res.status(200).send(paymentResult)
    })
}
  
  module.exports = appRouter