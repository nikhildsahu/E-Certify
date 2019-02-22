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
    profilepic: ""
  };
  sa = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ owner1: response[0] });
    this.setState({ owner2: response[1] });
    // console.log("owner:Institute:" + response[1]);
    // console.log("owner:Student:" + response[0]);
    const response1 = await contract.methods.getProfile(accounts[0]).call();
    this.setState({ name: response1[0] });
    this.setState({ profilepic: response1[1] });
    // const response2 = await contract.methods
    //   .getUploadReqList(accounts[0])
    //   .call();

    // this.setState({ lis: response2 });

    // const response3 = await contract.methods.getAadhar().call();

    // this.setState({ aadhar: response3 });

    // console.log("aa", response3);
  };
  disp = () => {
    (async () => {
      await this.sa();
    })();
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        {/* <button onClick={this.sa.bind(this)} style={{ width: "300px" }}>
          Click Here to View Profile
        </button> */}
        {this.disp()}
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
