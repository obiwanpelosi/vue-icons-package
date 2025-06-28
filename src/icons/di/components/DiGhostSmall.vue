<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiGhostSmall",
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
      d="M4.859 7.401v2.115h13.256v-4.231h-13.256v2.115zM22.91 7.401v2.115h4.231v-4.231h-4.231v2.115zM4.859 16.427v2.115h22.282v-4.231h-22.282v2.115zM4.859 25.311v1.974h8.744v-3.949h-8.744v1.975zM18.398 25.311v1.974h8.744v-3.949h-8.744v1.975z"
    ></path>
  </BaseIcon>
</template>
