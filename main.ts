import { Socket } from "node:net";
import tls from "node:tls";

const socket = new Socket();
socket.connect(443, "google.com");
socket.on("connect", () => {
  const secure = tls.connect({ socket });
  secure.on("secureConnect", () => console.log("tls connected"));
})
