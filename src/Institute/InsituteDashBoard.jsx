import React, { Component } from "react";
import {
  Grid,
  Card,
  Typography,
  Avatar,
  Button,
  ListItemAvatar,
  Drawer
} from "@material-ui/core";
import {
  Route,
  Link,
  Switch,
  BrowserRouter,
  Wrapper,
  PageWrap
} from "react-router-dom";
// import ListDividers from "../CommonComponents/ListDividers";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
// import FullScreenDialog from "../CommonComponents/FullScreenDialog";
import TopNav from "../Student/TopNav";
import FolderIcon from "@material-ui/icons/Folder";
import MailIcon from "@material-ui/icons/Mail";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ChangeOwnershipApprovalbyInst from "./ChangeOwnershipApprovalbyInst";
import ApproveUpload from "./ApproveUpload";
import DrawerRHS from "../CommonComponents/DrawerRHS";
import LinkedAccount from "./LinkedAccounts";
import RequestAccess from "./RequestAccess";
import Access from "./Access";
import OtpAccess from "./OtpAccess";

class InstituteDashBoard extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: false,
    profilepic: "",
    name: "",
    owner1: "",
    owner2: "",
    aadhar: "",
    s: "0x8bb6d82f6ec5ea7a651f96f7b3353afb7caa8a47"
  };
  profile = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ owner1: response[0] });
    this.setState({ owner2: response[1] });
    // console.log("owner:Institute:" + response[1]);
    // console.log("owner:Student:" + response[0]);
    const response1 = await contract.methods.getProfile(accounts[0]).call();
    this.setState({ name: response1[0] });
    this.setState({ profilepic: response1[1] });
    const response3 = await contract.methods.getAadhar(accounts[0]).call();
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
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  showDocs() {
    return <div>logic</div>;
  }
  st = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getInstitutesWallet(accounts[0])
      .call();
    console.log("s" + response);
  };
  up = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getInstitutesUploadList(this.state.s)
      .call();
    console.log("a" + response);
  };
  componentDidMount = async () => {
    await this.profile();
    await this.st();
    this.up();
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Grid container>
              <Grid item md={12}>
                <TopNav
                  accounts={this.props.accounts}
                  contract={this.props.contract}
                />
              </Grid>
              <Grid item md={12} style={{ padding: "40px" }}>
                {" "}
              </Grid>
              <Grid
                item
                md={3}
                style={{
                  padding: "15px"
                }}
              >
                <Card style={{ width: "300px", height: "1000px" }}>
                  <Grid item md={12}>
                    <Grid container>
                      <Typography
                        variant="h4"
                        style={{ padding: "20px", color: "#3F51B5" }}
                      >
                        Institute Profile
                        <br />
                      </Typography>
                      <br />
                      <Grid container>
                        <Grid item md={1} />
                        <Grid item md={12}>
                          <Avatar
                            style={{
                              width: 80,
                              height: 80,
                              marginLeft: "33.33%"
                            }}
                            src={`https://gateway.ipfs.io/ipfs/${
                              this.state.profilepic
                            }`}
                          />
                          <br />
                        </Grid>
                        <Grid item md={2} />
                        <Grid item md={8}>
                          <Typography
                            variant="h5"
                            style={{ textAlign: "center" }}
                          >
                            {this.state.name}
                            <br />
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            style={{ textAlign: "center" }}
                          >
                            My Address : <br />
                            {this.props.accounts[0].substring(0, 8) + ".."}
                          </Typography>
                          {/* <Typography
                          variant="subtitle2"
                          style={{ textAlign: "center" }}
                        >
                          Current Intitute/Organization :
                          {this.state.owner2.substring(0, 8) + ".."}
                        </Typography> */}
                        </Grid>
                        <Grid container justify="center">
                          <br />
                          <Button
                            variant="outlined"
                            color="secondary"
                            style={{ marginTop: "25px" }}
                          >
                            <a
                              href="/MyProfileInst"
                              style={{ textDecoration: "none" }}
                            >
                              View Profile
                            </a>
                          </Button>
                        </Grid>
                        <Grid
                          container
                          justify="center"
                          style={{ margin: "5%" }}
                        >
                          {/* <DrawerRHS
                            accounts={this.props.accounts}
                            contract={this.props.contract}
                          /> */}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container />
                    {/* <hr /> */}
                    <List style={{ textAlign: "center" }}>
                      <ListItem
                        button
                        onClick={this.showDocs.bind(this)}
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <FolderIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Typography variant="h6">
                            <Link
                              to="/InstituteDashBoard/k"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Linked Accounts
                            </Link>
                          </Typography>
                        </ListItemText>
                      </ListItem>

                      {/* <ListItem
                        button
                        onClick={this.showDocs.bind(this)}
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <FolderIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Typography variant="h6">Upload Documents</Typography>
                        </ListItemText>
                      </ListItem> */}
                      {/* <ListItem
                        button
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <MailIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Typography variant="h6">My Requests</Typography>
                        </ListItemText>
                      </ListItem> */}
                      <ListItem
                        button
                        onClick={this.showDocs.bind(this)}
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <FolderIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Typography variant="h6">
                            <Link
                              to="/InstituteDashBoard/acc"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Access Rights
                            </Link>
                          </Typography>
                        </ListItemText>
                      </ListItem>

                      <ListItem
                        button
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <AssignmentIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Link
                            to="/InstituteDashBoard/UploadApp"
                            style={{ textDecoration: "none" }}
                          >
                            <Typography variant="h6">
                              Pending Approvals
                            </Typography>
                          </Link>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        button
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <AssignmentIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Link
                            to="/InstituteDashBoard/ChangeOwnershipApprovalbyInst"
                            style={{ textDecoration: "none" }}
                          >
                            <Typography variant="h6">
                              Change Institute Approvals
                            </Typography>
                          </Link>
                        </ListItemText>
                      </ListItem>

                      {/* <ListItem
                        button
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <AssignmentIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Link
                            to="/InstituteDashBoard/OtpAccess"
                            style={{ textDecoration: "none" }}
                          >
                            <Typography variant="h6">Otp Access</Typography>
                          </Link>
                        </ListItemText>
                      </ListItem> */}
                      {/* <ListItem
                        button
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <AssignmentIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Link
                            to="/InstituteDashBoard/RequestAccess"
                            style={{ textDecoration: "none" }}
                          >
                            <Typography variant="h6">Request Access</Typography>
                          </Link>
                        </ListItemText>
                      </ListItem> */}

                      {/* <ListItem
                        button
                        onClick={this.showDocs.bind(this)}
                        style={{ width: "300px", color: "#3F51B5" }}
                      >
                        <ListItemAvatar>
                          <FolderIcon />
                        </ListItemAvatar>
                        <ListItemText>
                          <Typography variant="h6">
                            <Link
                              to="/InstituteDashBoard/ReqAccess"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Request Access
                            </Link>
                          </Typography>
                        </ListItemText>
                      </ListItem> */}
                    </List>
                  </Grid>
                </Card>
              </Grid>

              <Grid
                item
                md={5}
                style={{
                  padding: "15px"
                }}
              >
                <Switch>
                  <Route
                    path="/InstituteDashBoard/ChangeOwnershipApprovalbyInst"
                    component={() => (
                      <ChangeOwnershipApprovalbyInst
                        accounts={this.props.accounts}
                        contract={this.props.contract}
                      />
                    )}
                  />

                  <Route
                    path="/InstituteDashBoard/OtpAccess"
                    component={() => (
                      <OtpAccess
                        accounts={this.props.accounts}
                        contract={this.props.contract}
                      />
                    )}
                  />

                  <Route
                    path="/InstituteDashBoard/k"
                    component={() => (
                      <LinkedAccount
                        accounts={this.props.accounts}
                        contract={this.props.contract}
                      />
                    )}
                  />
                  <Route
                    path="/InstituteDashBoard/acc"
                    component={() => (
                      <Access
                        accounts={this.props.accounts}
                        contract={this.props.contract}
                      />
                    )}
                  />
                  <Route
                    path="/InstituteDashBoard/UploadApp"
                    component={() => (
                      <ApproveUpload
                        accounts={this.props.accounts}
                        contract={this.props.contract}
                      />
                    )}
                  />

                  <Route
                    path="/InstituteDashBoard/ReqAccess"
                    component={() => (
                      <RequestAccess
                        accounts={this.props.accounts}
                        contract={this.props.contract}
                      />
                    )}
                  />
                </Switch>
              </Grid>
              <Grid
                item
                md={3}
                style={{
                  padding: "15px"
                }}
              />
            </Grid>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default InstituteDashBoard;
