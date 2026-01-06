<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidUmbrellaBeach',
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
        <path fill="currentColor" d="M497.5 341.1c-5.9 16.7-25.3 23-41.1 15.1l-178.2-89.1-1.6 3.2-88.8 177.7 292.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l84.2 0 103.2-206.3 1.6-3.2-165.4-82.7c-15.8-7.9-22.4-27.3-12.5-42 45.9-68.6 124.1-113.8 212.9-113.8 141.4 0 256 114.6 256 256 0 29.8-5.1 58.5-14.5 85.1z"/>
      </BaseIcon>
    </template>