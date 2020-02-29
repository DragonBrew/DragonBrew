import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import config from "../config/config";

interface IUser extends Document {
  username: string;
  password: string;
  dateCreated: Date;
  getToken: () => string;
}

const User = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  dateCreated: { type: Date, default: new Date() }
});

// Encrypts password on create
User.pre<IUser>("save", async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// get jsonwebtoken
User.methods.getToken = function() {
  const payload = {
    id: this.id
  };
  const token = JWT.sign(payload, config.JWT_KEY);
  return token;
};

export default mongoose.model<IUser>("Users", User);
