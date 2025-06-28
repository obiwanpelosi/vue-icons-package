<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiBackbone",
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
      d="M16 9.875l-9.539-5.438v23.698l9.539-5.438 9.539 5.438v-23.698l-9.539 5.438zM11.248 16.286l4.752-2.709 4.752 2.709-4.752 2.709-4.752-2.709zM9.618 9.643l3.399 1.938-3.399 1.938v-3.876zM9.618 19.053l3.145 1.792-3.145 1.793v-3.585zM22.382 22.638l-3.145-1.793 3.145-1.793v3.585zM18.982 11.581l3.399-1.938v3.876l-3.399-1.938z"
    ></path>
  </BaseIcon>
</template>
