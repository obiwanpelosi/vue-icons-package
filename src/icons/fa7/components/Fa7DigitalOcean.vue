<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7DigitalOcean',
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
          default: '0 0 512 512'
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
        <path fill="currentColor" d="M87 481.8l73.7 0 0-73.6-73.7 0 0 73.6zM25.4 346.6l0 61.6 61.6 0 0-61.6-61.6 0zM491.6 176.9C468.6 102.7 409.2 43.6 335 20.3 164.9-32.8 8 93.7 8 255.9l95.8 0c0-101.8 101-180.5 208.1-141.7 39.7 14.3 71.5 46.1 85.8 85.7 39.1 107-39.7 207.8-141.4 208l0 .3-.3 0 0 95.8c162.6 0 288.8-156.8 235.6-327.1zm-235.3 231l0-95.3-95.6 0 0 95.6 95.3 0 0-.3 .3 0z"/>
      </BaseIcon>
    </template>