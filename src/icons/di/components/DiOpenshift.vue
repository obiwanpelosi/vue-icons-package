<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiOpenshift",
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
      d="M11.838 14.851l-3.895 1.417c0.050 0.624 0.158 1.241 0.309 1.846l3.7-1.347c-0.12-0.625-0.163-1.27-0.114-1.916z"
    ></path>
    <path
      :fill="color"
      d="M29.050 10.545c-0.272-0.56-0.586-1.102-0.95-1.612l-3.894 1.417c0.453 0.464 0.833 0.985 1.144 1.542l3.7-1.347z"
    ></path>
    <path
      :fill="color"
      d="M20.482 9.442c0.81 0.378 1.512 0.894 2.104 1.498l3.894-1.417c-1.079-1.513-2.548-2.778-4.348-3.618-5.567-2.596-12.208-0.179-14.804 5.387-0.84 1.801-1.152 3.715-1.006 5.567l3.895-1.417c0.065-0.844 0.271-1.689 0.648-2.5 1.687-3.617 6.001-5.186 9.617-3.5z"
    ></path>
    <path
      :fill="color"
      d="M8.494 18.026l-3.7 1.348c0.34 1.349 0.93 2.631 1.74 3.772l3.886-1.414c-0.997-1.025-1.661-2.321-1.926-3.705z"
    ></path>
    <path
      :fill="color"
      d="M24.635 16.558c-0.062 0.843-0.275 1.689-0.654 2.5-1.687 3.617-6.001 5.186-9.617 3.5-0.811-0.379-1.518-0.89-2.108-1.496l-3.886 1.415c1.076 1.513 2.544 2.779 4.345 3.619 5.567 2.595 12.207 0.178 14.803-5.388 0.841-1.8 1.151-3.713 1.002-5.564l-3.886 1.414z"
    ></path>
    <path
      :fill="color"
      d="M25.592 11.803l-3.7 1.347c0.687 1.231 1.012 2.649 0.906 4.075l3.886-1.414c-0.111-1.395-0.483-2.756-1.092-4.008z"
    ></path>
  </BaseIcon>
</template>
