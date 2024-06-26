// const { SerialPort } = require("serialport");
// const { ReadlineParser } = require("@serialport/parser-readline");
// const { Server } = require("socket.io");
// const http = require("http");

// const express = require("express");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// app.use(express.json());


// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/views/index.html");
// });

// io.on("connection", (socket) => {
//     console.log("connected...");
//     socket.on("disconnect", () => {
//         console.log("disconnect");
//     });
// });

// server.listen(3000, () => {
//     console.log("server on!");
// });

// const port = new SerialPort({
//     path: "COM3",
//     baudRate: 9600,
// });

// const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

// parser.on("data", (result) => {
//     console.log("data dari arduino -> ", result);
//     io.emit("data", { data: result });
// });

// app.post("/arduinoApi", (req, res) => {
//     const data = req.body.data;
//     port.write(data, (err) => {
//         if (err) {
//             console.log('err: ', err);
//             res.status(500).json({ error: "write data error" });
//         }
//         console.log("data terkirim ->", data);
//         res.end();
//     });
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const { Server } = require("http");
// const { Server: SocketServer } = require("socket.io");
// const { log } = require("console");

// const app = express();
// const httpServer = Server(app);
// const io = new SocketServer(httpServer);

// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/views/index.html");
// });

// io.on("connection", (socket) => {
//     console.log("WebSocket connected...");
//     socket.on("disconnect", () => {
//         console.log("WebSocket disconnected");
//     });
// });

// httpServer.listen(3000, () => {
//     console.log("Server listening on port 3000");
// });

// // Memproses permintaan POST dari ESP32 atau klien lainnya
// app.post("/data", (req, res) => {
//     // const source = req.body.source; // Identifikasi sumber data
//     // console.log(req);
//     const data = req.body.data; // Ambil data dari permintaan
//     // Log data yang diterima
//     console.log(`Data `, data);

//     // Mengirim data ke semua klien yang terhubung melalui WebSocket
//     io.emit("data",{data: data });

//     // Respon dengan pesan sukses
//     res.json({ message: "Data diterima oleh server" });
// });

// const { Server } = require("socket.io");
// const http = require("http");
// const express = require("express");
// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// const WiFiClient = require("wifi-client-library"); // Contoh pustaka untuk modul WiFi ESP8266

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/views/index.html");
// });

// io.on("connection", (socket) => {
//     console.log("connected...");
//     socket.on("disconnect", () => {
//         console.log("disconnect");
//     });
// });

// server.listen(3000, () => {
//     console.log("server on!");
// });

// const wifiClient = new WiFiClient("localhost", 3000); // Ganti dengan alamat IP dan port ESP8266 Anda

// wifiClient.on("data", (result) => {
//     console.log("data dari ESP8266 -> ", result);
//     io.emit("data", { data: result });
// });

// app.post("/arduinoApi", (req, res) => {
//     const data = req.body.data;
//     wifiClient.write(data, (err) => {
//         if (err) {
//             console.log('err: ', err);
//             res.status(500).json({ error: "write data error" });
//         }
//         console.log("data terkirim ->", data);
//         res.end();
//     });
// });

// thala
// const { Server } = require("socket.io");
// const http = require("http");
// const express = require("express");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// app.use(express.json());



// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/views/proses.html");
// });



// io.on("connection", (socket) => {
//     console.log("connected...");
//     socket.on("disconnect", () => {
//         console.log("disconnect");
//     });
// });

// server.listen(3000, () => {
//     console.log("server on!");
// });

// const { Server } = require("socket.io");
// const http = require("http");
// const express = require("express");
// const path = require("path");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);



// app.use(express.json());

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'proses.html'));
// });

// io.on("connection", (socket) => {
//     console.log("connected...");
//     socket.on("disconnect", () => {
//         console.log("disconnect");
//     });
// });

// server.listen(3000, () => {
//     console.log("server on!");
// });


// app.post("/arduinoApi", (req, res) => {
//     const data = req.body.data;
   

//     const options = {
//         hostname: '172.20.10.2',
//         port:80,
//         path: '/control',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain',
//             'Content-Length': data.length
//         }
//     };

  


//     const espReq = http.request(options, (espRes) => {
//         let responseData = '';

//         espRes.on('data', (chunk) => {
//             responseData += chunk;
//         });

