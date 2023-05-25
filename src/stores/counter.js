import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useCounterStore = defineStore("counter", () => {
  const userStore = useUserStore();
  const count = ref(0);
  const nameInput = ref("");
  const doubleCount = computed(() => count.value * 2);
  const clickShow = computed(() => {
    if (nameInput) {
      return (
        "Hi!" +
        userStore.user.name +
        "," +
        nameInput.value +
        "點擊了" +
        count.value
      );
    } else {
      return count.value;
    }
  });
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment, clickShow, nameInput };
});
