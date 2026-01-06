<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Solid9',
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
          default: '0 0 384 512'
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
        <path fill="currentColor" d="M208 320c29.6 0 57.1-8.9 80-24.2l0 32.2c0 48.6-39.4 88-88 88L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l104 0c83.9 0 152-68.1 152-152l0-152.1C351.9 96.4 287.5 32 208 32l-48 0C80.5 32 16 96.5 16 176S80.5 320 160 320l48 0zm80-144c0 44.2-35.8 80-80 80l-48 0c-44.2 0-80-35.8-80-80s35.8-80 80-80l48 0c44.2 0 80 35.8 80 80z"/>
      </BaseIcon>
    </template>