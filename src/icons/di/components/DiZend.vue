<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiZend",
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
      d="M15.334 14.023c0 0 0-2.972 2.972-2.972h8.917c0 0 0 2.972-2.972 2.972h-8.917zM15.334 17.821c0 0 0-2.972 2.972-2.972h4.459c0 0 0 2.972-2.972 2.972h-4.459zM15.334 21.619c0 0 0-2.972 2.972-2.972h1.486c0 0 0 2.972-2.972 2.972h-1.486zM14.336 19.3v2.371h-9.559l6.158-8.399h-5.286v-2.371h9.972l-6.129 8.4z"
    ></path>
  </BaseIcon>
</template>
