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
      const mealStore = useMealStore();
      mealStore.setMealDate();

      const userId = await supabase.auth.getUser().then((res) => {
        return res.data.user?.id as never;
      });

      console.log(mealStore.getmealType);

      const { data, error } = await useAsyncData("meal", async () => {
        const { data } = await supabase
          .from("Meal")
          .select("*")
          .eq("user_id", userId)
          .eq("meal_type", mealStore.getmealType)
          .eq("date", mealStore.getMealDate)
          .limit(1);

        return data;
      });

      if (error.value) {
        console.log(error.value);
        return true;
      }

      console.log(userId, mealStore.getmealType, mealStore.getMealDate);
      console.log(Boolean(data.value?.length));
      if (data.value?.length) {
        return true;
      } else {
        return false;
      }
    },
    async addProduct(productId: string, quanity: number): Promise<void> {
      const supabase = useSupabaseClient();
      const mealStore = useMealStore();
      let mealId = "";

      const userId = await supabase.auth.getUser().then((res) => {
        return res.data.user?.id as never;
      });

      if (!(await this.checkIfMealExist())) {
        mealId = uuidv4();
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
      } else {
        const mealNumber = mealStore.mealType;

        const { data, error } = await useAsyncData("meal", async () => {
          mealStore.setMealDate();
          const { data } = await supabase
            .from("Meal")
            .select("*")
            .eq("user_id", userId)
            .eq("date", mealStore.getMealDate)
            .eq("meal_type", mealNumber)
            .limit(1);

          return data;
        });

        if (error.value) {
          console.log(error.value);
        }

        if (data.value) {
          mealId = data.value[0].meal_id;
        }
      }

      const { data } = await useAsyncData("meal", async () => {
        console.log(mealId);
        const FoodObject = {
          meal_id: mealId,
          product_id: productId,
          quanity: quanity,
        } as never;

        const { data } = await supabase.from("Food").insert(FoodObject);
      });
    },
    async getMeals(): Promise<any> {
      const supabase = useSupabaseClient();
      const mealStore = useMealStore();

      const userId = await supabase.auth.getUser().then((res) => {
        return res.data.user?.id as never;
      });

      return await useAsyncData("meals", async () => {
        mealStore.setMealDate();
        const date = mealStore.getMealDate;

        const { data, error } = await supabase
          .from("Meal")
          .select("*")
          .eq("user_id", userId)
          .eq("date", date)
          .then((res) => {
            return res;
          });

        if (error) {
          console.log(error);
        }

        return data;
      });
    },
  },
});
