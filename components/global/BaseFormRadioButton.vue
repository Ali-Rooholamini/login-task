<template>
  <div class="base-radio-button">
    <span class="base-radio-button_title">جنسیت</span>
    <div class="base-radio-button_buttons-wrapper">
      <label
        class="base-radio-button_button"
        :class="{ active: checkedValue === option }"
        v-for="(option, index) in options"
        :key="index"
      >
        <input
          type="radio"
          :id="index"
          :name="title"
          :value="option"
          @change="setValue"
        />
        <span class="base-radio-button_button_checkbox">
          <nuxt-icon
            :name="checkedValue === option ? 'trg-check-circle' : 'trg-circle'"
          />
        </span>
        <span class="base-radio-button_button_title">{{ option }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseFormRadioButton",
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      checkedValue: "",
    };
  },

  methods: {
    setValue(event) {
      this.checkedValue = event.target.value;
      this.$emit("input", this.checkedValue);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  display: none;
}

input[checked] + .base-radio-button_button_checkbox {
  > .nuxt-icon &::v-deep svg {
    color: $primary-color;
  }
}

.base-radio-button {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .base-radio-button_title {
    font-size: 16px;
    font-weight: 600;
    line-height: 20.8px;
    color: $grey-text-color;
    margin-left: 40px;
  }

  .base-radio-button_buttons-wrapper {
    width: 100%;
    display: flex;
    align-content: center;
    gap: 32px;

    .base-radio-button_button {
      display: flex;
      align-items: center;
      gap: 14px;
      cursor: pointer;

      .base-radio-button_button_checkbox {
        display: block;

        > .nuxt-icon::v-deep svg {
          width: 20px;
          height: 20px;
          transition: ease-out 300ms;
          color: $secondary-background-color;
        }
      }
      .base-radio-button_button_title {
        transition: ease-out 200ms;
        font-size: 16px;
        font-weight: 600;
        line-height: 20.8px;
        color: $light-grey-text-color;
        margin-left: 40px;
      }
    }

    .base-radio-button_button.active {
      .base-radio-button_button_checkbox > .nuxt-icon::v-deep svg {
        color: $primary-color;
      }
      .base-radio-button_button_title {
        color: $primary-color;
      }
    }
  }
}
</style>
