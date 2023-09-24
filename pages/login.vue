<template>
  <div class="login-page">
    <LoginForm @formStep="setFormStep" />
    <div>
      <img
        :src="formStepImage[formStep]"
        alt="login"
        width="738"
        height="668"
      />
    </div>
  </div>
</template>

<script>
import LoginForm from "~/components/page/login/LoginForm.vue";
export default {
  name: "LoginPage",
  components: {
    LoginForm,
  },
  data() {
    return {
      formStep: "loginStep",
    };
  },
  computed: {
    formStepImage() {
      return {
        loginStep: "/images/login.jpg",
        otpEmailStep: "/images/otp-email.jpg",
        otpPhoneStep: "/images/otp-phone.jpg",
        forgetPassStep: "/images/forget-pass.jpg",
        newPassStep: "/images/new-pass.jpg",
        registerStep: "/images/register.jpg",
      };
    },
  },
  methods: {
    setFormStep(event) {
      this.formStep = event;
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px;
}
</style>

<style lang="scss">
body {
  background-color: $white-color;
}
</style>
