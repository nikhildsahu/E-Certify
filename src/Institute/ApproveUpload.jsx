import React, { Component } from "react";

class ApproveUpload extends Component {
  state = {
    s: "0x8bb6d82f6ec5ea7a651f96f7b3353afb7caa8a47"
  };
  verify = async () => {
    const { accounts, contract } = this.props;

    await contract.methods
      .approveUploadbyInstitute(this.state.s, this.state.s)
      .send({ from: accounts[0] });
    var t = await contract.methods.getUploadReqList(this.state.s).call();
    console.log(t);
    var r = await contract.methods.getAadhar().call();
    console.log(r);
  };

  render() {
    return (
      <div>
        <button onClick={this.verify.bind(this)}>verify</button>
      </div>
    );
  }
}

export default ApproveUpload;
