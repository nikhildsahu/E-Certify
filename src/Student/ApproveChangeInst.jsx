import React, { Component } from "react";
import { Grid, Avatar, Typography, Card, Button } from "@material-ui/core";
class ApproveChnageInst extends Component {
  state = { inst: "", trig: false, name: "", profilepic: "", newinstadd: "" };
  getInst = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ inst: response[1] });
    // this.setState({ owner2: response[1] });
    console.log("current owners");
    console.log("owner:Institute:" + response[1]);
    console.log("owner:Student:" + response[0]);
  };
  checkreq = async () => {
    const { accounts, contract } = this.props;
    var r = await contract.methods
      .getChangeOwnerList(this.props.accounts[0])
      .call();
    console.log(r);
    this.setState({ newinstadd: r[0] });
    var response1 = await contract.methods.getProfile(r[0]).call();
    this.setState({ name: response1[0] });
    this.setState({ profilepic: response1[1] });
  };
  changeInst = async () => {
    const { accounts, contract } = this.props;

    await contract.methods
      .approveChangeOwnerINSTReqbyStud(this.state.inst)
      .send({ from: accounts[0] });

    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ inst: response[1] });
    // this.setState({ owner2: response[1] });
    console.log(" owners");
    console.log("owner:Institute:" + response[1]);
    console.log("owner:Student:" + response[0]);
  };
  componentWillMount = async () => {
    this.getInst();
    this.checkreq();
  };
  render() {
    return (
      <div>
        <div>
          <Grid container justify="center">
            <Grid item md={4}>
              <Card
                style={{
                  margin: "50px",
                  padding: "25px",
                  width: "500px"
                }}
              >
                <Typography variant="h4" style={{ color: "#303F9F" }}>
                  Transfer of Ownership
                </Typography>
                <br />
                <Typography variant="subtitle2">
                  Verify Details of the Institute
                </Typography>{" "}
                <br />
                <Grid container>
                  <Grid item md={4}>
                    <Avatar
                      style={{ height: "100px", width: "100px" }}
                      src={this.state.profilepic}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="headline">
                      {this.state.name}
                    </Typography>
                    <Typography variant="overline">
                      ADDRESS : {this.state.newinstadd}
                    </Typography>
                    <br /> <br />
                  </Grid>
                  <Grid item md={3} />
                  <Grid item md={3}>
                    <Button variant="outlined" color="secondary">
                      Reject
                    </Button>
                  </Grid>
                  <Grid item md={3}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={this.changeInst.bind(this)}
                    >
                      Confirm
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default ApproveChnageInst;
