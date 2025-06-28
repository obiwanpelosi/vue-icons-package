<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiErlang",
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
      default: "0 0 34 32",
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
      d="M6.673 25.45c-2.318-2.456-3.674-5.849-3.671-9.898-0.003-3.58 1.122-6.658 3.056-9l-0.003 0.001h-4.065v18.897l4.683-0z"
    ></path>
    <path
      :fill="color"
      d="M28.081 25.452c0.999-1.069 1.893-2.329 2.704-3.769l-4.499-2.25c-1.58 2.569-3.891 4.933-7.086 4.949-4.651-0.016-6.478-3.992-6.468-9.111h17.378c0.023-0.578 0.023-0.847 0-1.125 0.113-3.045-0.694-5.605-2.162-7.598l-0.008 0.006h3.913v18.897l-3.773 0.001z"
    ></path>
    <path
      :fill="color"
      d="M13.013 10.884c0.192-2.317 2.020-3.876 4.162-3.881 2.157 0.005 3.715 1.563 3.768 3.881h-7.93z"
    ></path>
  </BaseIcon>
</template>
