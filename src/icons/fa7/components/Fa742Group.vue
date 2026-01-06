<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa742Group',
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
          default: '0 0 640 512'
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
        <path fill="currentColor" d="M320 96l0 320c21 0 41.8-4.1 61.2-12.2s37-19.8 51.9-34.7 26.6-32.5 34.7-51.9 12.2-40.2 12.2-61.2-4.1-41.8-12.2-61.2-19.8-37.1-34.7-51.9-32.5-26.6-51.9-34.7-40.2-12.2-61.2-12.2zM0 256L160 416 320 256 160 96 0 256zm480 0c0 21 4.1 41.8 12.2 61.2s19.8 37 34.7 51.9 32.5 26.6 51.9 34.7 40.2 12.2 61.2 12.2l0-320c-42.4 0-83.1 16.9-113.1 46.9S480 213.6 480 256z"/>
      </BaseIcon>
    </template>