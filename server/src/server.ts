import express from "express";
import account from "./routes/account";
import connectDB from "./config/db";
import { CLIENT_RENEG_LIMIT } from "tls";

// Init express
const app = express();

// Connect DB
connectDB();

// Body Parser
app.use(express.json());

// Initialize Routes
// app.use("/api/v1/account", account);

app.use("/api/v1/account", (req, res)  => {
  const user1 = {
    firstName: "Malcomn",
    lastName: "Mitchell"
  }
  var user2 = { 
    firstName: "Robert",
    lastName: "Ludwik"
  }
  
  res.json([user1, user2])
})

app.listen(8080, () => {
  console.log("Listening on port 8080");
  console.log("http://localhost:8080/api/v1/account");
});
