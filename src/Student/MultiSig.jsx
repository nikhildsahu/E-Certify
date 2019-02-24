// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import Grid from "@material-ui/core/Grid";
// import { withStyles } from "@material-ui/core/styles";
// import MenuItem from "@material-ui/core/MenuItem";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import Checkbox from "@material-ui/core/Checkbox";
// import SimpleStorageContract from "../contracts/SimpleStorage.json";
// import getWeb3 from "../utils/getWeb3";

// import { Link } from "react-router-dom";

// class MultiSig extends Component {
//   state = {
//     storageValue: 0,
//     web3: null,
//     accounts: null,
//     contract: null,
//     tnc: false,
//     txt: "",
//     InstAdd: ""
//   };
//   created = async () => {
//     const { accounts, contract } = this.props;

//     console.log(contract);

//     await contract.methods
//       .createNewMultiSigUser(this.state.InstAdd)
//       .send({ from: accounts[0] });
//   };

//   handleChange = name => event => {
//     this.setState({ tnc: true });
//   };

//   componentDidMount = async () => {
//     try {
//       // Get network provider and web3 instance.
//       const web3 = await getWeb3();

//       // Use web3 to get the user's accounts.
//       const accounts = await web3.eth.getAccounts();

//       // Get the contract instance.
//       // Get the contract instance.
//       const networkId = await web3.eth.net.getId();
//       const deployedNetwork = SimpleStorageContract.networks[networkId];
//       const instance = new web3.eth.Contract(
//         SimpleStorageContract.abi,
//         deployedNetwork && deployedNetwork.address
//       );

//       // Set web3, accounts, and contract to the state, and then proceed with an
//       // example of interacting with the contract's methods.
//       this.setState({ web3, accounts, contract: instance }, this.runExample);
//     } catch (error) {
//       // Catch any errors for any of the above operations.
//       alert(
//         `Failed to load web3, accounts, or contract. Check console for details.`
//       );
//       console.error(error);
//     }
//   };

//   runExample = async () => {};

//   render() {
//     return (
//       <div className="App">
//         {" "}
//         <div style={{ paddingTop: "50px" }} />
//         <div style={{ paddingTop: "50px" }}>
//           <Grid container>
//             <Grid item md={3} />
//             <Grid item md={6}>
//               <Card>
//                 <h1 style={{ padding: "25px" }}>Create New MultiSig Wallet!</h1>
//                 <hr style={{}} />
//                 <Grid container>
//                   <Grid item md={3} />
//                   <Grid item md={4}>
//                     <h3 style={{ padding: "25px" }}>
//                       Enter Institute Address:
//                     </h3>
//                   </Grid>
//                   <Grid item md={3}>
//                     <TextField
//                       required
//                       id="outlined-required"
//                       label="Required"
//                       //   defaultValue="Hello World"
//                       margin="normal"
//                       variant="outlined"
//                       onChange={e => {
//                         this.setState({ InstAdd: e.target.value });
//                         console.log(e.target.value);
//                       }}
//                     />
//                   </Grid>
//                 </Grid>
//                 <Grid container>
//                   <Grid item md={3} />
//                   <Grid item md={4}>
//                     <h3 style={{ padding: "25px" }}>Your Address:</h3>
//                   </Grid>
//                   <Grid item md={3}>
//                     <TextField
//                       disabled
//                       id="outlined-disabled"
//                       label="Your Address"
//                       defaultValue="11002255488484"
//                       margin="normal"
//                       variant="outlined"
//                     />
//                   </Grid>
//                 </Grid>
//                 <Checkbox
//                   checked={this.state.checkedB}
//                   onChange={this.handleChange("checkedB")}
//                   value="checkedB"
//                   color="primary"
//                 />
//                 I have read and Agree to All the{" "}
//                 <a href="https://metamask.io/"> Terms And Conditions</a>.
//                 <Grid container>
//                   <Grid item md={5} />
//                   <Grid item md={2}>
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       style={{ position: "unset", marginBottom: "15px" }}
//                       onClick={this.created.bind(this)}
//                     >
//                       Go!
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Card>
//             </Grid>
//           </Grid>
//         </div>
//         <Link to="/upload">AA</Link>
//       </div>
//     );
//   }
// }

// export default MultiSig;
