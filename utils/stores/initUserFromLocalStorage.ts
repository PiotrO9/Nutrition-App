import { useLocalStorageStore } from "~/stores/localStorage";

export const initUserFromLocalStorage = () => {
  const localStorageStore = useLocalStorageStore();

  return localStorageStore.getItem("user") || null;
};
