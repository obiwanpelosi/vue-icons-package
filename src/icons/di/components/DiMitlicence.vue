<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiMitlicence",
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
      d="M16 5.308c-6.081-0-11.011 4.915-11.011 10.977s4.93 10.977 11.011 10.977 11.011-4.915 11.011-10.977v-0c0-6.063-4.93-10.977-11.011-10.977zM26.105 16.286c0 5.564-4.524 10.074-10.105 10.074s-10.105-4.51-10.105-10.074c0-5.564 4.524-10.074 10.105-10.074s10.105 4.51 10.105 10.074v0zM8.462 20.664v-8.607h2.064l1.239 5.871 1.225-5.871h2.069v8.607h-1.281v-6.775l-1.356 6.775h-1.328l-1.351-6.775v6.775h-1.281zM16.387 20.664v-8.607h1.379v8.607h-1.379zM20.617 20.664v-7.151h-2.027v-1.456h5.428v1.456h-2.022v7.151h-1.379z"
    ></path>
  </BaseIcon>
</template>
