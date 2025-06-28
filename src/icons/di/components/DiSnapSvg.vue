<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiSnapSvg",
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
      d="M15.99 25.903l-4.018-1.96 0.005-0.002-0.001-0-4.269 2.082 8.286 4.041 8.299-4.032-4.284-2.122zM7.718 26.036v-4.165l4.108-2.004 4.225 2.084zM20.549 8.896v6.585l-4.593 2.239 4.224 2.103 4.112-2.003v-11.263zM24.293 26.033v0-4.165l-12.831-6.39v-6.585l-3.743-2.339v11.263zM11.45 8.886v-0.001l4.543-2.216 4.544 2.216 3.738-2.336-8.285-4.041-8.283 4.043 3.739 2.337z"
    ></path>
  </BaseIcon>
</template>
