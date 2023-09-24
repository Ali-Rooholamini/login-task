<template>
  <div>
    <LoginStep v-if="(formStep = 'loginStep')" />
  </div>
</template>

<script>
import LoginStep from "~/components/page/login/LoginStep.vue";
export default {
  name: "LoginForm",
  components: {
    LoginStep,
  },
  data() {
    return {
      formStep: "loginStep",
    };
  },

  watch: {
    formStep(newStep, oldStep) {
      this.$emit("formStep", newStep);
    },
  },
};
</script>

<style></style>