//         espRes.on('end', () => {
//             if (espRes.statusCode !== 200) {
//                 console.error(`Error: ${responseData}`);
//                 res.status(500).json({ error: responseData });
//             } else {
//                 console.log('Send Data Success' , data);
                
//                 res.status(200).end();
//             }
//         });
//     });

//     espReq.on('error', (e) => {
//         console.error('Error: ', e);
//         res.status(500).json({ error: "write data error" });
//     });

//     espReq.write(data);
//     espReq.end();
// });

// sebelum
// const { Server } = require("socket.io");
// const http = require("http");
// const express = require("express");
// const path = require("path");
// require('dotenv').config()
// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// const portku = 3000;
// const hostnamebaru = '213.210.21.65';



// app.use(express.json());

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'proses.html'));
// });

// io.on("connection", (socket) => {
//     console.log("connected...");
//     socket.on("disconnect", () => {
//         console.log("disconnect");
//     });
// });

// server.listen(process.env.PORT,  () => {
//     console.log("server on!");
// });


// app.post("/arduinoApi", (req, res) => {
//     const data = req.body.data;
//     const options = {
//         hostname: '172.20.10.2',
//         // hostname: '213.210.21.65',    
//         // port: 3000,
//         port:80,
//         path: '/control',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain',
//             'Content-Length': data.length
//         }
//     };



//     const espReq = http.request(options, (espRes) => {
//         let responseData = '';

//         espRes.on('data', (chunk) => {
//             responseData += chunk;
//         });

//         espRes.on('end', () => {
//             if (espRes.statusCode !== 200) {
//                 console.error(`Error: ${responseData}`);
//                 res.status(500).json({ error: responseData });
//             } else {
//                 console.log('Send Data Success' , data, res);
                
//                 res.status(200).end();
//             }
//         });
//     });

//     espReq.on('error', (e) => {
//         console.error('Error: ', e);
//         res.status(500).json({ error: "write data error" });
//     });

//     espReq.write(data);
//     espReq.end();
// });



// const { Server } = require("socket.io");
// const http = require("http");
// const express = require("express");
// const path = require("path");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// // Middleware untuk parsing JSON
// app.use(express.json());

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'proses.html'));
// });

// io.on("connection", (socket) => {
//     console.log("connected...");
//     socket.on("disconnect", () => {
//         console.log("disconnect");
//     });
// });

// server.listen(3000, () => {
//     console.log("server on!");
// });

// app.post("/arduinoApi", (req, res) => {
//     const data = req.body.data;

//     if (!data) {
//         return res.status(400).json({ error: "Data is required" });
//     }

//     const options = {
//         hostname: '172.20.10.2',
//         port: 80,
//         path: '/control',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'text/plain',
//             'Content-Length': Buffer.byteLength(data)
//         }
//     };

//     const espReq = http.request(options, (espRes) => {
//         let responseData = '';

//         espRes.on('data', (chunk) => {
//             responseData += chunk;
//         });

//         espRes.on('end', () => {
//             if (espRes.statusCode !== 200) {
//                 console.error(`Error: ${responseData}`);
//                 res.status(500).json({ error: responseData });
//             } else {
//                 console.log('Send Data Success', data);
//                 io.emit('dataStatus', { status: 'success', data: data }); // Emit event to clients
//                 res.status(200).end();
//             }
//         });
//     });

//     espReq.on('error', (e) => {
//         console.error('Error: ', e);
//         res.status(500).json({ error: "write data error" });
//     });

//     espReq.write(data);
//     espReq.end();
// });







// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');
// const path = require('path');

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'proses.html'));
//     console.log("Served proses.html");

// });

// io.on("connection", (socket) => {
//     console.log("Client connected...");
//     socket.on("disconnect", () => {
//         console.log("Client disconnected");
//     });
//     socket.on("command", (data) => {
//         const timestamp = new Date();
//         console.log(`Command received at ${timestamp}: ${data}`);
//         // Kirim data ke ESP32 melalui HTTP atau WebSocket
//     });
// });


// server.listen(3000, () => {
//     console.log("Server running on port 3000!");
// });

// let latestData = "";

// app.post("/arduinoApi", (req, res) => {
//     console.log("POST request received at /arduinoApi");

//     const data = req.body.data;
//     if (!data) {
//         console.log("No data received in the request");
//         return res.status(400).json({ error: "Data is required" });
//     }

//     latestData = data;
//     console.log("Data received: ", data);
//     io.emit('dataStatus', { status: 'success', data: data });

