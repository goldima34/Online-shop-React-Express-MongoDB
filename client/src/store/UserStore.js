import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  isActivate = false;
  isAdmin = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setAdmin(bool) {
    this.isAdmin = bool;
  }

  setActivate(bool) {
    this.isActivate = bool;
  }

  setUser(user) {
    this.user = user;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      console.log(response);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
    }
  }
  async registration(email, password) {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser();
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await AuthService.refresh();
      //console.log(response);
      this.setAuth(true);
      this.setUser(response.data.user);
      localStorage.setItem("token", response.data.accessToken);
    } catch (e) {
      console.log(e);
    } finally {
      this.setLoading(false);
    }
  }
}
