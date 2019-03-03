import React, { Component } from "react";
import {
  Grid,
  Typography,
  Card,
  TextField,
  Button,
  Avatar
} from "@material-ui/core";
class ChangeInst extends Component {
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
  changeInst = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ owner1: response[0] });
    this.setState({ owner2: response[1] });
    console.log("current owners");
    console.log("owner:Institute:" + response[1]);
    console.log("owner:Student:" + response[0]);

    //////
    await contract.methods
      .changeOwnerInstfromStud(this.state.newinstadd)
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
                Transfer of Ownership
              </Typography>
              <br />
              <Typography variant="body1">
                Enter the Address of the Institute to which you want to transfer
                your ownership.
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
          {/* <Grid item md={8} /> */}

          <Grid item md={12}>
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
            ) : (
              <div>{""}</div>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ChangeInst;

{
  /* <ChangeInstConfirm
                  accounts={this.props.accounts}
                  contract={this.props.contract}
                  name={this.state.name}
                  profilepic={this.state.profilepic}
                  instadd={this.state.newinstadd}
                /> */
}
