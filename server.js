import net from "net";

const sockets = [];

function publish(data) {
  sockets.forEach((socket) => socket.write(data));
}

const server = net.createServer((socket) => {
  console.log("Connection Established");

  sockets.push(socket);

  socket.on("data", (data) => {
    publish(data);
  });
  socket.on("error", (data) => {
    console.log("Connection with client lost");
  });
});

server.listen(3000, () => {
  console.log("Server started at port 3000");
});
