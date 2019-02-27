import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Typography } from "@material-ui/core";

const styles = {
  list: {
    width: 250
  }
};

class DrawerRHS extends React.Component {
  state = {
    right: false,
    nameadd: "",
    hj: []
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

    this.state.nameadd.map(async nameadd => {
      const response2 = await contract.methods.getProfile(accounts[0]).call();

      hj.push({ add: nameadd, name: response2[0], pic: response2[1] });
    });

    this.setState({ hj: hj });
  };
  componentDidMount = async () => {
    this.st();
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
          {this.state.hj.map(name => {
            return (
              <div>
                <ListItem>
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

export default withStyles(styles)(DrawerRHS);
