import React, { Component } from "react";
import {
  Grid,
  Typography,
  Avatar,
  Card,
  Button,
  ButtonBase
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import AssignmentIcon from "@material-ui/icons/Assignment";
import green from "@material-ui/core/colors/green";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MailIcon from "@material-ui/icons/Mail";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";
class PastHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { hj: [], currentState: { a: "", b: "", name: "", pic: "" } };
  }

  componentDidMount = async () => {
    const { accounts, contract } = this.props;

    const as = await contract.methods.getPastOwner(accounts[0]).call();
    console.log(as);

    var ai = [];
    as.map(async op => {
      const oio = await contract.methods.getAadhar(op).call();
      console.log(oio);

      const a = await contract.methods.getProfile(op).call();
      ai.push({ address: op, pic: oio, name: a[0], propic: a[1] });
      this.setState({ hj: ai });
    });

    console.log(ai);
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "1000px",
          marginTop: "90px"
        }}
      >
        <h1> PastHistory Rights </h1>
        {this.state.hj.map(hj => {
          return (
            <div>
              <div>
                <Grid container>
                  <Grid item md={1} />
                  <Grid
                    item
                    md={8}
                    style={{ width: "400px", paddingTop: "50px" }}
                  >
                    <Card style={{ width: "900px" }}>
                      <Grid container style={{ padding: "20px" }}>
                        <Grid container>
                          <Grid item md={2} style={{ marginLeft: "25px" }}>
                            <Avatar
                              style={{
                                color: "#fff",
                                backgroundColor: green[500],
                                width: "75px",
                                height: "75px"
                              }}
                              // src={hj.pic}
                              src={`https://gateway.ipfs.io/ipfs/${hj.propic}`}
                            />
                          </Grid>

                          <Grid item md={4}>
                            <Typography variant="headline">
                              {hj.name}
                            </Typography>
                            <Typography variant="overline">
                              ADDRESS : {hj.address}
                            </Typography>
                            <br />
                          </Grid>
                          <Grid item md={2} />
                          <Grid item md={1}>
                            <br />
                            {/* <Button
                              onClick={() => {
                                this.setState({
                                  open: !this.state.open,
                                  currentState: hj
                                });
                              }}
                              variant="outlined"
                            >
                              View
                            </Button> */}
                          </Grid>
                          <Grid item md={1} />
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>
              </div>

              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
                <div style={{ marginLeft: "30px", marginRight: "30px" }}>
                  <DialogTitle id="form-dialog-title">
                    <Typography style={{ color: "#1a237e" }} variant="h4">
                      Profile
                    </Typography>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText style={{ color: "black" }}>
                      <Typography variant="h5">
                        {" "}
                        Name : {this.state.currentState.name}
                      </Typography>
                      <Typography variant="overline">
                        ADDRESS : {hj.address}
                      </Typography>
                    </DialogContentText>
                    <br />
                    {/* <DialogContentText style={{ marginTop: "15px" }}>
            Create New Upload
          </DialogContentText> */}
                    <Grid container justify="center">
                      <img
                        src={`https://gateway.ipfs.io/ipfs/${hj.propic}`}
                        alt="CNN"
                        style={{
                          margin: "20px",
                          height: "200px",
                          width: "200px"
                        }}
                      />
                    </Grid>{" "}
                    <DialogContentText style={{ color: "black" }}>
                      Documents{" "}
                      <Typography variant="caption">(Click to View)</Typography>
                    </DialogContentText>
                    <List style={{ width: "500px" }}>
                      <ListItem button>
                        <ListItemText>Adhar Card</ListItemText>
                        <ButtonBase
                          onClick={() => {
                            if (hj.propic.length > 0) {
                              window.open(
                                `https://gateway.ipfs.io/ipfs/${hj.pic}`
                              );
                            } else {
                              window.alert("NULL");
                            }
                          }}
                        >
                          <Grid container justify="center">
                            <img
                              src={`https://gateway.ipfs.io/ipfs/${hj.pic}`}
                              alt="Your Profile Pic Here"
                              style={{
                                margin: "20px",
                                height: "250px",
                                width: "250px"
                              }}
                            />
                          </Grid>
                        </ButtonBase>
                      </ListItem>
                      <Divider />

                      <Divider />
                    </List>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Close
                    </Button>
                  </DialogActions>
                </div>
              </Dialog>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PastHistory;
