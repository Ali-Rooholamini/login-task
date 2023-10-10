<template>
  <div class="forgetpass-step">
    <div class="forgetpass-step_back-btn">
      <button
        class="forgetpass-step_back-btn"
        type="button"
        @click="$emit('setNewStep', 'loginStep')"
      >
        <nuxt-icon name="trg-arrow-right" />
        <span>بازگشت</span>
      </button>
    </div>

    <form class="forgetpass-step_form" @submit.prevent>
      <strong>فراموشی رمز عبور</strong>
      <div>
        <label>شماره موبایل یا ایمیل خود را وارد کنید</label>
        <BaseFormTextInput
          class="forgetpass-step_form-input"
          v-model:value="userEmailPhone"
          validation-type="phone/email"
          placeholder="موبایل / ایمیل"
          :regex="/^((\+98|0)?9\d{9}$|\w+@\w+\.\w{2,3})$/"
        />
        <button class="form-button form-button_filled" type="submit">
          ادامه
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import BaseFormTextInput from "~/components/global/BaseFormTextInput.vue";
export default {
  name: "ForgetPassStep",

  components: {
    BaseFormTextInput,
  },

  data() {
    return {
      userEmailPhone: "",
    };
  },

  watch: {
    userEmailPhone(newValue) {
      this.$emit("setEmailPhone", newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.forgetpass-step {
  width: 378px;

  .forgetpass-step_back-btn {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 55px;
    margin-top: 30px;

    > button {
      background-color: transparent;
      color: $dark-text-color;
      border: none;
      font-size: 14px;
      font-weight: 600;
      line-height: 18.2px;

      .nuxt-icon:deep(svg) {
        width: 16px;
        height: 16px;
      }
    }
  }

  .forgetpass-step_form {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    strong {
      font-size: 24px;
      line-height: 31.2px;
      font-weight: 800;
      margin-bottom: 48px;
    }

    label {
      display: flex;
      align-self: flex-start;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      margin: 0px 12px 8px;
      color: $dark-text-color;
    }

    .forgetpass-step_form-input {
      margin-bottom: 48px;
    }
  }
}
</style>
