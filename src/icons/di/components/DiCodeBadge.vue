<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiCodeBadge",
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
      d="M21.652 3.098h-16.955v26.375h22.607v-20.723l-5.652-5.652zM25.42 27.589h-18.839v-22.607h13.188l5.652 5.652v16.955zM12.269 11.851l-3.644 4.434 3.644 4.434 0.862-1.417-2.455-3.017 2.455-3.017zM13.863 20.614h1.599l2.542-8.681h-1.599zM19.731 11.851l-0.862 1.418 2.455 3.017-2.455 3.017 0.862 1.418 3.644-4.434z"
    ></path>
  </BaseIcon>
</template>
