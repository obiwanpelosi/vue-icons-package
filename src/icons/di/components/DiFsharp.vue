<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiFsharp",
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
      default: "0 0 27 32",
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
      d="M6.789 10.152l-6.114 6.12 12.262 12.262v-6.131l-6.131-6.131 6.131-6.131-0.011-3.054-0.016-3.049-6.12 6.114zM10.73 14.099l-2.173 2.173 4.379 4.379v-4.368c0-2.398-0.005-4.363-0.016-4.363-0.005 0-0.991 0.98-2.19 2.179zM20.178 22.419l6.114-6.12-12.262-12.262v6.131l6.131 6.131-6.131 6.131 0.011 3.054 0.016 3.049 6.12-6.114z"
    ></path>
  </BaseIcon>
</template>
