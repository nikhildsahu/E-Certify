import React, { Component } from "react";
import { Grid, Typography, Avatar, Card, Button } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExpPanel from "../CommonComponents/ExpPanel";
import green from "@material-ui/core/colors/green";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MailIcon from "@material-ui/icons/Mail";
import AlertDialog from "../CommonComponents/AlertDialog";
import ipfs from "../ipfs";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SimpleStorageContract from "../contracts/SimpleStorage.json";

class MyDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      aadhar: "",
      a: "QmafSZjxx8QaqJJBEyxRej7D9E8STGCbLzwVRgT2U7ctug"
    };
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
    var t = await contract.methods
      .getUploadReqList(this.props.accounts[0])
      .call();
    console.log(t);
    this.handleClose();
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={1} />
          <Grid item md={5}>
            <Card
              style={{
                marginTop: "30px",
                marginLeft: "50px",
                marginRight: "50px",
                width: "1000px"
              }}
            >
              <Grid container>
                <Grid item md={1}>
                  <Avatar
                    style={{ margin: "15px", backgroundColor: "#3F51B5" }}
                  >
                    <FolderIcon />
                  </Avatar>
                </Grid>
                <Grid item md={10}>
                  <Typography
                    variant="h4"
                    style={{
                      padding: "10px",
                      marginLeft: "15px",
                      color: "#3F51B5"
                    }}
                  >
                    My Documents
                    <Typography variant="caption" style={{ marginLeft: "5px" }}>
                      (Click on the Document name to view.)
                    </Typography>
                  </Typography>
                </Grid>{" "}
                {/* array map ExpPanel.jsx */}
                <ExpansionPanel style={{ width: "1000px" }}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Avatar
                      style={{
                        color: "#fff",
                        backgroundColor: green[500]
                      }}
                    >
                      <AssignmentIcon />
                    </Avatar>
                    <Typography style={{ margin: "10px" }}>
                      Class X Marksheet
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container>
                      <Grid item md={10}>
                        <Typography>
                          <em>Class X marksheet</em> was uploaded on{" "}
                          <em>26/1/2015</em> by <em>CPSKR</em>. <br />
                          Uploader Address : <em>8855DDX84844</em>
                        </Typography>
                      </Grid>
                      <Grid item md={1}>
                        <Button
                          variant="outlined"
                          style={{ color: "green", marginLeft: "0px" }}
                        >
                          View
                        </Button>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                {/* array map the above content  */}
                <Grid container justify="center">
                  <Button
                    variant="outlined"
                    color="secondary"
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                    onClick={this.handleClickOpen}
                  >
                    Add New Document{"      "}
                  </Button>

                  <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title">
                      <Typography style={{ color: "#1a237e" }} variant="h4">
                        Add New Document
                      </Typography>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>Enter Document Name</DialogContentText>
                      <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        type="text"
                        fullWidth
                      />
                      <br />
                      <DialogContentText style={{ marginTop: "15px" }}>
                        Upload Document
                      </DialogContentText>

                      <Button>
                        {" "}
                        <input onChange={this.captureFile} type="file" />{" "}
                      </Button>
                      <Button>Upload </Button>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button
                        onClick={this.newUpload.bind(this)}
                        color="primary"
                      >
                        Confirm
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MyDocuments;
