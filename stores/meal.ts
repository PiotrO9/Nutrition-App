import { defineStore } from "pinia";

interface mealProps {
  mealType: number;
  mealDate: Date;
}

export const useMealStore = defineStore("meal", {
  state: (): mealProps => ({
    mealType: 0,
    mealDate: new Date(),
  }),
  actions: {
    setmealType(number: number): void {
      this.mealType = number;
    },
    setMealDate(): void {
      const today = new Date();
      const formattedDate = `${today.getDate().toString().padStart(2, "0")}-${(
        today.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${today.getFullYear()}`;
      this.mealDate = new Date(formattedDate);
    },
  },
  getters: {
    getMealData(): mealProps {
      return {
        mealType: this.mealType,
        mealDate: this.mealDate,
      };
    },
    getmealType(): number {
      return this.mealType;
    },
    getMealDate(): Date {
      return this.mealDate;
    },
  },
});
