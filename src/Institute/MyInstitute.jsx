// import React, { Component } from "react";
// import { Button } from "@material-ui/core";
// class MyInstitute extends Component {
//   state = { li: [] };
//   olo = async () => {
//     const { contract, accounts } = this.props;
//     var a = await contract.methods.getUploadReqList(this.state.add).call();
//     this.setState({ li: a });
//   };

//   resolv = async () => {
//     const { contract, accounts } = this.props;

//     await contract.methods
//       .approveUploadbyInstitute(this.state.add)
//       .send({ from: accounts[0] });
//   };
//   render() {
//     return (
//       <div>
//         <input
//           onChange={e => {
//             this.setState({ add: e.target.value });
//           }}
//         />

//         <Button onClick={this.olo}>SEARCH</Button>
//         <div>
//           {this.state.li.map(ol => {
//             return (
//               <div>
//                 <h3>{ol}</h3>
//                 <Button onClick={this.resolv}>Verify</Button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default MyInstitute;

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackSharp from "@material-ui/icons/ArrowBackSharp";
import SettingsPower from "@material-ui/icons/SettingsPower";
import { Redirect } from "react-router-dom";
import green from "@material-ui/core/colors/green";
import LinkedAccount from "./LinkedAccounts";
import {
  Route,
  Link,
  Switch,
  BrowserRouter,
  Wrapper,
  PageWrap
} from "react-router-dom";
import {
  Card,
  Grid,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider
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
    marginLeft: -12,
    marginRight: 20
  }
};

class MyInstitute extends React.Component {
  state = {
    anchorEl: null,
    ret: false,
    hj: []
  };
  ret = () => {
    this.setState({ ret: true });
  };
  sa = async () => {
    const { accounts, contract } = this.props;

    const re = await contract.methods.getInstitutesWallet(accounts[0]).call();
    var h = [];

    re.map(async re => {
      var assa = await contract.methods.getChangeOwnerList(re).call();
      console.log("AA", re);

      var getDet = await contract.methods.getProfile(re).call();
      h.push({ a: re, b: assa[0], name: getDet[0], pic: getDet[1] });
    });

    this.setState({ hj: h });
  };
  componentDidMount = async () => {
    await this.sa();
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

            <div>
              <IconButton color="inherit">
                <SettingsPower />
              </IconButton>
            </div>
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
                  <Avatar style={{ width: "85px", height: "85px" }} src="" />
                </Grid>
                <Grid item md={6}>
                  <Typography variant="h3">RCOEM</Typography>
                  <Typography variant="overline" style={{ fontSize: "15px" }}>
                    ADDRESS : 88RG5R4VFB5VEGE6255
                  </Typography>
                  {/* <Typography variant="h6">Linked Accounts</Typography> */}
                </Grid>
                <Grid item md={2} />
                <Grid item md={1}>
                  {/* <img
                    src="https://www.crossref.org/wp/labs/uploads/sample_qr_code.jpg"
                    alt=""
                    style={{ height: "80px", width: "80px" }}
                  />{" "} */}
                  <br />
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
                    style={{ backgroundColor: "#3F51B5", padding: "25px" }}
                  >
                    <History />
                  </Avatar>
                </Grid>
                <Grid item md={9}>
                  <Button>
                    <Link
                      to="/la"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography
                        variant="headline"
                        style={{ padding: "10px" }}
                      >
                        Linked Accounts
                      </Typography>{" "}
                    </Link>
                  </Button>
                  <br />
                </Grid>
                <Grid container>
                  <Route
                    path="/la"
                    component={() => (
                      <LinkedAccount
                        accounts={this.props.accounts}
                        contract={this.props.contract}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Card> */}
          </Grid>
        </Grid>
        {this.state.ret ? <Redirect to="/InstituteDashBoard" /> : null}
      </div>
    );
  }
}

MyInstitute.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyInstitute);
