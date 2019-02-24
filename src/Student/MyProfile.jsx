import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "@material-ui/core/Avatar";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../utils/getWeb3";
class MyProfile extends Component {
  state = {
    list: [],
    lis: [],
    owner1: "",
    owner2: "",
    name: "",
    profilepic: "",
    aadhar: ""
  };
  sa = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ owner1: response[0] });
    this.setState({ owner2: response[1] });
    console.log("owner:Institute:" + response[1]);
    console.log("owner:Student:" + response[0]);
    const response1 = await contract.methods.getProfile(accounts[0]).call();
    this.setState({ name: response1[0] });
    this.setState({ profilepic: response1[1] });
    const response3 = await contract.methods.getAadhar().call();
    this.setState({ aadhar: response3 });
    console.log(response3);
    // const response2 = await contract.methods
    //   .getUploadReqList(accounts[0])
    //   .call();

    // this.setState({ lis: response2 });

    // const response3 = await contract.methods.getAadhar().call();

    // this.setState({ aadhar: response3 });

    // console.log("aa", response3);
  };

  componentDidMount = async () => {
    await this.sa();
  };

  render() {
    return (
      <div>
        <Paper
          style={{
            padding: "15px",
            marginRight: "15px",
            marginLeft: "15px",
            marginTop: "20px",
            marginBottom: "20px",
            height: "90vh",
            width: "35%"
          }}
        >
          <Grid container direction="column" spacing={16}>
            <Grid item>
              <ButtonBase>
                <Avatar
                  alt="Student Image"
                  src={`https://gateway.ipfs.io/ipfs/${this.state.profilepic}`}
                  style={{
                    marginTop: "2%",
                    marginBottom: "10%",
                    marginLeft: "1.5%",
                    width: "50%",
                    height: "50%"
                  }}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <h4>
                    Name:
                    <br />
                    {this.state.name}
                  </h4>

                  <Typography
                    variant="Headline"
                    style={{
                      marginTop: "2.5%",
                      marginBottom: "1%"
                    }}
                  >
                    <h4>Address:</h4>
                    <br />
                    {this.state.owner1}
                  </Typography>
                  <Typography
                    variant="Headline"
                    style={{
                      marginTop: "2.5%",
                      marginBottom: "1%"
                    }}
                  >
                    <h4>Institute:</h4>
                    <br />
                    {this.state.owner2}
                  </Typography>
                  <button
                    onClick={() => {
                      if (this.state.aadhar.length > 0) {
                        window.open(
                          `https://gateway.ipfs.io/ipfs/${this.state.aadhar}`
                        );
                      } else {
                        window.alert("NULL");
                      }
                    }}
                  >
                    aadhar
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default MyProfile;
