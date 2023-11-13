import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { useMealStore } from "./meal";

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
    async addProduct(productId: string, quanity: number): Promise<void> {
      const supabase = useSupabaseClient();
      const mealStore = useMealStore();
      let mealId: uuidv4 = 0;

      const userId = await supabase.auth.getUser().then((res) => {
        return res.data.user?.id as never;
      });

      if (await !this.checkIfMealExist()) {
        const mealId = uuidv4();
        const mealType = mealStore.getmealType;
        mealStore.setMealDate();
        const mealDate = mealStore.getMealDate;

        const mealObject: never = {
          meal_id: mealId,
          meal_type: mealType,
          date: mealDate,
        } as never;

        const { data, error } = await useAsyncData("meal", async () => {
          const { data } = await supabase.from("Meal").insert(mealObject);
        });

        if (error.value) {
          console.log(error.value);
        }

        console.log(data.value);
      } else {
        const { data, error } = await useAsyncData("meal", async () => {
          mealStore.setMealDate();
          const { data } = await supabase
            .from("Meal")
            .select("*")
            .eq("user_id", userId)
            .eq("date", mealStore.getMealDate);
        });

        if (error.value) {
          console.log(error.value);
        }

        if (data.value) {
          mealId = data.value[0].meal_id as uuidv4;
        }
      }

      const { data } = await useAsyncData("meal", async () => {
        const FoodObject = {
          meal_id: mealId,
          product_id: productId,
          quanity: quanity,
        } as never;

        const { data } = await supabase.from("Food").insert(FoodObject);
      });

      console.log(data.value);
    },
  },
});
