<template>
  <div>
    <LoginStep v-if="formStep === 'loginStep'" />
    <RegisterStep v-if="formStep === 'registerStep'" />
  </div>
</template>

<script>
import LoginStep from "~/components/page/login/LoginStep.vue";
import RegisterStep from "~/components/page/login/RegisterStep.vue";
export default {
  name: "LoginForm",
  components: {
    LoginStep,
    RegisterStep,
  },
  data() {
    return {
      formStep: "registerStep",
    };
  },

  watch: {
    formStep: {
      immediate: true,
      handler(newStep, oldStep) {
        this.$emit("formStep", newStep);
      },
    },
  },
};
</script>

<style></style>
