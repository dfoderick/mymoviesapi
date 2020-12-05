const { HandCashCloudAccount, AppAuthorization, Environments} 
    = require('@handcash/handcash-connect-beta')

const ENV = Environments.beta
const MYMOVIES = '5fbd42a24f14f70c6a0b1510'

const testpay = async () => {
    const token = '4202bdbb6ecbccb5fa0ced19a0b2c0d83365780beed72c5d59f05e3854f9e4d0'
    const cloudAccount = HandCashCloudAccount.fromAuthToken(token, ENV)
    const paymentParameters = {
    description: 'mymovies api',
    appAction: 'play',
    payments: [
        { to: 'fullcycle', currencyCode: 'USD', amount: 0.01 },
    ]
    }
    const paymentResult = await cloudAccount.wallet.pay(paymentParameters)
    return paymentResult
}

; ( async () => {
    const payment = await testpay()
    console.log(payment)
})()