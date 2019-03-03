import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "firebase";
import fire from "../Fire";
import { Redirect } from "react-router-dom";
import { ButtonBase, Avatar, Card } from "@material-ui/core";

var provider = new firebase.auth.GoogleAuthProvider();
class SignUpGoogle extends Component {
  state = { open: false, red: false };
  onOpenModal = () => {
    this.setState({ open: true, loggin: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onRoll = e => {
    this.setState({ rollno: e.target.value });
  };
  onBatch = e => {
    this.setState({ batch: e.target.value });
  };

  c = e => {
    fire

      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        e.setState({ loggin: true });

        console.log("This ", result.user);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        console.log("This ", errorMessage);

        // ...
      });
  };

  render() {
    return (
      <div>
        <Card
          className="shadow"
          style={{
            position: "absolute",
            top: "200px",
            left: "700px",
            width: "500px",
            height: "150px"
          }}
        >
          <div style={{ padding: "10px" }}>
            <ButtonBase onClick={this.c.bind(this, this)}>
              <Avatar>
                <img
                  src="https://blog.hubspot.com/hubfs/image8-2.jpg"
                  style={{ height: "50px" }}
                />
              </Avatar>
            </ButtonBase>
            <h4>Sign in with Google !</h4>
            {this.state.loggin ? <Redirect to="/OtpI" /> : null}
          </div>
        </Card>
      </div>
    );
  }
}
export default SignUpGoogle;
