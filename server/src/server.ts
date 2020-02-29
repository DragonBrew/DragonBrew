import express from "express";
import account from "./routes/account";
import connectDB from "./config/db";

// Init express
const app = express();

// Connect DB
connectDB();

// Body Parser
app.use(express.json());

// Initialize Routes
app.use("/api/v1/account", account);

app.listen(8080, () => {
  console.log("Listening on port 8080");
  console.log("http://localhost:8080/api/v1/account");
});
