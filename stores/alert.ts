import { defineStore } from "pinia";
import alertType from "../enums/alertType";

interface AlertState {
  isActive: boolean;
  message: string;
  alertType: alertType | null;
}

export const useAlertStore = defineStore("alert", {
  state: (): AlertState => ({
    isActive: false,
    message: "",
    alertType: null,
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
    setAlertState(message: string, alertType: alertType): void {
      (this.isActive = true),
        (this.message = message),
        (this.alertType = alertType);
    },
    disableAlert(): void {
      (this.isActive = false), (this.message = "");
    },
  },
});
