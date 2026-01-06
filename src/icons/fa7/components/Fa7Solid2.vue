<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Solid2',
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
        <path fill="currentColor" d="M48 64c0-17.7 14.3-32 32-32l171 0c60.2 0 109 48.8 109 109 0 43.8-26.2 83.3-66.4 100.4l-139.1 59C119 315.4 96 350.2 96 388.7l0 27.3 224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-59.3c0-64.2 38.4-122.2 97.5-147.3l139.1-59c16.6-7.1 27.4-23.4 27.4-41.4 0-24.9-20.2-45-45-45L80 96C62.3 96 48 81.7 48 64z"/>
      </BaseIcon>
    </template>