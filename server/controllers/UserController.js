const UserService = require("../Services/UserService.js");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/ApiError.js");
const e = require("express");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("validation error", errors.array()));
      }
      const { email, password } = req.body;
      const userData = await UserService.registraton(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 100,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body();
      const userData = await UserService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 100,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {}
  }

  async logout(req, res, next) {
    try {
      const activationLink = req.params.activationLink;
      await UserService.activate(activationLink);
      res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      console.log(error);
    }
  }

  async activate(req, res, next) {
    try {
    } catch (error) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (error) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json(["1234", "234"]);
    } catch (error) {}
  }
}

module.exports = new UserController();
