import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Grid } from "@material-ui/core";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          View
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Close
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                History
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem>
              <ListItemText>
                <Grid container>
                  <img src={this.props.src} alt="Modiji" />
                  <ListItemText style={{ padding: "50px" }}>
                    <Typography variant="display4">
                      {this.props.name}
                    </Typography>
                    <Typography variant="title" style={{ color: "#757575" }}>
                      {this.props.address}
                    </Typography>
                    <Typography variant="title" style={{ color: "#757575" }}>
                      Uploaded on : 23/1/2008
                    </Typography>

                    <Typography variant="title" style={{ color: "#757575" }}>
                      Your Address : A787EFVX88X
                    </Typography>
                    <Typography variant="title" style={{ color: "#757575" }}>
                      Uploader Address : GH87845THH597955
                    </Typography>
                  </ListItemText>
                </Grid>
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
