import React, { Component } from "react";
import { Button } from "@material-ui/core";
class MyInstitute extends Component {
  state = { li: [] };
  olo = async () => {
    const { contract, accounts } = this.props;
    var a = await contract.methods.getUploadReqList(this.state.add).call();
    this.setState({ li: a });
  };

  resolv = async () => {
    const { contract, accounts } = this.props;

    await contract.methods
      .approveUploadbyInstitute(this.state.add)
      .send({ from: accounts[0] });
  };
  render() {
    return (
      <div>
        <input
          onChange={e => {
            this.setState({ add: e.target.value });
          }}
        />

        <Button onClick={this.olo}>SEARCH</Button>
        <div>
          {this.state.li.map(ol => {
            return (
              <div>
                <h3>{ol}</h3>
                <Button onClick={this.resolv}>Verify</Button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyInstitute;
