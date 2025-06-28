<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseIcon",
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
      type: Object,
      default: () => ({}),
      required: false,
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
  },
  computed: {
    iconClasses() {
      return this.class;
    },
  },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :class="iconClasses"
    :fill="color"
    :stroke="strokeColor"
    :style="style"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot />
  </svg>
</template>
