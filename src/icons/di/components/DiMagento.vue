<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiMagento",
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
      d="M26.941 10.161l-10.934-6.753-10.966 6.764v12.228l2.924 1.743v-12.287l8.041-4.992 8.027 4.992v12.317l2.924-1.772v-12.228zM17.595 15.458v10.073l-1.588 1.004-1.602-1.004v-14.325l-3.574 2.215v12.524l5.176 3.22 5.162-3.22v-12.524l-3.574-2.215z"
    ></path>
  </BaseIcon>
</template>
