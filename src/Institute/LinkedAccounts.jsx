import React, { Component } from "react";

class LinkedAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate = async () => {
    const { contract, accounts } = this.props;

    const res = await contract.methods.getInstitutesWallet(accounts[0]).call();
    var hj = [];

    this.state.res.map(async nameadd => {
      const response2 = await contract.methods.getProfile(accounts[0]).call();

      hj.push({ add: nameadd, name: response2[0], pic: response2[1] });
    });

    this.setState({ hj: hj });

    console.log(this.state);
  };

  render() {
    return (
      <div style={{ backgroundColor: "black", height: "1000px" }}>
        {console.log(this.state)}
      </div>
    );
  }
}

export default LinkedAccount;
