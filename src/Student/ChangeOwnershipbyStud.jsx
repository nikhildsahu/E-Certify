import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Avatar, Grid, TextField, Card } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

function getSteps() {
  return [
    <div>
      <Typography variant="headline">Enter Address</Typography>
    </div>,
    <div>
      <Typography variant="headline">
        Confirm details of the Institute
      </Typography>
    </div>,
    <div>
      <Typography variant="headline">Are You Sure?</Typography>
    </div>
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          Enter the Address of the Institute you want to transfer your
          ownership.
          <br />
          <TextField
            id="standard-with-placeholder"
            label="Address*"
            placeholder="Enter Address"
            margin="normal"
          />
        </div>
      );
    case 1:
      return (
        <div>
          {/* <Grid container justify="center">
            <Grid item md={1}> */}
          <Avatar
            style={{ height: "75px", width: "75px" }}
            src="data:image/png;base64,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"
          />
          {/* </Grid>
            <Grid item md={2}> */}
          <Typography variant="h5">RCOEM</Typography>
          <br />
          <Typography variant="overline">ADDRESS : 88XX544FF44888</Typography>
          {/* </Grid>
          </Grid> */}
        </div>
      );
    case 2:
      return `Are you sure you want to transfer the ownership.`;
    default:
      return "Unknown error occered!";
  }
}

class TransferOwnership extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div>
        <Grid container justify="center">
          <Card style={{ width: "450px", margin: "50px", padding: "25px" }}>
            <Typography variant="h4" style={{ color: "#303F9F" }}>
              Transfer of Ownership
            </Typography>
            <div>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      <Typography>{getStepContent(index)}</Typography>
                      <div className={classes.actionsContainer}>
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            onClick={this.handleBack}
                            className={classes.button}
                          >
                            Cancel
                          </Button>
                          {/* map cancel to an error and back to dashboard */}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1
                              ? "Confirm"
                              : "Next"}
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                  <Typography>Your request has been initiated !</Typography>
                  <Button onClick={this.handleReset} className={classes.button}>
                    Back to Dashboard
                  </Button>
                </Paper>
              )}
            </div>
          </Card>
        </Grid>
      </div>
    );
  }
}

TransferOwnership.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(TransferOwnership);
