import { dgram } from "dgram";

export const udp = ({ packet, host, port }) => {
  return new Promise((resolve, reject) => {
    const socket = dgram.createSocket("udp4");
    let buffer = new Buffer();

    socket.on("message", resp => {
      buffer = Buffer.concat(buffer, resp);
    });

    socket.on("close", () => {
      resolve(buffer.toString());
    });

    socket.on("error", err => {
      reject(err);
    });

    const req = Buffer.from(packet);
    socket.send(req, 0, req.length, port, host);
  });
};
