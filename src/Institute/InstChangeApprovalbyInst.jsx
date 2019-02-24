import React, { Component } from "react";

class Inst extends Component {
  state = {
    instname: "0xcdac9ddd2c5d0441a60a5a1cd27c54aabd889cda",
    s: "0x8bb6d82f6ec5ea7a651f96f7b3353afb7caa8a47"
  };
  verify = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ owner1: response[0] });
    this.setState({ owner2: response[1] });
    console.log("current owners");
    console.log("owner:Institute:" + response[1]);
    console.log("owner:Student:" + response[0]);
    await contract.methods
      .approveChangeOwnerINSTReqbyInst(this.state.s, this.state.s)
      .send({ from: accounts[0] });
    const response1 = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ owner1: response1[0] });
    this.setState({ owner2: response1[1] });
    console.log(" new owners");
    console.log("owner:Institute:" + response[1]);
    console.log("owner:Student:" + response[0]);
  };
  render() {
    return (
      <div>
        <button onClick={this.verify.bind(this)}>verify</button>
      </div>
    );
  }
}

export default Inst;
