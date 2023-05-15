require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const productData = [
  {
    id: "1",
    name: "Product 1",
    price: 1000,
    description: "Product 1 description",
  },
  {
    id: "2",
    name: "Product 2",
    price: 2000,
    description: "Product 2 description",
  },
  {
    id: "3",
    name: "Product 3",
    price: 3000,
    description: "Product 3 description",
  },
  {
    id: "4",
    name: "Product 4",
    price: 4000,
    description: "Product 4 description",
  },
  {
    id: "5",
    name: "Product 5",
    price: 5000,
    description: "Product 5 description",
  },
];

const filterData = [
  {
    DATA_SOURCE: "APAC",
    CALL_TYPE: "IB_CALL-AfterSale(JP)",
    CALL_CASE_LOG_FROM: ["Chat", "Call center"],
    name: "data1",
  },
  {
    DATA_SOURCE: "EMEA",
    CALL_TYPE: "IB_CALL-PreSale(JP)",
    CALL_CASE_LOG_FROM: ["Retailer"],
    name: "data2",
  },
  {
    DATA_SOURCE: "NA",
    CALL_TYPE: "IB_CALL-AfterSale(JP)",
    CALL_CASE_LOG_FROM: ["Corporate", "Retailer", "Chat"],
    name: "data3",
  },
];
app.get("/data", (req, res) => {
  res.json(productData);
});
app.post("/filterData", (req, res) => {
  //   console.log(req.body);
  let data = [];
  if (req.body.length > 1) {
    const groupOperator = req.body[req.body.length - 1].groupOperator;
    // console.log(req.body);
    const filterCon = req.body;
    // console.log(filterCon);
    
    console.log(data);
    // for(let i = 0; i < req.body.length; i++) {
    // console.log(column);
    // }
    // console.log(data);
  } else {
    // console.log(req.body);
    const { column, operator, value } = req.body[0];
    console.log(value);
    filterData.forEach((v, i) => {
      if (operator === "==") {
        if(value.includes(v[column])) {
            data.push(v)
        };
      } else if (operator === "!==") {
        if(!value.includes(v[column])) {
            data.push(v)
        };
      }
    });
    console.log(data);
    res.json(data);
  }
});

const port = process.env.SERVER_PORT || 6002;
app.listen(port, () => console.log(`Server is running on port ${port}`));
