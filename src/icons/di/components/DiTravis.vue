<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiTravis",
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
      d="M11.392 9.374h4.096v13.12h-1.536v2.24h6.080v-2.496h-1.92v-13.056h4.352v1.92h1.984v-3.904h-15.296v3.904h2.24zM29.263 2.718h-24.848c-0.433 0-0.832 0.321-0.832 0.749v24.845c0 0.428 0.398 0.774 0.832 0.774h24.848c0.433 0 0.753-0.347 0.753-0.774v-24.845c0-0.428-0.319-0.749-0.753-0.749zM25.728 12.382h-4.544v-1.92h-1.792v10.496h1.92v5.056h-8.64v-4.8h1.536v-10.56h-1.536v1.728h-4.8v-6.464h17.856v6.464z"
    ></path>
  </BaseIcon>
</template>
