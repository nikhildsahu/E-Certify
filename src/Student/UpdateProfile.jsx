import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
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
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FolderIcon from "@material-ui/icons/Folder";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../utils/getWeb3";
import ipfs from "../ipfs";
import { Redirect } from "react-router-dom";
import fire from "../Fire";

class UploadPage extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    name: "",
    open: true,
    profilepic: "",
    flag: false,
    email: "",
    phoneno: "",
    semail: "nik@gmail.com"
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  disable = () => {
    return this.state.name.length > 0 ? false : true;
  };

  setName = e => {
    {
      this.setState({ name: e.target.value });
    }
  };
  setPhone = e => {
    {
      this.setState({ phoneno: e.target.value });
    }
  };
  updateProfile = async () => {
    const { accounts, contract } = this.props;

    console.log(contract);

    await contract.methods
      .updateProf(
        this.state.name,
        this.state.profilepic,
        accounts[0],
        this.state.phoneno,
        this.state.semail
      )
      .send({ from: accounts[0] });

    const response = await contract.methods.getProfile(accounts[0]).call();
    console.log(response[0] + "updated");
    {
      this.firebaseset();
    }
    {
      this.handleClose();
    }
  };
  firebaseset = () => {
    try {
      const { accounts, contract } = this.props;

      fire
        .database()
        .ref()
        .child("List")
        .child(accounts[0])
        .set(this.state.email);

      fire
        .database()
        .ref()
        .child("UID")
        .child(accounts[0])
        .child("name")
        .set(this.state.name);
      fire
        .database()
        .ref()
        .child("UID")
        .child(accounts[0])
        .child("email")
        .set(this.state.email);
      fire
        .database()
        .ref()
        .child("UID")
        .child(accounts[0])
        .child("phone")
        .set(this.state.phoneno);
      fire
        .database()
        .ref()
        .child("UID")
        .child(accounts[0])
        .child("profilepic")
        .set(this.state.profilepic);
    } catch (fipu) {}
  };
  ClickOpenGetProfile = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getProfile(accounts[0]).call();
    this.setState({ name: response[0] });
    this.setState({ profilepic: response[1] });
    console.log(contract);
    {
      this.handleClickOpen();
    }
  };

  captureFile = event => {
    this.ch();
    event.preventDefault();
    const file = event.target.files[0];
    console.log(event.target.files);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      // this.setState({ buffer: Buffer(reader.result) });
      //   console.log("buffjmnnnnnnnnnnnnnnnnnner", Buffer(reader.result));

      this.hj(Buffer(reader.result));
    };
  };
  ch = () => {
    this.setState({ flag: true });
    console.log(1, this.state.flag);
  };
  hj = async a => {
    await ipfs.add(a, (err, ipfsHash) => {
      console.log(err, ipfsHash);

      this.setState({ profilepic: ipfsHash[0].hash });
      this.setState({ flag: false });
      console.log(2, this.state.flag);
    });
  };
  componentDidMount = async () => {
    console.log("idhsiod");
    var e = fire.auth().currentUser.email;
    this.setState({ email: e });
    console.log(e);
  };
  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.ClickOpenGetProfile}
        >
          Sign Up!
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          disableEscapeKeyDown
        >
          <DialogTitle id="form-dialog-title">
            <Typography style={{ color: "#1a237e" }} variant="h4">
              Create New Account
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Enter your Name</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              value={this.state.name}
              onChange={this.setName.bind(this)}
            />
            <br />
            <br />
            <DialogContentText>Enter your Phone Number</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="phoneno"
              label="phone"
              type="text"
              fullWidth
              value={this.state.phoneno}
              onChange={this.setPhone.bind(this)}
            />
            <br />

            <DialogContentText style={{ marginTop: "15px" }}>
              Upload a picture
            </DialogContentText>
            <Grid container justify="center">
              <img
                src={`https://gateway.ipfs.io/ipfs/${this.state.profilepic}`}
                alt="Your Profile Pic Here"
                style={{ margin: "20px", height: "250px", width: "250px" }}
              />
            </Grid>
            <Button disabled={this.disable()}>
              Browse <input onChange={this.captureFile} type="file" />{" "}
            </Button>
            {/* <Button>Upload </Button> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color="primary">
              Cancel
            </Button>
            <Button onClick={this.updateProfile.bind(this)} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>

        {this.state.open ? null : <Redirect to="/CreateStudMultisig" />}
      </div>
    );
  }
}

export default UploadPage;
