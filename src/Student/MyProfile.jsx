import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../utils/getWeb3";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackSharp from "@material-ui/icons/ArrowBackSharp";
import SettingsPower from "@material-ui/icons/SettingsPower";
import { Redirect } from "react-router-dom";

import {
  Card,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import Lock from "@material-ui/icons/Lock";
import History from "@material-ui/icons/History";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    //marginLeft: -12,
    marginRight: 20
  }
};

class MyProfile extends React.Component {
  state = {
    anchorEl: null,
    list: [],
    lis: [],
    owner1: "",
    owner2: "",
    name: "",
    profilepic: "",
    aadhar: "",
    instname: "",
    instpic: "",
    ret: false
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
    const response3 = await contract.methods.getAadhar(accounts[0]).call();
    this.setState({ aadhar: response3 });

    const response2 = await contract.methods.getProfile(response[1]).call();
    this.setState({ instname: response2[0] });
    this.setState({ instpic: response2[1] });

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
  ret = () => {
    this.setState({ ret: true });
  };
  getDoc = async () => {
    const { accounts, contract } = this.props;
    var r = await contract.methods.getAadhar(accounts[0]).call();
    console.log(r);
    if (r.length > 0) {
      window.open(`https://gateway.ipfs.io/ipfs/${r}`);
    } else {
      window.alert("NULL");
    }
  };
  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.ret}
            >
              <ArrowBackSharp />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              My Profile
            </Typography>

            {/* <div>
              <IconButton color="inherit">
                <SettingsPower />
              </IconButton>
            </div> */}
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item md={3} />
          <Grid item md={6}>
            <Card
              className="shadow"
              style={{ marginTop: "20px", padding: "15px" }}
            >
              <Grid container>
                <Grid item md={2}>
                  <Avatar
                    style={{ width: "85px", height: "85px" }}
                    src={`https://gateway.ipfs.io/ipfs/${
                      this.state.profilepic
                    }`}
                  />
                </Grid>
                <Grid item md={7}>
                  <Typography variant="h3">{this.state.name}</Typography>
                  <Typography variant="overline" style={{ fontSize: "15px" }}>
                    ADDRESS : {this.props.accounts[0]}
                  </Typography>
                  <Typography variant="overline" style={{ fontSize: "15px" }}>
                    Current co-owner :{this.state.instname}
                    <br /> {this.state.owner2}
                  </Typography>
                </Grid>
                <Grid item md={2} />
                <Grid item md={1}>
                  <br />
                </Grid>
              </Grid>
            </Card>
            <Card
              className="shadow"
              style={{ marginTop: "20px", padding: "15px" }}
            >
              <Grid container>
                <Grid item md={1}>
                  <Avatar
                    style={{ backgroundColor: "#3F51B5", padding: "10px" }}
                  >
                    <MailIcon />
                  </Avatar>
                </Grid>
                <Grid item md={2}>
                  <Typography variant="headline" style={{ padding: "10px" }}>
                    Documents
                  </Typography>
                  {/*} <List>
                    <ListItem button>
                      <ListItemText>Aadhar Card</ListItemText>
                    </ListItem>
                    <ListItem button>
                      <ListItemText>Class XII Marksheet</ListItemText>
                    </ListItem>
                  </List>*/}
                  <List>
                    <Typography /*style={{ padding: "10px" }}*/>
                      <Button onClick={this.getDoc.bind(this)}>
                        B.Tech Degree
                      </Button>
                    </Typography>
                    {/* <Typography variant="headline" style={{ padding: "5px" }}
                    >
                      <Button>XII marksheet</Button>
                    </Typography>
                    <Typography variant="headline" style={{ padding: "5px" }}
                    >
                      <Button>X marksheet</Button>
                    </Typography> */}
                  </List>
                </Grid>
              </Grid>
            </Card>
            <Card
              className="shadow"
              style={{ marginTop: "20px", padding: "15px" }}
            >
              <Grid container>
                <Grid item md={1}>
                  <Avatar
                    style={{ backgroundColor: "#3F51B5", padding: "10px" }}
                  >
                    <Lock />
                  </Avatar>
                </Grid>
                <Grid item md={2}>
                  <Typography variant="headline" style={{ padding: "10px" }}>
                    Co-owner
                  </Typography>{" "}
                  <br />
                </Grid>
                <Grid container>
                  {" "}
                  <Grid item md={10}>
                    <Typography variant="h5">{this.state.instname}</Typography>{" "}
                    <Typography variant="overline">
                      {this.state.owner2}
                    </Typography>
                  </Grid>
                  <Grid item md={2}>
                    {/*<Avatar
                      style={{ height: "75px", width: "75px" }}
                      src={`https://gateway.ipfs.io/ipfs/${this.state.instpic}`}
                    />*/}
                  </Grid>
                </Grid>
              </Grid>
            </Card>
            {/* <Card
              className="shadow"
              style={{ marginTop: "20px", padding: "15px" }}
            >
              <Grid container>
                <Grid item md={1}>
                  <Avatar
                    style={{ backgroundColor: "#3F51B5", padding: "10px" }}
                  >
                    <History />
                  </Avatar>
                </Grid>
                <Grid item md={4}>
                  <Typography
                    variant="headline"
                    style={{ padding: "20px" }}
                    align="left"
                  >
                    History of Ownership
                  </Typography>
                 
                  <List>
                    <Typography
                      align="left"
                      style={{ paddingLeft: "20px", paddingTop: "5px" }}
                    >
                      ADDRESS : 94768369093878
                    </Typography>
                    <Typography
                      align="left"
                      style={{ paddingLeft: "20px", paddingTop: "10px" }}
                    >
                      2.Sri Krishna College
                    </Typography>
                    <Typography
                      align="left"
                      style={{ paddingLeft: "20px", paddingTop: "10px" }}
                    >
                      ADDRESS : 9037fh98fs6639
                    </Typography>
                  </List>
                </Grid>
                <Typography variant="h5">{this.state.instname}</Typography>{" "}
                <Typography variant="overline">
                  ADDRESS : {this.state.owner2}
                </Typography>
              </Grid>
              <Grid item md={2} style={{ marginTop: "10px" }}>
                <Avatar
                  style={{ height: "75px", width: "75px" }}
                  src={`https://gateway.ipfs.io/ipfs/${this.state.instpic}`}
                />
              </Grid>
              <Grid item md={10}>
                <Typography variant="h5">CPSKR</Typography>{" "}
                <Typography variant="overline">
                  ADDRESS : 544845848484JJUHR88484
                </Typography>{" "}
               
                <Grid item md={2} style={{ marginTop: "10px" }}>
                  <Avatar
                    style={{ height: "75px", width: "75px" }}
                    src={`https://gateway.ipfs.io/ipfs/${this.state.instpic}`}
                  />
                </Grid>
              </Grid>
             
            </Card> */}
          </Grid>
        </Grid>
        {this.state.ret ? <Redirect to="/StudentDashBoard" /> : null}
      </div>
    );
  }
}

MyProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyProfile);

// render() {
//   return (
// <div>
//   <Paper
//     style={{
//       padding: "15px",
//       marginRight: "15px",
//       marginLeft: "15px",
//       marginTop: "20px",
//       marginBottom: "20px",
//       height: "90vh",
//       width: "35%"
//     }}
//   >
//     <Grid container direction="column" spacing={16}>
//       <Grid item>
//         <ButtonBase>
//           <Avatar
//             alt="Student Image"
//             src={`https://gateway.ipfs.io/ipfs/${this.state.profilepic}`}
//             style={{
//               marginTop: "2%",
//               marginBottom: "10%",
//               marginLeft: "1.5%",
//               width: "50%",
//               height: "50%"
//             }}
//           />
//         </ButtonBase>
//       </Grid>
//       <Grid item xs={12} sm container>
//         <Grid item xs container direction="column" spacing={16}>
//           <Grid item xs>
//             <h4>
//               Name:
//               <br />
//               {this.state.name}
//             </h4>

//             <Typography
//               variant="Headline"
//               style={{
//                 marginTop: "2.5%",
//                 marginBottom: "1%"
//               }}
//             >
//               <h4>Address:</h4>
//               <br />
//               {this.state.owner1}
//             </Typography>
//             <Typography
//               variant="Headline"
//               style={{
//                 marginTop: "2.5%",
//                 marginBottom: "1%"
//               }}
//             >
//               <h4>Institute:</h4>
//               <br />
//               {this.state.owner2}
//             </Typography>
//             <button
//               onClick={() => {
//                 if (this.state.aadhar.length > 0) {
//                   window.open(
//                     `https://gateway.ipfs.io/ipfs/${this.state.aadhar}`
//                   );
//                 } else {
//                   window.alert("NULL");
//                 }
//               }}
//             >
//               aadhar
//             </button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   </Paper>
// </div>
