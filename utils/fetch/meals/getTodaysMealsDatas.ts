import { useActionsStore } from "~/stores/actions";
import MealData from "~/types/MealData";

const getTodaysMealsDatas = async (): Promise<MealData[]> => {
  const mealsIds: string[] = [];
  const resultMeals = [];
  const actionsStore = useActionsStore();

  const meals = await actionsStore.getMeals().then((res) => {
    return res.data.value;
  });

  meals.forEach((meal: any) => {
    mealsIds.push(meal.meal_id as string);
  });

  console.log(mealsIds);
  mealsIds.forEach(async (mealId: string) => {
    const data = await actionsStore.getFoodByMealId(mealId);
    console.log(data.value);
  });

  return meals;
};

export default getTodaysMealsDatas;
