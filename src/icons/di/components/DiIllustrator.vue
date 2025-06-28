<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiIllustrator",
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
      default: "0 0 34 32",
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
      d="M21.66 10.97c0.695 0 1.264-0.563 1.264-1.253s-0.569-1.253-1.264-1.253c-0.695 0-1.264 0.563-1.264 1.253 0 0.695 0.563 1.253 1.264 1.253z"
    ></path>
    <path :fill="color" d="M20.425 12.067h2.442v9.183h-2.442v-9.183z"></path>
    <path
      :fill="color"
      d="M12.655 18.171h3.304l0.893 3.076h2.501l-3.632-12.066h-3.036v1.191l-3.185 10.875h2.262l0.893-3.076zM14.292 11.328l1.221 4.733h-2.441l1.22-4.733z"
    ></path>
    <path
      :fill="color"
      d="M3.002 2.316v27.007h27.582v-27.007h-27.582zM28.516 27.197h-23.406v-22.755h23.406l-0 22.755z"
    ></path>
  </BaseIcon>
</template>
