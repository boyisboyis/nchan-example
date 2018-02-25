const http = require('http');
const ws = require('ws');

var server = http.createServer();
server.listen(8888, ()=>{
  (new ws.Server({server})).on('connection', (ws)=>{
    ws.on('message', (data)=>{
      console.log('ws: ', data);
      throw new Error('fffff'); // The proto will be abnormal after this 
      ws.send(JSON.stringify({proto:'res', data:'res ok'}));
    });
  });
  wsc.on('close', (code, message)=>{
    console.log('server close', code, message);
  });
  wsc.on('error', (error)=>{
    console.log('server error', error);
  });
});

var wsc = new ws(`ws://0.0.0.0:3001/sub`);
wsc.on('open', ()=>{
  console.log('client open');

});
wsc.on('message', (data, flags)=>{
  console.log('wsc: ', data);
});
wsc.on('close', (code, message)=>{
  console.log('client close', code, message);
});
wsc.on('error', (error)=>{
  console.log('client error', error);
});

