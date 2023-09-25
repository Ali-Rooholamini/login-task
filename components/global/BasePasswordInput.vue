<template>
  <div class="base-password-input">
    <nuxt-icon
      v-if="hasIcon"
      class="base-password-input_password-icon"
      name="trg-password"
    />
    <input
      class="form-input base-password-input_input"
      :type="[showPassword ? 'text' : 'password']"
      :style="setPadding"
      placeholder="رمز عبور"
      :value="value"
      @input="onInput"
    />
    <nuxt-icon
      class="base-password-input_eye-icon"
      :class="{ active: showPassword }"
      name="trg-eye"
      @click="showPassword = !showPassword"
    />
  </div>
</template>

<script>
export default {
  name: "BasePasswordInput",
  props: {
    value: {
      type: String,
      requied: false,
      default: "",
    },
    hasIcon: {
      type: Boolean,
      requied: false,
      default: true,
    },
  },

  data() {
    return {
      showPassword: false,
    };
  },

  watch: {
    value(newValue, oldValue) {
      if (newValue === undefined && newValue === null) {
        this.$emit("update:value", oldValue);
      }
    },
  },

  computed: {
    setPadding() {
      return this.hasIcon ? "padding-right: 45px" : "";
    },
  },

  methods: {
    onInput(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.base-password-input {
  width: 100%;
  position: relative;

  .base-password-input_eye-icon,
  .base-password-input_password-icon {
    position: absolute;

    &::v-deep svg {
      width: 24px;
      height: 24px;
      color: $grey-text-color;
    }
  }

  .base-password-input_password-icon {
    top: 16px;
    right: 12px;
  }

  .base-password-input_eye-icon {
    top: 16px;
    left: 12px;
    cursor: pointer;
  }

  .base-password-input_input {
    padding: 14px 14px 14px 45px;
  }

  .active::v-deep svg {
    transition: ease-out 300ms;
    color: $secondary-color !important;
  }
}
</style>
