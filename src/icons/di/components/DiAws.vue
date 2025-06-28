<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiAws",
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
    <path :fill="color" d="M10.871 28.625l-3.22-1.155v-4.72l3.22 1.097z"></path>
    <path :fill="color" d="M11.461 28.625l3.22-1.155v-4.72l-3.22 1.097z"></path>
    <path
      :fill="color"
      d="M7.981 22.396l3.259-0.917 3.022 0.974-3.022 1.026z"
    ></path>
    <path :fill="color" d="M7.037 22.031l-3.22-1.155v-4.72l3.22 1.097z"></path>
    <path :fill="color" d="M7.628 22.031l3.22-1.155v-4.72l-3.22 1.097z"></path>
    <path
      :fill="color"
      d="M4.148 15.802l3.259-0.917 3.022 0.975-3.022 1.026z"
    ></path>
    <path
      :fill="color"
      d="M14.551 22.031l-3.221-1.155v-4.72l3.221 1.097z"
    ></path>
    <path :fill="color" d="M15.142 22.031l3.22-1.155v-4.72l-3.22 1.097z"></path>
    <path
      :fill="color"
      d="M11.662 15.802l3.259-0.917 3.022 0.975-3.022 1.026z"
    ></path>
    <path :fill="color" d="M18.385 15.436l-3.22-1.155v-4.72l3.22 1.097z"></path>
    <path :fill="color" d="M18.976 15.436l3.22-1.155v-4.72l-3.22 1.097z"></path>
    <path
      :fill="color"
      d="M15.496 9.208l3.259-0.917 3.022 0.974-3.022 1.026z"
    ></path>
    <path :fill="color" d="M25.899 15.436l-3.22-1.155v-4.72l3.22 1.097z"></path>
    <path
      :fill="color"
      d="M26.49 15.436l3.221-1.155v-4.72l-3.221 1.097z"
    ></path>
    <path
      :fill="color"
      d="M23.010 9.208l3.259-0.917 3.022 0.974-3.022 1.026z"
    ></path>
  </BaseIcon>
</template>
