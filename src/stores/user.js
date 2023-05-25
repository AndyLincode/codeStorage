import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    name: "Andy",
    phone: "0911223344",
    email: "andy@mail.com",
  });

  return {
    user
  }
});
