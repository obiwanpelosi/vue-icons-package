<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiSublime",
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
      d="M2.944 16.286v10.539h21.079v-21.079h-21.079v10.539zM14.895 11.078c0.228 0.056 0.448 0.124 0.655 0.203 0.452 0.173 1.065 0.378 1.476 0.789 0.166 0.166 0.146 0.215-0.234 0.761-0.224 0.312-0.439 0.615-0.478 0.664-0.049 0.049-0.171-0.039-0.566-0.224-0.794-0.373-1.522-0.712-2.323-0.712-1.122 0-1.698 0.429-1.698 1.278 0 0.781 0.537 1.132 2.44 1.62 2.508 0.644 3.396 1.493 3.357 3.23-0.025 1.104-0.863 2.233-1.841 2.661-1.11 0.486-2.413 0.418-3.55 0.066-0.623-0.193-1.272-0.455-1.839-0.779-0.211-0.12-0.5-0.301-0.68-0.481-0.197-0.197-0.096-0.235 0.083-0.462 0.137-0.185 0.381-0.478 0.537-0.654l0.273-0.332 0.654 0.439c0.947 0.634 1.62 0.859 2.576 0.869 0.947 0.010 1.425-0.185 1.776-0.703 0.185-0.264 0.224-0.429 0.176-0.732-0.068-0.585-0.527-0.956-1.591-1.269-2.342-0.703-2.752-0.849-3.123-1.113-0.468-0.342-0.839-0.81-0.995-1.269-0.156-0.468-0.137-1.454 0.049-1.981 0.689-1.958 3.046-2.314 4.866-1.87z"
    ></path>
  </BaseIcon>
</template>
