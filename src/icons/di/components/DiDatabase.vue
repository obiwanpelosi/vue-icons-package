<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiDatabase",
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
      d="M16 27.534c-5.323 0-9.641-1.44-9.641-3.214 0-0.97 0-2.031 0-3.214 0-0.279 0.14-0.545 0.341-0.803 1.075 1.384 4.813 2.41 9.301 2.41s8.226-1.026 9.301-2.41c0.201 0.259 0.34 0.524 0.34 0.803 0 0.931 0 1.918 0 3.214 0 1.773-4.318 3.214-9.641 3.214zM16 21.106c-5.323 0-9.641-1.441-9.641-3.214 0-0.97 0-2.030 0-3.214 0-0.17 0.064-0.336 0.151-0.5v0c0.049-0.103 0.113-0.204 0.19-0.304 1.075 1.383 4.813 2.41 9.301 2.41s8.226-1.027 9.301-2.41c0.077 0.1 0.141 0.201 0.19 0.304v0c0.086 0.164 0.151 0.33 0.151 0.5 0 0.931 0 1.917 0 3.214 0 1.773-4.318 3.214-9.641 3.214zM16 14.679c-5.323 0-9.641-1.44-9.641-3.214 0-0.508 0-1.044 0-1.607 0-0.511 0-1.041 0-1.607 0-1.774 4.318-3.214 9.641-3.214s9.641 1.44 9.641 3.214c0 0.501 0 1.033 0 1.607 0 0.492 0 1.011 0 1.607 0 1.774-4.318 3.214-9.641 3.214zM16 6.645c-3.55 0-6.427 0.718-6.427 1.607s2.878 1.607 6.427 1.607c3.55 0 6.427-0.718 6.427-1.607s-2.878-1.607-6.427-1.607z"
    ></path>
  </BaseIcon>
</template>
