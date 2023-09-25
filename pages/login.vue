<template>
  <div class="login-page">
    <LoginForm
      class="w-100 d-flex justify-content-center text-center"
      @formStep="setFormStep"
    />
    <div class="d-none d-lg-block">
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
      formStep: "",
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
  margin: 25px;

  @include breakpoint-up(md) {
    justify-content: space-between;
    margin: 50px;
  }
}
</style>

<style lang="scss">
body {
  background-color: $white-color;
}
</style>
