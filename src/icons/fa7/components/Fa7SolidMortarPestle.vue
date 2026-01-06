<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidMortarPestle',
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
        <path fill="currentColor" d="M504.3 11.1C493.3-1.6 474.5-3.7 461 6.2L252.3 160 397.3 160 502.6 54.6c11.8-11.8 12.6-30.8 1.6-43.5zM32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 82.5 43.4 147.7 123.9 176.2-11.1 13.9-19.4 30.3-23.9 48.1-4.4 17.1 10.4 31.7 28.1 31.7l192 0c17.7 0 32.4-14.6 28.1-31.7-4.5-17.8-12.8-34.1-23.9-48.1 80.5-28.6 123.9-93.7 123.9-176.2 17.7 0 32-14.3 32-32s-14.3-32-32-32L32 192z"/>
      </BaseIcon>
    </template>