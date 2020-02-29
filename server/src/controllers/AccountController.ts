import { Request, Response, NextFunction } from "express";

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
  static createUser = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "User was created successfully" });
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
