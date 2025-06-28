<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiLaptop',
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
          default: '0 0 24 24'
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
        <g id="Laptop">
    <path d="M21.485,16.155a.992.992,0,0,0-.77-.36h-.33V6.565a2.5,2.5,0,0,0-2.5-2.5H6.115a2.5,2.5,0,0,0-2.5,2.5V15.8h-.34a1,1,0,0,0-.98,1.17l.3,1.73a1.5,1.5,0,0,0,1.48,1.24h15.85a1.5,1.5,0,0,0,1.48-1.24l.3-1.73A.986.986,0,0,0,21.485,16.155ZM4.615,6.565a1.5,1.5,0,0,1,1.5-1.5h11.77a1.5,1.5,0,0,1,1.5,1.5V15.8H4.615Zm15.8,11.96a.494.494,0,0,1-.49.41H4.075a.494.494,0,0,1-.49-.41l-.31-1.73h17.44Z" />
  </g>
      </BaseIcon>
    </template>