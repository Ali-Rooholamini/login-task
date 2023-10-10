<template>
  <div class="register-step">
    <strong>ثبت نام</strong>
    <form class="register-step_form" @submit.prevent>
      <BaseFormTextInput
        class="register-form_form-input"
        v-model:value="userFirstname"
        placeholder="نام"
      />
      <BaseFormTextInput
        class="register-form_form-input"
        v-model:value="userLastname"
        placeholder="نام خانوادگی"
      />
      <div>
        <BaseFormTextInput
          class="register-form_form-input"
          v-model:value="userPhoneNumber"
          validation-type="phoneNumber"
          :min="11"
          :max="11"
          placeholder="شماره موبایل"
          :regex="/^(\+98|0)?9\d{9}$/"
        />
        <BaseFormTextInput
          class="register-form_form-input"
          v-model:value="userEmail"
          validation-type="email"
          placeholder="ایمیل"
          :regex="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/"
        />
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
        @value="setUserSex"
      />
      <div class="register-step_form-buttons">
        <button class="form-button form-button_filled" type="submit">
          ادامه
        </button>
        <button class="form-button" type="button">
          <nuxt-icon name="google" filled />
          <span>ورود با گوگل</span>
        </button>
      </div>
      <div class="login-step_login-btn">
        <span> حساب کاربری دارید ؟ </span>
        <button type="button" @click="$emit('setNewStep', 'loginStep')">
          وارد شوید
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import BaseFormTextInput from "~/components/global/BaseFormTextInput.vue";
import BasePasswordInput from "~/components/global/BasePasswordInput.vue";
import PasswordValidation from "~/components/common/login/PasswordValidation.vue";
import BaseFormRadioButton from "~/components/global/BaseFormRadioButton.vue";

export default {
  name: "RegisterStep",
  components: {
    BaseFormTextInput,
    BasePasswordInput,
    PasswordValidation,
    BaseFormRadioButton,
  },
  data() {
    return {
      userFirstname: "",
      userLastname: "",
      userPhoneNumber: "",
      userEmail: "",
      userPassword: "",
      userSex: "",
    };
  },

  watch: {
    userFirstname(newFirstName) {
      this.$emit("setFistName", newFirstName);
    },
    userLastname(newFirstName) {
      this.$emit("setLastName", newFirstName);
    },
    userPhoneNumber(newPhoneNumber) {
      this.$emit("setPhoneNumber", newPhoneNumber);
    },
    userEmail(newEmail) {
      this.$emit("setEmail", newEmail);
    },
    userPassword(newPassword) {
      this.$emit("setPassword", newPassword);
    },
    userSex(newSex) {
      this.$emit("setSex", newSex);
    },
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
    .register-form_form-input {
      margin-bottom: 40px;
    }
  }

  .register-step_password-wrapper {
    margin-bottom: 40px;

    .register-step_password-input {
      margin-bottom: 40px;
    }
  }

  .register-step_form-buttons {
    margin-top: 40px;

    button {
      margin-bottom: 32px;
    }
  }

  .login-step_login-btn {
    font-size: 14px;
    line-height: 18.2px;
    font-weight: 400;

    > button {
      height: 56px;
      left: 0;
      z-index: 2;
      font-weight: 700;
      background-color: transparent;
      border: none;
      color: $primary-color;
      padding: 16px 24px;
      border-radius: 28px;
      transition: ease-out 300ms;

      &:hover {
        background-color: $secondary-background-color;
      }

      &:active {
        background-color: $secondary-background-color--darker;
      }
    }
  }
}
</style>
