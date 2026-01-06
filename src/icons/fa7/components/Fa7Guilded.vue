<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Guilded',
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
        <path fill="currentColor" d="M443.9 64L5 64c0 103.3 22.2 180.1 43.4 222.4 64.1 127.8 176 161.6 177.3 161.6 55.7-20.5 104.5-56.3 140.6-103.5 25.9-33.9 53.1-87.2 65.9-145.8l-259.9 0c4.1 36.4 22.2 67.9 45.1 86.9l88.6 0c-17 28.2-48.2 54.4-80.5 69.5-31.2-13.3-69.1-46.5-96.5-98.4-26.7-53.8-27.1-105.9-27.1-105.9l336.1 0c4-28.8 5.9-57.9 5.9-86.9z"/>
      </BaseIcon>
    </template>