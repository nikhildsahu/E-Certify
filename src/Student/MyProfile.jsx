import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "@material-ui/core/Avatar";
class MyProfile extends Component {
  state = { list: [], lis: [], owner1: "", owner2: "" };
  sa = async () => {
    const { accounts, contract } = this.props;
    const response = await contract.methods.getOwners(accounts[0]).call();

    this.setState({ owner1: response[0] });
    this.setState({ owner2: response[1] });
    console.log("owner:Institute:" + response[1]);
    console.log("owner:Student:" + response[0]);
    // const response2 = await contract.methods
    //   .getUploadReqList(accounts[0])
    //   .call();

    // this.setState({ lis: response2 });

    // const response3 = await contract.methods.getAadhar().call();

    // this.setState({ aadhar: response3 });

    // console.log("aa", response3);
  };
  disp = () => {
    {
      this.sa.bind(this);
    }
  };
  render() {
    // return (
    //   <div>
    //     <div>
    //       <button onClick={this.sa}>Check</button>
    //       <h4>owner1 :{this.state.owner1}</h4>
    //       <h4>owner2:{this.state.owner2}</h4>
    //       <hr />
    //     </div>

    //     <div>Upload Request List</div>

    //     {this.state.lis.map(lis => {
    //       return (
    //         <div>
    //           <h4>{lis} </h4>
    //         </div>
    //       );
    //     })}
    //     <hr />
    //     <div>
    //       <h3>Aadhar : {this.state.aadhar}</h3>
    //     </div>
    //     <div />
    //   </div>
    // );
    return (
      <div>
        {this.disp()}
        <Paper
          style={{
            padding: "15px",
            marginRight: "15px",
            marginLeft: "15px",
            marginTop: "20px",
            marginBottom: "20px",
            height: "90vh",
            width: "35%"
          }}
        >
          <Grid container direction="column" spacing={16}>
            <Grid item>
              <ButtonBase>
                <button onClick={this.sa.bind(this)} style={{ width: "300px" }}>
                  Click Here to View Profile
                </button>
                <Avatar
                  alt="Student Image"
                  //src={props.src}
                  style={{
                    marginTop: "2%",
                    marginBottom: "10%",
                    marginLeft: "1.5%",
                    width: "85%",
                    height: "85%"
                  }}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <h4>
                    Name:
                    <br />
                    {
                      //props.name
                    }
                  </h4>

                  <Typography
                    variant="Headline"
                    style={{
                      marginTop: "2.5%",
                      marginBottom: "1%"
                    }}
                  >
                    Address:
                    <br />
                    {this.state.owner1}
                  </Typography>
                  <Typography
                    variant="Headline"
                    style={{
                      marginTop: "2.5%",
                      marginBottom: "1%"
                    }}
                  >
                    Institute:
                    <br />
                    {this.state.owner2}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default MyProfile;
