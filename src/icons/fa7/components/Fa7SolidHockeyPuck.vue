<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidHockeyPuck',
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
        <path fill="currentColor" d="M256 256C114.6 256 0 213 0 160s114.6-96 256-96 256 43 256 96-114.6 96-256 96zM0 352L0 242.7c16.9 12.3 37 22.2 58.1 30.1 53 19.9 123 31.2 197.9 31.2s144.9-11.3 197.9-31.2c21.2-7.9 41.2-17.8 58.1-30.1L512 352c0 53-114.6 96-256 96S0 405 0 352z"/>
      </BaseIcon>
    </template>