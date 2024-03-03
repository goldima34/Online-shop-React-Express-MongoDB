const userModel = require("../models/UserModel.js");
const MailService = require("./MailService.js");
const tokenService = require("./TokenService.js");
const UserDto = require("../dtos/UserDto.js");
const bcrypt = require("bcrypt");
const { uuid } = require("uuid");
const UserModel = require("../models/UserModel.js");
const ApiError = require("../exceptions/ApiError.js");

class UserService {
  async registraton(email, password) {
    //check if email exist
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(`Користувач за таким Email вже існує ${email}`);
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

  async activate() {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("Силка для активації не коректна");
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest("Користувача з таким email не знайдено");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Невірний пароль");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

module.exports = new UserService();
