import { defineStore } from "pinia";

interface YourDataType {
  id: number;
  nazwy: string;
}

export const useActionsStore = defineStore("actions", {
  state: () => ({}),
  actions: {
    async checkIfMealExist(): Promise<boolean> {
      const supabase = useSupabaseClient();

      const userId = await supabase.auth.getUser().then((res) => {
        return res.data.user?.id as never;
      });

      const { data, error } = await useAsyncData("meal", async () => {
        const { data } = await supabase
          .from("Meal")
          .select("*")
          .eq("user_id", userId)
          .limit(1);

        return data;
      });

      if (error.value) {
        console.log(error.value);
        return true;
      }

      return data.value ? true : false;
    },
    async addProduct(): Promise<void> {
      const supabase = useSupabaseClient();

      if (await !this.checkIfMealExist()) {
        const userId = await supabase.auth.getUser().then((res) => {
          return res.data.user?.id as never;
        });
      }

      const test: never = { nazwa: "testowa nazwa" };

      const { data, error } = await useAsyncData("restaurant", async () => {
        const { data } = await supabase.from("testy").insert(test);

        return data;
      });

      console.log(data.value);
    },
  },
});
