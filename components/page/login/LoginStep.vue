<template>
  <div class="login-step">
    <form class="login-step_form">
      <strong>ورود به پنل</strong>
      <div>
        <input class="form-input" type="text" placeholder="موبایل / ایمیل" />
        <input class="form-input" type="text" placeholder="رمزعبور" />
        <button class="form-button form-button_filled" type="submit">
          ورود به پنل
        </button>
      </div>
    </form>
    <button class="login-step_forget-button" type="button">
      <nuxt-icon name="trg-password" />
      <span>فراموشی رمز عبور</span>
    </button>
    <div class="login-step_google-otp">
      <button type="button" class="form-button">
        <nuxt-icon name="trg-mobile" />
        <span>ورود با کد یک بار مصرف</span>
      </button>
      <button class="form-button">
        <nuxt-icon type="button" name="google" filled />
        <span>ورود با گوگل</span>
      </button>
    </div>
    <div class="login-step_register-btn">
      <span> حساب کاربری ندارید؟ </span>
      <button type="button">ثبت نام کنید</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginStep",
};
</script>

<style lang="scss" scoped>
.login-step {
  width: 378px;

  .login-step_form {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    strong {
      font-size: 24px;
      line-height: 31.2px;
      font-weight: 800;
      margin-bottom: 40px;
    }

    input.form-input {
      margin-bottom: 32px;
    }

    button.form-button {
      margin-bottom: 16px;
    }
  }

  .login-step_forget-button {
    color: $primary-color;
    background-color: transparent;
    border: none;
    height: 56px;
    padding: 16px 24px;
    border-radius: 28px;
    margin-bottom: 44px;
    font-size: 14px;
    font-weight: 700;
    line-height: 18.2px;

    > .nuxt-icon {
      margin-left: 8px;

      &::v-deep svg {
        width: 24px;
        height: 24px;
      }
    }

    &:hover {
      background-color: $secondary-background-color;
      transition: ease-out 300ms;
    }
  }

  .login-step_google-otp {
    margin-bottom: 21px;

    > button:first-child {
      margin-bottom: 12px;
      font-weight: bold;

      > .nuxt-icon {
        margin-left: 8px;

        &::v-deep svg {
          width: 24px;
          height: 24px;
        }
      }
    }

    > button:last-child {
      border-color: $grey-text-color;
      color: $dark-text-color;
      font-weight: bold;

      > .nuxt-icon {
        margin-left: 8px;

        &::v-deep svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  .login-step_register-btn {
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

      &:hover {
        background-color: $secondary-background-color;
        transition: ease-out 300ms;
      }
    }
  }
}
</style>
