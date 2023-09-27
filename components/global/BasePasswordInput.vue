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
      :minlength="min"
      :maxlength="max"
      :value="value"
      @input="onInput"
    />
    <button class="base-password-input_eye-icon" type="button">
      <nuxt-icon
        :class="{ active: showPassword }"
        name="trg-eye"
        @click="showPassword = !showPassword"
      />
    </button>
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
    min: {
      type: Number,
      requied: false,
      default: 4,
    },
    max: {
      type: Number,
      requied: false,
      default: 30,
    },
  },

  data() {
    return {
      showPassword: false,
    };
  },

  computed: {
    setPadding() {
      return this.hasIcon ? "padding-right: 45px" : "";
    },
  },

  watch: {
    value(newValue, oldValue) {
      if (newValue === undefined && newValue === null) {
        this.$emit("update:value", oldValue);
      }
    },
  },

  methods: {
    onInput(event) {
      const Regex = /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/;
      if (Regex.test(event.target.value)) {
        return (event.target.value = event.target.value.replace(
          event.target.value.match(Regex),
          ""
        ));
      }

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
      color: $light-grey-text-color;
    }
  }

  .base-password-input_password-icon {
    top: 16px;
    right: 12px;
  }

  .base-password-input_eye-icon {
    top: 16px;
    left: 12px;
    border: none;
    background-color: transparent;
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
