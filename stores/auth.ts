import { defineStore } from "pinia";
import { useAlertStore } from "./alert";
import alertType from "~/enums/alertType";
import getAlertClass from "~/utils/alert/getAlertClass";
import getAlertIcon from "../utils/alert/getAlertIcon";

interface User {
  id: string;
  email: string;
}

interface AuthState {
  user: User | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    setUser(user: any): void {
      this.user = user;
    },
    async logIn(email: string, password: string): Promise<void> {
      const client = useSupabaseClient();
      const router = useRouter();
      const alert = useAlertStore();

      const { data, error } = await client.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        const errorCode: number = error.status ?? 400;
        alert.setAlertState(
          error.message,
          getAlertClass(errorCode),
          getAlertIcon(errorCode),
          "/",
          "Go home"
        );
      } else {
        this.setUser(data);
        router.push("/dashboard");
      }
    },
    clearUser(): void {
      this.setUser(null);
    },
  },
});
