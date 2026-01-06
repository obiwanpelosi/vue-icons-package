<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Digg',
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
        <path fill="currentColor" d="M81.7 172.3l-81.7 0 0 174.4 132.7 0 0-250.7-51 0 0 76.3zm0 133.4l-30.8 0 0-92.3 30.8 0 0 92.3zM378.9 172.3l0 174.4 81.8 0 0 28.5-81.8 0 0 40.8 133.1 0 0-243.7-133.1 0zm81.8 133.4l-30.8 0 0-92.3 30.8 0 0 92.3zm-235.6 41l82.1 0 0 28.5-82.1 0 0 40.8 133.3 0 0-243.7-133.3 0 0 174.4zm51.2-133.3l30.8 0 0 92.3-30.8 0 0-92.3zM153.3 96l51.3 0 0 51-51.3 0 0-51zm0 76.3l51.3 0 0 174.4-51.3 0 0-174.4z"/>
      </BaseIcon>
    </template>