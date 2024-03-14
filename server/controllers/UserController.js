const UserService = require("../Services/UserService.js");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/ApiError.js");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Ошибка при валидации", errors.array())
        );
      }
      const { email, password, admin } = req.body;
      const userData = await UserService.registration(email, password, admin);
      console.log(userData);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await UserService.login(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      console.log(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await UserService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (error) {
      console.log(error);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.activationLink;
      await UserService.activate(activationLink);
      res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      console.log(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      // Call the refresh service function to handle token validation, renewal, etc.
      const userData = await UserService.refresh(refreshToken);

      // Set the new refresh token in a secure cookie (consider using HttpOnly flag)
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        httpOnly: true, // Prevent client-side JavaScript access
      });

      // Send the response (adjust data based on your needs)
      return res.json(userData);
    } catch (error) {
      // Handle errors appropriately (e.g., logging, sending error responses)
      console.error("Error in refresh controller:", error);
      next(error); // Pass the error to middleware for centralized handling
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();
