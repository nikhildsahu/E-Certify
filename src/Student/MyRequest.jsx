import React, { Component } from "react";
class MyRequest extends Component {
  state = { list: [] };

  list = async () => {
    const { contract, accounts } = this.props;
    var a = await contract.methods.getRequestList(accounts[0]).call();
    this.setState({ list: a });
    console.log(this.state);
  };

  check = async () => {
    const { contract, accounts } = this.props;

    var a = await contract.methods.Retrive(accounts[0]).call();

    console.log(a);
  };

  yu = async () => {
    const { contract, accounts } = this.props;

    await contract.methods
      .AcceptRequestByStudent(accounts[0])
      .send({ from: accounts[0] });
  };

  render() {
    return (
      <div>
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

export default MyRequest;
