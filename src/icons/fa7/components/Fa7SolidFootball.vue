<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidFootball',
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
        <path fill="currentColor" d="M261.1 22.6c-89 18-150.5 63.4-190 123.9-23.3 35.6-38.1 75.3-46.7 115.5L251.9 489.4c89-18 150.5-63.4 190.1-123.9 23.3-35.6 38.1-75.3 46.7-115.5L261.1 22.6zm236 168.1c3.2-42.3 .7-83.3-4.8-118.7-4.4-27.8-26.8-48-53.1-51.6-43-5.9-82.2-7.5-117.8-5.4L497.1 190.6zM191.7 497.1L15.9 321.4c-3.2 42.3-.7 83.3 4.8 118.7 4.4 27.8 26.8 48 53.1 51.6 43 5.9 82.2 7.5 117.8 5.4zM271.5 143c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9zm-64 64c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9zm-64 64c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9z"/>
      </BaseIcon>
    </template>