import { defineStore } from "pinia";
import { useAlertStore } from "./alert";

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
    setUser(user: User | null): void {
      this.user = user;
    },
    async logIn(email: string, password: string): Promise<void> {
      const client = useSupabaseClient();
      const router = useRouter();
      const alert = useAlertStore();

      const { user, error } = await client.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.log(error.message);
        alert.setAlertState(error.message);
        throw error;
      } else {
        this.setUser(user);
        router.push("/dashboard");
      }
    },
    clearUser(): void {
      this.setUser(null);
    },
  },
});
