<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiMootoolsBadge",
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
      d="M16.693 5.666c-0.186-0.050-0.381-0.062-0.525 0.071-0.174 0.161-0.031 0.34 0.032 0.504 0.265 0.692 0.526 1.385 0.802 2.072 0.275 0.684 0.027 1.183-0.613 1.406-0.636 0.222-1.239 0.111-1.489-0.649-0.213-0.645-0.392-1.302-0.607-1.946-0.070-0.21-0.010-0.56-0.362-0.553-0.317 0.007-0.469 0.263-0.553 0.546-0.219 0.74-0.413 1.488-0.657 2.22-0.395 1.182-0.387 2.312 0.027 3.522 0.595 1.739 0.689 3.556 0.472 5.399-0.239 2.027-0.665 4.020-0.961 6.036-0.209 1.424 0.874 2.667 2.277 2.646 1.231-0.018 2.232-0.985 2.26-2.231 0.026-1.174 0.033-2.349 0.001-3.523-0.096-3.473 0.242-6.774 2.369-9.774 1.484-2.093 0.059-5.073-2.472-5.746zM14.576 25.809c-0.73-0.014-1.167-0.411-1.184-1.061s0.407-1.111 1.096-1.115c0.633-0.004 1.052 0.382 1.094 1.018 0.046 0.69-0.354 1.071-1.007 1.158z"
    ></path>
  </BaseIcon>
</template>
