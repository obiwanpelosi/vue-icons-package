<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Dashcube',
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
        <path fill="currentColor" d="M326.9 104l-216.2 0c-51.1 0-91.2 43.3-91.2 93.5l0 229.5c0 50.5 40.1 85 91.2 85l227.2 0c51.1 0 91.2-34.5 91.2-85l0-427-102.2 104zM154.2 416.5c-17.7 0-32.4-15.1-32.4-32.8l0-142.9c0-17.7 14.7-32.5 32.4-32.5l140.7 0c17.7 0 32 14.8 32 32.5l0 123.5 51.1 52.3-223.8 0 0-.1z"/>
      </BaseIcon>
    </template>