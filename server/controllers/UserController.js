import UserService from "../Services/UserService.js";

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await UserService.registraton(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 100,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      console.log(error);
    }
  }

  async login(req, res, next) {
    try {
    } catch (error) {}
  }

  async logout(req, res, next) {
    try {
    } catch (error) {}
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

export default new UserController();
