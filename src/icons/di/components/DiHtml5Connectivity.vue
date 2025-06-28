<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiHtml5Connectivity",
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
      d="M21.68 20.569h2.801v-6.726l-3.156-3.156-1.981 1.981 2.335 2.336v5.565zM24.488 21.973h-9.771l-2.335-2.336 0.99-0.99 1.929 1.929h3.969l-3.91-3.917 0.998-0.998 3.91 3.91v-3.969l-1.922-1.922 0.983-0.983-4.856-4.878h-9.756l2.794 2.794v0.007h5.795l2.047 2.047-2.993 2.993-2.047-2.047v-1.589h-2.801v2.749l4.848 4.848-1.973 1.973 3.156 3.156h13.74l-2.794-2.779z"
    ></path>
  </BaseIcon>
</template>
