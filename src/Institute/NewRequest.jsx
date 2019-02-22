import React, { Component } from "react";
class NewRequest extends Component {
  constructor(props) {
    super(props);
    this.state = { reqisent: [] };
  }

  newRequestCreator = async () => {
    const { accounts, contract } = this.props;

    await contract.methods
      .NewRequest(this.state.stud)
      .send({ from: accounts[0] });

    this.requestiSen();
  };

  requestiSen = async () => {
    const { accounts, contract } = this.props;



    
    var q = await contract.methods.requestiSent(accounts[0]).call();

    console.log(q);
    this.setState({ reqisent: q });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        NEW REQUEST
        <br />
        <input
          onChange={r => {
            this.setState({ stud: r.target.value });
          }}
        />
        <button onClick={this.newRequestCreator}>Click</button>
        <div>
          <br />

          {this.state.reqisent.map(req => {
            return <div>{req}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default NewRequest;
