const { Framework } = require('@vechain/connex-framework')
const { Driver, SimpleNet, SimpleWallet, options } = require('@vechain/connex.driver-nodejs')
const wallet = new SimpleWallet()
var connex,value;
connexfun();
connexfun2();
async function connexfun() {
    return new Promise(async(reslove, reject) => {
        const value = await Driver.connect(new SimpleNet('https://sync-testnet.vechain.org'), wallet);
        console.log(value);

        connex = new Framework(value);
        console.log(connex)
        reslove(connex);
    })
}

async function connexfun2() {
try{
    value = await Driver.connect(new SimpleNet('https://sync-testnet.vechain.org'), wallet);
    console.log(value);    
}
catch (e) {
console.log(e)
}
finally{
    connex = new Framework(value);
    console.log(connex)
}

}
console.log("conn2",connexfun2())
module.exports.connexfun = connexfun;
module.exports.connexfun2 = connexfun2;