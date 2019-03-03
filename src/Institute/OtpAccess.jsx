import React, { Component } from "react";
import {
  Grid,
  Card,
  Typography,
  List,
  ListItem,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText
} from "@material-ui/core";

class OtpAccess extends Component {
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
    return (
      <div>
        <Grid container>
          <Grid item md={3} />
          <Grid item md={5}>
            <Card style={{ padding: "25px", margin: "50px", width: "500px" }}>
              <Typography variant="h4" color="primary">
                Request to View
              </Typography>
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item md={6}>
                      {/* <Typography variant="h5">Tom Cruise</Typography>

                      <Typography variant="overline">
                        ADDRESS : 5484DTHTFGJN98F4
                      </Typography> */}
                      <TextField
                        id="standard-name"
                        label="Address"
                        margin="normal"
                        style={{ width: "250px" }}
                      />
                    </Grid>
                    <Grid item md={1} />
                    <Grid item md={3}>
                      <div>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={this.handleClickOpen}
                          style={{ margin: "30px" }}
                        >
                          Request
                        </Button>
                        <Dialog
                          open={this.state.open}
                          onClose={this.handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"Authenticate"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Enter the OTP sent to the owner of the Account !
                            </DialogContentText>{" "}
                            <TextField
                              id="standard-name"
                              label="OTP"
                              margin="normal"
                              style={{ width: "250px" }}
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                              Cancel
                            </Button>
                            <Button
                              onClick={this.handleClose}
                              color="primary"
                              autoFocus
                            >
                              Confirm
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default OtpAccess;
