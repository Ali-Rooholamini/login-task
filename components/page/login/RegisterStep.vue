<template>
  <div class="register-step">
    <strong>ثبت نام</strong>
    <form class="register-step_form">
      <input class="form-input" type="text" placeholder="نام" />
      <input class="form-input" type="text" placeholder="نام خانوادگی" />
      <div>
        <input class="form-input" type="text" placeholder="شماره موبایل" />
        <input class="form-input" type="email" placeholder="ایمیل" />
      </div>
      <div class="register-step_password-wrapper">
        <BasePasswordInput
          class="register-step_password-input"
          :min="8"
          v-model:value="userPassword"
        />
        <PasswordValidation :userPassword="userPassword" />
      </div>
      <BaseFormRadioButton
        title="جنسیت"
        :options="userSexOtions"
        @input="setUserSex"
      />
    </form>
  </div>
</template>

<script>
import BasePasswordInput from "~/components/global/BasePasswordInput.vue";
import PasswordValidation from "~/components/common/login/PasswordValidation.vue";
import BaseFormRadioButton from "~/components/global/BaseFormRadioButton.vue";
export default {
  name: "RegisterStep",
  components: {
    BasePasswordInput,
    PasswordValidation,
    BaseFormRadioButton,
  },
  data() {
    return {
      userPassword: "",
      userSex: "",
    };
  },

  computed: {
    userSexOtions() {
      return ["مرد", "زن"];
    },
  },

  methods: {
    setUserSex(event) {
      this.userSex = event;
    },
  },
};
</script>

<style lang="scss" scoped>
.register-step {
  width: 378px;

  > strong {
    display: block;
    font-size: 24px;
    line-height: 31.2px;
    font-weight: 800;
    margin-bottom: 40px;
  }

  .register-step_form {
    input {
      margin-bottom: 40px;
    }
  }

  .register-step_password-wrapper {
    margin-bottom: 40px;

    .register-step_password-input {
      margin-bottom: 40px;
    }
  }
}
</style>