//     // Log and respond to the client
//     res.status(200).json({ message: "Data received successfully" });
// });

// app.get("/arduinoApi", (req, res) => {
//     res.status(200).json({ data: latestData });
// });

//++++++++++++++++++++++websocket++++++++++++++++++++++++++++++++++++++++++++++++
// const express = require('express');
// const path = require('path');
// const WebSocket = require('ws');

// const app = express();
// const port = 3000;

// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'coba.html'));
//     console.log("Served coba.html");
// });

// const server = app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

// const wss = new WebSocket.Server({ server });

// const clients = [];

// wss.on('connection', (ws) => {
//     console.log('Client connected');
//     clients.push(ws);

//     ws.on('message', (message) => {
//         console.log('Received:', message.toString()); // Convert buffer to string

//         clients.forEach((client) => {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(message.toString()); // Convert buffer to string before sending
//             }
//         });
//     });

//     ws.on('close', () => {
//         console.log('Client disconnected');
//         const index = clients.indexOf(ws);
//         if (index > -1) {
//             clients.splice(index, 1);
//         }
//     });

//     ws.on('error', (error) => {
//         console.log('WebSocket Error:', error);
//     });
// });

// console.log('WebSocket server is listening on port 3000');


//+++++++HTTP+++++++
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Tambahkan middleware untuk parsing JSON

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'coba.html'));
    console.log("Served coba.html");
});

let latestMessage = ''; // Variabel untuk menyimpan pesan terbaru

app.post('/message', (req, res) => {
    latestMessage = req.body.message;
    console.log(`data received: ${latestMessage}`);
    res.sendStatus(200); // Kirim status sukses
});

app.get('/message', (req, res) => {
    res.json({ message: latestMessage }); // Kirim pesan terbaru sebagai JSON
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});









// const express = require('express');
// const path = require('path');

// const app = express();
// const port = 3000;

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json()); // Middleware untuk parsing JSON

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'coba.html'));
//     console.log("Served coba.html");
// });

// let latestData = ''; // Variabel untuk menyimpan data terbaru dari ESP32

// // Handler untuk menerima permintaan GET dari ESP32 pada endpoint /arduinoApi
// app.get('/arduinoApi', (req, res) => {
//     const serverReceiveTime = Date.now();
//     res.json({ data: latestData, serverReceiveTime: serverReceiveTime }); // Kirimkan data terbaru sebagai respons JSON
//     console.log(`Sent data to ESP32 at ${serverReceiveTime}`);
// });

// // Handler untuk menerima permintaan POST dari ESP32 pada endpoint /arduinoApi
// app.post('/arduinoApi', (req, res) => {
//     const serverReceiveTime = Date.now();
//     latestData = req.body.data; // Ambil data dari body permintaan POST
//     console.log(`Received data from ESP32 at ${serverReceiveTime}:`, latestData);
//     res.sendStatus(200); // Kirim status sukses
// });

// const server = app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

// console.log('WebSocket server is listening on port 3000');

















//====================MQTT=================================

// const mqtt = require('mqtt');
// const express = require('express');
// const app = express();
// const path = require('path');

// const MQTT_SERVER = 'mqtt://mqtt-broker-url'; // Ganti dengan URL MQTT broker
// const MQTT_TOPIC = 'lamp/control'; // Topik MQTT untuk kontrol lampu

// // Inisialisasi server MQTT
// const client = mqtt.connect(MQTT_SERVER);

// client.on('connect', () => {
//   console.log('Connected to MQTT broker');
//   client.subscribe(MQTT_TOPIC, (err) => {
//     if (err) {
//       console.error('Error subscribing to topic', err);
//     }
//   });
// });

// client.on('message', (topic, message) => {
//   console.log(`Received message on topic ${topic}: ${message.toString()}`);
//   // Di sini bisa ditambahkan logika untuk mengirim perintah ke Arduino
//   // Misalnya, mengirimkan pesan ke perangkat ESP32 untuk mengontrol lampu
// });

// // Middleware untuk menyajikan file statis dari direktori 'public'
// app.use(express.static(path.join(__dirname, 'public')));

// // Endpoint untuk menerima perintah dari web ke ESP32 melalui MQTT
// app.post('/arduinoApi', (req, res) => {
//   const { data } = req.body;
//   client.publish(MQTT_TOPIC, data);
//   res.send(`Command '${data}' sent to MQTT broker`);
// });

// // Jalankan server pada port tertentu
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

