import { defineStore } from "pinia";
import alertType from "../enums/alertType";
import getAlertTranslation from "~/utils/alert/getAlertTranslation";
import getAlertIocn from "~/utils/alert/getAlertIcon";

interface AlertState {
  isActive: boolean;
  message: string;
  alertType: alertType | null;
  alertIcon: string;
}

export const useAlertStore = defineStore("alert", {
  state: (): AlertState => ({
    isActive: false,
    message: "",
    alertType: null,
    alertIcon: "",
  }),
  getters: {
    getIsActive(): boolean {
      return this.isActive;
    },
    getMessage(): string {
      return this.message;
    },
    getIcon(): string {
      return this.alertIcon;
    },
  },
  actions: {
    setAlertState(
      message: string,
      alertType: alertType,
      alertIcon: string
    ): void {
      (this.isActive = true),
        (this.message = getAlertTranslation(message)),
        (this.alertType = alertType),
        (this.alertIcon = getAlertIocn(alertIcon));
    },
    disableAlert(): void {
      (this.isActive = false), (this.message = "");
    },
  },
});
