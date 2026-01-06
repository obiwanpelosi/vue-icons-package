<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidNairaSign',
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
          default: '0 0 448 512'
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
        <path fill="currentColor" d="M122.6 46.3c-7.8-11.7-22.4-17-35.9-12.9S64 49.9 64 64l0 192-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 89.5 0 107.8 161.8c7.8 11.7 22.4 17 35.9 12.9S384 462.1 384 448l0-144 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-192c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 192-57.5 0-139.8-209.7zM294.5 304l25.5 0 0 38.3-25.5-38.3zM185.5 256l-57.5 0 0-86.3 57.5 86.3z"/>
      </BaseIcon>
    </template>