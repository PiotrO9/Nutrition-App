import { defineStore } from "pinia";

export const useActionsStore = defineStore("actions", {
  state: (): { client: any } => ({
    client: null,
  }),
  actions: {
    createClient(): void {},
    async addItems(): Promise<void> {
      const supabase = useSupabaseClient();

      interface YourDataType {
        id: number;
        nazwy: string;
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
