class Singleton {
  constructor() {
    this._value;
    if (!Singleton._instance) {
      Singleton._instance = this;
    }
    return Singleton._instance;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    console.log(`Set value ${value}`);
    this._value = value;
  }

}

export {
  Singleton,
}
