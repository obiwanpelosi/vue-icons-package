<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgMoveTask',
      components: {
        BaseIcon,
      },
      props: {
        size: {
          type: String,
          default: '1em'
        },
        color: {
          type: String,
          default: 'currentColor'
        },
        strokeColor: {
          type: String,
          default: "",
        },
        class: {
          type: String,
          default: ''
        },
        style: {
          type: Object as PropType<Record<string, string | number>>,
          default: () => ({})
        },
        viewBox: {
          type: String,
          default: '0 0 24 24'
        }
      },
      computed: {
        cssClass() {
          return this.class ? this.class : "";
        },
      },
    })
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
        <path d="M18.9641 7H10.9641V9H18.9641V7Z" fill="currentColor" />
  <path d="M6 8.82864V15.1714L9.9642 12L6 8.82864Z" fill="currentColor" />
  <path d="M18.9641 11H10.9641V13H18.9641V11Z" fill="currentColor" />
  <path d="M10.9641 15H18.9641V17H10.9641V15Z" fill="currentColor" />
      </BaseIcon>
    </template>