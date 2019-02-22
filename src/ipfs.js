const Ipfs = require("ipfs-api");
const ip = new Ipfs({ host: "ipfs.infura.io", port: 5001, protocol: "https" });
export default ip;
