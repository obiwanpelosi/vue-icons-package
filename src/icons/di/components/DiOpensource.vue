<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiOpensource",
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
      d="M16 5.559c-6.118 0-11.078 4.96-11.078 11.079 0 4.749 2.989 8.799 7.188 10.374l2.553-6.808c-1.444-0.541-2.471-1.934-2.471-3.566 0-2.103 1.705-3.808 3.808-3.808s3.808 1.705 3.808 3.808c0 1.633-1.028 3.025-2.471 3.566l2.553 6.808c4.199-1.575 7.188-5.625 7.188-10.374-0-6.119-4.96-11.079-11.079-11.079z"
    ></path>
  </BaseIcon>
</template>
