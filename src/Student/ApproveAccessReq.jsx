import React, { Component } from "react";
import { Link } from "@material-ui/core";
import { Grid, Typography, Avatar, Card, Button } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import green from "@material-ui/core/colors/green";

class ApproveAccessReq extends Component {
  state = { array: [], PartialOwner: [] };

  componentDidMount = async () => {
    const { accounts, contract } = this.props;

    const res = await contract.methods
      .getPartialOwnerShipList(accounts[0])
      .call();

    var array = [];
    res.map(async res => {
      const de = await contract.methods.getProfile(res).call();

      array.push({ address: res, name: de[0], pic: de[1] });
      this.setState({ array: array, ol: 32 });
    });

    this.setState({ array: array, ol: 32 });

    this.forceUpdate();
  };

  Approve = async a => {
    const { accounts, contract } = this.props;
    await contract.methods
      .approvePartialOwnerReqfromStudent(a)
      .send({ from: accounts[0] });

    const Par = await contract.methods.getPartialOwnerSList(accounts[0]).call();
    this.setState({ PartialOwner: Par });
    console.log(Par);
  };
  render() {
    return (
      <div>
        {console.log(this.state)}
        {this.state.array.map(array => {
          return (
            // <div>
            //   AAAAAAAAAAAAAAAAAAAAAAAA
            //   <h3>{array.address}</h3>
            //   <h3>{array.name}</h3>
            //   <img src={array.pic} />{" "}
            //   <button onClick={this.Approve.bind(this, array.address)}>
            //     Approve
            //   </button>
            // </div>

            <div>
              <Grid container>
                <Grid item md={2} style={{ marginLeft: "25px" }}>
                  <Avatar
                    src={`https://gateway.ipfs.io/ipfs/${array.pic}`}
                    style={{
                      color: "#fff",
                      backgroundColor: green[500]
                    }}
                  >
                    <MailIcon />
                  </Avatar>
                </Grid>

                <Grid item md={6}>
                  <Typography>
                    <em>
                      {array.name}
                      <br />
                      {array.address}
                      <br />
                    </em>{" "}
                    has Request for Access Of your <em>B.Tech Degree</em> and
                    want your approval.
                  </Typography>
                  <br />
                </Grid>

                <Grid item md={1} />
                <Grid item md={1} />
                <Grid item md={1}>
                  <Button
                    onClick={this.Approve.bind(this, array.address)}
                    variant="outlined"
                    color="primary"
                  >
                    Confirm
                  </Button>
                </Grid>
              </Grid>
            </div>
          );
        })}

        <Link to="/dd">AA</Link>

        <h1>PARTIAL OWNERS</h1>
        {this.state.PartialOwner.map(Po => {
          return <div>Po</div>;
        })}
      </div>
    );
  }
}
export default ApproveAccessReq;
