<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Twitch',
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
        <path fill="currentColor" d="M359.4 103.5l-38.6 0 0 109.7 38.6 0 0-109.7zM253.2 103l-38.6 0 0 109.8 38.6 0 0-109.8zM89 0l-96.5 91.4 0 329.2 115.8 0 0 91.4 96.5-91.4 77.3 0 173.8-164.6 0-256-366.9 0zM417.3 237.8l-77.2 73.1-77.2 0-67.6 64 0-64-86.9 0 0-274.3 308.9 0 0 201.2z"/>
      </BaseIcon>
    </template>