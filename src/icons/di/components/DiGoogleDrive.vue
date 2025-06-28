<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiGoogleDrive",
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
      d="M12.649 20.427h-0.126l-0.061 0.109-3.245 5.675h14.773l0.061-0.109 3.246-5.674h-0.373zM20.573 19.075l0.062 0.108h0.126l6.536-0.028-0.187-0.322-7.199-12.471-0.126 0-6.537 0.027 0.187 0.322zM15.445 12.789l-0.063-0.109-3.292-5.646-0.186 0.322-7.201 12.47 0.064 0.109 3.292 5.648 0.186-0.323 7.138-12.363z"
    ></path>
  </BaseIcon>
</template>
