<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiUnitySmall",
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
      d="M22.307 5.376c-1.226 0.312-3.254 0.802-4.502 1.137l-2.295 0.579-0.669 1.181-0.668 1.204h-2.786l-6.686 6.686 6.686 6.686h2.741l0.691 1.204c0.379 0.669 0.847 1.27 1.070 1.337 0.379 0.111 3.254 0.892 7.087 1.916 0.958 0.245 1.76 0.424 1.783 0.401 0.044-0.044 0.379-1.226 0.758-2.63s0.936-3.454 1.226-4.547l0.535-1.961-0.646-1.115c-0.357-0.602-0.646-1.181-0.646-1.292s0.29-0.713 0.669-1.315l0.646-1.114-0.468-1.627c-0.914-3.253-1.738-5.906-2.006-6.574l-0.29-0.669-2.229 0.513zM21.259 8.362c-0.044 0.089-0.913 1.649-1.961 3.432l-1.894 3.254h-3.989c-2.206 0-3.945-0.044-3.9-0.111 0.067-0.045 1.204-1.248 2.496-2.652 2.006-2.139 2.541-2.563 3.232-2.697 0.446-0.067 1.828-0.424 3.053-0.758 2.451-0.669 3.075-0.758 2.964-0.468zM23.733 10.19c0.111 0.401 0.535 1.916 0.936 3.365l0.713 2.652-0.624 2.251c-0.334 1.248-0.758 2.808-0.936 3.454-0.178 0.668-0.423 1.114-0.512 1.003-0.089-0.089-1.003-1.605-2.006-3.365-1.226-2.14-1.783-3.298-1.671-3.566 0.267-0.735 3.566-6.486 3.722-6.508 0.067 0 0.245 0.334 0.379 0.713zM18.362 19.059c2.362 3.967 3.008 5.148 2.897 5.237-0.044 0.044-1.604-0.312-3.454-0.78l-3.365-0.891-2.429-2.474c-1.315-1.36-2.452-2.563-2.474-2.674-0.045-0.134 1.449-0.178 3.878-0.156l3.967 0.067 0.981 1.671z"
    ></path>
  </BaseIcon>
</template>
