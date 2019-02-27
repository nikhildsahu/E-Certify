import React, { Component } from "react";

class LinkedAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { hj: [] };
  }

  componentDidMount = async () => {
    const { contract, accounts } = this.props;

    const res = await contract.methods.getInstitutesWallet(accounts[0]).call();
    console.log("POPOPOP", res);
    var hj = [];

    this.setState({ res: res });

    this.state.res.map(async nameadd => {
      const response2 = await contract.methods.getProfile(accounts[0]).call();

      hj.push({ add: nameadd, name: response2[0], pic: response2[1] });
    });

    this.setState({ hj: hj });

    console.log(this.state);
  };

  render() {
    return (
      <div style={{ backgroundColor: "white", height: "1000px" }}>
        {this.state.hj.map(hj => {
          return <div>KKAKSK</div>;
        })}
      </div>
    );
  }
}

export default LinkedAccount;
