import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class ChangeInstitute extends Component {
  state = {
    owner1: "",
    owner2: "",
    instname: ""
  };
  changeInst = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ owner1: response[0] });
    this.setState({ owner2: response[1] });
    console.log("current owners");
    console.log("owner:Institute:" + response[1]);
    console.log("owner:Student:" + response[0]);

    //////
    await contract.methods
      .changeOwnerInstfromStud(this.state.instname)
      .send({ from: accounts[0] });
    var r = await contract.methods
      .getChangeOwnerList(this.props.accounts[0])
      .call();
    console.log(r);
    ///
  };
  render() {
    return (
      <div>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Institue Address"
          type="text"
          fullWidth
          onChange={e => {
            {
              this.setState({ instname: e.target.value });
            }
          }}
        />
        <button onClick={this.changeInst.bind(this)}>go</button>
      </div>
    );
  }
}

export default ChangeInstitute;
