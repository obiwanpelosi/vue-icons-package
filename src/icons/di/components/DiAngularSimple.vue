<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiAngularSimple",
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
      d="M15.937 11.355l-2.057 4.879h4.433l-2.358-4.924-0.019 0.044zM15.964 4.3l-11.279 3.969 1.782 14.777 9.508 5.226 9.557-5.297 1.782-14.776-11.351-3.899zM20.744 21.849l-1.531-3.545h-6.25l-1.398 3.497-2.601 0.048 6.973-15.513 7.216 15.513h-2.41z"
    ></path>
  </BaseIcon>
</template>
