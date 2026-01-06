<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7GooglePlusG',
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
        <path fill="currentColor" d="M386.3 228.5c1.8 9.7 3.1 19.4 3.1 32 0 109.8-73.6 187.5-184.4 187.5-106.1 0-192-85.9-192-192S98.9 64 205 64c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3S139.5 377.3 205 377.3c76 0 104.5-54.7 109-82.8l-109 0 0-66 181.3 0 0 0zm185.4 6.4l0-55.7-56 0 0 55.7-55.7 0 0 56 55.7 0 0 55.7 56 0 0-55.7 55.7 0 0-56-55.7 0z"/>
      </BaseIcon>
    </template>