<template>
  <div class="password-validation">
    <div class="password-validation_bar green">
      <div
        class="password-validation_inner-bar"
        :class="validationResult.progress"
      ></div>
    </div>
    <div class="password-validation_validation-hints-wrapper">
      <div ref="validations" class="password-validation_validation-hints">
        <span :class="{ green: lengthValidation }">
          <nuxt-icon name="trg-check-circle" /> حداقل 8 کاراکتر
        </span>
        <span :class="{ green: hasTextValidation }">
          <nuxt-icon name="trg-check-circle" /> حاوی حروف انگلیسی
        </span>
        <span :class="{ green: hasNumberValidation }">
          <nuxt-icon name="trg-check-circle" /> عدد
        </span>
      </div>
      <span class="password-validation_validation-title">
        {{ validationResult.title }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordValidation",
  props: {
    userPassword: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      password: this.userPassword,
    };
  },

  watch: {
    userPassword(newPassword) {
      this.password = newPassword;
    },
  },

  computed: {
    lengthValidation() {
      if (this.password.length >= 8) {
        return true;
      }

      return false;
    },

    hasTextValidation() {
      if (this.password.length === 0) {
        return false;
      }
      const regex = /[a-zA-Z$@$!%*?&#^-_. +]+/;
      return regex.test(this.password);
    },

    hasNumberValidation() {
      const regex = /\d/;
      return regex.test(this.password);
    },

    validationResult() {
      let hintsChecked = 0;
      let result = {
        progress: "",
        title: "",
      };

      if (this.lengthValidation) {
        hintsChecked++;
      }

      if (this.hasTextValidation) {
        hintsChecked++;
      }

      if (this.hasNumberValidation) {
        hintsChecked++;
      }

      switch (hintsChecked) {
        case 1:
          result.progress = "w-25";
          result.title = "خوب";
          break;
        case 2:
          result.progress = "w-75";
          result.title = "نسبتا قوی";
          break;
        case 3:
          result.progress = "w-100";
          result.title = "قدرتمند";
          break;
        default:
          result.progress = "";
          result.title = "";
      }

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.password-validation {
  width: 100%;

  .password-validation_bar {
    width: 100%;
    height: 8px;
    border-radius: 6px;

    .password-validation_inner-bar {
      width: 0%;
      transition: linear 300ms;
      height: 8px;
      border-radius: 6px;
    }
  }

  .password-validation_bar.red {
    background-color: $val-light-red-color;

    > .password-validation_inner-bar {
      background-color: $val-red-color;
    }
  }

  .password-validation_bar.green {
    background-color: $val-light-green-color;

    > .password-validation_inner-bar {
      background-color: $val-green-color;
    }
  }

  .password-validation_validation-hints-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 16px;

    .password-validation_validation-hints {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: flex-start;

      > span {
        font-size: 13px;
        font-weight: 500;
        line-height: 17px;
        color: $light-grey-text-color;
        transition: ease-out 300ms;

        > .nuxt-icon::v-deep svg {
          width: 24px;
          height: 24px;
          margin-left: 8px;
        }
      }

      > span.green {
        color: $val-green-color !important;
      }
    }

    .password-validation_validation-title {
      font-size: 13px;
      font-weight: 500;
      line-height: 17px;
      color: $val-green-color;
    }
  }
}
</style>
