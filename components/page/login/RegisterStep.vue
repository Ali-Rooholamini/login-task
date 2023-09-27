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
      <div>
        <BasePasswordInput :min="8" v-model:value="userPassword" />
      </div>
    </form>
  </div>
</template>

<script>
import BasePasswordInput from "~/components/global/BasePasswordInput.vue";
export default {
  name: "RegisterStep",
  components: {
    BasePasswordInput,
  },
  data() {
    return {
      userPassword: "",
    };
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
}
</style>
