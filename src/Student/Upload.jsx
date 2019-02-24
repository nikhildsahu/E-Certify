import React, { Component } from "react";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../utils/getWeb3";
import "../App.css";
import ipfs from "../ipfs";
import { Typography, Link } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

import {
  Card,
  CardContent,
  Grid,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
class Upload extends Component {
  state = {
    aadhar: ""
  };

  captureFile = event => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      // this.setState({ buffer: Buffer(reader.result) });
      //   console.log("buffer", Buffer(reader.result));

      this.hj(Buffer(reader.result));
    };
  };
  hih = async () => {
    const { accounts, contract } = this.props;

    await contract.methods
      .uploadAadhar(this.state.aadhar)
      .send({ from: accounts[0] });
    const response = await contract.methods.getAadhar().call();

    this.setState({ aadhar: response }); //check once
    console.log(this.state);
  };

  hj = async a => {
    await ipfs.add(a, (err, ipfsHash) => {
      console.log(err, ipfsHash);

      this.setState({ aadhar: ipfsHash[0].hash });
    });
  };
  newUpload = async () => {
    const { accounts, contract } = this.props;

    await contract.methods
      .createUploadRequestbyUser(true, this.state.aadhar)
      .send({ from: accounts[0] });
  };

  handleClick = e => {
    this.refs.myFileInput.chooseFile();
  };
  handleFileSelect(e, files) {
    console.log(e, files);
  }

  us = async () => {
    const { accounts, contract } = this.state;
    console.log(contract);
    await contract.methods
      .createNewMultiSigbyUser(accounts[0])
      .send({ from: accounts[0] });
  };
  render() {
    // return (
    //   <div className="App">
    //     <div>
    //       <Grid container spacing={24}>
    //         <Grid item xs={12}>
    //           <Card
    //             style={{
    //               padding: "5px",
    //               marginTop: "5px"
    //             }}
    //           >
    //             <Grid container>
    //               <Grid item md={6}>
    //                 <h4> Aadhar</h4>
    //               </Grid>
    //               <Grid item md={3}>
    //                 <Button
    //                   onClick={() => {
    //                     if (this.state.aadhar.length > 0) {
    //                       window.open(
    //                         `https://gateway.ipfs.io/ipfs/${this.state.aadhar}`
    //                       );
    //                     } else {
    //                       window.alert("NULL");
    //                     }
    //                   }}
    //                   newUpload
    //                 >
    //                   View{" "}
    //                 </Button>
    //               </Grid>
    //               <Grid item md={3}>
    //                 <Button>
    //                   <input onChange={this.captureFile} type="file" />{" "}
    //                 </Button>
    //               </Grid>
    //             </Grid>

    //             <Button onClick={this.newUpload}>
    //               Create A New Document Change/Upload Request
    //             </Button>
    //           </Card>
    //         </Grid>
    //       </Grid>
    //     </div>{" "}
    //   </div>
    // );
    return (
      <div>
        <Grid container>
          <Grid item md={3} />
          <Grid item md={6}>
            <Card style={{ margin: "25px" }}>
              <Grid container>
                <Grid item md={1}>
                  <Avatar
                    style={{ margin: "15px", backgroundColor: "#3F51B5" }}
                  >
                    <FolderIcon />
                  </Avatar>
                </Grid>
                <Typography
                  variant="h4"
                  color="primary"
                  style={{ margin: "15px" }}
                >
                  Upload Your Documents
                </Typography>
              </Grid>
              <hr />
              {/* array map from here */}
              <Grid container>
                <Grid item md={1} />
                <Grid item md={8}>
                  <List>
                    <ListItem>
                      <ListItemText>Aadhar Card</ListItemText>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item md={1}>
                  <Button
                    onClick={() => {
                      if (this.state.aadhar.length > 0) {
                        window.open(
                          `https://gateway.ipfs.io/ipfs/${this.state.aadhar}`
                        );
                      } else {
                        window.alert("NULL");
                      }
                    }}
                    style={{ marginTop: "20px" }}
                  >
                    View
                  </Button>
                </Grid>
                <Grid item md={1}>
                  <Button style={{ marginTop: "20px" }}>
                    Upload <input onChange={this.captureFile} type="file" />{" "}
                  </Button>
                </Grid>
              </Grid>
              <hr />
              {/* array map till here */}
              <Button
                onClick={this.newUpload}
                variant="outlined"
                color="primary"
                style={{
                  height: "50px",
                  width: "100px",
                  marginBottom: "15px",
                  marginLeft: "300px"
                }}
              >
                Next
              </Button>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Upload;
