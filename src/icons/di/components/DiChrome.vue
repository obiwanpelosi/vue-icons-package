<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiChrome",
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
      d="M20.206 16.286c0 2.323-1.883 4.206-4.206 4.206s-4.206-1.883-4.206-4.206c0-2.323 1.883-4.206 4.206-4.206s4.206 1.883 4.206 4.206zM15.975 11.274v-0h10.164c-1.848-3.731-5.694-6.296-10.139-6.296-3.599 0-6.804 1.681-8.876 4.301l3.878 6.631c0.192-2.584 2.343-4.622 4.973-4.635zM16 21.297c-2.169 0-4.016-1.378-4.714-3.306l-4.68-8.004c-1.209 1.8-1.915 3.966-1.915 6.297 0 5.692 4.206 10.401 9.679 11.191l3.901-6.723c-0.682 0.348-1.454 0.544-2.272 0.544zM26.5 12.080h-7.773c1.376 0.893 2.285 2.443 2.285 4.206 0 0.867-0.22 1.682-0.607 2.393l0.003 0.002-5.158 8.888c0.248 0.016 0.498 0.025 0.751 0.025 6.245 0 11.308-5.063 11.308-11.308 0-1.486-0.287-2.906-0.809-4.206z"
    ></path>
  </BaseIcon>
</template>
