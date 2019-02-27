import web3 from "./web3";
const address = "0x7cba27734d7faab5cd9daf843eecf500392deaf0";

const as = [
  {
    constant: false,
    inputs: [
      {
        name: "ad",
        type: "address"
      },
      {
        name: "io",
        type: "address"
      }
    ],
    name: "approveChangeOwnerINSTReqbyInst",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "ad",
        type: "address"
      }
    ],
    name: "approveChangeOwnerINSTReqbyStud",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "ad",
        type: "address"
      },
      {
        name: "io",
        type: "address"
      }
    ],
    name: "approveChangeOwnerSTUDReqbyInst",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "ad",
        type: "address"
      },
      {
        name: "io",
        type: "address"
      }
    ],
    name: "approveChangeOwnerSTUDReqbyStud",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "stud",
        type: "address"
      },
      {
        name: "reqq",
        type: "address"
      }
    ],
    name: "approvePartialOwnerReqfromInst",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "reqq",
        type: "address"
      }
    ],
    name: "approvePartialOwnerReqfromStudent",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "ad",
        type: "address"
      },
      {
        name: "student",
        type: "address"
      }
    ],
    name: "approveUploadbyInstitute",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "ad",
        type: "address"
      }
    ],
    name: "approveUploadbyUser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "stud",
        type: "address"
      },
      {
        name: "Inst",
        type: "address"
      }
    ],
    name: "changeOwnerInstfromInst",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "Inst",
        type: "address"
      }
    ],
    name: "changeOwnerInstfromStud",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "ad",
        type: "address"
      }
    ],
    name: "changeOwnerStudfromInst",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "ad",
        type: "address"
      }
    ],
    name: "changeOwnerStudfromStud",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "a",
        type: "address"
      }
    ],
    name: "createNewMultiSigInst",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "a",
        type: "address"
      }
    ],
    name: "createNewMultiSigUser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "a",
        type: "address"
      },
      {
        name: "adhar",
        type: "bool"
      },
      {
        name: "d",
        type: "uint8"
      }
    ],
    name: "createNewPartialOwnerRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "a",
        type: "address"
      },
      {
        name: "ad",
        type: "bool"
      },
      {
        name: "hash",
        type: "string"
      }
    ],
    name: "createUploadRequestbyInstitute",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "ad",
        type: "bool"
      },
      {
        name: "hash",
        type: "string"
      }
    ],
    name: "createUploadRequestbyUser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "stud",
        type: "address"
      },
      {
        name: "reqq",
        type: "address"
      }
    ],
    name: "declineChangeOwnerRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "set",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "name",
        type: "string"
      },
      {
        name: "pro",
        type: "string"
      },
      {
        name: "my",
        type: "address"
      }
    ],
    name: "updateProf",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "address"
      }
    ],
    name: "doesWalletExists",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getAadhar",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "address"
      }
    ],
    name: "getAadharfromPartialOwner",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "address"
      }
    ],
    name: "getChangeOwnerList",
    outputs: [
      {
        name: "",
        type: "address[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "stud",
        type: "address"
      },
      {
        name: "reqq",
        type: "address"
      }
    ],
    name: "getChangeOwnerRequestTIMESTAMP",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "ad",
        type: "address"
      }
    ],
    name: "getInstitutesUploadList",
    outputs: [
      {
        name: "",
        type: "address[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "ad",
        type: "address"
      }
    ],
    name: "getInstitutesWallet",
    outputs: [
      {
        name: "",
        type: "address[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "address"
      }
    ],
    name: "getOwners",
    outputs: [
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "stud",
        type: "address"
      },
      {
        name: "paro",
        type: "address"
      }
    ],
    name: "getPartialOwnerShipINFO",
    outputs: [
      {
        name: "",
        type: "bool"
      },
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "address"
      }
    ],
    name: "getPartialOwnerShipList",
    outputs: [
      {
        name: "",
        type: "address[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "address"
      }
    ],
    name: "getPartialOwnerSList",
    outputs: [
      {
        name: "",
        type: "address[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "address"
      }
    ],
    name: "getProfile",
    outputs: [
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "ad",
        type: "address"
      }
    ],
    name: "getUploadReqList",
    outputs: [
      {
        name: "",
        type: "address[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "stud",
        type: "address"
      },
      {
        name: "reqq",
        type: "address"
      }
    ],
    name: "getUploadRequestTIMESTAMP",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "address"
      }
    ],
    name: "isIamPartialOwner",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "j",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
export default new web3.eth.Contract(as, address);
