<p align="center">
 
<img height=200px src="./src/logo/logo.jpeg" >         
        </p>
<h1 align="center"> E-Certify </h1>
<h3 align="center"> Blockchain Based Certificate Validation <h3>
  

<div align="center">
  
 
  [![made-with-react](https://img.shields.io/badge/React-2.1.5-brightgreen.svg?style=for-the-badge)](https://github.com/facebook/create-react-app)
   [![](https://img.shields.io/badge/-Ethereum-lightgrey.svg?style=for-the-badge)](https://www.ethereum.org/)
    ![](https://img.shields.io/badge/Smart%20-Contract-lightgrey.svg?style=for-the-badge)
 ![](https://img.shields.io/github/forks/nikhildsahu/E-Certify.svg?style=for-the-badge) 
  ![](https://img.shields.io/github/stars/nikhildsahu/E-Certify.svg?style=for-the-badge) 
  ![](https://img.shields.io/github/license/nikhildsahu/E-Certify.svg?style=for-the-badge)
  
 </div>

##  E-Certify : About
- It is a blockchain based project for online certificate validation. 
- The major problem of counterfeit certificates can be tackled with the help of E-Certify, as it provides a solution to preserve the       genuineness of a certificate. 
- It works on the idea that: “Only the issuer can upload the certificate and the rest people can only view  it.” The entire process       works on the blockchain in partnership with the IPFS(to provide data security). 
- Does Everything for Certificates : Storing ,Validating and Sharing .
- Thus this is a modern and hassle-free solution to manage certificates and verify them!
- This Project was made at SIH 2019
## Insight
- It is D-App on [Ethereum](https://www.ethereum.org/).
- Back-End has Smart Contract 
- Front-end of our Web-App is made with [React.Js](https://github.com/facebook/create-react-app) and our complete frontend components are available at [@gauravsharma-gs](https://github.com/gauravsharma-gs)  /dapper-ui   ([visit](https://github.com/gauravsharma-gs/dapper-ui))   
- All User-Data is stored on [IPFS](https://ipfs.io/) also every data is first encryted locally and then send to ipfs to have more security
<p align="center">
 <img height=350px  src="./img/screens/encryt.PNG" >
</p>

- It create Multi-Sig Wallets for every student where both Student and his/her Institute is Owner.
- We are using [Metamask](https://metamask.io/) Browser Extension to work with Ethereum.
- We have used [Truffle](https://www.trufflesuite.com/) for testing our project

## How to Use

### Login
- There are two ways to login
  - Login as `Student`
  - Login as `Institute`
  
<p align="center">
 <img height=350px  src=".//img/s1.png" >
</p>

 - Upon First Signup `Metamask` will ask permission to connect your wallet with App.
 
 <p align="center">
 <img height=350px  src=".//img/s17.png" >
</p>

- There is an additional security by using `OTP` for Signup .   
- For `Student`  
   -Student need to connect their account with their Institute by giving Institute Address Key .
- For `Institute`  
   -Student will to connect their account with Institute.
   
### Dashboard

 #### Student Dashboard
 
 <p align="center">
 <img height=350px  src=".//img/s8.png" >
</p>

- Student Dashboard have these options :
 
 - `My Documents`
   - Students can upload their Certificates themselves but these certificates need to be verified by Institute side ,only then                 certificates will appear in my documents section.
 
 - `Give Access`
    - Students can give access to any other institute/organisation to his/her certificates , access is only given for limited time             (24hr)
 
 - `Change Institute` 
    - Students can request change of institute , this request is sent to current institute ,Upon approval students institute is changed. 
   
 #### Institute Dashboard
 
 <p align="center">
 <img height=350px  src=".//img/s11.png" >
</p>
 
 - Institute Dashboard have these options :
 
 - `Linked Accouts`
   - In this section all student accounts linked to institute are shown.
   - Institute can students certificates from here.
   - Also institute can upload new certificates to students from here.
  
  - `Access Rights`
    - It shows all the student accounts to whom institute has access ,to see their certificates.
  
  - `Pending Approvals`
    - Student requests for certificates approvals appear here .
 
 - `Change Institute Approvals`
   - Student requests for change of institute appear here .
    
## Installation 

### For Development
 - We are using Truffle for testing and development of this project.
 - Also you need to have Metamask Browser Extension.
 - For setting up Truffle (more detailed instruction are avalaible [here](https://github.com/truffle-box/react-box) )  
 - Steps :
   - Clone the repo
   > $ git clone https://github.com/nikhildsahu/E-Certify.git
   - Setup Truffle
     - Install truffle
     > $ npm install -g truffle
     - Unbox React inside any Directory 
     > $ truffle unbox react
     - Inside that Directory
     - Now replace Contracts folder with  Contracts folder present in Repo.
     - Also Copy Complete Repo content in to Client folder. 
     - Run the development console 
     > $ truffle develop
     - Compile and migrate the smart contracts.
     > compile
     
     > migrate
     - In the client directory, we run the React app.
     >// in another terminal (i.e. not in the truffle develop prompt)
     
     > $ cd client
     
     > $ npm run start
     
  - Open http://localhost:3000 to view it in the browser.       
  - Import Account on Metamask with keys given by Truffle .
  - Testing and Development can be done on these Accounts.
  - Smart contract changes must be manually recompiled and migrated then only it will work.
  -------------------------------------
  ## Contributing
  - We're are open to enhancements & bug-fixes.
  - Feel free to add issues and submit patches.
  ## Authors
  - Atharva Udapure - [atharvau](https://github.com/atharvau)
  - Nikhil Sahu - [nikhildsahu](https://github.com/nikhildsahu)
  - Gaurav Sharma - [gauravsharma-gs](https://github.com/gauravsharma-gs)
## License
This project is licensed under the MIT - see the [LICENSE](https://github.com/nikhildsahu/E-Certify/blob/master/LICENSE) file for details.
  
