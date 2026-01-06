<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidHandMiddleFinger',
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
        <path fill="currentColor" d="M232 0c-22.1 0-40 17.9-40 40l0 164.2c-8.5-7.6-19.7-12.2-32-12.2-26.5 0-48 21.5-48 48l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-55.7c-2 1.4-3.9 3-5.8 4.5L55 284.8C40.4 297 32 315 32 334L32 372c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1L304 512c70.7 0 128-57.3 128-128l0-96c0-26.5-21.5-48-48-48-12.4 0-23.6 4.7-32.1 12.3-1.9-24.8-22.6-44.3-47.9-44.3-12.3 0-23.5 4.6-32 12.2L272 40c0-22.1-17.9-40-40-40z"/>
      </BaseIcon>
    </template>