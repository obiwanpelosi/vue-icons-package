<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiHtml5DeviceAccess",
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
      d="M21.092 10.206l4.59-4.59h-4.919l-4.763 4.763-4.763-4.763h-4.919l4.59 4.59h-6.224v16.749h8.189l3.126-3.127 3.127 3.127h8.189v-16.749h-6.224zM16 18.907l-4.567 4.569h-3.27v-9.792h15.674v9.792h-3.269l-4.568-4.569z"
    ></path>
  </BaseIcon>
</template>
