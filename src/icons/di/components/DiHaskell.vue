<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiHaskell",
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
      d="M4.619 24.32l5.356-8.034-5.356-8.034h4.017l5.356 8.034-5.356 8.034h-4.017zM9.975 24.32l5.356-8.034-5.356-8.034h4.017l10.712 16.068h-4.017l-3.347-5.021-3.348 5.021h-4.017zM27.381 19.633h-4.463l-1.785-2.678 6.249-0zM27.381 15.616h-7.141l-1.785-2.678 8.927-0z"
    ></path>
  </BaseIcon>
</template>
