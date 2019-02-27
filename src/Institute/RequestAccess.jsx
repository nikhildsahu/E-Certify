import React, { Component } from "react";
import {
  Button,
  Grid,
  Dialog,
  DialogActions,
  Typography,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Divider,
  Checkbox
} from "@material-ui/core";
import { Card, TextField } from "@material-ui/core";

export default class SearchReq extends React.Component {
  state = {
    open: false,
    checkedF: false,
    stud: "",
    name: "",
    profilepic: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  getP = async () => {
    const { accounts, contract } = this.props;
    const response1 = await contract.methods.getProfile(this.state.stud).call();
    this.handleClickOpen();
    this.setState({ name: response1[0] });
    this.setState({ profilepic: response1[1] });
    console.log(response1[0], response1[1]);
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  sendreq = async () => {
    const { accounts, contract } = this.props;
    await contract.methods
      .createNewPartialOwnerRequest(this.state.stud, true, 5)
      .send({ from: accounts[0] });

    const response = await contract.methods
      .getPartialOwnerShipList(this.state.stud)
      .call();
    console.log(response);
    this.handleClose();
  };
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item md={4}>
            <Card style={{ margin: "50px", padding: "25px", width: "500px" }}>
              <Typography variant="h4" style={{ color: "#303F9F" }}>
                Request For Access
              </Typography>
              <br />
              <Typography variant="body1">
                Enter the Address of the Student of whom you want to Access
                Documents
              </Typography>
              <TextField
                id="standard-with-placeholder"
                label="Address*"
                placeholder="Enter Address"
                margin="normal"
                style={{ width: "250px" }}
                onChange={e => {
                  {
                    this.setState({ stud: e.target.value });
                  }
                }}
              />{" "}
              <br />
              <Button variant="outlined" color="primary" onClick={this.getP}>
                View
              </Button>
            </Card>
          </Grid>
        </Grid>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <div style={{ marginLeft: "30px", marginRight: "30px" }}>
            <DialogTitle id="form-dialog-title">
              <Typography style={{ color: "#1a237e" }} variant="h4">
                Access Request
              </Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText style={{ color: "black" }}>
                <Typography variant="h5"> Name :{this.state.name}</Typography>
                <Typography variant="overline">
                  ADDRESS : {this.state.stud}
                </Typography>
              </DialogContentText>
              <br />
              {/* <DialogContentText style={{ marginTop: "15px" }}>
              Create New Upload
            </DialogContentText> */}
              <Grid container justify="center">
                <img
                  src={`https://gateway.ipfs.io/ipfs/${this.state.profilepic}`}
                  alt="rofile Pic here"
                  style={{ margin: "20px", height: "200px", width: "200px" }}
                />
              </Grid>{" "}
              <DialogContentText style={{ color: "black" }}>
                Documents{" "}
                <Typography variant="caption">
                  (Click to send View Request)
                </Typography>
              </DialogContentText>
              <List style={{ width: "300px" }}>
                <ListItem button>
                  {" "}
                  <Checkbox
                    checked={this.state.checkedF}
                    onChange={this.handleChange("checkedF")}
                    value="checkedF"
                  />
                  <ListItemText>Adhar Card</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <Checkbox />
                  <ListItemText>Class X Marksheet</ListItemText>
                </ListItem>
                <Divider />
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.sendreq} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    );
  }
}
