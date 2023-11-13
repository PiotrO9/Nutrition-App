import { defineStore } from "pinia";

interface mealProps {
  mealType: number;
  mealDate: string;
}

export const useMealStore = defineStore("meal", {
  state: (): mealProps => ({
    mealType: 0,
    mealDate: "",
  }),
  actions: {
    setmealType(number: number): void {
      this.mealType = number;
    },
    setMealDate(): void {
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

      this.mealDate = formattedDate;
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
    getMealDate(): string {
      return this.mealDate;
    },
  },
});
