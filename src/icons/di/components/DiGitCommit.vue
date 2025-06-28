<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiGitCommit",
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
      d="M22.161 14.689c-0.711-2.75-3.188-4.791-6.161-4.791s-5.449 2.041-6.161 4.791h-5.018v3.194h5.018c0.712 2.751 3.19 4.791 6.161 4.791s5.45-2.040 6.161-4.791h5.019v-3.194h-5.019zM16 19.48c-1.763 0-3.194-1.432-3.194-3.194s1.431-3.194 3.194-3.194c1.762 0 3.194 1.431 3.194 3.194s-1.432 3.194-3.194 3.194z"
    ></path>
  </BaseIcon>
</template>
