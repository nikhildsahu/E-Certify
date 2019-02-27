import React, { Component } from "react";
import { Grid, Typography, Avatar, Card, Button } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import AssignmentIcon from "@material-ui/icons/Assignment";
//import ExpPanel from "./ExpPanel";
import green from "@material-ui/core/colors/green";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MailIcon from "@material-ui/icons/Mail";
import AlertDialog from "../CommonComponents/AlertDialog";

class PendingApproval extends Component {
  constructor(props) {
    super(props);
    this.state = { array: [], inst: "", instname: "", instpic: "", jk: [] };
  }
  req = async () => {
    const { accounts, contract } = this.props;
    var uplist = await contract.methods.getUploadReqList(accounts[0]).call();

    var ui = [];
    uplist.map(async a => {
      var getDet = await contract.methods.getProfile(a).call();

      var qw = { a: a, name: getDet[0], pic: getDet[1] };

      ui.push(qw);
    });

    this.setState({ array: ui });

    console.log(ui);
  };
  appro = async a => {
    const { accounts, contract } = this.props;

    await contract.methods.approveUploadbyUser(a).send({ from: accounts[0] });
  };

  componentDidMount = async () => {
    this.req();
  };
  render() {
    return (
      <div>
        <Grid container>
          <Grid item md={6}>
            <Card
              style={{
                marginTop: "30px",
                marginLeft: "50px",
                marginRight: "50px",
                width: "1150px"
              }}
            >
              <Grid container>
                <Grid item md={1}>
                  <Avatar
                    style={{ margin: "15px", backgroundColor: "#ff5722 " }}
                  >
                    <MailIcon />
                  </Avatar>
                </Grid>
                <Grid item md={10}>
                  <Typography
                    variant="h4"
                    style={{
                      padding: "10px",
                      marginLeft: "15px",
                      color: "#ff5722"
                    }}
                  >
                    Pending Approvals
                    <Typography variant="caption" style={{ marginLeft: "5px" }}>
                      (Click on the Request to view the uploaded data.)
                    </Typography>
                  </Typography>
                  <hr />
                </Grid>

                {/* array map ExpPanel.jsx */}
                {this.state.array.map(jk => {
                  return (
                    <div>
                      <Grid container>
                        <Grid item md={2} style={{ marginLeft: "25px" }}>
                          <Avatar
                            style={{
                              color: "#fff",
                              backgroundColor: green[500]
                            }}
                          >
                            <MailIcon />
                          </Avatar>
                        </Grid>

                        <Grid item md={6}>
                          <Typography>
                            <em>{jk.name}</em> has uploaded your{" "}
                            <em>B.Tech Degree</em> and want your approval.
                          </Typography>
                          <br />
                        </Grid>

                        <Grid item md={1}>
                          <Button variant="outlined" color="primary">
                            View
                          </Button>
                        </Grid>
                        <Grid item md={1} />
                        <Grid item md={1}>
                          <Button
                            onClick={this.appro.bind(this, jk.a)}
                            variant="outlined"
                            color="primary"
                          >
                            Confirm
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PendingApproval;
