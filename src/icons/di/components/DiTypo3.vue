<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiTypo3",
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
      d="M21.311 20.252c-0.311 0.092-0.559 0.123-0.884 0.123-2.662 0-6.573-9.303-6.573-12.4 0-1.141 0.271-1.521 0.652-1.847-3.259 0.38-7.17 1.575-8.419 3.096-0.271 0.38-0.434 0.978-0.434 1.738 0 4.835 5.16 15.806 8.8 15.806 1.684 0 4.523-2.77 6.859-6.517zM19.612 5.803c3.368 0 6.736 0.543 6.736 2.444 0 3.857-2.444 8.528-3.694 8.528-2.227 0-4.997-6.192-4.997-9.288 0-1.412 0.543-1.684 1.955-1.684z"
    ></path>
  </BaseIcon>
</template>
