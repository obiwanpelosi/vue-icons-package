<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiDropbox",
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
      d="M4.79 17.467l6.595 4.304 4.616-3.849-6.65-4.104zM11.385 5.865l-6.595 4.301 4.56 3.651 6.65-4.105zM27.21 10.166l-6.595-4.301-4.615 3.848 6.649 4.105zM16 17.922l4.615 3.849 6.595-4.304-4.56-3.65zM16.014 18.75l-4.629 3.839-1.981-1.294v1.451l6.609 3.961 6.609-3.961v-1.451l-1.981 1.294z"
    ></path>
  </BaseIcon>
</template>
