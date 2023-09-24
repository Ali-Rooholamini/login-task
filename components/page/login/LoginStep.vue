<template>
  <div>
    <form class="login-step_form">
      <strong>ورود به پنل</strong>
      <div>
        <input type="text" placeholder="موبایل/ایمل" />
        <input type="text" placeholder="رمزعبور" />
        <button>ورود به پنل</button>
      </div>
    </form>
    <button>فراموشی رمز عبور</button>
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
.login-step_form {
  width: 378px;
  display: flex;
  flex-direction: column;
  text-align: center;

  strong {
    font-size: 24px;
    line-height: 31.2px;
    font-weight: 800;
  }
}
</style>
