import { defineStore } from "pinia";
import { useAlertStore } from "./alert";
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
          getAlertIcon(errorCode)
        );
      } else {
        this.setUser(data);
        router.push("/dashboard");
      }
    },
    async SignUp(email: string, password: string): Promise<void> {
      const client = useSupabaseClient();
      const alert = useAlertStore();

      const { error } = await client.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        const errorCode: number = error.status ?? 400;

        alert.setAlertState(
          error.message,
          getAlertClass(errorCode),
          getAlertIcon(errorCode)
        );
      } else {
        alert.setAlertState(
          "Potwierdź adres e-mail",
          getAlertClass(200),
          getAlertIcon(200),
          "/login",
          "Zaloguj się"
        );
      }
    },
    clearUser(): void {
      this.setUser(null);
    },
  },
});
