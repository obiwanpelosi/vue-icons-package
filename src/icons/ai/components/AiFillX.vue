<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "AiFillX",
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
      default: "#FFF",
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
      default: "0 0 1024 1024",
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
    <g
      fill="none"
      fillRule="evenodd"
      stroke="none"
      stroke-width="1"
      transform="translate(112 112)"
      ><path
        :fill="color"
        d="M711.111 800H88.89C39.8 800 0 760.2 0 711.111V88.89C0 39.8 39.8 0 88.889 0H711.11C760.2 0 800 39.8 800 88.889V711.11C800 760.2 760.2 800 711.111 800" /><path
        :fill="strokeColor || color"
        fillRule="nonzero"
        d="M628 623H484.942L174 179h143.058zm-126.012-37.651h56.96L300.013 216.65h-56.96z" /><path
        :fill="strokeColor || color"
        fillRule="nonzero"
        d="M219.296885 623 379 437.732409 358.114212 410 174 623z" /><path
        :fill="strokeColor || color"
        fillRule="nonzero"
        d="M409 348.387347 429.212986 377 603 177 558.330417 177z"
    /></g>
  </BaseIcon>
</template>
