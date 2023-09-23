import { defineStore } from "pinia";

interface AlertState {
  isActive: boolean;
  message: string;
}

export const useAlertStore = defineStore("alert", {
  state: (): AlertState => ({
    isActive: false,
    message: "",
  }),
  getters: {
    getIsActive(): boolean {
      return this.isActive;
    },
    getMessage(): string {
      return this.message;
    },
  },
  actions: {
    setAlertState(message: string): void {
      (this.isActive = true), (this.message = message);
    },
    disableAlert(): void {
      (this.isActive = false), (this.message = "");
    },
  },
});
