import { makeAutoObservable } from "mobx";

class Store {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.counter = this.counter + 1;
  };

  decrement = () => {
    this.counter = this.counter - 1;
  };
}

export const store = new Store();