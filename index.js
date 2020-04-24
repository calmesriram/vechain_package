const { Framework } = require('@vechain/connex-framework')
const { Driver, SimpleNet, SimpleWallet, options } = require('@vechain/connex.driver-nodejs')
const wallet = new SimpleWallet()
var connex;
connexfun();
function connexfun() {
    return new Promise(async(reslove, reject) => {
        const value = await Driver.connect(new SimpleNet('https://sync-testnet.vechain.org'), wallet);
        console.log(value);

        connex = new Framework(value);
        console.log(connex)
        reslove(connex);
    })
}
// connexfun();
module.exports.connexfun = connexfun;