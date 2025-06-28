<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiMarkdown",
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
      d="M25.674 9.221h-19.348c-0.899 0-1.63 0.731-1.63 1.63v10.869c0 0.899 0.731 1.63 1.63 1.63h19.348c0.899 0 1.63-0.731 1.63-1.63v-10.869c0-0.899-0.731-1.63-1.63-1.63zM17.413 20.522l-2.826 0.003v-4.239l-2.12 2.717-2.12-2.717v4.239h-2.826v-8.478h2.826l2.12 2.826 2.12-2.826 2.826-0.003v8.478zM21.632 21.229l-3.512-4.943h2.119v-4.239h2.826v4.239h2.119l-3.553 4.943z"
    ></path>
  </BaseIcon>
</template>
