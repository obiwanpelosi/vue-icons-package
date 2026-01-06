<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidRainbow',
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
        <path fill="currentColor" d="M320 96C178.6 96 64 210.6 64 352l0 64c0 17.7-14.3 32-32 32S0 433.7 0 416l0-64C0 175.3 143.3 32 320 32S640 175.3 640 352l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64C576 210.6 461.4 96 320 96zm0 112c-79.5 0-144 64.5-144 144l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-114.9 93.1-208 208-208s208 93.1 208 208l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-79.5-64.5-144-144-144zM288 352l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-53 43-96 96-96s96 43 96 96l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32z"/>
      </BaseIcon>
    </template>