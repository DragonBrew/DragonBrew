import { Request, Response, NextFunction } from "express";
import Users from "../models/Users";

class AccountController {
  /**
   * @route   GET /api/v1/account
   * @description This controller gets all users
   */
  static getUsers = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "All users are here" });
  };

  /**
   * @route   POST /api/v1/account
   * @description This controller creates a new account
   */
  static createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { username, password } = req.body;
    console.log("username", username);

    try {
      const exist = await Users.findOne({ username: username });
      if (exist) {
        throw new Error("User Exist");
      }
      const user = await Users.create({ username, password });
      const token = user.getToken();

      res.status(200).json({ message: "User was created successfully", token });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

  /**
   * @route   DELETE /api/v1/account
   * @description This controller deletes a user's account
   */
  static deleteUser = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "User was deleted" });
  };
}

export default AccountController;
