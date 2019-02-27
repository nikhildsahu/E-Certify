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
import ListDividers from "../CommonComponents/ListDivider";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FullScreenDialog from "../CommonComponents/FullScreenDialog";
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
import DrawerRHS from "../CommonComponents/DrawerRHS";

class Dash extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: false
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

  render() {
    return (
      <div>
        <div>
          <Grid container>
            <Grid item md={12}>
              <TopNav />
            </Grid>

            <Grid
              item
              md={3}
              style={{
                padding: "15px"
              }}
            >
              <Card style={{ width: "300px", height: "655px" }}>
                <Grid item md={12}>
                  <Grid container>
                    <Typography
                      variant="h4"
                      style={{ padding: "20px", color: "#3F51B5" }}
                    >
                      My Profile
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
                          src="data:image/jpeg;base64,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"
                        />
                        <br />
                      </Grid>
                      <Grid item md={2} />
                      <Grid item md={8}>
                        <Typography
                          variant="h5"
                          style={{ textAlign: "center" }}
                        >
                          Oxford University
                          <br />
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          style={{ textAlign: "center" }}
                        >
                          My Address : 8855RXJ445
                        </Typography>
                      </Grid>
                      <Grid container justify="center">
                        <br />
                        <Button
                          variant="outlined"
                          color="secondary"
                          style={{ marginTop: "25px" }}
                        >
                          View Profile
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ margin: "5%" }}>
                      <DrawerRHS />
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
                          Upload New Document
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      button
                      style={{ width: "300px", color: "#3F51B5" }}
                    >
                      <ListItemAvatar>
                        <MailIcon />
                      </ListItemAvatar>
                      <ListItemText>
                        <Typography variant="h6">Pending Approvals</Typography>
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
                        <Typography variant="h6">
                          Transfer of Ownership Requests
                        </Typography>
                      </ListItemText>
                    </ListItem>
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
              <Card style={{ margin: "15px" }}>
                <Grid container>
                  <Grid item md={1}>
                    <Avatar
                      style={{ margin: "15px", backgroundColor: "#3F51B5" }}
                    >
                      <MailIcon />
                    </Avatar>
                  </Grid>
                  <Grid item md={10}>
                    <Typography
                      variant="h4"
                      style={{
                        padding: "10px",
                        marginLeft: "5%",
                        color: "#3F51B5"
                      }}
                    >
                      Pending Approvals
                      <Typography
                        variant="caption"
                        style={{ marginLeft: "5px" }}
                      >
                        (Click on the Request to view.)
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
                {/* pass props here by array mapping */}
                <List>
                  <ListItem button>
                    <ListItemText>
                      <Typography variant="title">
                        Approval of :<em> Adhar Card</em>
                      </Typography>
                    </ListItemText>
                    <FullScreenDialog />
                  </ListItem>
                  <Divider />
                  {/* pass props here by array mapping */}
                </List>
              </Card>
            </Grid>
            <Grid
              item
              md={3}
              style={{
                padding: "15px"
              }}
            />
            {/* <DrawerRHS /> */}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Dash;
