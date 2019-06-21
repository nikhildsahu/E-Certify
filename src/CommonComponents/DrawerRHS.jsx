import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Avatar,
  ListItem
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ipfs from "../ipfs.js";
const styles = {
  list: {
    width: 250
  }
};

class DrawerRHS extends React.Component {
  state = {
    right: false,
    nameadd: "",
    hj: [],
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    name: "",
    open: false,
    profilepic: "",
    open2: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open2: false });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };

  disable = () => {
    return this.state.name.length > 0 ? false : true;
  };

  setName = (e) => {
    {
      this.setState({ name: e.target.value });
    }
  };
  updateProfile = async () => {
    const { accounts, contract } = this.props;

    console.log(contract);

    await contract.methods
      .updateProf(this.state.name, this.state.profilepic, accounts[0])
      .send({ from: accounts[0] });

    const response = await contract.methods.getProfile(accounts[0]).call();
    console.log(response[0] + "updated");
    {
      this.handleClose();
    }
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

  captureFile = (event) => {
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

  hj = async (a) => {
    await ipfs.add(a, (err, ipfsHash) => {
      console.log(err, ipfsHash);

      this.setState({ profilepic: ipfsHash[0].hash });
    });
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  st = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods
      .getInstitutesWallet(accounts[0])
      .call();
    console.log(response);
    this.setState({ nameadd: response });
    await this.getname();
  };

  getname = async () => {
    const { accounts, contract } = this.props;

    var hj = [];

    this.state.nameadd.map(async (nameadd) => {
      const response2 = await contract.methods.getProfile(accounts[0]).call();

      hj.push({ add: nameadd, name: response2[0], pic: response2[1] });
    });

    this.setState({ hj: hj });
  };
  componentDidMount = async () => {
    this.st();
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem>
            <ListItemText>
              <Typography variant="h5" color="primary">
                Linked Accounts
              </Typography>
              <Typography variant="caption">
                (Click on the Account to view details.)
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          {this.state.hj.map((name) => {
            return (
              <div>
                <ListItem
                  onClick={() => {
                    this.setState({ open2: !this.state.open });
                  }}
                >
                  <Typography variant="h5" color="black">
                    {name.name}
                    <br />
                  </Typography>
                  <ListItemText />
                </ListItem>
              </div>
            );
          })}
        </List>

        <Dialog
          open={this.state.open2}
          onClose={this.handleClose2}
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
                <Typography variant="h5"> Name : Tom Cruise</Typography>
                <Typography variant="overline">
                  ADDRESS : 88XX59E9VR5851
                </Typography>
              </DialogContentText>
              <br />
              {/* <DialogContentText style={{ marginTop: "15px" }}>
              Create New Upload
            </DialogContentText> */}
              <Grid container justify="center">
                <img
                  src="https://99designs-blog.imgix.net/wp-content/uploads/2016/11/CNN.png?auto=format&q=60&fit=max&w=930"
                  alt="CNN"
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
                  <ListItemText>Adhar Card</ListItemText>
                  <Button>Browse </Button>
                  <Button>Upload </Button>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>Class X Marksheet</ListItemText>
                  <Button>Browse </Button>
                  <Button>Upload </Button>
                </ListItem>
                <Divider />
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose2} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose2} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    );

    return (
      <div>
        <Button
          style={{ color: "#009688" }}
          onClick={this.toggleDrawer("right", true)}
        >
          View Linked Accounts
        </Button>

        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            {sideList}
          </div>
          {this.state.name}
        </Drawer>
      </div>
    );
  }
}

DrawerRHS.propTypes = {
  classes: PropTypes.object.isRequired
};

// this is the drawer rhs
export default withStyles(styles)(DrawerRHS);
