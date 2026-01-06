<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Sith',
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
        <path fill="currentColor" d="M0 32l69.7 118.8-58.9-11.5 69.8 91c-3 17-3 34.4 0 51.4l-69.8 91 58.9-11.5-69.7 118.8 118.8-69.7-11.5 58.9 91-69.8c17 3 34.5 3 51.5 0l91 69.8-11.5-58.9 118.7 69.7-69.7-118.8 58.9 11.5-69.8-91c3-17 3-34.4 0-51.4l69.8-91-58.9 11.5 69.7-118.8-118.7 69.7 11.5-58.9-91.1 69.9c-8.5-1.5-17.1-2.3-25.7-2.3s-17.2 .8-25.7 2.3L107.2 42.8 118.8 101.7 0 32zM224 380.2a124.2 124.2 0 1 1 0-248.4 124.2 124.2 0 1 1 0 248.4zm0-211.8a87.6 87.6 0 1 0 0 175.1 87.6 87.6 0 1 0 0-175.1z"/>
      </BaseIcon>
    </template>