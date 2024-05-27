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

const { Server } = require("socket.io");
const http = require("http");
const express = require("express");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'proses.html'));
});

io.on("connection", (socket) => {
    console.log("connected...");
    socket.on("disconnect", () => {
        console.log("disconnect");
    });
});

server.listen(3000, () => {
    console.log("server on!");
});


app.post("/arduinoApi", (req, res) => {
    const data = req.body.data;

    const options = {
        // hostname: '172.20.10.2',
        hostname: '213.210.21.65',    
        port: 3000,
        path: '/control',
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            'Content-Length': data.length
        }
    };

    const espReq = http.request(options, (espRes) => {
        let responseData = '';

        espRes.on('data', (chunk) => {
            responseData += chunk;
        });

        espRes.on('end', () => {
            console.log("Data terkirim ->", responseData);
            res.status(200).end();
        });
    });

    espReq.on('error', (e) => {
        console.error('Error: ', e);
        res.status(500).json({ error: "write data error" });
    });

    espReq.write(data);
    espReq.end();
});

