<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiApple",
  components: {
    BaseIcon,
  },
  props: {
    size: {
      type: String,
      default: "1em",
    },
    color: {
      type: String,
      default: "currentColor",
    },
    strokeColor: {
      type: String,
      default: "",
    },
    class: {
      type: String,
      default: "",
    },
    style: {
      type: Object as PropType<Record<string, string | number>>,
      default: () => ({}),
    },
    viewBox: {
      type: String,
      default: "0 0 32 32",
    },
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    },
  },
});
</script>

<template>
  <BaseIcon
    :size="size"
    :color="color"
    :strokeColor="strokeColor"
    :class="cssClass"
    :style="style"
    :viewBox="viewBox"
  >
    <path
      :fill="color"
      d="M23.023 17.093c-0.033-3.259 2.657-4.822 2.777-4.901-1.512-2.211-3.867-2.514-4.705-2.548-2.002-0.204-3.91 1.18-4.926 1.18-1.014 0-2.583-1.15-4.244-1.121-2.185 0.033-4.199 1.271-5.323 3.227-2.269 3.936-0.58 9.769 1.631 12.963 1.081 1.561 2.37 3.318 4.061 3.254 1.63-0.064 2.245-1.055 4.215-1.055s2.524 1.055 4.248 1.021c1.753-0.032 2.864-1.591 3.936-3.159 1.24-1.814 1.751-3.57 1.782-3.659-0.038-0.017-3.416-1.312-3.451-5.202zM19.783 7.53c0.897-1.089 1.504-2.602 1.34-4.108-1.294 0.053-2.861 0.86-3.79 1.948-0.832 0.965-1.561 2.502-1.365 3.981 1.444 0.112 2.916-0.734 3.816-1.821z"
    ></path>
  </BaseIcon>
</template>
