import http from "http";
import app from "./app/app.js";
const PORT = process.env.SERVER_PORT || 8000;

//listen to server
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server Running on ${PORT}`));
