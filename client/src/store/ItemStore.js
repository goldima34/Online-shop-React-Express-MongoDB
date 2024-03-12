import { makeAutoObservable } from "mobx";

export default class ItemStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._items = [];
    this._category = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._selectedCategory = [];
    this._page = 1;
    this._totalCount = 0;
    this._limit = 6;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setItems(items) {
    this._items = items;
  }
  setCategory(category) {
    this._category = category;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }
  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }
  /////
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get items() {
    return this._items;
  }
  get category() {
    return this._category;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get selectedCategory() {
    return this._selectedCategory;
  }
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
