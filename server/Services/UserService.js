import userModel from "../models/UserModel.js";
import MailService from "./MailService.js";
import tokenService from "./TokenService.js";
import UserDto from "../dtos/UserDto.js";
import bcrypt from "bcrypt";
import * as uuid from "uuid";

class UserService {
  async registraton(email, password) {
    //check if email exist
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw new Error(`Користувач за таким Email вже існує ${email}`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    //create user and send mail
    const user = await userModel.create({ email, password: hashPassword });
    await MailService.sendAcivationMail(
      email,
      `${process.env.API_URL}/api/user/activate/${activationLink}`
    );
    //create userModel(Dto) and tokens
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UserService();
