import React, { Component } from "react";
import { Grid, Avatar, Typography, Card, Button } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";

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
    try {
      const { accounts, contract } = this.props;
      var r = await contract.methods
        .getChangeOwnerList(this.props.accounts[0])
        .call();
      console.log(r);
      this.setState({ newinstadd: r[0] });
      var response1 = await contract.methods.getProfile(r[0]).call();
      this.setState({ name: response1[0] });
      this.setState({ profilepic: response1[1] });
    } catch {}
  };
  changeInst = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ inst: response[1] });
    await contract.methods
      .approveChangeOwnerINSTReqbyStud(this.state.inst)
      .send({ from: accounts[0] });

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
        <Grid container>
          <Grid item md={1}>
            <Avatar style={{ margin: "15px", backgroundColor: "#ff5722 " }}>
              <MailIcon />
            </Avatar>
          </Grid>
          <Grid item md={10}>
            <Typography
              variant="h4"
              style={{
                padding: "10px",
                marginLeft: "15px",
                color: "#ff5722"
              }}
            >
              Pending Approvals
              <Typography variant="caption" style={{ marginLeft: "5px" }}>
                (Click on the Request to view the uploaded data.)
              </Typography>
            </Typography>
            <hr />
          </Grid>
        </Grid>
        <div>
          <Grid container justify="center">
            <Grid item md={10}>
              <Card
                style={{
                  margin: "50px",
                  padding: "25px",
                  width: "700px"
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
