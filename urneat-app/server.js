// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// const app = express();
//
// app.use('/ECP_20.12_A/aspx1/API?APICommand=JasmineAnica_ProductMasterData&APIToken=fc8cc7c6e4c43d759d6ff387a62f5643', createProxyMiddleware({ target: 'https://dsdlink.com', changeOrigin: true }));
// app.listen(3000);

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
//
// // console.log that your server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));
//
// // create a GET route
// app.get('/ECP_20.12_A/aspx1/API?APICommand=JasmineAnica_ProductMasterData&APIToken=fc8cc7c6e4c43d759d6ff387a62f5643', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

import proxy from 'http-proxy-middleware';

const express = require('express');
const app = express();

let options = {
   target: 'dsdlink.com', //api.example.com
   changeOrigin: true,
   logLevel: ‘debug’,
   onError: function onError(err, req, res) {
   console.log(‘Something went wrong with the proxy middleware.’, err)
   res.end();
 }
};

app.use(‘/ECP_20.12_A/aspx1/API?APICommand=JasmineAnica_ProductMasterData&APIToken=fc8'cc7c6e4c43d759d6ff387a62f5643', proxy(options)); //only forward calls with ‘/api’ route
