import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";

// import DabContract from "./contracts/Dab.json";

import getWeb3 from "./utils/getWeb3";
import MultiSig from "./Student/MultiSig.jsx";
import Upload from "./Student/Upload.jsx";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  BrowserRouter
} from "react-router-dom";
import NewRequest from "./Institute/NewRequest.jsx";
import MyRequest from "./Student/MyRequest.jsx";
import Routes from "./Routes/Routes.jsx";
import InstRoutes from "./Routes/InstRoutes";
import MyRequestInst from "./Institute/MyRequestInst.jsx";
import MyProfile from "./Student/MyProfile.jsx";
import MyInstitute from "./Institute/MyInstitute.jsx";
import MultiSigCreationInst from "./Institute/MultiSigCreationInst.jsx";
import MultiSigCreationStud from "./Student/MultiSigCreationStud";
import UpdateProfile from "./Student/UpdateProfile.jsx";
import StudentDashBoard from "./Student/StudentDashBoard.jsx";
import ChangeInstitute from "./Student/ChangeInstitute.jsx";
import Inst from "./Institute/InstChangeApprovalbyInst";
import ApproveUpload from "./Institute/ApproveUpload.jsx";
import InstChangeApprovalbyInst from "./Institute/InstChangeApprovalbyInst";
import ChangeOwnershipApprovalbyInst from "./Institute/ChangeOwnershipApprovalbyInst";
import InstituteDashBoard from "./Institute/InsituteDashBoard.jsx";
import Dash from "./Institute/Dash.jsx";
import Login from "./Login/Login.jsx";
import UpdateProf from "./Student/UpdateProfile2.jsx";
import fire from "./Fire";
import SignUpGoogle from "./Auth/SignUpG.jsx";
import SignUpGoogleI from "./Auth/SignUpI";
import OtpI from "./Login/OtpI.jsx";
import OtpS from "./Login/OtpS.jsx";

// import ChangeOwnershipbyStud from "./Student/ChangeOwnershipbyStud";
class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    student: { pendinguploads: ["ssc", "hsc"] }
  };
  OnK = () => {};

  componentDidMount = async () => {
    try {
      fire
        .database()
        .ref()
        .child("jjA")
        .set("A");
      this.OnK();
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const web3 = await getWeb3();

    // Use web3 to get the user's accounts.
    const y = await web3.eth;

    // // Stores a given value, 5 by default.
    // await contract.methods.set(120).send({ from: accounts[0] });

    // // // Get the value from the contract to prove it worked.

    // // Update state with the result.

    // await contract.methods
    //   .createNewMultiSigbyUser(accounts[0])
    //   .send({ from: accounts[0] });

    // await contract.methods.uploadAadhar("PURE").send({ from: accounts[0] });

    // var res = await contract.methods.getAadhar().call();
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            {" "}
            <Switch>
              <Route
                path="/login"
                component={() => (
                  <Login
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />{" "}
              <Route
                path="/CreateStudMultisig"
                component={() => (
                  <MultiSigCreationStud
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/GoogleLoginS"
                component={() => (
                  <SignUpGoogle
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/GoogleLoginI"
                component={() => (
                  <SignUpGoogleI
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/OtpI"
                component={() => (
                  <OtpI
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/OtpS"
                component={() => (
                  <OtpS
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/CreateInstMultisig"
                component={() => (
                  <MultiSigCreationInst
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              {/* <Route
                path="/upload"
                component={() => (
                  <Upload
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />{" "} */}
              <Route
                path="/MyProfileStud"
                component={() => (
                  <MyProfile
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />{" "}
              <Route
                path="/MyProfileInst"
                component={() => (
                  <MyInstitute
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/createstud"
                component={() => (
                  <UpdateProfile
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/createinst"
                component={() => (
                  <UpdateProf
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/StudentDashBoard"
                component={() => (
                  <StudentDashBoard
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/InstituteDashBoard"
                component={() => (
                  <InstituteDashBoard
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/dd"
                component={() => (
                  <Dash
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              {/* <Route
                path="/chnageinst"
                component={() => (
                  <ChangeInstitute
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />
              <Route
                path="/instchangeapp"
                component={() => (
                  <InstChangeApprovalbyInst
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  /> */}
              )} />{" "}
              {/* <Route
                path="/new"
                component={() => (
                  <NewRequest
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />{" "}
              <Route
                path="/my"
                component={() => (
                  <MyRequest
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />{" "}
              <Route
                path="/myi"
                component={() => (
                  <MyRequestInst
                    accounts={this.state.accounts}
                    contract={this.state.contract}
                  />
                )}
              />{" "}
              */}{" "}
            </Switch>{" "}
            {/* <Routes />
            <InstRoutes /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
