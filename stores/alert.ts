import { defineStore } from "pinia";
import alertType from "../enums/alertType";
import getAlertTranslation from "~/utils/alert/getAlertTranslation";

interface AlertState {
  isActive: boolean;
  message: string;
  alertType: alertType | null;
  alertIcon: string;
  link: string;
  linkText: string;
}

export const useAlertStore = defineStore("alert", {
  state: (): AlertState => ({
    isActive: false,
    message: "",
    alertType: null,
    alertIcon: "",
    link: "",
    linkText: "",
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
    setAlertState(
      message: string,
      alertType: alertType,
      alertIcon: string,
      link?: string,
      linkText?: string
    ): void {
      (this.isActive = true),
        (this.message = getAlertTranslation(message)),
        (this.alertType = alertType),
        (this.alertIcon = alertIcon);

      if (link) {
        this.link = link;
      }

      if (linkText) {
        this.linkText = linkText;
      }
    },
    disableAlert(): void {
      (this.isActive = false), (this.message = "");
    },
  },
});
