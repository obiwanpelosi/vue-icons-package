<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiJqueryUiLogo",
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
      d="M24.81 6.334h-17.621c-1.391 0-2.517 1.114-2.517 2.488v7.464c0 5.495 4.508 9.951 10.069 9.951h2.518c5.561 0 10.069-4.456 10.069-9.951v-7.464c0-1.374-1.127-2.488-2.517-2.488zM16 22.506c-4.171 0-7.552-3.342-7.552-7.464v-3.732h3.776v3.732c0 2.061 1.69 3.732 3.776 3.732s3.775-1.671 3.775-3.732h3.776c0 4.122-3.381 7.464-7.552 7.464zM23.489 13.798l-3.65-0.933 0.881-3.608 3.713 0.933-0.944 3.607z"
    ></path>
  </BaseIcon>
</template>
