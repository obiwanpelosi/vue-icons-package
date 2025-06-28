<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiEnvato",
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
      d="M23.032 5.072c-0.668-0.371-2.581-0.141-4.88 0.57-4.022 2.75-7.417 6.8-7.654 13.305-0.043 0.156-0.44-0.021-0.518-0.069-1.086-2.082-1.517-4.274-0.61-7.437 0.169-0.281-0.384-0.628-0.483-0.529-0.199 0.199-1.029 1.083-1.58 2.040-2.732 4.74-0.946 10.813 3.835 13.47 4.779 2.662 10.814 0.945 13.475-3.836 3.078-5.518 0.219-16.506-1.585-17.514z"
    ></path>
  </BaseIcon>
</template>
