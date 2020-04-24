const { Framework } = require('@vechain/connex-framework')
const { Driver, SimpleNet, SimpleWallet, options } = require('@vechain/connex.driver-nodejs')
const wallet = new SimpleWallet()
var connex;
connexfun();
async function connexfun() {
    return new Promise(async(reslove, reject) => {
        const value = await Driver.connect(new SimpleNet('https://sync-testnet.vechain.org'), wallet);
        console.log(value);

        connex = new Framework(value);
        console.log(connex)
        reslove(connex);
    })
}


let connexfun2 = new Promise(function(resolve, reject) {    
    const value = await Driver.connect(new SimpleNet('https://sync-testnet.vechain.org'), wallet);
        console.log(value);

        connex = new Framework(value);
        console.log(connex)
        if(resolve){
            resolve(connex)
        }if(reject){
            resolve(reject)
        }
  });

module.exports.connexfun = connexfun;
module.exports.connexfun2 = connexfun2;