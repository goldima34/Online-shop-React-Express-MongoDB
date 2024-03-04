import $api from "../api";
import { AxiosResponse } from "axios";

export default class UserService {
  static fetchUsers() {
    return $api.get("/user/users");
  }
}
