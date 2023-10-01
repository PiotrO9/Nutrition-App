import { defineStore } from "pinia";

export const useLocalStorageStore = defineStore("localStorage", {
  state: () => ({}),
  actions: {
    setItem(key: string, value: any): void {
      if (process.client) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    },
    clearItem(key: string): void {
      if (process.client) {
        localStorage.removeItem(key);
      }
    },
    getItem(key: string): any {
      if (process.server) {
        if (localStorage.getItem(key) === null) {
          return null;
        } else {
          return JSON.parse(localStorage.getItem(key) || "");
        }
      } else {
        console.log("error2");
      }
    },
  },
});
