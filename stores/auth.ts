import { defineStore } from "pinia";
import { useAlertStore } from "./alert";
import { useLocalStorageStore } from "./localStorage";
import getAlertClass from "~/utils/alert/getAlertClass";
import getAlertIcon from "../utils/alert/getAlertIcon";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    setUser(data: any | null): void {
      const localStorageStore = useLocalStorageStore();

      if (data) {
        const user = data.user;
        this.user = user;
        localStorageStore.setItem("user", user);
      } else {
        localStorageStore.clearItem("user");
      }
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
    SignOut(): void {
      const client = useSupabaseClient();
      client.auth.signOut();
    },
    clearUser(): void {
      this.setUser(null);
      const localStorageStore = useLocalStorageStore();
      localStorageStore.clearItem("user");
    },
  },
});
