import React, { Component } from "react";
class MyRequestInst extends Component {
  state = { list: [], address: null };

  list = async () => {
    const { contract, accounts } = this.props;
    var a = await contract.methods.getRequestList(this.state.address).call();
    this.setState({ list: a });
  };

  check = async () => {
    const { contract, accounts } = this.props;

    var a = await contract.methods.Retrive(this.state.address).call();

    console.log(a);
  };

  yu = async () => {
    const { contract, accounts } = this.props;

    await contract.methods
      .AcceptRequestByInstitute(this.state.address)
      .send({ from: accounts[0] });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => {
            this.setState({ address: e.target.value });
          }}
        />

        <button onClick={this.list}>O</button>
        {this.state.list.map(li => {
          return (
            <div>
              {li} <button onClick={this.check}>Verify</button>{" "}
              <button onClick={this.yu}>Accept</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MyRequestInst;
