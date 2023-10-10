<template>
  <div>
    <LoginStep
      v-if="formStep === 'loginStep'"
      @setEmailPhone="setEmailOrPhone"
      @setPassword="userPassword = $event"
      @setNewStep="formStep = $event"
    />
    <RegisterStep
      v-if="formStep === 'registerStep'"
      @setFistName="userFirstname = $event"
      @setLastName="userLastName = $event"
      @setPhoneNumber="userPhoneNumber = $event"
      @setEmail="userEmail = $event"
      @setPassword="userPassword = $event"
      @setSex="userSex = $event"
      @setNewStep="formStep = $event"
    />
    <ForgetPassStep
      v-if="formStep === 'forgetPassStep'"
      @setEmailPhone="setEmailOrPhone"
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
      formStep: "loginStep",
      userEmail: "",
      userPhoneNumber: "",
      userPassword: "",
      userFirstname: "",
      userLastName: "",
      userSex: "",
    };
  },

  watch: {
    formStep: {
      immediate: true,
      handler(newStep) {
        this.$emit("formStep", newStep);
        this.clearUserData();
      },
    },
  },

  methods: {
    setEmailOrPhone(event) {
      const phoneRegex = /^(\+98|0)?9\d{9}$/;
      this.userPhoneNumber = "";
      this.userEmail = "";

      if (phoneRegex.test(event)) {
        this.userPhoneNumber = event;
      } else {
        this.userEmail = event;
      }
    },
    clearUserData() {
      this.userEmail = "";
      this.userPhoneNumber = "";
      this.userPassword = "";
      this.userFirstname = "";
      this.userLastName = "";
      this.userSex = "";
    },
  },
};
</script>
