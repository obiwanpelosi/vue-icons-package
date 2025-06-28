<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiScala",
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
      d="M8.573 7.307c0 0 14.853-1.485 14.853-3.961v5.941c0 0 0 2.476-14.853 3.961zM8.636 15.229c0 0 14.853-1.485 14.853-3.961v5.941c0 0 0 2.476-14.853 3.961zM8.636 23.151c0 0 14.853-1.485 14.853-3.961v5.941c0 0 0 2.476-14.853 3.961z"
    ></path>
  </BaseIcon>
</template>
