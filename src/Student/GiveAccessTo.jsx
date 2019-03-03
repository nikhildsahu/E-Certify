import React, { Component } from "react";
import {
  Grid,
  Typography,
  Card,
  TextField,
  Button,
  Avatar
} from "@material-ui/core";
class GiveAccessTo extends Component {
  state = {
    owner1: "",
    owner2: "",
    newinstadd: "",
    name: "",
    profilepic: "",
    flag: false
  };
  getnewInst = async () => {
    const { accounts, contract } = this.props;
    const response1 = await contract.methods
      .getProfile(this.state.newinstadd)
      .call();
    this.setState({ name: response1[0] });
    this.setState({ profilepic: response1[1] });
    this.setState({ flag: true });
  };
  giveacc = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ owner1: response[0] });
    this.setState({ owner2: response[1] });
    console.log("current owners");
    console.log("owner:Institute:" + response[1]);
    console.log("owner:Student:" + response[0]);

    //////
    await contract.methods
      .createNEwAccess(this.props.accounts[0], this.state.newinstadd)
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
        <Grid container>
          <Grid item md={2} />
          <Grid item md={4}>
            <Card style={{ margin: "50px", padding: "25px", width: "500px" }}>
              <Typography variant="h4" style={{ color: "#303F9F" }}>
                Give Access
              </Typography>
              <br />
              <Typography variant="body1">
                Enter the Address of the Recruiter to which you want to give
                Access.
              </Typography>
              <TextField
                id="standard-with-placeholder"
                label="Address*"
                placeholder="Enter Address"
                margin="normal"
                style={{ width: "250px" }}
                onChange={e => {
                  {
                    this.setState({ newinstadd: e.target.value });
                  }
                }}
              />{" "}
              <br />
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "25px" }}
                onClick={this.getnewInst.bind(this)}
              >
                Next
              </Button>
            </Card>
          </Grid>
          <Grid item md={6} />
          <Grid item md={1} />
          <Grid item md={4}>
            {this.state.flag ? (
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
                        Give Access
                      </Typography>
                      <br />
                      <Typography variant="subtitle2">
                        Verify Details of the Recruiter
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
                            ADDRESS : {this.state.newinstadd.substring(0, 10)}
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
                            onClick={this.giveacc.bind(this)}
                          >
                            Confirm
                          </Button>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            ) : (
              <div>{""}</div>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default GiveAccessTo;
