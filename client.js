import net from "net";
import readline from 'readline'

const r1 = readline.createInterface(process.stdin, process.stdout);

const namePromise = new Promise((resolve, reject) => {
  r1.question("Enter your name?\n", (name) => {
    resolve(name);
  });
});
namePromise.then((name) => {
  const client = net.createConnection({ port: 3000 }, () => {
    console.log("Connected with server");
    
    r1.on('line', (data) => {
        client.write(name + " : " + data)
    })

    client.on("data", (data) => {
      console.log(data.toString());
    });
    client.on("error", (data) => {
      console.log("Connection terminated");
    });
  });
});
