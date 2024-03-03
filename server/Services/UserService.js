import userModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

class UserService {
  async registraton(email, password) {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw new Error(`Користувач за таким Email вже існує ${email}`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await userModel.create({ email, password: hashPassword });
  }
}

export default new UserService();
