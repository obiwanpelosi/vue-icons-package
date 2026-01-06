<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Yoast',
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
        <path fill="currentColor" d="M91.3 76l186 0-7 18.9-179 0c-39.7 0-71.9 31.6-71.9 70.3l0 205.4c0 35.4 24.9 70.3 84 70.3l0 19.1-12.1 0C41.2 460 0 419.8 0 370.5L0 165.2C0 115.9 40.7 76 91.3 76zM320.4 20l66.5 0c-143.8 378.1-145.7 398.9-184.7 439.3-20.8 21.6-49.3 31.7-78.3 32.7l0-51.1c49.2-7.7 64.6-49.9 64.6-75.3 0-20.1 .6-12.6-82.1-223.2l61.4 0 50.4 156.6 102.2-279zM448 161.5l0 298.5-214 0c6.6-9.6 10.7-16.3 12.1-19.4l182.5 0 0-279.1c0-32.5-17.1-51.9-48.2-62.9L387.1 81c41.7 13.6 60.9 43.1 60.9 80.5z"/>
      </BaseIcon>
    </template>