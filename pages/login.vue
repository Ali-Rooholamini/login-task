<template>
  <div class="login-page">
    <LoginForm
      class="w-100 d-flex justify-content-center text-center"
      @formStep="setFormStep"
    />
    <div class="d-none d-md-block">
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
  justify-content: center;
  align-items: center;
  margin: 50px;

  @include breakpoint-up(md) {
    justify-content: space-between;
  }
}
</style>

<style lang="scss">
body {
  background-color: $white-color;
}
</style>
