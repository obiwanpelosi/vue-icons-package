<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiStackoverflow",
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
      d="M6.080 23.835v5.32h16.767v-10.673l-0.871 0.097-0.903 0.097-0.097 4.417-0.097 4.45h-13.188v-9.028h-1.612v5.32zM8.982 24.641v0.967h10.318v-1.935h-10.318v0.967zM9.137 20.832l-0.105 0.962 10.257 1.118 0.21-1.923-10.257-1.118-0.105 0.962zM9.908 16.282l-0.251 0.934 9.965 2.676 0.502-1.868-9.965-2.676-0.251 0.934zM12.024 10.978l-0.515 0.819 8.734 5.494 1.030-1.638-8.734-5.494-0.515 0.819zM16.965 6.038l-0.797 0.549 5.853 8.498 1.593-1.097-5.853-8.498-0.797 0.549zM23.413 3.549l-0.951 0.177 1.893 10.143 1.902-0.355-1.892-10.143-0.951 0.177z"
    ></path>
  </BaseIcon>
</template>
