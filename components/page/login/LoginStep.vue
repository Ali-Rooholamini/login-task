<template>
  <div class="login-step">
    <form class="login-step_form">
      <strong>ورود به پنل</strong>
      <div>
        <input class="form-input" type="text" placeholder="موبایل / ایمیل" />
        <input class="form-input" type="text" placeholder="رمزعبور" />
        <button class="form-button" type="submit">ورود به پنل</button>
      </div>
    </form>
    <button class="login-step_forget-button" type="button">
      فراموشی رمز عبور
    </button>
    <div>
      <button>ورود با کد یک بار مصرف</button>
      <button>ورود با گوگل</button>
    </div>
    <p>حساب کاربری ندارید ؟ <span> ثبت نام کنید </span></p>
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
}

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
    margin-bottom: 32px;
  }
}
</style>
