import React, { Component } from "react";
import { Grid, Typography, Card, Button } from "@material-ui/core";
class ApproveUpload extends Component {
  state = {
    s: "0x8bb6d82f6ec5ea7a651f96f7b3353afb7caa8a47",
    h: []
  };

  verify = async () => {
    const { accounts, contract } = this.props;

    const re = await contract.methods.getInstitutesWallet(accounts[0]).call();
    console.log("KK", re);
    var h = [];
    re.map(async re => {
      var assa = await contract.methods.getUploadReqList(re).call();
      console.log("AA", re);

      var getDet = await contract.methods.getProfile(re).call();
      h.push({ a: re, b: assa[0], name: getDet[0], pic: getDet[1] });
    });

    this.setState({ h: h });
    console.log("AS", h);

    // var t = await contract.methods.getUploadReqList(this.state.s).call();
    // console.log(t);
    // var r = await contract.methods.getAadhar().call();
    // console.log(r);
  };

  componentWillMount = async () => {
    this.verify();
  };

  appro = async a => {
    const { accounts, contract } = this.props;

    await contract.methods
      .approveUploadbyInstitute(a, a)
      .send({ from: accounts[0] });
  };

  render() {
    return (
      <div syle={{ marginTop: "1000px" }}>
        jkkkkkkkkkkkkk
        {this.state.h.map(jk => {
          return (
            <div>
              <Card>
                <h1>{jk.name}</h1>

                <h1>{jk.a}</h1>

                <button onClick={this.appro.bind(this, jk.a)}>APPROVE</button>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ApproveUpload;
