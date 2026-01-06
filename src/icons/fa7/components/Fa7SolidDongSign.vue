<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidDongSign',
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
        <path fill="currentColor" d="M288-16c-17.7 0-32 14.3-32 32l0 32-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 0 72.2c-22.9-15.3-50.4-24.2-80-24.2-79.5 0-144 64.5-144 144S96.5 432 176 432c30 0 57.8-9.1 80.8-24.8 3.3 14.2 16 24.8 31.2 24.8 17.7 0 32-14.3 32-32l0-304 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-32c0-17.7-14.3-32-32-32zM96 288a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 464z"/>
      </BaseIcon>
    </template>