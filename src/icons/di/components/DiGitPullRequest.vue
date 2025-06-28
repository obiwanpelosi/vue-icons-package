<script lang="ts">
import { defineComponent, PropType } from "vue";
import BaseIcon from "../../../BaseIcon.vue";

export default defineComponent({
  name: "DiGitPullRequest",
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
      d="M9.169 5.186c-1.885 0-3.415 1.53-3.415 3.415 0 1.26 0.691 2.35 1.708 2.943v11.192c-1.016 0.592-1.708 1.681-1.708 2.942 0 1.884 1.53 3.415 3.415 3.415s3.415-1.531 3.415-3.415c0-1.261-0.69-2.35-1.708-2.942v-11.192c1.018-0.593 1.708-1.683 1.708-2.943-0-1.885-1.53-3.415-3.415-3.415zM9.169 27.385c-0.942 0-1.708-0.764-1.708-1.708 0-0.942 0.765-1.708 1.708-1.708 0.945 0 1.708 0.765 1.708 1.708 0 0.944-0.763 1.708-1.708 1.708zM9.169 10.309c-0.942 0-1.708-0.763-1.708-1.708s0.765-1.708 1.708-1.708c0.945 0 1.708 0.763 1.708 1.708s-0.763 1.708-1.708 1.708zM24.538 22.736v-10.72c0-5.136-5.123-5.123-5.123-5.123h-1.708v-3.415l-5.123 5.123 5.123 5.123v-3.415c0 0 0.712 0 1.708 0 1.506 0 1.708 1.708 1.708 1.708v10.719c-1.017 0.592-1.708 1.679-1.708 2.942 0 1.884 1.531 3.415 3.415 3.415s3.415-1.531 3.415-3.415c0-1.261-0.691-2.35-1.708-2.942zM22.831 27.385c-0.942 0-1.708-0.764-1.708-1.708 0-0.942 0.765-1.708 1.708-1.708 0.944 0 1.708 0.765 1.708 1.708 0 0.944-0.764 1.708-1.708 1.708z"
    ></path>
  </BaseIcon>
</template>
