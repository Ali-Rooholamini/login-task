<template>
  <div>
    <LoginStep
      v-if="formStep === 'loginStep'"
      @setNewStep="formStep = $event"
    />
    <RegisterStep
      v-if="formStep === 'registerStep'"
      @setNewStep="formStep = $event"
    />
    <ForgetPassStep
      v-if="formStep === 'forgetPassStep'"
      @setNewStep="formStep = $event"
    />
  </div>
</template>

<script>
import LoginStep from "~/components/page/login/LoginStep.vue";
import RegisterStep from "~/components/page/login/RegisterStep.vue";
import ForgetPassStep from "~/components/page/login/ForgetPassStep.vue";
export default {
  name: "LoginForm",
  components: {
    LoginStep,
    RegisterStep,
    ForgetPassStep,
  },
  data() {
    return {
      formStep: "forgetPassStep",
    };
  },

  watch: {
    formStep: {
      immediate: true,
      handler(newStep) {
        this.$emit("formStep", newStep);
      },
    },
  },
};
</script>
