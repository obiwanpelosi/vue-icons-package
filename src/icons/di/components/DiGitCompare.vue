<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiGitCompare",
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
      d="M25.453 21.285v-9.89c0-4.739-4.726-4.726-4.726-4.726h-1.575v-3.151l-4.726 4.727 4.726 4.726v-3.151c0 0 0.657 0 1.575 0 1.389 0 1.575 1.575 1.575 1.575v9.89c-0.939 0.546-1.575 1.548-1.575 2.714 0 1.739 1.412 3.151 3.151 3.151s3.151-1.413 3.151-3.151c0-1.163-0.637-2.168-1.575-2.714zM23.878 25.575c-0.869 0-1.576-0.705-1.576-1.575 0-0.869 0.706-1.575 1.576-1.575 0.871 0 1.575 0.706 1.575 1.575 0 0.871-0.705 1.575-1.575 1.575zM6.547 11.287v9.889c0 4.739 4.727 4.727 4.727 4.727h1.575v3.151l4.726-4.726-4.726-4.727v3.151c0 0-0.657 0-1.575 0-1.389 0-1.575-1.575-1.575-1.575v-9.889c0.939-0.547 1.575-1.549 1.575-2.715 0-1.739-1.412-3.151-3.151-3.151s-3.151 1.412-3.151 3.151c0 1.164 0.636 2.168 1.575 2.715zM8.123 10.214c-0.869 0-1.575-0.704-1.575-1.575 0-0.869 0.706-1.575 1.575-1.575 0.872 0 1.575 0.706 1.575 1.575 0 0.872-0.704 1.575-1.575 1.575z"
    ></path>
  </BaseIcon>
</template>
